// https://www.terraform.io/docs/providers/azurerm/r/app_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#app_service_plan_id AppService#app_service_plan_id}
  */
  readonly appServicePlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#app_settings AppService#app_settings}
  */
  readonly appSettings?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#client_affinity_enabled AppService#client_affinity_enabled}
  */
  readonly clientAffinityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#client_cert_enabled AppService#client_cert_enabled}
  */
  readonly clientCertEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#enabled AppService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#https_only AppService#https_only}
  */
  readonly httpsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#key_vault_reference_identity_id AppService#key_vault_reference_identity_id}
  */
  readonly keyVaultReferenceIdentityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#location AppService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#name AppService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#resource_group_name AppService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#tags AppService#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * auth_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#auth_settings AppService#auth_settings}
  */
  readonly authSettings?: AppServiceAuthSettings[];
  /**
  * backup block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#backup AppService#backup}
  */
  readonly backup?: AppServiceBackup[];
  /**
  * connection_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#connection_string AppService#connection_string}
  */
  readonly connectionString?: AppServiceConnectionString[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#identity AppService#identity}
  */
  readonly identity?: AppServiceIdentity[];
  /**
  * logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#logs AppService#logs}
  */
  readonly logs?: AppServiceLogs[];
  /**
  * site_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#site_config AppService#site_config}
  */
  readonly siteConfig?: AppServiceSiteConfig[];
  /**
  * source_control block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#source_control AppService#source_control}
  */
  readonly sourceControl?: AppServiceSourceControl[];
  /**
  * storage_account block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#storage_account AppService#storage_account}
  */
  readonly storageAccount?: AppServiceStorageAccount[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#timeouts AppService#timeouts}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#allowed_audiences AppService#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#client_id AppService#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#client_secret AppService#client_secret}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#app_id AppService#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#app_secret AppService#app_secret}
  */
  readonly appSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#oauth_scopes AppService#oauth_scopes}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#client_id AppService#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#client_secret AppService#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#oauth_scopes AppService#oauth_scopes}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#client_id AppService#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#client_secret AppService#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#oauth_scopes AppService#oauth_scopes}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#consumer_key AppService#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#consumer_secret AppService#consumer_secret}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#additional_login_params AppService#additional_login_params}
  */
  readonly additionalLoginParams?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#allowed_external_redirect_urls AppService#allowed_external_redirect_urls}
  */
  readonly allowedExternalRedirectUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#default_provider AppService#default_provider}
  */
  readonly defaultProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#enabled AppService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#issuer AppService#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#runtime_version AppService#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#token_refresh_extension_hours AppService#token_refresh_extension_hours}
  */
  readonly tokenRefreshExtensionHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#token_store_enabled AppService#token_store_enabled}
  */
  readonly tokenStoreEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#unauthenticated_client_action AppService#unauthenticated_client_action}
  */
  readonly unauthenticatedClientAction?: string;
  /**
  * active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#active_directory AppService#active_directory}
  */
  readonly activeDirectory?: AppServiceAuthSettingsActiveDirectory[];
  /**
  * facebook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#facebook AppService#facebook}
  */
  readonly facebook?: AppServiceAuthSettingsFacebook[];
  /**
  * google block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#google AppService#google}
  */
  readonly google?: AppServiceAuthSettingsGoogle[];
  /**
  * microsoft block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#microsoft AppService#microsoft}
  */
  readonly microsoft?: AppServiceAuthSettingsMicrosoft[];
  /**
  * twitter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#twitter AppService#twitter}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#frequency_interval AppService#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#frequency_unit AppService#frequency_unit}
  */
  readonly frequencyUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#keep_at_least_one_backup AppService#keep_at_least_one_backup}
  */
  readonly keepAtLeastOneBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#retention_period_in_days AppService#retention_period_in_days}
  */
  readonly retentionPeriodInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#start_time AppService#start_time}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#enabled AppService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#name AppService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#storage_account_url AppService#storage_account_url}
  */
  readonly storageAccountUrl: string;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#schedule AppService#schedule}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#name AppService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#type AppService#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#value AppService#value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#identity_ids AppService#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#type AppService#type}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#level AppService#level}
  */
  readonly level: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#retention_in_days AppService#retention_in_days}
  */
  readonly retentionInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#sas_url AppService#sas_url}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#file_system_level AppService#file_system_level}
  */
  readonly fileSystemLevel?: string;
  /**
  * azure_blob_storage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#azure_blob_storage AppService#azure_blob_storage}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#retention_in_days AppService#retention_in_days}
  */
  readonly retentionInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#sas_url AppService#sas_url}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#retention_in_days AppService#retention_in_days}
  */
  readonly retentionInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#retention_in_mb AppService#retention_in_mb}
  */
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
  /**
  * azure_blob_storage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#azure_blob_storage AppService#azure_blob_storage}
  */
  readonly azureBlobStorage?: AppServiceLogsHttpLogsAzureBlobStorage[];
  /**
  * file_system block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#file_system AppService#file_system}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#detailed_error_messages_enabled AppService#detailed_error_messages_enabled}
  */
  readonly detailedErrorMessagesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#failed_request_tracing_enabled AppService#failed_request_tracing_enabled}
  */
  readonly failedRequestTracingEnabled?: boolean | cdktf.IResolvable;
  /**
  * application_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#application_logs AppService#application_logs}
  */
  readonly applicationLogs?: AppServiceLogsApplicationLogs[];
  /**
  * http_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#http_logs AppService#http_logs}
  */
  readonly httpLogs?: AppServiceLogsHttpLogs[];
}

function appServiceLogsToTerraform(struct?: AppServiceLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    detailed_error_messages_enabled: cdktf.booleanToTerraform(struct!.detailedErrorMessagesEnabled),
    failed_request_tracing_enabled: cdktf.booleanToTerraform(struct!.failedRequestTracingEnabled),
    application_logs: cdktf.listMapper(appServiceLogsApplicationLogsToTerraform)(struct!.applicationLogs),
    http_logs: cdktf.listMapper(appServiceLogsHttpLogsToTerraform)(struct!.httpLogs),
  }
}

export interface AppServiceSiteConfigIpRestrictionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#x_azure_fdid AppService#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#x_fd_health_probe AppService#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#x_forwarded_for AppService#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#x_forwarded_host AppService#x_forwarded_host}
  */
  readonly xForwardedHost?: string[];
}

function appServiceSiteConfigIpRestrictionHeadersToTerraform(struct?: AppServiceSiteConfigIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    x_azure_fdid: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xAzureFdid),
    x_fd_health_probe: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xFdHealthProbe),
    x_forwarded_for: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedFor),
    x_forwarded_host: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedHost),
  }
}

export interface AppServiceSiteConfigIpRestriction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#action AppService#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#headers AppService#headers}
  */
  readonly headers?: AppServiceSiteConfigIpRestrictionHeaders[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#ip_address AppService#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#name AppService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#priority AppService#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#service_tag AppService#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#virtual_network_subnet_id AppService#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
}

function appServiceSiteConfigIpRestrictionToTerraform(struct?: AppServiceSiteConfigIpRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    headers: cdktf.listMapper(appServiceSiteConfigIpRestrictionHeadersToTerraform)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}

export interface AppServiceSiteConfigScmIpRestrictionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#x_azure_fdid AppService#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#x_fd_health_probe AppService#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#x_forwarded_for AppService#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#x_forwarded_host AppService#x_forwarded_host}
  */
  readonly xForwardedHost?: string[];
}

function appServiceSiteConfigScmIpRestrictionHeadersToTerraform(struct?: AppServiceSiteConfigScmIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    x_azure_fdid: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xAzureFdid),
    x_fd_health_probe: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xFdHealthProbe),
    x_forwarded_for: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedFor),
    x_forwarded_host: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedHost),
  }
}

