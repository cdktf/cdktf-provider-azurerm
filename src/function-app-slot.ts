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
  readonly authSettings?: FunctionAppSlotAuthSettings;
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
  readonly identity?: FunctionAppSlotIdentity;
  /**
  * site_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#site_config FunctionAppSlot#site_config}
  */
  readonly siteConfig?: FunctionAppSlotSiteConfig;
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

function functionAppSlotAuthSettingsActiveDirectoryToTerraform(struct?: FunctionAppSlotAuthSettingsActiveDirectoryOutputReference | FunctionAppSlotAuthSettingsActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedAudiences),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}

export class FunctionAppSlotAuthSettingsActiveDirectoryOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed_audiences - computed: false, optional: true, required: false
  private _allowedAudiences?: string[] | undefined; 
  public get allowedAudiences() {
    return this.getListAttribute('allowed_audiences');
  }
  public set allowedAudiences(value: string[] | undefined) {
    this._allowedAudiences = value;
  }
  public resetAllowedAudiences() {
    this._allowedAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudiencesInput() {
    return this._allowedAudiences
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string | undefined; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret
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

function functionAppSlotAuthSettingsFacebookToTerraform(struct?: FunctionAppSlotAuthSettingsFacebookOutputReference | FunctionAppSlotAuthSettingsFacebook): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_secret: cdktf.stringToTerraform(struct!.appSecret),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
  }
}

export class FunctionAppSlotAuthSettingsFacebookOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId
  }

  // app_secret - computed: false, optional: false, required: true
  private _appSecret?: string; 
  public get appSecret() {
    return this.getStringAttribute('app_secret');
  }
  public set appSecret(value: string) {
    this._appSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecretInput() {
    return this._appSecret
  }

  // oauth_scopes - computed: false, optional: true, required: false
  private _oauthScopes?: string[] | undefined; 
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
  public set oauthScopes(value: string[] | undefined) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes
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

function functionAppSlotAuthSettingsGoogleToTerraform(struct?: FunctionAppSlotAuthSettingsGoogleOutputReference | FunctionAppSlotAuthSettingsGoogle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
  }
}

export class FunctionAppSlotAuthSettingsGoogleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret
  }

  // oauth_scopes - computed: false, optional: true, required: false
  private _oauthScopes?: string[] | undefined; 
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
  public set oauthScopes(value: string[] | undefined) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes
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

function functionAppSlotAuthSettingsMicrosoftToTerraform(struct?: FunctionAppSlotAuthSettingsMicrosoftOutputReference | FunctionAppSlotAuthSettingsMicrosoft): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
  }
}

export class FunctionAppSlotAuthSettingsMicrosoftOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret
  }

  // oauth_scopes - computed: false, optional: true, required: false
  private _oauthScopes?: string[] | undefined; 
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
  public set oauthScopes(value: string[] | undefined) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes
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

function functionAppSlotAuthSettingsTwitterToTerraform(struct?: FunctionAppSlotAuthSettingsTwitterOutputReference | FunctionAppSlotAuthSettingsTwitter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_key: cdktf.stringToTerraform(struct!.consumerKey),
    consumer_secret: cdktf.stringToTerraform(struct!.consumerSecret),
  }
}

