// https://www.terraform.io/docs/providers/azurerm/r/function_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#app_service_plan_id FunctionApp#app_service_plan_id}
  */
  readonly appServicePlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#app_settings FunctionApp#app_settings}
  */
  readonly appSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#client_affinity_enabled FunctionApp#client_affinity_enabled}
  */
  readonly clientAffinityEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#client_cert_mode FunctionApp#client_cert_mode}
  */
  readonly clientCertMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#daily_memory_time_quota FunctionApp#daily_memory_time_quota}
  */
  readonly dailyMemoryTimeQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#enable_builtin_logging FunctionApp#enable_builtin_logging}
  */
  readonly enableBuiltinLogging?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#enabled FunctionApp#enabled}
  */
  readonly enabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#https_only FunctionApp#https_only}
  */
  readonly httpsOnly?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#location FunctionApp#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#name FunctionApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#os_type FunctionApp#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#resource_group_name FunctionApp#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#storage_account_access_key FunctionApp#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#storage_account_name FunctionApp#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#storage_connection_string FunctionApp#storage_connection_string}
  */
  readonly storageConnectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#tags FunctionApp#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#version FunctionApp#version}
  */
  readonly version?: string;
  /**
  * auth_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#auth_settings FunctionApp#auth_settings}
  */
  readonly authSettings?: FunctionAppAuthSettings[];
  /**
  * connection_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#connection_string FunctionApp#connection_string}
  */
  readonly connectionString?: FunctionAppConnectionString[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#identity FunctionApp#identity}
  */
  readonly identity?: FunctionAppIdentity[];
  /**
  * site_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#site_config FunctionApp#site_config}
  */
  readonly siteConfig?: FunctionAppSiteConfig[];
  /**
  * source_control block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#source_control FunctionApp#source_control}
  */
  readonly sourceControl?: FunctionAppSourceControl[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#timeouts FunctionApp#timeouts}
  */
  readonly timeouts?: FunctionAppTimeouts;
}
export class FunctionAppSiteCredential extends cdktf.ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface FunctionAppAuthSettingsActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#allowed_audiences FunctionApp#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#client_id FunctionApp#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#client_secret FunctionApp#client_secret}
  */
  readonly clientSecret?: string;
}

function functionAppAuthSettingsActiveDirectoryToTerraform(struct?: FunctionAppAuthSettingsActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedAudiences),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}

export interface FunctionAppAuthSettingsFacebook {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#app_id FunctionApp#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#app_secret FunctionApp#app_secret}
  */
  readonly appSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#oauth_scopes FunctionApp#oauth_scopes}
  */
  readonly oauthScopes?: string[];
}

function functionAppAuthSettingsFacebookToTerraform(struct?: FunctionAppAuthSettingsFacebook): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_secret: cdktf.stringToTerraform(struct!.appSecret),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
  }
}

export interface FunctionAppAuthSettingsGoogle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#client_id FunctionApp#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#client_secret FunctionApp#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#oauth_scopes FunctionApp#oauth_scopes}
  */
  readonly oauthScopes?: string[];
}

function functionAppAuthSettingsGoogleToTerraform(struct?: FunctionAppAuthSettingsGoogle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
  }
}

export interface FunctionAppAuthSettingsMicrosoft {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#client_id FunctionApp#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#client_secret FunctionApp#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#oauth_scopes FunctionApp#oauth_scopes}
  */
  readonly oauthScopes?: string[];
}

function functionAppAuthSettingsMicrosoftToTerraform(struct?: FunctionAppAuthSettingsMicrosoft): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
  }
}

export interface FunctionAppAuthSettingsTwitter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#consumer_key FunctionApp#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#consumer_secret FunctionApp#consumer_secret}
  */
  readonly consumerSecret: string;
}

function functionAppAuthSettingsTwitterToTerraform(struct?: FunctionAppAuthSettingsTwitter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    consumer_key: cdktf.stringToTerraform(struct!.consumerKey),
    consumer_secret: cdktf.stringToTerraform(struct!.consumerSecret),
  }
}

