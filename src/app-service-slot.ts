// https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceSlotConfig extends cdktf.TerraformMetaArguments {
  readonly appServiceName: string;
  readonly appServicePlanId: string;
  readonly appSettings?: { [key: string]: string };
  readonly clientAffinityEnabled?: boolean;
  readonly enabled?: boolean;
  readonly httpsOnly?: boolean;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** auth_settings block */
  readonly authSettings?: AppServiceSlotAuthSettings[];
  /** connection_string block */
  readonly connectionString?: AppServiceSlotConnectionString[];
  /** identity block */
  readonly identity?: AppServiceSlotIdentity[];
  /** logs block */
  readonly logs?: AppServiceSlotLogs[];
  /** site_config block */
  readonly siteConfig?: AppServiceSlotSiteConfig[];
  /** timeouts block */
  readonly timeouts?: AppServiceSlotTimeouts;
}
export class AppServiceSlotSiteCredential extends cdktf.ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface AppServiceSlotAuthSettingsActiveDirectory {
  readonly allowedAudiences?: string[];
  readonly clientId: string;
  readonly clientSecret?: string;
}

function appServiceSlotAuthSettingsActiveDirectoryToTerraform(struct?: AppServiceSlotAuthSettingsActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedAudiences),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}

export interface AppServiceSlotAuthSettingsFacebook {
  readonly appId: string;
  readonly appSecret: string;
  readonly oauthScopes?: string[];
}

function appServiceSlotAuthSettingsFacebookToTerraform(struct?: AppServiceSlotAuthSettingsFacebook): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_secret: cdktf.stringToTerraform(struct!.appSecret),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
  }
}

export interface AppServiceSlotAuthSettingsGoogle {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly oauthScopes?: string[];
}

function appServiceSlotAuthSettingsGoogleToTerraform(struct?: AppServiceSlotAuthSettingsGoogle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
  }
}

export interface AppServiceSlotAuthSettingsMicrosoft {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly oauthScopes?: string[];
}

function appServiceSlotAuthSettingsMicrosoftToTerraform(struct?: AppServiceSlotAuthSettingsMicrosoft): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
  }
}

export interface AppServiceSlotAuthSettingsTwitter {
  readonly consumerKey: string;
  readonly consumerSecret: string;
}

function appServiceSlotAuthSettingsTwitterToTerraform(struct?: AppServiceSlotAuthSettingsTwitter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    consumer_key: cdktf.stringToTerraform(struct!.consumerKey),
    consumer_secret: cdktf.stringToTerraform(struct!.consumerSecret),
  }
}

export interface AppServiceSlotAuthSettings {
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
  readonly activeDirectory?: AppServiceSlotAuthSettingsActiveDirectory[];
  /** facebook block */
  readonly facebook?: AppServiceSlotAuthSettingsFacebook[];
  /** google block */
  readonly google?: AppServiceSlotAuthSettingsGoogle[];
  /** microsoft block */
  readonly microsoft?: AppServiceSlotAuthSettingsMicrosoft[];
  /** twitter block */
  readonly twitter?: AppServiceSlotAuthSettingsTwitter[];
}

function appServiceSlotAuthSettingsToTerraform(struct?: AppServiceSlotAuthSettings): any {
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
    active_directory: cdktf.listMapper(appServiceSlotAuthSettingsActiveDirectoryToTerraform)(struct!.activeDirectory),
    facebook: cdktf.listMapper(appServiceSlotAuthSettingsFacebookToTerraform)(struct!.facebook),
    google: cdktf.listMapper(appServiceSlotAuthSettingsGoogleToTerraform)(struct!.google),
    microsoft: cdktf.listMapper(appServiceSlotAuthSettingsMicrosoftToTerraform)(struct!.microsoft),
    twitter: cdktf.listMapper(appServiceSlotAuthSettingsTwitterToTerraform)(struct!.twitter),
  }
}

export interface AppServiceSlotConnectionString {
  readonly name: string;
  readonly type: string;
  readonly value: string;
}

function appServiceSlotConnectionStringToTerraform(struct?: AppServiceSlotConnectionString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AppServiceSlotIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}

function appServiceSlotIdentityToTerraform(struct?: AppServiceSlotIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface AppServiceSlotLogsApplicationLogsAzureBlobStorage {
  readonly level: string;
  readonly retentionInDays: number;
  readonly sasUrl: string;
}

function appServiceSlotLogsApplicationLogsAzureBlobStorageToTerraform(struct?: AppServiceSlotLogsApplicationLogsAzureBlobStorage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    sas_url: cdktf.stringToTerraform(struct!.sasUrl),
  }
}

export interface AppServiceSlotLogsApplicationLogs {
  readonly fileSystemLevel?: string;
  /** azure_blob_storage block */
  readonly azureBlobStorage?: AppServiceSlotLogsApplicationLogsAzureBlobStorage[];
}

