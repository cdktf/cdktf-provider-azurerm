// https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface FunctionAppSlotConfig extends TerraformMetaArguments {
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
export class FunctionAppSlotSiteCredential extends ComplexComputedList {

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
export interface FunctionAppSlotAuthSettingsFacebook {
  readonly appId: string;
  readonly appSecret: string;
  readonly oauthScopes?: string[];
}
export interface FunctionAppSlotAuthSettingsGoogle {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly oauthScopes?: string[];
}
export interface FunctionAppSlotAuthSettingsMicrosoft {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly oauthScopes?: string[];
}
export interface FunctionAppSlotAuthSettingsTwitter {
  readonly consumerKey: string;
  readonly consumerSecret: string;
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
export interface FunctionAppSlotConnectionString {
  readonly name: string;
  readonly type: string;
  readonly value: string;
}
export interface FunctionAppSlotIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}
export interface FunctionAppSlotSiteConfigIpRestriction {
  readonly action?: string;
  readonly ipAddress?: string;
  readonly name?: string;
  readonly priority?: number;
  readonly subnetId?: string;
  readonly virtualNetworkSubnetId?: string;
}
export interface FunctionAppSlotSiteConfigScmIpRestriction {
  readonly action?: string;
  readonly ipAddress?: string;
  readonly name?: string;
  readonly priority?: number;
  readonly subnetId?: string;
  readonly virtualNetworkSubnetId?: string;
}
export interface FunctionAppSlotSiteConfigCors {
  readonly allowedOrigins: string[];
  readonly supportCredentials?: boolean;
}
export interface FunctionAppSlotSiteConfig {
  readonly alwaysOn?: boolean;
  readonly autoSwapSlotName?: string;
  readonly ftpsState?: string;
  readonly healthCheckPath?: string;
  readonly http2Enabled?: boolean;
  readonly ipRestriction?: FunctionAppSlotSiteConfigIpRestriction[];
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
export interface FunctionAppSlotTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class FunctionAppSlot extends TerraformResource {

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
      app_service_plan_id: this._appServicePlanId,
      app_settings: this._appSettings,
      client_affinity_enabled: this._clientAffinityEnabled,
      daily_memory_time_quota: this._dailyMemoryTimeQuota,
      enable_builtin_logging: this._enableBuiltinLogging,
      enabled: this._enabled,
      function_app_name: this._functionAppName,
      https_only: this._httpsOnly,
      location: this._location,
      name: this._name,
      os_type: this._osType,
      resource_group_name: this._resourceGroupName,
      storage_account_access_key: this._storageAccountAccessKey,
      storage_account_name: this._storageAccountName,
      tags: this._tags,
      version: this._version,
      auth_settings: this._authSettings,
      connection_string: this._connectionString,
      identity: this._identity,
      site_config: this._siteConfig,
      timeouts: this._timeouts,
    };
  }
}
