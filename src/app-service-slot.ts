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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#key_vault_reference_identity_id AppServiceSlot#key_vault_reference_identity_id}
  */
  readonly keyVaultReferenceIdentityId?: string;
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
  readonly authSettings?: AppServiceSlotAuthSettings;
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
  readonly identity?: AppServiceSlotIdentity;
  /**
  * logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#logs AppServiceSlot#logs}
  */
  readonly logs?: AppServiceSlotLogs;
  /**
  * site_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#site_config AppServiceSlot#site_config}
  */
  readonly siteConfig?: AppServiceSlotSiteConfig;
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

function appServiceSlotAuthSettingsActiveDirectoryToTerraform(struct?: AppServiceSlotAuthSettingsActiveDirectoryOutputReference | AppServiceSlotAuthSettingsActiveDirectory): any {
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

export class AppServiceSlotAuthSettingsActiveDirectoryOutputReference extends cdktf.ComplexObject {
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

function appServiceSlotAuthSettingsFacebookToTerraform(struct?: AppServiceSlotAuthSettingsFacebookOutputReference | AppServiceSlotAuthSettingsFacebook): any {
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

export class AppServiceSlotAuthSettingsFacebookOutputReference extends cdktf.ComplexObject {
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

function appServiceSlotAuthSettingsGoogleToTerraform(struct?: AppServiceSlotAuthSettingsGoogleOutputReference | AppServiceSlotAuthSettingsGoogle): any {
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

export class AppServiceSlotAuthSettingsGoogleOutputReference extends cdktf.ComplexObject {
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

function appServiceSlotAuthSettingsMicrosoftToTerraform(struct?: AppServiceSlotAuthSettingsMicrosoftOutputReference | AppServiceSlotAuthSettingsMicrosoft): any {
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

export class AppServiceSlotAuthSettingsMicrosoftOutputReference extends cdktf.ComplexObject {
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

function appServiceSlotAuthSettingsTwitterToTerraform(struct?: AppServiceSlotAuthSettingsTwitterOutputReference | AppServiceSlotAuthSettingsTwitter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_key: cdktf.stringToTerraform(struct!.consumerKey),
    consumer_secret: cdktf.stringToTerraform(struct!.consumerSecret),
  }
}

export class AppServiceSlotAuthSettingsTwitterOutputReference extends cdktf.ComplexObject {
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
  readonly activeDirectory?: AppServiceSlotAuthSettingsActiveDirectory;
  /**
  * facebook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#facebook AppServiceSlot#facebook}
  */
  readonly facebook?: AppServiceSlotAuthSettingsFacebook;
  /**
  * google block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#google AppServiceSlot#google}
  */
  readonly google?: AppServiceSlotAuthSettingsGoogle;
  /**
  * microsoft block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#microsoft AppServiceSlot#microsoft}
  */
  readonly microsoft?: AppServiceSlotAuthSettingsMicrosoft;
  /**
  * twitter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#twitter AppServiceSlot#twitter}
  */
  readonly twitter?: AppServiceSlotAuthSettingsTwitter;
}

function appServiceSlotAuthSettingsToTerraform(struct?: AppServiceSlotAuthSettingsOutputReference | AppServiceSlotAuthSettings): any {
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
    active_directory: appServiceSlotAuthSettingsActiveDirectoryToTerraform(struct!.activeDirectory),
    facebook: appServiceSlotAuthSettingsFacebookToTerraform(struct!.facebook),
    google: appServiceSlotAuthSettingsGoogleToTerraform(struct!.google),
    microsoft: appServiceSlotAuthSettingsMicrosoftToTerraform(struct!.microsoft),
    twitter: appServiceSlotAuthSettingsTwitterToTerraform(struct!.twitter),
  }
}

export class AppServiceSlotAuthSettingsOutputReference extends cdktf.ComplexObject {
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
  private _activeDirectory?: AppServiceSlotAuthSettingsActiveDirectory | undefined; 
  private __activeDirectoryOutput = new AppServiceSlotAuthSettingsActiveDirectoryOutputReference(this as any, "active_directory", true);
  public get activeDirectory() {
    return this.__activeDirectoryOutput;
  }
  public putActiveDirectory(value: AppServiceSlotAuthSettingsActiveDirectory | undefined) {
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
  private _facebook?: AppServiceSlotAuthSettingsFacebook | undefined; 
  private __facebookOutput = new AppServiceSlotAuthSettingsFacebookOutputReference(this as any, "facebook", true);
  public get facebook() {
    return this.__facebookOutput;
  }
  public putFacebook(value: AppServiceSlotAuthSettingsFacebook | undefined) {
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
  private _google?: AppServiceSlotAuthSettingsGoogle | undefined; 
  private __googleOutput = new AppServiceSlotAuthSettingsGoogleOutputReference(this as any, "google", true);
  public get google() {
    return this.__googleOutput;
  }
  public putGoogle(value: AppServiceSlotAuthSettingsGoogle | undefined) {
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
  private _microsoft?: AppServiceSlotAuthSettingsMicrosoft | undefined; 
  private __microsoftOutput = new AppServiceSlotAuthSettingsMicrosoftOutputReference(this as any, "microsoft", true);
  public get microsoft() {
    return this.__microsoftOutput;
  }
  public putMicrosoft(value: AppServiceSlotAuthSettingsMicrosoft | undefined) {
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
  private _twitter?: AppServiceSlotAuthSettingsTwitter | undefined; 
  private __twitterOutput = new AppServiceSlotAuthSettingsTwitterOutputReference(this as any, "twitter", true);
  public get twitter() {
    return this.__twitterOutput;
  }
  public putTwitter(value: AppServiceSlotAuthSettingsTwitter | undefined) {
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

function appServiceSlotIdentityToTerraform(struct?: AppServiceSlotIdentityOutputReference | AppServiceSlotIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class AppServiceSlotIdentityOutputReference extends cdktf.ComplexObject {
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

function appServiceSlotLogsApplicationLogsAzureBlobStorageToTerraform(struct?: AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference | AppServiceSlotLogsApplicationLogsAzureBlobStorage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    sas_url: cdktf.stringToTerraform(struct!.sasUrl),
  }
}

export class AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level
  }

  // retention_in_days - computed: false, optional: false, required: true
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays
  }

  // sas_url - computed: false, optional: false, required: true
  private _sasUrl?: string; 
  public get sasUrl() {
    return this.getStringAttribute('sas_url');
  }
  public set sasUrl(value: string) {
    this._sasUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sasUrlInput() {
    return this._sasUrl
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
  readonly azureBlobStorage?: AppServiceSlotLogsApplicationLogsAzureBlobStorage;
}

function appServiceSlotLogsApplicationLogsToTerraform(struct?: AppServiceSlotLogsApplicationLogsOutputReference | AppServiceSlotLogsApplicationLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_level: cdktf.stringToTerraform(struct!.fileSystemLevel),
    azure_blob_storage: appServiceSlotLogsApplicationLogsAzureBlobStorageToTerraform(struct!.azureBlobStorage),
  }
}

export class AppServiceSlotLogsApplicationLogsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // file_system_level - computed: false, optional: true, required: false
  private _fileSystemLevel?: string | undefined; 
  public get fileSystemLevel() {
    return this.getStringAttribute('file_system_level');
  }
  public set fileSystemLevel(value: string | undefined) {
    this._fileSystemLevel = value;
  }
  public resetFileSystemLevel() {
    this._fileSystemLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemLevelInput() {
    return this._fileSystemLevel
  }

  // azure_blob_storage - computed: false, optional: true, required: false
  private _azureBlobStorage?: AppServiceSlotLogsApplicationLogsAzureBlobStorage | undefined; 
  private __azureBlobStorageOutput = new AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference(this as any, "azure_blob_storage", true);
  public get azureBlobStorage() {
    return this.__azureBlobStorageOutput;
  }
  public putAzureBlobStorage(value: AppServiceSlotLogsApplicationLogsAzureBlobStorage | undefined) {
    this._azureBlobStorage = value;
  }
  public resetAzureBlobStorage() {
    this._azureBlobStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageInput() {
    return this._azureBlobStorage
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

function appServiceSlotLogsHttpLogsAzureBlobStorageToTerraform(struct?: AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference | AppServiceSlotLogsHttpLogsAzureBlobStorage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    sas_url: cdktf.stringToTerraform(struct!.sasUrl),
  }
}

export class AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // retention_in_days - computed: false, optional: false, required: true
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays
  }

  // sas_url - computed: false, optional: false, required: true
  private _sasUrl?: string; 
  public get sasUrl() {
    return this.getStringAttribute('sas_url');
  }
  public set sasUrl(value: string) {
    this._sasUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sasUrlInput() {
    return this._sasUrl
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

function appServiceSlotLogsHttpLogsFileSystemToTerraform(struct?: AppServiceSlotLogsHttpLogsFileSystemOutputReference | AppServiceSlotLogsHttpLogsFileSystem): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    retention_in_mb: cdktf.numberToTerraform(struct!.retentionInMb),
  }
}

export class AppServiceSlotLogsHttpLogsFileSystemOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // retention_in_days - computed: false, optional: false, required: true
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays
  }

  // retention_in_mb - computed: false, optional: false, required: true
  private _retentionInMb?: number; 
  public get retentionInMb() {
    return this.getNumberAttribute('retention_in_mb');
  }
  public set retentionInMb(value: number) {
    this._retentionInMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInMbInput() {
    return this._retentionInMb
  }
}
export interface AppServiceSlotLogsHttpLogs {
  /**
  * azure_blob_storage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#azure_blob_storage AppServiceSlot#azure_blob_storage}
  */
  readonly azureBlobStorage?: AppServiceSlotLogsHttpLogsAzureBlobStorage;
  /**
  * file_system block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#file_system AppServiceSlot#file_system}
  */
  readonly fileSystem?: AppServiceSlotLogsHttpLogsFileSystem;
}

function appServiceSlotLogsHttpLogsToTerraform(struct?: AppServiceSlotLogsHttpLogsOutputReference | AppServiceSlotLogsHttpLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_blob_storage: appServiceSlotLogsHttpLogsAzureBlobStorageToTerraform(struct!.azureBlobStorage),
    file_system: appServiceSlotLogsHttpLogsFileSystemToTerraform(struct!.fileSystem),
  }
}

export class AppServiceSlotLogsHttpLogsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // azure_blob_storage - computed: false, optional: true, required: false
  private _azureBlobStorage?: AppServiceSlotLogsHttpLogsAzureBlobStorage | undefined; 
  private __azureBlobStorageOutput = new AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference(this as any, "azure_blob_storage", true);
  public get azureBlobStorage() {
    return this.__azureBlobStorageOutput;
  }
  public putAzureBlobStorage(value: AppServiceSlotLogsHttpLogsAzureBlobStorage | undefined) {
    this._azureBlobStorage = value;
  }
  public resetAzureBlobStorage() {
    this._azureBlobStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageInput() {
    return this._azureBlobStorage
  }

  // file_system - computed: false, optional: true, required: false
  private _fileSystem?: AppServiceSlotLogsHttpLogsFileSystem | undefined; 
  private __fileSystemOutput = new AppServiceSlotLogsHttpLogsFileSystemOutputReference(this as any, "file_system", true);
  public get fileSystem() {
    return this.__fileSystemOutput;
  }
  public putFileSystem(value: AppServiceSlotLogsHttpLogsFileSystem | undefined) {
    this._fileSystem = value;
  }
  public resetFileSystem() {
    this._fileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem
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
  readonly applicationLogs?: AppServiceSlotLogsApplicationLogs;
  /**
  * http_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_slot.html#http_logs AppServiceSlot#http_logs}
  */
  readonly httpLogs?: AppServiceSlotLogsHttpLogs;
}

function appServiceSlotLogsToTerraform(struct?: AppServiceSlotLogsOutputReference | AppServiceSlotLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detailed_error_messages_enabled: cdktf.booleanToTerraform(struct!.detailedErrorMessagesEnabled),
    failed_request_tracing_enabled: cdktf.booleanToTerraform(struct!.failedRequestTracingEnabled),
    application_logs: appServiceSlotLogsApplicationLogsToTerraform(struct!.applicationLogs),
    http_logs: appServiceSlotLogsHttpLogsToTerraform(struct!.httpLogs),
  }
}

export class AppServiceSlotLogsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // detailed_error_messages_enabled - computed: false, optional: true, required: false
  private _detailedErrorMessagesEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get detailedErrorMessagesEnabled() {
    return this.getBooleanAttribute('detailed_error_messages_enabled') as any;
  }
  public set detailedErrorMessagesEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._detailedErrorMessagesEnabled = value;
  }
  public resetDetailedErrorMessagesEnabled() {
    this._detailedErrorMessagesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedErrorMessagesEnabledInput() {
    return this._detailedErrorMessagesEnabled
  }

  // failed_request_tracing_enabled - computed: false, optional: true, required: false
  private _failedRequestTracingEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get failedRequestTracingEnabled() {
    return this.getBooleanAttribute('failed_request_tracing_enabled') as any;
  }
  public set failedRequestTracingEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._failedRequestTracingEnabled = value;
  }
  public resetFailedRequestTracingEnabled() {
    this._failedRequestTracingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedRequestTracingEnabledInput() {
    return this._failedRequestTracingEnabled
  }

  // application_logs - computed: false, optional: true, required: false
  private _applicationLogs?: AppServiceSlotLogsApplicationLogs | undefined; 
  private __applicationLogsOutput = new AppServiceSlotLogsApplicationLogsOutputReference(this as any, "application_logs", true);
  public get applicationLogs() {
    return this.__applicationLogsOutput;
  }
  public putApplicationLogs(value: AppServiceSlotLogsApplicationLogs | undefined) {
    this._applicationLogs = value;
  }
  public resetApplicationLogs() {
    this._applicationLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLogsInput() {
    return this._applicationLogs
  }

  // http_logs - computed: false, optional: true, required: false
  private _httpLogs?: AppServiceSlotLogsHttpLogs | undefined; 
  private __httpLogsOutput = new AppServiceSlotLogsHttpLogsOutputReference(this as any, "http_logs", true);
  public get httpLogs() {
    return this.__httpLogsOutput;
  }
  public putHttpLogs(value: AppServiceSlotLogsHttpLogs | undefined) {
    this._httpLogs = value;
  }
  public resetHttpLogs() {
    this._httpLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLogsInput() {
    return this._httpLogs
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

function appServiceSlotSiteConfigCorsToTerraform(struct?: AppServiceSlotSiteConfigCorsOutputReference | AppServiceSlotSiteConfigCors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    support_credentials: cdktf.booleanToTerraform(struct!.supportCredentials),
  }
}

export class AppServiceSlotSiteConfigCorsOutputReference extends cdktf.ComplexObject {
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
  readonly cors?: AppServiceSlotSiteConfigCors;
}

function appServiceSlotSiteConfigToTerraform(struct?: AppServiceSlotSiteConfigOutputReference | AppServiceSlotSiteConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
    cors: appServiceSlotSiteConfigCorsToTerraform(struct!.cors),
  }
}

export class AppServiceSlotSiteConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // acr_use_managed_identity_credentials - computed: false, optional: true, required: false
  private _acrUseManagedIdentityCredentials?: boolean | cdktf.IResolvable | undefined; 
  public get acrUseManagedIdentityCredentials() {
    return this.getBooleanAttribute('acr_use_managed_identity_credentials') as any;
  }
  public set acrUseManagedIdentityCredentials(value: boolean | cdktf.IResolvable | undefined) {
    this._acrUseManagedIdentityCredentials = value;
  }
  public resetAcrUseManagedIdentityCredentials() {
    this._acrUseManagedIdentityCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrUseManagedIdentityCredentialsInput() {
    return this._acrUseManagedIdentityCredentials
  }

  // acr_user_managed_identity_client_id - computed: false, optional: true, required: false
  private _acrUserManagedIdentityClientId?: string | undefined; 
  public get acrUserManagedIdentityClientId() {
    return this.getStringAttribute('acr_user_managed_identity_client_id');
  }
  public set acrUserManagedIdentityClientId(value: string | undefined) {
    this._acrUserManagedIdentityClientId = value;
  }
  public resetAcrUserManagedIdentityClientId() {
    this._acrUserManagedIdentityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrUserManagedIdentityClientIdInput() {
    return this._acrUserManagedIdentityClientId
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

  // app_command_line - computed: false, optional: true, required: false
  private _appCommandLine?: string | undefined; 
  public get appCommandLine() {
    return this.getStringAttribute('app_command_line');
  }
  public set appCommandLine(value: string | undefined) {
    this._appCommandLine = value;
  }
  public resetAppCommandLine() {
    this._appCommandLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCommandLineInput() {
    return this._appCommandLine
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

  // default_documents - computed: false, optional: true, required: false
  private _defaultDocuments?: string[] | undefined; 
  public get defaultDocuments() {
    return this.getListAttribute('default_documents');
  }
  public set defaultDocuments(value: string[] | undefined) {
    this._defaultDocuments = value;
  }
  public resetDefaultDocuments() {
    this._defaultDocuments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDocumentsInput() {
    return this._defaultDocuments
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
  private _ipRestriction?: AppServiceSlotSiteConfigIpRestriction[] | undefined; 
  public get ipRestriction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_restriction') as any;
  }
  public set ipRestriction(value: AppServiceSlotSiteConfigIpRestriction[] | undefined) {
    this._ipRestriction = value;
  }
  public resetIpRestriction() {
    this._ipRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionInput() {
    return this._ipRestriction
  }

  // java_container - computed: false, optional: true, required: false
  private _javaContainer?: string | undefined; 
  public get javaContainer() {
    return this.getStringAttribute('java_container');
  }
  public set javaContainer(value: string | undefined) {
    this._javaContainer = value;
  }
  public resetJavaContainer() {
    this._javaContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaContainerInput() {
    return this._javaContainer
  }

  // java_container_version - computed: false, optional: true, required: false
  private _javaContainerVersion?: string | undefined; 
  public get javaContainerVersion() {
    return this.getStringAttribute('java_container_version');
  }
  public set javaContainerVersion(value: string | undefined) {
    this._javaContainerVersion = value;
  }
  public resetJavaContainerVersion() {
    this._javaContainerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaContainerVersionInput() {
    return this._javaContainerVersion
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

  // local_mysql_enabled - computed: true, optional: true, required: false
  private _localMysqlEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get localMysqlEnabled() {
    return this.getBooleanAttribute('local_mysql_enabled') as any;
  }
  public set localMysqlEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._localMysqlEnabled = value;
  }
  public resetLocalMysqlEnabled() {
    this._localMysqlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localMysqlEnabledInput() {
    return this._localMysqlEnabled
  }

  // managed_pipeline_mode - computed: true, optional: true, required: false
  private _managedPipelineMode?: string | undefined; 
  public get managedPipelineMode() {
    return this.getStringAttribute('managed_pipeline_mode');
  }
  public set managedPipelineMode(value: string | undefined) {
    this._managedPipelineMode = value;
  }
  public resetManagedPipelineMode() {
    this._managedPipelineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPipelineModeInput() {
    return this._managedPipelineMode
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

  // number_of_workers - computed: true, optional: true, required: false
  private _numberOfWorkers?: number | undefined; 
  public get numberOfWorkers() {
    return this.getNumberAttribute('number_of_workers');
  }
  public set numberOfWorkers(value: number | undefined) {
    this._numberOfWorkers = value;
  }
  public resetNumberOfWorkers() {
    this._numberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfWorkersInput() {
    return this._numberOfWorkers
  }

  // php_version - computed: false, optional: true, required: false
  private _phpVersion?: string | undefined; 
  public get phpVersion() {
    return this.getStringAttribute('php_version');
  }
  public set phpVersion(value: string | undefined) {
    this._phpVersion = value;
  }
  public resetPhpVersion() {
    this._phpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phpVersionInput() {
    return this._phpVersion
  }

  // python_version - computed: false, optional: true, required: false
  private _pythonVersion?: string | undefined; 
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }
  public set pythonVersion(value: string | undefined) {
    this._pythonVersion = value;
  }
  public resetPythonVersion() {
    this._pythonVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonVersionInput() {
    return this._pythonVersion
  }

  // remote_debugging_enabled - computed: false, optional: true, required: false
  private _remoteDebuggingEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get remoteDebuggingEnabled() {
    return this.getBooleanAttribute('remote_debugging_enabled') as any;
  }
  public set remoteDebuggingEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._remoteDebuggingEnabled = value;
  }
  public resetRemoteDebuggingEnabled() {
    this._remoteDebuggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDebuggingEnabledInput() {
    return this._remoteDebuggingEnabled
  }

  // remote_debugging_version - computed: true, optional: true, required: false
  private _remoteDebuggingVersion?: string | undefined; 
  public get remoteDebuggingVersion() {
    return this.getStringAttribute('remote_debugging_version');
  }
  public set remoteDebuggingVersion(value: string | undefined) {
    this._remoteDebuggingVersion = value;
  }
  public resetRemoteDebuggingVersion() {
    this._remoteDebuggingVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDebuggingVersionInput() {
    return this._remoteDebuggingVersion
  }

  // scm_ip_restriction - computed: true, optional: true, required: false
  private _scmIpRestriction?: AppServiceSlotSiteConfigScmIpRestriction[] | undefined; 
  public get scmIpRestriction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scm_ip_restriction') as any;
  }
  public set scmIpRestriction(value: AppServiceSlotSiteConfigScmIpRestriction[] | undefined) {
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

  // websockets_enabled - computed: true, optional: true, required: false
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

  // windows_fx_version - computed: true, optional: true, required: false
  private _windowsFxVersion?: string | undefined; 
  public get windowsFxVersion() {
    return this.getStringAttribute('windows_fx_version');
  }
  public set windowsFxVersion(value: string | undefined) {
    this._windowsFxVersion = value;
  }
  public resetWindowsFxVersion() {
    this._windowsFxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsFxVersionInput() {
    return this._windowsFxVersion
  }

  // cors - computed: false, optional: true, required: false
  private _cors?: AppServiceSlotSiteConfigCors | undefined; 
  private __corsOutput = new AppServiceSlotSiteConfigCorsOutputReference(this as any, "cors", true);
  public get cors() {
    return this.__corsOutput;
  }
  public putCors(value: AppServiceSlotSiteConfigCors | undefined) {
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

function appServiceSlotTimeoutsToTerraform(struct?: AppServiceSlotTimeoutsOutputReference | AppServiceSlotTimeouts): any {
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

export class AppServiceSlotTimeoutsOutputReference extends cdktf.ComplexObject {
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
    this._keyVaultReferenceIdentityId = config.keyVaultReferenceIdentityId;
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
  private _appServiceName?: string; 
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

  // default_site_hostname - computed: true, optional: false, required: false
  public get defaultSiteHostname() {
    return this.getStringAttribute('default_site_hostname');
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

  // key_vault_reference_identity_id - computed: true, optional: true, required: false
  private _keyVaultReferenceIdentityId?: string | undefined; 
  public get keyVaultReferenceIdentityId() {
    return this.getStringAttribute('key_vault_reference_identity_id');
  }
  public set keyVaultReferenceIdentityId(value: string | undefined) {
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
    return new AppServiceSlotSiteCredential(this, 'site_credential', index);
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

  // auth_settings - computed: false, optional: true, required: false
  private _authSettings?: AppServiceSlotAuthSettings | undefined; 
  private __authSettingsOutput = new AppServiceSlotAuthSettingsOutputReference(this as any, "auth_settings", true);
  public get authSettings() {
    return this.__authSettingsOutput;
  }
  public putAuthSettings(value: AppServiceSlotAuthSettings | undefined) {
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
  private _connectionString?: AppServiceSlotConnectionString[] | undefined; 
  public get connectionString() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('connection_string') as any;
  }
  public set connectionString(value: AppServiceSlotConnectionString[] | undefined) {
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
  private _identity?: AppServiceSlotIdentity | undefined; 
  private __identityOutput = new AppServiceSlotIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: AppServiceSlotIdentity | undefined) {
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
  private _logs?: AppServiceSlotLogs | undefined; 
  private __logsOutput = new AppServiceSlotLogsOutputReference(this as any, "logs", true);
  public get logs() {
    return this.__logsOutput;
  }
  public putLogs(value: AppServiceSlotLogs | undefined) {
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
  private _siteConfig?: AppServiceSlotSiteConfig | undefined; 
  private __siteConfigOutput = new AppServiceSlotSiteConfigOutputReference(this as any, "site_config", true);
  public get siteConfig() {
    return this.__siteConfigOutput;
  }
  public putSiteConfig(value: AppServiceSlotSiteConfig | undefined) {
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
  private _timeouts?: AppServiceSlotTimeouts | undefined; 
  private __timeoutsOutput = new AppServiceSlotTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: AppServiceSlotTimeouts | undefined) {
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
      key_vault_reference_identity_id: cdktf.stringToTerraform(this._keyVaultReferenceIdentityId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      auth_settings: appServiceSlotAuthSettingsToTerraform(this._authSettings),
      connection_string: cdktf.listMapper(appServiceSlotConnectionStringToTerraform)(this._connectionString),
      identity: appServiceSlotIdentityToTerraform(this._identity),
      logs: appServiceSlotLogsToTerraform(this._logs),
      site_config: appServiceSlotSiteConfigToTerraform(this._siteConfig),
      timeouts: appServiceSlotTimeoutsToTerraform(this._timeouts),
    };
  }
}