export interface FunctionAppAuthSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#additional_login_params FunctionApp#additional_login_params}
  */
  readonly additionalLoginParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#allowed_external_redirect_urls FunctionApp#allowed_external_redirect_urls}
  */
  readonly allowedExternalRedirectUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#default_provider FunctionApp#default_provider}
  */
  readonly defaultProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#enabled FunctionApp#enabled}
  */
  readonly enabled: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#issuer FunctionApp#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#runtime_version FunctionApp#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#token_refresh_extension_hours FunctionApp#token_refresh_extension_hours}
  */
  readonly tokenRefreshExtensionHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#token_store_enabled FunctionApp#token_store_enabled}
  */
  readonly tokenStoreEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#unauthenticated_client_action FunctionApp#unauthenticated_client_action}
  */
  readonly unauthenticatedClientAction?: string;
  /**
  * active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#active_directory FunctionApp#active_directory}
  */
  readonly activeDirectory?: FunctionAppAuthSettingsActiveDirectory[];
  /**
  * facebook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#facebook FunctionApp#facebook}
  */
  readonly facebook?: FunctionAppAuthSettingsFacebook[];
  /**
  * google block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#google FunctionApp#google}
  */
  readonly google?: FunctionAppAuthSettingsGoogle[];
  /**
  * microsoft block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#microsoft FunctionApp#microsoft}
  */
  readonly microsoft?: FunctionAppAuthSettingsMicrosoft[];
  /**
  * twitter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#twitter FunctionApp#twitter}
  */
  readonly twitter?: FunctionAppAuthSettingsTwitter[];
}

function functionAppAuthSettingsToTerraform(struct?: FunctionAppAuthSettings): any {
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
    active_directory: cdktf.listMapper(functionAppAuthSettingsActiveDirectoryToTerraform)(struct!.activeDirectory),
    facebook: cdktf.listMapper(functionAppAuthSettingsFacebookToTerraform)(struct!.facebook),
    google: cdktf.listMapper(functionAppAuthSettingsGoogleToTerraform)(struct!.google),
    microsoft: cdktf.listMapper(functionAppAuthSettingsMicrosoftToTerraform)(struct!.microsoft),
    twitter: cdktf.listMapper(functionAppAuthSettingsTwitterToTerraform)(struct!.twitter),
  }
}

export interface FunctionAppConnectionString {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#name FunctionApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#type FunctionApp#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#value FunctionApp#value}
  */
  readonly value: string;
}

function functionAppConnectionStringToTerraform(struct?: FunctionAppConnectionString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface FunctionAppIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#identity_ids FunctionApp#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#type FunctionApp#type}
  */
  readonly type: string;
}

function functionAppIdentityToTerraform(struct?: FunctionAppIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface FunctionAppSiteConfigIpRestrictionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#x_azure_fdid FunctionApp#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#x_fd_health_probe FunctionApp#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#x_forwarded_for FunctionApp#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#x_forwarded_host FunctionApp#x_forwarded_host}
  */
  readonly xForwardedHost?: string[];
}

function functionAppSiteConfigIpRestrictionHeadersToTerraform(struct?: FunctionAppSiteConfigIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    x_azure_fdid: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xAzureFdid),
    x_fd_health_probe: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xFdHealthProbe),
    x_forwarded_for: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedFor),
    x_forwarded_host: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedHost),
  }
}

export interface FunctionAppSiteConfigIpRestriction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#action FunctionApp#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#headers FunctionApp#headers}
  */
  readonly headers?: FunctionAppSiteConfigIpRestrictionHeaders[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#ip_address FunctionApp#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#name FunctionApp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#priority FunctionApp#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#service_tag FunctionApp#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
}

function functionAppSiteConfigIpRestrictionToTerraform(struct?: FunctionAppSiteConfigIpRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    headers: cdktf.listMapper(functionAppSiteConfigIpRestrictionHeadersToTerraform)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}

