// https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlVirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#r_services_enabled MssqlVirtualMachine#r_services_enabled}
  */
  readonly rServicesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#sql_connectivity_port MssqlVirtualMachine#sql_connectivity_port}
  */
  readonly sqlConnectivityPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#sql_connectivity_type MssqlVirtualMachine#sql_connectivity_type}
  */
  readonly sqlConnectivityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#sql_connectivity_update_password MssqlVirtualMachine#sql_connectivity_update_password}
  */
  readonly sqlConnectivityUpdatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#sql_connectivity_update_username MssqlVirtualMachine#sql_connectivity_update_username}
  */
  readonly sqlConnectivityUpdateUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#sql_license_type MssqlVirtualMachine#sql_license_type}
  */
  readonly sqlLicenseType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#tags MssqlVirtualMachine#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#virtual_machine_id MssqlVirtualMachine#virtual_machine_id}
  */
  readonly virtualMachineId: string;
  /**
  * auto_backup block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#auto_backup MssqlVirtualMachine#auto_backup}
  */
  readonly autoBackup?: MssqlVirtualMachineAutoBackup;
  /**
  * auto_patching block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#auto_patching MssqlVirtualMachine#auto_patching}
  */
  readonly autoPatching?: MssqlVirtualMachineAutoPatching;
  /**
  * key_vault_credential block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#key_vault_credential MssqlVirtualMachine#key_vault_credential}
  */
  readonly keyVaultCredential?: MssqlVirtualMachineKeyVaultCredential;
  /**
  * storage_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#storage_configuration MssqlVirtualMachine#storage_configuration}
  */
  readonly storageConfiguration?: MssqlVirtualMachineStorageConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#timeouts MssqlVirtualMachine#timeouts}
  */
  readonly timeouts?: MssqlVirtualMachineTimeouts;
}
export interface MssqlVirtualMachineAutoBackupManualSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#full_backup_frequency MssqlVirtualMachine#full_backup_frequency}
  */
  readonly fullBackupFrequency: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#full_backup_start_hour MssqlVirtualMachine#full_backup_start_hour}
  */
  readonly fullBackupStartHour: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#full_backup_window_in_hours MssqlVirtualMachine#full_backup_window_in_hours}
  */
  readonly fullBackupWindowInHours: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#log_backup_frequency_in_minutes MssqlVirtualMachine#log_backup_frequency_in_minutes}
  */
  readonly logBackupFrequencyInMinutes: number;
}

function mssqlVirtualMachineAutoBackupManualScheduleToTerraform(struct?: MssqlVirtualMachineAutoBackupManualScheduleOutputReference | MssqlVirtualMachineAutoBackupManualSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_backup_frequency: cdktf.stringToTerraform(struct!.fullBackupFrequency),
    full_backup_start_hour: cdktf.numberToTerraform(struct!.fullBackupStartHour),
    full_backup_window_in_hours: cdktf.numberToTerraform(struct!.fullBackupWindowInHours),
    log_backup_frequency_in_minutes: cdktf.numberToTerraform(struct!.logBackupFrequencyInMinutes),
  }
}

