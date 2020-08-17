// https://www.terraform.io/docs/providers/azurerm/r/app_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface AppServiceConfig extends TerraformMetaArguments {
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
  /** storage_account block */
  readonly storageAccount?: AppServiceStorageAccount[];
  /** timeouts block */
  readonly timeouts?: AppServiceTimeouts;
}
export class AppServiceSiteCredential extends ComplexComputedList {

  // password - computed: true, optional: false, required: true
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: true
  public get username() {
    return this.getStringAttribute('username');
  }
}
export class AppServiceSourceControl extends ComplexComputedList {

  // branch - computed: true, optional: false, required: true
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // repo_url - computed: true, optional: false, required: true
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
}
export interface AppServiceAuthSettingsActiveDirectory {
  readonly allowedAudiences?: string[];
  readonly clientId: string;
  readonly clientSecret?: string;
}
export interface AppServiceAuthSettingsFacebook {
  readonly appId: string;
  readonly appSecret: string;
  readonly oauthScopes?: string[];
}
export interface AppServiceAuthSettingsGoogle {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly oauthScopes?: string[];
}
export interface AppServiceAuthSettingsMicrosoft {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly oauthScopes?: string[];
}
export interface AppServiceAuthSettingsTwitter {
  readonly consumerKey: string;
  readonly consumerSecret: string;
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
export interface AppServiceBackupSchedule {
  readonly frequencyInterval: number;
  readonly frequencyUnit: string;
  readonly keepAtLeastOneBackup?: boolean;
  readonly retentionPeriodInDays?: number;
  readonly startTime?: string;
}
export interface AppServiceBackup {
  readonly enabled?: boolean;
  readonly name: string;
  readonly storageAccountUrl: string;
  /** schedule block */
  readonly schedule: AppServiceBackupSchedule[];
}
export interface AppServiceConnectionString {
  readonly name: string;
  readonly type: string;
  readonly value: string;
}
export interface AppServiceIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}
export interface AppServiceLogsApplicationLogsAzureBlobStorage {
  readonly level: string;
  readonly retentionInDays: number;
  readonly sasUrl: string;
}
export interface AppServiceLogsApplicationLogs {
  /** azure_blob_storage block */
  readonly azureBlobStorage?: AppServiceLogsApplicationLogsAzureBlobStorage[];
}
export interface AppServiceLogsHttpLogsAzureBlobStorage {
  readonly retentionInDays: number;
  readonly sasUrl: string;
}
export interface AppServiceLogsHttpLogsFileSystem {
  readonly retentionInDays: number;
  readonly retentionInMb: number;
}
export interface AppServiceLogsHttpLogs {
  /** azure_blob_storage block */
  readonly azureBlobStorage?: AppServiceLogsHttpLogsAzureBlobStorage[];
  /** file_system block */
  readonly fileSystem?: AppServiceLogsHttpLogsFileSystem[];
}
export interface AppServiceLogs {
  /** application_logs block */
  readonly applicationLogs?: AppServiceLogsApplicationLogs[];
  /** http_logs block */
  readonly httpLogs?: AppServiceLogsHttpLogs[];
}
export interface AppServiceSiteConfigIpRestriction {
  readonly ipAddress?: string;
  readonly virtualNetworkSubnetId?: string;
}
export interface AppServiceSiteConfigCors {
  readonly allowedOrigins: string[];
  readonly supportCredentials?: boolean;
}
export interface AppServiceSiteConfig {
  readonly alwaysOn?: boolean;
  readonly appCommandLine?: string;
  readonly autoSwapSlotName?: string;
  readonly defaultDocuments?: string[];
  readonly dotnetFrameworkVersion?: string;
  readonly ftpsState?: string;
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
  readonly scmType?: string;
  readonly use32BitWorkerProcess?: boolean;
  readonly websocketsEnabled?: boolean;
  readonly windowsFxVersion?: string;
  /** cors block */
  readonly cors?: AppServiceSiteConfigCors[];
}
export interface AppServiceStorageAccount {
  readonly accessKey: string;
  readonly accountName: string;
  readonly mountPath?: string;
  readonly name: string;
  readonly shareName: string;
  readonly type: string;
}
export interface AppServiceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AppService extends TerraformResource {

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
    this._storageAccount = config.storageAccount;
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

  // app_settings - computed: true, optional: true, required: false
  private _appSettings?: { [key: string]: string }
  public get appSettings(): { [key: string]: string } | undefined {
    return this._appSettings; // Getting the computed value is not yet implemented
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

  // client_cert_enabled - computed: false, optional: true, required: false
  private _clientCertEnabled?: boolean;
  public get clientCertEnabled() {
    return this._clientCertEnabled;
  }
  public set clientCertEnabled(value: boolean | undefined) {
    this._clientCertEnabled = value;
  }

  // default_site_hostname - computed: true, optional: false, required: true
  public get defaultSiteHostname() {
    return this.getStringAttribute('default_site_hostname');
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
    return new AppServiceSiteCredential(this, 'site_credential', index);
  }

  // source_control - computed: true, optional: false, required: true
  public sourceControl(index: string) {
    return new AppServiceSourceControl(this, 'source_control', index);
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // auth_settings - computed: false, optional: true, required: false
  private _authSettings?: AppServiceAuthSettings[];
  public get authSettings() {
    return this._authSettings;
  }
  public set authSettings(value: AppServiceAuthSettings[] | undefined) {
    this._authSettings = value;
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: AppServiceBackup[];
  public get backup() {
    return this._backup;
  }
  public set backup(value: AppServiceBackup[] | undefined) {
    this._backup = value;
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: AppServiceConnectionString[];
  public get connectionString() {
    return this._connectionString;
  }
  public set connectionString(value: AppServiceConnectionString[] | undefined) {
    this._connectionString = value;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: AppServiceIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: AppServiceIdentity[] | undefined) {
    this._identity = value;
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: AppServiceLogs[];
  public get logs() {
    return this._logs;
  }
  public set logs(value: AppServiceLogs[] | undefined) {
    this._logs = value;
  }

  // site_config - computed: false, optional: true, required: false
  private _siteConfig?: AppServiceSiteConfig[];
  public get siteConfig() {
    return this._siteConfig;
  }
  public set siteConfig(value: AppServiceSiteConfig[] | undefined) {
    this._siteConfig = value;
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: AppServiceStorageAccount[];
  public get storageAccount() {
    return this._storageAccount;
  }
  public set storageAccount(value: AppServiceStorageAccount[] | undefined) {
    this._storageAccount = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppServiceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      app_service_plan_id: this._appServicePlanId,
      app_settings: this._appSettings,
      client_affinity_enabled: this._clientAffinityEnabled,
      client_cert_enabled: this._clientCertEnabled,
      enabled: this._enabled,
      https_only: this._httpsOnly,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      auth_settings: this._authSettings,
      backup: this._backup,
      connection_string: this._connectionString,
      identity: this._identity,
      logs: this._logs,
      site_config: this._siteConfig,
      storage_account: this._storageAccount,
      timeouts: this._timeouts,
    };
  }
}