export interface FunctionAppSiteConfigScmIpRestrictionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#x_azure_fdid FunctionApp#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#x_fd_health_probe FunctionApp#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#x_forwarded_for FunctionApp#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#x_forwarded_host FunctionApp#x_forwarded_host}
  */
  readonly xForwardedHost?: string[];
}

function functionAppSiteConfigScmIpRestrictionHeadersToTerraform(struct?: FunctionAppSiteConfigScmIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    x_azure_fdid: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xAzureFdid),
    x_fd_health_probe: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xFdHealthProbe),
    x_forwarded_for: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedFor),
    x_forwarded_host: cdktf.listMapper(cdktf.stringToTerraform)(struct!.xForwardedHost),
  }
}

export interface FunctionAppSiteConfigScmIpRestriction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#action FunctionApp#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#headers FunctionApp#headers}
  */
  readonly headers?: FunctionAppSiteConfigScmIpRestrictionHeaders[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#ip_address FunctionApp#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#name FunctionApp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#priority FunctionApp#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#service_tag FunctionApp#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
}

function functionAppSiteConfigScmIpRestrictionToTerraform(struct?: FunctionAppSiteConfigScmIpRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    headers: cdktf.listMapper(functionAppSiteConfigScmIpRestrictionHeadersToTerraform)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}

export interface FunctionAppSiteConfigCors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#allowed_origins FunctionApp#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#support_credentials FunctionApp#support_credentials}
  */
  readonly supportCredentials?: boolean;
}

function functionAppSiteConfigCorsToTerraform(struct?: FunctionAppSiteConfigCors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    support_credentials: cdktf.booleanToTerraform(struct!.supportCredentials),
  }
}

export interface FunctionAppSiteConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#always_on FunctionApp#always_on}
  */
  readonly alwaysOn?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#app_scale_limit FunctionApp#app_scale_limit}
  */
  readonly appScaleLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#auto_swap_slot_name FunctionApp#auto_swap_slot_name}
  */
  readonly autoSwapSlotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#dotnet_framework_version FunctionApp#dotnet_framework_version}
  */
  readonly dotnetFrameworkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#elastic_instance_minimum FunctionApp#elastic_instance_minimum}
  */
  readonly elasticInstanceMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#ftps_state FunctionApp#ftps_state}
  */
  readonly ftpsState?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#health_check_path FunctionApp#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#http2_enabled FunctionApp#http2_enabled}
  */
  readonly http2Enabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#ip_restriction FunctionApp#ip_restriction}
  */
  readonly ipRestriction?: FunctionAppSiteConfigIpRestriction[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#java_version FunctionApp#java_version}
  */
  readonly javaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#linux_fx_version FunctionApp#linux_fx_version}
  */
  readonly linuxFxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#min_tls_version FunctionApp#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#pre_warmed_instance_count FunctionApp#pre_warmed_instance_count}
  */
  readonly preWarmedInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#runtime_scale_monitoring_enabled FunctionApp#runtime_scale_monitoring_enabled}
  */
  readonly runtimeScaleMonitoringEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#scm_ip_restriction FunctionApp#scm_ip_restriction}
  */
  readonly scmIpRestriction?: FunctionAppSiteConfigScmIpRestriction[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#scm_type FunctionApp#scm_type}
  */
  readonly scmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#scm_use_main_ip_restriction FunctionApp#scm_use_main_ip_restriction}
  */
  readonly scmUseMainIpRestriction?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#use_32_bit_worker_process FunctionApp#use_32_bit_worker_process}
  */
  readonly use32BitWorkerProcess?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#websockets_enabled FunctionApp#websockets_enabled}
  */
  readonly websocketsEnabled?: boolean;
  /**
  * cors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#cors FunctionApp#cors}
  */
  readonly cors?: FunctionAppSiteConfigCors[];
}

function functionAppSiteConfigToTerraform(struct?: FunctionAppSiteConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    always_on: cdktf.booleanToTerraform(struct!.alwaysOn),
    app_scale_limit: cdktf.numberToTerraform(struct!.appScaleLimit),
    auto_swap_slot_name: cdktf.stringToTerraform(struct!.autoSwapSlotName),
    dotnet_framework_version: cdktf.stringToTerraform(struct!.dotnetFrameworkVersion),
    elastic_instance_minimum: cdktf.numberToTerraform(struct!.elasticInstanceMinimum),
    ftps_state: cdktf.stringToTerraform(struct!.ftpsState),
    health_check_path: cdktf.stringToTerraform(struct!.healthCheckPath),
    http2_enabled: cdktf.booleanToTerraform(struct!.http2Enabled),
    ip_restriction: cdktf.listMapper(functionAppSiteConfigIpRestrictionToTerraform)(struct!.ipRestriction),
    java_version: cdktf.stringToTerraform(struct!.javaVersion),
    linux_fx_version: cdktf.stringToTerraform(struct!.linuxFxVersion),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    pre_warmed_instance_count: cdktf.numberToTerraform(struct!.preWarmedInstanceCount),
    runtime_scale_monitoring_enabled: cdktf.booleanToTerraform(struct!.runtimeScaleMonitoringEnabled),
    scm_ip_restriction: cdktf.listMapper(functionAppSiteConfigScmIpRestrictionToTerraform)(struct!.scmIpRestriction),
    scm_type: cdktf.stringToTerraform(struct!.scmType),
    scm_use_main_ip_restriction: cdktf.booleanToTerraform(struct!.scmUseMainIpRestriction),
    use_32_bit_worker_process: cdktf.booleanToTerraform(struct!.use32BitWorkerProcess),
    websockets_enabled: cdktf.booleanToTerraform(struct!.websocketsEnabled),
    cors: cdktf.listMapper(functionAppSiteConfigCorsToTerraform)(struct!.cors),
  }
}