export class MssqlVirtualMachineAutoBackupManualScheduleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // full_backup_frequency - computed: false, optional: false, required: true
  private _fullBackupFrequency?: string; 
  public get fullBackupFrequency() {
    return this.getStringAttribute('full_backup_frequency');
  }
  public set fullBackupFrequency(value: string) {
    this._fullBackupFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullBackupFrequencyInput() {
    return this._fullBackupFrequency
  }

  // full_backup_start_hour - computed: false, optional: false, required: true
  private _fullBackupStartHour?: number; 
  public get fullBackupStartHour() {
    return this.getNumberAttribute('full_backup_start_hour');
  }
  public set fullBackupStartHour(value: number) {
    this._fullBackupStartHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullBackupStartHourInput() {
    return this._fullBackupStartHour
  }

  // full_backup_window_in_hours - computed: false, optional: false, required: true
  private _fullBackupWindowInHours?: number; 
  public get fullBackupWindowInHours() {
    return this.getNumberAttribute('full_backup_window_in_hours');
  }
  public set fullBackupWindowInHours(value: number) {
    this._fullBackupWindowInHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullBackupWindowInHoursInput() {
    return this._fullBackupWindowInHours
  }

  // log_backup_frequency_in_minutes - computed: false, optional: false, required: true
  private _logBackupFrequencyInMinutes?: number; 
  public get logBackupFrequencyInMinutes() {
    return this.getNumberAttribute('log_backup_frequency_in_minutes');
  }
  public set logBackupFrequencyInMinutes(value: number) {
    this._logBackupFrequencyInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logBackupFrequencyInMinutesInput() {
    return this._logBackupFrequencyInMinutes
  }
}
export interface MssqlVirtualMachineAutoBackup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#encryption_enabled MssqlVirtualMachine#encryption_enabled}
  */
  readonly encryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#encryption_password MssqlVirtualMachine#encryption_password}
  */
  readonly encryptionPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#retention_period_in_days MssqlVirtualMachine#retention_period_in_days}
  */
  readonly retentionPeriodInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#storage_account_access_key MssqlVirtualMachine#storage_account_access_key}
  */
  readonly storageAccountAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#storage_blob_endpoint MssqlVirtualMachine#storage_blob_endpoint}
  */
  readonly storageBlobEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#system_databases_backup_enabled MssqlVirtualMachine#system_databases_backup_enabled}
  */
  readonly systemDatabasesBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * manual_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#manual_schedule MssqlVirtualMachine#manual_schedule}
  */
  readonly manualSchedule?: MssqlVirtualMachineAutoBackupManualSchedule;
}

function mssqlVirtualMachineAutoBackupToTerraform(struct?: MssqlVirtualMachineAutoBackupOutputReference | MssqlVirtualMachineAutoBackup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_enabled: cdktf.booleanToTerraform(struct!.encryptionEnabled),
    encryption_password: cdktf.stringToTerraform(struct!.encryptionPassword),
    retention_period_in_days: cdktf.numberToTerraform(struct!.retentionPeriodInDays),
    storage_account_access_key: cdktf.stringToTerraform(struct!.storageAccountAccessKey),
    storage_blob_endpoint: cdktf.stringToTerraform(struct!.storageBlobEndpoint),
    system_databases_backup_enabled: cdktf.booleanToTerraform(struct!.systemDatabasesBackupEnabled),
    manual_schedule: mssqlVirtualMachineAutoBackupManualScheduleToTerraform(struct!.manualSchedule),
  }
}

export class MssqlVirtualMachineAutoBackupOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // encryption_enabled - computed: false, optional: true, required: false
  private _encryptionEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get encryptionEnabled() {
    return this.getBooleanAttribute('encryption_enabled') as any;
  }
  public set encryptionEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._encryptionEnabled = value;
  }
  public resetEncryptionEnabled() {
    this._encryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionEnabledInput() {
    return this._encryptionEnabled
  }

  // encryption_password - computed: false, optional: true, required: false
  private _encryptionPassword?: string | undefined; 
  public get encryptionPassword() {
    return this.getStringAttribute('encryption_password');
  }
  public set encryptionPassword(value: string | undefined) {
    this._encryptionPassword = value;
  }
  public resetEncryptionPassword() {
    this._encryptionPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionPasswordInput() {
    return this._encryptionPassword
  }

  // retention_period_in_days - computed: false, optional: false, required: true
  private _retentionPeriodInDays?: number; 
  public get retentionPeriodInDays() {
    return this.getNumberAttribute('retention_period_in_days');
  }
  public set retentionPeriodInDays(value: number) {
    this._retentionPeriodInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInDaysInput() {
    return this._retentionPeriodInDays
  }

  // storage_account_access_key - computed: false, optional: false, required: true
  private _storageAccountAccessKey?: string; 
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }
  public set storageAccountAccessKey(value: string) {
    this._storageAccountAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyInput() {
    return this._storageAccountAccessKey
  }

  // storage_blob_endpoint - computed: false, optional: false, required: true
  private _storageBlobEndpoint?: string; 
  public get storageBlobEndpoint() {
    return this.getStringAttribute('storage_blob_endpoint');
  }
  public set storageBlobEndpoint(value: string) {
    this._storageBlobEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBlobEndpointInput() {
    return this._storageBlobEndpoint
  }

  // system_databases_backup_enabled - computed: false, optional: true, required: false
  private _systemDatabasesBackupEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get systemDatabasesBackupEnabled() {
    return this.getBooleanAttribute('system_databases_backup_enabled') as any;
  }
  public set systemDatabasesBackupEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._systemDatabasesBackupEnabled = value;
  }
  public resetSystemDatabasesBackupEnabled() {
    this._systemDatabasesBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDatabasesBackupEnabledInput() {
    return this._systemDatabasesBackupEnabled
  }

  // manual_schedule - computed: false, optional: true, required: false
  private _manualSchedule?: MssqlVirtualMachineAutoBackupManualSchedule | undefined; 
  private __manualScheduleOutput = new MssqlVirtualMachineAutoBackupManualScheduleOutputReference(this as any, "manual_schedule", true);
  public get manualSchedule() {
    return this.__manualScheduleOutput;
  }
  public putManualSchedule(value: MssqlVirtualMachineAutoBackupManualSchedule | undefined) {
    this._manualSchedule = value;
  }
  public resetManualSchedule() {
    this._manualSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualScheduleInput() {
    return this._manualSchedule
  }
}
export interface MssqlVirtualMachineAutoPatching {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#day_of_week MssqlVirtualMachine#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#maintenance_window_duration_in_minutes MssqlVirtualMachine#maintenance_window_duration_in_minutes}
  */
  readonly maintenanceWindowDurationInMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#maintenance_window_starting_hour MssqlVirtualMachine#maintenance_window_starting_hour}
  */
  readonly maintenanceWindowStartingHour: number;
}

function mssqlVirtualMachineAutoPatchingToTerraform(struct?: MssqlVirtualMachineAutoPatchingOutputReference | MssqlVirtualMachineAutoPatching): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    maintenance_window_duration_in_minutes: cdktf.numberToTerraform(struct!.maintenanceWindowDurationInMinutes),
    maintenance_window_starting_hour: cdktf.numberToTerraform(struct!.maintenanceWindowStartingHour),
  }
}

export class MssqlVirtualMachineAutoPatchingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek
  }

  // maintenance_window_duration_in_minutes - computed: false, optional: false, required: true
  private _maintenanceWindowDurationInMinutes?: number; 
  public get maintenanceWindowDurationInMinutes() {
    return this.getNumberAttribute('maintenance_window_duration_in_minutes');
  }
  public set maintenanceWindowDurationInMinutes(value: number) {
    this._maintenanceWindowDurationInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowDurationInMinutesInput() {
    return this._maintenanceWindowDurationInMinutes
  }

  // maintenance_window_starting_hour - computed: false, optional: false, required: true
  private _maintenanceWindowStartingHour?: number; 
  public get maintenanceWindowStartingHour() {
    return this.getNumberAttribute('maintenance_window_starting_hour');
  }
  public set maintenanceWindowStartingHour(value: number) {
    this._maintenanceWindowStartingHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowStartingHourInput() {
    return this._maintenanceWindowStartingHour
  }
}
export interface MssqlVirtualMachineKeyVaultCredential {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#key_vault_url MssqlVirtualMachine#key_vault_url}
  */
  readonly keyVaultUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#name MssqlVirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#service_principal_name MssqlVirtualMachine#service_principal_name}
  */
  readonly servicePrincipalName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#service_principal_secret MssqlVirtualMachine#service_principal_secret}
  */
  readonly servicePrincipalSecret: string;
}

function mssqlVirtualMachineKeyVaultCredentialToTerraform(struct?: MssqlVirtualMachineKeyVaultCredentialOutputReference | MssqlVirtualMachineKeyVaultCredential): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_url: cdktf.stringToTerraform(struct!.keyVaultUrl),
    name: cdktf.stringToTerraform(struct!.name),
    service_principal_name: cdktf.stringToTerraform(struct!.servicePrincipalName),
    service_principal_secret: cdktf.stringToTerraform(struct!.servicePrincipalSecret),
  }
}

