// https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#auto_pause_delay_in_minutes MssqlDatabase#auto_pause_delay_in_minutes}
  */
  readonly autoPauseDelayInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#collation MssqlDatabase#collation}
  */
  readonly collation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#create_mode MssqlDatabase#create_mode}
  */
  readonly createMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#creation_source_database_id MssqlDatabase#creation_source_database_id}
  */
  readonly creationSourceDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#elastic_pool_id MssqlDatabase#elastic_pool_id}
  */
  readonly elasticPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#extended_auditing_policy MssqlDatabase#extended_auditing_policy}
  */
  readonly extendedAuditingPolicy?: MssqlDatabaseExtendedAuditingPolicy[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#geo_backup_enabled MssqlDatabase#geo_backup_enabled}
  */
  readonly geoBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#license_type MssqlDatabase#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#max_size_gb MssqlDatabase#max_size_gb}
  */
  readonly maxSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#min_capacity MssqlDatabase#min_capacity}
  */
  readonly minCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#name MssqlDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#read_replica_count MssqlDatabase#read_replica_count}
  */
  readonly readReplicaCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#read_scale MssqlDatabase#read_scale}
  */
  readonly readScale?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#recover_database_id MssqlDatabase#recover_database_id}
  */
  readonly recoverDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#restore_dropped_database_id MssqlDatabase#restore_dropped_database_id}
  */
  readonly restoreDroppedDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#restore_point_in_time MssqlDatabase#restore_point_in_time}
  */
  readonly restorePointInTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#sample_name MssqlDatabase#sample_name}
  */
  readonly sampleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#server_id MssqlDatabase#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#sku_name MssqlDatabase#sku_name}
  */
  readonly skuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#storage_account_type MssqlDatabase#storage_account_type}
  */
  readonly storageAccountType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#tags MssqlDatabase#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#zone_redundant MssqlDatabase#zone_redundant}
  */
  readonly zoneRedundant?: boolean | cdktf.IResolvable;
  /**
  * long_term_retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#long_term_retention_policy MssqlDatabase#long_term_retention_policy}
  */
  readonly longTermRetentionPolicy?: MssqlDatabaseLongTermRetentionPolicy;
  /**
  * short_term_retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#short_term_retention_policy MssqlDatabase#short_term_retention_policy}
  */
  readonly shortTermRetentionPolicy?: MssqlDatabaseShortTermRetentionPolicy;
  /**
  * threat_detection_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#threat_detection_policy MssqlDatabase#threat_detection_policy}
  */
  readonly threatDetectionPolicy?: MssqlDatabaseThreatDetectionPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#timeouts MssqlDatabase#timeouts}
  */
  readonly timeouts?: MssqlDatabaseTimeouts;
}
export interface MssqlDatabaseExtendedAuditingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#log_monitoring_enabled MssqlDatabase#log_monitoring_enabled}
  */
  readonly logMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#retention_in_days MssqlDatabase#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#storage_account_access_key MssqlDatabase#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#storage_account_access_key_is_secondary MssqlDatabase#storage_account_access_key_is_secondary}
  */
  readonly storageAccountAccessKeyIsSecondary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#storage_endpoint MssqlDatabase#storage_endpoint}
  */
  readonly storageEndpoint?: string;
}

function mssqlDatabaseExtendedAuditingPolicyToTerraform(struct?: MssqlDatabaseExtendedAuditingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_monitoring_enabled: cdktf.booleanToTerraform(struct!.logMonitoringEnabled),
    retention_in_days: struct!.retentionInDays === undefined ? null : cdktf.numberToTerraform(struct!.retentionInDays),
    storage_account_access_key: struct!.storageAccountAccessKey === undefined ? null : cdktf.stringToTerraform(struct!.storageAccountAccessKey),
    storage_account_access_key_is_secondary: struct!.storageAccountAccessKeyIsSecondary === undefined ? null : cdktf.booleanToTerraform(struct!.storageAccountAccessKeyIsSecondary),
    storage_endpoint: struct!.storageEndpoint === undefined ? null : cdktf.stringToTerraform(struct!.storageEndpoint),
  }
}

export interface MssqlDatabaseLongTermRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#monthly_retention MssqlDatabase#monthly_retention}
  */
  readonly monthlyRetention?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#week_of_year MssqlDatabase#week_of_year}
  */
  readonly weekOfYear?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#weekly_retention MssqlDatabase#weekly_retention}
  */
  readonly weeklyRetention?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#yearly_retention MssqlDatabase#yearly_retention}
  */
  readonly yearlyRetention?: string;
}

function mssqlDatabaseLongTermRetentionPolicyToTerraform(struct?: MssqlDatabaseLongTermRetentionPolicyOutputReference | MssqlDatabaseLongTermRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monthly_retention: cdktf.stringToTerraform(struct!.monthlyRetention),
    week_of_year: cdktf.numberToTerraform(struct!.weekOfYear),
    weekly_retention: cdktf.stringToTerraform(struct!.weeklyRetention),
    yearly_retention: cdktf.stringToTerraform(struct!.yearlyRetention),
  }
}

export class MssqlDatabaseLongTermRetentionPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // monthly_retention - computed: true, optional: true, required: false
  private _monthlyRetention?: string | undefined; 
  public get monthlyRetention() {
    return this.getStringAttribute('monthly_retention');
  }
  public set monthlyRetention(value: string | undefined) {
    this._monthlyRetention = value;
  }
  public resetMonthlyRetention() {
    this._monthlyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyRetentionInput() {
    return this._monthlyRetention
  }

  // week_of_year - computed: true, optional: true, required: false
  private _weekOfYear?: number | undefined; 
  public get weekOfYear() {
    return this.getNumberAttribute('week_of_year');
  }
  public set weekOfYear(value: number | undefined) {
    this._weekOfYear = value;
  }
  public resetWeekOfYear() {
    this._weekOfYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOfYearInput() {
    return this._weekOfYear
  }

  // weekly_retention - computed: true, optional: true, required: false
  private _weeklyRetention?: string | undefined; 
  public get weeklyRetention() {
    return this.getStringAttribute('weekly_retention');
  }
  public set weeklyRetention(value: string | undefined) {
    this._weeklyRetention = value;
  }
  public resetWeeklyRetention() {
    this._weeklyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyRetentionInput() {
    return this._weeklyRetention
  }

  // yearly_retention - computed: true, optional: true, required: false
  private _yearlyRetention?: string | undefined; 
  public get yearlyRetention() {
    return this.getStringAttribute('yearly_retention');
  }
  public set yearlyRetention(value: string | undefined) {
    this._yearlyRetention = value;
  }
  public resetYearlyRetention() {
    this._yearlyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearlyRetentionInput() {
    return this._yearlyRetention
  }
}
export interface MssqlDatabaseShortTermRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#retention_days MssqlDatabase#retention_days}
  */
  readonly retentionDays: number;
}

function mssqlDatabaseShortTermRetentionPolicyToTerraform(struct?: MssqlDatabaseShortTermRetentionPolicyOutputReference | MssqlDatabaseShortTermRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
  }
}

export class MssqlDatabaseShortTermRetentionPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays
  }
}
export interface MssqlDatabaseThreatDetectionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#disabled_alerts MssqlDatabase#disabled_alerts}
  */
  readonly disabledAlerts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#email_account_admins MssqlDatabase#email_account_admins}
  */
  readonly emailAccountAdmins?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#email_addresses MssqlDatabase#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#retention_days MssqlDatabase#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#state MssqlDatabase#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#storage_account_access_key MssqlDatabase#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#storage_endpoint MssqlDatabase#storage_endpoint}
  */
  readonly storageEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#use_server_default MssqlDatabase#use_server_default}
  */
  readonly useServerDefault?: string;
}

