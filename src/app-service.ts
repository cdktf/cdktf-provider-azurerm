// https://www.terraform.io/docs/providers/azurerm/r/app_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceConfig extends cdktf.TerraformMetaArguments {
  readonly appServicePlanId: string;
  readonly appSettings?: { [key: string]: string };
  readonly clientAffinityEnabled?: boolean;
  readonly clientCertEnabled?: boolean;
  readonly enabled?: boolean;
  readonly httpsOnly?: boolean;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** auth_settings block */
  readonly authSettings?: AppServiceAuthSettings[];
  /** backup block */
  readonly backup?: AppServiceBackup[];
  /** connection_string block */
  readonly connectionString?: AppServiceConnectionString[];
  /** identity block */
  readonly identity?: AppServiceIdentity[];
  /** logs block */
  readonly logs?: AppServiceLogs[];
  /** site_config block */
  readonly siteConfig?: AppServiceSiteConfig[];
  /** source_control block */
  readonly sourceControl?: AppServiceSourceControl[];
  /** storage_account block */
  readonly storageAccount?: AppServiceStorageAccount[];
  /** timeouts block */
  readonly timeouts?: AppServiceTimeouts;
}
export class AppServiceSiteCredential extends cdktf.ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface AppServiceAuthSettingsActiveDirectory {
  readonly allowedAudiences?: string[];
  readonly clientId: string;
  readonly clientSecret?: string;
}

function appServiceAuthSettingsActiveDirectoryToTerraform(struct?: AppServiceAuthSettingsActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedAudiences),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}

export interface AppServiceAuthSettingsFacebook {
  readonly appId: string;
  readonly appSecret: string;
  readonly oauthScopes?: string[];
}

function appServiceAuthSettingsFacebookToTerraform(struct?: AppServiceAuthSettingsFacebook): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_secret: cdktf.stringToTerraform(struct!.appSecret),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
  }
}

export interface AppServiceAuthSettingsGoogle {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly oauthScopes?: string[];
}

function appServiceAuthSettingsGoogleToTerraform(struct?: AppServiceAuthSettingsGoogle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
  }
}

export interface AppServiceAuthSettingsMicrosoft {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly oauthScopes?: string[];
}

function appServiceAuthSettingsMicrosoftToTerraform(struct?: AppServiceAuthSettingsMicrosoft): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
  }
}

export interface AppServiceAuthSettingsTwitter {
  readonly consumerKey: string;
  readonly consumerSecret: string;
}

function appServiceAuthSettingsTwitterToTerraform(struct?: AppServiceAuthSettingsTwitter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    consumer_key: cdktf.stringToTerraform(struct!.consumerKey),
    consumer_secret: cdktf.stringToTerraform(struct!.consumerSecret),
  }
}

export interface AppServiceAuthSettings {
  readonly additionalLoginParams?: { [key: string]: string };
  readonly allowedExternalRedirectUrls?: string[];
  readonly defaultProvider?: string;
  readonly enabled: boolean;
  readonly issuer?: string;
  readonly runtimeVersion?: string;
  readonly tokenRefreshExtensionHours?: number;
  readonly tokenStoreEnabled?: boolean;
  readonly unauthenticatedClientAction?: string;
  /** active_directory block */
  readonly activeDirectory?: AppServiceAuthSettingsActiveDirectory[];
  /** facebook block */
  readonly facebook?: AppServiceAuthSettingsFacebook[];
  /** google block */
  readonly google?: AppServiceAuthSettingsGoogle[];
  /** microsoft block */
  readonly microsoft?: AppServiceAuthSettingsMicrosoft[];
  /** twitter block */
  readonly twitter?: AppServiceAuthSettingsTwitter[];
}

function appServiceAuthSettingsToTerraform(struct?: AppServiceAuthSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    additional_login_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.additionalLoginParams),
    allowed_external_redirect_urls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedExternalRedirectUrls),
    default_provider: cdktf.stringToTerraform(struct!.defaultProvider),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
    token_refresh_extension_hours: cdktf.numberToTerraform(struct!.tokenRefreshExtensionHours),
    token_store_enabled: cdktf.booleanToTerraform(struct!.tokenStoreEnabled),
    unauthenticated_client_action: cdktf.stringToTerraform(struct!.unauthenticatedClientAction),
    active_directory: cdktf.listMapper(appServiceAuthSettingsActiveDirectoryToTerraform)(struct!.activeDirectory),
    facebook: cdktf.listMapper(appServiceAuthSettingsFacebookToTerraform)(struct!.facebook),
    google: cdktf.listMapper(appServiceAuthSettingsGoogleToTerraform)(struct!.google),
    microsoft: cdktf.listMapper(appServiceAuthSettingsMicrosoftToTerraform)(struct!.microsoft),
    twitter: cdktf.listMapper(appServiceAuthSettingsTwitterToTerraform)(struct!.twitter),
  }
}