export interface AppServiceSiteConfigScmIpRestriction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#action AppService#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#headers AppService#headers}
  */
  readonly headers?: AppServiceSiteConfigScmIpRestrictionHeaders[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#ip_address AppService#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#name AppService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#priority AppService#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#service_tag AppService#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#virtual_network_subnet_id AppService#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
}

function appServiceSiteConfigScmIpRestrictionToTerraform(struct?: AppServiceSiteConfigScmIpRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    headers: cdktf.listMapper(appServiceSiteConfigScmIpRestrictionHeadersToTerraform)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}

export interface AppServiceSiteConfigCors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#allowed_origins AppService#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#support_credentials AppService#support_credentials}
  */
  readonly supportCredentials?: boolean | cdktf.IResolvable;
}

function appServiceSiteConfigCorsToTerraform(struct?: AppServiceSiteConfigCors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    support_credentials: cdktf.booleanToTerraform(struct!.supportCredentials),
  }
}

export interface AppServiceSiteConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#acr_use_managed_identity_credentials AppService#acr_use_managed_identity_credentials}
  */
  readonly acrUseManagedIdentityCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#acr_user_managed_identity_client_id AppService#acr_user_managed_identity_client_id}
  */
  readonly acrUserManagedIdentityClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#always_on AppService#always_on}
  */
  readonly alwaysOn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#app_command_line AppService#app_command_line}
  */
  readonly appCommandLine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#auto_swap_slot_name AppService#auto_swap_slot_name}
  */
  readonly autoSwapSlotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#default_documents AppService#default_documents}
  */
  readonly defaultDocuments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#dotnet_framework_version AppService#dotnet_framework_version}
  */
  readonly dotnetFrameworkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#ftps_state AppService#ftps_state}
  */
  readonly ftpsState?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#health_check_path AppService#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#http2_enabled AppService#http2_enabled}
  */
  readonly http2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#ip_restriction AppService#ip_restriction}
  */
  readonly ipRestriction?: AppServiceSiteConfigIpRestriction[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#java_container AppService#java_container}
  */
  readonly javaContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#java_container_version AppService#java_container_version}
  */
  readonly javaContainerVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#java_version AppService#java_version}
  */
  readonly javaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#linux_fx_version AppService#linux_fx_version}
  */
  readonly linuxFxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#local_mysql_enabled AppService#local_mysql_enabled}
  */
  readonly localMysqlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#managed_pipeline_mode AppService#managed_pipeline_mode}
  */
  readonly managedPipelineMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#min_tls_version AppService#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#number_of_workers AppService#number_of_workers}
  */
  readonly numberOfWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#php_version AppService#php_version}
  */
  readonly phpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#python_version AppService#python_version}
  */
  readonly pythonVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#remote_debugging_enabled AppService#remote_debugging_enabled}
  */
  readonly remoteDebuggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#remote_debugging_version AppService#remote_debugging_version}
  */
  readonly remoteDebuggingVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#scm_ip_restriction AppService#scm_ip_restriction}
  */
  readonly scmIpRestriction?: AppServiceSiteConfigScmIpRestriction[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#scm_type AppService#scm_type}
  */
  readonly scmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#scm_use_main_ip_restriction AppService#scm_use_main_ip_restriction}
  */
  readonly scmUseMainIpRestriction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#use_32_bit_worker_process AppService#use_32_bit_worker_process}
  */
  readonly use32BitWorkerProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#vnet_route_all_enabled AppService#vnet_route_all_enabled}
  */
  readonly vnetRouteAllEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#websockets_enabled AppService#websockets_enabled}
  */
  readonly websocketsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#windows_fx_version AppService#windows_fx_version}
  */
  readonly windowsFxVersion?: string;
  /**
  * cors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#cors AppService#cors}
  */
  readonly cors?: AppServiceSiteConfigCors[];
}

function appServiceSiteConfigToTerraform(struct?: AppServiceSiteConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acr_use_managed_identity_credentials: cdktf.booleanToTerraform(struct!.acrUseManagedIdentityCredentials),
    acr_user_managed_identity_client_id: cdktf.stringToTerraform(struct!.acrUserManagedIdentityClientId),
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
    number_of_workers: cdktf.numberToTerraform(struct!.numberOfWorkers),
    php_version: cdktf.stringToTerraform(struct!.phpVersion),
    python_version: cdktf.stringToTerraform(struct!.pythonVersion),
    remote_debugging_enabled: cdktf.booleanToTerraform(struct!.remoteDebuggingEnabled),
    remote_debugging_version: cdktf.stringToTerraform(struct!.remoteDebuggingVersion),
    scm_ip_restriction: cdktf.listMapper(appServiceSiteConfigScmIpRestrictionToTerraform)(struct!.scmIpRestriction),
    scm_type: cdktf.stringToTerraform(struct!.scmType),
    scm_use_main_ip_restriction: cdktf.booleanToTerraform(struct!.scmUseMainIpRestriction),
    use_32_bit_worker_process: cdktf.booleanToTerraform(struct!.use32BitWorkerProcess),
    vnet_route_all_enabled: cdktf.booleanToTerraform(struct!.vnetRouteAllEnabled),
    websockets_enabled: cdktf.booleanToTerraform(struct!.websocketsEnabled),
    windows_fx_version: cdktf.stringToTerraform(struct!.windowsFxVersion),
    cors: cdktf.listMapper(appServiceSiteConfigCorsToTerraform)(struct!.cors),
  }
}

