// https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceSlotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#app_service_name AppServiceSlot#app_service_name}
  */
  readonly appServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#app_service_plan_id AppServiceSlot#app_service_plan_id}
  */
  readonly appServicePlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#app_settings AppServiceSlot#app_settings}
  */
  readonly appSettings?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#client_affinity_enabled AppServiceSlot#client_affinity_enabled}
  */
  readonly clientAffinityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#enabled AppServiceSlot#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#https_only AppServiceSlot#https_only}
  */
  readonly httpsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#location AppServiceSlot#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#name AppServiceSlot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#resource_group_name AppServiceSlot#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#tags AppServiceSlot#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * auth_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#auth_settings AppServiceSlot#auth_settings}
  */
  readonly authSettings?: AppServiceSlotAuthSettings[];
  /**
  * connection_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#connection_string AppServiceSlot#connection_string}
  */
  readonly connectionString?: AppServiceSlotConnectionString[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#identity AppServiceSlot#identity}
  */
  readonly identity?: AppServiceSlotIdentity[];
  /**
  * logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#logs AppServiceSlot#logs}
  */
  readonly logs?: AppServiceSlotLogs[];
  /**
  * site_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#site_config AppServiceSlot#site_config}
  */
  readonly siteConfig?: AppServiceSlotSiteConfig[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#timeouts AppServiceSlot#timeouts}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#allowed_audiences AppServiceSlot#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#client_id AppServiceSlot#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#client_secret AppServiceSlot#client_secret}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#app_id AppServiceSlot#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#app_secret AppServiceSlot#app_secret}
  */
  readonly appSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#oauth_scopes AppServiceSlot#oauth_scopes}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#client_id AppServiceSlot#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#client_secret AppServiceSlot#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#oauth_scopes AppServiceSlot#oauth_scopes}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#client_id AppServiceSlot#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#client_secret AppServiceSlot#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#oauth_scopes AppServiceSlot#oauth_scopes}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#consumer_key AppServiceSlot#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#consumer_secret AppServiceSlot#consumer_secret}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#additional_login_params AppServiceSlot#additional_login_params}
  */
  readonly additionalLoginParams?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#allowed_external_redirect_urls AppServiceSlot#allowed_external_redirect_urls}
  */
  readonly allowedExternalRedirectUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#default_provider AppServiceSlot#default_provider}
  */
  readonly defaultProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#enabled AppServiceSlot#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#issuer AppServiceSlot#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#runtime_version AppServiceSlot#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#token_refresh_extension_hours AppServiceSlot#token_refresh_extension_hours}
  */
  readonly tokenRefreshExtensionHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#token_store_enabled AppServiceSlot#token_store_enabled}
  */
  readonly tokenStoreEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#unauthenticated_client_action AppServiceSlot#unauthenticated_client_action}
  */
  readonly unauthenticatedClientAction?: string;
  /**
  * active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#active_directory AppServiceSlot#active_directory}
  */
  readonly activeDirectory?: AppServiceSlotAuthSettingsActiveDirectory[];
  /**
  * facebook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#facebook AppServiceSlot#facebook}
  */
  readonly facebook?: AppServiceSlotAuthSettingsFacebook[];
  /**
  * google block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#google AppServiceSlot#google}
  */
  readonly google?: AppServiceSlotAuthSettingsGoogle[];
  /**
  * microsoft block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#microsoft AppServiceSlot#microsoft}
  */
  readonly microsoft?: AppServiceSlotAuthSettingsMicrosoft[];
  /**
  * twitter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#twitter AppServiceSlot#twitter}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#name AppServiceSlot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#type AppServiceSlot#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#value AppServiceSlot#value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#identity_ids AppServiceSlot#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#type AppServiceSlot#type}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#level AppServiceSlot#level}
  */
  readonly level: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#retention_in_days AppServiceSlot#retention_in_days}
  */
  readonly retentionInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#sas_url AppServiceSlot#sas_url}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#file_system_level AppServiceSlot#file_system_level}
  */
  readonly fileSystemLevel?: string;
  /**
  * azure_blob_storage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#azure_blob_storage AppServiceSlot#azure_blob_storage}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#retention_in_days AppServiceSlot#retention_in_days}
  */
  readonly retentionInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#sas_url AppServiceSlot#sas_url}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#retention_in_days AppServiceSlot#retention_in_days}
  */
  readonly retentionInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#retention_in_mb AppServiceSlot#retention_in_mb}
  */
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
  /**
  * azure_blob_storage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#azure_blob_storage AppServiceSlot#azure_blob_storage}
  */
  readonly azureBlobStorage?: AppServiceSlotLogsHttpLogsAzureBlobStorage[];
  /**
  * file_system block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#file_system AppServiceSlot#file_system}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#detailed_error_messages_enabled AppServiceSlot#detailed_error_messages_enabled}
  */
  readonly detailedErrorMessagesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#failed_request_tracing_enabled AppServiceSlot#failed_request_tracing_enabled}
  */
  readonly failedRequestTracingEnabled?: boolean | cdktf.IResolvable;
  /**
  * application_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#application_logs AppServiceSlot#application_logs}
  */
  readonly applicationLogs?: AppServiceSlotLogsApplicationLogs[];
  /**
  * http_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#http_logs AppServiceSlot#http_logs}
  */
  readonly httpLogs?: AppServiceSlotLogsHttpLogs[];
}

function appServiceSlotLogsToTerraform(struct?: AppServiceSlotLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    detailed_error_messages_enabled: cdktf.booleanToTerraform(struct!.detailedErrorMessagesEnabled),
    failed_request_tracing_enabled: cdktf.booleanToTerraform(struct!.failedRequestTracingEnabled),
    application_logs: cdktf.listMapper(appServiceSlotLogsApplicationLogsToTerraform)(struct!.applicationLogs),
    http_logs: cdktf.listMapper(appServiceSlotLogsHttpLogsToTerraform)(struct!.httpLogs),
  }
}