export interface AppServiceBackupSchedule {
  readonly frequencyInterval: number;
  readonly frequencyUnit: string;
  readonly keepAtLeastOneBackup?: boolean;
  readonly retentionPeriodInDays?: number;
  readonly startTime?: string;
}

function appServiceBackupScheduleToTerraform(struct?: AppServiceBackupSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    frequency_interval: cdktf.numberToTerraform(struct!.frequencyInterval),
    frequency_unit: cdktf.stringToTerraform(struct!.frequencyUnit),
    keep_at_least_one_backup: cdktf.booleanToTerraform(struct!.keepAtLeastOneBackup),
    retention_period_in_days: cdktf.numberToTerraform(struct!.retentionPeriodInDays),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export interface AppServiceBackup {
  readonly enabled?: boolean;
  readonly name: string;
  readonly storageAccountUrl: string;
  /** schedule block */
  readonly schedule: AppServiceBackupSchedule[];
}

function appServiceBackupToTerraform(struct?: AppServiceBackup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    storage_account_url: cdktf.stringToTerraform(struct!.storageAccountUrl),
    schedule: cdktf.listMapper(appServiceBackupScheduleToTerraform)(struct!.schedule),
  }
}

export interface AppServiceConnectionString {
  readonly name: string;
  readonly type: string;
  readonly value: string;
}

function appServiceConnectionStringToTerraform(struct?: AppServiceConnectionString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AppServiceIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}

function appServiceIdentityToTerraform(struct?: AppServiceIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface AppServiceLogsApplicationLogsAzureBlobStorage {
  readonly level: string;
  readonly retentionInDays: number;
  readonly sasUrl: string;
}

function appServiceLogsApplicationLogsAzureBlobStorageToTerraform(struct?: AppServiceLogsApplicationLogsAzureBlobStorage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    sas_url: cdktf.stringToTerraform(struct!.sasUrl),
  }
}

export interface AppServiceLogsApplicationLogs {
  readonly fileSystemLevel?: string;
  /** azure_blob_storage block */
  readonly azureBlobStorage?: AppServiceLogsApplicationLogsAzureBlobStorage[];
}

function appServiceLogsApplicationLogsToTerraform(struct?: AppServiceLogsApplicationLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file_system_level: cdktf.stringToTerraform(struct!.fileSystemLevel),
    azure_blob_storage: cdktf.listMapper(appServiceLogsApplicationLogsAzureBlobStorageToTerraform)(struct!.azureBlobStorage),
  }
}

export interface AppServiceLogsHttpLogsAzureBlobStorage {
  readonly retentionInDays: number;
  readonly sasUrl: string;
}

function appServiceLogsHttpLogsAzureBlobStorageToTerraform(struct?: AppServiceLogsHttpLogsAzureBlobStorage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    sas_url: cdktf.stringToTerraform(struct!.sasUrl),
  }
}

export interface AppServiceLogsHttpLogsFileSystem {
  readonly retentionInDays: number;
  readonly retentionInMb: number;
}

function appServiceLogsHttpLogsFileSystemToTerraform(struct?: AppServiceLogsHttpLogsFileSystem): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    retention_in_mb: cdktf.numberToTerraform(struct!.retentionInMb),
  }
}

export interface AppServiceLogsHttpLogs {
  /** azure_blob_storage block */
  readonly azureBlobStorage?: AppServiceLogsHttpLogsAzureBlobStorage[];
  /** file_system block */
  readonly fileSystem?: AppServiceLogsHttpLogsFileSystem[];
}

function appServiceLogsHttpLogsToTerraform(struct?: AppServiceLogsHttpLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    azure_blob_storage: cdktf.listMapper(appServiceLogsHttpLogsAzureBlobStorageToTerraform)(struct!.azureBlobStorage),
    file_system: cdktf.listMapper(appServiceLogsHttpLogsFileSystemToTerraform)(struct!.fileSystem),
  }
}

export interface AppServiceLogs {
  /** application_logs block */
  readonly applicationLogs?: AppServiceLogsApplicationLogs[];
  /** http_logs block */
  readonly httpLogs?: AppServiceLogsHttpLogs[];
}

