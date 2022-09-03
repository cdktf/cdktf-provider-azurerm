// https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WindowsWebAppSlotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#app_service_id WindowsWebAppSlot#app_service_id}
  */
  readonly appServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#app_settings WindowsWebAppSlot#app_settings}
  */
  readonly appSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#client_affinity_enabled WindowsWebAppSlot#client_affinity_enabled}
  */
  readonly clientAffinityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#client_certificate_enabled WindowsWebAppSlot#client_certificate_enabled}
  */
  readonly clientCertificateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#client_certificate_mode WindowsWebAppSlot#client_certificate_mode}
  */
  readonly clientCertificateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#enabled WindowsWebAppSlot#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#https_only WindowsWebAppSlot#https_only}
  */
  readonly httpsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#id WindowsWebAppSlot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#key_vault_reference_identity_id WindowsWebAppSlot#key_vault_reference_identity_id}
  */
  readonly keyVaultReferenceIdentityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#name WindowsWebAppSlot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#tags WindowsWebAppSlot#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#virtual_network_subnet_id WindowsWebAppSlot#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
  /**
  * The local path and filename of the Zip packaged application to deploy to this Windows Web App. **Note:** Using this value requires `WEBSITE_RUN_FROM_PACKAGE=1` on the App in `app_settings`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#zip_deploy_file WindowsWebAppSlot#zip_deploy_file}
  */
  readonly zipDeployFile?: string;
  /**
  * auth_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#auth_settings WindowsWebAppSlot#auth_settings}
  */
  readonly authSettings?: WindowsWebAppSlotAuthSettings;
  /**
  * backup block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#backup WindowsWebAppSlot#backup}
  */
  readonly backup?: WindowsWebAppSlotBackup;
  /**
  * connection_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#connection_string WindowsWebAppSlot#connection_string}
  */
  readonly connectionString?: WindowsWebAppSlotConnectionString[] | cdktf.IResolvable;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#identity WindowsWebAppSlot#identity}
  */
  readonly identity?: WindowsWebAppSlotIdentity;
  /**
  * logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#logs WindowsWebAppSlot#logs}
  */
  readonly logs?: WindowsWebAppSlotLogs;
  /**
  * site_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#site_config WindowsWebAppSlot#site_config}
  */
  readonly siteConfig: WindowsWebAppSlotSiteConfig;
  /**
  * storage_account block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#storage_account WindowsWebAppSlot#storage_account}
  */
  readonly storageAccount?: WindowsWebAppSlotStorageAccount[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#timeouts WindowsWebAppSlot#timeouts}
  */
  readonly timeouts?: WindowsWebAppSlotTimeouts;
}
export interface WindowsWebAppSlotSiteCredential {
}

export function windowsWebAppSlotSiteCredentialToTerraform(struct?: WindowsWebAppSlotSiteCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class WindowsWebAppSlotSiteCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsWebAppSlotSiteCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }
}

export class WindowsWebAppSlotSiteCredentialList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsWebAppSlotSiteCredentialOutputReference {
    return new WindowsWebAppSlotSiteCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsWebAppSlotAuthSettingsActiveDirectory {
  /**
  * Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#allowed_audiences WindowsWebAppSlot#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * The ID of the Client to use to authenticate with Azure Active Directory.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#client_id WindowsWebAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#client_secret WindowsWebAppSlot#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#client_secret_setting_name WindowsWebAppSlot#client_secret_setting_name}
  */
  readonly clientSecretSettingName?: string;
}

export function windowsWebAppSlotAuthSettingsActiveDirectoryToTerraform(struct?: WindowsWebAppSlotAuthSettingsActiveDirectoryOutputReference | WindowsWebAppSlotAuthSettingsActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAudiences),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    client_secret_setting_name: cdktf.stringToTerraform(struct!.clientSecretSettingName),
  }
}

export class WindowsWebAppSlotAuthSettingsActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotAuthSettingsActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAudiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAudiences = this._allowedAudiences;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretSettingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSettingName = this._clientSecretSettingName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotAuthSettingsActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedAudiences = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._clientSecretSettingName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedAudiences = value.allowedAudiences;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._clientSecretSettingName = value.clientSecretSettingName;
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

  // client_secret_setting_name - computed: false, optional: true, required: false
  private _clientSecretSettingName?: string; 
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }
  public set clientSecretSettingName(value: string) {
    this._clientSecretSettingName = value;
  }
  public resetClientSecretSettingName() {
    this._clientSecretSettingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSettingNameInput() {
    return this._clientSecretSettingName;
  }
}
export interface WindowsWebAppSlotAuthSettingsFacebook {
  /**
  * The App ID of the Facebook app used for login.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#app_id WindowsWebAppSlot#app_id}
  */
  readonly appId: string;
  /**
  * The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#app_secret WindowsWebAppSlot#app_secret}
  */
  readonly appSecret?: string;
  /**
  * The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#app_secret_setting_name WindowsWebAppSlot#app_secret_setting_name}
  */
  readonly appSecretSettingName?: string;
  /**
  * Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#oauth_scopes WindowsWebAppSlot#oauth_scopes}
  */
  readonly oauthScopes?: string[];
}

export function windowsWebAppSlotAuthSettingsFacebookToTerraform(struct?: WindowsWebAppSlotAuthSettingsFacebookOutputReference | WindowsWebAppSlotAuthSettingsFacebook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_secret: cdktf.stringToTerraform(struct!.appSecret),
    app_secret_setting_name: cdktf.stringToTerraform(struct!.appSecretSettingName),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
  }
}