export class MssqlVirtualMachineKeyVaultCredentialOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key_vault_url - computed: false, optional: false, required: true
  private _keyVaultUrl?: string; 
  public get keyVaultUrl() {
    return this.getStringAttribute('key_vault_url');
  }
  public set keyVaultUrl(value: string) {
    this._keyVaultUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultUrlInput() {
    return this._keyVaultUrl
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

  // service_principal_name - computed: false, optional: false, required: true
  private _servicePrincipalName?: string; 
  public get servicePrincipalName() {
    return this.getStringAttribute('service_principal_name');
  }
  public set servicePrincipalName(value: string) {
    this._servicePrincipalName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalNameInput() {
    return this._servicePrincipalName
  }

  // service_principal_secret - computed: false, optional: false, required: true
  private _servicePrincipalSecret?: string; 
  public get servicePrincipalSecret() {
    return this.getStringAttribute('service_principal_secret');
  }
  public set servicePrincipalSecret(value: string) {
    this._servicePrincipalSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalSecretInput() {
    return this._servicePrincipalSecret
  }
}
export interface MssqlVirtualMachineStorageConfigurationDataSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#default_file_path MssqlVirtualMachine#default_file_path}
  */
  readonly defaultFilePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#luns MssqlVirtualMachine#luns}
  */
  readonly luns: number[];
}

function mssqlVirtualMachineStorageConfigurationDataSettingsToTerraform(struct?: MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference | MssqlVirtualMachineStorageConfigurationDataSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_file_path: cdktf.stringToTerraform(struct!.defaultFilePath),
    luns: cdktf.listMapper(cdktf.numberToTerraform)(struct!.luns),
  }
}

export class MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default_file_path - computed: false, optional: false, required: true
  private _defaultFilePath?: string; 
  public get defaultFilePath() {
    return this.getStringAttribute('default_file_path');
  }
  public set defaultFilePath(value: string) {
    this._defaultFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFilePathInput() {
    return this._defaultFilePath
  }

  // luns - computed: false, optional: false, required: true
  private _luns?: number[]; 
  public get luns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('luns') as any;
  }
  public set luns(value: number[]) {
    this._luns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunsInput() {
    return this._luns
  }
}
export interface MssqlVirtualMachineStorageConfigurationLogSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#default_file_path MssqlVirtualMachine#default_file_path}
  */
  readonly defaultFilePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#luns MssqlVirtualMachine#luns}
  */
  readonly luns: number[];
}