export interface AppServiceSlotSiteConfigIpRestrictionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#x_azure_fdid AppServiceSlot#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#x_fd_health_probe AppServiceSlot#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#x_forwarded_for AppServiceSlot#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#x_forwarded_host AppServiceSlot#x_forwarded_host}
  */
  readonly xForwardedHost?: string[];
}

function appServiceSlotSiteConfigIpRestrictionHeadersToTerraform(struct?: AppServiceSlotSiteConfigIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    x_azure_fdid: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xAzureFdid),
    x_fd_health_probe: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xFdHealthProbe),
    x_forwarded_for: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedFor),
    x_forwarded_host: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedHost),
  }
}

export interface AppServiceSlotSiteConfigIpRestriction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#action AppServiceSlot#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#headers AppServiceSlot#headers}
  */
  readonly headers?: AppServiceSlotSiteConfigIpRestrictionHeaders[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#ip_address AppServiceSlot#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#name AppServiceSlot#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#priority AppServiceSlot#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#service_tag AppServiceSlot#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#virtual_network_subnet_id AppServiceSlot#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
}

function appServiceSlotSiteConfigIpRestrictionToTerraform(struct?: AppServiceSlotSiteConfigIpRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    headers: cdktf.listMapper(appServiceSlotSiteConfigIpRestrictionHeadersToTerraform)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}

export interface AppServiceSlotSiteConfigScmIpRestrictionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#x_azure_fdid AppServiceSlot#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#x_fd_health_probe AppServiceSlot#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#x_forwarded_for AppServiceSlot#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#x_forwarded_host AppServiceSlot#x_forwarded_host}
  */
  readonly xForwardedHost?: string[];
}

function appServiceSlotSiteConfigScmIpRestrictionHeadersToTerraform(struct?: AppServiceSlotSiteConfigScmIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    x_azure_fdid: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xAzureFdid),
    x_fd_health_probe: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xFdHealthProbe),
    x_forwarded_for: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedFor),
    x_forwarded_host: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedHost),
  }
}

export interface AppServiceSlotSiteConfigScmIpRestriction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#action AppServiceSlot#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#headers AppServiceSlot#headers}
  */
  readonly headers?: AppServiceSlotSiteConfigScmIpRestrictionHeaders[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#ip_address AppServiceSlot#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#name AppServiceSlot#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#priority AppServiceSlot#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#service_tag AppServiceSlot#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#virtual_network_subnet_id AppServiceSlot#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
}

function appServiceSlotSiteConfigScmIpRestrictionToTerraform(struct?: AppServiceSlotSiteConfigScmIpRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    headers: cdktf.listMapper(appServiceSlotSiteConfigScmIpRestrictionHeadersToTerraform)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}

export interface AppServiceSlotSiteConfigCors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#allowed_origins AppServiceSlot#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#support_credentials AppServiceSlot#support_credentials}
  */
  readonly supportCredentials?: boolean | cdktf.IResolvable;
}

function appServiceSlotSiteConfigCorsToTerraform(struct?: AppServiceSlotSiteConfigCors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    support_credentials: cdktf.booleanToTerraform(struct!.supportCredentials),
  }
}

