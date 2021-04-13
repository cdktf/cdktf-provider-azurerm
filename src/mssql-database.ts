// https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlDatabaseConfig extends cdktf.TerraformMetaArguments {
  readonly autoPauseDelayInMinutes?: number;
  readonly collation?: string;
  readonly createMode?: string;
  readonly creationSourceDatabaseId?: string;
  readonly elasticPoolId?: string;
  readonly extendedAuditingPolicy?: MssqlDatabaseExtendedAuditingPolicy[];
  readonly licenseType?: string;
  readonly maxSizeGb?: number;
  readonly minCapacity?: number;
  readonly name: string;
  readonly readReplicaCount?: number;
  readonly readScale?: boolean;
  readonly recoverDatabaseId?: string;
  readonly restoreDroppedDatabaseId?: string;
  readonly restorePointInTime?: string;
  readonly sampleName?: string;
  readonly serverId: string;
  readonly skuName?: string;
  readonly storageAccountType?: string;
  readonly tags?: { [key: string]: string };
  readonly zoneRedundant?: boolean;
  /** long_term_retention_policy block */
  readonly longTermRetentionPolicy?: MssqlDatabaseLongTermRetentionPolicy[];
  /** short_term_retention_policy block */
  readonly shortTermRetentionPolicy?: MssqlDatabaseShortTermRetentionPolicy[];
  /** threat_detection_policy block */
  readonly threatDetectionPolicy?: MssqlDatabaseThreatDetectionPolicy[];
  /** timeouts block */
  readonly timeouts?: MssqlDatabaseTimeouts;
}
export interface MssqlDatabaseExtendedAuditingPolicy {
  readonly logMonitoringEnabled?: boolean;
  readonly retentionInDays?: number;
  readonly storageAccountAccessKey?: string;
  readonly storageAccountAccessKeyIsSecondary?: boolean;
  readonly storageEndpoint?: string;
}

function mssqlDatabaseExtendedAuditingPolicyToTerraform(struct?: MssqlDatabaseExtendedAuditingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_monitoring_enabled: cdktf.booleanToTerraform(struct!.logMonitoringEnabled),
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    storage_account_access_key: cdktf.stringToTerraform(struct!.storageAccountAccessKey),
    storage_account_access_key_is_secondary: cdktf.booleanToTerraform(struct!.storageAccountAccessKeyIsSecondary),
    storage_endpoint: cdktf.stringToTerraform(struct!.storageEndpoint),
  }
}

export interface MssqlDatabaseLongTermRetentionPolicy {
  readonly monthlyRetention?: string;
  readonly weekOfYear?: number;
  readonly weeklyRetention?: string;
  readonly yearlyRetention?: string;
}

function mssqlDatabaseLongTermRetentionPolicyToTerraform(struct?: MssqlDatabaseLongTermRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    monthly_retention: cdktf.stringToTerraform(struct!.monthlyRetention),
    week_of_year: cdktf.numberToTerraform(struct!.weekOfYear),
    weekly_retention: cdktf.stringToTerraform(struct!.weeklyRetention),
    yearly_retention: cdktf.stringToTerraform(struct!.yearlyRetention),
  }
}

export interface MssqlDatabaseShortTermRetentionPolicy {
  readonly retentionDays: number;
}

function mssqlDatabaseShortTermRetentionPolicyToTerraform(struct?: MssqlDatabaseShortTermRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
  }
}

export interface MssqlDatabaseThreatDetectionPolicy {
  readonly disabledAlerts?: string[];
  readonly emailAccountAdmins?: string;
  readonly emailAddresses?: string[];
  readonly retentionDays?: number;
  readonly state?: string;
  readonly storageAccountAccessKey?: string;
  readonly storageEndpoint?: string;
  readonly useServerDefault?: string;
}