export class WindowsWebAppSlotAuthSettingsFacebookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotAuthSettingsFacebook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._appSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSecret = this._appSecret;
    }
    if (this._appSecretSettingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSecretSettingName = this._appSecretSettingName;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotAuthSettingsFacebook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appId = undefined;
      this._appSecret = undefined;
      this._appSecretSettingName = undefined;
      this._oauthScopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appId = value.appId;
      this._appSecret = value.appSecret;
      this._appSecretSettingName = value.appSecretSettingName;
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

  // app_secret - computed: false, optional: true, required: false
  private _appSecret?: string; 
  public get appSecret() {
    return this.getStringAttribute('app_secret');
  }
  public set appSecret(value: string) {
    this._appSecret = value;
  }
  public resetAppSecret() {
    this._appSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecretInput() {
    return this._appSecret;
  }

  // app_secret_setting_name - computed: false, optional: true, required: false
  private _appSecretSettingName?: string; 
  public get appSecretSettingName() {
    return this.getStringAttribute('app_secret_setting_name');
  }
  public set appSecretSettingName(value: string) {
    this._appSecretSettingName = value;
  }
  public resetAppSecretSettingName() {
    this._appSecretSettingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecretSettingNameInput() {
    return this._appSecretSettingName;
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
export interface WindowsWebAppSlotAuthSettingsGithub {
  /**
  * The ID of the GitHub app used for login.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#client_id WindowsWebAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#client_secret WindowsWebAppSlot#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#client_secret_setting_name WindowsWebAppSlot#client_secret_setting_name}
  */
  readonly clientSecretSettingName?: string;
  /**
  * Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#oauth_scopes WindowsWebAppSlot#oauth_scopes}
  */
  readonly oauthScopes?: string[];
}

export function windowsWebAppSlotAuthSettingsGithubToTerraform(struct?: WindowsWebAppSlotAuthSettingsGithubOutputReference | WindowsWebAppSlotAuthSettingsGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    client_secret_setting_name: cdktf.stringToTerraform(struct!.clientSecretSettingName),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
  }
}

export class WindowsWebAppSlotAuthSettingsGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotAuthSettingsGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretSettingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSettingName = this._clientSecretSettingName;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotAuthSettingsGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._clientSecretSettingName = undefined;
      this._oauthScopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._clientSecretSettingName = value.clientSecretSettingName;
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

  // client_secret_setting_name - computed: false, optional: true, required: false
  private _clientSecretSettingName?: string; 
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }
  public set clientSecretSettingName(value: string) {
    this._clientSecretSettingName = value;
  }
  public resetClientSecretSettingName() {
    this._clientSecretSettingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSettingNameInput() {
    return this._clientSecretSettingName;
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
export interface WindowsWebAppSlotAuthSettingsGoogle {
  /**
  * The OpenID Connect Client ID for the Google web application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#client_id WindowsWebAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#client_secret WindowsWebAppSlot#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#client_secret_setting_name WindowsWebAppSlot#client_secret_setting_name}
  */
  readonly clientSecretSettingName?: string;
  /**
  * Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#oauth_scopes WindowsWebAppSlot#oauth_scopes}
  */
  readonly oauthScopes?: string[];
}

export function windowsWebAppSlotAuthSettingsGoogleToTerraform(struct?: WindowsWebAppSlotAuthSettingsGoogleOutputReference | WindowsWebAppSlotAuthSettingsGoogle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    client_secret_setting_name: cdktf.stringToTerraform(struct!.clientSecretSettingName),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
  }
}

export class WindowsWebAppSlotAuthSettingsGoogleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotAuthSettingsGoogle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretSettingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSettingName = this._clientSecretSettingName;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotAuthSettingsGoogle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._clientSecretSettingName = undefined;
      this._oauthScopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._clientSecretSettingName = value.clientSecretSettingName;
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

  // client_secret_setting_name - computed: false, optional: true, required: false
  private _clientSecretSettingName?: string; 
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }
  public set clientSecretSettingName(value: string) {
    this._clientSecretSettingName = value;
  }
  public resetClientSecretSettingName() {
    this._clientSecretSettingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSettingNameInput() {
    return this._clientSecretSettingName;
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
export interface WindowsWebAppSlotAuthSettingsMicrosoft {
  /**
  * The OAuth 2.0 client ID that was created for the app used for authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#client_id WindowsWebAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#client_secret WindowsWebAppSlot#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#client_secret_setting_name WindowsWebAppSlot#client_secret_setting_name}
  */
  readonly clientSecretSettingName?: string;
  /**
  * The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#oauth_scopes WindowsWebAppSlot#oauth_scopes}
  */
  readonly oauthScopes?: string[];
}

export function windowsWebAppSlotAuthSettingsMicrosoftToTerraform(struct?: WindowsWebAppSlotAuthSettingsMicrosoftOutputReference | WindowsWebAppSlotAuthSettingsMicrosoft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    client_secret_setting_name: cdktf.stringToTerraform(struct!.clientSecretSettingName),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
  }
}

export class WindowsWebAppSlotAuthSettingsMicrosoftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotAuthSettingsMicrosoft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretSettingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSettingName = this._clientSecretSettingName;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotAuthSettingsMicrosoft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._clientSecretSettingName = undefined;
      this._oauthScopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._clientSecretSettingName = value.clientSecretSettingName;
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

  // client_secret_setting_name - computed: false, optional: true, required: false
  private _clientSecretSettingName?: string; 
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }
  public set clientSecretSettingName(value: string) {
    this._clientSecretSettingName = value;
  }
  public resetClientSecretSettingName() {
    this._clientSecretSettingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSettingNameInput() {
    return this._clientSecretSettingName;
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
export interface WindowsWebAppSlotAuthSettingsTwitter {
  /**
  * The OAuth 1.0a consumer key of the Twitter application used for sign-in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#consumer_key WindowsWebAppSlot#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#consumer_secret WindowsWebAppSlot#consumer_secret}
  */
  readonly consumerSecret?: string;
  /**
  * The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#consumer_secret_setting_name WindowsWebAppSlot#consumer_secret_setting_name}
  */
  readonly consumerSecretSettingName?: string;
}

export function windowsWebAppSlotAuthSettingsTwitterToTerraform(struct?: WindowsWebAppSlotAuthSettingsTwitterOutputReference | WindowsWebAppSlotAuthSettingsTwitter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_key: cdktf.stringToTerraform(struct!.consumerKey),
    consumer_secret: cdktf.stringToTerraform(struct!.consumerSecret),
    consumer_secret_setting_name: cdktf.stringToTerraform(struct!.consumerSecretSettingName),
  }
}

export class WindowsWebAppSlotAuthSettingsTwitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotAuthSettingsTwitter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerKey = this._consumerKey;
    }
    if (this._consumerSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerSecret = this._consumerSecret;
    }
    if (this._consumerSecretSettingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerSecretSettingName = this._consumerSecretSettingName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotAuthSettingsTwitter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumerKey = undefined;
      this._consumerSecret = undefined;
      this._consumerSecretSettingName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumerKey = value.consumerKey;
      this._consumerSecret = value.consumerSecret;
      this._consumerSecretSettingName = value.consumerSecretSettingName;
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

  // consumer_secret - computed: false, optional: true, required: false
  private _consumerSecret?: string; 
  public get consumerSecret() {
    return this.getStringAttribute('consumer_secret');
  }
  public set consumerSecret(value: string) {
    this._consumerSecret = value;
  }
  public resetConsumerSecret() {
    this._consumerSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerSecretInput() {
    return this._consumerSecret;
  }

  // consumer_secret_setting_name - computed: false, optional: true, required: false
  private _consumerSecretSettingName?: string; 
  public get consumerSecretSettingName() {
    return this.getStringAttribute('consumer_secret_setting_name');
  }
  public set consumerSecretSettingName(value: string) {
    this._consumerSecretSettingName = value;
  }
  public resetConsumerSecretSettingName() {
    this._consumerSecretSettingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerSecretSettingNameInput() {
    return this._consumerSecretSettingName;
  }
}
export interface WindowsWebAppSlotAuthSettings {
  /**
  * Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#additional_login_parameters WindowsWebAppSlot#additional_login_parameters}
  */
  readonly additionalLoginParameters?: { [key: string]: string };
  /**
  * Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#allowed_external_redirect_urls WindowsWebAppSlot#allowed_external_redirect_urls}
  */
  readonly allowedExternalRedirectUrls?: string[];
  /**
  * The default authentication provider to use when multiple providers are configured. Possible values include: `AzureActiveDirectory`, `Facebook`, `Google`, `MicrosoftAccount`, `Twitter`, `Github`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#default_provider WindowsWebAppSlot#default_provider}
  */
  readonly defaultProvider?: string;
  /**
  * Should the Authentication / Authorization feature be enabled?
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#enabled WindowsWebAppSlot#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The OpenID Connect Issuer URI that represents the entity which issues access tokens.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#issuer WindowsWebAppSlot#issuer}
  */
  readonly issuer?: string;
  /**
  * The RuntimeVersion of the Authentication / Authorization feature in use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#runtime_version WindowsWebAppSlot#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * The number of hours after session token expiration that a session token can be used to call the token refresh API. Defaults to `72` hours.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#token_refresh_extension_hours WindowsWebAppSlot#token_refresh_extension_hours}
  */
  readonly tokenRefreshExtensionHours?: number;
  /**
  * Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#token_store_enabled WindowsWebAppSlot#token_store_enabled}
  */
  readonly tokenStoreEnabled?: boolean | cdktf.IResolvable;
  /**
  * The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#unauthenticated_client_action WindowsWebAppSlot#unauthenticated_client_action}
  */
  readonly unauthenticatedClientAction?: string;
  /**
  * active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#active_directory WindowsWebAppSlot#active_directory}
  */
  readonly activeDirectory?: WindowsWebAppSlotAuthSettingsActiveDirectory;
  /**
  * facebook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#facebook WindowsWebAppSlot#facebook}
  */
  readonly facebook?: WindowsWebAppSlotAuthSettingsFacebook;
  /**
  * github block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#github WindowsWebAppSlot#github}
  */
  readonly github?: WindowsWebAppSlotAuthSettingsGithub;
  /**
  * google block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#google WindowsWebAppSlot#google}
  */
  readonly google?: WindowsWebAppSlotAuthSettingsGoogle;
  /**
  * microsoft block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#microsoft WindowsWebAppSlot#microsoft}
  */
  readonly microsoft?: WindowsWebAppSlotAuthSettingsMicrosoft;
  /**
  * twitter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#twitter WindowsWebAppSlot#twitter}
  */
  readonly twitter?: WindowsWebAppSlotAuthSettingsTwitter;
}

export function windowsWebAppSlotAuthSettingsToTerraform(struct?: WindowsWebAppSlotAuthSettingsOutputReference | WindowsWebAppSlotAuthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_login_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalLoginParameters),
    allowed_external_redirect_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedExternalRedirectUrls),
    default_provider: cdktf.stringToTerraform(struct!.defaultProvider),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
    token_refresh_extension_hours: cdktf.numberToTerraform(struct!.tokenRefreshExtensionHours),
    token_store_enabled: cdktf.booleanToTerraform(struct!.tokenStoreEnabled),
    unauthenticated_client_action: cdktf.stringToTerraform(struct!.unauthenticatedClientAction),
    active_directory: windowsWebAppSlotAuthSettingsActiveDirectoryToTerraform(struct!.activeDirectory),
    facebook: windowsWebAppSlotAuthSettingsFacebookToTerraform(struct!.facebook),
    github: windowsWebAppSlotAuthSettingsGithubToTerraform(struct!.github),
    google: windowsWebAppSlotAuthSettingsGoogleToTerraform(struct!.google),
    microsoft: windowsWebAppSlotAuthSettingsMicrosoftToTerraform(struct!.microsoft),
    twitter: windowsWebAppSlotAuthSettingsTwitterToTerraform(struct!.twitter),
  }
}

export class WindowsWebAppSlotAuthSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotAuthSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalLoginParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLoginParameters = this._additionalLoginParameters;
    }
    if (this._allowedExternalRedirectUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExternalRedirectUrls = this._allowedExternalRedirectUrls;
    }
    if (this._defaultProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultProvider = this._defaultProvider;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._runtimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    if (this._tokenRefreshExtensionHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRefreshExtensionHours = this._tokenRefreshExtensionHours;
    }
    if (this._tokenStoreEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenStoreEnabled = this._tokenStoreEnabled;
    }
    if (this._unauthenticatedClientAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthenticatedClientAction = this._unauthenticatedClientAction;
    }
    if (this._activeDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectory = this._activeDirectory?.internalValue;
    }
    if (this._facebook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.facebook = this._facebook?.internalValue;
    }
    if (this._github?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.github = this._github?.internalValue;
    }
    if (this._google?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.google = this._google?.internalValue;
    }
    if (this._microsoft?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoft = this._microsoft?.internalValue;
    }
    if (this._twitter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.twitter = this._twitter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotAuthSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalLoginParameters = undefined;
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
      this._github.internalValue = undefined;
      this._google.internalValue = undefined;
      this._microsoft.internalValue = undefined;
      this._twitter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalLoginParameters = value.additionalLoginParameters;
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
      this._github.internalValue = value.github;
      this._google.internalValue = value.google;
      this._microsoft.internalValue = value.microsoft;
      this._twitter.internalValue = value.twitter;
    }
  }

  // additional_login_parameters - computed: false, optional: true, required: false
  private _additionalLoginParameters?: { [key: string]: string }; 
  public get additionalLoginParameters() {
    return this.getStringMapAttribute('additional_login_parameters');
  }
  public set additionalLoginParameters(value: { [key: string]: string }) {
    this._additionalLoginParameters = value;
  }
  public resetAdditionalLoginParameters() {
    this._additionalLoginParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLoginParametersInput() {
    return this._additionalLoginParameters;
  }

  // allowed_external_redirect_urls - computed: true, optional: true, required: false
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

  // default_provider - computed: true, optional: true, required: false
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
    return this.getBooleanAttribute('enabled');
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

  // runtime_version - computed: true, optional: true, required: false
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
    return this.getBooleanAttribute('token_store_enabled');
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

  // unauthenticated_client_action - computed: true, optional: true, required: false
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
  private _activeDirectory = new WindowsWebAppSlotAuthSettingsActiveDirectoryOutputReference(this, "active_directory");
  public get activeDirectory() {
    return this._activeDirectory;
  }
  public putActiveDirectory(value: WindowsWebAppSlotAuthSettingsActiveDirectory) {
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
  private _facebook = new WindowsWebAppSlotAuthSettingsFacebookOutputReference(this, "facebook");
  public get facebook() {
    return this._facebook;
  }
  public putFacebook(value: WindowsWebAppSlotAuthSettingsFacebook) {
    this._facebook.internalValue = value;
  }
  public resetFacebook() {
    this._facebook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facebookInput() {
    return this._facebook.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new WindowsWebAppSlotAuthSettingsGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: WindowsWebAppSlotAuthSettingsGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // google - computed: false, optional: true, required: false
  private _google = new WindowsWebAppSlotAuthSettingsGoogleOutputReference(this, "google");
  public get google() {
    return this._google;
  }
  public putGoogle(value: WindowsWebAppSlotAuthSettingsGoogle) {
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
  private _microsoft = new WindowsWebAppSlotAuthSettingsMicrosoftOutputReference(this, "microsoft");
  public get microsoft() {
    return this._microsoft;
  }
  public putMicrosoft(value: WindowsWebAppSlotAuthSettingsMicrosoft) {
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
  private _twitter = new WindowsWebAppSlotAuthSettingsTwitterOutputReference(this, "twitter");
  public get twitter() {
    return this._twitter;
  }
  public putTwitter(value: WindowsWebAppSlotAuthSettingsTwitter) {
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
export interface WindowsWebAppSlotBackupSchedule {
  /**
  * How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#frequency_interval WindowsWebAppSlot#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#frequency_unit WindowsWebAppSlot#frequency_unit}
  */
  readonly frequencyUnit: string;
  /**
  * Should the service keep at least one backup, regardless of age of backup. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#keep_at_least_one_backup WindowsWebAppSlot#keep_at_least_one_backup}
  */
  readonly keepAtLeastOneBackup?: boolean | cdktf.IResolvable;
  /**
  * After how many days backups should be deleted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#retention_period_days WindowsWebAppSlot#retention_period_days}
  */
  readonly retentionPeriodDays?: number;
  /**
  * When the schedule should start working in RFC-3339 format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#start_time WindowsWebAppSlot#start_time}
  */
  readonly startTime?: string;
}

export function windowsWebAppSlotBackupScheduleToTerraform(struct?: WindowsWebAppSlotBackupScheduleOutputReference | WindowsWebAppSlotBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency_interval: cdktf.numberToTerraform(struct!.frequencyInterval),
    frequency_unit: cdktf.stringToTerraform(struct!.frequencyUnit),
    keep_at_least_one_backup: cdktf.booleanToTerraform(struct!.keepAtLeastOneBackup),
    retention_period_days: cdktf.numberToTerraform(struct!.retentionPeriodDays),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export class WindowsWebAppSlotBackupScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequencyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyInterval = this._frequencyInterval;
    }
    if (this._frequencyUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyUnit = this._frequencyUnit;
    }
    if (this._keepAtLeastOneBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAtLeastOneBackup = this._keepAtLeastOneBackup;
    }
    if (this._retentionPeriodDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriodDays = this._retentionPeriodDays;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotBackupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequencyInterval = undefined;
      this._frequencyUnit = undefined;
      this._keepAtLeastOneBackup = undefined;
      this._retentionPeriodDays = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequencyInterval = value.frequencyInterval;
      this._frequencyUnit = value.frequencyUnit;
      this._keepAtLeastOneBackup = value.keepAtLeastOneBackup;
      this._retentionPeriodDays = value.retentionPeriodDays;
      this._startTime = value.startTime;
    }
  }

  // frequency_interval - computed: false, optional: false, required: true
  private _frequencyInterval?: number; 
  public get frequencyInterval() {
    return this.getNumberAttribute('frequency_interval');
  }
  public set frequencyInterval(value: number) {
    this._frequencyInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyIntervalInput() {
    return this._frequencyInterval;
  }

  // frequency_unit - computed: false, optional: false, required: true
  private _frequencyUnit?: string; 
  public get frequencyUnit() {
    return this.getStringAttribute('frequency_unit');
  }
  public set frequencyUnit(value: string) {
    this._frequencyUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyUnitInput() {
    return this._frequencyUnit;
  }

  // keep_at_least_one_backup - computed: false, optional: true, required: false
  private _keepAtLeastOneBackup?: boolean | cdktf.IResolvable; 
  public get keepAtLeastOneBackup() {
    return this.getBooleanAttribute('keep_at_least_one_backup');
  }
  public set keepAtLeastOneBackup(value: boolean | cdktf.IResolvable) {
    this._keepAtLeastOneBackup = value;
  }
  public resetKeepAtLeastOneBackup() {
    this._keepAtLeastOneBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAtLeastOneBackupInput() {
    return this._keepAtLeastOneBackup;
  }

  // last_execution_time - computed: true, optional: false, required: false
  public get lastExecutionTime() {
    return this.getStringAttribute('last_execution_time');
  }

  // retention_period_days - computed: false, optional: true, required: false
  private _retentionPeriodDays?: number; 
  public get retentionPeriodDays() {
    return this.getNumberAttribute('retention_period_days');
  }
  public set retentionPeriodDays(value: number) {
    this._retentionPeriodDays = value;
  }
  public resetRetentionPeriodDays() {
    this._retentionPeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodDaysInput() {
    return this._retentionPeriodDays;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface WindowsWebAppSlotBackup {
  /**
  * Should this backup job be enabled?
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#enabled WindowsWebAppSlot#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name which should be used for this Backup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#name WindowsWebAppSlot#name}
  */
  readonly name: string;
  /**
  * The SAS URL to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#storage_account_url WindowsWebAppSlot#storage_account_url}
  */
  readonly storageAccountUrl: string;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#schedule WindowsWebAppSlot#schedule}
  */
  readonly schedule: WindowsWebAppSlotBackupSchedule;
}

export function windowsWebAppSlotBackupToTerraform(struct?: WindowsWebAppSlotBackupOutputReference | WindowsWebAppSlotBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    storage_account_url: cdktf.stringToTerraform(struct!.storageAccountUrl),
    schedule: windowsWebAppSlotBackupScheduleToTerraform(struct!.schedule),
  }
}

export class WindowsWebAppSlotBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storageAccountUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountUrl = this._storageAccountUrl;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._name = undefined;
      this._storageAccountUrl = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._name = value.name;
      this._storageAccountUrl = value.storageAccountUrl;
      this._schedule.internalValue = value.schedule;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // storage_account_url - computed: false, optional: false, required: true
  private _storageAccountUrl?: string; 
  public get storageAccountUrl() {
    return this.getStringAttribute('storage_account_url');
  }
  public set storageAccountUrl(value: string) {
    this._storageAccountUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountUrlInput() {
    return this._storageAccountUrl;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new WindowsWebAppSlotBackupScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: WindowsWebAppSlotBackupSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface WindowsWebAppSlotConnectionString {
  /**
  * The name which should be used for this Connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#name WindowsWebAppSlot#name}
  */
  readonly name: string;
  /**
  * Type of database. Possible values include: `MySQL`, `SQLServer`, `SQLAzure`, `Custom`, `NotificationHub`, `ServiceBus`, `EventHub`, `APIHub`, `DocDb`, `RedisCache`, and `PostgreSQL`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#type WindowsWebAppSlot#type}
  */
  readonly type: string;
  /**
  * The connection string value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#value WindowsWebAppSlot#value}
  */
  readonly value: string;
}

export function windowsWebAppSlotConnectionStringToTerraform(struct?: WindowsWebAppSlotConnectionString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class WindowsWebAppSlotConnectionStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsWebAppSlotConnectionString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotConnectionString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class WindowsWebAppSlotConnectionStringList extends cdktf.ComplexList {
  public internalValue? : WindowsWebAppSlotConnectionString[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsWebAppSlotConnectionStringOutputReference {
    return new WindowsWebAppSlotConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsWebAppSlotIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#identity_ids WindowsWebAppSlot#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#type WindowsWebAppSlot#type}
  */
  readonly type: string;
}

export function windowsWebAppSlotIdentityToTerraform(struct?: WindowsWebAppSlotIdentityOutputReference | WindowsWebAppSlotIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class WindowsWebAppSlotIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotIdentity | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
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

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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
export interface WindowsWebAppSlotLogsApplicationLogsAzureBlobStorage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#level WindowsWebAppSlot#level}
  */
  readonly level: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#retention_in_days WindowsWebAppSlot#retention_in_days}
  */
  readonly retentionInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#sas_url WindowsWebAppSlot#sas_url}
  */
  readonly sasUrl: string;
}

export function windowsWebAppSlotLogsApplicationLogsAzureBlobStorageToTerraform(struct?: WindowsWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference | WindowsWebAppSlotLogsApplicationLogsAzureBlobStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    sas_url: cdktf.stringToTerraform(struct!.sasUrl),
  }
}

export class WindowsWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotLogsApplicationLogsAzureBlobStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._retentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInDays = this._retentionInDays;
    }
    if (this._sasUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasUrl = this._sasUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotLogsApplicationLogsAzureBlobStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._level = undefined;
      this._retentionInDays = undefined;
      this._sasUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._level = value.level;
      this._retentionInDays = value.retentionInDays;
      this._sasUrl = value.sasUrl;
    }
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
    return this._level;
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
    return this._retentionInDays;
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
    return this._sasUrl;
  }
}
export interface WindowsWebAppSlotLogsApplicationLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#file_system_level WindowsWebAppSlot#file_system_level}
  */
  readonly fileSystemLevel: string;
  /**
  * azure_blob_storage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#azure_blob_storage WindowsWebAppSlot#azure_blob_storage}
  */
  readonly azureBlobStorage?: WindowsWebAppSlotLogsApplicationLogsAzureBlobStorage;
}

export function windowsWebAppSlotLogsApplicationLogsToTerraform(struct?: WindowsWebAppSlotLogsApplicationLogsOutputReference | WindowsWebAppSlotLogsApplicationLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_level: cdktf.stringToTerraform(struct!.fileSystemLevel),
    azure_blob_storage: windowsWebAppSlotLogsApplicationLogsAzureBlobStorageToTerraform(struct!.azureBlobStorage),
  }
}

export class WindowsWebAppSlotLogsApplicationLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotLogsApplicationLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemLevel = this._fileSystemLevel;
    }
    if (this._azureBlobStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobStorage = this._azureBlobStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotLogsApplicationLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemLevel = undefined;
      this._azureBlobStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemLevel = value.fileSystemLevel;
      this._azureBlobStorage.internalValue = value.azureBlobStorage;
    }
  }

  // file_system_level - computed: false, optional: false, required: true
  private _fileSystemLevel?: string; 
  public get fileSystemLevel() {
    return this.getStringAttribute('file_system_level');
  }
  public set fileSystemLevel(value: string) {
    this._fileSystemLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemLevelInput() {
    return this._fileSystemLevel;
  }

  // azure_blob_storage - computed: false, optional: true, required: false
  private _azureBlobStorage = new WindowsWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference(this, "azure_blob_storage");
  public get azureBlobStorage() {
    return this._azureBlobStorage;
  }
  public putAzureBlobStorage(value: WindowsWebAppSlotLogsApplicationLogsAzureBlobStorage) {
    this._azureBlobStorage.internalValue = value;
  }
  public resetAzureBlobStorage() {
    this._azureBlobStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageInput() {
    return this._azureBlobStorage.internalValue;
  }
}
export interface WindowsWebAppSlotLogsHttpLogsAzureBlobStorage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#retention_in_days WindowsWebAppSlot#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#sas_url WindowsWebAppSlot#sas_url}
  */
  readonly sasUrl: string;
}

export function windowsWebAppSlotLogsHttpLogsAzureBlobStorageToTerraform(struct?: WindowsWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference | WindowsWebAppSlotLogsHttpLogsAzureBlobStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    sas_url: cdktf.stringToTerraform(struct!.sasUrl),
  }
}

export class WindowsWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotLogsHttpLogsAzureBlobStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInDays = this._retentionInDays;
    }
    if (this._sasUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasUrl = this._sasUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotLogsHttpLogsAzureBlobStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionInDays = undefined;
      this._sasUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionInDays = value.retentionInDays;
      this._sasUrl = value.sasUrl;
    }
  }

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays;
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
    return this._sasUrl;
  }
}
export interface WindowsWebAppSlotLogsHttpLogsFileSystem {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#retention_in_days WindowsWebAppSlot#retention_in_days}
  */
  readonly retentionInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#retention_in_mb WindowsWebAppSlot#retention_in_mb}
  */
  readonly retentionInMb: number;
}

export function windowsWebAppSlotLogsHttpLogsFileSystemToTerraform(struct?: WindowsWebAppSlotLogsHttpLogsFileSystemOutputReference | WindowsWebAppSlotLogsHttpLogsFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    retention_in_mb: cdktf.numberToTerraform(struct!.retentionInMb),
  }
}

export class WindowsWebAppSlotLogsHttpLogsFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotLogsHttpLogsFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInDays = this._retentionInDays;
    }
    if (this._retentionInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInMb = this._retentionInMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotLogsHttpLogsFileSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionInDays = undefined;
      this._retentionInMb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionInDays = value.retentionInDays;
      this._retentionInMb = value.retentionInMb;
    }
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
    return this._retentionInDays;
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
    return this._retentionInMb;
  }
}
export interface WindowsWebAppSlotLogsHttpLogs {
  /**
  * azure_blob_storage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#azure_blob_storage WindowsWebAppSlot#azure_blob_storage}
  */
  readonly azureBlobStorage?: WindowsWebAppSlotLogsHttpLogsAzureBlobStorage;
  /**
  * file_system block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#file_system WindowsWebAppSlot#file_system}
  */
  readonly fileSystem?: WindowsWebAppSlotLogsHttpLogsFileSystem;
}