export class FunctionAppSlotAuthSettingsTwitterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // consumer_key - computed: false, optional: false, required: true
  private _consumerKey?: string; 
  public get consumerKey() {
    return this.getStringAttribute('consumer_key');
  }
  public set consumerKey(value: string) {
    this._consumerKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerKeyInput() {
    return this._consumerKey
  }

  // consumer_secret - computed: false, optional: false, required: true
  private _consumerSecret?: string; 
  public get consumerSecret() {
    return this.getStringAttribute('consumer_secret');
  }
  public set consumerSecret(value: string) {
    this._consumerSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerSecretInput() {
    return this._consumerSecret
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
  readonly activeDirectory?: FunctionAppSlotAuthSettingsActiveDirectory;
  /**
  * facebook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#facebook FunctionAppSlot#facebook}
  */
  readonly facebook?: FunctionAppSlotAuthSettingsFacebook;
  /**
  * google block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#google FunctionAppSlot#google}
  */
  readonly google?: FunctionAppSlotAuthSettingsGoogle;
  /**
  * microsoft block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#microsoft FunctionAppSlot#microsoft}
  */
  readonly microsoft?: FunctionAppSlotAuthSettingsMicrosoft;
  /**
  * twitter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#twitter FunctionAppSlot#twitter}
  */
  readonly twitter?: FunctionAppSlotAuthSettingsTwitter;
}

function functionAppSlotAuthSettingsToTerraform(struct?: FunctionAppSlotAuthSettingsOutputReference | FunctionAppSlotAuthSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
    active_directory: functionAppSlotAuthSettingsActiveDirectoryToTerraform(struct!.activeDirectory),
    facebook: functionAppSlotAuthSettingsFacebookToTerraform(struct!.facebook),
    google: functionAppSlotAuthSettingsGoogleToTerraform(struct!.google),
    microsoft: functionAppSlotAuthSettingsMicrosoftToTerraform(struct!.microsoft),
    twitter: functionAppSlotAuthSettingsTwitterToTerraform(struct!.twitter),
  }
}

export class FunctionAppSlotAuthSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // additional_login_params - computed: false, optional: true, required: false
  private _additionalLoginParams?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get additionalLoginParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_login_params') as any;
  }
  public set additionalLoginParams(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._additionalLoginParams = value;
  }
  public resetAdditionalLoginParams() {
    this._additionalLoginParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLoginParamsInput() {
    return this._additionalLoginParams
  }

  // allowed_external_redirect_urls - computed: false, optional: true, required: false
  private _allowedExternalRedirectUrls?: string[] | undefined; 
  public get allowedExternalRedirectUrls() {
    return this.getListAttribute('allowed_external_redirect_urls');
  }
  public set allowedExternalRedirectUrls(value: string[] | undefined) {
    this._allowedExternalRedirectUrls = value;
  }
  public resetAllowedExternalRedirectUrls() {
    this._allowedExternalRedirectUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExternalRedirectUrlsInput() {
    return this._allowedExternalRedirectUrls
  }

  // default_provider - computed: false, optional: true, required: false
  private _defaultProvider?: string | undefined; 
  public get defaultProvider() {
    return this.getStringAttribute('default_provider');
  }
  public set defaultProvider(value: string | undefined) {
    this._defaultProvider = value;
  }
  public resetDefaultProvider() {
    this._defaultProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProviderInput() {
    return this._defaultProvider
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string | undefined; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string | undefined) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer
  }

  // runtime_version - computed: false, optional: true, required: false
  private _runtimeVersion?: string | undefined; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string | undefined) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion
  }

  // token_refresh_extension_hours - computed: false, optional: true, required: false
  private _tokenRefreshExtensionHours?: number | undefined; 
  public get tokenRefreshExtensionHours() {
    return this.getNumberAttribute('token_refresh_extension_hours');
  }
  public set tokenRefreshExtensionHours(value: number | undefined) {
    this._tokenRefreshExtensionHours = value;
  }
  public resetTokenRefreshExtensionHours() {
    this._tokenRefreshExtensionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefreshExtensionHoursInput() {
    return this._tokenRefreshExtensionHours
  }

  // token_store_enabled - computed: false, optional: true, required: false
  private _tokenStoreEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get tokenStoreEnabled() {
    return this.getBooleanAttribute('token_store_enabled') as any;
  }
  public set tokenStoreEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tokenStoreEnabled = value;
  }
  public resetTokenStoreEnabled() {
    this._tokenStoreEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenStoreEnabledInput() {
    return this._tokenStoreEnabled
  }

  // unauthenticated_client_action - computed: false, optional: true, required: false
  private _unauthenticatedClientAction?: string | undefined; 
  public get unauthenticatedClientAction() {
    return this.getStringAttribute('unauthenticated_client_action');
  }
  public set unauthenticatedClientAction(value: string | undefined) {
    this._unauthenticatedClientAction = value;
  }
  public resetUnauthenticatedClientAction() {
    this._unauthenticatedClientAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthenticatedClientActionInput() {
    return this._unauthenticatedClientAction
  }

  // active_directory - computed: false, optional: true, required: false
  private _activeDirectory?: FunctionAppSlotAuthSettingsActiveDirectory | undefined; 
  private __activeDirectoryOutput = new FunctionAppSlotAuthSettingsActiveDirectoryOutputReference(this as any, "active_directory", true);
  public get activeDirectory() {
    return this.__activeDirectoryOutput;
  }
  public putActiveDirectory(value: FunctionAppSlotAuthSettingsActiveDirectory | undefined) {
    this._activeDirectory = value;
  }
  public resetActiveDirectory() {
    this._activeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryInput() {
    return this._activeDirectory
  }

  // facebook - computed: false, optional: true, required: false
  private _facebook?: FunctionAppSlotAuthSettingsFacebook | undefined; 
  private __facebookOutput = new FunctionAppSlotAuthSettingsFacebookOutputReference(this as any, "facebook", true);
  public get facebook() {
    return this.__facebookOutput;
  }
  public putFacebook(value: FunctionAppSlotAuthSettingsFacebook | undefined) {
    this._facebook = value;
  }
  public resetFacebook() {
    this._facebook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facebookInput() {
    return this._facebook
  }

  // google - computed: false, optional: true, required: false
  private _google?: FunctionAppSlotAuthSettingsGoogle | undefined; 
  private __googleOutput = new FunctionAppSlotAuthSettingsGoogleOutputReference(this as any, "google", true);
  public get google() {
    return this.__googleOutput;
  }
  public putGoogle(value: FunctionAppSlotAuthSettingsGoogle | undefined) {
    this._google = value;
  }
  public resetGoogle() {
    this._google = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleInput() {
    return this._google
  }

  // microsoft - computed: false, optional: true, required: false
  private _microsoft?: FunctionAppSlotAuthSettingsMicrosoft | undefined; 
  private __microsoftOutput = new FunctionAppSlotAuthSettingsMicrosoftOutputReference(this as any, "microsoft", true);
  public get microsoft() {
    return this.__microsoftOutput;
  }
  public putMicrosoft(value: FunctionAppSlotAuthSettingsMicrosoft | undefined) {
    this._microsoft = value;
  }
  public resetMicrosoft() {
    this._microsoft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftInput() {
    return this._microsoft
  }

  // twitter - computed: false, optional: true, required: false
  private _twitter?: FunctionAppSlotAuthSettingsTwitter | undefined; 
  private __twitterOutput = new FunctionAppSlotAuthSettingsTwitterOutputReference(this as any, "twitter", true);
  public get twitter() {
    return this.__twitterOutput;
  }
  public putTwitter(value: FunctionAppSlotAuthSettingsTwitter | undefined) {
    this._twitter = value;
  }
  public resetTwitter() {
    this._twitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twitterInput() {
    return this._twitter
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

function functionAppSlotIdentityToTerraform(struct?: FunctionAppSlotIdentityOutputReference | FunctionAppSlotIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class FunctionAppSlotIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[] | undefined; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[] | undefined) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

function functionAppSlotSiteConfigCorsToTerraform(struct?: FunctionAppSlotSiteConfigCorsOutputReference | FunctionAppSlotSiteConfigCors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    support_credentials: cdktf.booleanToTerraform(struct!.supportCredentials),
  }
}

export class FunctionAppSlotSiteConfigCorsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins
  }

  // support_credentials - computed: false, optional: true, required: false
  private _supportCredentials?: boolean | cdktf.IResolvable | undefined; 
  public get supportCredentials() {
    return this.getBooleanAttribute('support_credentials') as any;
  }
  public set supportCredentials(value: boolean | cdktf.IResolvable | undefined) {
    this._supportCredentials = value;
  }
  public resetSupportCredentials() {
    this._supportCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportCredentialsInput() {
    return this._supportCredentials
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#vnet_route_all_enabled FunctionAppSlot#vnet_route_all_enabled}
  */
  readonly vnetRouteAllEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#websockets_enabled FunctionAppSlot#websockets_enabled}
  */
  readonly websocketsEnabled?: boolean | cdktf.IResolvable;
  /**
  * cors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app_slot.html#cors FunctionAppSlot#cors}
  */
  readonly cors?: FunctionAppSlotSiteConfigCors;
}

function functionAppSlotSiteConfigToTerraform(struct?: FunctionAppSlotSiteConfigOutputReference | FunctionAppSlotSiteConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
    vnet_route_all_enabled: cdktf.booleanToTerraform(struct!.vnetRouteAllEnabled),
    websockets_enabled: cdktf.booleanToTerraform(struct!.websocketsEnabled),
    cors: functionAppSlotSiteConfigCorsToTerraform(struct!.cors),
  }
}

export class FunctionAppSlotSiteConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // always_on - computed: false, optional: true, required: false
  private _alwaysOn?: boolean | cdktf.IResolvable | undefined; 
  public get alwaysOn() {
    return this.getBooleanAttribute('always_on') as any;
  }
  public set alwaysOn(value: boolean | cdktf.IResolvable | undefined) {
    this._alwaysOn = value;
  }
  public resetAlwaysOn() {
    this._alwaysOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysOnInput() {
    return this._alwaysOn
  }

  // app_scale_limit - computed: true, optional: true, required: false
  private _appScaleLimit?: number | undefined; 
  public get appScaleLimit() {
    return this.getNumberAttribute('app_scale_limit');
  }
  public set appScaleLimit(value: number | undefined) {
    this._appScaleLimit = value;
  }
  public resetAppScaleLimit() {
    this._appScaleLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appScaleLimitInput() {
    return this._appScaleLimit
  }

  // auto_swap_slot_name - computed: false, optional: true, required: false
  private _autoSwapSlotName?: string | undefined; 
  public get autoSwapSlotName() {
    return this.getStringAttribute('auto_swap_slot_name');
  }
  public set autoSwapSlotName(value: string | undefined) {
    this._autoSwapSlotName = value;
  }
  public resetAutoSwapSlotName() {
    this._autoSwapSlotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSwapSlotNameInput() {
    return this._autoSwapSlotName
  }

  // dotnet_framework_version - computed: false, optional: true, required: false
  private _dotnetFrameworkVersion?: string | undefined; 
  public get dotnetFrameworkVersion() {
    return this.getStringAttribute('dotnet_framework_version');
  }
  public set dotnetFrameworkVersion(value: string | undefined) {
    this._dotnetFrameworkVersion = value;
  }
  public resetDotnetFrameworkVersion() {
    this._dotnetFrameworkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotnetFrameworkVersionInput() {
    return this._dotnetFrameworkVersion
  }

  // elastic_instance_minimum - computed: true, optional: true, required: false
  private _elasticInstanceMinimum?: number | undefined; 
  public get elasticInstanceMinimum() {
    return this.getNumberAttribute('elastic_instance_minimum');
  }
  public set elasticInstanceMinimum(value: number | undefined) {
    this._elasticInstanceMinimum = value;
  }
  public resetElasticInstanceMinimum() {
    this._elasticInstanceMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticInstanceMinimumInput() {
    return this._elasticInstanceMinimum
  }

  // ftps_state - computed: true, optional: true, required: false
  private _ftpsState?: string | undefined; 
  public get ftpsState() {
    return this.getStringAttribute('ftps_state');
  }
  public set ftpsState(value: string | undefined) {
    this._ftpsState = value;
  }
  public resetFtpsState() {
    this._ftpsState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpsStateInput() {
    return this._ftpsState
  }

  // health_check_path - computed: false, optional: true, required: false
  private _healthCheckPath?: string | undefined; 
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string | undefined) {
    this._healthCheckPath = value;
  }
  public resetHealthCheckPath() {
    this._healthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath
  }

  // http2_enabled - computed: false, optional: true, required: false
  private _http2Enabled?: boolean | cdktf.IResolvable | undefined; 
  public get http2Enabled() {
    return this.getBooleanAttribute('http2_enabled') as any;
  }
  public set http2Enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._http2Enabled = value;
  }
  public resetHttp2Enabled() {
    this._http2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2EnabledInput() {
    return this._http2Enabled
  }

  // ip_restriction - computed: true, optional: true, required: false
  private _ipRestriction?: FunctionAppSlotSiteConfigIpRestriction[] | undefined; 
  public get ipRestriction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_restriction') as any;
  }
  public set ipRestriction(value: FunctionAppSlotSiteConfigIpRestriction[] | undefined) {
    this._ipRestriction = value;
  }
  public resetIpRestriction() {
    this._ipRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionInput() {
    return this._ipRestriction
  }

  // java_version - computed: false, optional: true, required: false
  private _javaVersion?: string | undefined; 
  public get javaVersion() {
    return this.getStringAttribute('java_version');
  }
  public set javaVersion(value: string | undefined) {
    this._javaVersion = value;
  }
  public resetJavaVersion() {
    this._javaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaVersionInput() {
    return this._javaVersion
  }

  // linux_fx_version - computed: true, optional: true, required: false
  private _linuxFxVersion?: string | undefined; 
  public get linuxFxVersion() {
    return this.getStringAttribute('linux_fx_version');
  }
  public set linuxFxVersion(value: string | undefined) {
    this._linuxFxVersion = value;
  }
  public resetLinuxFxVersion() {
    this._linuxFxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxFxVersionInput() {
    return this._linuxFxVersion
  }

  // min_tls_version - computed: true, optional: true, required: false
  private _minTlsVersion?: string | undefined; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string | undefined) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion
  }

  // pre_warmed_instance_count - computed: true, optional: true, required: false
  private _preWarmedInstanceCount?: number | undefined; 
  public get preWarmedInstanceCount() {
    return this.getNumberAttribute('pre_warmed_instance_count');
  }
  public set preWarmedInstanceCount(value: number | undefined) {
    this._preWarmedInstanceCount = value;
  }
  public resetPreWarmedInstanceCount() {
    this._preWarmedInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preWarmedInstanceCountInput() {
    return this._preWarmedInstanceCount
  }

  // runtime_scale_monitoring_enabled - computed: false, optional: true, required: false
  private _runtimeScaleMonitoringEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get runtimeScaleMonitoringEnabled() {
    return this.getBooleanAttribute('runtime_scale_monitoring_enabled') as any;
  }
  public set runtimeScaleMonitoringEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._runtimeScaleMonitoringEnabled = value;
  }
  public resetRuntimeScaleMonitoringEnabled() {
    this._runtimeScaleMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeScaleMonitoringEnabledInput() {
    return this._runtimeScaleMonitoringEnabled
  }

  // scm_ip_restriction - computed: true, optional: true, required: false
  private _scmIpRestriction?: FunctionAppSlotSiteConfigScmIpRestriction[] | undefined; 
  public get scmIpRestriction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scm_ip_restriction') as any;
  }
  public set scmIpRestriction(value: FunctionAppSlotSiteConfigScmIpRestriction[] | undefined) {
    this._scmIpRestriction = value;
  }
  public resetScmIpRestriction() {
    this._scmIpRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmIpRestrictionInput() {
    return this._scmIpRestriction
  }

  // scm_type - computed: true, optional: true, required: false
  private _scmType?: string | undefined; 
  public get scmType() {
    return this.getStringAttribute('scm_type');
  }
  public set scmType(value: string | undefined) {
    this._scmType = value;
  }
  public resetScmType() {
    this._scmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmTypeInput() {
    return this._scmType
  }

  // scm_use_main_ip_restriction - computed: false, optional: true, required: false
  private _scmUseMainIpRestriction?: boolean | cdktf.IResolvable | undefined; 
  public get scmUseMainIpRestriction() {
    return this.getBooleanAttribute('scm_use_main_ip_restriction') as any;
  }
  public set scmUseMainIpRestriction(value: boolean | cdktf.IResolvable | undefined) {
    this._scmUseMainIpRestriction = value;
  }
  public resetScmUseMainIpRestriction() {
    this._scmUseMainIpRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmUseMainIpRestrictionInput() {
    return this._scmUseMainIpRestriction
  }

  // use_32_bit_worker_process - computed: false, optional: true, required: false
  private _use32BitWorkerProcess?: boolean | cdktf.IResolvable | undefined; 
  public get use32BitWorkerProcess() {
    return this.getBooleanAttribute('use_32_bit_worker_process') as any;
  }
  public set use32BitWorkerProcess(value: boolean | cdktf.IResolvable | undefined) {
    this._use32BitWorkerProcess = value;
  }
  public resetUse32BitWorkerProcess() {
    this._use32BitWorkerProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get use32BitWorkerProcessInput() {
    return this._use32BitWorkerProcess
  }

  // vnet_route_all_enabled - computed: true, optional: true, required: false
  private _vnetRouteAllEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get vnetRouteAllEnabled() {
    return this.getBooleanAttribute('vnet_route_all_enabled') as any;
  }
  public set vnetRouteAllEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._vnetRouteAllEnabled = value;
  }
  public resetVnetRouteAllEnabled() {
    this._vnetRouteAllEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetRouteAllEnabledInput() {
    return this._vnetRouteAllEnabled
  }

  // websockets_enabled - computed: false, optional: true, required: false
  private _websocketsEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get websocketsEnabled() {
    return this.getBooleanAttribute('websockets_enabled') as any;
  }
  public set websocketsEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._websocketsEnabled = value;
  }
  public resetWebsocketsEnabled() {
    this._websocketsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketsEnabledInput() {
    return this._websocketsEnabled
  }

  // cors - computed: false, optional: true, required: false
  private _cors?: FunctionAppSlotSiteConfigCors | undefined; 
  private __corsOutput = new FunctionAppSlotSiteConfigCorsOutputReference(this as any, "cors", true);
  public get cors() {
    return this.__corsOutput;
  }
  public putCors(value: FunctionAppSlotSiteConfigCors | undefined) {
    this._cors = value;
  }
  public resetCors() {
    this._cors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors
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

function functionAppSlotTimeoutsToTerraform(struct?: FunctionAppSlotTimeoutsOutputReference | FunctionAppSlotTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class FunctionAppSlotTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
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
  private _appServicePlanId?: string; 
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
  private _appSettings?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get appSettings() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('app_settings') as any;
  }
  public set appSettings(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _clientAffinityEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get clientAffinityEnabled() {
    return this.getBooleanAttribute('client_affinity_enabled') as any;
  }
  public set clientAffinityEnabled(value: boolean | cdktf.IResolvable | undefined) {
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
  private _dailyMemoryTimeQuota?: number | undefined; 
  public get dailyMemoryTimeQuota() {
    return this.getNumberAttribute('daily_memory_time_quota');
  }
  public set dailyMemoryTimeQuota(value: number | undefined) {
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
  private _enableBuiltinLogging?: boolean | cdktf.IResolvable | undefined; 
  public get enableBuiltinLogging() {
    return this.getBooleanAttribute('enable_builtin_logging') as any;
  }
  public set enableBuiltinLogging(value: boolean | cdktf.IResolvable | undefined) {
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
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
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
  private _functionAppName?: string; 
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
  private _httpsOnly?: boolean | cdktf.IResolvable | undefined; 
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only') as any;
  }
  public set httpsOnly(value: boolean | cdktf.IResolvable | undefined) {
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
  private _location?: string; 
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
  private _name?: string; 
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
  private _osType?: string | undefined; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string | undefined) {
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
  private _resourceGroupName?: string; 
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
  private _storageAccountAccessKey?: string; 
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
  private _storageAccountName?: string; 
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
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
  private _authSettings?: FunctionAppSlotAuthSettings | undefined; 
  private __authSettingsOutput = new FunctionAppSlotAuthSettingsOutputReference(this as any, "auth_settings", true);
  public get authSettings() {
    return this.__authSettingsOutput;
  }
  public putAuthSettings(value: FunctionAppSlotAuthSettings | undefined) {
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
  private _connectionString?: FunctionAppSlotConnectionString[] | undefined; 
  public get connectionString() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('connection_string') as any;
  }
  public set connectionString(value: FunctionAppSlotConnectionString[] | undefined) {
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
  private _identity?: FunctionAppSlotIdentity | undefined; 
  private __identityOutput = new FunctionAppSlotIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: FunctionAppSlotIdentity | undefined) {
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
  private _siteConfig?: FunctionAppSlotSiteConfig | undefined; 
  private __siteConfigOutput = new FunctionAppSlotSiteConfigOutputReference(this as any, "site_config", true);
  public get siteConfig() {
    return this.__siteConfigOutput;
  }
  public putSiteConfig(value: FunctionAppSlotSiteConfig | undefined) {
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
  private _timeouts?: FunctionAppSlotTimeouts | undefined; 
  private __timeoutsOutput = new FunctionAppSlotTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: FunctionAppSlotTimeouts | undefined) {
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
      auth_settings: functionAppSlotAuthSettingsToTerraform(this._authSettings),
      connection_string: cdktf.listMapper(functionAppSlotConnectionStringToTerraform)(this._connectionString),
      identity: functionAppSlotIdentityToTerraform(this._identity),
      site_config: functionAppSlotSiteConfigToTerraform(this._siteConfig),
      timeouts: functionAppSlotTimeoutsToTerraform(this._timeouts),
    };
  }
}
