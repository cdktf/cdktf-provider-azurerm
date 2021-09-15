// https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#administrator_login PostgresqlServer#administrator_login}
  */
  readonly administratorLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#administrator_login_password PostgresqlServer#administrator_login_password}
  */
  readonly administratorLoginPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#auto_grow_enabled PostgresqlServer#auto_grow_enabled}
  */
  readonly autoGrowEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#backup_retention_days PostgresqlServer#backup_retention_days}
  */
  readonly backupRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#create_mode PostgresqlServer#create_mode}
  */
  readonly createMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#creation_source_server_id PostgresqlServer#creation_source_server_id}
  */
  readonly creationSourceServerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#geo_redundant_backup_enabled PostgresqlServer#geo_redundant_backup_enabled}
  */
  readonly geoRedundantBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#infrastructure_encryption_enabled PostgresqlServer#infrastructure_encryption_enabled}
  */
  readonly infrastructureEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#location PostgresqlServer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#name PostgresqlServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#public_network_access_enabled PostgresqlServer#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#resource_group_name PostgresqlServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#restore_point_in_time PostgresqlServer#restore_point_in_time}
  */
  readonly restorePointInTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#sku_name PostgresqlServer#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#ssl_enforcement PostgresqlServer#ssl_enforcement}
  */
  readonly sslEnforcement?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#ssl_enforcement_enabled PostgresqlServer#ssl_enforcement_enabled}
  */
  readonly sslEnforcementEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#ssl_minimal_tls_version_enforced PostgresqlServer#ssl_minimal_tls_version_enforced}
  */
  readonly sslMinimalTlsVersionEnforced?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#storage_mb PostgresqlServer#storage_mb}
  */
  readonly storageMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#tags PostgresqlServer#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#version PostgresqlServer#version}
  */
  readonly version: string;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#identity PostgresqlServer#identity}
  */
  readonly identity?: PostgresqlServerIdentity[];
  /**
  * storage_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#storage_profile PostgresqlServer#storage_profile}
  */
  readonly storageProfile?: PostgresqlServerStorageProfile[];
  /**
  * threat_detection_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#threat_detection_policy PostgresqlServer#threat_detection_policy}
  */
  readonly threatDetectionPolicy?: PostgresqlServerThreatDetectionPolicy[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#timeouts PostgresqlServer#timeouts}
  */
  readonly timeouts?: PostgresqlServerTimeouts;
}
export interface PostgresqlServerIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#type PostgresqlServer#type}
  */
  readonly type: string;
}

function postgresqlServerIdentityToTerraform(struct?: PostgresqlServerIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface PostgresqlServerStorageProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#auto_grow PostgresqlServer#auto_grow}
  */
  readonly autoGrow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#backup_retention_days PostgresqlServer#backup_retention_days}
  */
  readonly backupRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#geo_redundant_backup PostgresqlServer#geo_redundant_backup}
  */
  readonly geoRedundantBackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#storage_mb PostgresqlServer#storage_mb}
  */
  readonly storageMb?: number;
}

function postgresqlServerStorageProfileToTerraform(struct?: PostgresqlServerStorageProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_grow: cdktf.stringToTerraform(struct!.autoGrow),
    backup_retention_days: cdktf.numberToTerraform(struct!.backupRetentionDays),
    geo_redundant_backup: cdktf.stringToTerraform(struct!.geoRedundantBackup),
    storage_mb: cdktf.numberToTerraform(struct!.storageMb),
  }
}

export interface PostgresqlServerThreatDetectionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#disabled_alerts PostgresqlServer#disabled_alerts}
  */
  readonly disabledAlerts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#email_account_admins PostgresqlServer#email_account_admins}
  */
  readonly emailAccountAdmins?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#email_addresses PostgresqlServer#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#enabled PostgresqlServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#retention_days PostgresqlServer#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#storage_account_access_key PostgresqlServer#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#storage_endpoint PostgresqlServer#storage_endpoint}
  */
  readonly storageEndpoint?: string;
}

function postgresqlServerThreatDetectionPolicyToTerraform(struct?: PostgresqlServerThreatDetectionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disabled_alerts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.disabledAlerts),
    email_account_admins: cdktf.booleanToTerraform(struct!.emailAccountAdmins),
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emailAddresses),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
    storage_account_access_key: cdktf.stringToTerraform(struct!.storageAccountAccessKey),
    storage_endpoint: cdktf.stringToTerraform(struct!.storageEndpoint),
  }
}

export interface PostgresqlServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#create PostgresqlServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#delete PostgresqlServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#read PostgresqlServer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html#update PostgresqlServer#update}
  */
  readonly update?: string;
}