export function windowsWebAppSlotLogsHttpLogsToTerraform(struct?: WindowsWebAppSlotLogsHttpLogsOutputReference | WindowsWebAppSlotLogsHttpLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_blob_storage: windowsWebAppSlotLogsHttpLogsAzureBlobStorageToTerraform(struct!.azureBlobStorage),
    file_system: windowsWebAppSlotLogsHttpLogsFileSystemToTerraform(struct!.fileSystem),
  }
}

export class WindowsWebAppSlotLogsHttpLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotLogsHttpLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureBlobStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobStorage = this._azureBlobStorage?.internalValue;
    }
    if (this._fileSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotLogsHttpLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureBlobStorage.internalValue = undefined;
      this._fileSystem.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureBlobStorage.internalValue = value.azureBlobStorage;
      this._fileSystem.internalValue = value.fileSystem;
    }
  }

  // azure_blob_storage - computed: false, optional: true, required: false
  private _azureBlobStorage = new WindowsWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference(this, "azure_blob_storage");
  public get azureBlobStorage() {
    return this._azureBlobStorage;
  }
  public putAzureBlobStorage(value: WindowsWebAppSlotLogsHttpLogsAzureBlobStorage) {
    this._azureBlobStorage.internalValue = value;
  }
  public resetAzureBlobStorage() {
    this._azureBlobStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageInput() {
    return this._azureBlobStorage.internalValue;
  }

  // file_system - computed: false, optional: true, required: false
  private _fileSystem = new WindowsWebAppSlotLogsHttpLogsFileSystemOutputReference(this, "file_system");
  public get fileSystem() {
    return this._fileSystem;
  }
  public putFileSystem(value: WindowsWebAppSlotLogsHttpLogsFileSystem) {
    this._fileSystem.internalValue = value;
  }
  public resetFileSystem() {
    this._fileSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem.internalValue;
  }
}
export interface WindowsWebAppSlotLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#detailed_error_messages WindowsWebAppSlot#detailed_error_messages}
  */
  readonly detailedErrorMessages?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#failed_request_tracing WindowsWebAppSlot#failed_request_tracing}
  */
  readonly failedRequestTracing?: boolean | cdktf.IResolvable;
  /**
  * application_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#application_logs WindowsWebAppSlot#application_logs}
  */
  readonly applicationLogs?: WindowsWebAppSlotLogsApplicationLogs;
  /**
  * http_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#http_logs WindowsWebAppSlot#http_logs}
  */
  readonly httpLogs?: WindowsWebAppSlotLogsHttpLogs;
}

export function windowsWebAppSlotLogsToTerraform(struct?: WindowsWebAppSlotLogsOutputReference | WindowsWebAppSlotLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detailed_error_messages: cdktf.booleanToTerraform(struct!.detailedErrorMessages),
    failed_request_tracing: cdktf.booleanToTerraform(struct!.failedRequestTracing),
    application_logs: windowsWebAppSlotLogsApplicationLogsToTerraform(struct!.applicationLogs),
    http_logs: windowsWebAppSlotLogsHttpLogsToTerraform(struct!.httpLogs),
  }
}

export class WindowsWebAppSlotLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detailedErrorMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedErrorMessages = this._detailedErrorMessages;
    }
    if (this._failedRequestTracing !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedRequestTracing = this._failedRequestTracing;
    }
    if (this._applicationLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationLogs = this._applicationLogs?.internalValue;
    }
    if (this._httpLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpLogs = this._httpLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detailedErrorMessages = undefined;
      this._failedRequestTracing = undefined;
      this._applicationLogs.internalValue = undefined;
      this._httpLogs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detailedErrorMessages = value.detailedErrorMessages;
      this._failedRequestTracing = value.failedRequestTracing;
      this._applicationLogs.internalValue = value.applicationLogs;
      this._httpLogs.internalValue = value.httpLogs;
    }
  }

  // detailed_error_messages - computed: false, optional: true, required: false
  private _detailedErrorMessages?: boolean | cdktf.IResolvable; 
  public get detailedErrorMessages() {
    return this.getBooleanAttribute('detailed_error_messages');
  }
  public set detailedErrorMessages(value: boolean | cdktf.IResolvable) {
    this._detailedErrorMessages = value;
  }
  public resetDetailedErrorMessages() {
    this._detailedErrorMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedErrorMessagesInput() {
    return this._detailedErrorMessages;
  }

  // failed_request_tracing - computed: false, optional: true, required: false
  private _failedRequestTracing?: boolean | cdktf.IResolvable; 
  public get failedRequestTracing() {
    return this.getBooleanAttribute('failed_request_tracing');
  }
  public set failedRequestTracing(value: boolean | cdktf.IResolvable) {
    this._failedRequestTracing = value;
  }
  public resetFailedRequestTracing() {
    this._failedRequestTracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedRequestTracingInput() {
    return this._failedRequestTracing;
  }

  // application_logs - computed: false, optional: true, required: false
  private _applicationLogs = new WindowsWebAppSlotLogsApplicationLogsOutputReference(this, "application_logs");
  public get applicationLogs() {
    return this._applicationLogs;
  }
  public putApplicationLogs(value: WindowsWebAppSlotLogsApplicationLogs) {
    this._applicationLogs.internalValue = value;
  }
  public resetApplicationLogs() {
    this._applicationLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLogsInput() {
    return this._applicationLogs.internalValue;
  }

  // http_logs - computed: false, optional: true, required: false
  private _httpLogs = new WindowsWebAppSlotLogsHttpLogsOutputReference(this, "http_logs");
  public get httpLogs() {
    return this._httpLogs;
  }
  public putHttpLogs(value: WindowsWebAppSlotLogsHttpLogs) {
    this._httpLogs.internalValue = value;
  }
  public resetHttpLogs() {
    this._httpLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLogsInput() {
    return this._httpLogs.internalValue;
  }
}
export interface WindowsWebAppSlotSiteConfigIpRestrictionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#x_azure_fdid WindowsWebAppSlot#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#x_fd_health_probe WindowsWebAppSlot#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#x_forwarded_for WindowsWebAppSlot#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#x_forwarded_host WindowsWebAppSlot#x_forwarded_host}
  */
  readonly xForwardedHost?: string[];
}

export function windowsWebAppSlotSiteConfigIpRestrictionHeadersToTerraform(struct?: WindowsWebAppSlotSiteConfigIpRestrictionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x_azure_fdid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xAzureFdid),
    x_fd_health_probe: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xFdHealthProbe),
    x_forwarded_for: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xForwardedFor),
    x_forwarded_host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xForwardedHost),
  }
}

