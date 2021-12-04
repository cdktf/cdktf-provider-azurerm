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
  readonly appSettings?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#client_affinity_enabled FunctionApp#client_affinity_enabled}
  */
  readonly clientAffinityEnabled?: boolean | cdktf.IResolvable;
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
  readonly enableBuiltinLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#enabled FunctionApp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#https_only FunctionApp#https_only}
  */
  readonly httpsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#key_vault_reference_identity_id FunctionApp#key_vault_reference_identity_id}
  */
  readonly keyVaultReferenceIdentityId?: string;
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
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#version FunctionApp#version}
  */
  readonly version?: string;
  /**
  * auth_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#auth_settings FunctionApp#auth_settings}
  */
  readonly authSettings?: FunctionAppAuthSettings;
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
  readonly identity?: FunctionAppIdentity;
  /**
  * site_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#site_config FunctionApp#site_config}
  */
  readonly siteConfig?: FunctionAppSiteConfig;
  /**
  * source_control block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#source_control FunctionApp#source_control}
  */
  readonly sourceControl?: FunctionAppSourceControl;
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

export function functionAppAuthSettingsActiveDirectoryToTerraform(struct?: FunctionAppAuthSettingsActiveDirectoryOutputReference | FunctionAppAuthSettingsActiveDirectory): any {
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

export class FunctionAppAuthSettingsActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FunctionAppAuthSettingsActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAudiences) {
      hasAnyValues = true;
      internalValueResult.allowedAudiences = this._allowedAudiences;
    }
    if (this._clientId) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionAppAuthSettingsActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedAudiences = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedAudiences = value.allowedAudiences;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
  }

  // allowed_audiences - computed: false, optional: true, required: false
  private _allowedAudiences?: string[]; 
  public get allowedAudiences() {
    return this.getListAttribute('allowed_audiences');
  }
  public set allowedAudiences(value: string[]) {
    this._allowedAudiences = value;
  }
  public resetAllowedAudiences() {
    this._allowedAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudiencesInput() {
    return this._allowedAudiences;
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
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

export function functionAppAuthSettingsFacebookToTerraform(struct?: FunctionAppAuthSettingsFacebookOutputReference | FunctionAppAuthSettingsFacebook): any {
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

export class FunctionAppAuthSettingsFacebookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FunctionAppAuthSettingsFacebook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._appSecret) {
      hasAnyValues = true;
      internalValueResult.appSecret = this._appSecret;
    }
    if (this._oauthScopes) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionAppAuthSettingsFacebook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appId = undefined;
      this._appSecret = undefined;
      this._oauthScopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appId = value.appId;
      this._appSecret = value.appSecret;
      this._oauthScopes = value.oauthScopes;
    }
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
    return this._appId;
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
    return this._appSecret;
  }

  // oauth_scopes - computed: false, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
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

export function functionAppAuthSettingsGoogleToTerraform(struct?: FunctionAppAuthSettingsGoogleOutputReference | FunctionAppAuthSettingsGoogle): any {
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

export class FunctionAppAuthSettingsGoogleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FunctionAppAuthSettingsGoogle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._oauthScopes) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionAppAuthSettingsGoogle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._oauthScopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._oauthScopes = value.oauthScopes;
    }
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
    return this._clientId;
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
    return this._clientSecret;
  }

  // oauth_scopes - computed: false, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
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

export function functionAppAuthSettingsMicrosoftToTerraform(struct?: FunctionAppAuthSettingsMicrosoftOutputReference | FunctionAppAuthSettingsMicrosoft): any {
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

export class FunctionAppAuthSettingsMicrosoftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FunctionAppAuthSettingsMicrosoft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._oauthScopes) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionAppAuthSettingsMicrosoft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._oauthScopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._oauthScopes = value.oauthScopes;
    }
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
    return this._clientId;
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
    return this._clientSecret;
  }

  // oauth_scopes - computed: false, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
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

export function functionAppAuthSettingsTwitterToTerraform(struct?: FunctionAppAuthSettingsTwitterOutputReference | FunctionAppAuthSettingsTwitter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_key: cdktf.stringToTerraform(struct!.consumerKey),
    consumer_secret: cdktf.stringToTerraform(struct!.consumerSecret),
  }
}

export class FunctionAppAuthSettingsTwitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FunctionAppAuthSettingsTwitter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerKey) {
      hasAnyValues = true;
      internalValueResult.consumerKey = this._consumerKey;
    }
    if (this._consumerSecret) {
      hasAnyValues = true;
      internalValueResult.consumerSecret = this._consumerSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionAppAuthSettingsTwitter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumerKey = undefined;
      this._consumerSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumerKey = value.consumerKey;
      this._consumerSecret = value.consumerSecret;
    }
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
    return this._consumerKey;
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
    return this._consumerSecret;
  }
}
export interface FunctionAppAuthSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#additional_login_params FunctionApp#additional_login_params}
  */
  readonly additionalLoginParams?: { [key: string]: string } | cdktf.IResolvable;
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
  readonly enabled: boolean | cdktf.IResolvable;
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
  readonly tokenStoreEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#unauthenticated_client_action FunctionApp#unauthenticated_client_action}
  */
  readonly unauthenticatedClientAction?: string;
  /**
  * active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#active_directory FunctionApp#active_directory}
  */
  readonly activeDirectory?: FunctionAppAuthSettingsActiveDirectory;
  /**
  * facebook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#facebook FunctionApp#facebook}
  */
  readonly facebook?: FunctionAppAuthSettingsFacebook;
  /**
  * google block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#google FunctionApp#google}
  */
  readonly google?: FunctionAppAuthSettingsGoogle;
  /**
  * microsoft block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#microsoft FunctionApp#microsoft}
  */
  readonly microsoft?: FunctionAppAuthSettingsMicrosoft;
  /**
  * twitter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#twitter FunctionApp#twitter}
  */
  readonly twitter?: FunctionAppAuthSettingsTwitter;
}