function appServiceSlotLogsApplicationLogsToTerraform(struct?: AppServiceSlotLogsApplicationLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file_system_level: cdktf.stringToTerraform(struct!.fileSystemLevel),
    azure_blob_storage: cdktf.listMapper(appServiceSlotLogsApplicationLogsAzureBlobStorageToTerraform)(struct!.azureBlobStorage),
  }
}

export interface AppServiceSlotLogsHttpLogsAzureBlobStorage {
  readonly retentionInDays: number;
  readonly sasUrl: string;
}

function appServiceSlotLogsHttpLogsAzureBlobStorageToTerraform(struct?: AppServiceSlotLogsHttpLogsAzureBlobStorage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    sas_url: cdktf.stringToTerraform(struct!.sasUrl),
  }
}

export interface AppServiceSlotLogsHttpLogsFileSystem {
  readonly retentionInDays: number;
  readonly retentionInMb: number;
}

function appServiceSlotLogsHttpLogsFileSystemToTerraform(struct?: AppServiceSlotLogsHttpLogsFileSystem): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    retention_in_mb: cdktf.numberToTerraform(struct!.retentionInMb),
  }
}

export interface AppServiceSlotLogsHttpLogs {
  /** azure_blob_storage block */
  readonly azureBlobStorage?: AppServiceSlotLogsHttpLogsAzureBlobStorage[];
  /** file_system block */
  readonly fileSystem?: AppServiceSlotLogsHttpLogsFileSystem[];
}

function appServiceSlotLogsHttpLogsToTerraform(struct?: AppServiceSlotLogsHttpLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    azure_blob_storage: cdktf.listMapper(appServiceSlotLogsHttpLogsAzureBlobStorageToTerraform)(struct!.azureBlobStorage),
    file_system: cdktf.listMapper(appServiceSlotLogsHttpLogsFileSystemToTerraform)(struct!.fileSystem),
  }
}

export interface AppServiceSlotLogs {
  /** application_logs block */
  readonly applicationLogs?: AppServiceSlotLogsApplicationLogs[];
  /** http_logs block */
  readonly httpLogs?: AppServiceSlotLogsHttpLogs[];
}

function appServiceSlotLogsToTerraform(struct?: AppServiceSlotLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_logs: cdktf.listMapper(appServiceSlotLogsApplicationLogsToTerraform)(struct!.applicationLogs),
    http_logs: cdktf.listMapper(appServiceSlotLogsHttpLogsToTerraform)(struct!.httpLogs),
  }
}

export interface AppServiceSlotSiteConfigIpRestriction {
  readonly action?: string;
  readonly ipAddress?: string;
  readonly name?: string;
  readonly priority?: number;
  readonly subnetId?: string;
  readonly virtualNetworkSubnetId?: string;
}

function appServiceSlotSiteConfigIpRestrictionToTerraform(struct?: AppServiceSlotSiteConfigIpRestriction): any {
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

export interface AppServiceSlotSiteConfigScmIpRestriction {
  readonly action?: string;
  readonly ipAddress?: string;
  readonly name?: string;
  readonly priority?: number;
  readonly subnetId?: string;
  readonly virtualNetworkSubnetId?: string;
}

function appServiceSlotSiteConfigScmIpRestrictionToTerraform(struct?: AppServiceSlotSiteConfigScmIpRestriction): any {
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

export interface AppServiceSlotSiteConfigCors {
  readonly allowedOrigins: string[];
  readonly supportCredentials?: boolean;
}

function appServiceSlotSiteConfigCorsToTerraform(struct?: AppServiceSlotSiteConfigCors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    support_credentials: cdktf.booleanToTerraform(struct!.supportCredentials),
  }
}

export interface AppServiceSlotSiteConfig {
  readonly alwaysOn?: boolean;
  readonly appCommandLine?: string;
  readonly autoSwapSlotName?: string;
  readonly defaultDocuments?: string[];
  readonly dotnetFrameworkVersion?: string;
  readonly ftpsState?: string;
  readonly healthCheckPath?: string;
  readonly http2Enabled?: boolean;
  readonly ipRestriction?: AppServiceSlotSiteConfigIpRestriction[];
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
  readonly scmIpRestriction?: AppServiceSlotSiteConfigScmIpRestriction[];
  readonly scmType?: string;
  readonly scmUseMainIpRestriction?: boolean;
  readonly use32BitWorkerProcess?: boolean;
  readonly websocketsEnabled?: boolean;
  readonly windowsFxVersion?: string;
  /** cors block */
  readonly cors?: AppServiceSlotSiteConfigCors[];
}

function appServiceSlotSiteConfigToTerraform(struct?: AppServiceSlotSiteConfig): any {
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
    ip_restriction: cdktf.listMapper(appServiceSlotSiteConfigIpRestrictionToTerraform)(struct!.ipRestriction),
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
    scm_ip_restriction: cdktf.listMapper(appServiceSlotSiteConfigScmIpRestrictionToTerraform)(struct!.scmIpRestriction),
    scm_type: cdktf.stringToTerraform(struct!.scmType),
    scm_use_main_ip_restriction: cdktf.booleanToTerraform(struct!.scmUseMainIpRestriction),
    use_32_bit_worker_process: cdktf.booleanToTerraform(struct!.use32BitWorkerProcess),
    websockets_enabled: cdktf.booleanToTerraform(struct!.websocketsEnabled),
    windows_fx_version: cdktf.stringToTerraform(struct!.windowsFxVersion),
    cors: cdktf.listMapper(appServiceSlotSiteConfigCorsToTerraform)(struct!.cors),
  }
}