export class WindowsWebAppSlotSiteConfigIpRestrictionHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfigIpRestrictionHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xAzureFdid !== undefined) {
      hasAnyValues = true;
      internalValueResult.xAzureFdid = this._xAzureFdid;
    }
    if (this._xFdHealthProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.xFdHealthProbe = this._xFdHealthProbe;
    }
    if (this._xForwardedFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedFor = this._xForwardedFor;
    }
    if (this._xForwardedHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedHost = this._xForwardedHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfigIpRestrictionHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._xAzureFdid = undefined;
      this._xFdHealthProbe = undefined;
      this._xForwardedFor = undefined;
      this._xForwardedHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._xAzureFdid = value.xAzureFdid;
      this._xFdHealthProbe = value.xFdHealthProbe;
      this._xForwardedFor = value.xForwardedFor;
      this._xForwardedHost = value.xForwardedHost;
    }
  }

  // x_azure_fdid - computed: true, optional: true, required: false
  private _xAzureFdid?: string[]; 
  public get xAzureFdid() {
    return this.getListAttribute('x_azure_fdid');
  }
  public set xAzureFdid(value: string[]) {
    this._xAzureFdid = value;
  }
  public resetXAzureFdid() {
    this._xAzureFdid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xAzureFdidInput() {
    return this._xAzureFdid;
  }

  // x_fd_health_probe - computed: true, optional: true, required: false
  private _xFdHealthProbe?: string[]; 
  public get xFdHealthProbe() {
    return this.getListAttribute('x_fd_health_probe');
  }
  public set xFdHealthProbe(value: string[]) {
    this._xFdHealthProbe = value;
  }
  public resetXFdHealthProbe() {
    this._xFdHealthProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xFdHealthProbeInput() {
    return this._xFdHealthProbe;
  }

  // x_forwarded_for - computed: true, optional: true, required: false
  private _xForwardedFor?: string[]; 
  public get xForwardedFor() {
    return this.getListAttribute('x_forwarded_for');
  }
  public set xForwardedFor(value: string[]) {
    this._xForwardedFor = value;
  }
  public resetXForwardedFor() {
    this._xForwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForInput() {
    return this._xForwardedFor;
  }

  // x_forwarded_host - computed: true, optional: true, required: false
  private _xForwardedHost?: string[]; 
  public get xForwardedHost() {
    return this.getListAttribute('x_forwarded_host');
  }
  public set xForwardedHost(value: string[]) {
    this._xForwardedHost = value;
  }
  public resetXForwardedHost() {
    this._xForwardedHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedHostInput() {
    return this._xForwardedHost;
  }
}

export class WindowsWebAppSlotSiteConfigIpRestrictionHeadersList extends cdktf.ComplexList {
  public internalValue? : WindowsWebAppSlotSiteConfigIpRestrictionHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsWebAppSlotSiteConfigIpRestrictionHeadersOutputReference {
    return new WindowsWebAppSlotSiteConfigIpRestrictionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsWebAppSlotSiteConfigIpRestriction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#action WindowsWebAppSlot#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#headers WindowsWebAppSlot#headers}
  */
  readonly headers?: WindowsWebAppSlotSiteConfigIpRestrictionHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#ip_address WindowsWebAppSlot#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#name WindowsWebAppSlot#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#priority WindowsWebAppSlot#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#service_tag WindowsWebAppSlot#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#virtual_network_subnet_id WindowsWebAppSlot#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
}

export function windowsWebAppSlotSiteConfigIpRestrictionToTerraform(struct?: WindowsWebAppSlotSiteConfigIpRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    headers: cdktf.listMapper(windowsWebAppSlotSiteConfigIpRestrictionHeadersToTerraform, false)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}

export class WindowsWebAppSlotSiteConfigIpRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfigIpRestriction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._serviceTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTag = this._serviceTag;
    }
    if (this._virtualNetworkSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkSubnetId = this._virtualNetworkSubnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfigIpRestriction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._headers.internalValue = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._serviceTag = undefined;
      this._virtualNetworkSubnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._headers.internalValue = value.headers;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._priority = value.priority;
      this._serviceTag = value.serviceTag;
      this._virtualNetworkSubnetId = value.virtualNetworkSubnetId;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new WindowsWebAppSlotSiteConfigIpRestrictionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: WindowsWebAppSlotSiteConfigIpRestrictionHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // service_tag - computed: true, optional: true, required: false
  private _serviceTag?: string; 
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }
  public set serviceTag(value: string) {
    this._serviceTag = value;
  }
  public resetServiceTag() {
    this._serviceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTagInput() {
    return this._serviceTag;
  }

  // virtual_network_subnet_id - computed: true, optional: true, required: false
  private _virtualNetworkSubnetId?: string; 
  public get virtualNetworkSubnetId() {
    return this.getStringAttribute('virtual_network_subnet_id');
  }
  public set virtualNetworkSubnetId(value: string) {
    this._virtualNetworkSubnetId = value;
  }
  public resetVirtualNetworkSubnetId() {
    this._virtualNetworkSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSubnetIdInput() {
    return this._virtualNetworkSubnetId;
  }
}

export class WindowsWebAppSlotSiteConfigIpRestrictionList extends cdktf.ComplexList {
  public internalValue? : WindowsWebAppSlotSiteConfigIpRestriction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsWebAppSlotSiteConfigIpRestrictionOutputReference {
    return new WindowsWebAppSlotSiteConfigIpRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsWebAppSlotSiteConfigScmIpRestrictionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#x_azure_fdid WindowsWebAppSlot#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#x_fd_health_probe WindowsWebAppSlot#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#x_forwarded_for WindowsWebAppSlot#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#x_forwarded_host WindowsWebAppSlot#x_forwarded_host}
  */
  readonly xForwardedHost?: string[];
}

export function windowsWebAppSlotSiteConfigScmIpRestrictionHeadersToTerraform(struct?: WindowsWebAppSlotSiteConfigScmIpRestrictionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x_azure_fdid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xAzureFdid),
    x_fd_health_probe: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xFdHealthProbe),
    x_forwarded_for: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xForwardedFor),
    x_forwarded_host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xForwardedHost),
  }
}

