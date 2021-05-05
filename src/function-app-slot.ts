// https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionAppSlotConfig extends cdktf.TerraformMetaArguments {
  readonly appServicePlanId: string;
  readonly appSettings?: { [key: string]: string };
  readonly clientAffinityEnabled?: boolean;
  readonly dailyMemoryTimeQuota?: number;
  readonly enableBuiltinLogging?: boolean;
  readonly enabled?: boolean;
  readonly functionAppName: string;
  readonly httpsOnly?: boolean;
  readonly location: string;
  readonly name: string;
  readonly osType?: string;
  readonly resourceGroupName: string;
  readonly storageAccountAccessKey: string;
  readonly storageAccountName: string;
  readonly tags?: { [key: string]: string };
  readonly version?: string;
  /** auth_settings block */
  readonly authSettings?: FunctionAppSlotAuthSettings[];
  /** connection_string block */
  readonly connectionString?: FunctionAppSlotConnectionString[];
  /** identity block */
  readonly identity?: FunctionAppSlotIdentity[];
  /** site_config block */
  readonly siteConfig?: FunctionAppSlotSiteConfig[];
  /** timeouts block */
  readonly timeouts?: FunctionAppSlotTimeouts;
}
export class FunctionAppSlotSiteCredential extends cdktf.ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface FunctionAppSlotAuthSettingsActiveDirectory {
  readonly allowedAudiences?: string[];
  readonly clientId: string;
  readonly clientSecret?: string;
}

function functionAppSlotAuthSettingsActiveDirectoryToTerraform(struct?: FunctionAppSlotAuthSettingsActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedAudiences),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}

export interface FunctionAppSlotAuthSettingsFacebook {
  readonly appId: string;
  readonly appSecret: string;
  readonly oauthScopes?: string[];
}

function functionAppSlotAuthSettingsFacebookToTerraform(struct?: FunctionAppSlotAuthSettingsFacebook): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_secret: cdktf.stringToTerraform(struct!.appSecret),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
  }
}

export interface FunctionAppSlotAuthSettingsGoogle {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly oauthScopes?: string[];
}

function functionAppSlotAuthSettingsGoogleToTerraform(struct?: FunctionAppSlotAuthSettingsGoogle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
  }
}

export interface FunctionAppSlotAuthSettingsMicrosoft {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly oauthScopes?: string[];
}

function functionAppSlotAuthSettingsMicrosoftToTerraform(struct?: FunctionAppSlotAuthSettingsMicrosoft): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
  }
}

export interface FunctionAppSlotAuthSettingsTwitter {
  readonly consumerKey: string;
  readonly consumerSecret: string;
}

function functionAppSlotAuthSettingsTwitterToTerraform(struct?: FunctionAppSlotAuthSettingsTwitter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    consumer_key: cdktf.stringToTerraform(struct!.consumerKey),
    consumer_secret: cdktf.stringToTerraform(struct!.consumerSecret),
  }
}

export interface FunctionAppSlotAuthSettings {
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
  readonly activeDirectory?: FunctionAppSlotAuthSettingsActiveDirectory[];
  /** facebook block */
  readonly facebook?: FunctionAppSlotAuthSettingsFacebook[];
  /** google block */
  readonly google?: FunctionAppSlotAuthSettingsGoogle[];
  /** microsoft block */
  readonly microsoft?: FunctionAppSlotAuthSettingsMicrosoft[];
  /** twitter block */
  readonly twitter?: FunctionAppSlotAuthSettingsTwitter[];
}

function functionAppSlotAuthSettingsToTerraform(struct?: FunctionAppSlotAuthSettings): any {
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
    active_directory: cdktf.listMapper(functionAppSlotAuthSettingsActiveDirectoryToTerraform)(struct!.activeDirectory),
    facebook: cdktf.listMapper(functionAppSlotAuthSettingsFacebookToTerraform)(struct!.facebook),
    google: cdktf.listMapper(functionAppSlotAuthSettingsGoogleToTerraform)(struct!.google),
    microsoft: cdktf.listMapper(functionAppSlotAuthSettingsMicrosoftToTerraform)(struct!.microsoft),
    twitter: cdktf.listMapper(functionAppSlotAuthSettingsTwitterToTerraform)(struct!.twitter),
  }
}

export interface FunctionAppSlotConnectionString {
  readonly name: string;
  readonly type: string;
  readonly value: string;
}

function functionAppSlotConnectionStringToTerraform(struct?: FunctionAppSlotConnectionString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface FunctionAppSlotIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}

function functionAppSlotIdentityToTerraform(struct?: FunctionAppSlotIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface FunctionAppSlotSiteConfigIpRestrictionHeaders {
  readonly xAzureFdid?: string[];
  readonly xFdHealthProbe?: string[];
  readonly xForwardedFor?: string[];
  readonly xForwardedHost?: string[];
}

function functionAppSlotSiteConfigIpRestrictionHeadersToTerraform(struct?: FunctionAppSlotSiteConfigIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    x_azure_fdid: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xAzureFdid),
    x_fd_health_probe: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xFdHealthProbe),
    x_forwarded_for: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedFor),
    x_forwarded_host: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedHost),
  }
}

