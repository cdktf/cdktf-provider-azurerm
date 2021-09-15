// https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionAppSlotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#app_service_plan_id FunctionAppSlot#app_service_plan_id}
  */
  readonly appServicePlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#app_settings FunctionAppSlot#app_settings}
  */
  readonly appSettings?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#client_affinity_enabled FunctionAppSlot#client_affinity_enabled}
  */
  readonly clientAffinityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#daily_memory_time_quota FunctionAppSlot#daily_memory_time_quota}
  */
  readonly dailyMemoryTimeQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#enable_builtin_logging FunctionAppSlot#enable_builtin_logging}
  */
  readonly enableBuiltinLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#enabled FunctionAppSlot#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#function_app_name FunctionAppSlot#function_app_name}
  */
  readonly functionAppName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#https_only FunctionAppSlot#https_only}
  */
  readonly httpsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#location FunctionAppSlot#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#name FunctionAppSlot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#os_type FunctionAppSlot#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#resource_group_name FunctionAppSlot#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#storage_account_access_key FunctionAppSlot#storage_account_access_key}
  */
  readonly storageAccountAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#storage_account_name FunctionAppSlot#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#tags FunctionAppSlot#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#version FunctionAppSlot#version}
  */
  readonly version?: string;
  /**
  * auth_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#auth_settings FunctionAppSlot#auth_settings}
  */
  readonly authSettings?: FunctionAppSlotAuthSettings[];
  /**
  * connection_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#connection_string FunctionAppSlot#connection_string}
  */
  readonly connectionString?: FunctionAppSlotConnectionString[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#identity FunctionAppSlot#identity}
  */
  readonly identity?: FunctionAppSlotIdentity[];
  /**
  * site_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#site_config FunctionAppSlot#site_config}
  */
  readonly siteConfig?: FunctionAppSlotSiteConfig[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#timeouts FunctionAppSlot#timeouts}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#allowed_audiences FunctionAppSlot#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#client_id FunctionAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#client_secret FunctionAppSlot#client_secret}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#app_id FunctionAppSlot#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#app_secret FunctionAppSlot#app_secret}
  */
  readonly appSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#oauth_scopes FunctionAppSlot#oauth_scopes}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#client_id FunctionAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#client_secret FunctionAppSlot#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#oauth_scopes FunctionAppSlot#oauth_scopes}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#client_id FunctionAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#client_secret FunctionAppSlot#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#oauth_scopes FunctionAppSlot#oauth_scopes}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#consumer_key FunctionAppSlot#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#consumer_secret FunctionAppSlot#consumer_secret}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#additional_login_params FunctionAppSlot#additional_login_params}
  */
  readonly additionalLoginParams?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#allowed_external_redirect_urls FunctionAppSlot#allowed_external_redirect_urls}
  */
  readonly allowedExternalRedirectUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#default_provider FunctionAppSlot#default_provider}
  */
  readonly defaultProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#enabled FunctionAppSlot#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#issuer FunctionAppSlot#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#runtime_version FunctionAppSlot#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#token_refresh_extension_hours FunctionAppSlot#token_refresh_extension_hours}
  */
  readonly tokenRefreshExtensionHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#token_store_enabled FunctionAppSlot#token_store_enabled}
  */
  readonly tokenStoreEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#unauthenticated_client_action FunctionAppSlot#unauthenticated_client_action}
  */
  readonly unauthenticatedClientAction?: string;
  /**
  * active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#active_directory FunctionAppSlot#active_directory}
  */
  readonly activeDirectory?: FunctionAppSlotAuthSettingsActiveDirectory[];
  /**
  * facebook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#facebook FunctionAppSlot#facebook}
  */
  readonly facebook?: FunctionAppSlotAuthSettingsFacebook[];
  /**
  * google block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#google FunctionAppSlot#google}
  */
  readonly google?: FunctionAppSlotAuthSettingsGoogle[];
  /**
  * microsoft block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#microsoft FunctionAppSlot#microsoft}
  */
  readonly microsoft?: FunctionAppSlotAuthSettingsMicrosoft[];
  /**
  * twitter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#twitter FunctionAppSlot#twitter}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#name FunctionAppSlot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#type FunctionAppSlot#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#value FunctionAppSlot#value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#identity_ids FunctionAppSlot#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#type FunctionAppSlot#type}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#x_azure_fdid FunctionAppSlot#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#x_fd_health_probe FunctionAppSlot#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#x_forwarded_for FunctionAppSlot#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#x_forwarded_host FunctionAppSlot#x_forwarded_host}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#action FunctionAppSlot#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#headers FunctionAppSlot#headers}
  */
  readonly headers?: FunctionAppSlotSiteConfigIpRestrictionHeaders[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#ip_address FunctionAppSlot#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#name FunctionAppSlot#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#priority FunctionAppSlot#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#service_tag FunctionAppSlot#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#virtual_network_subnet_id FunctionAppSlot#virtual_network_subnet_id}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#x_azure_fdid FunctionAppSlot#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#x_fd_health_probe FunctionAppSlot#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#x_forwarded_for FunctionAppSlot#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#x_forwarded_host FunctionAppSlot#x_forwarded_host}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#action FunctionAppSlot#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#headers FunctionAppSlot#headers}
  */
  readonly headers?: FunctionAppSlotSiteConfigScmIpRestrictionHeaders[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#ip_address FunctionAppSlot#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#name FunctionAppSlot#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#priority FunctionAppSlot#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#service_tag FunctionAppSlot#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#virtual_network_subnet_id FunctionAppSlot#virtual_network_subnet_id}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#allowed_origins FunctionAppSlot#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#support_credentials FunctionAppSlot#support_credentials}
  */
  readonly supportCredentials?: boolean | cdktf.IResolvable;
}

function functionAppSlotSiteConfigCorsToTerraform(struct?: FunctionAppSlotSiteConfigCors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    support_credentials: cdktf.booleanToTerraform(struct!.supportCredentials),
  }
}

export interface FunctionAppSlotSiteConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#always_on FunctionAppSlot#always_on}
  */
  readonly alwaysOn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#app_scale_limit FunctionAppSlot#app_scale_limit}
  */
  readonly appScaleLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#auto_swap_slot_name FunctionAppSlot#auto_swap_slot_name}
  */
  readonly autoSwapSlotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#dotnet_framework_version FunctionAppSlot#dotnet_framework_version}
  */
  readonly dotnetFrameworkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#elastic_instance_minimum FunctionAppSlot#elastic_instance_minimum}
  */
  readonly elasticInstanceMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#ftps_state FunctionAppSlot#ftps_state}
  */
  readonly ftpsState?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#health_check_path FunctionAppSlot#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#http2_enabled FunctionAppSlot#http2_enabled}
  */
  readonly http2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#ip_restriction FunctionAppSlot#ip_restriction}
  */
  readonly ipRestriction?: FunctionAppSlotSiteConfigIpRestriction[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#java_version FunctionAppSlot#java_version}
  */
  readonly javaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#linux_fx_version FunctionAppSlot#linux_fx_version}
  */
  readonly linuxFxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#min_tls_version FunctionAppSlot#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#pre_warmed_instance_count FunctionAppSlot#pre_warmed_instance_count}
  */
  readonly preWarmedInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#runtime_scale_monitoring_enabled FunctionAppSlot#runtime_scale_monitoring_enabled}
  */
  readonly runtimeScaleMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#scm_ip_restriction FunctionAppSlot#scm_ip_restriction}
  */
  readonly scmIpRestriction?: FunctionAppSlotSiteConfigScmIpRestriction[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#scm_type FunctionAppSlot#scm_type}
  */
  readonly scmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#scm_use_main_ip_restriction FunctionAppSlot#scm_use_main_ip_restriction}
  */
  readonly scmUseMainIpRestriction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#use_32_bit_worker_process FunctionAppSlot#use_32_bit_worker_process}
  */
  readonly use32BitWorkerProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#websockets_enabled FunctionAppSlot#websockets_enabled}
  */
  readonly websocketsEnabled?: boolean | cdktf.IResolvable;
  /**
  * cors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#cors FunctionAppSlot#cors}
  */
  readonly cors?: FunctionAppSlotSiteConfigCors[];
}

function functionAppSlotSiteConfigToTerraform(struct?: FunctionAppSlotSiteConfig): any {
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
    ip_restriction: cdktf.listMapper(functionAppSlotSiteConfigIpRestrictionToTerraform)(struct!.ipRestriction),
    java_version: cdktf.stringToTerraform(struct!.javaVersion),
    linux_fx_version: cdktf.stringToTerraform(struct!.linuxFxVersion),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    pre_warmed_instance_count: cdktf.numberToTerraform(struct!.preWarmedInstanceCount),
    runtime_scale_monitoring_enabled: cdktf.booleanToTerraform(struct!.runtimeScaleMonitoringEnabled),
    scm_ip_restriction: cdktf.listMapper(functionAppSlotSiteConfigScmIpRestrictionToTerraform)(struct!.scmIpRestriction),
    scm_type: cdktf.stringToTerraform(struct!.scmType),
    scm_use_main_ip_restriction: cdktf.booleanToTerraform(struct!.scmUseMainIpRestriction),
    use_32_bit_worker_process: cdktf.booleanToTerraform(struct!.use32BitWorkerProcess),
    websockets_enabled: cdktf.booleanToTerraform(struct!.websocketsEnabled),
    cors: cdktf.listMapper(functionAppSlotSiteConfigCorsToTerraform)(struct!.cors),
  }
}

export interface FunctionAppSlotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#create FunctionAppSlot#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#delete FunctionAppSlot#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#read FunctionAppSlot#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#update FunctionAppSlot#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html azurerm_function_app_slot}
*/
export class FunctionAppSlot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_function_app_slot";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html azurerm_function_app_slot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionAppSlotConfig
  */
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
  private _enableBuiltinLogging?: boolean | cdktf.IResolvable;
  public get enableBuiltinLogging() {
    return this.getBooleanAttribute('enable_builtin_logging');
  }
  public set enableBuiltinLogging(value: boolean | cdktf.IResolvable ) {
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