function appServiceLogsToTerraform(struct?: AppServiceLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_logs: cdktf.listMapper(appServiceLogsApplicationLogsToTerraform)(struct!.applicationLogs),
    http_logs: cdktf.listMapper(appServiceLogsHttpLogsToTerraform)(struct!.httpLogs),
  }
}

export interface AppServiceSiteConfigIpRestriction {
  readonly action?: string;
  readonly ipAddress?: string;
  readonly name?: string;
  readonly priority?: number;
  readonly subnetId?: string;
  readonly virtualNetworkSubnetId?: string;
}

function appServiceSiteConfigIpRestrictionToTerraform(struct?: AppServiceSiteConfigIpRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}

export interface AppServiceSiteConfigScmIpRestriction {
  readonly action?: string;
  readonly ipAddress?: string;
  readonly name?: string;
  readonly priority?: number;
  readonly subnetId?: string;
  readonly virtualNetworkSubnetId?: string;
}

function appServiceSiteConfigScmIpRestrictionToTerraform(struct?: AppServiceSiteConfigScmIpRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}

export interface AppServiceSiteConfigCors {
  readonly allowedOrigins: string[];
  readonly supportCredentials?: boolean;
}

function appServiceSiteConfigCorsToTerraform(struct?: AppServiceSiteConfigCors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    support_credentials: cdktf.booleanToTerraform(struct!.supportCredentials),
  }
}

export interface AppServiceSiteConfig {
  readonly alwaysOn?: boolean;
  readonly appCommandLine?: string;
  readonly autoSwapSlotName?: string;
  readonly defaultDocuments?: string[];
  readonly dotnetFrameworkVersion?: string;
  readonly ftpsState?: string;
  readonly healthCheckPath?: string;
  readonly http2Enabled?: boolean;
  readonly ipRestriction?: AppServiceSiteConfigIpRestriction[];
  readonly javaContainer?: string;
  readonly javaContainerVersion?: string;
  readonly javaVersion?: string;
  readonly linuxFxVersion?: string;
  readonly localMysqlEnabled?: boolean;
  readonly managedPipelineMode?: string;
  readonly minTlsVersion?: string;
  readonly phpVersion?: string;
  readonly pythonVersion?: string;
  readonly remoteDebuggingEnabled?: boolean;
  readonly remoteDebuggingVersion?: string;
  readonly scmIpRestriction?: AppServiceSiteConfigScmIpRestriction[];
  readonly scmType?: string;
  readonly scmUseMainIpRestriction?: boolean;
  readonly use32BitWorkerProcess?: boolean;
  readonly websocketsEnabled?: boolean;
  readonly windowsFxVersion?: string;
  /** cors block */
  readonly cors?: AppServiceSiteConfigCors[];
}

function appServiceSiteConfigToTerraform(struct?: AppServiceSiteConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    always_on: cdktf.booleanToTerraform(struct!.alwaysOn),
    app_command_line: cdktf.stringToTerraform(struct!.appCommandLine),
    auto_swap_slot_name: cdktf.stringToTerraform(struct!.autoSwapSlotName),
    default_documents: cdktf.listMapper(cdktf.stringToTerraform)(struct!.defaultDocuments),
    dotnet_framework_version: cdktf.stringToTerraform(struct!.dotnetFrameworkVersion),
    ftps_state: cdktf.stringToTerraform(struct!.ftpsState),
    health_check_path: cdktf.stringToTerraform(struct!.healthCheckPath),
    http2_enabled: cdktf.booleanToTerraform(struct!.http2Enabled),
    ip_restriction: cdktf.listMapper(appServiceSiteConfigIpRestrictionToTerraform)(struct!.ipRestriction),
    java_container: cdktf.stringToTerraform(struct!.javaContainer),
    java_container_version: cdktf.stringToTerraform(struct!.javaContainerVersion),
    java_version: cdktf.stringToTerraform(struct!.javaVersion),
    linux_fx_version: cdktf.stringToTerraform(struct!.linuxFxVersion),
    local_mysql_enabled: cdktf.booleanToTerraform(struct!.localMysqlEnabled),
    managed_pipeline_mode: cdktf.stringToTerraform(struct!.managedPipelineMode),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    php_version: cdktf.stringToTerraform(struct!.phpVersion),
    python_version: cdktf.stringToTerraform(struct!.pythonVersion),
    remote_debugging_enabled: cdktf.booleanToTerraform(struct!.remoteDebuggingEnabled),
    remote_debugging_version: cdktf.stringToTerraform(struct!.remoteDebuggingVersion),
    scm_ip_restriction: cdktf.listMapper(appServiceSiteConfigScmIpRestrictionToTerraform)(struct!.scmIpRestriction),
    scm_type: cdktf.stringToTerraform(struct!.scmType),
    scm_use_main_ip_restriction: cdktf.booleanToTerraform(struct!.scmUseMainIpRestriction),
    use_32_bit_worker_process: cdktf.booleanToTerraform(struct!.use32BitWorkerProcess),
    websockets_enabled: cdktf.booleanToTerraform(struct!.websocketsEnabled),
    windows_fx_version: cdktf.stringToTerraform(struct!.windowsFxVersion),
    cors: cdktf.listMapper(appServiceSiteConfigCorsToTerraform)(struct!.cors),
  }
}

