// https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MssqlVirtualMachineConfig extends TerraformMetaArguments {
  readonly rServicesEnabled?: boolean;
  readonly sqlConnectivityPort?: number;
  readonly sqlConnectivityType?: string;
  readonly sqlConnectivityUpdatePassword?: string;
  readonly sqlConnectivityUpdateUsername?: string;
  readonly sqlLicenseType: string;
  readonly tags?: { [key: string]: string };
  readonly virtualMachineId: string;
  /** auto_patching block */
  readonly autoPatching?: MssqlVirtualMachineAutoPatching[];
  /** key_vault_credential block */
  readonly keyVaultCredential?: MssqlVirtualMachineKeyVaultCredential[];
  /** storage_configuration block */
  readonly storageConfiguration?: MssqlVirtualMachineStorageConfiguration[];
  /** timeouts block */
  readonly timeouts?: MssqlVirtualMachineTimeouts;
}
export interface MssqlVirtualMachineAutoPatching {
  readonly dayOfWeek: string;
  readonly maintenanceWindowDurationInMinutes: number;
  readonly maintenanceWindowStartingHour: number;
}
export interface MssqlVirtualMachineKeyVaultCredential {
  readonly keyVaultUrl: string;
  readonly name: string;
  readonly servicePrincipalName: string;
  readonly servicePrincipalSecret: string;
}
export interface MssqlVirtualMachineStorageConfigurationDataSettings {
  readonly defaultFilePath: string;
  readonly luns: number[];
}
export interface MssqlVirtualMachineStorageConfigurationLogSettings {
  readonly defaultFilePath: string;
  readonly luns: number[];
}
export interface MssqlVirtualMachineStorageConfigurationTempDbSettings {
  readonly defaultFilePath: string;
  readonly luns: number[];
}
export interface MssqlVirtualMachineStorageConfiguration {
  readonly diskType: string;
  readonly storageWorkloadType: string;
  /** data_settings block */
  readonly dataSettings?: MssqlVirtualMachineStorageConfigurationDataSettings[];
  /** log_settings block */
  readonly logSettings?: MssqlVirtualMachineStorageConfigurationLogSettings[];
  /** temp_db_settings block */
  readonly tempDbSettings?: MssqlVirtualMachineStorageConfigurationTempDbSettings[];
}
export interface MssqlVirtualMachineTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class MssqlVirtualMachine extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _rServicesEnabled?: boolean;
  public get rServicesEnabled() {
    return this.getBooleanAttribute('r_services_enabled');
  }
  public set rServicesEnabled(value: boolean ) {
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
  private _sqlConnectivityPort?: number;
  public get sqlConnectivityPort() {
    return this.getNumberAttribute('sql_connectivity_port');
  }
  public set sqlConnectivityPort(value: number ) {
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
  private _sqlConnectivityType?: string;
  public get sqlConnectivityType() {
    return this.getStringAttribute('sql_connectivity_type');
  }
  public set sqlConnectivityType(value: string ) {
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
  private _sqlConnectivityUpdatePassword?: string;
  public get sqlConnectivityUpdatePassword() {
    return this.getStringAttribute('sql_connectivity_update_password');
  }
  public set sqlConnectivityUpdatePassword(value: string ) {
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
  private _sqlConnectivityUpdateUsername?: string;
  public get sqlConnectivityUpdateUsername() {
    return this.getStringAttribute('sql_connectivity_update_username');
  }
  public set sqlConnectivityUpdateUsername(value: string ) {
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
  private _sqlLicenseType: string;
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

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId: string;
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

  // auto_patching - computed: false, optional: true, required: false
  private _autoPatching?: MssqlVirtualMachineAutoPatching[];
  public get autoPatching() {
    return this.interpolationForAttribute('auto_patching') as any;
  }
  public set autoPatching(value: MssqlVirtualMachineAutoPatching[] ) {
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
  private _keyVaultCredential?: MssqlVirtualMachineKeyVaultCredential[];
  public get keyVaultCredential() {
    return this.interpolationForAttribute('key_vault_credential') as any;
  }
  public set keyVaultCredential(value: MssqlVirtualMachineKeyVaultCredential[] ) {
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
  private _storageConfiguration?: MssqlVirtualMachineStorageConfiguration[];
  public get storageConfiguration() {
    return this.interpolationForAttribute('storage_configuration') as any;
  }
  public set storageConfiguration(value: MssqlVirtualMachineStorageConfiguration[] ) {
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
  private _timeouts?: MssqlVirtualMachineTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MssqlVirtualMachineTimeouts ) {
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
      r_services_enabled: this._rServicesEnabled,
      sql_connectivity_port: this._sqlConnectivityPort,
      sql_connectivity_type: this._sqlConnectivityType,
      sql_connectivity_update_password: this._sqlConnectivityUpdatePassword,
      sql_connectivity_update_username: this._sqlConnectivityUpdateUsername,
      sql_license_type: this._sqlLicenseType,
      tags: this._tags,
      virtual_machine_id: this._virtualMachineId,
      auto_patching: this._autoPatching,
      key_vault_credential: this._keyVaultCredential,
      storage_configuration: this._storageConfiguration,
      timeouts: this._timeouts,
    };
  }
}