function mssqlVirtualMachineStorageConfigurationLogSettingsToTerraform(struct?: MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference | MssqlVirtualMachineStorageConfigurationLogSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_file_path: cdktf.stringToTerraform(struct!.defaultFilePath),
    luns: cdktf.listMapper(cdktf.numberToTerraform)(struct!.luns),
  }
}

export class MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default_file_path - computed: false, optional: false, required: true
  private _defaultFilePath?: string; 
  public get defaultFilePath() {
    return this.getStringAttribute('default_file_path');
  }
  public set defaultFilePath(value: string) {
    this._defaultFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFilePathInput() {
    return this._defaultFilePath
  }

  // luns - computed: false, optional: false, required: true
  private _luns?: number[]; 
  public get luns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('luns') as any;
  }
  public set luns(value: number[]) {
    this._luns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunsInput() {
    return this._luns
  }
}
export interface MssqlVirtualMachineStorageConfigurationTempDbSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#default_file_path MssqlVirtualMachine#default_file_path}
  */
  readonly defaultFilePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#luns MssqlVirtualMachine#luns}
  */
  readonly luns: number[];
}

function mssqlVirtualMachineStorageConfigurationTempDbSettingsToTerraform(struct?: MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference | MssqlVirtualMachineStorageConfigurationTempDbSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_file_path: cdktf.stringToTerraform(struct!.defaultFilePath),
    luns: cdktf.listMapper(cdktf.numberToTerraform)(struct!.luns),
  }
}

