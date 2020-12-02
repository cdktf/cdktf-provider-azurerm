// https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface AppServiceSlotConfig extends TerraformMetaArguments {
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
export class AppServiceSlotSiteCredential extends ComplexComputedList {

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
export interface AppServiceSlotAuthSettingsFacebook {
  readonly appId: string;
  readonly appSecret: string;
  readonly oauthScopes?: string[];
}
export interface AppServiceSlotAuthSettingsGoogle {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly oauthScopes?: string[];
}
export interface AppServiceSlotAuthSettingsMicrosoft {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly oauthScopes?: string[];
}
export interface AppServiceSlotAuthSettingsTwitter {
  readonly consumerKey: string;
  readonly consumerSecret: string;
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
export interface AppServiceSlotConnectionString {
  readonly name: string;
  readonly type: string;
  readonly value: string;
}
export interface AppServiceSlotIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}
export interface AppServiceSlotLogsApplicationLogsAzureBlobStorage {
  readonly level: string;
  readonly retentionInDays: number;
  readonly sasUrl: string;
}
export interface AppServiceSlotLogsApplicationLogs {
  readonly fileSystemLevel?: string;
  /** azure_blob_storage block */
  readonly azureBlobStorage?: AppServiceSlotLogsApplicationLogsAzureBlobStorage[];
}
export interface AppServiceSlotLogsHttpLogsAzureBlobStorage {
  readonly retentionInDays: number;
  readonly sasUrl: string;
}
export interface AppServiceSlotLogsHttpLogsFileSystem {
  readonly retentionInDays: number;
  readonly retentionInMb: number;
}
export interface AppServiceSlotLogsHttpLogs {
  /** azure_blob_storage block */
  readonly azureBlobStorage?: AppServiceSlotLogsHttpLogsAzureBlobStorage[];
  /** file_system block */
  readonly fileSystem?: AppServiceSlotLogsHttpLogsFileSystem[];
}
export interface AppServiceSlotLogs {
  /** application_logs block */
  readonly applicationLogs?: AppServiceSlotLogsApplicationLogs[];
  /** http_logs block */
  readonly httpLogs?: AppServiceSlotLogsHttpLogs[];
}
export interface AppServiceSlotSiteConfigIpRestriction {
  readonly action?: string;
  readonly ipAddress?: string;
  readonly name?: string;
  readonly priority?: number;
  readonly subnetId?: string;
  readonly virtualNetworkSubnetId?: string;
}
export interface AppServiceSlotSiteConfigScmIpRestriction {
  readonly action?: string;
  readonly ipAddress?: string;
  readonly name?: string;
  readonly priority?: number;
  readonly subnetId?: string;
  readonly virtualNetworkSubnetId?: string;
}
export interface AppServiceSlotSiteConfigCors {
  readonly allowedOrigins: string[];
  readonly supportCredentials?: boolean;
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
export interface AppServiceSlotTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AppServiceSlot extends TerraformResource {

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
      app_service_name: this._appServiceName,
      app_service_plan_id: this._appServicePlanId,
      app_settings: this._appSettings,
      client_affinity_enabled: this._clientAffinityEnabled,
      enabled: this._enabled,
      https_only: this._httpsOnly,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      auth_settings: this._authSettings,
      connection_string: this._connectionString,
      identity: this._identity,
      logs: this._logs,
      site_config: this._siteConfig,
      timeouts: this._timeouts,
    };
  }
}