export interface AppServiceSlotSiteConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#acr_use_managed_identity_credentials AppServiceSlot#acr_use_managed_identity_credentials}
  */
  readonly acrUseManagedIdentityCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#acr_user_managed_identity_client_id AppServiceSlot#acr_user_managed_identity_client_id}
  */
  readonly acrUserManagedIdentityClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#always_on AppServiceSlot#always_on}
  */
  readonly alwaysOn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#app_command_line AppServiceSlot#app_command_line}
  */
  readonly appCommandLine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#auto_swap_slot_name AppServiceSlot#auto_swap_slot_name}
  */
  readonly autoSwapSlotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#default_documents AppServiceSlot#default_documents}
  */
  readonly defaultDocuments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#dotnet_framework_version AppServiceSlot#dotnet_framework_version}
  */
  readonly dotnetFrameworkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#ftps_state AppServiceSlot#ftps_state}
  */
  readonly ftpsState?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#health_check_path AppServiceSlot#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#http2_enabled AppServiceSlot#http2_enabled}
  */
  readonly http2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#ip_restriction AppServiceSlot#ip_restriction}
  */
  readonly ipRestriction?: AppServiceSlotSiteConfigIpRestriction[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#java_container AppServiceSlot#java_container}
  */
  readonly javaContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#java_container_version AppServiceSlot#java_container_version}
  */
  readonly javaContainerVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#java_version AppServiceSlot#java_version}
  */
  readonly javaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#linux_fx_version AppServiceSlot#linux_fx_version}
  */
  readonly linuxFxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#local_mysql_enabled AppServiceSlot#local_mysql_enabled}
  */
  readonly localMysqlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#managed_pipeline_mode AppServiceSlot#managed_pipeline_mode}
  */
  readonly managedPipelineMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#min_tls_version AppServiceSlot#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#number_of_workers AppServiceSlot#number_of_workers}
  */
  readonly numberOfWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#php_version AppServiceSlot#php_version}
  */
  readonly phpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#python_version AppServiceSlot#python_version}
  */
  readonly pythonVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#remote_debugging_enabled AppServiceSlot#remote_debugging_enabled}
  */
  readonly remoteDebuggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#remote_debugging_version AppServiceSlot#remote_debugging_version}
  */
  readonly remoteDebuggingVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#scm_ip_restriction AppServiceSlot#scm_ip_restriction}
  */
  readonly scmIpRestriction?: AppServiceSlotSiteConfigScmIpRestriction[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#scm_type AppServiceSlot#scm_type}
  */
  readonly scmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#scm_use_main_ip_restriction AppServiceSlot#scm_use_main_ip_restriction}
  */
  readonly scmUseMainIpRestriction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#use_32_bit_worker_process AppServiceSlot#use_32_bit_worker_process}
  */
  readonly use32BitWorkerProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#vnet_route_all_enabled AppServiceSlot#vnet_route_all_enabled}
  */
  readonly vnetRouteAllEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#websockets_enabled AppServiceSlot#websockets_enabled}
  */
  readonly websocketsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#windows_fx_version AppServiceSlot#windows_fx_version}
  */
  readonly windowsFxVersion?: string;
  /**
  * cors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#cors AppServiceSlot#cors}
  */
  readonly cors?: AppServiceSlotSiteConfigCors[];
}

function appServiceSlotSiteConfigToTerraform(struct?: AppServiceSlotSiteConfig): any {
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
    ip_restriction: cdktf.listMapper(appServiceSlotSiteConfigIpRestrictionToTerraform)(struct!.ipRestriction),
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
    scm_ip_restriction: cdktf.listMapper(appServiceSlotSiteConfigScmIpRestrictionToTerraform)(struct!.scmIpRestriction),
    scm_type: cdktf.stringToTerraform(struct!.scmType),
    scm_use_main_ip_restriction: cdktf.booleanToTerraform(struct!.scmUseMainIpRestriction),
    use_32_bit_worker_process: cdktf.booleanToTerraform(struct!.use32BitWorkerProcess),
    vnet_route_all_enabled: cdktf.booleanToTerraform(struct!.vnetRouteAllEnabled),
    websockets_enabled: cdktf.booleanToTerraform(struct!.websocketsEnabled),
    windows_fx_version: cdktf.stringToTerraform(struct!.windowsFxVersion),
    cors: cdktf.listMapper(appServiceSlotSiteConfigCorsToTerraform)(struct!.cors),
  }
}

export interface AppServiceSlotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#create AppServiceSlot#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#delete AppServiceSlot#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#read AppServiceSlot#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#update AppServiceSlot#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html azurerm_app_service_slot}
*/
export class AppServiceSlot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_app_service_slot";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html azurerm_app_service_slot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppServiceSlotConfig
  */
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

  // client_affinity_enabled - computed: true, optional: true, required: false
  private _clientAffinityEnabled?: boolean | cdktf.IResolvable;
  public get clientAffinityEnabled() {
    return this.getBooleanAttribute('client_affinity_enabled');
  }
  public set clientAffinityEnabled(value: boolean | cdktf.IResolvable) {
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