function postgresqlServerTimeoutsToTerraform(struct?: PostgresqlServerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html azurerm_postgresql_server}
*/
export class PostgresqlServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_postgresql_server";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_server.html azurerm_postgresql_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlServerConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_postgresql_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._administratorLogin = config.administratorLogin;
    this._administratorLoginPassword = config.administratorLoginPassword;
    this._autoGrowEnabled = config.autoGrowEnabled;
    this._backupRetentionDays = config.backupRetentionDays;
    this._createMode = config.createMode;
    this._creationSourceServerId = config.creationSourceServerId;
    this._geoRedundantBackupEnabled = config.geoRedundantBackupEnabled;
    this._infrastructureEncryptionEnabled = config.infrastructureEncryptionEnabled;
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._restorePointInTime = config.restorePointInTime;
    this._skuName = config.skuName;
    this._sslEnforcement = config.sslEnforcement;
    this._sslEnforcementEnabled = config.sslEnforcementEnabled;
    this._sslMinimalTlsVersionEnforced = config.sslMinimalTlsVersionEnforced;
    this._storageMb = config.storageMb;
    this._tags = config.tags;
    this._version = config.version;
    this._identity = config.identity;
    this._storageProfile = config.storageProfile;
    this._threatDetectionPolicy = config.threatDetectionPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_login - computed: true, optional: true, required: false
  private _administratorLogin?: string;
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }
  public set administratorLogin(value: string) {
    this._administratorLogin = value;
  }
  public resetAdministratorLogin() {
    this._administratorLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginInput() {
    return this._administratorLogin
  }

  // administrator_login_password - computed: false, optional: true, required: false
  private _administratorLoginPassword?: string;
  public get administratorLoginPassword() {
    return this.getStringAttribute('administrator_login_password');
  }
  public set administratorLoginPassword(value: string ) {
    this._administratorLoginPassword = value;
  }
  public resetAdministratorLoginPassword() {
    this._administratorLoginPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginPasswordInput() {
    return this._administratorLoginPassword
  }

  // auto_grow_enabled - computed: true, optional: true, required: false
  private _autoGrowEnabled?: boolean | cdktf.IResolvable;
  public get autoGrowEnabled() {
    return this.getBooleanAttribute('auto_grow_enabled');
  }
  public set autoGrowEnabled(value: boolean | cdktf.IResolvable) {
    this._autoGrowEnabled = value;
  }
  public resetAutoGrowEnabled() {
    this._autoGrowEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoGrowEnabledInput() {
    return this._autoGrowEnabled
  }

  // backup_retention_days - computed: true, optional: true, required: false
  private _backupRetentionDays?: number;
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }
  public set backupRetentionDays(value: number) {
    this._backupRetentionDays = value;
  }
  public resetBackupRetentionDays() {
    this._backupRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionDaysInput() {
    return this._backupRetentionDays
  }

  // create_mode - computed: false, optional: true, required: false
  private _createMode?: string;
  public get createMode() {
    return this.getStringAttribute('create_mode');
  }
  public set createMode(value: string ) {
    this._createMode = value;
  }
  public resetCreateMode() {
    this._createMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createModeInput() {
    return this._createMode
  }

  // creation_source_server_id - computed: false, optional: true, required: false
  private _creationSourceServerId?: string;
  public get creationSourceServerId() {
    return this.getStringAttribute('creation_source_server_id');
  }
  public set creationSourceServerId(value: string ) {
    this._creationSourceServerId = value;
  }
  public resetCreationSourceServerId() {
    this._creationSourceServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationSourceServerIdInput() {
    return this._creationSourceServerId
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // geo_redundant_backup_enabled - computed: true, optional: true, required: false
  private _geoRedundantBackupEnabled?: boolean | cdktf.IResolvable;
  public get geoRedundantBackupEnabled() {
    return this.getBooleanAttribute('geo_redundant_backup_enabled');
  }
  public set geoRedundantBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._geoRedundantBackupEnabled = value;
  }
  public resetGeoRedundantBackupEnabled() {
    this._geoRedundantBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRedundantBackupEnabledInput() {
    return this._geoRedundantBackupEnabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infrastructure_encryption_enabled - computed: false, optional: true, required: false
  private _infrastructureEncryptionEnabled?: boolean | cdktf.IResolvable;
  public get infrastructureEncryptionEnabled() {
    return this.getBooleanAttribute('infrastructure_encryption_enabled');
  }
  public set infrastructureEncryptionEnabled(value: boolean | cdktf.IResolvable ) {
    this._infrastructureEncryptionEnabled = value;
  }
  public resetInfrastructureEncryptionEnabled() {
    this._infrastructureEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureEncryptionEnabledInput() {
    return this._infrastructureEncryptionEnabled
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

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable ) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled
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

  // restore_point_in_time - computed: false, optional: true, required: false
  private _restorePointInTime?: string;
  public get restorePointInTime() {
    return this.getStringAttribute('restore_point_in_time');
  }
  public set restorePointInTime(value: string ) {
    this._restorePointInTime = value;
  }
  public resetRestorePointInTime() {
    this._restorePointInTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorePointInTimeInput() {
    return this._restorePointInTime
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // ssl_enforcement - computed: true, optional: true, required: false
  private _sslEnforcement?: string;
  public get sslEnforcement() {
    return this.getStringAttribute('ssl_enforcement');
  }
  public set sslEnforcement(value: string) {
    this._sslEnforcement = value;
  }
  public resetSslEnforcement() {
    this._sslEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnforcementInput() {
    return this._sslEnforcement
  }

  // ssl_enforcement_enabled - computed: false, optional: true, required: false
  private _sslEnforcementEnabled?: boolean | cdktf.IResolvable;
  public get sslEnforcementEnabled() {
    return this.getBooleanAttribute('ssl_enforcement_enabled');
  }
  public set sslEnforcementEnabled(value: boolean | cdktf.IResolvable ) {
    this._sslEnforcementEnabled = value;
  }
  public resetSslEnforcementEnabled() {
    this._sslEnforcementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnforcementEnabledInput() {
    return this._sslEnforcementEnabled
  }

  // ssl_minimal_tls_version_enforced - computed: false, optional: true, required: false
  private _sslMinimalTlsVersionEnforced?: string;
  public get sslMinimalTlsVersionEnforced() {
    return this.getStringAttribute('ssl_minimal_tls_version_enforced');
  }
  public set sslMinimalTlsVersionEnforced(value: string ) {
    this._sslMinimalTlsVersionEnforced = value;
  }
  public resetSslMinimalTlsVersionEnforced() {
    this._sslMinimalTlsVersionEnforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMinimalTlsVersionEnforcedInput() {
    return this._sslMinimalTlsVersionEnforced
  }

  // storage_mb - computed: true, optional: true, required: false
  private _storageMb?: number;
  public get storageMb() {
    return this.getNumberAttribute('storage_mb');
  }
  public set storageMb(value: number) {
    this._storageMb = value;
  }
  public resetStorageMb() {
    this._storageMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMbInput() {
    return this._storageMb
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

  // version - computed: false, optional: false, required: true
  private _version: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: PostgresqlServerIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: PostgresqlServerIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // storage_profile - computed: false, optional: true, required: false
  private _storageProfile?: PostgresqlServerStorageProfile[];
  public get storageProfile() {
    return this.interpolationForAttribute('storage_profile') as any;
  }
  public set storageProfile(value: PostgresqlServerStorageProfile[] ) {
    this._storageProfile = value;
  }
  public resetStorageProfile() {
    this._storageProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileInput() {
    return this._storageProfile
  }

  // threat_detection_policy - computed: false, optional: true, required: false
  private _threatDetectionPolicy?: PostgresqlServerThreatDetectionPolicy[];
  public get threatDetectionPolicy() {
    return this.interpolationForAttribute('threat_detection_policy') as any;
  }
  public set threatDetectionPolicy(value: PostgresqlServerThreatDetectionPolicy[] ) {
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
  private _timeouts?: PostgresqlServerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PostgresqlServerTimeouts ) {
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
      administrator_login: cdktf.stringToTerraform(this._administratorLogin),
      administrator_login_password: cdktf.stringToTerraform(this._administratorLoginPassword),
      auto_grow_enabled: cdktf.booleanToTerraform(this._autoGrowEnabled),
      backup_retention_days: cdktf.numberToTerraform(this._backupRetentionDays),
      create_mode: cdktf.stringToTerraform(this._createMode),
      creation_source_server_id: cdktf.stringToTerraform(this._creationSourceServerId),
      geo_redundant_backup_enabled: cdktf.booleanToTerraform(this._geoRedundantBackupEnabled),
      infrastructure_encryption_enabled: cdktf.booleanToTerraform(this._infrastructureEncryptionEnabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      restore_point_in_time: cdktf.stringToTerraform(this._restorePointInTime),
      sku_name: cdktf.stringToTerraform(this._skuName),
      ssl_enforcement: cdktf.stringToTerraform(this._sslEnforcement),
      ssl_enforcement_enabled: cdktf.booleanToTerraform(this._sslEnforcementEnabled),
      ssl_minimal_tls_version_enforced: cdktf.stringToTerraform(this._sslMinimalTlsVersionEnforced),
      storage_mb: cdktf.numberToTerraform(this._storageMb),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      identity: cdktf.listMapper(postgresqlServerIdentityToTerraform)(this._identity),
      storage_profile: cdktf.listMapper(postgresqlServerStorageProfileToTerraform)(this._storageProfile),
      threat_detection_policy: cdktf.listMapper(postgresqlServerThreatDetectionPolicyToTerraform)(this._threatDetectionPolicy),
      timeouts: postgresqlServerTimeoutsToTerraform(this._timeouts),
    };
  }
}