export class WindowsWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfigScmIpRestrictionHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xAzureFdid !== undefined) {
      hasAnyValues = true;
      internalValueResult.xAzureFdid = this._xAzureFdid;
    }
    if (this._xFdHealthProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.xFdHealthProbe = this._xFdHealthProbe;
    }
    if (this._xForwardedFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedFor = this._xForwardedFor;
    }
    if (this._xForwardedHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedHost = this._xForwardedHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfigScmIpRestrictionHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._xAzureFdid = undefined;
      this._xFdHealthProbe = undefined;
      this._xForwardedFor = undefined;
      this._xForwardedHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._xAzureFdid = value.xAzureFdid;
      this._xFdHealthProbe = value.xFdHealthProbe;
      this._xForwardedFor = value.xForwardedFor;
      this._xForwardedHost = value.xForwardedHost;
    }
  }

  // x_azure_fdid - computed: true, optional: true, required: false
  private _xAzureFdid?: string[]; 
  public get xAzureFdid() {
    return this.getListAttribute('x_azure_fdid');
  }
  public set xAzureFdid(value: string[]) {
    this._xAzureFdid = value;
  }
  public resetXAzureFdid() {
    this._xAzureFdid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xAzureFdidInput() {
    return this._xAzureFdid;
  }

  // x_fd_health_probe - computed: true, optional: true, required: false
  private _xFdHealthProbe?: string[]; 
  public get xFdHealthProbe() {
    return this.getListAttribute('x_fd_health_probe');
  }
  public set xFdHealthProbe(value: string[]) {
    this._xFdHealthProbe = value;
  }
  public resetXFdHealthProbe() {
    this._xFdHealthProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xFdHealthProbeInput() {
    return this._xFdHealthProbe;
  }

  // x_forwarded_for - computed: true, optional: true, required: false
  private _xForwardedFor?: string[]; 
  public get xForwardedFor() {
    return this.getListAttribute('x_forwarded_for');
  }
  public set xForwardedFor(value: string[]) {
    this._xForwardedFor = value;
  }
  public resetXForwardedFor() {
    this._xForwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForInput() {
    return this._xForwardedFor;
  }

  // x_forwarded_host - computed: true, optional: true, required: false
  private _xForwardedHost?: string[]; 
  public get xForwardedHost() {
    return this.getListAttribute('x_forwarded_host');
  }
  public set xForwardedHost(value: string[]) {
    this._xForwardedHost = value;
  }
  public resetXForwardedHost() {
    this._xForwardedHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedHostInput() {
    return this._xForwardedHost;
  }
}

export class WindowsWebAppSlotSiteConfigScmIpRestrictionHeadersList extends cdktf.ComplexList {
  public internalValue? : WindowsWebAppSlotSiteConfigScmIpRestrictionHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference {
    return new WindowsWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsWebAppSlotSiteConfigScmIpRestriction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#action WindowsWebAppSlot#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#headers WindowsWebAppSlot#headers}
  */
  readonly headers?: WindowsWebAppSlotSiteConfigScmIpRestrictionHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#ip_address WindowsWebAppSlot#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#name WindowsWebAppSlot#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#priority WindowsWebAppSlot#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#service_tag WindowsWebAppSlot#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#virtual_network_subnet_id WindowsWebAppSlot#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
}

export function windowsWebAppSlotSiteConfigScmIpRestrictionToTerraform(struct?: WindowsWebAppSlotSiteConfigScmIpRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    headers: cdktf.listMapper(windowsWebAppSlotSiteConfigScmIpRestrictionHeadersToTerraform, false)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}

export class WindowsWebAppSlotSiteConfigScmIpRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfigScmIpRestriction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._serviceTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTag = this._serviceTag;
    }
    if (this._virtualNetworkSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkSubnetId = this._virtualNetworkSubnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfigScmIpRestriction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._headers.internalValue = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._serviceTag = undefined;
      this._virtualNetworkSubnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._headers.internalValue = value.headers;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._priority = value.priority;
      this._serviceTag = value.serviceTag;
      this._virtualNetworkSubnetId = value.virtualNetworkSubnetId;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new WindowsWebAppSlotSiteConfigScmIpRestrictionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: WindowsWebAppSlotSiteConfigScmIpRestrictionHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // service_tag - computed: true, optional: true, required: false
  private _serviceTag?: string; 
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }
  public set serviceTag(value: string) {
    this._serviceTag = value;
  }
  public resetServiceTag() {
    this._serviceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTagInput() {
    return this._serviceTag;
  }

  // virtual_network_subnet_id - computed: true, optional: true, required: false
  private _virtualNetworkSubnetId?: string; 
  public get virtualNetworkSubnetId() {
    return this.getStringAttribute('virtual_network_subnet_id');
  }
  public set virtualNetworkSubnetId(value: string) {
    this._virtualNetworkSubnetId = value;
  }
  public resetVirtualNetworkSubnetId() {
    this._virtualNetworkSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSubnetIdInput() {
    return this._virtualNetworkSubnetId;
  }
}

export class WindowsWebAppSlotSiteConfigScmIpRestrictionList extends cdktf.ComplexList {
  public internalValue? : WindowsWebAppSlotSiteConfigScmIpRestriction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsWebAppSlotSiteConfigScmIpRestrictionOutputReference {
    return new WindowsWebAppSlotSiteConfigScmIpRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsWebAppSlotSiteConfigApplicationStack {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#current_stack WindowsWebAppSlot#current_stack}
  */
  readonly currentStack?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#docker_container_name WindowsWebAppSlot#docker_container_name}
  */
  readonly dockerContainerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#docker_container_registry WindowsWebAppSlot#docker_container_registry}
  */
  readonly dockerContainerRegistry?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#docker_container_tag WindowsWebAppSlot#docker_container_tag}
  */
  readonly dockerContainerTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#dotnet_version WindowsWebAppSlot#dotnet_version}
  */
  readonly dotnetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#java_container WindowsWebAppSlot#java_container}
  */
  readonly javaContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#java_container_version WindowsWebAppSlot#java_container_version}
  */
  readonly javaContainerVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#java_version WindowsWebAppSlot#java_version}
  */
  readonly javaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#node_version WindowsWebAppSlot#node_version}
  */
  readonly nodeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#php_version WindowsWebAppSlot#php_version}
  */
  readonly phpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#python_version WindowsWebAppSlot#python_version}
  */
  readonly pythonVersion?: string;
}

export function windowsWebAppSlotSiteConfigApplicationStackToTerraform(struct?: WindowsWebAppSlotSiteConfigApplicationStackOutputReference | WindowsWebAppSlotSiteConfigApplicationStack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_stack: cdktf.stringToTerraform(struct!.currentStack),
    docker_container_name: cdktf.stringToTerraform(struct!.dockerContainerName),
    docker_container_registry: cdktf.stringToTerraform(struct!.dockerContainerRegistry),
    docker_container_tag: cdktf.stringToTerraform(struct!.dockerContainerTag),
    dotnet_version: cdktf.stringToTerraform(struct!.dotnetVersion),
    java_container: cdktf.stringToTerraform(struct!.javaContainer),
    java_container_version: cdktf.stringToTerraform(struct!.javaContainerVersion),
    java_version: cdktf.stringToTerraform(struct!.javaVersion),
    node_version: cdktf.stringToTerraform(struct!.nodeVersion),
    php_version: cdktf.stringToTerraform(struct!.phpVersion),
    python_version: cdktf.stringToTerraform(struct!.pythonVersion),
  }
}

export class WindowsWebAppSlotSiteConfigApplicationStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfigApplicationStack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentStack = this._currentStack;
    }
    if (this._dockerContainerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerContainerName = this._dockerContainerName;
    }
    if (this._dockerContainerRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerContainerRegistry = this._dockerContainerRegistry;
    }
    if (this._dockerContainerTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerContainerTag = this._dockerContainerTag;
    }
    if (this._dotnetVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dotnetVersion = this._dotnetVersion;
    }
    if (this._javaContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaContainer = this._javaContainer;
    }
    if (this._javaContainerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaContainerVersion = this._javaContainerVersion;
    }
    if (this._javaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaVersion = this._javaVersion;
    }
    if (this._nodeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeVersion = this._nodeVersion;
    }
    if (this._phpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.phpVersion = this._phpVersion;
    }
    if (this._pythonVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonVersion = this._pythonVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfigApplicationStack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currentStack = undefined;
      this._dockerContainerName = undefined;
      this._dockerContainerRegistry = undefined;
      this._dockerContainerTag = undefined;
      this._dotnetVersion = undefined;
      this._javaContainer = undefined;
      this._javaContainerVersion = undefined;
      this._javaVersion = undefined;
      this._nodeVersion = undefined;
      this._phpVersion = undefined;
      this._pythonVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currentStack = value.currentStack;
      this._dockerContainerName = value.dockerContainerName;
      this._dockerContainerRegistry = value.dockerContainerRegistry;
      this._dockerContainerTag = value.dockerContainerTag;
      this._dotnetVersion = value.dotnetVersion;
      this._javaContainer = value.javaContainer;
      this._javaContainerVersion = value.javaContainerVersion;
      this._javaVersion = value.javaVersion;
      this._nodeVersion = value.nodeVersion;
      this._phpVersion = value.phpVersion;
      this._pythonVersion = value.pythonVersion;
    }
  }

  // current_stack - computed: false, optional: true, required: false
  private _currentStack?: string; 
  public get currentStack() {
    return this.getStringAttribute('current_stack');
  }
  public set currentStack(value: string) {
    this._currentStack = value;
  }
  public resetCurrentStack() {
    this._currentStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentStackInput() {
    return this._currentStack;
  }

  // docker_container_name - computed: false, optional: true, required: false
  private _dockerContainerName?: string; 
  public get dockerContainerName() {
    return this.getStringAttribute('docker_container_name');
  }
  public set dockerContainerName(value: string) {
    this._dockerContainerName = value;
  }
  public resetDockerContainerName() {
    this._dockerContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerContainerNameInput() {
    return this._dockerContainerName;
  }

  // docker_container_registry - computed: false, optional: true, required: false
  private _dockerContainerRegistry?: string; 
  public get dockerContainerRegistry() {
    return this.getStringAttribute('docker_container_registry');
  }
  public set dockerContainerRegistry(value: string) {
    this._dockerContainerRegistry = value;
  }
  public resetDockerContainerRegistry() {
    this._dockerContainerRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerContainerRegistryInput() {
    return this._dockerContainerRegistry;
  }

  // docker_container_tag - computed: false, optional: true, required: false
  private _dockerContainerTag?: string; 
  public get dockerContainerTag() {
    return this.getStringAttribute('docker_container_tag');
  }
  public set dockerContainerTag(value: string) {
    this._dockerContainerTag = value;
  }
  public resetDockerContainerTag() {
    this._dockerContainerTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerContainerTagInput() {
    return this._dockerContainerTag;
  }

  // dotnet_version - computed: false, optional: true, required: false
  private _dotnetVersion?: string; 
  public get dotnetVersion() {
    return this.getStringAttribute('dotnet_version');
  }
  public set dotnetVersion(value: string) {
    this._dotnetVersion = value;
  }
  public resetDotnetVersion() {
    this._dotnetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotnetVersionInput() {
    return this._dotnetVersion;
  }

  // java_container - computed: false, optional: true, required: false
  private _javaContainer?: string; 
  public get javaContainer() {
    return this.getStringAttribute('java_container');
  }
  public set javaContainer(value: string) {
    this._javaContainer = value;
  }
  public resetJavaContainer() {
    this._javaContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaContainerInput() {
    return this._javaContainer;
  }

  // java_container_version - computed: false, optional: true, required: false
  private _javaContainerVersion?: string; 
  public get javaContainerVersion() {
    return this.getStringAttribute('java_container_version');
  }
  public set javaContainerVersion(value: string) {
    this._javaContainerVersion = value;
  }
  public resetJavaContainerVersion() {
    this._javaContainerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaContainerVersionInput() {
    return this._javaContainerVersion;
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

  // node_version - computed: false, optional: true, required: false
  private _nodeVersion?: string; 
  public get nodeVersion() {
    return this.getStringAttribute('node_version');
  }
  public set nodeVersion(value: string) {
    this._nodeVersion = value;
  }
  public resetNodeVersion() {
    this._nodeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeVersionInput() {
    return this._nodeVersion;
  }

  // php_version - computed: false, optional: true, required: false
  private _phpVersion?: string; 
  public get phpVersion() {
    return this.getStringAttribute('php_version');
  }
  public set phpVersion(value: string) {
    this._phpVersion = value;
  }
  public resetPhpVersion() {
    this._phpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phpVersionInput() {
    return this._phpVersion;
  }

  // python_version - computed: false, optional: true, required: false
  private _pythonVersion?: string; 
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }
  public set pythonVersion(value: string) {
    this._pythonVersion = value;
  }
  public resetPythonVersion() {
    this._pythonVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonVersionInput() {
    return this._pythonVersion;
  }
}
export interface WindowsWebAppSlotSiteConfigAutoHealSettingActionCustomAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#executable WindowsWebAppSlot#executable}
  */
  readonly executable: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#parameters WindowsWebAppSlot#parameters}
  */
  readonly parameters?: string;
}

export function windowsWebAppSlotSiteConfigAutoHealSettingActionCustomActionToTerraform(struct?: WindowsWebAppSlotSiteConfigAutoHealSettingActionCustomActionOutputReference | WindowsWebAppSlotSiteConfigAutoHealSettingActionCustomAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    executable: cdktf.stringToTerraform(struct!.executable),
    parameters: cdktf.stringToTerraform(struct!.parameters),
  }
}

export class WindowsWebAppSlotSiteConfigAutoHealSettingActionCustomActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfigAutoHealSettingActionCustomAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executable !== undefined) {
      hasAnyValues = true;
      internalValueResult.executable = this._executable;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfigAutoHealSettingActionCustomAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executable = undefined;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executable = value.executable;
      this._parameters = value.parameters;
    }
  }

  // executable - computed: false, optional: false, required: true
  private _executable?: string; 
  public get executable() {
    return this.getStringAttribute('executable');
  }
  public set executable(value: string) {
    this._executable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executableInput() {
    return this._executable;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface WindowsWebAppSlotSiteConfigAutoHealSettingAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#action_type WindowsWebAppSlot#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#minimum_process_execution_time WindowsWebAppSlot#minimum_process_execution_time}
  */
  readonly minimumProcessExecutionTime?: string;
  /**
  * custom_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#custom_action WindowsWebAppSlot#custom_action}
  */
  readonly customAction?: WindowsWebAppSlotSiteConfigAutoHealSettingActionCustomAction;
}

export function windowsWebAppSlotSiteConfigAutoHealSettingActionToTerraform(struct?: WindowsWebAppSlotSiteConfigAutoHealSettingActionOutputReference | WindowsWebAppSlotSiteConfigAutoHealSettingAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    minimum_process_execution_time: cdktf.stringToTerraform(struct!.minimumProcessExecutionTime),
    custom_action: windowsWebAppSlotSiteConfigAutoHealSettingActionCustomActionToTerraform(struct!.customAction),
  }
}

export class WindowsWebAppSlotSiteConfigAutoHealSettingActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfigAutoHealSettingAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._minimumProcessExecutionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumProcessExecutionTime = this._minimumProcessExecutionTime;
    }
    if (this._customAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAction = this._customAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfigAutoHealSettingAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
      this._minimumProcessExecutionTime = undefined;
      this._customAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
      this._minimumProcessExecutionTime = value.minimumProcessExecutionTime;
      this._customAction.internalValue = value.customAction;
    }
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // minimum_process_execution_time - computed: true, optional: true, required: false
  private _minimumProcessExecutionTime?: string; 
  public get minimumProcessExecutionTime() {
    return this.getStringAttribute('minimum_process_execution_time');
  }
  public set minimumProcessExecutionTime(value: string) {
    this._minimumProcessExecutionTime = value;
  }
  public resetMinimumProcessExecutionTime() {
    this._minimumProcessExecutionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumProcessExecutionTimeInput() {
    return this._minimumProcessExecutionTime;
  }

  // custom_action - computed: false, optional: true, required: false
  private _customAction = new WindowsWebAppSlotSiteConfigAutoHealSettingActionCustomActionOutputReference(this, "custom_action");
  public get customAction() {
    return this._customAction;
  }
  public putCustomAction(value: WindowsWebAppSlotSiteConfigAutoHealSettingActionCustomAction) {
    this._customAction.internalValue = value;
  }
  public resetCustomAction() {
    this._customAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionInput() {
    return this._customAction.internalValue;
  }
}
export interface WindowsWebAppSlotSiteConfigAutoHealSettingTriggerRequests {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#count WindowsWebAppSlot#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#interval WindowsWebAppSlot#interval}
  */
  readonly interval: string;
}

export function windowsWebAppSlotSiteConfigAutoHealSettingTriggerRequestsToTerraform(struct?: WindowsWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference | WindowsWebAppSlotSiteConfigAutoHealSettingTriggerRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}

export class WindowsWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfigAutoHealSettingTriggerRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfigAutoHealSettingTriggerRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._interval = value.interval;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface WindowsWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#count WindowsWebAppSlot#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#interval WindowsWebAppSlot#interval}
  */
  readonly interval: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#path WindowsWebAppSlot#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#time_taken WindowsWebAppSlot#time_taken}
  */
  readonly timeTaken: string;
}

export function windowsWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestToTerraform(struct?: WindowsWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference | WindowsWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval: cdktf.stringToTerraform(struct!.interval),
    path: cdktf.stringToTerraform(struct!.path),
    time_taken: cdktf.stringToTerraform(struct!.timeTaken),
  }
}

export class WindowsWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._timeTaken !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTaken = this._timeTaken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._interval = undefined;
      this._path = undefined;
      this._timeTaken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._interval = value.interval;
      this._path = value.path;
      this._timeTaken = value.timeTaken;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // time_taken - computed: false, optional: false, required: true
  private _timeTaken?: string; 
  public get timeTaken() {
    return this.getStringAttribute('time_taken');
  }
  public set timeTaken(value: string) {
    this._timeTaken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTakenInput() {
    return this._timeTaken;
  }
}
export interface WindowsWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#count WindowsWebAppSlot#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#interval WindowsWebAppSlot#interval}
  */
  readonly interval: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#path WindowsWebAppSlot#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#status_code_range WindowsWebAppSlot#status_code_range}
  */
  readonly statusCodeRange: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#sub_status WindowsWebAppSlot#sub_status}
  */
  readonly subStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#win32_status WindowsWebAppSlot#win32_status}
  */
  readonly win32Status?: string;
}

export function windowsWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeToTerraform(struct?: WindowsWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval: cdktf.stringToTerraform(struct!.interval),
    path: cdktf.stringToTerraform(struct!.path),
    status_code_range: cdktf.stringToTerraform(struct!.statusCodeRange),
    sub_status: cdktf.numberToTerraform(struct!.subStatus),
    win32_status: cdktf.stringToTerraform(struct!.win32Status),
  }
}

export class WindowsWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._statusCodeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeRange = this._statusCodeRange;
    }
    if (this._subStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.subStatus = this._subStatus;
    }
    if (this._win32Status !== undefined) {
      hasAnyValues = true;
      internalValueResult.win32Status = this._win32Status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._interval = undefined;
      this._path = undefined;
      this._statusCodeRange = undefined;
      this._subStatus = undefined;
      this._win32Status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._interval = value.interval;
      this._path = value.path;
      this._statusCodeRange = value.statusCodeRange;
      this._subStatus = value.subStatus;
      this._win32Status = value.win32Status;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // status_code_range - computed: false, optional: false, required: true
  private _statusCodeRange?: string; 
  public get statusCodeRange() {
    return this.getStringAttribute('status_code_range');
  }
  public set statusCodeRange(value: string) {
    this._statusCodeRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeRangeInput() {
    return this._statusCodeRange;
  }

  // sub_status - computed: false, optional: true, required: false
  private _subStatus?: number; 
  public get subStatus() {
    return this.getNumberAttribute('sub_status');
  }
  public set subStatus(value: number) {
    this._subStatus = value;
  }
  public resetSubStatus() {
    this._subStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subStatusInput() {
    return this._subStatus;
  }

  // win32_status - computed: false, optional: true, required: false
  private _win32Status?: string; 
  public get win32Status() {
    return this.getStringAttribute('win32_status');
  }
  public set win32Status(value: string) {
    this._win32Status = value;
  }
  public resetWin32Status() {
    this._win32Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get win32StatusInput() {
    return this._win32Status;
  }
}

export class WindowsWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList extends cdktf.ComplexList {
  public internalValue? : WindowsWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference {
    return new WindowsWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsWebAppSlotSiteConfigAutoHealSettingTrigger {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#private_memory_kb WindowsWebAppSlot#private_memory_kb}
  */
  readonly privateMemoryKb?: number;
  /**
  * requests block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#requests WindowsWebAppSlot#requests}
  */
  readonly requests?: WindowsWebAppSlotSiteConfigAutoHealSettingTriggerRequests;
  /**
  * slow_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#slow_request WindowsWebAppSlot#slow_request}
  */
  readonly slowRequest?: WindowsWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest;
  /**
  * status_code block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#status_code WindowsWebAppSlot#status_code}
  */
  readonly statusCode?: WindowsWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode[] | cdktf.IResolvable;
}

export function windowsWebAppSlotSiteConfigAutoHealSettingTriggerToTerraform(struct?: WindowsWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference | WindowsWebAppSlotSiteConfigAutoHealSettingTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_memory_kb: cdktf.numberToTerraform(struct!.privateMemoryKb),
    requests: windowsWebAppSlotSiteConfigAutoHealSettingTriggerRequestsToTerraform(struct!.requests),
    slow_request: windowsWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestToTerraform(struct!.slowRequest),
    status_code: cdktf.listMapper(windowsWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeToTerraform, true)(struct!.statusCode),
  }
}

export class WindowsWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfigAutoHealSettingTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateMemoryKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateMemoryKb = this._privateMemoryKb;
    }
    if (this._requests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    if (this._slowRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowRequest = this._slowRequest?.internalValue;
    }
    if (this._statusCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfigAutoHealSettingTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateMemoryKb = undefined;
      this._requests.internalValue = undefined;
      this._slowRequest.internalValue = undefined;
      this._statusCode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateMemoryKb = value.privateMemoryKb;
      this._requests.internalValue = value.requests;
      this._slowRequest.internalValue = value.slowRequest;
      this._statusCode.internalValue = value.statusCode;
    }
  }

  // private_memory_kb - computed: false, optional: true, required: false
  private _privateMemoryKb?: number; 
  public get privateMemoryKb() {
    return this.getNumberAttribute('private_memory_kb');
  }
  public set privateMemoryKb(value: number) {
    this._privateMemoryKb = value;
  }
  public resetPrivateMemoryKb() {
    this._privateMemoryKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateMemoryKbInput() {
    return this._privateMemoryKb;
  }

  // requests - computed: false, optional: true, required: false
  private _requests = new WindowsWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference(this, "requests");
  public get requests() {
    return this._requests;
  }
  public putRequests(value: WindowsWebAppSlotSiteConfigAutoHealSettingTriggerRequests) {
    this._requests.internalValue = value;
  }
  public resetRequests() {
    this._requests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }

  // slow_request - computed: false, optional: true, required: false
  private _slowRequest = new WindowsWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference(this, "slow_request");
  public get slowRequest() {
    return this._slowRequest;
  }
  public putSlowRequest(value: WindowsWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest) {
    this._slowRequest.internalValue = value;
  }
  public resetSlowRequest() {
    this._slowRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowRequestInput() {
    return this._slowRequest.internalValue;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode = new WindowsWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList(this, "status_code", false);
  public get statusCode() {
    return this._statusCode;
  }
  public putStatusCode(value: WindowsWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode[] | cdktf.IResolvable) {
    this._statusCode.internalValue = value;
  }
  public resetStatusCode() {
    this._statusCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode.internalValue;
  }
}
export interface WindowsWebAppSlotSiteConfigAutoHealSetting {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#action WindowsWebAppSlot#action}
  */
  readonly action: WindowsWebAppSlotSiteConfigAutoHealSettingAction;
  /**
  * trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#trigger WindowsWebAppSlot#trigger}
  */
  readonly trigger: WindowsWebAppSlotSiteConfigAutoHealSettingTrigger;
}

export function windowsWebAppSlotSiteConfigAutoHealSettingToTerraform(struct?: WindowsWebAppSlotSiteConfigAutoHealSettingOutputReference | WindowsWebAppSlotSiteConfigAutoHealSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: windowsWebAppSlotSiteConfigAutoHealSettingActionToTerraform(struct!.action),
    trigger: windowsWebAppSlotSiteConfigAutoHealSettingTriggerToTerraform(struct!.trigger),
  }
}

export class WindowsWebAppSlotSiteConfigAutoHealSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfigAutoHealSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfigAutoHealSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._trigger.internalValue = value.trigger;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new WindowsWebAppSlotSiteConfigAutoHealSettingActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: WindowsWebAppSlotSiteConfigAutoHealSettingAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger = new WindowsWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: WindowsWebAppSlotSiteConfigAutoHealSettingTrigger) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}
export interface WindowsWebAppSlotSiteConfigCors {
  /**
  * Specifies a list of origins that should be allowed to make cross-origin calls.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#allowed_origins WindowsWebAppSlot#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Are credentials allowed in CORS requests? Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#support_credentials WindowsWebAppSlot#support_credentials}
  */
  readonly supportCredentials?: boolean | cdktf.IResolvable;
}

export function windowsWebAppSlotSiteConfigCorsToTerraform(struct?: WindowsWebAppSlotSiteConfigCorsOutputReference | WindowsWebAppSlotSiteConfigCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    support_credentials: cdktf.booleanToTerraform(struct!.supportCredentials),
  }
}

export class WindowsWebAppSlotSiteConfigCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfigCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._supportCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportCredentials = this._supportCredentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfigCors | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('allowed_origins'));
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
    return this.getBooleanAttribute('support_credentials');
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
export interface WindowsWebAppSlotSiteConfigVirtualApplicationVirtualDirectory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#physical_path WindowsWebAppSlot#physical_path}
  */
  readonly physicalPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#virtual_path WindowsWebAppSlot#virtual_path}
  */
  readonly virtualPath?: string;
}

export function windowsWebAppSlotSiteConfigVirtualApplicationVirtualDirectoryToTerraform(struct?: WindowsWebAppSlotSiteConfigVirtualApplicationVirtualDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    physical_path: cdktf.stringToTerraform(struct!.physicalPath),
    virtual_path: cdktf.stringToTerraform(struct!.virtualPath),
  }
}

export class WindowsWebAppSlotSiteConfigVirtualApplicationVirtualDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfigVirtualApplicationVirtualDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._physicalPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalPath = this._physicalPath;
    }
    if (this._virtualPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPath = this._virtualPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfigVirtualApplicationVirtualDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._physicalPath = undefined;
      this._virtualPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._physicalPath = value.physicalPath;
      this._virtualPath = value.virtualPath;
    }
  }

  // physical_path - computed: false, optional: true, required: false
  private _physicalPath?: string; 
  public get physicalPath() {
    return this.getStringAttribute('physical_path');
  }
  public set physicalPath(value: string) {
    this._physicalPath = value;
  }
  public resetPhysicalPath() {
    this._physicalPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalPathInput() {
    return this._physicalPath;
  }

  // virtual_path - computed: false, optional: true, required: false
  private _virtualPath?: string; 
  public get virtualPath() {
    return this.getStringAttribute('virtual_path');
  }
  public set virtualPath(value: string) {
    this._virtualPath = value;
  }
  public resetVirtualPath() {
    this._virtualPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPathInput() {
    return this._virtualPath;
  }
}

export class WindowsWebAppSlotSiteConfigVirtualApplicationVirtualDirectoryList extends cdktf.ComplexList {
  public internalValue? : WindowsWebAppSlotSiteConfigVirtualApplicationVirtualDirectory[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsWebAppSlotSiteConfigVirtualApplicationVirtualDirectoryOutputReference {
    return new WindowsWebAppSlotSiteConfigVirtualApplicationVirtualDirectoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsWebAppSlotSiteConfigVirtualApplication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#physical_path WindowsWebAppSlot#physical_path}
  */
  readonly physicalPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#preload WindowsWebAppSlot#preload}
  */
  readonly preload: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#virtual_path WindowsWebAppSlot#virtual_path}
  */
  readonly virtualPath: string;
  /**
  * virtual_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#virtual_directory WindowsWebAppSlot#virtual_directory}
  */
  readonly virtualDirectory?: WindowsWebAppSlotSiteConfigVirtualApplicationVirtualDirectory[] | cdktf.IResolvable;
}

export function windowsWebAppSlotSiteConfigVirtualApplicationToTerraform(struct?: WindowsWebAppSlotSiteConfigVirtualApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    physical_path: cdktf.stringToTerraform(struct!.physicalPath),
    preload: cdktf.booleanToTerraform(struct!.preload),
    virtual_path: cdktf.stringToTerraform(struct!.virtualPath),
    virtual_directory: cdktf.listMapper(windowsWebAppSlotSiteConfigVirtualApplicationVirtualDirectoryToTerraform, true)(struct!.virtualDirectory),
  }
}

export class WindowsWebAppSlotSiteConfigVirtualApplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfigVirtualApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._physicalPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalPath = this._physicalPath;
    }
    if (this._preload !== undefined) {
      hasAnyValues = true;
      internalValueResult.preload = this._preload;
    }
    if (this._virtualPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPath = this._virtualPath;
    }
    if (this._virtualDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualDirectory = this._virtualDirectory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfigVirtualApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._physicalPath = undefined;
      this._preload = undefined;
      this._virtualPath = undefined;
      this._virtualDirectory.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._physicalPath = value.physicalPath;
      this._preload = value.preload;
      this._virtualPath = value.virtualPath;
      this._virtualDirectory.internalValue = value.virtualDirectory;
    }
  }

  // physical_path - computed: false, optional: false, required: true
  private _physicalPath?: string; 
  public get physicalPath() {
    return this.getStringAttribute('physical_path');
  }
  public set physicalPath(value: string) {
    this._physicalPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalPathInput() {
    return this._physicalPath;
  }

  // preload - computed: false, optional: false, required: true
  private _preload?: boolean | cdktf.IResolvable; 
  public get preload() {
    return this.getBooleanAttribute('preload');
  }
  public set preload(value: boolean | cdktf.IResolvable) {
    this._preload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadInput() {
    return this._preload;
  }

  // virtual_path - computed: false, optional: false, required: true
  private _virtualPath?: string; 
  public get virtualPath() {
    return this.getStringAttribute('virtual_path');
  }
  public set virtualPath(value: string) {
    this._virtualPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPathInput() {
    return this._virtualPath;
  }

  // virtual_directory - computed: false, optional: true, required: false
  private _virtualDirectory = new WindowsWebAppSlotSiteConfigVirtualApplicationVirtualDirectoryList(this, "virtual_directory", true);
  public get virtualDirectory() {
    return this._virtualDirectory;
  }
  public putVirtualDirectory(value: WindowsWebAppSlotSiteConfigVirtualApplicationVirtualDirectory[] | cdktf.IResolvable) {
    this._virtualDirectory.internalValue = value;
  }
  public resetVirtualDirectory() {
    this._virtualDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDirectoryInput() {
    return this._virtualDirectory.internalValue;
  }
}

export class WindowsWebAppSlotSiteConfigVirtualApplicationList extends cdktf.ComplexList {
  public internalValue? : WindowsWebAppSlotSiteConfigVirtualApplication[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsWebAppSlotSiteConfigVirtualApplicationOutputReference {
    return new WindowsWebAppSlotSiteConfigVirtualApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsWebAppSlotSiteConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#always_on WindowsWebAppSlot#always_on}
  */
  readonly alwaysOn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#api_definition_url WindowsWebAppSlot#api_definition_url}
  */
  readonly apiDefinitionUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#api_management_api_id WindowsWebAppSlot#api_management_api_id}
  */
  readonly apiManagementApiId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#app_command_line WindowsWebAppSlot#app_command_line}
  */
  readonly appCommandLine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#auto_heal_enabled WindowsWebAppSlot#auto_heal_enabled}
  */
  readonly autoHealEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#auto_swap_slot_name WindowsWebAppSlot#auto_swap_slot_name}
  */
  readonly autoSwapSlotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#container_registry_managed_identity_client_id WindowsWebAppSlot#container_registry_managed_identity_client_id}
  */
  readonly containerRegistryManagedIdentityClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#container_registry_use_managed_identity WindowsWebAppSlot#container_registry_use_managed_identity}
  */
  readonly containerRegistryUseManagedIdentity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#default_documents WindowsWebAppSlot#default_documents}
  */
  readonly defaultDocuments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#ftps_state WindowsWebAppSlot#ftps_state}
  */
  readonly ftpsState?: string;
  /**
  * The amount of time in minutes that a node is unhealthy before being removed from the load balancer. Possible values are between `2` and `10`. Defaults to `10`. Only valid in conjunction with `health_check_path`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#health_check_eviction_time_in_min WindowsWebAppSlot#health_check_eviction_time_in_min}
  */
  readonly healthCheckEvictionTimeInMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#health_check_path WindowsWebAppSlot#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#http2_enabled WindowsWebAppSlot#http2_enabled}
  */
  readonly http2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#ip_restriction WindowsWebAppSlot#ip_restriction}
  */
  readonly ipRestriction?: WindowsWebAppSlotSiteConfigIpRestriction[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#load_balancing_mode WindowsWebAppSlot#load_balancing_mode}
  */
  readonly loadBalancingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#local_mysql_enabled WindowsWebAppSlot#local_mysql_enabled}
  */
  readonly localMysqlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#managed_pipeline_mode WindowsWebAppSlot#managed_pipeline_mode}
  */
  readonly managedPipelineMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#minimum_tls_version WindowsWebAppSlot#minimum_tls_version}
  */
  readonly minimumTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#remote_debugging_enabled WindowsWebAppSlot#remote_debugging_enabled}
  */
  readonly remoteDebuggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#remote_debugging_version WindowsWebAppSlot#remote_debugging_version}
  */
  readonly remoteDebuggingVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#scm_ip_restriction WindowsWebAppSlot#scm_ip_restriction}
  */
  readonly scmIpRestriction?: WindowsWebAppSlotSiteConfigScmIpRestriction[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#scm_minimum_tls_version WindowsWebAppSlot#scm_minimum_tls_version}
  */
  readonly scmMinimumTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#scm_use_main_ip_restriction WindowsWebAppSlot#scm_use_main_ip_restriction}
  */
  readonly scmUseMainIpRestriction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#use_32_bit_worker WindowsWebAppSlot#use_32_bit_worker}
  */
  readonly use32BitWorker?: boolean | cdktf.IResolvable;
  /**
  * Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#vnet_route_all_enabled WindowsWebAppSlot#vnet_route_all_enabled}
  */
  readonly vnetRouteAllEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#websockets_enabled WindowsWebAppSlot#websockets_enabled}
  */
  readonly websocketsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#worker_count WindowsWebAppSlot#worker_count}
  */
  readonly workerCount?: number;
  /**
  * application_stack block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#application_stack WindowsWebAppSlot#application_stack}
  */
  readonly applicationStack?: WindowsWebAppSlotSiteConfigApplicationStack;
  /**
  * auto_heal_setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#auto_heal_setting WindowsWebAppSlot#auto_heal_setting}
  */
  readonly autoHealSetting?: WindowsWebAppSlotSiteConfigAutoHealSetting;
  /**
  * cors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#cors WindowsWebAppSlot#cors}
  */
  readonly cors?: WindowsWebAppSlotSiteConfigCors;
  /**
  * virtual_application block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#virtual_application WindowsWebAppSlot#virtual_application}
  */
  readonly virtualApplication?: WindowsWebAppSlotSiteConfigVirtualApplication[] | cdktf.IResolvable;
}

export function windowsWebAppSlotSiteConfigToTerraform(struct?: WindowsWebAppSlotSiteConfigOutputReference | WindowsWebAppSlotSiteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_on: cdktf.booleanToTerraform(struct!.alwaysOn),
    api_definition_url: cdktf.stringToTerraform(struct!.apiDefinitionUrl),
    api_management_api_id: cdktf.stringToTerraform(struct!.apiManagementApiId),
    app_command_line: cdktf.stringToTerraform(struct!.appCommandLine),
    auto_heal_enabled: cdktf.booleanToTerraform(struct!.autoHealEnabled),
    auto_swap_slot_name: cdktf.stringToTerraform(struct!.autoSwapSlotName),
    container_registry_managed_identity_client_id: cdktf.stringToTerraform(struct!.containerRegistryManagedIdentityClientId),
    container_registry_use_managed_identity: cdktf.booleanToTerraform(struct!.containerRegistryUseManagedIdentity),
    default_documents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultDocuments),
    ftps_state: cdktf.stringToTerraform(struct!.ftpsState),
    health_check_eviction_time_in_min: cdktf.numberToTerraform(struct!.healthCheckEvictionTimeInMin),
    health_check_path: cdktf.stringToTerraform(struct!.healthCheckPath),
    http2_enabled: cdktf.booleanToTerraform(struct!.http2Enabled),
    ip_restriction: cdktf.listMapper(windowsWebAppSlotSiteConfigIpRestrictionToTerraform, false)(struct!.ipRestriction),
    load_balancing_mode: cdktf.stringToTerraform(struct!.loadBalancingMode),
    local_mysql_enabled: cdktf.booleanToTerraform(struct!.localMysqlEnabled),
    managed_pipeline_mode: cdktf.stringToTerraform(struct!.managedPipelineMode),
    minimum_tls_version: cdktf.stringToTerraform(struct!.minimumTlsVersion),
    remote_debugging_enabled: cdktf.booleanToTerraform(struct!.remoteDebuggingEnabled),
    remote_debugging_version: cdktf.stringToTerraform(struct!.remoteDebuggingVersion),
    scm_ip_restriction: cdktf.listMapper(windowsWebAppSlotSiteConfigScmIpRestrictionToTerraform, false)(struct!.scmIpRestriction),
    scm_minimum_tls_version: cdktf.stringToTerraform(struct!.scmMinimumTlsVersion),
    scm_use_main_ip_restriction: cdktf.booleanToTerraform(struct!.scmUseMainIpRestriction),
    use_32_bit_worker: cdktf.booleanToTerraform(struct!.use32BitWorker),
    vnet_route_all_enabled: cdktf.booleanToTerraform(struct!.vnetRouteAllEnabled),
    websockets_enabled: cdktf.booleanToTerraform(struct!.websocketsEnabled),
    worker_count: cdktf.numberToTerraform(struct!.workerCount),
    application_stack: windowsWebAppSlotSiteConfigApplicationStackToTerraform(struct!.applicationStack),
    auto_heal_setting: windowsWebAppSlotSiteConfigAutoHealSettingToTerraform(struct!.autoHealSetting),
    cors: windowsWebAppSlotSiteConfigCorsToTerraform(struct!.cors),
    virtual_application: cdktf.listMapper(windowsWebAppSlotSiteConfigVirtualApplicationToTerraform, true)(struct!.virtualApplication),
  }
}

export class WindowsWebAppSlotSiteConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotSiteConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysOn = this._alwaysOn;
    }
    if (this._apiDefinitionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDefinitionUrl = this._apiDefinitionUrl;
    }
    if (this._apiManagementApiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiManagementApiId = this._apiManagementApiId;
    }
    if (this._appCommandLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.appCommandLine = this._appCommandLine;
    }
    if (this._autoHealEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHealEnabled = this._autoHealEnabled;
    }
    if (this._autoSwapSlotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSwapSlotName = this._autoSwapSlotName;
    }
    if (this._containerRegistryManagedIdentityClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerRegistryManagedIdentityClientId = this._containerRegistryManagedIdentityClientId;
    }
    if (this._containerRegistryUseManagedIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerRegistryUseManagedIdentity = this._containerRegistryUseManagedIdentity;
    }
    if (this._defaultDocuments !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDocuments = this._defaultDocuments;
    }
    if (this._ftpsState !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpsState = this._ftpsState;
    }
    if (this._healthCheckEvictionTimeInMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckEvictionTimeInMin = this._healthCheckEvictionTimeInMin;
    }
    if (this._healthCheckPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPath = this._healthCheckPath;
    }
    if (this._http2Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Enabled = this._http2Enabled;
    }
    if (this._ipRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRestriction = this._ipRestriction?.internalValue;
    }
    if (this._loadBalancingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingMode = this._loadBalancingMode;
    }
    if (this._localMysqlEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMysqlEnabled = this._localMysqlEnabled;
    }
    if (this._managedPipelineMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedPipelineMode = this._managedPipelineMode;
    }
    if (this._minimumTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumTlsVersion = this._minimumTlsVersion;
    }
    if (this._remoteDebuggingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDebuggingEnabled = this._remoteDebuggingEnabled;
    }
    if (this._remoteDebuggingVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDebuggingVersion = this._remoteDebuggingVersion;
    }
    if (this._scmIpRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scmIpRestriction = this._scmIpRestriction?.internalValue;
    }
    if (this._scmMinimumTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.scmMinimumTlsVersion = this._scmMinimumTlsVersion;
    }
    if (this._scmUseMainIpRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.scmUseMainIpRestriction = this._scmUseMainIpRestriction;
    }
    if (this._use32BitWorker !== undefined) {
      hasAnyValues = true;
      internalValueResult.use32BitWorker = this._use32BitWorker;
    }
    if (this._vnetRouteAllEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetRouteAllEnabled = this._vnetRouteAllEnabled;
    }
    if (this._websocketsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.websocketsEnabled = this._websocketsEnabled;
    }
    if (this._workerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerCount = this._workerCount;
    }
    if (this._applicationStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationStack = this._applicationStack?.internalValue;
    }
    if (this._autoHealSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHealSetting = this._autoHealSetting?.internalValue;
    }
    if (this._cors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors?.internalValue;
    }
    if (this._virtualApplication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualApplication = this._virtualApplication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotSiteConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysOn = undefined;
      this._apiDefinitionUrl = undefined;
      this._apiManagementApiId = undefined;
      this._appCommandLine = undefined;
      this._autoHealEnabled = undefined;
      this._autoSwapSlotName = undefined;
      this._containerRegistryManagedIdentityClientId = undefined;
      this._containerRegistryUseManagedIdentity = undefined;
      this._defaultDocuments = undefined;
      this._ftpsState = undefined;
      this._healthCheckEvictionTimeInMin = undefined;
      this._healthCheckPath = undefined;
      this._http2Enabled = undefined;
      this._ipRestriction.internalValue = undefined;
      this._loadBalancingMode = undefined;
      this._localMysqlEnabled = undefined;
      this._managedPipelineMode = undefined;
      this._minimumTlsVersion = undefined;
      this._remoteDebuggingEnabled = undefined;
      this._remoteDebuggingVersion = undefined;
      this._scmIpRestriction.internalValue = undefined;
      this._scmMinimumTlsVersion = undefined;
      this._scmUseMainIpRestriction = undefined;
      this._use32BitWorker = undefined;
      this._vnetRouteAllEnabled = undefined;
      this._websocketsEnabled = undefined;
      this._workerCount = undefined;
      this._applicationStack.internalValue = undefined;
      this._autoHealSetting.internalValue = undefined;
      this._cors.internalValue = undefined;
      this._virtualApplication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysOn = value.alwaysOn;
      this._apiDefinitionUrl = value.apiDefinitionUrl;
      this._apiManagementApiId = value.apiManagementApiId;
      this._appCommandLine = value.appCommandLine;
      this._autoHealEnabled = value.autoHealEnabled;
      this._autoSwapSlotName = value.autoSwapSlotName;
      this._containerRegistryManagedIdentityClientId = value.containerRegistryManagedIdentityClientId;
      this._containerRegistryUseManagedIdentity = value.containerRegistryUseManagedIdentity;
      this._defaultDocuments = value.defaultDocuments;
      this._ftpsState = value.ftpsState;
      this._healthCheckEvictionTimeInMin = value.healthCheckEvictionTimeInMin;
      this._healthCheckPath = value.healthCheckPath;
      this._http2Enabled = value.http2Enabled;
      this._ipRestriction.internalValue = value.ipRestriction;
      this._loadBalancingMode = value.loadBalancingMode;
      this._localMysqlEnabled = value.localMysqlEnabled;
      this._managedPipelineMode = value.managedPipelineMode;
      this._minimumTlsVersion = value.minimumTlsVersion;
      this._remoteDebuggingEnabled = value.remoteDebuggingEnabled;
      this._remoteDebuggingVersion = value.remoteDebuggingVersion;
      this._scmIpRestriction.internalValue = value.scmIpRestriction;
      this._scmMinimumTlsVersion = value.scmMinimumTlsVersion;
      this._scmUseMainIpRestriction = value.scmUseMainIpRestriction;
      this._use32BitWorker = value.use32BitWorker;
      this._vnetRouteAllEnabled = value.vnetRouteAllEnabled;
      this._websocketsEnabled = value.websocketsEnabled;
      this._workerCount = value.workerCount;
      this._applicationStack.internalValue = value.applicationStack;
      this._autoHealSetting.internalValue = value.autoHealSetting;
      this._cors.internalValue = value.cors;
      this._virtualApplication.internalValue = value.virtualApplication;
    }
  }

  // always_on - computed: false, optional: true, required: false
  private _alwaysOn?: boolean | cdktf.IResolvable; 
  public get alwaysOn() {
    return this.getBooleanAttribute('always_on');
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

  // api_definition_url - computed: false, optional: true, required: false
  private _apiDefinitionUrl?: string; 
  public get apiDefinitionUrl() {
    return this.getStringAttribute('api_definition_url');
  }
  public set apiDefinitionUrl(value: string) {
    this._apiDefinitionUrl = value;
  }
  public resetApiDefinitionUrl() {
    this._apiDefinitionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDefinitionUrlInput() {
    return this._apiDefinitionUrl;
  }

  // api_management_api_id - computed: false, optional: true, required: false
  private _apiManagementApiId?: string; 
  public get apiManagementApiId() {
    return this.getStringAttribute('api_management_api_id');
  }
  public set apiManagementApiId(value: string) {
    this._apiManagementApiId = value;
  }
  public resetApiManagementApiId() {
    this._apiManagementApiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementApiIdInput() {
    return this._apiManagementApiId;
  }

  // app_command_line - computed: false, optional: true, required: false
  private _appCommandLine?: string; 
  public get appCommandLine() {
    return this.getStringAttribute('app_command_line');
  }
  public set appCommandLine(value: string) {
    this._appCommandLine = value;
  }
  public resetAppCommandLine() {
    this._appCommandLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCommandLineInput() {
    return this._appCommandLine;
  }

  // auto_heal_enabled - computed: false, optional: true, required: false
  private _autoHealEnabled?: boolean | cdktf.IResolvable; 
  public get autoHealEnabled() {
    return this.getBooleanAttribute('auto_heal_enabled');
  }
  public set autoHealEnabled(value: boolean | cdktf.IResolvable) {
    this._autoHealEnabled = value;
  }
  public resetAutoHealEnabled() {
    this._autoHealEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealEnabledInput() {
    return this._autoHealEnabled;
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

  // container_registry_managed_identity_client_id - computed: false, optional: true, required: false
  private _containerRegistryManagedIdentityClientId?: string; 
  public get containerRegistryManagedIdentityClientId() {
    return this.getStringAttribute('container_registry_managed_identity_client_id');
  }
  public set containerRegistryManagedIdentityClientId(value: string) {
    this._containerRegistryManagedIdentityClientId = value;
  }
  public resetContainerRegistryManagedIdentityClientId() {
    this._containerRegistryManagedIdentityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryManagedIdentityClientIdInput() {
    return this._containerRegistryManagedIdentityClientId;
  }

  // container_registry_use_managed_identity - computed: false, optional: true, required: false
  private _containerRegistryUseManagedIdentity?: boolean | cdktf.IResolvable; 
  public get containerRegistryUseManagedIdentity() {
    return this.getBooleanAttribute('container_registry_use_managed_identity');
  }
  public set containerRegistryUseManagedIdentity(value: boolean | cdktf.IResolvable) {
    this._containerRegistryUseManagedIdentity = value;
  }
  public resetContainerRegistryUseManagedIdentity() {
    this._containerRegistryUseManagedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryUseManagedIdentityInput() {
    return this._containerRegistryUseManagedIdentity;
  }

  // default_documents - computed: true, optional: true, required: false
  private _defaultDocuments?: string[]; 
  public get defaultDocuments() {
    return this.getListAttribute('default_documents');
  }
  public set defaultDocuments(value: string[]) {
    this._defaultDocuments = value;
  }
  public resetDefaultDocuments() {
    this._defaultDocuments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDocumentsInput() {
    return this._defaultDocuments;
  }

  // detailed_error_logging_enabled - computed: true, optional: false, required: false
  public get detailedErrorLoggingEnabled() {
    return this.getBooleanAttribute('detailed_error_logging_enabled');
  }

  // ftps_state - computed: false, optional: true, required: false
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

  // health_check_eviction_time_in_min - computed: true, optional: true, required: false
  private _healthCheckEvictionTimeInMin?: number; 
  public get healthCheckEvictionTimeInMin() {
    return this.getNumberAttribute('health_check_eviction_time_in_min');
  }
  public set healthCheckEvictionTimeInMin(value: number) {
    this._healthCheckEvictionTimeInMin = value;
  }
  public resetHealthCheckEvictionTimeInMin() {
    this._healthCheckEvictionTimeInMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckEvictionTimeInMinInput() {
    return this._healthCheckEvictionTimeInMin;
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
    return this.getBooleanAttribute('http2_enabled');
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
  private _ipRestriction = new WindowsWebAppSlotSiteConfigIpRestrictionList(this, "ip_restriction", false);
  public get ipRestriction() {
    return this._ipRestriction;
  }
  public putIpRestriction(value: WindowsWebAppSlotSiteConfigIpRestriction[] | cdktf.IResolvable) {
    this._ipRestriction.internalValue = value;
  }
  public resetIpRestriction() {
    this._ipRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionInput() {
    return this._ipRestriction.internalValue;
  }

  // load_balancing_mode - computed: false, optional: true, required: false
  private _loadBalancingMode?: string; 
  public get loadBalancingMode() {
    return this.getStringAttribute('load_balancing_mode');
  }
  public set loadBalancingMode(value: string) {
    this._loadBalancingMode = value;
  }
  public resetLoadBalancingMode() {
    this._loadBalancingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingModeInput() {
    return this._loadBalancingMode;
  }

  // local_mysql_enabled - computed: false, optional: true, required: false
  private _localMysqlEnabled?: boolean | cdktf.IResolvable; 
  public get localMysqlEnabled() {
    return this.getBooleanAttribute('local_mysql_enabled');
  }
  public set localMysqlEnabled(value: boolean | cdktf.IResolvable) {
    this._localMysqlEnabled = value;
  }
  public resetLocalMysqlEnabled() {
    this._localMysqlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localMysqlEnabledInput() {
    return this._localMysqlEnabled;
  }

  // managed_pipeline_mode - computed: false, optional: true, required: false
  private _managedPipelineMode?: string; 
  public get managedPipelineMode() {
    return this.getStringAttribute('managed_pipeline_mode');
  }
  public set managedPipelineMode(value: string) {
    this._managedPipelineMode = value;
  }
  public resetManagedPipelineMode() {
    this._managedPipelineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPipelineModeInput() {
    return this._managedPipelineMode;
  }

  // minimum_tls_version - computed: false, optional: true, required: false
  private _minimumTlsVersion?: string; 
  public get minimumTlsVersion() {
    return this.getStringAttribute('minimum_tls_version');
  }
  public set minimumTlsVersion(value: string) {
    this._minimumTlsVersion = value;
  }
  public resetMinimumTlsVersion() {
    this._minimumTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumTlsVersionInput() {
    return this._minimumTlsVersion;
  }

  // remote_debugging_enabled - computed: false, optional: true, required: false
  private _remoteDebuggingEnabled?: boolean | cdktf.IResolvable; 
  public get remoteDebuggingEnabled() {
    return this.getBooleanAttribute('remote_debugging_enabled');
  }
  public set remoteDebuggingEnabled(value: boolean | cdktf.IResolvable) {
    this._remoteDebuggingEnabled = value;
  }
  public resetRemoteDebuggingEnabled() {
    this._remoteDebuggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDebuggingEnabledInput() {
    return this._remoteDebuggingEnabled;
  }

  // remote_debugging_version - computed: true, optional: true, required: false
  private _remoteDebuggingVersion?: string; 
  public get remoteDebuggingVersion() {
    return this.getStringAttribute('remote_debugging_version');
  }
  public set remoteDebuggingVersion(value: string) {
    this._remoteDebuggingVersion = value;
  }
  public resetRemoteDebuggingVersion() {
    this._remoteDebuggingVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDebuggingVersionInput() {
    return this._remoteDebuggingVersion;
  }

  // scm_ip_restriction - computed: true, optional: true, required: false
  private _scmIpRestriction = new WindowsWebAppSlotSiteConfigScmIpRestrictionList(this, "scm_ip_restriction", false);
  public get scmIpRestriction() {
    return this._scmIpRestriction;
  }
  public putScmIpRestriction(value: WindowsWebAppSlotSiteConfigScmIpRestriction[] | cdktf.IResolvable) {
    this._scmIpRestriction.internalValue = value;
  }
  public resetScmIpRestriction() {
    this._scmIpRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmIpRestrictionInput() {
    return this._scmIpRestriction.internalValue;
  }

  // scm_minimum_tls_version - computed: false, optional: true, required: false
  private _scmMinimumTlsVersion?: string; 
  public get scmMinimumTlsVersion() {
    return this.getStringAttribute('scm_minimum_tls_version');
  }
  public set scmMinimumTlsVersion(value: string) {
    this._scmMinimumTlsVersion = value;
  }
  public resetScmMinimumTlsVersion() {
    this._scmMinimumTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmMinimumTlsVersionInput() {
    return this._scmMinimumTlsVersion;
  }

  // scm_type - computed: true, optional: false, required: false
  public get scmType() {
    return this.getStringAttribute('scm_type');
  }

  // scm_use_main_ip_restriction - computed: false, optional: true, required: false
  private _scmUseMainIpRestriction?: boolean | cdktf.IResolvable; 
  public get scmUseMainIpRestriction() {
    return this.getBooleanAttribute('scm_use_main_ip_restriction');
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

  // use_32_bit_worker - computed: true, optional: true, required: false
  private _use32BitWorker?: boolean | cdktf.IResolvable; 
  public get use32BitWorker() {
    return this.getBooleanAttribute('use_32_bit_worker');
  }
  public set use32BitWorker(value: boolean | cdktf.IResolvable) {
    this._use32BitWorker = value;
  }
  public resetUse32BitWorker() {
    this._use32BitWorker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get use32BitWorkerInput() {
    return this._use32BitWorker;
  }

  // vnet_route_all_enabled - computed: false, optional: true, required: false
  private _vnetRouteAllEnabled?: boolean | cdktf.IResolvable; 
  public get vnetRouteAllEnabled() {
    return this.getBooleanAttribute('vnet_route_all_enabled');
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
    return this.getBooleanAttribute('websockets_enabled');
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

  // windows_fx_version - computed: true, optional: false, required: false
  public get windowsFxVersion() {
    return this.getStringAttribute('windows_fx_version');
  }

  // worker_count - computed: true, optional: true, required: false
  private _workerCount?: number; 
  public get workerCount() {
    return this.getNumberAttribute('worker_count');
  }
  public set workerCount(value: number) {
    this._workerCount = value;
  }
  public resetWorkerCount() {
    this._workerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerCountInput() {
    return this._workerCount;
  }

  // application_stack - computed: false, optional: true, required: false
  private _applicationStack = new WindowsWebAppSlotSiteConfigApplicationStackOutputReference(this, "application_stack");
  public get applicationStack() {
    return this._applicationStack;
  }
  public putApplicationStack(value: WindowsWebAppSlotSiteConfigApplicationStack) {
    this._applicationStack.internalValue = value;
  }
  public resetApplicationStack() {
    this._applicationStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationStackInput() {
    return this._applicationStack.internalValue;
  }

  // auto_heal_setting - computed: false, optional: true, required: false
  private _autoHealSetting = new WindowsWebAppSlotSiteConfigAutoHealSettingOutputReference(this, "auto_heal_setting");
  public get autoHealSetting() {
    return this._autoHealSetting;
  }
  public putAutoHealSetting(value: WindowsWebAppSlotSiteConfigAutoHealSetting) {
    this._autoHealSetting.internalValue = value;
  }
  public resetAutoHealSetting() {
    this._autoHealSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealSettingInput() {
    return this._autoHealSetting.internalValue;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new WindowsWebAppSlotSiteConfigCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: WindowsWebAppSlotSiteConfigCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // virtual_application - computed: false, optional: true, required: false
  private _virtualApplication = new WindowsWebAppSlotSiteConfigVirtualApplicationList(this, "virtual_application", true);
  public get virtualApplication() {
    return this._virtualApplication;
  }
  public putVirtualApplication(value: WindowsWebAppSlotSiteConfigVirtualApplication[] | cdktf.IResolvable) {
    this._virtualApplication.internalValue = value;
  }
  public resetVirtualApplication() {
    this._virtualApplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualApplicationInput() {
    return this._virtualApplication.internalValue;
  }
}
export interface WindowsWebAppSlotStorageAccount {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#access_key WindowsWebAppSlot#access_key}
  */
  readonly accessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#account_name WindowsWebAppSlot#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#mount_path WindowsWebAppSlot#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#name WindowsWebAppSlot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#share_name WindowsWebAppSlot#share_name}
  */
  readonly shareName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#type WindowsWebAppSlot#type}
  */
  readonly type: string;
}

export function windowsWebAppSlotStorageAccountToTerraform(struct?: WindowsWebAppSlotStorageAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    account_name: cdktf.stringToTerraform(struct!.accountName),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    share_name: cdktf.stringToTerraform(struct!.shareName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class WindowsWebAppSlotStorageAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsWebAppSlotStorageAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotStorageAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._accountName = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._shareName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._accountName = value.accountName;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._shareName = value.shareName;
      this._type = value.type;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // share_name - computed: false, optional: false, required: true
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
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

export class WindowsWebAppSlotStorageAccountList extends cdktf.ComplexList {
  public internalValue? : WindowsWebAppSlotStorageAccount[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsWebAppSlotStorageAccountOutputReference {
    return new WindowsWebAppSlotStorageAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsWebAppSlotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#create WindowsWebAppSlot#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#delete WindowsWebAppSlot#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#read WindowsWebAppSlot#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot#update WindowsWebAppSlot#update}
  */
  readonly update?: string;
}

export function windowsWebAppSlotTimeoutsToTerraform(struct?: WindowsWebAppSlotTimeoutsOutputReference | WindowsWebAppSlotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class WindowsWebAppSlotTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsWebAppSlotTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsWebAppSlotTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot azurerm_windows_web_app_slot}
*/
export class WindowsWebAppSlot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_windows_web_app_slot";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/windows_web_app_slot azurerm_windows_web_app_slot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WindowsWebAppSlotConfig
  */
  public constructor(scope: Construct, id: string, config: WindowsWebAppSlotConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_windows_web_app_slot',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.21.1',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appServiceId = config.appServiceId;
    this._appSettings = config.appSettings;
    this._clientAffinityEnabled = config.clientAffinityEnabled;
    this._clientCertificateEnabled = config.clientCertificateEnabled;
    this._clientCertificateMode = config.clientCertificateMode;
    this._enabled = config.enabled;
    this._httpsOnly = config.httpsOnly;
    this._id = config.id;
    this._keyVaultReferenceIdentityId = config.keyVaultReferenceIdentityId;
    this._name = config.name;
    this._tags = config.tags;
    this._virtualNetworkSubnetId = config.virtualNetworkSubnetId;
    this._zipDeployFile = config.zipDeployFile;
    this._authSettings.internalValue = config.authSettings;
    this._backup.internalValue = config.backup;
    this._connectionString.internalValue = config.connectionString;
    this._identity.internalValue = config.identity;
    this._logs.internalValue = config.logs;
    this._siteConfig.internalValue = config.siteConfig;
    this._storageAccount.internalValue = config.storageAccount;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_id - computed: false, optional: false, required: true
  private _appServiceId?: string; 
  public get appServiceId() {
    return this.getStringAttribute('app_service_id');
  }
  public set appServiceId(value: string) {
    this._appServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceIdInput() {
    return this._appServiceId;
  }

  // app_settings - computed: false, optional: true, required: false
  private _appSettings?: { [key: string]: string }; 
  public get appSettings() {
    return this.getStringMapAttribute('app_settings');
  }
  public set appSettings(value: { [key: string]: string }) {
    this._appSettings = value;
  }
  public resetAppSettings() {
    this._appSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSettingsInput() {
    return this._appSettings;
  }

  // client_affinity_enabled - computed: false, optional: true, required: false
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
    return this._clientAffinityEnabled;
  }

  // client_certificate_enabled - computed: false, optional: true, required: false
  private _clientCertificateEnabled?: boolean | cdktf.IResolvable; 
  public get clientCertificateEnabled() {
    return this.getBooleanAttribute('client_certificate_enabled');
  }
  public set clientCertificateEnabled(value: boolean | cdktf.IResolvable) {
    this._clientCertificateEnabled = value;
  }
  public resetClientCertificateEnabled() {
    this._clientCertificateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateEnabledInput() {
    return this._clientCertificateEnabled;
  }

  // client_certificate_mode - computed: false, optional: true, required: false
  private _clientCertificateMode?: string; 
  public get clientCertificateMode() {
    return this.getStringAttribute('client_certificate_mode');
  }
  public set clientCertificateMode(value: string) {
    this._clientCertificateMode = value;
  }
  public resetClientCertificateMode() {
    this._clientCertificateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateModeInput() {
    return this._clientCertificateMode;
  }

  // custom_domain_verification_id - computed: true, optional: false, required: false
  public get customDomainVerificationId() {
    return this.getStringAttribute('custom_domain_verification_id');
  }

  // default_hostname - computed: true, optional: false, required: false
  public get defaultHostname() {
    return this.getStringAttribute('default_hostname');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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
    return this.getBooleanAttribute('https_only');
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // site_credential - computed: true, optional: false, required: false
  private _siteCredential = new WindowsWebAppSlotSiteCredentialList(this, "site_credential", false);
  public get siteCredential() {
    return this._siteCredential;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // virtual_network_subnet_id - computed: false, optional: true, required: false
  private _virtualNetworkSubnetId?: string; 
  public get virtualNetworkSubnetId() {
    return this.getStringAttribute('virtual_network_subnet_id');
  }
  public set virtualNetworkSubnetId(value: string) {
    this._virtualNetworkSubnetId = value;
  }
  public resetVirtualNetworkSubnetId() {
    this._virtualNetworkSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSubnetIdInput() {
    return this._virtualNetworkSubnetId;
  }

  // zip_deploy_file - computed: true, optional: true, required: false
  private _zipDeployFile?: string; 
  public get zipDeployFile() {
    return this.getStringAttribute('zip_deploy_file');
  }
  public set zipDeployFile(value: string) {
    this._zipDeployFile = value;
  }
  public resetZipDeployFile() {
    this._zipDeployFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipDeployFileInput() {
    return this._zipDeployFile;
  }

  // auth_settings - computed: false, optional: true, required: false
  private _authSettings = new WindowsWebAppSlotAuthSettingsOutputReference(this, "auth_settings");
  public get authSettings() {
    return this._authSettings;
  }
  public putAuthSettings(value: WindowsWebAppSlotAuthSettings) {
    this._authSettings.internalValue = value;
  }
  public resetAuthSettings() {
    this._authSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSettingsInput() {
    return this._authSettings.internalValue;
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new WindowsWebAppSlotBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: WindowsWebAppSlotBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString = new WindowsWebAppSlotConnectionStringList(this, "connection_string", true);
  public get connectionString() {
    return this._connectionString;
  }
  public putConnectionString(value: WindowsWebAppSlotConnectionString[] | cdktf.IResolvable) {
    this._connectionString.internalValue = value;
  }
  public resetConnectionString() {
    this._connectionString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new WindowsWebAppSlotIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: WindowsWebAppSlotIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new WindowsWebAppSlotLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: WindowsWebAppSlotLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // site_config - computed: false, optional: false, required: true
  private _siteConfig = new WindowsWebAppSlotSiteConfigOutputReference(this, "site_config");
  public get siteConfig() {
    return this._siteConfig;
  }
  public putSiteConfig(value: WindowsWebAppSlotSiteConfig) {
    this._siteConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteConfigInput() {
    return this._siteConfig.internalValue;
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount = new WindowsWebAppSlotStorageAccountList(this, "storage_account", true);
  public get storageAccount() {
    return this._storageAccount;
  }
  public putStorageAccount(value: WindowsWebAppSlotStorageAccount[] | cdktf.IResolvable) {
    this._storageAccount.internalValue = value;
  }
  public resetStorageAccount() {
    this._storageAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WindowsWebAppSlotTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WindowsWebAppSlotTimeouts) {
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
      app_service_id: cdktf.stringToTerraform(this._appServiceId),
      app_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._appSettings),
      client_affinity_enabled: cdktf.booleanToTerraform(this._clientAffinityEnabled),
      client_certificate_enabled: cdktf.booleanToTerraform(this._clientCertificateEnabled),
      client_certificate_mode: cdktf.stringToTerraform(this._clientCertificateMode),
      enabled: cdktf.booleanToTerraform(this._enabled),
      https_only: cdktf.booleanToTerraform(this._httpsOnly),
      id: cdktf.stringToTerraform(this._id),
      key_vault_reference_identity_id: cdktf.stringToTerraform(this._keyVaultReferenceIdentityId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      virtual_network_subnet_id: cdktf.stringToTerraform(this._virtualNetworkSubnetId),
      zip_deploy_file: cdktf.stringToTerraform(this._zipDeployFile),
      auth_settings: windowsWebAppSlotAuthSettingsToTerraform(this._authSettings.internalValue),
      backup: windowsWebAppSlotBackupToTerraform(this._backup.internalValue),
      connection_string: cdktf.listMapper(windowsWebAppSlotConnectionStringToTerraform, true)(this._connectionString.internalValue),
      identity: windowsWebAppSlotIdentityToTerraform(this._identity.internalValue),
      logs: windowsWebAppSlotLogsToTerraform(this._logs.internalValue),
      site_config: windowsWebAppSlotSiteConfigToTerraform(this._siteConfig.internalValue),
      storage_account: cdktf.listMapper(windowsWebAppSlotStorageAccountToTerraform, true)(this._storageAccount.internalValue),
      timeouts: windowsWebAppSlotTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
