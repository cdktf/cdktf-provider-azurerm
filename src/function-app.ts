// https://www.terraform.io/docs/providers/azurerm/r/function_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface FunctionAppConfig extends TerraformMetaArguments {
  readonly appServicePlanId: string;
  readonly appSettings?: { [key: string]: string };
  readonly clientAffinityEnabled?: boolean;
  readonly enableBuiltinLogging?: boolean;
  readonly enabled?: boolean;
  readonly httpsOnly?: boolean;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly storageConnectionString: string;
  readonly tags?: { [key: string]: string };
  readonly version?: string;
  /** auth_settings block */
  readonly authSettings?: FunctionAppAuthSettings[];
  /** connection_string block */
  readonly connectionString?: FunctionAppConnectionString[];
  /** identity block */
  readonly identity?: FunctionAppIdentity[];
  /** site_config block */
  readonly siteConfig?: FunctionAppSiteConfig[];
  /** timeouts block */
  readonly timeouts?: FunctionAppTimeouts;
}
export class FunctionAppSiteCredential extends ComplexComputedList {

  // password - computed: true, optional: false, required: true
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: true
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface FunctionAppAuthSettingsActiveDirectory {
  readonly allowedAudiences?: string[];
  readonly clientId: string;
  readonly clientSecret?: string;
}
export interface FunctionAppAuthSettingsFacebook {
  readonly appId: string;
  readonly appSecret: string;
  readonly oauthScopes?: string[];
}
export interface FunctionAppAuthSettingsGoogle {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly oauthScopes?: string[];
}
export interface FunctionAppAuthSettingsMicrosoft {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly oauthScopes?: string[];
}
export interface FunctionAppAuthSettingsTwitter {
  readonly consumerKey: string;
  readonly consumerSecret: string;
}
export interface FunctionAppAuthSettings {
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
  readonly activeDirectory?: FunctionAppAuthSettingsActiveDirectory[];
  /** facebook block */
  readonly facebook?: FunctionAppAuthSettingsFacebook[];
  /** google block */
  readonly google?: FunctionAppAuthSettingsGoogle[];
  /** microsoft block */
  readonly microsoft?: FunctionAppAuthSettingsMicrosoft[];
  /** twitter block */
  readonly twitter?: FunctionAppAuthSettingsTwitter[];
}
export interface FunctionAppConnectionString {
  readonly name: string;
  readonly type: string;
  readonly value: string;
}
export interface FunctionAppIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}
export interface FunctionAppSiteConfigIpRestriction {
  readonly ipAddress?: string;
  readonly subnetId?: string;
}
export interface FunctionAppSiteConfigCors {
  readonly allowedOrigins: string[];
  readonly supportCredentials?: boolean;
}
export interface FunctionAppSiteConfig {
  readonly alwaysOn?: boolean;
  readonly ftpsState?: string;
  readonly http2Enabled?: boolean;
  readonly ipRestriction?: FunctionAppSiteConfigIpRestriction[];
  readonly linuxFxVersion?: string;
  readonly minTlsVersion?: string;
  readonly use32BitWorkerProcess?: boolean;
  readonly websocketsEnabled?: boolean;
  /** cors block */
  readonly cors?: FunctionAppSiteConfigCors[];
}
export interface FunctionAppTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class FunctionApp extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FunctionAppConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_function_app',
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
    this._enableBuiltinLogging = config.enableBuiltinLogging;
    this._enabled = config.enabled;
    this._httpsOnly = config.httpsOnly;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._storageConnectionString = config.storageConnectionString;
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
    return this._appServicePlanId;
  }
  public set appServicePlanId(value: string) {
    this._appServicePlanId = value;
  }

  // app_settings - computed: false, optional: true, required: false
  private _appSettings?: { [key: string]: string };
  public get appSettings() {
    return this._appSettings;
  }
  public set appSettings(value: { [key: string]: string } | undefined) {
    this._appSettings = value;
  }

  // client_affinity_enabled - computed: true, optional: true, required: false
  private _clientAffinityEnabled?: boolean;
  public get clientAffinityEnabled() {
    return this._clientAffinityEnabled ?? this.getBooleanAttribute('client_affinity_enabled');
  }
  public set clientAffinityEnabled(value: boolean | undefined) {
    this._clientAffinityEnabled = value;
  }

  // default_hostname - computed: true, optional: false, required: true
  public get defaultHostname() {
    return this.getStringAttribute('default_hostname');
  }

  // enable_builtin_logging - computed: false, optional: true, required: false
  private _enableBuiltinLogging?: boolean;
  public get enableBuiltinLogging() {
    return this._enableBuiltinLogging;
  }
  public set enableBuiltinLogging(value: boolean | undefined) {
    this._enableBuiltinLogging = value;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // https_only - computed: false, optional: true, required: false
  private _httpsOnly?: boolean;
  public get httpsOnly() {
    return this._httpsOnly;
  }
  public set httpsOnly(value: boolean | undefined) {
    this._httpsOnly = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kind - computed: true, optional: false, required: true
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // outbound_ip_addresses - computed: true, optional: false, required: true
  public get outboundIpAddresses() {
    return this.getStringAttribute('outbound_ip_addresses');
  }

  // possible_outbound_ip_addresses - computed: true, optional: false, required: true
  public get possibleOutboundIpAddresses() {
    return this.getStringAttribute('possible_outbound_ip_addresses');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // site_credential - computed: true, optional: false, required: true
  public siteCredential(index: string) {
    return new FunctionAppSiteCredential(this, 'site_credential', index);
  }

  // storage_connection_string - computed: false, optional: false, required: true
  private _storageConnectionString: string;
  public get storageConnectionString() {
    return this._storageConnectionString;
  }
  public set storageConnectionString(value: string) {
    this._storageConnectionString = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string;
  public get version() {
    return this._version;
  }
  public set version(value: string | undefined) {
    this._version = value;
  }

  // auth_settings - computed: false, optional: true, required: false
  private _authSettings?: FunctionAppAuthSettings[];
  public get authSettings() {
    return this._authSettings;
  }
  public set authSettings(value: FunctionAppAuthSettings[] | undefined) {
    this._authSettings = value;
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: FunctionAppConnectionString[];
  public get connectionString() {
    return this._connectionString;
  }
  public set connectionString(value: FunctionAppConnectionString[] | undefined) {
    this._connectionString = value;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: FunctionAppIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: FunctionAppIdentity[] | undefined) {
    this._identity = value;
  }

  // site_config - computed: false, optional: true, required: false
  private _siteConfig?: FunctionAppSiteConfig[];
  public get siteConfig() {
    return this._siteConfig;
  }
  public set siteConfig(value: FunctionAppSiteConfig[] | undefined) {
    this._siteConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FunctionAppTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: FunctionAppTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_service_plan_id: this._appServicePlanId,
      app_settings: this._appSettings,
      client_affinity_enabled: this._clientAffinityEnabled,
      enable_builtin_logging: this._enableBuiltinLogging,
      enabled: this._enabled,
      https_only: this._httpsOnly,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      storage_connection_string: this._storageConnectionString,
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