function mssqlDatabaseThreatDetectionPolicyToTerraform(struct?: MssqlDatabaseThreatDetectionPolicyOutputReference | MssqlDatabaseThreatDetectionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class MssqlDatabaseThreatDetectionPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // disabled_alerts - computed: false, optional: true, required: false
  private _disabledAlerts?: string[] | undefined; 
  public get disabledAlerts() {
    return this.getListAttribute('disabled_alerts');
  }
  public set disabledAlerts(value: string[] | undefined) {
    this._disabledAlerts = value;
  }
  public resetDisabledAlerts() {
    this._disabledAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledAlertsInput() {
    return this._disabledAlerts
  }

  // email_account_admins - computed: false, optional: true, required: false
  private _emailAccountAdmins?: string | undefined; 
  public get emailAccountAdmins() {
    return this.getStringAttribute('email_account_admins');
  }
  public set emailAccountAdmins(value: string | undefined) {
    this._emailAccountAdmins = value;
  }
  public resetEmailAccountAdmins() {
    this._emailAccountAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAccountAdminsInput() {
    return this._emailAccountAdmins
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[] | undefined; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[] | undefined) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number | undefined; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number | undefined) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays
  }

  // state - computed: false, optional: true, required: false
  private _state?: string | undefined; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string | undefined) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // storage_account_access_key - computed: false, optional: true, required: false
  private _storageAccountAccessKey?: string | undefined; 
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }
  public set storageAccountAccessKey(value: string | undefined) {
    this._storageAccountAccessKey = value;
  }
  public resetStorageAccountAccessKey() {
    this._storageAccountAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyInput() {
    return this._storageAccountAccessKey
  }

  // storage_endpoint - computed: false, optional: true, required: false
  private _storageEndpoint?: string | undefined; 
  public get storageEndpoint() {
    return this.getStringAttribute('storage_endpoint');
  }
  public set storageEndpoint(value: string | undefined) {
    this._storageEndpoint = value;
  }
  public resetStorageEndpoint() {
    this._storageEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEndpointInput() {
    return this._storageEndpoint
  }

  // use_server_default - computed: false, optional: true, required: false
  private _useServerDefault?: string | undefined; 
  public get useServerDefault() {
    return this.getStringAttribute('use_server_default');
  }
  public set useServerDefault(value: string | undefined) {
    this._useServerDefault = value;
  }
  public resetUseServerDefault() {
    this._useServerDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServerDefaultInput() {
    return this._useServerDefault
  }
}
export interface MssqlDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#create MssqlDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#delete MssqlDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#read MssqlDatabase#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html#update MssqlDatabase#update}
  */
  readonly update?: string;
}

function mssqlDatabaseTimeoutsToTerraform(struct?: MssqlDatabaseTimeoutsOutputReference | MssqlDatabaseTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class MssqlDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html azurerm_mssql_database}
*/
export class MssqlDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_mssql_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_database.html azurerm_mssql_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlDatabaseConfig
  */
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
    this._geoBackupEnabled = config.geoBackupEnabled;
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
  private _autoPauseDelayInMinutes?: number | undefined; 
  public get autoPauseDelayInMinutes() {
    return this.getNumberAttribute('auto_pause_delay_in_minutes');
  }
  public set autoPauseDelayInMinutes(value: number | undefined) {
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
  private _collation?: string | undefined; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string | undefined) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation
  }

  // create_mode - computed: false, optional: true, required: false
  private _createMode?: string | undefined; 
  public get createMode() {
    return this.getStringAttribute('create_mode');
  }
  public set createMode(value: string | undefined) {
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
  private _creationSourceDatabaseId?: string | undefined; 
  public get creationSourceDatabaseId() {
    return this.getStringAttribute('creation_source_database_id');
  }
  public set creationSourceDatabaseId(value: string | undefined) {
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
  private _elasticPoolId?: string | undefined; 
  public get elasticPoolId() {
    return this.getStringAttribute('elastic_pool_id');
  }
  public set elasticPoolId(value: string | undefined) {
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
  private _extendedAuditingPolicy?: MssqlDatabaseExtendedAuditingPolicy[] | undefined; 
  public get extendedAuditingPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('extended_auditing_policy') as any;
  }
  public set extendedAuditingPolicy(value: MssqlDatabaseExtendedAuditingPolicy[] | undefined) {
    this._extendedAuditingPolicy = value;
  }
  public resetExtendedAuditingPolicy() {
    this._extendedAuditingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAuditingPolicyInput() {
    return this._extendedAuditingPolicy
  }

  // geo_backup_enabled - computed: false, optional: true, required: false
  private _geoBackupEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get geoBackupEnabled() {
    return this.getBooleanAttribute('geo_backup_enabled') as any;
  }
  public set geoBackupEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._geoBackupEnabled = value;
  }
  public resetGeoBackupEnabled() {
    this._geoBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoBackupEnabledInput() {
    return this._geoBackupEnabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_type - computed: true, optional: true, required: false
  private _licenseType?: string | undefined; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string | undefined) {
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
  private _maxSizeGb?: number | undefined; 
  public get maxSizeGb() {
    return this.getNumberAttribute('max_size_gb');
  }
  public set maxSizeGb(value: number | undefined) {
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
  private _minCapacity?: number | undefined; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number | undefined) {
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
  private _name?: string; 
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
  private _readReplicaCount?: number | undefined; 
  public get readReplicaCount() {
    return this.getNumberAttribute('read_replica_count');
  }
  public set readReplicaCount(value: number | undefined) {
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
  private _readScale?: boolean | cdktf.IResolvable | undefined; 
  public get readScale() {
    return this.getBooleanAttribute('read_scale') as any;
  }
  public set readScale(value: boolean | cdktf.IResolvable | undefined) {
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
  private _recoverDatabaseId?: string | undefined; 
  public get recoverDatabaseId() {
    return this.getStringAttribute('recover_database_id');
  }
  public set recoverDatabaseId(value: string | undefined) {
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
  private _restoreDroppedDatabaseId?: string | undefined; 
  public get restoreDroppedDatabaseId() {
    return this.getStringAttribute('restore_dropped_database_id');
  }
  public set restoreDroppedDatabaseId(value: string | undefined) {
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
  private _restorePointInTime?: string | undefined; 
  public get restorePointInTime() {
    return this.getStringAttribute('restore_point_in_time');
  }
  public set restorePointInTime(value: string | undefined) {
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
  private _sampleName?: string | undefined; 
  public get sampleName() {
    return this.getStringAttribute('sample_name');
  }
  public set sampleName(value: string | undefined) {
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
  private _serverId?: string; 
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
  private _skuName?: string | undefined; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string | undefined) {
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
  private _storageAccountType?: string | undefined; 
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
  public set storageAccountType(value: string | undefined) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _zoneRedundant?: boolean | cdktf.IResolvable | undefined; 
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant') as any;
  }
  public set zoneRedundant(value: boolean | cdktf.IResolvable | undefined) {
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
  private _longTermRetentionPolicy?: MssqlDatabaseLongTermRetentionPolicy | undefined; 
  private __longTermRetentionPolicyOutput = new MssqlDatabaseLongTermRetentionPolicyOutputReference(this as any, "long_term_retention_policy", true);
  public get longTermRetentionPolicy() {
    return this.__longTermRetentionPolicyOutput;
  }
  public putLongTermRetentionPolicy(value: MssqlDatabaseLongTermRetentionPolicy | undefined) {
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
  private _shortTermRetentionPolicy?: MssqlDatabaseShortTermRetentionPolicy | undefined; 
  private __shortTermRetentionPolicyOutput = new MssqlDatabaseShortTermRetentionPolicyOutputReference(this as any, "short_term_retention_policy", true);
  public get shortTermRetentionPolicy() {
    return this.__shortTermRetentionPolicyOutput;
  }
  public putShortTermRetentionPolicy(value: MssqlDatabaseShortTermRetentionPolicy | undefined) {
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
  private _threatDetectionPolicy?: MssqlDatabaseThreatDetectionPolicy | undefined; 
  private __threatDetectionPolicyOutput = new MssqlDatabaseThreatDetectionPolicyOutputReference(this as any, "threat_detection_policy", true);
  public get threatDetectionPolicy() {
    return this.__threatDetectionPolicyOutput;
  }
  public putThreatDetectionPolicy(value: MssqlDatabaseThreatDetectionPolicy | undefined) {
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
  private _timeouts?: MssqlDatabaseTimeouts | undefined; 
  private __timeoutsOutput = new MssqlDatabaseTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MssqlDatabaseTimeouts | undefined) {
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
      geo_backup_enabled: cdktf.booleanToTerraform(this._geoBackupEnabled),
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
      long_term_retention_policy: mssqlDatabaseLongTermRetentionPolicyToTerraform(this._longTermRetentionPolicy),
      short_term_retention_policy: mssqlDatabaseShortTermRetentionPolicyToTerraform(this._shortTermRetentionPolicy),
      threat_detection_policy: mssqlDatabaseThreatDetectionPolicyToTerraform(this._threatDetectionPolicy),
      timeouts: mssqlDatabaseTimeoutsToTerraform(this._timeouts),
    };
  }
}