export interface FunctionAppSlotSiteConfigIpRestriction {
  readonly action?: string;
  readonly headers?: FunctionAppSlotSiteConfigIpRestrictionHeaders[];
  readonly ipAddress?: string;
  readonly name?: string;
  readonly priority?: number;
  readonly serviceTag?: string;
  readonly virtualNetworkSubnetId?: string;
}

function functionAppSlotSiteConfigIpRestrictionToTerraform(struct?: FunctionAppSlotSiteConfigIpRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    headers: cdktf.listMapper(functionAppSlotSiteConfigIpRestrictionHeadersToTerraform)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}

export interface FunctionAppSlotSiteConfigScmIpRestrictionHeaders {
  readonly xAzureFdid?: string[];
  readonly xFdHealthProbe?: string[];
  readonly xForwardedFor?: string[];
  readonly xForwardedHost?: string[];
}

function functionAppSlotSiteConfigScmIpRestrictionHeadersToTerraform(struct?: FunctionAppSlotSiteConfigScmIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    x_azure_fdid: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xAzureFdid),
    x_fd_health_probe: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xFdHealthProbe),
    x_forwarded_for: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedFor),
    x_forwarded_host: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedHost),
  }
}

export interface FunctionAppSlotSiteConfigScmIpRestriction {
  readonly action?: string;
  readonly headers?: FunctionAppSlotSiteConfigScmIpRestrictionHeaders[];
  readonly ipAddress?: string;
  readonly name?: string;
  readonly priority?: number;
  readonly serviceTag?: string;
  readonly virtualNetworkSubnetId?: string;
}

function functionAppSlotSiteConfigScmIpRestrictionToTerraform(struct?: FunctionAppSlotSiteConfigScmIpRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    headers: cdktf.listMapper(functionAppSlotSiteConfigScmIpRestrictionHeadersToTerraform)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}

export interface FunctionAppSlotSiteConfigCors {
  readonly allowedOrigins: string[];
  readonly supportCredentials?: boolean;
}

function functionAppSlotSiteConfigCorsToTerraform(struct?: FunctionAppSlotSiteConfigCors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    support_credentials: cdktf.booleanToTerraform(struct!.supportCredentials),
  }
}

export interface FunctionAppSlotSiteConfig {
  readonly alwaysOn?: boolean;
  readonly autoSwapSlotName?: string;
  readonly ftpsState?: string;
  readonly healthCheckPath?: string;
  readonly http2Enabled?: boolean;
  readonly ipRestriction?: FunctionAppSlotSiteConfigIpRestriction[];
  readonly javaVersion?: string;
  readonly linuxFxVersion?: string;
  readonly minTlsVersion?: string;
  readonly preWarmedInstanceCount?: number;
  readonly scmIpRestriction?: FunctionAppSlotSiteConfigScmIpRestriction[];
  readonly scmType?: string;
  readonly scmUseMainIpRestriction?: boolean;
  readonly use32BitWorkerProcess?: boolean;
  readonly websocketsEnabled?: boolean;
  /** cors block */
  readonly cors?: FunctionAppSlotSiteConfigCors[];
}

function functionAppSlotSiteConfigToTerraform(struct?: FunctionAppSlotSiteConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    always_on: cdktf.booleanToTerraform(struct!.alwaysOn),
    auto_swap_slot_name: cdktf.stringToTerraform(struct!.autoSwapSlotName),
    ftps_state: cdktf.stringToTerraform(struct!.ftpsState),
    health_check_path: cdktf.stringToTerraform(struct!.healthCheckPath),
    http2_enabled: cdktf.booleanToTerraform(struct!.http2Enabled),
    ip_restriction: cdktf.listMapper(functionAppSlotSiteConfigIpRestrictionToTerraform)(struct!.ipRestriction),
    java_version: cdktf.stringToTerraform(struct!.javaVersion),
    linux_fx_version: cdktf.stringToTerraform(struct!.linuxFxVersion),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    pre_warmed_instance_count: cdktf.numberToTerraform(struct!.preWarmedInstanceCount),
    scm_ip_restriction: cdktf.listMapper(functionAppSlotSiteConfigScmIpRestrictionToTerraform)(struct!.scmIpRestriction),
    scm_type: cdktf.stringToTerraform(struct!.scmType),
    scm_use_main_ip_restriction: cdktf.booleanToTerraform(struct!.scmUseMainIpRestriction),
    use_32_bit_worker_process: cdktf.booleanToTerraform(struct!.use32BitWorkerProcess),
    websockets_enabled: cdktf.booleanToTerraform(struct!.websocketsEnabled),
    cors: cdktf.listMapper(functionAppSlotSiteConfigCorsToTerraform)(struct!.cors),
  }
}