export interface AppServiceSourceControl {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#branch AppService#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#manual_integration AppService#manual_integration}
  */
  readonly manualIntegration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#repo_url AppService#repo_url}
  */
  readonly repoUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#rollback_enabled AppService#rollback_enabled}
  */
  readonly rollbackEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#use_mercurial AppService#use_mercurial}
  */
  readonly useMercurial?: boolean | cdktf.IResolvable;
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#access_key AppService#access_key}
  */
  readonly accessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#account_name AppService#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#mount_path AppService#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#name AppService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#share_name AppService#share_name}
  */
  readonly shareName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#type AppService#type}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#create AppService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#delete AppService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#read AppService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html#update AppService#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html azurerm_app_service}
*/
export class AppService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_app_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/app_service.html azurerm_app_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppServiceConfig
  */
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
    this._keyVaultReferenceIdentityId = config.keyVaultReferenceIdentityId;
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
  private _appSettings?: { [key: string]: string } | cdktf.IResolvable
  public get appSettings(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('app_settings') as any; // Getting the computed value is not yet implemented
  }
  public set appSettings(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _clientAffinityEnabled?: boolean | cdktf.IResolvable;
  public get clientAffinityEnabled() {
    return this.getBooleanAttribute('client_affinity_enabled');
  }
  public set clientAffinityEnabled(value: boolean | cdktf.IResolvable ) {
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
  private _clientCertEnabled?: boolean | cdktf.IResolvable;
  public get clientCertEnabled() {
    return this.getBooleanAttribute('client_cert_enabled');
  }
  public set clientCertEnabled(value: boolean | cdktf.IResolvable ) {
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
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable ) {
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
  private _httpsOnly?: boolean | cdktf.IResolvable;
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only');
  }
  public set httpsOnly(value: boolean | cdktf.IResolvable ) {
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

  // key_vault_reference_identity_id - computed: true, optional: true, required: false
  private _keyVaultReferenceIdentityId?: string;
  public get keyVaultReferenceIdentityId() {
    return this.getStringAttribute('key_vault_reference_identity_id');
  }
  public set keyVaultReferenceIdentityId(value: string) {
    this._keyVaultReferenceIdentityId = value;
  }
  public resetKeyVaultReferenceIdentityId() {
    this._keyVaultReferenceIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultReferenceIdentityIdInput() {
    return this._keyVaultReferenceIdentityId
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
      key_vault_reference_identity_id: cdktf.stringToTerraform(this._keyVaultReferenceIdentityId),
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