export interface AppServiceSlotTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function appServiceSlotTimeoutsToTerraform(struct?: AppServiceSlotTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AppServiceSlot extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppServiceSlotConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_slot',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appServiceName = config.appServiceName;
    this._appServicePlanId = config.appServicePlanId;
    this._appSettings = config.appSettings;
    this._clientAffinityEnabled = config.clientAffinityEnabled;
    this._enabled = config.enabled;
    this._httpsOnly = config.httpsOnly;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._authSettings = config.authSettings;
    this._connectionString = config.connectionString;
    this._identity = config.identity;
    this._logs = config.logs;
    this._siteConfig = config.siteConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_name - computed: false, optional: false, required: true
  private _appServiceName: string;
  public get appServiceName() {
    return this.getStringAttribute('app_service_name');
  }
  public set appServiceName(value: string) {
    this._appServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceNameInput() {
    return this._appServiceName
  }

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

  // client_affinity_enabled - computed: true, optional: true, required: false
  private _clientAffinityEnabled?: boolean;
  public get clientAffinityEnabled() {
    return this.getBooleanAttribute('client_affinity_enabled');
  }
  public set clientAffinityEnabled(value: boolean) {
    this._clientAffinityEnabled = value;
  }
  public resetClientAffinityEnabled() {
    this._clientAffinityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAffinityEnabledInput() {
    return this._clientAffinityEnabled
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
    return new AppServiceSlotSiteCredential(this, 'site_credential', index);
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
  private _authSettings?: AppServiceSlotAuthSettings[];
  public get authSettings() {
    return this.interpolationForAttribute('auth_settings') as any;
  }
  public set authSettings(value: AppServiceSlotAuthSettings[] ) {
    this._authSettings = value;
  }
  public resetAuthSettings() {
    this._authSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSettingsInput() {
    return this._authSettings
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: AppServiceSlotConnectionString[];
  public get connectionString() {
    return this.interpolationForAttribute('connection_string') as any;
  }
  public set connectionString(value: AppServiceSlotConnectionString[] ) {
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
  private _identity?: AppServiceSlotIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: AppServiceSlotIdentity[] ) {
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
  private _logs?: AppServiceSlotLogs[];
  public get logs() {
    return this.interpolationForAttribute('logs') as any;
  }
  public set logs(value: AppServiceSlotLogs[] ) {
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
  private _siteConfig?: AppServiceSlotSiteConfig[];
  public get siteConfig() {
    return this.interpolationForAttribute('site_config') as any;
  }
  public set siteConfig(value: AppServiceSlotSiteConfig[] ) {
    this._siteConfig = value;
  }
  public resetSiteConfig() {
    this._siteConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteConfigInput() {
    return this._siteConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceSlotTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppServiceSlotTimeouts ) {
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
      app_service_name: cdktf.stringToTerraform(this._appServiceName),
      app_service_plan_id: cdktf.stringToTerraform(this._appServicePlanId),
      app_settings: cdktf.hashMapper(cdktf.anyToTerraform)(this._appSettings),
      client_affinity_enabled: cdktf.booleanToTerraform(this._clientAffinityEnabled),
      enabled: cdktf.booleanToTerraform(this._enabled),
      https_only: cdktf.booleanToTerraform(this._httpsOnly),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      auth_settings: cdktf.listMapper(appServiceSlotAuthSettingsToTerraform)(this._authSettings),
      connection_string: cdktf.listMapper(appServiceSlotConnectionStringToTerraform)(this._connectionString),
      identity: cdktf.listMapper(appServiceSlotIdentityToTerraform)(this._identity),
      logs: cdktf.listMapper(appServiceSlotLogsToTerraform)(this._logs),
      site_config: cdktf.listMapper(appServiceSlotSiteConfigToTerraform)(this._siteConfig),
      timeouts: appServiceSlotTimeoutsToTerraform(this._timeouts),
    };
  }
}