export class MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default_file_path - computed: false, optional: false, required: true
  private _defaultFilePath?: string; 
  public get defaultFilePath() {
    return this.getStringAttribute('default_file_path');
  }
  public set defaultFilePath(value: string) {
    this._defaultFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFilePathInput() {
    return this._defaultFilePath
  }

  // luns - computed: false, optional: false, required: true
  private _luns?: number[]; 
  public get luns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('luns') as any;
  }
  public set luns(value: number[]) {
    this._luns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunsInput() {
    return this._luns
  }
}
export interface MssqlVirtualMachineStorageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#disk_type MssqlVirtualMachine#disk_type}
  */
  readonly diskType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#storage_workload_type MssqlVirtualMachine#storage_workload_type}
  */
  readonly storageWorkloadType: string;
  /**
  * data_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#data_settings MssqlVirtualMachine#data_settings}
  */
  readonly dataSettings?: MssqlVirtualMachineStorageConfigurationDataSettings;
  /**
  * log_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#log_settings MssqlVirtualMachine#log_settings}
  */
  readonly logSettings?: MssqlVirtualMachineStorageConfigurationLogSettings;
  /**
  * temp_db_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#temp_db_settings MssqlVirtualMachine#temp_db_settings}
  */
  readonly tempDbSettings?: MssqlVirtualMachineStorageConfigurationTempDbSettings;
}

function mssqlVirtualMachineStorageConfigurationToTerraform(struct?: MssqlVirtualMachineStorageConfigurationOutputReference | MssqlVirtualMachineStorageConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    storage_workload_type: cdktf.stringToTerraform(struct!.storageWorkloadType),
    data_settings: mssqlVirtualMachineStorageConfigurationDataSettingsToTerraform(struct!.dataSettings),
    log_settings: mssqlVirtualMachineStorageConfigurationLogSettingsToTerraform(struct!.logSettings),
    temp_db_settings: mssqlVirtualMachineStorageConfigurationTempDbSettingsToTerraform(struct!.tempDbSettings),
  }
}

export class MssqlVirtualMachineStorageConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // disk_type - computed: false, optional: false, required: true
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType
  }

  // storage_workload_type - computed: false, optional: false, required: true
  private _storageWorkloadType?: string; 
  public get storageWorkloadType() {
    return this.getStringAttribute('storage_workload_type');
  }
  public set storageWorkloadType(value: string) {
    this._storageWorkloadType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageWorkloadTypeInput() {
    return this._storageWorkloadType
  }

  // data_settings - computed: false, optional: true, required: false
  private _dataSettings?: MssqlVirtualMachineStorageConfigurationDataSettings | undefined; 
  private __dataSettingsOutput = new MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference(this as any, "data_settings", true);
  public get dataSettings() {
    return this.__dataSettingsOutput;
  }
  public putDataSettings(value: MssqlVirtualMachineStorageConfigurationDataSettings | undefined) {
    this._dataSettings = value;
  }
  public resetDataSettings() {
    this._dataSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSettingsInput() {
    return this._dataSettings
  }

  // log_settings - computed: false, optional: true, required: false
  private _logSettings?: MssqlVirtualMachineStorageConfigurationLogSettings | undefined; 
  private __logSettingsOutput = new MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference(this as any, "log_settings", true);
  public get logSettings() {
    return this.__logSettingsOutput;
  }
  public putLogSettings(value: MssqlVirtualMachineStorageConfigurationLogSettings | undefined) {
    this._logSettings = value;
  }
  public resetLogSettings() {
    this._logSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingsInput() {
    return this._logSettings
  }

  // temp_db_settings - computed: false, optional: true, required: false
  private _tempDbSettings?: MssqlVirtualMachineStorageConfigurationTempDbSettings | undefined; 
  private __tempDbSettingsOutput = new MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference(this as any, "temp_db_settings", true);
  public get tempDbSettings() {
    return this.__tempDbSettingsOutput;
  }
  public putTempDbSettings(value: MssqlVirtualMachineStorageConfigurationTempDbSettings | undefined) {
    this._tempDbSettings = value;
  }
  public resetTempDbSettings() {
    this._tempDbSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempDbSettingsInput() {
    return this._tempDbSettings
  }
}
export interface MssqlVirtualMachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#create MssqlVirtualMachine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#delete MssqlVirtualMachine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#read MssqlVirtualMachine#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#update MssqlVirtualMachine#update}
  */
  readonly update?: string;
}

function mssqlVirtualMachineTimeoutsToTerraform(struct?: MssqlVirtualMachineTimeoutsOutputReference | MssqlVirtualMachineTimeouts): any {
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

export class MssqlVirtualMachineTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html azurerm_mssql_virtual_machine}
*/
export class MssqlVirtualMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_mssql_virtual_machine";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html azurerm_mssql_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlVirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_virtual_machine',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._rServicesEnabled = config.rServicesEnabled;
    this._sqlConnectivityPort = config.sqlConnectivityPort;
    this._sqlConnectivityType = config.sqlConnectivityType;
    this._sqlConnectivityUpdatePassword = config.sqlConnectivityUpdatePassword;
    this._sqlConnectivityUpdateUsername = config.sqlConnectivityUpdateUsername;
    this._sqlLicenseType = config.sqlLicenseType;
    this._tags = config.tags;
    this._virtualMachineId = config.virtualMachineId;
    this._autoBackup = config.autoBackup;
    this._autoPatching = config.autoPatching;
    this._keyVaultCredential = config.keyVaultCredential;
    this._storageConfiguration = config.storageConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // r_services_enabled - computed: false, optional: true, required: false
  private _rServicesEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get rServicesEnabled() {
    return this.getBooleanAttribute('r_services_enabled') as any;
  }
  public set rServicesEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._rServicesEnabled = value;
  }
  public resetRServicesEnabled() {
    this._rServicesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rServicesEnabledInput() {
    return this._rServicesEnabled
  }

  // sql_connectivity_port - computed: false, optional: true, required: false
  private _sqlConnectivityPort?: number | undefined; 
  public get sqlConnectivityPort() {
    return this.getNumberAttribute('sql_connectivity_port');
  }
  public set sqlConnectivityPort(value: number | undefined) {
    this._sqlConnectivityPort = value;
  }
  public resetSqlConnectivityPort() {
    this._sqlConnectivityPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConnectivityPortInput() {
    return this._sqlConnectivityPort
  }

  // sql_connectivity_type - computed: false, optional: true, required: false
  private _sqlConnectivityType?: string | undefined; 
  public get sqlConnectivityType() {
    return this.getStringAttribute('sql_connectivity_type');
  }
  public set sqlConnectivityType(value: string | undefined) {
    this._sqlConnectivityType = value;
  }
  public resetSqlConnectivityType() {
    this._sqlConnectivityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConnectivityTypeInput() {
    return this._sqlConnectivityType
  }

  // sql_connectivity_update_password - computed: false, optional: true, required: false
  private _sqlConnectivityUpdatePassword?: string | undefined; 
  public get sqlConnectivityUpdatePassword() {
    return this.getStringAttribute('sql_connectivity_update_password');
  }
  public set sqlConnectivityUpdatePassword(value: string | undefined) {
    this._sqlConnectivityUpdatePassword = value;
  }
  public resetSqlConnectivityUpdatePassword() {
    this._sqlConnectivityUpdatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConnectivityUpdatePasswordInput() {
    return this._sqlConnectivityUpdatePassword
  }

  // sql_connectivity_update_username - computed: false, optional: true, required: false
  private _sqlConnectivityUpdateUsername?: string | undefined; 
  public get sqlConnectivityUpdateUsername() {
    return this.getStringAttribute('sql_connectivity_update_username');
  }
  public set sqlConnectivityUpdateUsername(value: string | undefined) {
    this._sqlConnectivityUpdateUsername = value;
  }
  public resetSqlConnectivityUpdateUsername() {
    this._sqlConnectivityUpdateUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConnectivityUpdateUsernameInput() {
    return this._sqlConnectivityUpdateUsername
  }

  // sql_license_type - computed: false, optional: false, required: true
  private _sqlLicenseType?: string; 
  public get sqlLicenseType() {
    return this.getStringAttribute('sql_license_type');
  }
  public set sqlLicenseType(value: string) {
    this._sqlLicenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlLicenseTypeInput() {
    return this._sqlLicenseType
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

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId?: string; 
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId
  }

  // auto_backup - computed: false, optional: true, required: false
  private _autoBackup?: MssqlVirtualMachineAutoBackup | undefined; 
  private __autoBackupOutput = new MssqlVirtualMachineAutoBackupOutputReference(this as any, "auto_backup", true);
  public get autoBackup() {
    return this.__autoBackupOutput;
  }
  public putAutoBackup(value: MssqlVirtualMachineAutoBackup | undefined) {
    this._autoBackup = value;
  }
  public resetAutoBackup() {
    this._autoBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBackupInput() {
    return this._autoBackup
  }

  // auto_patching - computed: false, optional: true, required: false
  private _autoPatching?: MssqlVirtualMachineAutoPatching | undefined; 
  private __autoPatchingOutput = new MssqlVirtualMachineAutoPatchingOutputReference(this as any, "auto_patching", true);
  public get autoPatching() {
    return this.__autoPatchingOutput;
  }
  public putAutoPatching(value: MssqlVirtualMachineAutoPatching | undefined) {
    this._autoPatching = value;
  }
  public resetAutoPatching() {
    this._autoPatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPatchingInput() {
    return this._autoPatching
  }

  // key_vault_credential - computed: false, optional: true, required: false
  private _keyVaultCredential?: MssqlVirtualMachineKeyVaultCredential | undefined; 
  private __keyVaultCredentialOutput = new MssqlVirtualMachineKeyVaultCredentialOutputReference(this as any, "key_vault_credential", true);
  public get keyVaultCredential() {
    return this.__keyVaultCredentialOutput;
  }
  public putKeyVaultCredential(value: MssqlVirtualMachineKeyVaultCredential | undefined) {
    this._keyVaultCredential = value;
  }
  public resetKeyVaultCredential() {
    this._keyVaultCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultCredentialInput() {
    return this._keyVaultCredential
  }

  // storage_configuration - computed: false, optional: true, required: false
  private _storageConfiguration?: MssqlVirtualMachineStorageConfiguration | undefined; 
  private __storageConfigurationOutput = new MssqlVirtualMachineStorageConfigurationOutputReference(this as any, "storage_configuration", true);
  public get storageConfiguration() {
    return this.__storageConfigurationOutput;
  }
  public putStorageConfiguration(value: MssqlVirtualMachineStorageConfiguration | undefined) {
    this._storageConfiguration = value;
  }
  public resetStorageConfiguration() {
    this._storageConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigurationInput() {
    return this._storageConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MssqlVirtualMachineTimeouts | undefined; 
  private __timeoutsOutput = new MssqlVirtualMachineTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MssqlVirtualMachineTimeouts | undefined) {
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
      r_services_enabled: cdktf.booleanToTerraform(this._rServicesEnabled),
      sql_connectivity_port: cdktf.numberToTerraform(this._sqlConnectivityPort),
      sql_connectivity_type: cdktf.stringToTerraform(this._sqlConnectivityType),
      sql_connectivity_update_password: cdktf.stringToTerraform(this._sqlConnectivityUpdatePassword),
      sql_connectivity_update_username: cdktf.stringToTerraform(this._sqlConnectivityUpdateUsername),
      sql_license_type: cdktf.stringToTerraform(this._sqlLicenseType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
      auto_backup: mssqlVirtualMachineAutoBackupToTerraform(this._autoBackup),
      auto_patching: mssqlVirtualMachineAutoPatchingToTerraform(this._autoPatching),
      key_vault_credential: mssqlVirtualMachineKeyVaultCredentialToTerraform(this._keyVaultCredential),
      storage_configuration: mssqlVirtualMachineStorageConfigurationToTerraform(this._storageConfiguration),
      timeouts: mssqlVirtualMachineTimeoutsToTerraform(this._timeouts),
    };
  }
}