export interface AppServiceSourceControl {
  readonly branch?: string;
  readonly manualIntegration?: boolean;
  readonly repoUrl?: string;
  readonly rollbackEnabled?: boolean;
  readonly useMercurial?: boolean;
}

function appServiceSourceControlToTerraform(struct?: AppServiceSourceControl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    manual_integration: cdktf.booleanToTerraform(struct!.manualIntegration),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    rollback_enabled: cdktf.booleanToTerraform(struct!.rollbackEnabled),
    use_mercurial: cdktf.booleanToTerraform(struct!.useMercurial),
  }
}

export interface AppServiceStorageAccount {
  readonly accessKey: string;
  readonly accountName: string;
  readonly mountPath?: string;
  readonly name: string;
  readonly shareName: string;
  readonly type: string;
}

function appServiceStorageAccountToTerraform(struct?: AppServiceStorageAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    account_name: cdktf.stringToTerraform(struct!.accountName),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    share_name: cdktf.stringToTerraform(struct!.shareName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface AppServiceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function appServiceTimeoutsToTerraform(struct?: AppServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AppService extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appServicePlanId = config.appServicePlanId;
    this._appSettings = config.appSettings;
    this._clientAffinityEnabled = config.clientAffinityEnabled;
    this._clientCertEnabled = config.clientCertEnabled;
    this._enabled = config.enabled;
    this._httpsOnly = config.httpsOnly;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._authSettings = config.authSettings;
    this._backup = config.backup;
    this._connectionString = config.connectionString;
    this._identity = config.identity;
    this._logs = config.logs;
    this._siteConfig = config.siteConfig;
    this._sourceControl = config.sourceControl;
    this._storageAccount = config.storageAccount;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_plan_id - computed: false, optional: false, required: true
  private _appServicePlanId: string;
  public get appServicePlanId() {
    return this.getStringAttribute('app_service_plan_id');
  }
  public set appServicePlanId(value: string) {
    this._appServicePlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServicePlanIdInput() {
    return this._appServicePlanId
  }

  // app_settings - computed: true, optional: true, required: false
  private _appSettings?: { [key: string]: string }
  public get appSettings(): { [key: string]: string } {
    return this.interpolationForAttribute('app_settings') as any; // Getting the computed value is not yet implemented
  }
  public set appSettings(value: { [key: string]: string }) {
    this._appSettings = value;
  }
  public resetAppSettings() {
    this._appSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSettingsInput() {
    return this._appSettings
  }

  // client_affinity_enabled - computed: false, optional: true, required: false
  private _clientAffinityEnabled?: boolean;
  public get clientAffinityEnabled() {
    return this.getBooleanAttribute('client_affinity_enabled');
  }
  public set clientAffinityEnabled(value: boolean ) {
    this._clientAffinityEnabled = value;
  }
  public resetClientAffinityEnabled() {
    this._clientAffinityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAffinityEnabledInput() {
    return this._clientAffinityEnabled
  }

  // client_cert_enabled - computed: false, optional: true, required: false
  private _clientCertEnabled?: boolean;
  public get clientCertEnabled() {
    return this.getBooleanAttribute('client_cert_enabled');
  }
  public set clientCertEnabled(value: boolean ) {
    this._clientCertEnabled = value;
  }
  public resetClientCertEnabled() {
    this._clientCertEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertEnabledInput() {
    return this._clientCertEnabled
  }

  // custom_domain_verification_id - computed: true, optional: false, required: false
  public get customDomainVerificationId() {
    return this.getStringAttribute('custom_domain_verification_id');
  }

  // default_site_hostname - computed: true, optional: false, required: false
  public get defaultSiteHostname() {
    return this.getStringAttribute('default_site_hostname');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // https_only - computed: false, optional: true, required: false
  private _httpsOnly?: boolean;
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only');
  }
  public set httpsOnly(value: boolean ) {
    this._httpsOnly = value;
  }
  public resetHttpsOnly() {
    this._httpsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsOnlyInput() {
    return this._httpsOnly
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

  // outbound_ip_address_list - computed: true, optional: false, required: false
  public get outboundIpAddressList() {
    return this.getListAttribute('outbound_ip_address_list');
  }

  // outbound_ip_addresses - computed: true, optional: false, required: false
  public get outboundIpAddresses() {
    return this.getStringAttribute('outbound_ip_addresses');
  }

  // possible_outbound_ip_address_list - computed: true, optional: false, required: false
  public get possibleOutboundIpAddressList() {
    return this.getListAttribute('possible_outbound_ip_address_list');
  }

  // possible_outbound_ip_addresses - computed: true, optional: false, required: false
  public get possibleOutboundIpAddresses() {
    return this.getStringAttribute('possible_outbound_ip_addresses');
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

  // site_credential - computed: true, optional: false, required: false
  public siteCredential(index: string) {
    return new AppServiceSiteCredential(this, 'site_credential', index);
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

  // auth_settings - computed: false, optional: true, required: false
  private _authSettings?: AppServiceAuthSettings[];
  public get authSettings() {
    return this.interpolationForAttribute('auth_settings') as any;
  }
  public set authSettings(value: AppServiceAuthSettings[] ) {
    this._authSettings = value;
  }
  public resetAuthSettings() {
    this._authSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSettingsInput() {
    return this._authSettings
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: AppServiceBackup[];
  public get backup() {
    return this.interpolationForAttribute('backup') as any;
  }
  public set backup(value: AppServiceBackup[] ) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: AppServiceConnectionString[];
  public get connectionString() {
    return this.interpolationForAttribute('connection_string') as any;
  }
  public set connectionString(value: AppServiceConnectionString[] ) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: AppServiceIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: AppServiceIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: AppServiceLogs[];
  public get logs() {
    return this.interpolationForAttribute('logs') as any;
  }
  public set logs(value: AppServiceLogs[] ) {
    this._logs = value;
  }
  public resetLogs() {
    this._logs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs
  }

  // site_config - computed: false, optional: true, required: false
  private _siteConfig?: AppServiceSiteConfig[];
  public get siteConfig() {
    return this.interpolationForAttribute('site_config') as any;
  }
  public set siteConfig(value: AppServiceSiteConfig[] ) {
    this._siteConfig = value;
  }
  public resetSiteConfig() {
    this._siteConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteConfigInput() {
    return this._siteConfig
  }

  // source_control - computed: false, optional: true, required: false
  private _sourceControl?: AppServiceSourceControl[];
  public get sourceControl() {
    return this.interpolationForAttribute('source_control') as any;
  }
  public set sourceControl(value: AppServiceSourceControl[] ) {
    this._sourceControl = value;
  }
  public resetSourceControl() {
    this._sourceControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceControlInput() {
    return this._sourceControl
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: AppServiceStorageAccount[];
  public get storageAccount() {
    return this.interpolationForAttribute('storage_account') as any;
  }
  public set storageAccount(value: AppServiceStorageAccount[] ) {
    this._storageAccount = value;
  }
  public resetStorageAccount() {
    this._storageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppServiceTimeouts ) {
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
      app_service_plan_id: cdktf.stringToTerraform(this._appServicePlanId),
      app_settings: cdktf.hashMapper(cdktf.anyToTerraform)(this._appSettings),
      client_affinity_enabled: cdktf.booleanToTerraform(this._clientAffinityEnabled),
      client_cert_enabled: cdktf.booleanToTerraform(this._clientCertEnabled),
      enabled: cdktf.booleanToTerraform(this._enabled),
      https_only: cdktf.booleanToTerraform(this._httpsOnly),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      auth_settings: cdktf.listMapper(appServiceAuthSettingsToTerraform)(this._authSettings),
      backup: cdktf.listMapper(appServiceBackupToTerraform)(this._backup),
      connection_string: cdktf.listMapper(appServiceConnectionStringToTerraform)(this._connectionString),
      identity: cdktf.listMapper(appServiceIdentityToTerraform)(this._identity),
      logs: cdktf.listMapper(appServiceLogsToTerraform)(this._logs),
      site_config: cdktf.listMapper(appServiceSiteConfigToTerraform)(this._siteConfig),
      source_control: cdktf.listMapper(appServiceSourceControlToTerraform)(this._sourceControl),
      storage_account: cdktf.listMapper(appServiceStorageAccountToTerraform)(this._storageAccount),
      timeouts: appServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