export interface FunctionAppSlotTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function functionAppSlotTimeoutsToTerraform(struct?: FunctionAppSlotTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class FunctionAppSlot extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FunctionAppSlotConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_function_app_slot',
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
    this._dailyMemoryTimeQuota = config.dailyMemoryTimeQuota;
    this._enableBuiltinLogging = config.enableBuiltinLogging;
    this._enabled = config.enabled;
    this._functionAppName = config.functionAppName;
    this._httpsOnly = config.httpsOnly;
    this._location = config.location;
    this._name = config.name;
    this._osType = config.osType;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountAccessKey = config.storageAccountAccessKey;
    this._storageAccountName = config.storageAccountName;
    this._tags = config.tags;
    this._version = config.version;
    this._authSettings = config.authSettings;
    this._connectionString = config.connectionString;
    this._identity = config.identity;
    this._siteConfig = config.siteConfig;
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

  // daily_memory_time_quota - computed: false, optional: true, required: false
  private _dailyMemoryTimeQuota?: number;
  public get dailyMemoryTimeQuota() {
    return this.getNumberAttribute('daily_memory_time_quota');
  }
  public set dailyMemoryTimeQuota(value: number ) {
    this._dailyMemoryTimeQuota = value;
  }
  public resetDailyMemoryTimeQuota() {
    this._dailyMemoryTimeQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyMemoryTimeQuotaInput() {
    return this._dailyMemoryTimeQuota
  }

  // default_hostname - computed: true, optional: false, required: false
  public get defaultHostname() {
    return this.getStringAttribute('default_hostname');
  }

  // enable_builtin_logging - computed: false, optional: true, required: false
  private _enableBuiltinLogging?: boolean;
  public get enableBuiltinLogging() {
    return this.getBooleanAttribute('enable_builtin_logging');
  }
  public set enableBuiltinLogging(value: boolean ) {
    this._enableBuiltinLogging = value;
  }
  public resetEnableBuiltinLogging() {
    this._enableBuiltinLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBuiltinLoggingInput() {
    return this._enableBuiltinLogging
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

  // function_app_name - computed: false, optional: false, required: true
  private _functionAppName: string;
  public get functionAppName() {
    return this.getStringAttribute('function_app_name');
  }
  public set functionAppName(value: string) {
    this._functionAppName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAppNameInput() {
    return this._functionAppName
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

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // os_type - computed: false, optional: true, required: false
  private _osType?: string;
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string ) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType
  }

  // outbound_ip_addresses - computed: true, optional: false, required: false
  public get outboundIpAddresses() {
    return this.getStringAttribute('outbound_ip_addresses');
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
    return new FunctionAppSlotSiteCredential(this, 'site_credential', index);
  }

  // storage_account_access_key - computed: false, optional: false, required: true
  private _storageAccountAccessKey: string;
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

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName: string;
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName
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

  // version - computed: false, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string ) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // auth_settings - computed: false, optional: true, required: false
  private _authSettings?: FunctionAppSlotAuthSettings[];
  public get authSettings() {
    return this.interpolationForAttribute('auth_settings') as any;
  }
  public set authSettings(value: FunctionAppSlotAuthSettings[] ) {
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
  private _connectionString?: FunctionAppSlotConnectionString[];
  public get connectionString() {
    return this.interpolationForAttribute('connection_string') as any;
  }
  public set connectionString(value: FunctionAppSlotConnectionString[] ) {
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
  private _identity?: FunctionAppSlotIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: FunctionAppSlotIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // site_config - computed: false, optional: true, required: false
  private _siteConfig?: FunctionAppSlotSiteConfig[];
  public get siteConfig() {
    return this.interpolationForAttribute('site_config') as any;
  }
  public set siteConfig(value: FunctionAppSlotSiteConfig[] ) {
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
  private _timeouts?: FunctionAppSlotTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FunctionAppSlotTimeouts ) {
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
      daily_memory_time_quota: cdktf.numberToTerraform(this._dailyMemoryTimeQuota),
      enable_builtin_logging: cdktf.booleanToTerraform(this._enableBuiltinLogging),
      enabled: cdktf.booleanToTerraform(this._enabled),
      function_app_name: cdktf.stringToTerraform(this._functionAppName),
      https_only: cdktf.booleanToTerraform(this._httpsOnly),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      os_type: cdktf.stringToTerraform(this._osType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_access_key: cdktf.stringToTerraform(this._storageAccountAccessKey),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      auth_settings: cdktf.listMapper(functionAppSlotAuthSettingsToTerraform)(this._authSettings),
      connection_string: cdktf.listMapper(functionAppSlotConnectionStringToTerraform)(this._connectionString),
      identity: cdktf.listMapper(functionAppSlotIdentityToTerraform)(this._identity),
      site_config: cdktf.listMapper(functionAppSlotSiteConfigToTerraform)(this._siteConfig),
      timeouts: functionAppSlotTimeoutsToTerraform(this._timeouts),
    };
  }
}