function mssqlDatabaseThreatDetectionPolicyToTerraform(struct?: MssqlDatabaseThreatDetectionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disabled_alerts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.disabledAlerts),
    email_account_admins: cdktf.stringToTerraform(struct!.emailAccountAdmins),
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emailAddresses),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
    state: cdktf.stringToTerraform(struct!.state),
    storage_account_access_key: cdktf.stringToTerraform(struct!.storageAccountAccessKey),
    storage_endpoint: cdktf.stringToTerraform(struct!.storageEndpoint),
    use_server_default: cdktf.stringToTerraform(struct!.useServerDefault),
  }
}

export interface MssqlDatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function mssqlDatabaseTimeoutsToTerraform(struct?: MssqlDatabaseTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MssqlDatabase extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MssqlDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoPauseDelayInMinutes = config.autoPauseDelayInMinutes;
    this._collation = config.collation;
    this._createMode = config.createMode;
    this._creationSourceDatabaseId = config.creationSourceDatabaseId;
    this._elasticPoolId = config.elasticPoolId;
    this._extendedAuditingPolicy = config.extendedAuditingPolicy;
    this._licenseType = config.licenseType;
    this._maxSizeGb = config.maxSizeGb;
    this._minCapacity = config.minCapacity;
    this._name = config.name;
    this._readReplicaCount = config.readReplicaCount;
    this._readScale = config.readScale;
    this._recoverDatabaseId = config.recoverDatabaseId;
    this._restoreDroppedDatabaseId = config.restoreDroppedDatabaseId;
    this._restorePointInTime = config.restorePointInTime;
    this._sampleName = config.sampleName;
    this._serverId = config.serverId;
    this._skuName = config.skuName;
    this._storageAccountType = config.storageAccountType;
    this._tags = config.tags;
    this._zoneRedundant = config.zoneRedundant;
    this._longTermRetentionPolicy = config.longTermRetentionPolicy;
    this._shortTermRetentionPolicy = config.shortTermRetentionPolicy;
    this._threatDetectionPolicy = config.threatDetectionPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_pause_delay_in_minutes - computed: true, optional: true, required: false
  private _autoPauseDelayInMinutes?: number;
  public get autoPauseDelayInMinutes() {
    return this.getNumberAttribute('auto_pause_delay_in_minutes');
  }
  public set autoPauseDelayInMinutes(value: number) {
    this._autoPauseDelayInMinutes = value;
  }
  public resetAutoPauseDelayInMinutes() {
    this._autoPauseDelayInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPauseDelayInMinutesInput() {
    return this._autoPauseDelayInMinutes
  }

  // collation - computed: true, optional: true, required: false
  private _collation?: string;
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation
  }

  // create_mode - computed: true, optional: true, required: false
  private _createMode?: string;
  public get createMode() {
    return this.getStringAttribute('create_mode');
  }
  public set createMode(value: string) {
    this._createMode = value;
  }
  public resetCreateMode() {
    this._createMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createModeInput() {
    return this._createMode
  }

  // creation_source_database_id - computed: true, optional: true, required: false
  private _creationSourceDatabaseId?: string;
  public get creationSourceDatabaseId() {
    return this.getStringAttribute('creation_source_database_id');
  }
  public set creationSourceDatabaseId(value: string) {
    this._creationSourceDatabaseId = value;
  }
  public resetCreationSourceDatabaseId() {
    this._creationSourceDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationSourceDatabaseIdInput() {
    return this._creationSourceDatabaseId
  }

  // elastic_pool_id - computed: false, optional: true, required: false
  private _elasticPoolId?: string;
  public get elasticPoolId() {
    return this.getStringAttribute('elastic_pool_id');
  }
  public set elasticPoolId(value: string ) {
    this._elasticPoolId = value;
  }
  public resetElasticPoolId() {
    this._elasticPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticPoolIdInput() {
    return this._elasticPoolId
  }

  // extended_auditing_policy - computed: true, optional: true, required: false
  private _extendedAuditingPolicy?: MssqlDatabaseExtendedAuditingPolicy[]
  public get extendedAuditingPolicy(): MssqlDatabaseExtendedAuditingPolicy[] {
    return this.interpolationForAttribute('extended_auditing_policy') as any; // Getting the computed value is not yet implemented
  }
  public set extendedAuditingPolicy(value: MssqlDatabaseExtendedAuditingPolicy[]) {
    this._extendedAuditingPolicy = value;
  }
  public resetExtendedAuditingPolicy() {
    this._extendedAuditingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAuditingPolicyInput() {
    return this._extendedAuditingPolicy
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_type - computed: true, optional: true, required: false
  private _licenseType?: string;
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType
  }

  // max_size_gb - computed: true, optional: true, required: false
  private _maxSizeGb?: number;
  public get maxSizeGb() {
    return this.getNumberAttribute('max_size_gb');
  }
  public set maxSizeGb(value: number) {
    this._maxSizeGb = value;
  }
  public resetMaxSizeGb() {
    this._maxSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeGbInput() {
    return this._maxSizeGb
  }

  // min_capacity - computed: true, optional: true, required: false
  private _minCapacity?: number;
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity
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

  // read_replica_count - computed: true, optional: true, required: false
  private _readReplicaCount?: number;
  public get readReplicaCount() {
    return this.getNumberAttribute('read_replica_count');
  }
  public set readReplicaCount(value: number) {
    this._readReplicaCount = value;
  }
  public resetReadReplicaCount() {
    this._readReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readReplicaCountInput() {
    return this._readReplicaCount
  }

  // read_scale - computed: true, optional: true, required: false
  private _readScale?: boolean;
  public get readScale() {
    return this.getBooleanAttribute('read_scale');
  }
  public set readScale(value: boolean) {
    this._readScale = value;
  }
  public resetReadScale() {
    this._readScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readScaleInput() {
    return this._readScale
  }

  // recover_database_id - computed: false, optional: true, required: false
  private _recoverDatabaseId?: string;
  public get recoverDatabaseId() {
    return this.getStringAttribute('recover_database_id');
  }
  public set recoverDatabaseId(value: string ) {
    this._recoverDatabaseId = value;
  }
  public resetRecoverDatabaseId() {
    this._recoverDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverDatabaseIdInput() {
    return this._recoverDatabaseId
  }

  // restore_dropped_database_id - computed: false, optional: true, required: false
  private _restoreDroppedDatabaseId?: string;
  public get restoreDroppedDatabaseId() {
    return this.getStringAttribute('restore_dropped_database_id');
  }
  public set restoreDroppedDatabaseId(value: string ) {
    this._restoreDroppedDatabaseId = value;
  }
  public resetRestoreDroppedDatabaseId() {
    this._restoreDroppedDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreDroppedDatabaseIdInput() {
    return this._restoreDroppedDatabaseId
  }

  // restore_point_in_time - computed: true, optional: true, required: false
  private _restorePointInTime?: string;
  public get restorePointInTime() {
    return this.getStringAttribute('restore_point_in_time');
  }
  public set restorePointInTime(value: string) {
    this._restorePointInTime = value;
  }
  public resetRestorePointInTime() {
    this._restorePointInTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorePointInTimeInput() {
    return this._restorePointInTime
  }

  // sample_name - computed: true, optional: true, required: false
  private _sampleName?: string;
  public get sampleName() {
    return this.getStringAttribute('sample_name');
  }
  public set sampleName(value: string) {
    this._sampleName = value;
  }
  public resetSampleName() {
    this._sampleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleNameInput() {
    return this._sampleName
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId: string;
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId
  }

  // sku_name - computed: true, optional: true, required: false
  private _skuName?: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // storage_account_type - computed: false, optional: true, required: false
  private _storageAccountType?: string;
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
  public set storageAccountType(value: string ) {
    this._storageAccountType = value;
  }
  public resetStorageAccountType() {
    this._storageAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTypeInput() {
    return this._storageAccountType
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

  // zone_redundant - computed: true, optional: true, required: false
  private _zoneRedundant?: boolean;
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant');
  }
  public set zoneRedundant(value: boolean) {
    this._zoneRedundant = value;
  }
  public resetZoneRedundant() {
    this._zoneRedundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRedundantInput() {
    return this._zoneRedundant
  }

  // long_term_retention_policy - computed: false, optional: true, required: false
  private _longTermRetentionPolicy?: MssqlDatabaseLongTermRetentionPolicy[];
  public get longTermRetentionPolicy() {
    return this.interpolationForAttribute('long_term_retention_policy') as any;
  }
  public set longTermRetentionPolicy(value: MssqlDatabaseLongTermRetentionPolicy[] ) {
    this._longTermRetentionPolicy = value;
  }
  public resetLongTermRetentionPolicy() {
    this._longTermRetentionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longTermRetentionPolicyInput() {
    return this._longTermRetentionPolicy
  }

  // short_term_retention_policy - computed: false, optional: true, required: false
  private _shortTermRetentionPolicy?: MssqlDatabaseShortTermRetentionPolicy[];
  public get shortTermRetentionPolicy() {
    return this.interpolationForAttribute('short_term_retention_policy') as any;
  }
  public set shortTermRetentionPolicy(value: MssqlDatabaseShortTermRetentionPolicy[] ) {
    this._shortTermRetentionPolicy = value;
  }
  public resetShortTermRetentionPolicy() {
    this._shortTermRetentionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortTermRetentionPolicyInput() {
    return this._shortTermRetentionPolicy
  }

  // threat_detection_policy - computed: false, optional: true, required: false
  private _threatDetectionPolicy?: MssqlDatabaseThreatDetectionPolicy[];
  public get threatDetectionPolicy() {
    return this.interpolationForAttribute('threat_detection_policy') as any;
  }
  public set threatDetectionPolicy(value: MssqlDatabaseThreatDetectionPolicy[] ) {
    this._threatDetectionPolicy = value;
  }
  public resetThreatDetectionPolicy() {
    this._threatDetectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatDetectionPolicyInput() {
    return this._threatDetectionPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MssqlDatabaseTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MssqlDatabaseTimeouts ) {
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
      auto_pause_delay_in_minutes: cdktf.numberToTerraform(this._autoPauseDelayInMinutes),
      collation: cdktf.stringToTerraform(this._collation),
      create_mode: cdktf.stringToTerraform(this._createMode),
      creation_source_database_id: cdktf.stringToTerraform(this._creationSourceDatabaseId),
      elastic_pool_id: cdktf.stringToTerraform(this._elasticPoolId),
      extended_auditing_policy: cdktf.listMapper(mssqlDatabaseExtendedAuditingPolicyToTerraform)(this._extendedAuditingPolicy),
      license_type: cdktf.stringToTerraform(this._licenseType),
      max_size_gb: cdktf.numberToTerraform(this._maxSizeGb),
      min_capacity: cdktf.numberToTerraform(this._minCapacity),
      name: cdktf.stringToTerraform(this._name),
      read_replica_count: cdktf.numberToTerraform(this._readReplicaCount),
      read_scale: cdktf.booleanToTerraform(this._readScale),
      recover_database_id: cdktf.stringToTerraform(this._recoverDatabaseId),
      restore_dropped_database_id: cdktf.stringToTerraform(this._restoreDroppedDatabaseId),
      restore_point_in_time: cdktf.stringToTerraform(this._restorePointInTime),
      sample_name: cdktf.stringToTerraform(this._sampleName),
      server_id: cdktf.stringToTerraform(this._serverId),
      sku_name: cdktf.stringToTerraform(this._skuName),
      storage_account_type: cdktf.stringToTerraform(this._storageAccountType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zone_redundant: cdktf.booleanToTerraform(this._zoneRedundant),
      long_term_retention_policy: cdktf.listMapper(mssqlDatabaseLongTermRetentionPolicyToTerraform)(this._longTermRetentionPolicy),
      short_term_retention_policy: cdktf.listMapper(mssqlDatabaseShortTermRetentionPolicyToTerraform)(this._shortTermRetentionPolicy),
      threat_detection_policy: cdktf.listMapper(mssqlDatabaseThreatDetectionPolicyToTerraform)(this._threatDetectionPolicy),
      timeouts: mssqlDatabaseTimeoutsToTerraform(this._timeouts),
    };
  }
}