export interface FunctionAppSourceControl {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#branch FunctionApp#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#manual_integration FunctionApp#manual_integration}
  */
  readonly manualIntegration?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#repo_url FunctionApp#repo_url}
  */
  readonly repoUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#rollback_enabled FunctionApp#rollback_enabled}
  */
  readonly rollbackEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#use_mercurial FunctionApp#use_mercurial}
  */
  readonly useMercurial?: boolean;
}

function functionAppSourceControlToTerraform(struct?: FunctionAppSourceControl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    manual_integration: cdktf.booleanToTerraform(struct!.manualIntegration),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    rollback_enabled: cdktf.booleanToTerraform(struct!.rollbackEnabled),
    use_mercurial: cdktf.booleanToTerraform(struct!.useMercurial),
  }
}

export interface FunctionAppTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#create FunctionApp#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#delete FunctionApp#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#read FunctionApp#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#update FunctionApp#update}
  */
  readonly update?: string;
}

function functionAppTimeoutsToTerraform(struct?: FunctionAppTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html azurerm_function_app}
*/
export class FunctionApp extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html azurerm_function_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionAppConfig
  */
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
    this._clientCertMode = config.clientCertMode;
    this._dailyMemoryTimeQuota = config.dailyMemoryTimeQuota;
    this._enableBuiltinLogging = config.enableBuiltinLogging;
    this._enabled = config.enabled;
    this._httpsOnly = config.httpsOnly;
    this._location = config.location;
    this._name = config.name;
    this._osType = config.osType;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountAccessKey = config.storageAccountAccessKey;
    this._storageAccountName = config.storageAccountName;
    this._storageConnectionString = config.storageConnectionString;
    this._tags = config.tags;
    this._version = config.version;
    this._authSettings = config.authSettings;
    this._connectionString = config.connectionString;
    this._identity = config.identity;
    this._siteConfig = config.siteConfig;
    this._sourceControl = config.sourceControl;
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

  // client_cert_mode - computed: false, optional: true, required: false
  private _clientCertMode?: string;
  public get clientCertMode() {
    return this.getStringAttribute('client_cert_mode');
  }
  public set clientCertMode(value: string ) {
    this._clientCertMode = value;
  }
  public resetClientCertMode() {
    this._clientCertMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertModeInput() {
    return this._clientCertMode
  }

  // custom_domain_verification_id - computed: true, optional: false, required: false
  public get customDomainVerificationId() {
    return this.getStringAttribute('custom_domain_verification_id');
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
    return new FunctionAppSiteCredential(this, 'site_credential', index);
  }

  // storage_account_access_key - computed: true, optional: true, required: false
  private _storageAccountAccessKey?: string;
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }
  public set storageAccountAccessKey(value: string) {
    this._storageAccountAccessKey = value;
  }
  public resetStorageAccountAccessKey() {
    this._storageAccountAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyInput() {
    return this._storageAccountAccessKey
  }

  // storage_account_name - computed: true, optional: true, required: false
  private _storageAccountName?: string;
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName
  }

  // storage_connection_string - computed: true, optional: true, required: false
  private _storageConnectionString?: string;
  public get storageConnectionString() {
    return this.getStringAttribute('storage_connection_string');
  }
  public set storageConnectionString(value: string) {
    this._storageConnectionString = value;
  }
  public resetStorageConnectionString() {
    this._storageConnectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConnectionStringInput() {
    return this._storageConnectionString
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
  private _authSettings?: FunctionAppAuthSettings[];
  public get authSettings() {
    return this.interpolationForAttribute('auth_settings') as any;
  }
  public set authSettings(value: FunctionAppAuthSettings[] ) {
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
  private _connectionString?: FunctionAppConnectionString[];
  public get connectionString() {
    return this.interpolationForAttribute('connection_string') as any;
  }
  public set connectionString(value: FunctionAppConnectionString[] ) {
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
  private _identity?: FunctionAppIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: FunctionAppIdentity[] ) {
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
  private _siteConfig?: FunctionAppSiteConfig[];
  public get siteConfig() {
    return this.interpolationForAttribute('site_config') as any;
  }
  public set siteConfig(value: FunctionAppSiteConfig[] ) {
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
  private _sourceControl?: FunctionAppSourceControl[];
  public get sourceControl() {
    return this.interpolationForAttribute('source_control') as any;
  }
  public set sourceControl(value: FunctionAppSourceControl[] ) {
    this._sourceControl = value;
  }
  public resetSourceControl() {
    this._sourceControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceControlInput() {
    return this._sourceControl
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FunctionAppTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FunctionAppTimeouts ) {
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
      client_cert_mode: cdktf.stringToTerraform(this._clientCertMode),
      daily_memory_time_quota: cdktf.numberToTerraform(this._dailyMemoryTimeQuota),
      enable_builtin_logging: cdktf.booleanToTerraform(this._enableBuiltinLogging),
      enabled: cdktf.booleanToTerraform(this._enabled),
      https_only: cdktf.booleanToTerraform(this._httpsOnly),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      os_type: cdktf.stringToTerraform(this._osType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_access_key: cdktf.stringToTerraform(this._storageAccountAccessKey),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      storage_connection_string: cdktf.stringToTerraform(this._storageConnectionString),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      auth_settings: cdktf.listMapper(functionAppAuthSettingsToTerraform)(this._authSettings),
      connection_string: cdktf.listMapper(functionAppConnectionStringToTerraform)(this._connectionString),
      identity: cdktf.listMapper(functionAppIdentityToTerraform)(this._identity),
      site_config: cdktf.listMapper(functionAppSiteConfigToTerraform)(this._siteConfig),
      source_control: cdktf.listMapper(functionAppSourceControlToTerraform)(this._sourceControl),
      timeouts: functionAppTimeoutsToTerraform(this._timeouts),
    };
  }
}