export function functionAppAuthSettingsToTerraform(struct?: FunctionAppAuthSettingsOutputReference | FunctionAppAuthSettings): any {
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
    active_directory: functionAppAuthSettingsActiveDirectoryToTerraform(struct!.activeDirectory),
    facebook: functionAppAuthSettingsFacebookToTerraform(struct!.facebook),
    google: functionAppAuthSettingsGoogleToTerraform(struct!.google),
    microsoft: functionAppAuthSettingsMicrosoftToTerraform(struct!.microsoft),
    twitter: functionAppAuthSettingsTwitterToTerraform(struct!.twitter),
  }
}

export class FunctionAppAuthSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FunctionAppAuthSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalLoginParams) {
      hasAnyValues = true;
      internalValueResult.additionalLoginParams = this._additionalLoginParams;
    }
    if (this._allowedExternalRedirectUrls) {
      hasAnyValues = true;
      internalValueResult.allowedExternalRedirectUrls = this._allowedExternalRedirectUrls;
    }
    if (this._defaultProvider) {
      hasAnyValues = true;
      internalValueResult.defaultProvider = this._defaultProvider;
    }
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._issuer) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._runtimeVersion) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    if (this._tokenRefreshExtensionHours) {
      hasAnyValues = true;
      internalValueResult.tokenRefreshExtensionHours = this._tokenRefreshExtensionHours;
    }
    if (this._tokenStoreEnabled) {
      hasAnyValues = true;
      internalValueResult.tokenStoreEnabled = this._tokenStoreEnabled;
    }
    if (this._unauthenticatedClientAction) {
      hasAnyValues = true;
      internalValueResult.unauthenticatedClientAction = this._unauthenticatedClientAction;
    }
    if (this._activeDirectory?.internalValue) {
      hasAnyValues = true;
      internalValueResult.activeDirectory = this._activeDirectory?.internalValue;
    }
    if (this._facebook?.internalValue) {
      hasAnyValues = true;
      internalValueResult.facebook = this._facebook?.internalValue;
    }
    if (this._google?.internalValue) {
      hasAnyValues = true;
      internalValueResult.google = this._google?.internalValue;
    }
    if (this._microsoft?.internalValue) {
      hasAnyValues = true;
      internalValueResult.microsoft = this._microsoft?.internalValue;
    }
    if (this._twitter?.internalValue) {
      hasAnyValues = true;
      internalValueResult.twitter = this._twitter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionAppAuthSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalLoginParams = undefined;
      this._allowedExternalRedirectUrls = undefined;
      this._defaultProvider = undefined;
      this._enabled = undefined;
      this._issuer = undefined;
      this._runtimeVersion = undefined;
      this._tokenRefreshExtensionHours = undefined;
      this._tokenStoreEnabled = undefined;
      this._unauthenticatedClientAction = undefined;
      this._activeDirectory.internalValue = undefined;
      this._facebook.internalValue = undefined;
      this._google.internalValue = undefined;
      this._microsoft.internalValue = undefined;
      this._twitter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalLoginParams = value.additionalLoginParams;
      this._allowedExternalRedirectUrls = value.allowedExternalRedirectUrls;
      this._defaultProvider = value.defaultProvider;
      this._enabled = value.enabled;
      this._issuer = value.issuer;
      this._runtimeVersion = value.runtimeVersion;
      this._tokenRefreshExtensionHours = value.tokenRefreshExtensionHours;
      this._tokenStoreEnabled = value.tokenStoreEnabled;
      this._unauthenticatedClientAction = value.unauthenticatedClientAction;
      this._activeDirectory.internalValue = value.activeDirectory;
      this._facebook.internalValue = value.facebook;
      this._google.internalValue = value.google;
      this._microsoft.internalValue = value.microsoft;
      this._twitter.internalValue = value.twitter;
    }
  }

  // additional_login_params - computed: false, optional: true, required: false
  private _additionalLoginParams?: { [key: string]: string } | cdktf.IResolvable; 
  public get additionalLoginParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_login_params') as any;
  }
  public set additionalLoginParams(value: { [key: string]: string } | cdktf.IResolvable) {
    this._additionalLoginParams = value;
  }
  public resetAdditionalLoginParams() {
    this._additionalLoginParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLoginParamsInput() {
    return this._additionalLoginParams;
  }

  // allowed_external_redirect_urls - computed: false, optional: true, required: false
  private _allowedExternalRedirectUrls?: string[]; 
  public get allowedExternalRedirectUrls() {
    return this.getListAttribute('allowed_external_redirect_urls');
  }
  public set allowedExternalRedirectUrls(value: string[]) {
    this._allowedExternalRedirectUrls = value;
  }
  public resetAllowedExternalRedirectUrls() {
    this._allowedExternalRedirectUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExternalRedirectUrlsInput() {
    return this._allowedExternalRedirectUrls;
  }

  // default_provider - computed: false, optional: true, required: false
  private _defaultProvider?: string; 
  public get defaultProvider() {
    return this.getStringAttribute('default_provider');
  }
  public set defaultProvider(value: string) {
    this._defaultProvider = value;
  }
  public resetDefaultProvider() {
    this._defaultProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProviderInput() {
    return this._defaultProvider;
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
    return this._enabled;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // runtime_version - computed: false, optional: true, required: false
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }

  // token_refresh_extension_hours - computed: false, optional: true, required: false
  private _tokenRefreshExtensionHours?: number; 
  public get tokenRefreshExtensionHours() {
    return this.getNumberAttribute('token_refresh_extension_hours');
  }
  public set tokenRefreshExtensionHours(value: number) {
    this._tokenRefreshExtensionHours = value;
  }
  public resetTokenRefreshExtensionHours() {
    this._tokenRefreshExtensionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefreshExtensionHoursInput() {
    return this._tokenRefreshExtensionHours;
  }

  // token_store_enabled - computed: false, optional: true, required: false
  private _tokenStoreEnabled?: boolean | cdktf.IResolvable; 
  public get tokenStoreEnabled() {
    return this.getBooleanAttribute('token_store_enabled') as any;
  }
  public set tokenStoreEnabled(value: boolean | cdktf.IResolvable) {
    this._tokenStoreEnabled = value;
  }
  public resetTokenStoreEnabled() {
    this._tokenStoreEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenStoreEnabledInput() {
    return this._tokenStoreEnabled;
  }

  // unauthenticated_client_action - computed: false, optional: true, required: false
  private _unauthenticatedClientAction?: string; 
  public get unauthenticatedClientAction() {
    return this.getStringAttribute('unauthenticated_client_action');
  }
  public set unauthenticatedClientAction(value: string) {
    this._unauthenticatedClientAction = value;
  }
  public resetUnauthenticatedClientAction() {
    this._unauthenticatedClientAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthenticatedClientActionInput() {
    return this._unauthenticatedClientAction;
  }

  // active_directory - computed: false, optional: true, required: false
  private _activeDirectory = new FunctionAppAuthSettingsActiveDirectoryOutputReference(this as any, "active_directory", true);
  public get activeDirectory() {
    return this._activeDirectory;
  }
  public putActiveDirectory(value: FunctionAppAuthSettingsActiveDirectory) {
    this._activeDirectory.internalValue = value;
  }
  public resetActiveDirectory() {
    this._activeDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryInput() {
    return this._activeDirectory.internalValue;
  }

  // facebook - computed: false, optional: true, required: false
  private _facebook = new FunctionAppAuthSettingsFacebookOutputReference(this as any, "facebook", true);
  public get facebook() {
    return this._facebook;
  }
  public putFacebook(value: FunctionAppAuthSettingsFacebook) {
    this._facebook.internalValue = value;
  }
  public resetFacebook() {
    this._facebook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facebookInput() {
    return this._facebook.internalValue;
  }

  // google - computed: false, optional: true, required: false
  private _google = new FunctionAppAuthSettingsGoogleOutputReference(this as any, "google", true);
  public get google() {
    return this._google;
  }
  public putGoogle(value: FunctionAppAuthSettingsGoogle) {
    this._google.internalValue = value;
  }
  public resetGoogle() {
    this._google.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleInput() {
    return this._google.internalValue;
  }

  // microsoft - computed: false, optional: true, required: false
  private _microsoft = new FunctionAppAuthSettingsMicrosoftOutputReference(this as any, "microsoft", true);
  public get microsoft() {
    return this._microsoft;
  }
  public putMicrosoft(value: FunctionAppAuthSettingsMicrosoft) {
    this._microsoft.internalValue = value;
  }
  public resetMicrosoft() {
    this._microsoft.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftInput() {
    return this._microsoft.internalValue;
  }

  // twitter - computed: false, optional: true, required: false
  private _twitter = new FunctionAppAuthSettingsTwitterOutputReference(this as any, "twitter", true);
  public get twitter() {
    return this._twitter;
  }
  public putTwitter(value: FunctionAppAuthSettingsTwitter) {
    this._twitter.internalValue = value;
  }
  public resetTwitter() {
    this._twitter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twitterInput() {
    return this._twitter.internalValue;
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

export function functionAppConnectionStringToTerraform(struct?: FunctionAppConnectionString): any {
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

export function functionAppIdentityToTerraform(struct?: FunctionAppIdentityOutputReference | FunctionAppIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class FunctionAppIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FunctionAppIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionAppIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
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
    return this._type;
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

export function functionAppSiteConfigIpRestrictionHeadersToTerraform(struct?: FunctionAppSiteConfigIpRestrictionHeaders): any {
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

export function functionAppSiteConfigIpRestrictionToTerraform(struct?: FunctionAppSiteConfigIpRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function functionAppSiteConfigScmIpRestrictionHeadersToTerraform(struct?: FunctionAppSiteConfigScmIpRestrictionHeaders): any {
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

export function functionAppSiteConfigScmIpRestrictionToTerraform(struct?: FunctionAppSiteConfigScmIpRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  readonly supportCredentials?: boolean | cdktf.IResolvable;
}

export function functionAppSiteConfigCorsToTerraform(struct?: FunctionAppSiteConfigCorsOutputReference | FunctionAppSiteConfigCors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    support_credentials: cdktf.booleanToTerraform(struct!.supportCredentials),
  }
}

export class FunctionAppSiteConfigCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FunctionAppSiteConfigCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedOrigins) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._supportCredentials) {
      hasAnyValues = true;
      internalValueResult.supportCredentials = this._supportCredentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionAppSiteConfigCors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedOrigins = undefined;
      this._supportCredentials = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedOrigins = value.allowedOrigins;
      this._supportCredentials = value.supportCredentials;
    }
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
    return this._allowedOrigins;
  }

  // support_credentials - computed: false, optional: true, required: false
  private _supportCredentials?: boolean | cdktf.IResolvable; 
  public get supportCredentials() {
    return this.getBooleanAttribute('support_credentials') as any;
  }
  public set supportCredentials(value: boolean | cdktf.IResolvable) {
    this._supportCredentials = value;
  }
  public resetSupportCredentials() {
    this._supportCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportCredentialsInput() {
    return this._supportCredentials;
  }
}
export interface FunctionAppSiteConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#always_on FunctionApp#always_on}
  */
  readonly alwaysOn?: boolean | cdktf.IResolvable;
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
  readonly http2Enabled?: boolean | cdktf.IResolvable;
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
  readonly runtimeScaleMonitoringEnabled?: boolean | cdktf.IResolvable;
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
  readonly scmUseMainIpRestriction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#use_32_bit_worker_process FunctionApp#use_32_bit_worker_process}
  */
  readonly use32BitWorkerProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#vnet_route_all_enabled FunctionApp#vnet_route_all_enabled}
  */
  readonly vnetRouteAllEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#websockets_enabled FunctionApp#websockets_enabled}
  */
  readonly websocketsEnabled?: boolean | cdktf.IResolvable;
  /**
  * cors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#cors FunctionApp#cors}
  */
  readonly cors?: FunctionAppSiteConfigCors;
}

export function functionAppSiteConfigToTerraform(struct?: FunctionAppSiteConfigOutputReference | FunctionAppSiteConfig): any {
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
    vnet_route_all_enabled: cdktf.booleanToTerraform(struct!.vnetRouteAllEnabled),
    websockets_enabled: cdktf.booleanToTerraform(struct!.websocketsEnabled),
    cors: functionAppSiteConfigCorsToTerraform(struct!.cors),
  }
}

export class FunctionAppSiteConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FunctionAppSiteConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysOn) {
      hasAnyValues = true;
      internalValueResult.alwaysOn = this._alwaysOn;
    }
    if (this._appScaleLimit) {
      hasAnyValues = true;
      internalValueResult.appScaleLimit = this._appScaleLimit;
    }
    if (this._autoSwapSlotName) {
      hasAnyValues = true;
      internalValueResult.autoSwapSlotName = this._autoSwapSlotName;
    }
    if (this._dotnetFrameworkVersion) {
      hasAnyValues = true;
      internalValueResult.dotnetFrameworkVersion = this._dotnetFrameworkVersion;
    }
    if (this._elasticInstanceMinimum) {
      hasAnyValues = true;
      internalValueResult.elasticInstanceMinimum = this._elasticInstanceMinimum;
    }
    if (this._ftpsState) {
      hasAnyValues = true;
      internalValueResult.ftpsState = this._ftpsState;
    }
    if (this._healthCheckPath) {
      hasAnyValues = true;
      internalValueResult.healthCheckPath = this._healthCheckPath;
    }
    if (this._http2Enabled) {
      hasAnyValues = true;
      internalValueResult.http2Enabled = this._http2Enabled;
    }
    if (this._ipRestriction) {
      hasAnyValues = true;
      internalValueResult.ipRestriction = this._ipRestriction;
    }
    if (this._javaVersion) {
      hasAnyValues = true;
      internalValueResult.javaVersion = this._javaVersion;
    }
    if (this._linuxFxVersion) {
      hasAnyValues = true;
      internalValueResult.linuxFxVersion = this._linuxFxVersion;
    }
    if (this._minTlsVersion) {
      hasAnyValues = true;
      internalValueResult.minTlsVersion = this._minTlsVersion;
    }
    if (this._preWarmedInstanceCount) {
      hasAnyValues = true;
      internalValueResult.preWarmedInstanceCount = this._preWarmedInstanceCount;
    }
    if (this._runtimeScaleMonitoringEnabled) {
      hasAnyValues = true;
      internalValueResult.runtimeScaleMonitoringEnabled = this._runtimeScaleMonitoringEnabled;
    }
    if (this._scmIpRestriction) {
      hasAnyValues = true;
      internalValueResult.scmIpRestriction = this._scmIpRestriction;
    }
    if (this._scmType) {
      hasAnyValues = true;
      internalValueResult.scmType = this._scmType;
    }
    if (this._scmUseMainIpRestriction) {
      hasAnyValues = true;
      internalValueResult.scmUseMainIpRestriction = this._scmUseMainIpRestriction;
    }
    if (this._use32BitWorkerProcess) {
      hasAnyValues = true;
      internalValueResult.use32BitWorkerProcess = this._use32BitWorkerProcess;
    }
    if (this._vnetRouteAllEnabled) {
      hasAnyValues = true;
      internalValueResult.vnetRouteAllEnabled = this._vnetRouteAllEnabled;
    }
    if (this._websocketsEnabled) {
      hasAnyValues = true;
      internalValueResult.websocketsEnabled = this._websocketsEnabled;
    }
    if (this._cors?.internalValue) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionAppSiteConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysOn = undefined;
      this._appScaleLimit = undefined;
      this._autoSwapSlotName = undefined;
      this._dotnetFrameworkVersion = undefined;
      this._elasticInstanceMinimum = undefined;
      this._ftpsState = undefined;
      this._healthCheckPath = undefined;
      this._http2Enabled = undefined;
      this._ipRestriction = undefined;
      this._javaVersion = undefined;
      this._linuxFxVersion = undefined;
      this._minTlsVersion = undefined;
      this._preWarmedInstanceCount = undefined;
      this._runtimeScaleMonitoringEnabled = undefined;
      this._scmIpRestriction = undefined;
      this._scmType = undefined;
      this._scmUseMainIpRestriction = undefined;
      this._use32BitWorkerProcess = undefined;
      this._vnetRouteAllEnabled = undefined;
      this._websocketsEnabled = undefined;
      this._cors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysOn = value.alwaysOn;
      this._appScaleLimit = value.appScaleLimit;
      this._autoSwapSlotName = value.autoSwapSlotName;
      this._dotnetFrameworkVersion = value.dotnetFrameworkVersion;
      this._elasticInstanceMinimum = value.elasticInstanceMinimum;
      this._ftpsState = value.ftpsState;
      this._healthCheckPath = value.healthCheckPath;
      this._http2Enabled = value.http2Enabled;
      this._ipRestriction = value.ipRestriction;
      this._javaVersion = value.javaVersion;
      this._linuxFxVersion = value.linuxFxVersion;
      this._minTlsVersion = value.minTlsVersion;
      this._preWarmedInstanceCount = value.preWarmedInstanceCount;
      this._runtimeScaleMonitoringEnabled = value.runtimeScaleMonitoringEnabled;
      this._scmIpRestriction = value.scmIpRestriction;
      this._scmType = value.scmType;
      this._scmUseMainIpRestriction = value.scmUseMainIpRestriction;
      this._use32BitWorkerProcess = value.use32BitWorkerProcess;
      this._vnetRouteAllEnabled = value.vnetRouteAllEnabled;
      this._websocketsEnabled = value.websocketsEnabled;
      this._cors.internalValue = value.cors;
    }
  }

  // always_on - computed: false, optional: true, required: false
  private _alwaysOn?: boolean | cdktf.IResolvable; 
  public get alwaysOn() {
    return this.getBooleanAttribute('always_on') as any;
  }
  public set alwaysOn(value: boolean | cdktf.IResolvable) {
    this._alwaysOn = value;
  }
  public resetAlwaysOn() {
    this._alwaysOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysOnInput() {
    return this._alwaysOn;
  }

  // app_scale_limit - computed: true, optional: true, required: false
  private _appScaleLimit?: number; 
  public get appScaleLimit() {
    return this.getNumberAttribute('app_scale_limit');
  }
  public set appScaleLimit(value: number) {
    this._appScaleLimit = value;
  }
  public resetAppScaleLimit() {
    this._appScaleLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appScaleLimitInput() {
    return this._appScaleLimit;
  }

  // auto_swap_slot_name - computed: false, optional: true, required: false
  private _autoSwapSlotName?: string; 
  public get autoSwapSlotName() {
    return this.getStringAttribute('auto_swap_slot_name');
  }
  public set autoSwapSlotName(value: string) {
    this._autoSwapSlotName = value;
  }
  public resetAutoSwapSlotName() {
    this._autoSwapSlotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSwapSlotNameInput() {
    return this._autoSwapSlotName;
  }

  // dotnet_framework_version - computed: false, optional: true, required: false
  private _dotnetFrameworkVersion?: string; 
  public get dotnetFrameworkVersion() {
    return this.getStringAttribute('dotnet_framework_version');
  }
  public set dotnetFrameworkVersion(value: string) {
    this._dotnetFrameworkVersion = value;
  }
  public resetDotnetFrameworkVersion() {
    this._dotnetFrameworkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotnetFrameworkVersionInput() {
    return this._dotnetFrameworkVersion;
  }

  // elastic_instance_minimum - computed: true, optional: true, required: false
  private _elasticInstanceMinimum?: number; 
  public get elasticInstanceMinimum() {
    return this.getNumberAttribute('elastic_instance_minimum');
  }
  public set elasticInstanceMinimum(value: number) {
    this._elasticInstanceMinimum = value;
  }
  public resetElasticInstanceMinimum() {
    this._elasticInstanceMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticInstanceMinimumInput() {
    return this._elasticInstanceMinimum;
  }

  // ftps_state - computed: true, optional: true, required: false
  private _ftpsState?: string; 
  public get ftpsState() {
    return this.getStringAttribute('ftps_state');
  }
  public set ftpsState(value: string) {
    this._ftpsState = value;
  }
  public resetFtpsState() {
    this._ftpsState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpsStateInput() {
    return this._ftpsState;
  }

  // health_check_path - computed: false, optional: true, required: false
  private _healthCheckPath?: string; 
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string) {
    this._healthCheckPath = value;
  }
  public resetHealthCheckPath() {
    this._healthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath;
  }

  // http2_enabled - computed: false, optional: true, required: false
  private _http2Enabled?: boolean | cdktf.IResolvable; 
  public get http2Enabled() {
    return this.getBooleanAttribute('http2_enabled') as any;
  }
  public set http2Enabled(value: boolean | cdktf.IResolvable) {
    this._http2Enabled = value;
  }
  public resetHttp2Enabled() {
    this._http2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2EnabledInput() {
    return this._http2Enabled;
  }

  // ip_restriction - computed: true, optional: true, required: false
  private _ipRestriction?: FunctionAppSiteConfigIpRestriction[]; 
  public get ipRestriction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_restriction') as any;
  }
  public set ipRestriction(value: FunctionAppSiteConfigIpRestriction[]) {
    this._ipRestriction = value;
  }
  public resetIpRestriction() {
    this._ipRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionInput() {
    return this._ipRestriction;
  }

  // java_version - computed: false, optional: true, required: false
  private _javaVersion?: string; 
  public get javaVersion() {
    return this.getStringAttribute('java_version');
  }
  public set javaVersion(value: string) {
    this._javaVersion = value;
  }
  public resetJavaVersion() {
    this._javaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaVersionInput() {
    return this._javaVersion;
  }

  // linux_fx_version - computed: true, optional: true, required: false
  private _linuxFxVersion?: string; 
  public get linuxFxVersion() {
    return this.getStringAttribute('linux_fx_version');
  }
  public set linuxFxVersion(value: string) {
    this._linuxFxVersion = value;
  }
  public resetLinuxFxVersion() {
    this._linuxFxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxFxVersionInput() {
    return this._linuxFxVersion;
  }

  // min_tls_version - computed: true, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
  }

  // pre_warmed_instance_count - computed: true, optional: true, required: false
  private _preWarmedInstanceCount?: number; 
  public get preWarmedInstanceCount() {
    return this.getNumberAttribute('pre_warmed_instance_count');
  }
  public set preWarmedInstanceCount(value: number) {
    this._preWarmedInstanceCount = value;
  }
  public resetPreWarmedInstanceCount() {
    this._preWarmedInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preWarmedInstanceCountInput() {
    return this._preWarmedInstanceCount;
  }

  // runtime_scale_monitoring_enabled - computed: false, optional: true, required: false
  private _runtimeScaleMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get runtimeScaleMonitoringEnabled() {
    return this.getBooleanAttribute('runtime_scale_monitoring_enabled') as any;
  }
  public set runtimeScaleMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._runtimeScaleMonitoringEnabled = value;
  }
  public resetRuntimeScaleMonitoringEnabled() {
    this._runtimeScaleMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeScaleMonitoringEnabledInput() {
    return this._runtimeScaleMonitoringEnabled;
  }

  // scm_ip_restriction - computed: true, optional: true, required: false
  private _scmIpRestriction?: FunctionAppSiteConfigScmIpRestriction[]; 
  public get scmIpRestriction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scm_ip_restriction') as any;
  }
  public set scmIpRestriction(value: FunctionAppSiteConfigScmIpRestriction[]) {
    this._scmIpRestriction = value;
  }
  public resetScmIpRestriction() {
    this._scmIpRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmIpRestrictionInput() {
    return this._scmIpRestriction;
  }

  // scm_type - computed: true, optional: true, required: false
  private _scmType?: string; 
  public get scmType() {
    return this.getStringAttribute('scm_type');
  }
  public set scmType(value: string) {
    this._scmType = value;
  }
  public resetScmType() {
    this._scmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmTypeInput() {
    return this._scmType;
  }

  // scm_use_main_ip_restriction - computed: false, optional: true, required: false
  private _scmUseMainIpRestriction?: boolean | cdktf.IResolvable; 
  public get scmUseMainIpRestriction() {
    return this.getBooleanAttribute('scm_use_main_ip_restriction') as any;
  }
  public set scmUseMainIpRestriction(value: boolean | cdktf.IResolvable) {
    this._scmUseMainIpRestriction = value;
  }
  public resetScmUseMainIpRestriction() {
    this._scmUseMainIpRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmUseMainIpRestrictionInput() {
    return this._scmUseMainIpRestriction;
  }

  // use_32_bit_worker_process - computed: false, optional: true, required: false
  private _use32BitWorkerProcess?: boolean | cdktf.IResolvable; 
  public get use32BitWorkerProcess() {
    return this.getBooleanAttribute('use_32_bit_worker_process') as any;
  }
  public set use32BitWorkerProcess(value: boolean | cdktf.IResolvable) {
    this._use32BitWorkerProcess = value;
  }
  public resetUse32BitWorkerProcess() {
    this._use32BitWorkerProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get use32BitWorkerProcessInput() {
    return this._use32BitWorkerProcess;
  }

  // vnet_route_all_enabled - computed: true, optional: true, required: false
  private _vnetRouteAllEnabled?: boolean | cdktf.IResolvable; 
  public get vnetRouteAllEnabled() {
    return this.getBooleanAttribute('vnet_route_all_enabled') as any;
  }
  public set vnetRouteAllEnabled(value: boolean | cdktf.IResolvable) {
    this._vnetRouteAllEnabled = value;
  }
  public resetVnetRouteAllEnabled() {
    this._vnetRouteAllEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetRouteAllEnabledInput() {
    return this._vnetRouteAllEnabled;
  }

  // websockets_enabled - computed: false, optional: true, required: false
  private _websocketsEnabled?: boolean | cdktf.IResolvable; 
  public get websocketsEnabled() {
    return this.getBooleanAttribute('websockets_enabled') as any;
  }
  public set websocketsEnabled(value: boolean | cdktf.IResolvable) {
    this._websocketsEnabled = value;
  }
  public resetWebsocketsEnabled() {
    this._websocketsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketsEnabledInput() {
    return this._websocketsEnabled;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new FunctionAppSiteConfigCorsOutputReference(this as any, "cors", true);
  public get cors() {
    return this._cors;
  }
  public putCors(value: FunctionAppSiteConfigCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
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
  readonly manualIntegration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#repo_url FunctionApp#repo_url}
  */
  readonly repoUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#rollback_enabled FunctionApp#rollback_enabled}
  */
  readonly rollbackEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html#use_mercurial FunctionApp#use_mercurial}
  */
  readonly useMercurial?: boolean | cdktf.IResolvable;
}

export function functionAppSourceControlToTerraform(struct?: FunctionAppSourceControlOutputReference | FunctionAppSourceControl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    manual_integration: cdktf.booleanToTerraform(struct!.manualIntegration),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    rollback_enabled: cdktf.booleanToTerraform(struct!.rollbackEnabled),
    use_mercurial: cdktf.booleanToTerraform(struct!.useMercurial),
  }
}

export class FunctionAppSourceControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FunctionAppSourceControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._manualIntegration) {
      hasAnyValues = true;
      internalValueResult.manualIntegration = this._manualIntegration;
    }
    if (this._repoUrl) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._rollbackEnabled) {
      hasAnyValues = true;
      internalValueResult.rollbackEnabled = this._rollbackEnabled;
    }
    if (this._useMercurial) {
      hasAnyValues = true;
      internalValueResult.useMercurial = this._useMercurial;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionAppSourceControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._manualIntegration = undefined;
      this._repoUrl = undefined;
      this._rollbackEnabled = undefined;
      this._useMercurial = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._manualIntegration = value.manualIntegration;
      this._repoUrl = value.repoUrl;
      this._rollbackEnabled = value.rollbackEnabled;
      this._useMercurial = value.useMercurial;
    }
  }

  // branch - computed: true, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // manual_integration - computed: true, optional: true, required: false
  private _manualIntegration?: boolean | cdktf.IResolvable; 
  public get manualIntegration() {
    return this.getBooleanAttribute('manual_integration') as any;
  }
  public set manualIntegration(value: boolean | cdktf.IResolvable) {
    this._manualIntegration = value;
  }
  public resetManualIntegration() {
    this._manualIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualIntegrationInput() {
    return this._manualIntegration;
  }

  // repo_url - computed: true, optional: true, required: false
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  public resetRepoUrl() {
    this._repoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // rollback_enabled - computed: true, optional: true, required: false
  private _rollbackEnabled?: boolean | cdktf.IResolvable; 
  public get rollbackEnabled() {
    return this.getBooleanAttribute('rollback_enabled') as any;
  }
  public set rollbackEnabled(value: boolean | cdktf.IResolvable) {
    this._rollbackEnabled = value;
  }
  public resetRollbackEnabled() {
    this._rollbackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackEnabledInput() {
    return this._rollbackEnabled;
  }

  // use_mercurial - computed: true, optional: true, required: false
  private _useMercurial?: boolean | cdktf.IResolvable; 
  public get useMercurial() {
    return this.getBooleanAttribute('use_mercurial') as any;
  }
  public set useMercurial(value: boolean | cdktf.IResolvable) {
    this._useMercurial = value;
  }
  public resetUseMercurial() {
    this._useMercurial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMercurialInput() {
    return this._useMercurial;
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

export function functionAppTimeoutsToTerraform(struct?: FunctionAppTimeoutsOutputReference | FunctionAppTimeouts): any {
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

export class FunctionAppTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FunctionAppTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionAppTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/function_app.html azurerm_function_app}
*/
export class FunctionApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_function_app";

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
    this._keyVaultReferenceIdentityId = config.keyVaultReferenceIdentityId;
    this._location = config.location;
    this._name = config.name;
    this._osType = config.osType;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountAccessKey = config.storageAccountAccessKey;
    this._storageAccountName = config.storageAccountName;
    this._storageConnectionString = config.storageConnectionString;
    this._tags = config.tags;
    this._version = config.version;
    this._authSettings.internalValue = config.authSettings;
    this._connectionString = config.connectionString;
    this._identity.internalValue = config.identity;
    this._siteConfig.internalValue = config.siteConfig;
    this._sourceControl.internalValue = config.sourceControl;
    this._timeouts.internalValue = config.timeouts;
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
    return this._appServicePlanId;
  }

  // app_settings - computed: true, optional: true, required: false
  private _appSettings?: { [key: string]: string } | cdktf.IResolvable; 
  public get appSettings() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('app_settings') as any;
  }
  public set appSettings(value: { [key: string]: string } | cdktf.IResolvable) {
    this._appSettings = value;
  }
  public resetAppSettings() {
    this._appSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSettingsInput() {
    return this._appSettings;
  }

  // client_affinity_enabled - computed: true, optional: true, required: false
  private _clientAffinityEnabled?: boolean | cdktf.IResolvable; 
  public get clientAffinityEnabled() {
    return this.getBooleanAttribute('client_affinity_enabled') as any;
  }
  public set clientAffinityEnabled(value: boolean | cdktf.IResolvable) {
    this._clientAffinityEnabled = value;
  }
  public resetClientAffinityEnabled() {
    this._clientAffinityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAffinityEnabledInput() {
    return this._clientAffinityEnabled;
  }

  // client_cert_mode - computed: false, optional: true, required: false
  private _clientCertMode?: string; 
  public get clientCertMode() {
    return this.getStringAttribute('client_cert_mode');
  }
  public set clientCertMode(value: string) {
    this._clientCertMode = value;
  }
  public resetClientCertMode() {
    this._clientCertMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertModeInput() {
    return this._clientCertMode;
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
  public set dailyMemoryTimeQuota(value: number) {
    this._dailyMemoryTimeQuota = value;
  }
  public resetDailyMemoryTimeQuota() {
    this._dailyMemoryTimeQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyMemoryTimeQuotaInput() {
    return this._dailyMemoryTimeQuota;
  }

  // default_hostname - computed: true, optional: false, required: false
  public get defaultHostname() {
    return this.getStringAttribute('default_hostname');
  }

  // enable_builtin_logging - computed: false, optional: true, required: false
  private _enableBuiltinLogging?: boolean | cdktf.IResolvable; 
  public get enableBuiltinLogging() {
    return this.getBooleanAttribute('enable_builtin_logging') as any;
  }
  public set enableBuiltinLogging(value: boolean | cdktf.IResolvable) {
    this._enableBuiltinLogging = value;
  }
  public resetEnableBuiltinLogging() {
    this._enableBuiltinLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBuiltinLoggingInput() {
    return this._enableBuiltinLogging;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // https_only - computed: false, optional: true, required: false
  private _httpsOnly?: boolean | cdktf.IResolvable; 
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only') as any;
  }
  public set httpsOnly(value: boolean | cdktf.IResolvable) {
    this._httpsOnly = value;
  }
  public resetHttpsOnly() {
    this._httpsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsOnlyInput() {
    return this._httpsOnly;
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
    return this._keyVaultReferenceIdentityId;
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
    return this._location;
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
    return this._name;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
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
    return this._resourceGroupName;
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
    return this._storageAccountAccessKey;
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
    return this._storageAccountName;
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
    return this._storageConnectionString;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // auth_settings - computed: false, optional: true, required: false
  private _authSettings = new FunctionAppAuthSettingsOutputReference(this as any, "auth_settings", true);
  public get authSettings() {
    return this._authSettings;
  }
  public putAuthSettings(value: FunctionAppAuthSettings) {
    this._authSettings.internalValue = value;
  }
  public resetAuthSettings() {
    this._authSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSettingsInput() {
    return this._authSettings.internalValue;
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: FunctionAppConnectionString[]; 
  public get connectionString() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('connection_string') as any;
  }
  public set connectionString(value: FunctionAppConnectionString[]) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new FunctionAppIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: FunctionAppIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // site_config - computed: false, optional: true, required: false
  private _siteConfig = new FunctionAppSiteConfigOutputReference(this as any, "site_config", true);
  public get siteConfig() {
    return this._siteConfig;
  }
  public putSiteConfig(value: FunctionAppSiteConfig) {
    this._siteConfig.internalValue = value;
  }
  public resetSiteConfig() {
    this._siteConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteConfigInput() {
    return this._siteConfig.internalValue;
  }

  // source_control - computed: false, optional: true, required: false
  private _sourceControl = new FunctionAppSourceControlOutputReference(this as any, "source_control", true);
  public get sourceControl() {
    return this._sourceControl;
  }
  public putSourceControl(value: FunctionAppSourceControl) {
    this._sourceControl.internalValue = value;
  }
  public resetSourceControl() {
    this._sourceControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceControlInput() {
    return this._sourceControl.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FunctionAppTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FunctionAppTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      key_vault_reference_identity_id: cdktf.stringToTerraform(this._keyVaultReferenceIdentityId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      os_type: cdktf.stringToTerraform(this._osType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_access_key: cdktf.stringToTerraform(this._storageAccountAccessKey),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      storage_connection_string: cdktf.stringToTerraform(this._storageConnectionString),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      auth_settings: functionAppAuthSettingsToTerraform(this._authSettings.internalValue),
      connection_string: cdktf.listMapper(functionAppConnectionStringToTerraform)(this._connectionString),
      identity: functionAppIdentityToTerraform(this._identity.internalValue),
      site_config: functionAppSiteConfigToTerraform(this._siteConfig.internalValue),
      source_control: functionAppSourceControlToTerraform(this._sourceControl.internalValue),
      timeouts: functionAppTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
