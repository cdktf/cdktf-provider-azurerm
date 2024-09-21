// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinuxWebAppSlotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#app_service_id LinuxWebAppSlot#app_service_id}
  */
  readonly appServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#app_settings LinuxWebAppSlot#app_settings}
  */
  readonly appSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_affinity_enabled LinuxWebAppSlot#client_affinity_enabled}
  */
  readonly clientAffinityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_certificate_enabled LinuxWebAppSlot#client_certificate_enabled}
  */
  readonly clientCertificateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Paths to exclude when using client certificates, separated by ;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_certificate_exclusion_paths LinuxWebAppSlot#client_certificate_exclusion_paths}
  */
  readonly clientCertificateExclusionPaths?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_certificate_mode LinuxWebAppSlot#client_certificate_mode}
  */
  readonly clientCertificateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#enabled LinuxWebAppSlot#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#ftp_publish_basic_authentication_enabled LinuxWebAppSlot#ftp_publish_basic_authentication_enabled}
  */
  readonly ftpPublishBasicAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#https_only LinuxWebAppSlot#https_only}
  */
  readonly httpsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#id LinuxWebAppSlot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#key_vault_reference_identity_id LinuxWebAppSlot#key_vault_reference_identity_id}
  */
  readonly keyVaultReferenceIdentityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#name LinuxWebAppSlot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#public_network_access_enabled LinuxWebAppSlot#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#service_plan_id LinuxWebAppSlot#service_plan_id}
  */
  readonly servicePlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#tags LinuxWebAppSlot#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#virtual_network_subnet_id LinuxWebAppSlot#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#webdeploy_publish_basic_authentication_enabled LinuxWebAppSlot#webdeploy_publish_basic_authentication_enabled}
  */
  readonly webdeployPublishBasicAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The local path and filename of the Zip packaged application to deploy to this Windows Web App. **Note:** Using this value requires `WEBSITE_RUN_FROM_PACKAGE=1` on the App in `app_settings`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#zip_deploy_file LinuxWebAppSlot#zip_deploy_file}
  */
  readonly zipDeployFile?: string;
  /**
  * auth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#auth_settings LinuxWebAppSlot#auth_settings}
  */
  readonly authSettings?: LinuxWebAppSlotAuthSettings;
  /**
  * auth_settings_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#auth_settings_v2 LinuxWebAppSlot#auth_settings_v2}
  */
  readonly authSettingsV2?: LinuxWebAppSlotAuthSettingsV2;
  /**
  * backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#backup LinuxWebAppSlot#backup}
  */
  readonly backup?: LinuxWebAppSlotBackup;
  /**
  * connection_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#connection_string LinuxWebAppSlot#connection_string}
  */
  readonly connectionString?: LinuxWebAppSlotConnectionString[] | cdktf.IResolvable;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#identity LinuxWebAppSlot#identity}
  */
  readonly identity?: LinuxWebAppSlotIdentity;
  /**
  * logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#logs LinuxWebAppSlot#logs}
  */
  readonly logs?: LinuxWebAppSlotLogs;
  /**
  * site_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#site_config LinuxWebAppSlot#site_config}
  */
  readonly siteConfig: LinuxWebAppSlotSiteConfig;
  /**
  * storage_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#storage_account LinuxWebAppSlot#storage_account}
  */
  readonly storageAccount?: LinuxWebAppSlotStorageAccount[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#timeouts LinuxWebAppSlot#timeouts}
  */
  readonly timeouts?: LinuxWebAppSlotTimeouts;
}
export interface LinuxWebAppSlotSiteCredential {
}

export function linuxWebAppSlotSiteCredentialToTerraform(struct?: LinuxWebAppSlotSiteCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function linuxWebAppSlotSiteCredentialToHclTerraform(struct?: LinuxWebAppSlotSiteCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LinuxWebAppSlotSiteCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LinuxWebAppSlotSiteCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotSiteCredential | undefined) {
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

export class LinuxWebAppSlotSiteCredentialList extends cdktf.ComplexList {

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
  public get(index: number): LinuxWebAppSlotSiteCredentialOutputReference {
    return new LinuxWebAppSlotSiteCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxWebAppSlotAuthSettingsActiveDirectory {
  /**
  * Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#allowed_audiences LinuxWebAppSlot#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * The ID of the Client to use to authenticate with Azure Active Directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_id LinuxWebAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_secret LinuxWebAppSlot#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_secret_setting_name LinuxWebAppSlot#client_secret_setting_name}
  */
  readonly clientSecretSettingName?: string;
}

export function linuxWebAppSlotAuthSettingsActiveDirectoryToTerraform(struct?: LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference | LinuxWebAppSlotAuthSettingsActiveDirectory): any {
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


export function linuxWebAppSlotAuthSettingsActiveDirectoryToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference | LinuxWebAppSlotAuthSettingsActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAudiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_setting_name: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretSettingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsActiveDirectory | undefined {
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

  public set internalValue(value: LinuxWebAppSlotAuthSettingsActiveDirectory | undefined) {
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
export interface LinuxWebAppSlotAuthSettingsFacebook {
  /**
  * The App ID of the Facebook app used for login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#app_id LinuxWebAppSlot#app_id}
  */
  readonly appId: string;
  /**
  * The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#app_secret LinuxWebAppSlot#app_secret}
  */
  readonly appSecret?: string;
  /**
  * The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#app_secret_setting_name LinuxWebAppSlot#app_secret_setting_name}
  */
  readonly appSecretSettingName?: string;
  /**
  * Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#oauth_scopes LinuxWebAppSlot#oauth_scopes}
  */
  readonly oauthScopes?: string[];
}

export function linuxWebAppSlotAuthSettingsFacebookToTerraform(struct?: LinuxWebAppSlotAuthSettingsFacebookOutputReference | LinuxWebAppSlotAuthSettingsFacebook): any {
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


export function linuxWebAppSlotAuthSettingsFacebookToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsFacebookOutputReference | LinuxWebAppSlotAuthSettingsFacebook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_secret: {
      value: cdktf.stringToHclTerraform(struct!.appSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_secret_setting_name: {
      value: cdktf.stringToHclTerraform(struct!.appSecretSettingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsFacebookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsFacebook | undefined {
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

  public set internalValue(value: LinuxWebAppSlotAuthSettingsFacebook | undefined) {
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
export interface LinuxWebAppSlotAuthSettingsGithub {
  /**
  * The ID of the GitHub app used for login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_id LinuxWebAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_secret LinuxWebAppSlot#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_secret_setting_name LinuxWebAppSlot#client_secret_setting_name}
  */
  readonly clientSecretSettingName?: string;
  /**
  * Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#oauth_scopes LinuxWebAppSlot#oauth_scopes}
  */
  readonly oauthScopes?: string[];
}

export function linuxWebAppSlotAuthSettingsGithubToTerraform(struct?: LinuxWebAppSlotAuthSettingsGithubOutputReference | LinuxWebAppSlotAuthSettingsGithub): any {
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


export function linuxWebAppSlotAuthSettingsGithubToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsGithubOutputReference | LinuxWebAppSlotAuthSettingsGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_setting_name: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretSettingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsGithub | undefined {
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

  public set internalValue(value: LinuxWebAppSlotAuthSettingsGithub | undefined) {
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
export interface LinuxWebAppSlotAuthSettingsGoogle {
  /**
  * The OpenID Connect Client ID for the Google web application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_id LinuxWebAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_secret LinuxWebAppSlot#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_secret_setting_name LinuxWebAppSlot#client_secret_setting_name}
  */
  readonly clientSecretSettingName?: string;
  /**
  * Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#oauth_scopes LinuxWebAppSlot#oauth_scopes}
  */
  readonly oauthScopes?: string[];
}

export function linuxWebAppSlotAuthSettingsGoogleToTerraform(struct?: LinuxWebAppSlotAuthSettingsGoogleOutputReference | LinuxWebAppSlotAuthSettingsGoogle): any {
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


export function linuxWebAppSlotAuthSettingsGoogleToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsGoogleOutputReference | LinuxWebAppSlotAuthSettingsGoogle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_setting_name: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretSettingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsGoogleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsGoogle | undefined {
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

  public set internalValue(value: LinuxWebAppSlotAuthSettingsGoogle | undefined) {
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
export interface LinuxWebAppSlotAuthSettingsMicrosoft {
  /**
  * The OAuth 2.0 client ID that was created for the app used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_id LinuxWebAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_secret LinuxWebAppSlot#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_secret_setting_name LinuxWebAppSlot#client_secret_setting_name}
  */
  readonly clientSecretSettingName?: string;
  /**
  * The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#oauth_scopes LinuxWebAppSlot#oauth_scopes}
  */
  readonly oauthScopes?: string[];
}

export function linuxWebAppSlotAuthSettingsMicrosoftToTerraform(struct?: LinuxWebAppSlotAuthSettingsMicrosoftOutputReference | LinuxWebAppSlotAuthSettingsMicrosoft): any {
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


export function linuxWebAppSlotAuthSettingsMicrosoftToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsMicrosoftOutputReference | LinuxWebAppSlotAuthSettingsMicrosoft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_setting_name: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretSettingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsMicrosoftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsMicrosoft | undefined {
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

  public set internalValue(value: LinuxWebAppSlotAuthSettingsMicrosoft | undefined) {
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
export interface LinuxWebAppSlotAuthSettingsTwitter {
  /**
  * The OAuth 1.0a consumer key of the Twitter application used for sign-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#consumer_key LinuxWebAppSlot#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#consumer_secret LinuxWebAppSlot#consumer_secret}
  */
  readonly consumerSecret?: string;
  /**
  * The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#consumer_secret_setting_name LinuxWebAppSlot#consumer_secret_setting_name}
  */
  readonly consumerSecretSettingName?: string;
}

export function linuxWebAppSlotAuthSettingsTwitterToTerraform(struct?: LinuxWebAppSlotAuthSettingsTwitterOutputReference | LinuxWebAppSlotAuthSettingsTwitter): any {
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


export function linuxWebAppSlotAuthSettingsTwitterToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsTwitterOutputReference | LinuxWebAppSlotAuthSettingsTwitter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_key: {
      value: cdktf.stringToHclTerraform(struct!.consumerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_secret: {
      value: cdktf.stringToHclTerraform(struct!.consumerSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_secret_setting_name: {
      value: cdktf.stringToHclTerraform(struct!.consumerSecretSettingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsTwitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsTwitter | undefined {
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

  public set internalValue(value: LinuxWebAppSlotAuthSettingsTwitter | undefined) {
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
export interface LinuxWebAppSlotAuthSettings {
  /**
  * Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#additional_login_parameters LinuxWebAppSlot#additional_login_parameters}
  */
  readonly additionalLoginParameters?: { [key: string]: string };
  /**
  * Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#allowed_external_redirect_urls LinuxWebAppSlot#allowed_external_redirect_urls}
  */
  readonly allowedExternalRedirectUrls?: string[];
  /**
  * The default authentication provider to use when multiple providers are configured. Possible values include: `AzureActiveDirectory`, `Facebook`, `Google`, `MicrosoftAccount`, `Twitter`, `Github`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#default_provider LinuxWebAppSlot#default_provider}
  */
  readonly defaultProvider?: string;
  /**
  * Should the Authentication / Authorization feature be enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#enabled LinuxWebAppSlot#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The OpenID Connect Issuer URI that represents the entity which issues access tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#issuer LinuxWebAppSlot#issuer}
  */
  readonly issuer?: string;
  /**
  * The RuntimeVersion of the Authentication / Authorization feature in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#runtime_version LinuxWebAppSlot#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * The number of hours after session token expiration that a session token can be used to call the token refresh API. Defaults to `72` hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#token_refresh_extension_hours LinuxWebAppSlot#token_refresh_extension_hours}
  */
  readonly tokenRefreshExtensionHours?: number;
  /**
  * Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#token_store_enabled LinuxWebAppSlot#token_store_enabled}
  */
  readonly tokenStoreEnabled?: boolean | cdktf.IResolvable;
  /**
  * The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#unauthenticated_client_action LinuxWebAppSlot#unauthenticated_client_action}
  */
  readonly unauthenticatedClientAction?: string;
  /**
  * active_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#active_directory LinuxWebAppSlot#active_directory}
  */
  readonly activeDirectory?: LinuxWebAppSlotAuthSettingsActiveDirectory;
  /**
  * facebook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#facebook LinuxWebAppSlot#facebook}
  */
  readonly facebook?: LinuxWebAppSlotAuthSettingsFacebook;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#github LinuxWebAppSlot#github}
  */
  readonly github?: LinuxWebAppSlotAuthSettingsGithub;
  /**
  * google block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#google LinuxWebAppSlot#google}
  */
  readonly google?: LinuxWebAppSlotAuthSettingsGoogle;
  /**
  * microsoft block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#microsoft LinuxWebAppSlot#microsoft}
  */
  readonly microsoft?: LinuxWebAppSlotAuthSettingsMicrosoft;
  /**
  * twitter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#twitter LinuxWebAppSlot#twitter}
  */
  readonly twitter?: LinuxWebAppSlotAuthSettingsTwitter;
}

export function linuxWebAppSlotAuthSettingsToTerraform(struct?: LinuxWebAppSlotAuthSettingsOutputReference | LinuxWebAppSlotAuthSettings): any {
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
    active_directory: linuxWebAppSlotAuthSettingsActiveDirectoryToTerraform(struct!.activeDirectory),
    facebook: linuxWebAppSlotAuthSettingsFacebookToTerraform(struct!.facebook),
    github: linuxWebAppSlotAuthSettingsGithubToTerraform(struct!.github),
    google: linuxWebAppSlotAuthSettingsGoogleToTerraform(struct!.google),
    microsoft: linuxWebAppSlotAuthSettingsMicrosoftToTerraform(struct!.microsoft),
    twitter: linuxWebAppSlotAuthSettingsTwitterToTerraform(struct!.twitter),
  }
}


export function linuxWebAppSlotAuthSettingsToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsOutputReference | LinuxWebAppSlotAuthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_login_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalLoginParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    allowed_external_redirect_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedExternalRedirectUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_provider: {
      value: cdktf.stringToHclTerraform(struct!.defaultProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_refresh_extension_hours: {
      value: cdktf.numberToHclTerraform(struct!.tokenRefreshExtensionHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_store_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tokenStoreEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unauthenticated_client_action: {
      value: cdktf.stringToHclTerraform(struct!.unauthenticatedClientAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_directory: {
      value: linuxWebAppSlotAuthSettingsActiveDirectoryToHclTerraform(struct!.activeDirectory),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsActiveDirectoryList",
    },
    facebook: {
      value: linuxWebAppSlotAuthSettingsFacebookToHclTerraform(struct!.facebook),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsFacebookList",
    },
    github: {
      value: linuxWebAppSlotAuthSettingsGithubToHclTerraform(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsGithubList",
    },
    google: {
      value: linuxWebAppSlotAuthSettingsGoogleToHclTerraform(struct!.google),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsGoogleList",
    },
    microsoft: {
      value: linuxWebAppSlotAuthSettingsMicrosoftToHclTerraform(struct!.microsoft),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsMicrosoftList",
    },
    twitter: {
      value: linuxWebAppSlotAuthSettingsTwitterToHclTerraform(struct!.twitter),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsTwitterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettings | undefined {
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

  public set internalValue(value: LinuxWebAppSlotAuthSettings | undefined) {
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
  private _activeDirectory = new LinuxWebAppSlotAuthSettingsActiveDirectoryOutputReference(this, "active_directory");
  public get activeDirectory() {
    return this._activeDirectory;
  }
  public putActiveDirectory(value: LinuxWebAppSlotAuthSettingsActiveDirectory) {
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
  private _facebook = new LinuxWebAppSlotAuthSettingsFacebookOutputReference(this, "facebook");
  public get facebook() {
    return this._facebook;
  }
  public putFacebook(value: LinuxWebAppSlotAuthSettingsFacebook) {
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
  private _github = new LinuxWebAppSlotAuthSettingsGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: LinuxWebAppSlotAuthSettingsGithub) {
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
  private _google = new LinuxWebAppSlotAuthSettingsGoogleOutputReference(this, "google");
  public get google() {
    return this._google;
  }
  public putGoogle(value: LinuxWebAppSlotAuthSettingsGoogle) {
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
  private _microsoft = new LinuxWebAppSlotAuthSettingsMicrosoftOutputReference(this, "microsoft");
  public get microsoft() {
    return this._microsoft;
  }
  public putMicrosoft(value: LinuxWebAppSlotAuthSettingsMicrosoft) {
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
  private _twitter = new LinuxWebAppSlotAuthSettingsTwitterOutputReference(this, "twitter");
  public get twitter() {
    return this._twitter;
  }
  public putTwitter(value: LinuxWebAppSlotAuthSettingsTwitter) {
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
export interface LinuxWebAppSlotAuthSettingsV2ActiveDirectoryV2 {
  /**
  * The list of allowed Applications for the Default Authorisation Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#allowed_applications LinuxWebAppSlot#allowed_applications}
  */
  readonly allowedApplications?: string[];
  /**
  * Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#allowed_audiences LinuxWebAppSlot#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * The list of allowed Group Names for the Default Authorisation Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#allowed_groups LinuxWebAppSlot#allowed_groups}
  */
  readonly allowedGroups?: string[];
  /**
  * The list of allowed Identities for the Default Authorisation Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#allowed_identities LinuxWebAppSlot#allowed_identities}
  */
  readonly allowedIdentities?: string[];
  /**
  * The ID of the Client to use to authenticate with Azure Active Directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_id LinuxWebAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * The thumbprint of the certificate used for signing purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_secret_certificate_thumbprint LinuxWebAppSlot#client_secret_certificate_thumbprint}
  */
  readonly clientSecretCertificateThumbprint?: string;
  /**
  * The App Setting name that contains the client secret of the Client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_secret_setting_name LinuxWebAppSlot#client_secret_setting_name}
  */
  readonly clientSecretSettingName?: string;
  /**
  * A list of Allowed Client Applications in the JWT Claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#jwt_allowed_client_applications LinuxWebAppSlot#jwt_allowed_client_applications}
  */
  readonly jwtAllowedClientApplications?: string[];
  /**
  * A list of Allowed Groups in the JWT Claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#jwt_allowed_groups LinuxWebAppSlot#jwt_allowed_groups}
  */
  readonly jwtAllowedGroups?: string[];
  /**
  * A map of key-value pairs to send to the Authorisation Endpoint when a user logs in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#login_parameters LinuxWebAppSlot#login_parameters}
  */
  readonly loginParameters?: { [key: string]: string };
  /**
  * The Azure Tenant Endpoint for the Authenticating Tenant. e.g. `https://login.microsoftonline.com/v2.0/{tenant-guid}/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#tenant_auth_endpoint LinuxWebAppSlot#tenant_auth_endpoint}
  */
  readonly tenantAuthEndpoint: string;
  /**
  * Should the www-authenticate provider should be omitted from the request? Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#www_authentication_disabled LinuxWebAppSlot#www_authentication_disabled}
  */
  readonly wwwAuthenticationDisabled?: boolean | cdktf.IResolvable;
}

export function linuxWebAppSlotAuthSettingsV2ActiveDirectoryV2ToTerraform(struct?: LinuxWebAppSlotAuthSettingsV2ActiveDirectoryV2OutputReference | LinuxWebAppSlotAuthSettingsV2ActiveDirectoryV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedApplications),
    allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAudiences),
    allowed_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedGroups),
    allowed_identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIdentities),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_certificate_thumbprint: cdktf.stringToTerraform(struct!.clientSecretCertificateThumbprint),
    client_secret_setting_name: cdktf.stringToTerraform(struct!.clientSecretSettingName),
    jwt_allowed_client_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jwtAllowedClientApplications),
    jwt_allowed_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jwtAllowedGroups),
    login_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.loginParameters),
    tenant_auth_endpoint: cdktf.stringToTerraform(struct!.tenantAuthEndpoint),
    www_authentication_disabled: cdktf.booleanToTerraform(struct!.wwwAuthenticationDisabled),
  }
}


export function linuxWebAppSlotAuthSettingsV2ActiveDirectoryV2ToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsV2ActiveDirectoryV2OutputReference | LinuxWebAppSlotAuthSettingsV2ActiveDirectoryV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedApplications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAudiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_identities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedIdentities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_certificate_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretCertificateThumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_setting_name: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretSettingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_allowed_client_applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jwtAllowedClientApplications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jwt_allowed_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jwtAllowedGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    login_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.loginParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tenant_auth_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tenantAuthEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    www_authentication_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.wwwAuthenticationDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsV2ActiveDirectoryV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsV2ActiveDirectoryV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedApplications !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedApplications = this._allowedApplications;
    }
    if (this._allowedAudiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAudiences = this._allowedAudiences;
    }
    if (this._allowedGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedGroups = this._allowedGroups;
    }
    if (this._allowedIdentities !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIdentities = this._allowedIdentities;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretCertificateThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretCertificateThumbprint = this._clientSecretCertificateThumbprint;
    }
    if (this._clientSecretSettingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSettingName = this._clientSecretSettingName;
    }
    if (this._jwtAllowedClientApplications !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtAllowedClientApplications = this._jwtAllowedClientApplications;
    }
    if (this._jwtAllowedGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtAllowedGroups = this._jwtAllowedGroups;
    }
    if (this._loginParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginParameters = this._loginParameters;
    }
    if (this._tenantAuthEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantAuthEndpoint = this._tenantAuthEndpoint;
    }
    if (this._wwwAuthenticationDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwwAuthenticationDisabled = this._wwwAuthenticationDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotAuthSettingsV2ActiveDirectoryV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedApplications = undefined;
      this._allowedAudiences = undefined;
      this._allowedGroups = undefined;
      this._allowedIdentities = undefined;
      this._clientId = undefined;
      this._clientSecretCertificateThumbprint = undefined;
      this._clientSecretSettingName = undefined;
      this._jwtAllowedClientApplications = undefined;
      this._jwtAllowedGroups = undefined;
      this._loginParameters = undefined;
      this._tenantAuthEndpoint = undefined;
      this._wwwAuthenticationDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedApplications = value.allowedApplications;
      this._allowedAudiences = value.allowedAudiences;
      this._allowedGroups = value.allowedGroups;
      this._allowedIdentities = value.allowedIdentities;
      this._clientId = value.clientId;
      this._clientSecretCertificateThumbprint = value.clientSecretCertificateThumbprint;
      this._clientSecretSettingName = value.clientSecretSettingName;
      this._jwtAllowedClientApplications = value.jwtAllowedClientApplications;
      this._jwtAllowedGroups = value.jwtAllowedGroups;
      this._loginParameters = value.loginParameters;
      this._tenantAuthEndpoint = value.tenantAuthEndpoint;
      this._wwwAuthenticationDisabled = value.wwwAuthenticationDisabled;
    }
  }

  // allowed_applications - computed: false, optional: true, required: false
  private _allowedApplications?: string[]; 
  public get allowedApplications() {
    return this.getListAttribute('allowed_applications');
  }
  public set allowedApplications(value: string[]) {
    this._allowedApplications = value;
  }
  public resetAllowedApplications() {
    this._allowedApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedApplicationsInput() {
    return this._allowedApplications;
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

  // allowed_groups - computed: false, optional: true, required: false
  private _allowedGroups?: string[]; 
  public get allowedGroups() {
    return this.getListAttribute('allowed_groups');
  }
  public set allowedGroups(value: string[]) {
    this._allowedGroups = value;
  }
  public resetAllowedGroups() {
    this._allowedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedGroupsInput() {
    return this._allowedGroups;
  }

  // allowed_identities - computed: false, optional: true, required: false
  private _allowedIdentities?: string[]; 
  public get allowedIdentities() {
    return this.getListAttribute('allowed_identities');
  }
  public set allowedIdentities(value: string[]) {
    this._allowedIdentities = value;
  }
  public resetAllowedIdentities() {
    this._allowedIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIdentitiesInput() {
    return this._allowedIdentities;
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

  // client_secret_certificate_thumbprint - computed: false, optional: true, required: false
  private _clientSecretCertificateThumbprint?: string; 
  public get clientSecretCertificateThumbprint() {
    return this.getStringAttribute('client_secret_certificate_thumbprint');
  }
  public set clientSecretCertificateThumbprint(value: string) {
    this._clientSecretCertificateThumbprint = value;
  }
  public resetClientSecretCertificateThumbprint() {
    this._clientSecretCertificateThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretCertificateThumbprintInput() {
    return this._clientSecretCertificateThumbprint;
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

  // jwt_allowed_client_applications - computed: false, optional: true, required: false
  private _jwtAllowedClientApplications?: string[]; 
  public get jwtAllowedClientApplications() {
    return this.getListAttribute('jwt_allowed_client_applications');
  }
  public set jwtAllowedClientApplications(value: string[]) {
    this._jwtAllowedClientApplications = value;
  }
  public resetJwtAllowedClientApplications() {
    this._jwtAllowedClientApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtAllowedClientApplicationsInput() {
    return this._jwtAllowedClientApplications;
  }

  // jwt_allowed_groups - computed: false, optional: true, required: false
  private _jwtAllowedGroups?: string[]; 
  public get jwtAllowedGroups() {
    return this.getListAttribute('jwt_allowed_groups');
  }
  public set jwtAllowedGroups(value: string[]) {
    this._jwtAllowedGroups = value;
  }
  public resetJwtAllowedGroups() {
    this._jwtAllowedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtAllowedGroupsInput() {
    return this._jwtAllowedGroups;
  }

  // login_parameters - computed: false, optional: true, required: false
  private _loginParameters?: { [key: string]: string }; 
  public get loginParameters() {
    return this.getStringMapAttribute('login_parameters');
  }
  public set loginParameters(value: { [key: string]: string }) {
    this._loginParameters = value;
  }
  public resetLoginParameters() {
    this._loginParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginParametersInput() {
    return this._loginParameters;
  }

  // tenant_auth_endpoint - computed: false, optional: false, required: true
  private _tenantAuthEndpoint?: string; 
  public get tenantAuthEndpoint() {
    return this.getStringAttribute('tenant_auth_endpoint');
  }
  public set tenantAuthEndpoint(value: string) {
    this._tenantAuthEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantAuthEndpointInput() {
    return this._tenantAuthEndpoint;
  }

  // www_authentication_disabled - computed: false, optional: true, required: false
  private _wwwAuthenticationDisabled?: boolean | cdktf.IResolvable; 
  public get wwwAuthenticationDisabled() {
    return this.getBooleanAttribute('www_authentication_disabled');
  }
  public set wwwAuthenticationDisabled(value: boolean | cdktf.IResolvable) {
    this._wwwAuthenticationDisabled = value;
  }
  public resetWwwAuthenticationDisabled() {
    this._wwwAuthenticationDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwwAuthenticationDisabledInput() {
    return this._wwwAuthenticationDisabled;
  }
}
export interface LinuxWebAppSlotAuthSettingsV2AppleV2 {
  /**
  * The OpenID Connect Client ID for the Apple web application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_id LinuxWebAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * The app setting name that contains the `client_secret` value used for Apple Login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_secret_setting_name LinuxWebAppSlot#client_secret_setting_name}
  */
  readonly clientSecretSettingName: string;
}

export function linuxWebAppSlotAuthSettingsV2AppleV2ToTerraform(struct?: LinuxWebAppSlotAuthSettingsV2AppleV2OutputReference | LinuxWebAppSlotAuthSettingsV2AppleV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_setting_name: cdktf.stringToTerraform(struct!.clientSecretSettingName),
  }
}


export function linuxWebAppSlotAuthSettingsV2AppleV2ToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsV2AppleV2OutputReference | LinuxWebAppSlotAuthSettingsV2AppleV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_setting_name: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretSettingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsV2AppleV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsV2AppleV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretSettingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSettingName = this._clientSecretSettingName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotAuthSettingsV2AppleV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecretSettingName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecretSettingName = value.clientSecretSettingName;
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

  // client_secret_setting_name - computed: false, optional: false, required: true
  private _clientSecretSettingName?: string; 
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }
  public set clientSecretSettingName(value: string) {
    this._clientSecretSettingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSettingNameInput() {
    return this._clientSecretSettingName;
  }

  // login_scopes - computed: true, optional: false, required: false
  public get loginScopes() {
    return this.getListAttribute('login_scopes');
  }
}
export interface LinuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2 {
  /**
  * The ID of the Client to use to authenticate with Azure Static Web App Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_id LinuxWebAppSlot#client_id}
  */
  readonly clientId: string;
}

export function linuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2ToTerraform(struct?: LinuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2OutputReference | LinuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
  }
}


export function linuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2ToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2OutputReference | LinuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
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
}
export interface LinuxWebAppSlotAuthSettingsV2CustomOidcV2 {
  /**
  * The ID of the Client to use to authenticate with this Custom OIDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_id LinuxWebAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * The name of the Custom OIDC Authentication Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#name LinuxWebAppSlot#name}
  */
  readonly name: string;
  /**
  * The name of the claim that contains the users name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#name_claim_type LinuxWebAppSlot#name_claim_type}
  */
  readonly nameClaimType?: string;
  /**
  * The endpoint that contains all the configuration endpoints for this Custom OIDC provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#openid_configuration_endpoint LinuxWebAppSlot#openid_configuration_endpoint}
  */
  readonly openidConfigurationEndpoint: string;
  /**
  * The list of the scopes that should be requested while authenticating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#scopes LinuxWebAppSlot#scopes}
  */
  readonly scopes?: string[];
}

export function linuxWebAppSlotAuthSettingsV2CustomOidcV2ToTerraform(struct?: LinuxWebAppSlotAuthSettingsV2CustomOidcV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    name: cdktf.stringToTerraform(struct!.name),
    name_claim_type: cdktf.stringToTerraform(struct!.nameClaimType),
    openid_configuration_endpoint: cdktf.stringToTerraform(struct!.openidConfigurationEndpoint),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function linuxWebAppSlotAuthSettingsV2CustomOidcV2ToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsV2CustomOidcV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_claim_type: {
      value: cdktf.stringToHclTerraform(struct!.nameClaimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    openid_configuration_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.openidConfigurationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsV2CustomOidcV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LinuxWebAppSlotAuthSettingsV2CustomOidcV2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameClaimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameClaimType = this._nameClaimType;
    }
    if (this._openidConfigurationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.openidConfigurationEndpoint = this._openidConfigurationEndpoint;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotAuthSettingsV2CustomOidcV2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._name = undefined;
      this._nameClaimType = undefined;
      this._openidConfigurationEndpoint = undefined;
      this._scopes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._name = value.name;
      this._nameClaimType = value.nameClaimType;
      this._openidConfigurationEndpoint = value.openidConfigurationEndpoint;
      this._scopes = value.scopes;
    }
  }

  // authorisation_endpoint - computed: true, optional: false, required: false
  public get authorisationEndpoint() {
    return this.getStringAttribute('authorisation_endpoint');
  }

  // certification_uri - computed: true, optional: false, required: false
  public get certificationUri() {
    return this.getStringAttribute('certification_uri');
  }

  // client_credential_method - computed: true, optional: false, required: false
  public get clientCredentialMethod() {
    return this.getStringAttribute('client_credential_method');
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

  // client_secret_setting_name - computed: true, optional: false, required: false
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }

  // issuer_endpoint - computed: true, optional: false, required: false
  public get issuerEndpoint() {
    return this.getStringAttribute('issuer_endpoint');
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

  // name_claim_type - computed: false, optional: true, required: false
  private _nameClaimType?: string; 
  public get nameClaimType() {
    return this.getStringAttribute('name_claim_type');
  }
  public set nameClaimType(value: string) {
    this._nameClaimType = value;
  }
  public resetNameClaimType() {
    this._nameClaimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameClaimTypeInput() {
    return this._nameClaimType;
  }

  // openid_configuration_endpoint - computed: false, optional: false, required: true
  private _openidConfigurationEndpoint?: string; 
  public get openidConfigurationEndpoint() {
    return this.getStringAttribute('openid_configuration_endpoint');
  }
  public set openidConfigurationEndpoint(value: string) {
    this._openidConfigurationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openidConfigurationEndpointInput() {
    return this._openidConfigurationEndpoint;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
}

export class LinuxWebAppSlotAuthSettingsV2CustomOidcV2List extends cdktf.ComplexList {
  public internalValue? : LinuxWebAppSlotAuthSettingsV2CustomOidcV2[] | cdktf.IResolvable

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
  public get(index: number): LinuxWebAppSlotAuthSettingsV2CustomOidcV2OutputReference {
    return new LinuxWebAppSlotAuthSettingsV2CustomOidcV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxWebAppSlotAuthSettingsV2FacebookV2 {
  /**
  * The App ID of the Facebook app used for login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#app_id LinuxWebAppSlot#app_id}
  */
  readonly appId: string;
  /**
  * The app setting name that contains the `app_secret` value used for Facebook Login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#app_secret_setting_name LinuxWebAppSlot#app_secret_setting_name}
  */
  readonly appSecretSettingName: string;
  /**
  * The version of the Facebook API to be used while logging in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#graph_api_version LinuxWebAppSlot#graph_api_version}
  */
  readonly graphApiVersion?: string;
  /**
  * Specifies a list of scopes to be requested as part of Facebook Login authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#login_scopes LinuxWebAppSlot#login_scopes}
  */
  readonly loginScopes?: string[];
}

export function linuxWebAppSlotAuthSettingsV2FacebookV2ToTerraform(struct?: LinuxWebAppSlotAuthSettingsV2FacebookV2OutputReference | LinuxWebAppSlotAuthSettingsV2FacebookV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_secret_setting_name: cdktf.stringToTerraform(struct!.appSecretSettingName),
    graph_api_version: cdktf.stringToTerraform(struct!.graphApiVersion),
    login_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginScopes),
  }
}


export function linuxWebAppSlotAuthSettingsV2FacebookV2ToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsV2FacebookV2OutputReference | LinuxWebAppSlotAuthSettingsV2FacebookV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_secret_setting_name: {
      value: cdktf.stringToHclTerraform(struct!.appSecretSettingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graph_api_version: {
      value: cdktf.stringToHclTerraform(struct!.graphApiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loginScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsV2FacebookV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsV2FacebookV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._appSecretSettingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSecretSettingName = this._appSecretSettingName;
    }
    if (this._graphApiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphApiVersion = this._graphApiVersion;
    }
    if (this._loginScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginScopes = this._loginScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotAuthSettingsV2FacebookV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appId = undefined;
      this._appSecretSettingName = undefined;
      this._graphApiVersion = undefined;
      this._loginScopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appId = value.appId;
      this._appSecretSettingName = value.appSecretSettingName;
      this._graphApiVersion = value.graphApiVersion;
      this._loginScopes = value.loginScopes;
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

  // app_secret_setting_name - computed: false, optional: false, required: true
  private _appSecretSettingName?: string; 
  public get appSecretSettingName() {
    return this.getStringAttribute('app_secret_setting_name');
  }
  public set appSecretSettingName(value: string) {
    this._appSecretSettingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecretSettingNameInput() {
    return this._appSecretSettingName;
  }

  // graph_api_version - computed: true, optional: true, required: false
  private _graphApiVersion?: string; 
  public get graphApiVersion() {
    return this.getStringAttribute('graph_api_version');
  }
  public set graphApiVersion(value: string) {
    this._graphApiVersion = value;
  }
  public resetGraphApiVersion() {
    this._graphApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphApiVersionInput() {
    return this._graphApiVersion;
  }

  // login_scopes - computed: false, optional: true, required: false
  private _loginScopes?: string[]; 
  public get loginScopes() {
    return this.getListAttribute('login_scopes');
  }
  public set loginScopes(value: string[]) {
    this._loginScopes = value;
  }
  public resetLoginScopes() {
    this._loginScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginScopesInput() {
    return this._loginScopes;
  }
}
export interface LinuxWebAppSlotAuthSettingsV2GithubV2 {
  /**
  * The ID of the GitHub app used for login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_id LinuxWebAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * The app setting name that contains the `client_secret` value used for GitHub Login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_secret_setting_name LinuxWebAppSlot#client_secret_setting_name}
  */
  readonly clientSecretSettingName: string;
  /**
  * Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#login_scopes LinuxWebAppSlot#login_scopes}
  */
  readonly loginScopes?: string[];
}

export function linuxWebAppSlotAuthSettingsV2GithubV2ToTerraform(struct?: LinuxWebAppSlotAuthSettingsV2GithubV2OutputReference | LinuxWebAppSlotAuthSettingsV2GithubV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_setting_name: cdktf.stringToTerraform(struct!.clientSecretSettingName),
    login_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginScopes),
  }
}


export function linuxWebAppSlotAuthSettingsV2GithubV2ToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsV2GithubV2OutputReference | LinuxWebAppSlotAuthSettingsV2GithubV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_setting_name: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretSettingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loginScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsV2GithubV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsV2GithubV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretSettingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSettingName = this._clientSecretSettingName;
    }
    if (this._loginScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginScopes = this._loginScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotAuthSettingsV2GithubV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecretSettingName = undefined;
      this._loginScopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecretSettingName = value.clientSecretSettingName;
      this._loginScopes = value.loginScopes;
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

  // client_secret_setting_name - computed: false, optional: false, required: true
  private _clientSecretSettingName?: string; 
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }
  public set clientSecretSettingName(value: string) {
    this._clientSecretSettingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSettingNameInput() {
    return this._clientSecretSettingName;
  }

  // login_scopes - computed: false, optional: true, required: false
  private _loginScopes?: string[]; 
  public get loginScopes() {
    return this.getListAttribute('login_scopes');
  }
  public set loginScopes(value: string[]) {
    this._loginScopes = value;
  }
  public resetLoginScopes() {
    this._loginScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginScopesInput() {
    return this._loginScopes;
  }
}
export interface LinuxWebAppSlotAuthSettingsV2GoogleV2 {
  /**
  * Specifies a list of Allowed Audiences that will be requested as part of Google Sign-In authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#allowed_audiences LinuxWebAppSlot#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * The OpenID Connect Client ID for the Google web application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_id LinuxWebAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * The app setting name that contains the `client_secret` value used for Google Login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_secret_setting_name LinuxWebAppSlot#client_secret_setting_name}
  */
  readonly clientSecretSettingName: string;
  /**
  * Specifies a list of Login scopes that will be requested as part of Google Sign-In authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#login_scopes LinuxWebAppSlot#login_scopes}
  */
  readonly loginScopes?: string[];
}

export function linuxWebAppSlotAuthSettingsV2GoogleV2ToTerraform(struct?: LinuxWebAppSlotAuthSettingsV2GoogleV2OutputReference | LinuxWebAppSlotAuthSettingsV2GoogleV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAudiences),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_setting_name: cdktf.stringToTerraform(struct!.clientSecretSettingName),
    login_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginScopes),
  }
}


export function linuxWebAppSlotAuthSettingsV2GoogleV2ToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsV2GoogleV2OutputReference | LinuxWebAppSlotAuthSettingsV2GoogleV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAudiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_setting_name: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretSettingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loginScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsV2GoogleV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsV2GoogleV2 | undefined {
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
    if (this._clientSecretSettingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSettingName = this._clientSecretSettingName;
    }
    if (this._loginScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginScopes = this._loginScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotAuthSettingsV2GoogleV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedAudiences = undefined;
      this._clientId = undefined;
      this._clientSecretSettingName = undefined;
      this._loginScopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedAudiences = value.allowedAudiences;
      this._clientId = value.clientId;
      this._clientSecretSettingName = value.clientSecretSettingName;
      this._loginScopes = value.loginScopes;
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

  // client_secret_setting_name - computed: false, optional: false, required: true
  private _clientSecretSettingName?: string; 
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }
  public set clientSecretSettingName(value: string) {
    this._clientSecretSettingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSettingNameInput() {
    return this._clientSecretSettingName;
  }

  // login_scopes - computed: false, optional: true, required: false
  private _loginScopes?: string[]; 
  public get loginScopes() {
    return this.getListAttribute('login_scopes');
  }
  public set loginScopes(value: string[]) {
    this._loginScopes = value;
  }
  public resetLoginScopes() {
    this._loginScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginScopesInput() {
    return this._loginScopes;
  }
}
export interface LinuxWebAppSlotAuthSettingsV2Login {
  /**
  * External URLs that can be redirected to as part of logging in or logging out of the app. This is an advanced setting typically only needed by Windows Store application backends. **Note:** URLs within the current domain are always implicitly allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#allowed_external_redirect_urls LinuxWebAppSlot#allowed_external_redirect_urls}
  */
  readonly allowedExternalRedirectUrls?: string[];
  /**
  * The method by which cookies expire. Possible values include: `FixedTime`, and `IdentityProviderDerived`. Defaults to `FixedTime`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#cookie_expiration_convention LinuxWebAppSlot#cookie_expiration_convention}
  */
  readonly cookieExpirationConvention?: string;
  /**
  * The time after the request is made when the session cookie should expire. Defaults to `08:00:00`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#cookie_expiration_time LinuxWebAppSlot#cookie_expiration_time}
  */
  readonly cookieExpirationTime?: string;
  /**
  * The endpoint to which logout requests should be made.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#logout_endpoint LinuxWebAppSlot#logout_endpoint}
  */
  readonly logoutEndpoint?: string;
  /**
  * The time after the request is made when the nonce should expire. Defaults to `00:05:00`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#nonce_expiration_time LinuxWebAppSlot#nonce_expiration_time}
  */
  readonly nonceExpirationTime?: string;
  /**
  * Should the fragments from the request be preserved after the login request is made. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#preserve_url_fragments_for_logins LinuxWebAppSlot#preserve_url_fragments_for_logins}
  */
  readonly preserveUrlFragmentsForLogins?: boolean | cdktf.IResolvable;
  /**
  * The number of hours after session token expiration that a session token can be used to call the token refresh API. Defaults to `72` hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#token_refresh_extension_time LinuxWebAppSlot#token_refresh_extension_time}
  */
  readonly tokenRefreshExtensionTime?: number;
  /**
  * Should the Token Store configuration Enabled. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#token_store_enabled LinuxWebAppSlot#token_store_enabled}
  */
  readonly tokenStoreEnabled?: boolean | cdktf.IResolvable;
  /**
  * The directory path in the App Filesystem in which the tokens will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#token_store_path LinuxWebAppSlot#token_store_path}
  */
  readonly tokenStorePath?: string;
  /**
  * The name of the app setting which contains the SAS URL of the blob storage containing the tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#token_store_sas_setting_name LinuxWebAppSlot#token_store_sas_setting_name}
  */
  readonly tokenStoreSasSettingName?: string;
  /**
  * Should the nonce be validated while completing the login flow. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#validate_nonce LinuxWebAppSlot#validate_nonce}
  */
  readonly validateNonce?: boolean | cdktf.IResolvable;
}

export function linuxWebAppSlotAuthSettingsV2LoginToTerraform(struct?: LinuxWebAppSlotAuthSettingsV2LoginOutputReference | LinuxWebAppSlotAuthSettingsV2Login): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_external_redirect_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedExternalRedirectUrls),
    cookie_expiration_convention: cdktf.stringToTerraform(struct!.cookieExpirationConvention),
    cookie_expiration_time: cdktf.stringToTerraform(struct!.cookieExpirationTime),
    logout_endpoint: cdktf.stringToTerraform(struct!.logoutEndpoint),
    nonce_expiration_time: cdktf.stringToTerraform(struct!.nonceExpirationTime),
    preserve_url_fragments_for_logins: cdktf.booleanToTerraform(struct!.preserveUrlFragmentsForLogins),
    token_refresh_extension_time: cdktf.numberToTerraform(struct!.tokenRefreshExtensionTime),
    token_store_enabled: cdktf.booleanToTerraform(struct!.tokenStoreEnabled),
    token_store_path: cdktf.stringToTerraform(struct!.tokenStorePath),
    token_store_sas_setting_name: cdktf.stringToTerraform(struct!.tokenStoreSasSettingName),
    validate_nonce: cdktf.booleanToTerraform(struct!.validateNonce),
  }
}


export function linuxWebAppSlotAuthSettingsV2LoginToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsV2LoginOutputReference | LinuxWebAppSlotAuthSettingsV2Login): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_external_redirect_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedExternalRedirectUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cookie_expiration_convention: {
      value: cdktf.stringToHclTerraform(struct!.cookieExpirationConvention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.cookieExpirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.logoutEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nonce_expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.nonceExpirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_url_fragments_for_logins: {
      value: cdktf.booleanToHclTerraform(struct!.preserveUrlFragmentsForLogins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_refresh_extension_time: {
      value: cdktf.numberToHclTerraform(struct!.tokenRefreshExtensionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_store_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tokenStoreEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_store_path: {
      value: cdktf.stringToHclTerraform(struct!.tokenStorePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_store_sas_setting_name: {
      value: cdktf.stringToHclTerraform(struct!.tokenStoreSasSettingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate_nonce: {
      value: cdktf.booleanToHclTerraform(struct!.validateNonce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsV2LoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsV2Login | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExternalRedirectUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExternalRedirectUrls = this._allowedExternalRedirectUrls;
    }
    if (this._cookieExpirationConvention !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpirationConvention = this._cookieExpirationConvention;
    }
    if (this._cookieExpirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpirationTime = this._cookieExpirationTime;
    }
    if (this._logoutEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutEndpoint = this._logoutEndpoint;
    }
    if (this._nonceExpirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonceExpirationTime = this._nonceExpirationTime;
    }
    if (this._preserveUrlFragmentsForLogins !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveUrlFragmentsForLogins = this._preserveUrlFragmentsForLogins;
    }
    if (this._tokenRefreshExtensionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRefreshExtensionTime = this._tokenRefreshExtensionTime;
    }
    if (this._tokenStoreEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenStoreEnabled = this._tokenStoreEnabled;
    }
    if (this._tokenStorePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenStorePath = this._tokenStorePath;
    }
    if (this._tokenStoreSasSettingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenStoreSasSettingName = this._tokenStoreSasSettingName;
    }
    if (this._validateNonce !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateNonce = this._validateNonce;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotAuthSettingsV2Login | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedExternalRedirectUrls = undefined;
      this._cookieExpirationConvention = undefined;
      this._cookieExpirationTime = undefined;
      this._logoutEndpoint = undefined;
      this._nonceExpirationTime = undefined;
      this._preserveUrlFragmentsForLogins = undefined;
      this._tokenRefreshExtensionTime = undefined;
      this._tokenStoreEnabled = undefined;
      this._tokenStorePath = undefined;
      this._tokenStoreSasSettingName = undefined;
      this._validateNonce = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedExternalRedirectUrls = value.allowedExternalRedirectUrls;
      this._cookieExpirationConvention = value.cookieExpirationConvention;
      this._cookieExpirationTime = value.cookieExpirationTime;
      this._logoutEndpoint = value.logoutEndpoint;
      this._nonceExpirationTime = value.nonceExpirationTime;
      this._preserveUrlFragmentsForLogins = value.preserveUrlFragmentsForLogins;
      this._tokenRefreshExtensionTime = value.tokenRefreshExtensionTime;
      this._tokenStoreEnabled = value.tokenStoreEnabled;
      this._tokenStorePath = value.tokenStorePath;
      this._tokenStoreSasSettingName = value.tokenStoreSasSettingName;
      this._validateNonce = value.validateNonce;
    }
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

  // cookie_expiration_convention - computed: false, optional: true, required: false
  private _cookieExpirationConvention?: string; 
  public get cookieExpirationConvention() {
    return this.getStringAttribute('cookie_expiration_convention');
  }
  public set cookieExpirationConvention(value: string) {
    this._cookieExpirationConvention = value;
  }
  public resetCookieExpirationConvention() {
    this._cookieExpirationConvention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpirationConventionInput() {
    return this._cookieExpirationConvention;
  }

  // cookie_expiration_time - computed: false, optional: true, required: false
  private _cookieExpirationTime?: string; 
  public get cookieExpirationTime() {
    return this.getStringAttribute('cookie_expiration_time');
  }
  public set cookieExpirationTime(value: string) {
    this._cookieExpirationTime = value;
  }
  public resetCookieExpirationTime() {
    this._cookieExpirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpirationTimeInput() {
    return this._cookieExpirationTime;
  }

  // logout_endpoint - computed: false, optional: true, required: false
  private _logoutEndpoint?: string; 
  public get logoutEndpoint() {
    return this.getStringAttribute('logout_endpoint');
  }
  public set logoutEndpoint(value: string) {
    this._logoutEndpoint = value;
  }
  public resetLogoutEndpoint() {
    this._logoutEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutEndpointInput() {
    return this._logoutEndpoint;
  }

  // nonce_expiration_time - computed: false, optional: true, required: false
  private _nonceExpirationTime?: string; 
  public get nonceExpirationTime() {
    return this.getStringAttribute('nonce_expiration_time');
  }
  public set nonceExpirationTime(value: string) {
    this._nonceExpirationTime = value;
  }
  public resetNonceExpirationTime() {
    this._nonceExpirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonceExpirationTimeInput() {
    return this._nonceExpirationTime;
  }

  // preserve_url_fragments_for_logins - computed: false, optional: true, required: false
  private _preserveUrlFragmentsForLogins?: boolean | cdktf.IResolvable; 
  public get preserveUrlFragmentsForLogins() {
    return this.getBooleanAttribute('preserve_url_fragments_for_logins');
  }
  public set preserveUrlFragmentsForLogins(value: boolean | cdktf.IResolvable) {
    this._preserveUrlFragmentsForLogins = value;
  }
  public resetPreserveUrlFragmentsForLogins() {
    this._preserveUrlFragmentsForLogins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveUrlFragmentsForLoginsInput() {
    return this._preserveUrlFragmentsForLogins;
  }

  // token_refresh_extension_time - computed: false, optional: true, required: false
  private _tokenRefreshExtensionTime?: number; 
  public get tokenRefreshExtensionTime() {
    return this.getNumberAttribute('token_refresh_extension_time');
  }
  public set tokenRefreshExtensionTime(value: number) {
    this._tokenRefreshExtensionTime = value;
  }
  public resetTokenRefreshExtensionTime() {
    this._tokenRefreshExtensionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefreshExtensionTimeInput() {
    return this._tokenRefreshExtensionTime;
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

  // token_store_path - computed: false, optional: true, required: false
  private _tokenStorePath?: string; 
  public get tokenStorePath() {
    return this.getStringAttribute('token_store_path');
  }
  public set tokenStorePath(value: string) {
    this._tokenStorePath = value;
  }
  public resetTokenStorePath() {
    this._tokenStorePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenStorePathInput() {
    return this._tokenStorePath;
  }

  // token_store_sas_setting_name - computed: false, optional: true, required: false
  private _tokenStoreSasSettingName?: string; 
  public get tokenStoreSasSettingName() {
    return this.getStringAttribute('token_store_sas_setting_name');
  }
  public set tokenStoreSasSettingName(value: string) {
    this._tokenStoreSasSettingName = value;
  }
  public resetTokenStoreSasSettingName() {
    this._tokenStoreSasSettingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenStoreSasSettingNameInput() {
    return this._tokenStoreSasSettingName;
  }

  // validate_nonce - computed: false, optional: true, required: false
  private _validateNonce?: boolean | cdktf.IResolvable; 
  public get validateNonce() {
    return this.getBooleanAttribute('validate_nonce');
  }
  public set validateNonce(value: boolean | cdktf.IResolvable) {
    this._validateNonce = value;
  }
  public resetValidateNonce() {
    this._validateNonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateNonceInput() {
    return this._validateNonce;
  }
}
export interface LinuxWebAppSlotAuthSettingsV2MicrosoftV2 {
  /**
  * Specifies a list of Allowed Audiences that will be requested as part of Microsoft Sign-In authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#allowed_audiences LinuxWebAppSlot#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * The OAuth 2.0 client ID that was created for the app used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_id LinuxWebAppSlot#client_id}
  */
  readonly clientId: string;
  /**
  * The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#client_secret_setting_name LinuxWebAppSlot#client_secret_setting_name}
  */
  readonly clientSecretSettingName: string;
  /**
  * The list of Login scopes that will be requested as part of Microsoft Account authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#login_scopes LinuxWebAppSlot#login_scopes}
  */
  readonly loginScopes?: string[];
}

export function linuxWebAppSlotAuthSettingsV2MicrosoftV2ToTerraform(struct?: LinuxWebAppSlotAuthSettingsV2MicrosoftV2OutputReference | LinuxWebAppSlotAuthSettingsV2MicrosoftV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAudiences),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_setting_name: cdktf.stringToTerraform(struct!.clientSecretSettingName),
    login_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginScopes),
  }
}


export function linuxWebAppSlotAuthSettingsV2MicrosoftV2ToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsV2MicrosoftV2OutputReference | LinuxWebAppSlotAuthSettingsV2MicrosoftV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAudiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_setting_name: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretSettingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loginScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsV2MicrosoftV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsV2MicrosoftV2 | undefined {
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
    if (this._clientSecretSettingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSettingName = this._clientSecretSettingName;
    }
    if (this._loginScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginScopes = this._loginScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotAuthSettingsV2MicrosoftV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedAudiences = undefined;
      this._clientId = undefined;
      this._clientSecretSettingName = undefined;
      this._loginScopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedAudiences = value.allowedAudiences;
      this._clientId = value.clientId;
      this._clientSecretSettingName = value.clientSecretSettingName;
      this._loginScopes = value.loginScopes;
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

  // client_secret_setting_name - computed: false, optional: false, required: true
  private _clientSecretSettingName?: string; 
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }
  public set clientSecretSettingName(value: string) {
    this._clientSecretSettingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSettingNameInput() {
    return this._clientSecretSettingName;
  }

  // login_scopes - computed: false, optional: true, required: false
  private _loginScopes?: string[]; 
  public get loginScopes() {
    return this.getListAttribute('login_scopes');
  }
  public set loginScopes(value: string[]) {
    this._loginScopes = value;
  }
  public resetLoginScopes() {
    this._loginScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginScopesInput() {
    return this._loginScopes;
  }
}
export interface LinuxWebAppSlotAuthSettingsV2TwitterV2 {
  /**
  * The OAuth 1.0a consumer key of the Twitter application used for sign-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#consumer_key LinuxWebAppSlot#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#consumer_secret_setting_name LinuxWebAppSlot#consumer_secret_setting_name}
  */
  readonly consumerSecretSettingName: string;
}

export function linuxWebAppSlotAuthSettingsV2TwitterV2ToTerraform(struct?: LinuxWebAppSlotAuthSettingsV2TwitterV2OutputReference | LinuxWebAppSlotAuthSettingsV2TwitterV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_key: cdktf.stringToTerraform(struct!.consumerKey),
    consumer_secret_setting_name: cdktf.stringToTerraform(struct!.consumerSecretSettingName),
  }
}


export function linuxWebAppSlotAuthSettingsV2TwitterV2ToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsV2TwitterV2OutputReference | LinuxWebAppSlotAuthSettingsV2TwitterV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_key: {
      value: cdktf.stringToHclTerraform(struct!.consumerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_secret_setting_name: {
      value: cdktf.stringToHclTerraform(struct!.consumerSecretSettingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsV2TwitterV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsV2TwitterV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerKey = this._consumerKey;
    }
    if (this._consumerSecretSettingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerSecretSettingName = this._consumerSecretSettingName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotAuthSettingsV2TwitterV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumerKey = undefined;
      this._consumerSecretSettingName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumerKey = value.consumerKey;
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

  // consumer_secret_setting_name - computed: false, optional: false, required: true
  private _consumerSecretSettingName?: string; 
  public get consumerSecretSettingName() {
    return this.getStringAttribute('consumer_secret_setting_name');
  }
  public set consumerSecretSettingName(value: string) {
    this._consumerSecretSettingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerSecretSettingNameInput() {
    return this._consumerSecretSettingName;
  }
}
export interface LinuxWebAppSlotAuthSettingsV2 {
  /**
  * Should the AuthV2 Settings be enabled. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#auth_enabled LinuxWebAppSlot#auth_enabled}
  */
  readonly authEnabled?: boolean | cdktf.IResolvable;
  /**
  * The path to the App Auth settings. **Note:** Relative Paths are evaluated from the Site Root directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#config_file_path LinuxWebAppSlot#config_file_path}
  */
  readonly configFilePath?: string;
  /**
  * The Default Authentication Provider to use when the `unauthenticated_action` is set to `RedirectToLoginPage`. Possible values include: `apple`, `azureactivedirectory`, `facebook`, `github`, `google`, `twitter` and the `name` of your `custom_oidc_v2` provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#default_provider LinuxWebAppSlot#default_provider}
  */
  readonly defaultProvider?: string;
  /**
  * The paths which should be excluded from the `unauthenticated_action` when it is set to `RedirectToLoginPage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#excluded_paths LinuxWebAppSlot#excluded_paths}
  */
  readonly excludedPaths?: string[];
  /**
  * The convention used to determine the url of the request made. Possible values include `ForwardProxyConventionNoProxy`, `ForwardProxyConventionStandard`, `ForwardProxyConventionCustom`. Defaults to `ForwardProxyConventionNoProxy`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#forward_proxy_convention LinuxWebAppSlot#forward_proxy_convention}
  */
  readonly forwardProxyConvention?: string;
  /**
  * The name of the header containing the host of the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#forward_proxy_custom_host_header_name LinuxWebAppSlot#forward_proxy_custom_host_header_name}
  */
  readonly forwardProxyCustomHostHeaderName?: string;
  /**
  * The name of the header containing the scheme of the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#forward_proxy_custom_scheme_header_name LinuxWebAppSlot#forward_proxy_custom_scheme_header_name}
  */
  readonly forwardProxyCustomSchemeHeaderName?: string;
  /**
  * The prefix that should precede all the authentication and authorisation paths. Defaults to `/.auth`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#http_route_api_prefix LinuxWebAppSlot#http_route_api_prefix}
  */
  readonly httpRouteApiPrefix?: string;
  /**
  * Should the authentication flow be used for all requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#require_authentication LinuxWebAppSlot#require_authentication}
  */
  readonly requireAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Should HTTPS be required on connections? Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#require_https LinuxWebAppSlot#require_https}
  */
  readonly requireHttps?: boolean | cdktf.IResolvable;
  /**
  * The Runtime Version of the Authentication and Authorisation feature of this App. Defaults to `~1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#runtime_version LinuxWebAppSlot#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * The action to take for requests made without authentication. Possible values include `RedirectToLoginPage`, `AllowAnonymous`, `Return401`, and `Return403`. Defaults to `RedirectToLoginPage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#unauthenticated_action LinuxWebAppSlot#unauthenticated_action}
  */
  readonly unauthenticatedAction?: string;
  /**
  * active_directory_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#active_directory_v2 LinuxWebAppSlot#active_directory_v2}
  */
  readonly activeDirectoryV2?: LinuxWebAppSlotAuthSettingsV2ActiveDirectoryV2;
  /**
  * apple_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#apple_v2 LinuxWebAppSlot#apple_v2}
  */
  readonly appleV2?: LinuxWebAppSlotAuthSettingsV2AppleV2;
  /**
  * azure_static_web_app_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#azure_static_web_app_v2 LinuxWebAppSlot#azure_static_web_app_v2}
  */
  readonly azureStaticWebAppV2?: LinuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2;
  /**
  * custom_oidc_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#custom_oidc_v2 LinuxWebAppSlot#custom_oidc_v2}
  */
  readonly customOidcV2?: LinuxWebAppSlotAuthSettingsV2CustomOidcV2[] | cdktf.IResolvable;
  /**
  * facebook_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#facebook_v2 LinuxWebAppSlot#facebook_v2}
  */
  readonly facebookV2?: LinuxWebAppSlotAuthSettingsV2FacebookV2;
  /**
  * github_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#github_v2 LinuxWebAppSlot#github_v2}
  */
  readonly githubV2?: LinuxWebAppSlotAuthSettingsV2GithubV2;
  /**
  * google_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#google_v2 LinuxWebAppSlot#google_v2}
  */
  readonly googleV2?: LinuxWebAppSlotAuthSettingsV2GoogleV2;
  /**
  * login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#login LinuxWebAppSlot#login}
  */
  readonly login: LinuxWebAppSlotAuthSettingsV2Login;
  /**
  * microsoft_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#microsoft_v2 LinuxWebAppSlot#microsoft_v2}
  */
  readonly microsoftV2?: LinuxWebAppSlotAuthSettingsV2MicrosoftV2;
  /**
  * twitter_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#twitter_v2 LinuxWebAppSlot#twitter_v2}
  */
  readonly twitterV2?: LinuxWebAppSlotAuthSettingsV2TwitterV2;
}

export function linuxWebAppSlotAuthSettingsV2ToTerraform(struct?: LinuxWebAppSlotAuthSettingsV2OutputReference | LinuxWebAppSlotAuthSettingsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_enabled: cdktf.booleanToTerraform(struct!.authEnabled),
    config_file_path: cdktf.stringToTerraform(struct!.configFilePath),
    default_provider: cdktf.stringToTerraform(struct!.defaultProvider),
    excluded_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedPaths),
    forward_proxy_convention: cdktf.stringToTerraform(struct!.forwardProxyConvention),
    forward_proxy_custom_host_header_name: cdktf.stringToTerraform(struct!.forwardProxyCustomHostHeaderName),
    forward_proxy_custom_scheme_header_name: cdktf.stringToTerraform(struct!.forwardProxyCustomSchemeHeaderName),
    http_route_api_prefix: cdktf.stringToTerraform(struct!.httpRouteApiPrefix),
    require_authentication: cdktf.booleanToTerraform(struct!.requireAuthentication),
    require_https: cdktf.booleanToTerraform(struct!.requireHttps),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
    unauthenticated_action: cdktf.stringToTerraform(struct!.unauthenticatedAction),
    active_directory_v2: linuxWebAppSlotAuthSettingsV2ActiveDirectoryV2ToTerraform(struct!.activeDirectoryV2),
    apple_v2: linuxWebAppSlotAuthSettingsV2AppleV2ToTerraform(struct!.appleV2),
    azure_static_web_app_v2: linuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2ToTerraform(struct!.azureStaticWebAppV2),
    custom_oidc_v2: cdktf.listMapper(linuxWebAppSlotAuthSettingsV2CustomOidcV2ToTerraform, true)(struct!.customOidcV2),
    facebook_v2: linuxWebAppSlotAuthSettingsV2FacebookV2ToTerraform(struct!.facebookV2),
    github_v2: linuxWebAppSlotAuthSettingsV2GithubV2ToTerraform(struct!.githubV2),
    google_v2: linuxWebAppSlotAuthSettingsV2GoogleV2ToTerraform(struct!.googleV2),
    login: linuxWebAppSlotAuthSettingsV2LoginToTerraform(struct!.login),
    microsoft_v2: linuxWebAppSlotAuthSettingsV2MicrosoftV2ToTerraform(struct!.microsoftV2),
    twitter_v2: linuxWebAppSlotAuthSettingsV2TwitterV2ToTerraform(struct!.twitterV2),
  }
}


export function linuxWebAppSlotAuthSettingsV2ToHclTerraform(struct?: LinuxWebAppSlotAuthSettingsV2OutputReference | LinuxWebAppSlotAuthSettingsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.authEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config_file_path: {
      value: cdktf.stringToHclTerraform(struct!.configFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_provider: {
      value: cdktf.stringToHclTerraform(struct!.defaultProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    excluded_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    forward_proxy_convention: {
      value: cdktf.stringToHclTerraform(struct!.forwardProxyConvention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_proxy_custom_host_header_name: {
      value: cdktf.stringToHclTerraform(struct!.forwardProxyCustomHostHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_proxy_custom_scheme_header_name: {
      value: cdktf.stringToHclTerraform(struct!.forwardProxyCustomSchemeHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_route_api_prefix: {
      value: cdktf.stringToHclTerraform(struct!.httpRouteApiPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.requireAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_https: {
      value: cdktf.booleanToHclTerraform(struct!.requireHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    runtime_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unauthenticated_action: {
      value: cdktf.stringToHclTerraform(struct!.unauthenticatedAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_directory_v2: {
      value: linuxWebAppSlotAuthSettingsV2ActiveDirectoryV2ToHclTerraform(struct!.activeDirectoryV2),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsV2ActiveDirectoryV2List",
    },
    apple_v2: {
      value: linuxWebAppSlotAuthSettingsV2AppleV2ToHclTerraform(struct!.appleV2),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsV2AppleV2List",
    },
    azure_static_web_app_v2: {
      value: linuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2ToHclTerraform(struct!.azureStaticWebAppV2),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2List",
    },
    custom_oidc_v2: {
      value: cdktf.listMapperHcl(linuxWebAppSlotAuthSettingsV2CustomOidcV2ToHclTerraform, true)(struct!.customOidcV2),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsV2CustomOidcV2List",
    },
    facebook_v2: {
      value: linuxWebAppSlotAuthSettingsV2FacebookV2ToHclTerraform(struct!.facebookV2),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsV2FacebookV2List",
    },
    github_v2: {
      value: linuxWebAppSlotAuthSettingsV2GithubV2ToHclTerraform(struct!.githubV2),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsV2GithubV2List",
    },
    google_v2: {
      value: linuxWebAppSlotAuthSettingsV2GoogleV2ToHclTerraform(struct!.googleV2),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsV2GoogleV2List",
    },
    login: {
      value: linuxWebAppSlotAuthSettingsV2LoginToHclTerraform(struct!.login),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsV2LoginList",
    },
    microsoft_v2: {
      value: linuxWebAppSlotAuthSettingsV2MicrosoftV2ToHclTerraform(struct!.microsoftV2),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsV2MicrosoftV2List",
    },
    twitter_v2: {
      value: linuxWebAppSlotAuthSettingsV2TwitterV2ToHclTerraform(struct!.twitterV2),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotAuthSettingsV2TwitterV2List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotAuthSettingsV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotAuthSettingsV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEnabled = this._authEnabled;
    }
    if (this._configFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFilePath = this._configFilePath;
    }
    if (this._defaultProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultProvider = this._defaultProvider;
    }
    if (this._excludedPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPaths = this._excludedPaths;
    }
    if (this._forwardProxyConvention !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyConvention = this._forwardProxyConvention;
    }
    if (this._forwardProxyCustomHostHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyCustomHostHeaderName = this._forwardProxyCustomHostHeaderName;
    }
    if (this._forwardProxyCustomSchemeHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyCustomSchemeHeaderName = this._forwardProxyCustomSchemeHeaderName;
    }
    if (this._httpRouteApiPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRouteApiPrefix = this._httpRouteApiPrefix;
    }
    if (this._requireAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAuthentication = this._requireAuthentication;
    }
    if (this._requireHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireHttps = this._requireHttps;
    }
    if (this._runtimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    if (this._unauthenticatedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthenticatedAction = this._unauthenticatedAction;
    }
    if (this._activeDirectoryV2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryV2 = this._activeDirectoryV2?.internalValue;
    }
    if (this._appleV2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appleV2 = this._appleV2?.internalValue;
    }
    if (this._azureStaticWebAppV2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStaticWebAppV2 = this._azureStaticWebAppV2?.internalValue;
    }
    if (this._customOidcV2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOidcV2 = this._customOidcV2?.internalValue;
    }
    if (this._facebookV2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.facebookV2 = this._facebookV2?.internalValue;
    }
    if (this._githubV2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubV2 = this._githubV2?.internalValue;
    }
    if (this._googleV2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleV2 = this._googleV2?.internalValue;
    }
    if (this._login?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.login = this._login?.internalValue;
    }
    if (this._microsoftV2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftV2 = this._microsoftV2?.internalValue;
    }
    if (this._twitterV2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.twitterV2 = this._twitterV2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotAuthSettingsV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEnabled = undefined;
      this._configFilePath = undefined;
      this._defaultProvider = undefined;
      this._excludedPaths = undefined;
      this._forwardProxyConvention = undefined;
      this._forwardProxyCustomHostHeaderName = undefined;
      this._forwardProxyCustomSchemeHeaderName = undefined;
      this._httpRouteApiPrefix = undefined;
      this._requireAuthentication = undefined;
      this._requireHttps = undefined;
      this._runtimeVersion = undefined;
      this._unauthenticatedAction = undefined;
      this._activeDirectoryV2.internalValue = undefined;
      this._appleV2.internalValue = undefined;
      this._azureStaticWebAppV2.internalValue = undefined;
      this._customOidcV2.internalValue = undefined;
      this._facebookV2.internalValue = undefined;
      this._githubV2.internalValue = undefined;
      this._googleV2.internalValue = undefined;
      this._login.internalValue = undefined;
      this._microsoftV2.internalValue = undefined;
      this._twitterV2.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEnabled = value.authEnabled;
      this._configFilePath = value.configFilePath;
      this._defaultProvider = value.defaultProvider;
      this._excludedPaths = value.excludedPaths;
      this._forwardProxyConvention = value.forwardProxyConvention;
      this._forwardProxyCustomHostHeaderName = value.forwardProxyCustomHostHeaderName;
      this._forwardProxyCustomSchemeHeaderName = value.forwardProxyCustomSchemeHeaderName;
      this._httpRouteApiPrefix = value.httpRouteApiPrefix;
      this._requireAuthentication = value.requireAuthentication;
      this._requireHttps = value.requireHttps;
      this._runtimeVersion = value.runtimeVersion;
      this._unauthenticatedAction = value.unauthenticatedAction;
      this._activeDirectoryV2.internalValue = value.activeDirectoryV2;
      this._appleV2.internalValue = value.appleV2;
      this._azureStaticWebAppV2.internalValue = value.azureStaticWebAppV2;
      this._customOidcV2.internalValue = value.customOidcV2;
      this._facebookV2.internalValue = value.facebookV2;
      this._githubV2.internalValue = value.githubV2;
      this._googleV2.internalValue = value.googleV2;
      this._login.internalValue = value.login;
      this._microsoftV2.internalValue = value.microsoftV2;
      this._twitterV2.internalValue = value.twitterV2;
    }
  }

  // auth_enabled - computed: false, optional: true, required: false
  private _authEnabled?: boolean | cdktf.IResolvable; 
  public get authEnabled() {
    return this.getBooleanAttribute('auth_enabled');
  }
  public set authEnabled(value: boolean | cdktf.IResolvable) {
    this._authEnabled = value;
  }
  public resetAuthEnabled() {
    this._authEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEnabledInput() {
    return this._authEnabled;
  }

  // config_file_path - computed: false, optional: true, required: false
  private _configFilePath?: string; 
  public get configFilePath() {
    return this.getStringAttribute('config_file_path');
  }
  public set configFilePath(value: string) {
    this._configFilePath = value;
  }
  public resetConfigFilePath() {
    this._configFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFilePathInput() {
    return this._configFilePath;
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

  // excluded_paths - computed: false, optional: true, required: false
  private _excludedPaths?: string[]; 
  public get excludedPaths() {
    return this.getListAttribute('excluded_paths');
  }
  public set excludedPaths(value: string[]) {
    this._excludedPaths = value;
  }
  public resetExcludedPaths() {
    this._excludedPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPathsInput() {
    return this._excludedPaths;
  }

  // forward_proxy_convention - computed: false, optional: true, required: false
  private _forwardProxyConvention?: string; 
  public get forwardProxyConvention() {
    return this.getStringAttribute('forward_proxy_convention');
  }
  public set forwardProxyConvention(value: string) {
    this._forwardProxyConvention = value;
  }
  public resetForwardProxyConvention() {
    this._forwardProxyConvention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyConventionInput() {
    return this._forwardProxyConvention;
  }

  // forward_proxy_custom_host_header_name - computed: false, optional: true, required: false
  private _forwardProxyCustomHostHeaderName?: string; 
  public get forwardProxyCustomHostHeaderName() {
    return this.getStringAttribute('forward_proxy_custom_host_header_name');
  }
  public set forwardProxyCustomHostHeaderName(value: string) {
    this._forwardProxyCustomHostHeaderName = value;
  }
  public resetForwardProxyCustomHostHeaderName() {
    this._forwardProxyCustomHostHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyCustomHostHeaderNameInput() {
    return this._forwardProxyCustomHostHeaderName;
  }

  // forward_proxy_custom_scheme_header_name - computed: false, optional: true, required: false
  private _forwardProxyCustomSchemeHeaderName?: string; 
  public get forwardProxyCustomSchemeHeaderName() {
    return this.getStringAttribute('forward_proxy_custom_scheme_header_name');
  }
  public set forwardProxyCustomSchemeHeaderName(value: string) {
    this._forwardProxyCustomSchemeHeaderName = value;
  }
  public resetForwardProxyCustomSchemeHeaderName() {
    this._forwardProxyCustomSchemeHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyCustomSchemeHeaderNameInput() {
    return this._forwardProxyCustomSchemeHeaderName;
  }

  // http_route_api_prefix - computed: false, optional: true, required: false
  private _httpRouteApiPrefix?: string; 
  public get httpRouteApiPrefix() {
    return this.getStringAttribute('http_route_api_prefix');
  }
  public set httpRouteApiPrefix(value: string) {
    this._httpRouteApiPrefix = value;
  }
  public resetHttpRouteApiPrefix() {
    this._httpRouteApiPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteApiPrefixInput() {
    return this._httpRouteApiPrefix;
  }

  // require_authentication - computed: false, optional: true, required: false
  private _requireAuthentication?: boolean | cdktf.IResolvable; 
  public get requireAuthentication() {
    return this.getBooleanAttribute('require_authentication');
  }
  public set requireAuthentication(value: boolean | cdktf.IResolvable) {
    this._requireAuthentication = value;
  }
  public resetRequireAuthentication() {
    this._requireAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAuthenticationInput() {
    return this._requireAuthentication;
  }

  // require_https - computed: false, optional: true, required: false
  private _requireHttps?: boolean | cdktf.IResolvable; 
  public get requireHttps() {
    return this.getBooleanAttribute('require_https');
  }
  public set requireHttps(value: boolean | cdktf.IResolvable) {
    this._requireHttps = value;
  }
  public resetRequireHttps() {
    this._requireHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireHttpsInput() {
    return this._requireHttps;
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

  // unauthenticated_action - computed: false, optional: true, required: false
  private _unauthenticatedAction?: string; 
  public get unauthenticatedAction() {
    return this.getStringAttribute('unauthenticated_action');
  }
  public set unauthenticatedAction(value: string) {
    this._unauthenticatedAction = value;
  }
  public resetUnauthenticatedAction() {
    this._unauthenticatedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthenticatedActionInput() {
    return this._unauthenticatedAction;
  }

  // active_directory_v2 - computed: false, optional: true, required: false
  private _activeDirectoryV2 = new LinuxWebAppSlotAuthSettingsV2ActiveDirectoryV2OutputReference(this, "active_directory_v2");
  public get activeDirectoryV2() {
    return this._activeDirectoryV2;
  }
  public putActiveDirectoryV2(value: LinuxWebAppSlotAuthSettingsV2ActiveDirectoryV2) {
    this._activeDirectoryV2.internalValue = value;
  }
  public resetActiveDirectoryV2() {
    this._activeDirectoryV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryV2Input() {
    return this._activeDirectoryV2.internalValue;
  }

  // apple_v2 - computed: false, optional: true, required: false
  private _appleV2 = new LinuxWebAppSlotAuthSettingsV2AppleV2OutputReference(this, "apple_v2");
  public get appleV2() {
    return this._appleV2;
  }
  public putAppleV2(value: LinuxWebAppSlotAuthSettingsV2AppleV2) {
    this._appleV2.internalValue = value;
  }
  public resetAppleV2() {
    this._appleV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appleV2Input() {
    return this._appleV2.internalValue;
  }

  // azure_static_web_app_v2 - computed: false, optional: true, required: false
  private _azureStaticWebAppV2 = new LinuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2OutputReference(this, "azure_static_web_app_v2");
  public get azureStaticWebAppV2() {
    return this._azureStaticWebAppV2;
  }
  public putAzureStaticWebAppV2(value: LinuxWebAppSlotAuthSettingsV2AzureStaticWebAppV2) {
    this._azureStaticWebAppV2.internalValue = value;
  }
  public resetAzureStaticWebAppV2() {
    this._azureStaticWebAppV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStaticWebAppV2Input() {
    return this._azureStaticWebAppV2.internalValue;
  }

  // custom_oidc_v2 - computed: false, optional: true, required: false
  private _customOidcV2 = new LinuxWebAppSlotAuthSettingsV2CustomOidcV2List(this, "custom_oidc_v2", false);
  public get customOidcV2() {
    return this._customOidcV2;
  }
  public putCustomOidcV2(value: LinuxWebAppSlotAuthSettingsV2CustomOidcV2[] | cdktf.IResolvable) {
    this._customOidcV2.internalValue = value;
  }
  public resetCustomOidcV2() {
    this._customOidcV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOidcV2Input() {
    return this._customOidcV2.internalValue;
  }

  // facebook_v2 - computed: false, optional: true, required: false
  private _facebookV2 = new LinuxWebAppSlotAuthSettingsV2FacebookV2OutputReference(this, "facebook_v2");
  public get facebookV2() {
    return this._facebookV2;
  }
  public putFacebookV2(value: LinuxWebAppSlotAuthSettingsV2FacebookV2) {
    this._facebookV2.internalValue = value;
  }
  public resetFacebookV2() {
    this._facebookV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facebookV2Input() {
    return this._facebookV2.internalValue;
  }

  // github_v2 - computed: false, optional: true, required: false
  private _githubV2 = new LinuxWebAppSlotAuthSettingsV2GithubV2OutputReference(this, "github_v2");
  public get githubV2() {
    return this._githubV2;
  }
  public putGithubV2(value: LinuxWebAppSlotAuthSettingsV2GithubV2) {
    this._githubV2.internalValue = value;
  }
  public resetGithubV2() {
    this._githubV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubV2Input() {
    return this._githubV2.internalValue;
  }

  // google_v2 - computed: false, optional: true, required: false
  private _googleV2 = new LinuxWebAppSlotAuthSettingsV2GoogleV2OutputReference(this, "google_v2");
  public get googleV2() {
    return this._googleV2;
  }
  public putGoogleV2(value: LinuxWebAppSlotAuthSettingsV2GoogleV2) {
    this._googleV2.internalValue = value;
  }
  public resetGoogleV2() {
    this._googleV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleV2Input() {
    return this._googleV2.internalValue;
  }

  // login - computed: false, optional: false, required: true
  private _login = new LinuxWebAppSlotAuthSettingsV2LoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: LinuxWebAppSlotAuthSettingsV2Login) {
    this._login.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }

  // microsoft_v2 - computed: false, optional: true, required: false
  private _microsoftV2 = new LinuxWebAppSlotAuthSettingsV2MicrosoftV2OutputReference(this, "microsoft_v2");
  public get microsoftV2() {
    return this._microsoftV2;
  }
  public putMicrosoftV2(value: LinuxWebAppSlotAuthSettingsV2MicrosoftV2) {
    this._microsoftV2.internalValue = value;
  }
  public resetMicrosoftV2() {
    this._microsoftV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftV2Input() {
    return this._microsoftV2.internalValue;
  }

  // twitter_v2 - computed: false, optional: true, required: false
  private _twitterV2 = new LinuxWebAppSlotAuthSettingsV2TwitterV2OutputReference(this, "twitter_v2");
  public get twitterV2() {
    return this._twitterV2;
  }
  public putTwitterV2(value: LinuxWebAppSlotAuthSettingsV2TwitterV2) {
    this._twitterV2.internalValue = value;
  }
  public resetTwitterV2() {
    this._twitterV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twitterV2Input() {
    return this._twitterV2.internalValue;
  }
}
export interface LinuxWebAppSlotBackupSchedule {
  /**
  * How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#frequency_interval LinuxWebAppSlot#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#frequency_unit LinuxWebAppSlot#frequency_unit}
  */
  readonly frequencyUnit: string;
  /**
  * Should the service keep at least one backup, regardless of age of backup. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#keep_at_least_one_backup LinuxWebAppSlot#keep_at_least_one_backup}
  */
  readonly keepAtLeastOneBackup?: boolean | cdktf.IResolvable;
  /**
  * After how many days backups should be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#retention_period_days LinuxWebAppSlot#retention_period_days}
  */
  readonly retentionPeriodDays?: number;
  /**
  * When the schedule should start working in RFC-3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#start_time LinuxWebAppSlot#start_time}
  */
  readonly startTime?: string;
}

export function linuxWebAppSlotBackupScheduleToTerraform(struct?: LinuxWebAppSlotBackupScheduleOutputReference | LinuxWebAppSlotBackupSchedule): any {
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


export function linuxWebAppSlotBackupScheduleToHclTerraform(struct?: LinuxWebAppSlotBackupScheduleOutputReference | LinuxWebAppSlotBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency_interval: {
      value: cdktf.numberToHclTerraform(struct!.frequencyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency_unit: {
      value: cdktf.stringToHclTerraform(struct!.frequencyUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_at_least_one_backup: {
      value: cdktf.booleanToHclTerraform(struct!.keepAtLeastOneBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_period_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionPeriodDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotBackupScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotBackupSchedule | undefined {
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

  public set internalValue(value: LinuxWebAppSlotBackupSchedule | undefined) {
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
export interface LinuxWebAppSlotBackup {
  /**
  * Should this backup job be enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#enabled LinuxWebAppSlot#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name which should be used for this Backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#name LinuxWebAppSlot#name}
  */
  readonly name: string;
  /**
  * The SAS URL to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#storage_account_url LinuxWebAppSlot#storage_account_url}
  */
  readonly storageAccountUrl: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#schedule LinuxWebAppSlot#schedule}
  */
  readonly schedule: LinuxWebAppSlotBackupSchedule;
}

export function linuxWebAppSlotBackupToTerraform(struct?: LinuxWebAppSlotBackupOutputReference | LinuxWebAppSlotBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    storage_account_url: cdktf.stringToTerraform(struct!.storageAccountUrl),
    schedule: linuxWebAppSlotBackupScheduleToTerraform(struct!.schedule),
  }
}


export function linuxWebAppSlotBackupToHclTerraform(struct?: LinuxWebAppSlotBackupOutputReference | LinuxWebAppSlotBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_url: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: linuxWebAppSlotBackupScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotBackupScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotBackup | undefined {
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

  public set internalValue(value: LinuxWebAppSlotBackup | undefined) {
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
  private _schedule = new LinuxWebAppSlotBackupScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: LinuxWebAppSlotBackupSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface LinuxWebAppSlotConnectionString {
  /**
  * The name which should be used for this Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#name LinuxWebAppSlot#name}
  */
  readonly name: string;
  /**
  * Type of database. Possible values include: `MySQL`, `SQLServer`, `SQLAzure`, `Custom`, `NotificationHub`, `ServiceBus`, `EventHub`, `APIHub`, `DocDb`, `RedisCache`, and `PostgreSQL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#type LinuxWebAppSlot#type}
  */
  readonly type: string;
  /**
  * The connection string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#value LinuxWebAppSlot#value}
  */
  readonly value: string;
}

export function linuxWebAppSlotConnectionStringToTerraform(struct?: LinuxWebAppSlotConnectionString | cdktf.IResolvable): any {
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


export function linuxWebAppSlotConnectionStringToHclTerraform(struct?: LinuxWebAppSlotConnectionString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LinuxWebAppSlotConnectionString | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LinuxWebAppSlotConnectionString | cdktf.IResolvable | undefined) {
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

export class LinuxWebAppSlotConnectionStringList extends cdktf.ComplexList {
  public internalValue? : LinuxWebAppSlotConnectionString[] | cdktf.IResolvable

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
  public get(index: number): LinuxWebAppSlotConnectionStringOutputReference {
    return new LinuxWebAppSlotConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxWebAppSlotIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#identity_ids LinuxWebAppSlot#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#type LinuxWebAppSlot#type}
  */
  readonly type: string;
}

export function linuxWebAppSlotIdentityToTerraform(struct?: LinuxWebAppSlotIdentityOutputReference | LinuxWebAppSlotIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function linuxWebAppSlotIdentityToHclTerraform(struct?: LinuxWebAppSlotIdentityOutputReference | LinuxWebAppSlotIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotIdentity | undefined {
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

  public set internalValue(value: LinuxWebAppSlotIdentity | undefined) {
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
export interface LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#level LinuxWebAppSlot#level}
  */
  readonly level: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#retention_in_days LinuxWebAppSlot#retention_in_days}
  */
  readonly retentionInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#sas_url LinuxWebAppSlot#sas_url}
  */
  readonly sasUrl: string;
}

export function linuxWebAppSlotLogsApplicationLogsAzureBlobStorageToTerraform(struct?: LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference | LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage): any {
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


export function linuxWebAppSlotLogsApplicationLogsAzureBlobStorageToHclTerraform(struct?: LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference | LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_in_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sas_url: {
      value: cdktf.stringToHclTerraform(struct!.sasUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage | undefined {
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

  public set internalValue(value: LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage | undefined) {
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
export interface LinuxWebAppSlotLogsApplicationLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#file_system_level LinuxWebAppSlot#file_system_level}
  */
  readonly fileSystemLevel: string;
  /**
  * azure_blob_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#azure_blob_storage LinuxWebAppSlot#azure_blob_storage}
  */
  readonly azureBlobStorage?: LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage;
}

export function linuxWebAppSlotLogsApplicationLogsToTerraform(struct?: LinuxWebAppSlotLogsApplicationLogsOutputReference | LinuxWebAppSlotLogsApplicationLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_level: cdktf.stringToTerraform(struct!.fileSystemLevel),
    azure_blob_storage: linuxWebAppSlotLogsApplicationLogsAzureBlobStorageToTerraform(struct!.azureBlobStorage),
  }
}


export function linuxWebAppSlotLogsApplicationLogsToHclTerraform(struct?: LinuxWebAppSlotLogsApplicationLogsOutputReference | LinuxWebAppSlotLogsApplicationLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_level: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_blob_storage: {
      value: linuxWebAppSlotLogsApplicationLogsAzureBlobStorageToHclTerraform(struct!.azureBlobStorage),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotLogsApplicationLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotLogsApplicationLogs | undefined {
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

  public set internalValue(value: LinuxWebAppSlotLogsApplicationLogs | undefined) {
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
  private _azureBlobStorage = new LinuxWebAppSlotLogsApplicationLogsAzureBlobStorageOutputReference(this, "azure_blob_storage");
  public get azureBlobStorage() {
    return this._azureBlobStorage;
  }
  public putAzureBlobStorage(value: LinuxWebAppSlotLogsApplicationLogsAzureBlobStorage) {
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
export interface LinuxWebAppSlotLogsHttpLogsAzureBlobStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#retention_in_days LinuxWebAppSlot#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#sas_url LinuxWebAppSlot#sas_url}
  */
  readonly sasUrl: string;
}

export function linuxWebAppSlotLogsHttpLogsAzureBlobStorageToTerraform(struct?: LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference | LinuxWebAppSlotLogsHttpLogsAzureBlobStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    sas_url: cdktf.stringToTerraform(struct!.sasUrl),
  }
}


export function linuxWebAppSlotLogsHttpLogsAzureBlobStorageToHclTerraform(struct?: LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference | LinuxWebAppSlotLogsHttpLogsAzureBlobStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_in_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sas_url: {
      value: cdktf.stringToHclTerraform(struct!.sasUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotLogsHttpLogsAzureBlobStorage | undefined {
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

  public set internalValue(value: LinuxWebAppSlotLogsHttpLogsAzureBlobStorage | undefined) {
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
export interface LinuxWebAppSlotLogsHttpLogsFileSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#retention_in_days LinuxWebAppSlot#retention_in_days}
  */
  readonly retentionInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#retention_in_mb LinuxWebAppSlot#retention_in_mb}
  */
  readonly retentionInMb: number;
}

export function linuxWebAppSlotLogsHttpLogsFileSystemToTerraform(struct?: LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference | LinuxWebAppSlotLogsHttpLogsFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    retention_in_mb: cdktf.numberToTerraform(struct!.retentionInMb),
  }
}


export function linuxWebAppSlotLogsHttpLogsFileSystemToHclTerraform(struct?: LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference | LinuxWebAppSlotLogsHttpLogsFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_in_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.retentionInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotLogsHttpLogsFileSystem | undefined {
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

  public set internalValue(value: LinuxWebAppSlotLogsHttpLogsFileSystem | undefined) {
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
export interface LinuxWebAppSlotLogsHttpLogs {
  /**
  * azure_blob_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#azure_blob_storage LinuxWebAppSlot#azure_blob_storage}
  */
  readonly azureBlobStorage?: LinuxWebAppSlotLogsHttpLogsAzureBlobStorage;
  /**
  * file_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#file_system LinuxWebAppSlot#file_system}
  */
  readonly fileSystem?: LinuxWebAppSlotLogsHttpLogsFileSystem;
}

export function linuxWebAppSlotLogsHttpLogsToTerraform(struct?: LinuxWebAppSlotLogsHttpLogsOutputReference | LinuxWebAppSlotLogsHttpLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_blob_storage: linuxWebAppSlotLogsHttpLogsAzureBlobStorageToTerraform(struct!.azureBlobStorage),
    file_system: linuxWebAppSlotLogsHttpLogsFileSystemToTerraform(struct!.fileSystem),
  }
}


export function linuxWebAppSlotLogsHttpLogsToHclTerraform(struct?: LinuxWebAppSlotLogsHttpLogsOutputReference | LinuxWebAppSlotLogsHttpLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_blob_storage: {
      value: linuxWebAppSlotLogsHttpLogsAzureBlobStorageToHclTerraform(struct!.azureBlobStorage),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotLogsHttpLogsAzureBlobStorageList",
    },
    file_system: {
      value: linuxWebAppSlotLogsHttpLogsFileSystemToHclTerraform(struct!.fileSystem),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotLogsHttpLogsFileSystemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotLogsHttpLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotLogsHttpLogs | undefined {
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

  public set internalValue(value: LinuxWebAppSlotLogsHttpLogs | undefined) {
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
  private _azureBlobStorage = new LinuxWebAppSlotLogsHttpLogsAzureBlobStorageOutputReference(this, "azure_blob_storage");
  public get azureBlobStorage() {
    return this._azureBlobStorage;
  }
  public putAzureBlobStorage(value: LinuxWebAppSlotLogsHttpLogsAzureBlobStorage) {
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
  private _fileSystem = new LinuxWebAppSlotLogsHttpLogsFileSystemOutputReference(this, "file_system");
  public get fileSystem() {
    return this._fileSystem;
  }
  public putFileSystem(value: LinuxWebAppSlotLogsHttpLogsFileSystem) {
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
export interface LinuxWebAppSlotLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#detailed_error_messages LinuxWebAppSlot#detailed_error_messages}
  */
  readonly detailedErrorMessages?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#failed_request_tracing LinuxWebAppSlot#failed_request_tracing}
  */
  readonly failedRequestTracing?: boolean | cdktf.IResolvable;
  /**
  * application_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#application_logs LinuxWebAppSlot#application_logs}
  */
  readonly applicationLogs?: LinuxWebAppSlotLogsApplicationLogs;
  /**
  * http_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#http_logs LinuxWebAppSlot#http_logs}
  */
  readonly httpLogs?: LinuxWebAppSlotLogsHttpLogs;
}

export function linuxWebAppSlotLogsToTerraform(struct?: LinuxWebAppSlotLogsOutputReference | LinuxWebAppSlotLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detailed_error_messages: cdktf.booleanToTerraform(struct!.detailedErrorMessages),
    failed_request_tracing: cdktf.booleanToTerraform(struct!.failedRequestTracing),
    application_logs: linuxWebAppSlotLogsApplicationLogsToTerraform(struct!.applicationLogs),
    http_logs: linuxWebAppSlotLogsHttpLogsToTerraform(struct!.httpLogs),
  }
}


export function linuxWebAppSlotLogsToHclTerraform(struct?: LinuxWebAppSlotLogsOutputReference | LinuxWebAppSlotLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detailed_error_messages: {
      value: cdktf.booleanToHclTerraform(struct!.detailedErrorMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failed_request_tracing: {
      value: cdktf.booleanToHclTerraform(struct!.failedRequestTracing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    application_logs: {
      value: linuxWebAppSlotLogsApplicationLogsToHclTerraform(struct!.applicationLogs),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotLogsApplicationLogsList",
    },
    http_logs: {
      value: linuxWebAppSlotLogsHttpLogsToHclTerraform(struct!.httpLogs),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotLogsHttpLogsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotLogs | undefined {
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

  public set internalValue(value: LinuxWebAppSlotLogs | undefined) {
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
  private _applicationLogs = new LinuxWebAppSlotLogsApplicationLogsOutputReference(this, "application_logs");
  public get applicationLogs() {
    return this._applicationLogs;
  }
  public putApplicationLogs(value: LinuxWebAppSlotLogsApplicationLogs) {
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
  private _httpLogs = new LinuxWebAppSlotLogsHttpLogsOutputReference(this, "http_logs");
  public get httpLogs() {
    return this._httpLogs;
  }
  public putHttpLogs(value: LinuxWebAppSlotLogsHttpLogs) {
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
export interface LinuxWebAppSlotSiteConfigApplicationStack {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#docker_image_name LinuxWebAppSlot#docker_image_name}
  */
  readonly dockerImageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#docker_registry_password LinuxWebAppSlot#docker_registry_password}
  */
  readonly dockerRegistryPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#docker_registry_url LinuxWebAppSlot#docker_registry_url}
  */
  readonly dockerRegistryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#docker_registry_username LinuxWebAppSlot#docker_registry_username}
  */
  readonly dockerRegistryUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#dotnet_version LinuxWebAppSlot#dotnet_version}
  */
  readonly dotnetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#go_version LinuxWebAppSlot#go_version}
  */
  readonly goVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#java_server LinuxWebAppSlot#java_server}
  */
  readonly javaServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#java_server_version LinuxWebAppSlot#java_server_version}
  */
  readonly javaServerVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#java_version LinuxWebAppSlot#java_version}
  */
  readonly javaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#node_version LinuxWebAppSlot#node_version}
  */
  readonly nodeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#php_version LinuxWebAppSlot#php_version}
  */
  readonly phpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#python_version LinuxWebAppSlot#python_version}
  */
  readonly pythonVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#ruby_version LinuxWebAppSlot#ruby_version}
  */
  readonly rubyVersion?: string;
}

export function linuxWebAppSlotSiteConfigApplicationStackToTerraform(struct?: LinuxWebAppSlotSiteConfigApplicationStackOutputReference | LinuxWebAppSlotSiteConfigApplicationStack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_image_name: cdktf.stringToTerraform(struct!.dockerImageName),
    docker_registry_password: cdktf.stringToTerraform(struct!.dockerRegistryPassword),
    docker_registry_url: cdktf.stringToTerraform(struct!.dockerRegistryUrl),
    docker_registry_username: cdktf.stringToTerraform(struct!.dockerRegistryUsername),
    dotnet_version: cdktf.stringToTerraform(struct!.dotnetVersion),
    go_version: cdktf.stringToTerraform(struct!.goVersion),
    java_server: cdktf.stringToTerraform(struct!.javaServer),
    java_server_version: cdktf.stringToTerraform(struct!.javaServerVersion),
    java_version: cdktf.stringToTerraform(struct!.javaVersion),
    node_version: cdktf.stringToTerraform(struct!.nodeVersion),
    php_version: cdktf.stringToTerraform(struct!.phpVersion),
    python_version: cdktf.stringToTerraform(struct!.pythonVersion),
    ruby_version: cdktf.stringToTerraform(struct!.rubyVersion),
  }
}


export function linuxWebAppSlotSiteConfigApplicationStackToHclTerraform(struct?: LinuxWebAppSlotSiteConfigApplicationStackOutputReference | LinuxWebAppSlotSiteConfigApplicationStack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker_image_name: {
      value: cdktf.stringToHclTerraform(struct!.dockerImageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_registry_password: {
      value: cdktf.stringToHclTerraform(struct!.dockerRegistryPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_registry_url: {
      value: cdktf.stringToHclTerraform(struct!.dockerRegistryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_registry_username: {
      value: cdktf.stringToHclTerraform(struct!.dockerRegistryUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dotnet_version: {
      value: cdktf.stringToHclTerraform(struct!.dotnetVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    go_version: {
      value: cdktf.stringToHclTerraform(struct!.goVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    java_server: {
      value: cdktf.stringToHclTerraform(struct!.javaServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    java_server_version: {
      value: cdktf.stringToHclTerraform(struct!.javaServerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    java_version: {
      value: cdktf.stringToHclTerraform(struct!.javaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_version: {
      value: cdktf.stringToHclTerraform(struct!.nodeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    php_version: {
      value: cdktf.stringToHclTerraform(struct!.phpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    python_version: {
      value: cdktf.stringToHclTerraform(struct!.pythonVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ruby_version: {
      value: cdktf.stringToHclTerraform(struct!.rubyVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotSiteConfigApplicationStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotSiteConfigApplicationStack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerImageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImageName = this._dockerImageName;
    }
    if (this._dockerRegistryPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerRegistryPassword = this._dockerRegistryPassword;
    }
    if (this._dockerRegistryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerRegistryUrl = this._dockerRegistryUrl;
    }
    if (this._dockerRegistryUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerRegistryUsername = this._dockerRegistryUsername;
    }
    if (this._dotnetVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dotnetVersion = this._dotnetVersion;
    }
    if (this._goVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.goVersion = this._goVersion;
    }
    if (this._javaServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaServer = this._javaServer;
    }
    if (this._javaServerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaServerVersion = this._javaServerVersion;
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
    if (this._rubyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.rubyVersion = this._rubyVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotSiteConfigApplicationStack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dockerImageName = undefined;
      this._dockerRegistryPassword = undefined;
      this._dockerRegistryUrl = undefined;
      this._dockerRegistryUsername = undefined;
      this._dotnetVersion = undefined;
      this._goVersion = undefined;
      this._javaServer = undefined;
      this._javaServerVersion = undefined;
      this._javaVersion = undefined;
      this._nodeVersion = undefined;
      this._phpVersion = undefined;
      this._pythonVersion = undefined;
      this._rubyVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dockerImageName = value.dockerImageName;
      this._dockerRegistryPassword = value.dockerRegistryPassword;
      this._dockerRegistryUrl = value.dockerRegistryUrl;
      this._dockerRegistryUsername = value.dockerRegistryUsername;
      this._dotnetVersion = value.dotnetVersion;
      this._goVersion = value.goVersion;
      this._javaServer = value.javaServer;
      this._javaServerVersion = value.javaServerVersion;
      this._javaVersion = value.javaVersion;
      this._nodeVersion = value.nodeVersion;
      this._phpVersion = value.phpVersion;
      this._pythonVersion = value.pythonVersion;
      this._rubyVersion = value.rubyVersion;
    }
  }

  // docker_image_name - computed: false, optional: true, required: false
  private _dockerImageName?: string; 
  public get dockerImageName() {
    return this.getStringAttribute('docker_image_name');
  }
  public set dockerImageName(value: string) {
    this._dockerImageName = value;
  }
  public resetDockerImageName() {
    this._dockerImageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageNameInput() {
    return this._dockerImageName;
  }

  // docker_registry_password - computed: false, optional: true, required: false
  private _dockerRegistryPassword?: string; 
  public get dockerRegistryPassword() {
    return this.getStringAttribute('docker_registry_password');
  }
  public set dockerRegistryPassword(value: string) {
    this._dockerRegistryPassword = value;
  }
  public resetDockerRegistryPassword() {
    this._dockerRegistryPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerRegistryPasswordInput() {
    return this._dockerRegistryPassword;
  }

  // docker_registry_url - computed: false, optional: true, required: false
  private _dockerRegistryUrl?: string; 
  public get dockerRegistryUrl() {
    return this.getStringAttribute('docker_registry_url');
  }
  public set dockerRegistryUrl(value: string) {
    this._dockerRegistryUrl = value;
  }
  public resetDockerRegistryUrl() {
    this._dockerRegistryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerRegistryUrlInput() {
    return this._dockerRegistryUrl;
  }

  // docker_registry_username - computed: false, optional: true, required: false
  private _dockerRegistryUsername?: string; 
  public get dockerRegistryUsername() {
    return this.getStringAttribute('docker_registry_username');
  }
  public set dockerRegistryUsername(value: string) {
    this._dockerRegistryUsername = value;
  }
  public resetDockerRegistryUsername() {
    this._dockerRegistryUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerRegistryUsernameInput() {
    return this._dockerRegistryUsername;
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

  // go_version - computed: false, optional: true, required: false
  private _goVersion?: string; 
  public get goVersion() {
    return this.getStringAttribute('go_version');
  }
  public set goVersion(value: string) {
    this._goVersion = value;
  }
  public resetGoVersion() {
    this._goVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goVersionInput() {
    return this._goVersion;
  }

  // java_server - computed: false, optional: true, required: false
  private _javaServer?: string; 
  public get javaServer() {
    return this.getStringAttribute('java_server');
  }
  public set javaServer(value: string) {
    this._javaServer = value;
  }
  public resetJavaServer() {
    this._javaServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaServerInput() {
    return this._javaServer;
  }

  // java_server_version - computed: false, optional: true, required: false
  private _javaServerVersion?: string; 
  public get javaServerVersion() {
    return this.getStringAttribute('java_server_version');
  }
  public set javaServerVersion(value: string) {
    this._javaServerVersion = value;
  }
  public resetJavaServerVersion() {
    this._javaServerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaServerVersionInput() {
    return this._javaServerVersion;
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

  // ruby_version - computed: false, optional: true, required: false
  private _rubyVersion?: string; 
  public get rubyVersion() {
    return this.getStringAttribute('ruby_version');
  }
  public set rubyVersion(value: string) {
    this._rubyVersion = value;
  }
  public resetRubyVersion() {
    this._rubyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rubyVersionInput() {
    return this._rubyVersion;
  }
}
export interface LinuxWebAppSlotSiteConfigAutoHealSettingAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#action_type LinuxWebAppSlot#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#minimum_process_execution_time LinuxWebAppSlot#minimum_process_execution_time}
  */
  readonly minimumProcessExecutionTime?: string;
}

export function linuxWebAppSlotSiteConfigAutoHealSettingActionToTerraform(struct?: LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference | LinuxWebAppSlotSiteConfigAutoHealSettingAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    minimum_process_execution_time: cdktf.stringToTerraform(struct!.minimumProcessExecutionTime),
  }
}


export function linuxWebAppSlotSiteConfigAutoHealSettingActionToHclTerraform(struct?: LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference | LinuxWebAppSlotSiteConfigAutoHealSettingAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_process_execution_time: {
      value: cdktf.stringToHclTerraform(struct!.minimumProcessExecutionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotSiteConfigAutoHealSettingAction | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotSiteConfigAutoHealSettingAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
      this._minimumProcessExecutionTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
      this._minimumProcessExecutionTime = value.minimumProcessExecutionTime;
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
}
export interface LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#count LinuxWebAppSlot#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#interval LinuxWebAppSlot#interval}
  */
  readonly interval: string;
}

export function linuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsToTerraform(struct?: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference | LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}


export function linuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsToHclTerraform(struct?: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference | LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests | undefined {
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

  public set internalValue(value: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests | undefined) {
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
export interface LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#count LinuxWebAppSlot#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#interval LinuxWebAppSlot#interval}
  */
  readonly interval: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#time_taken LinuxWebAppSlot#time_taken}
  */
  readonly timeTaken: string;
}

export function linuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestToTerraform(struct?: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference | LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval: cdktf.stringToTerraform(struct!.interval),
    time_taken: cdktf.stringToTerraform(struct!.timeTaken),
  }
}


export function linuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestToHclTerraform(struct?: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference | LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_taken: {
      value: cdktf.stringToHclTerraform(struct!.timeTaken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest | undefined {
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
    if (this._timeTaken !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTaken = this._timeTaken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._interval = undefined;
      this._timeTaken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._interval = value.interval;
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
export interface LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#count LinuxWebAppSlot#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#interval LinuxWebAppSlot#interval}
  */
  readonly interval: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#path LinuxWebAppSlot#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#time_taken LinuxWebAppSlot#time_taken}
  */
  readonly timeTaken: string;
}

export function linuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPathToTerraform(struct?: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPath | cdktf.IResolvable): any {
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


export function linuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPathToHclTerraform(struct?: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_taken: {
      value: cdktf.stringToHclTerraform(struct!.timeTaken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPath | cdktf.IResolvable | undefined {
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
    if (this._timeTaken !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTaken = this._timeTaken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._interval = undefined;
      this._path = undefined;
      this._timeTaken = undefined;
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

export class LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPathList extends cdktf.ComplexList {
  public internalValue? : LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPath[] | cdktf.IResolvable

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
  public get(index: number): LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPathOutputReference {
    return new LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#count LinuxWebAppSlot#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#interval LinuxWebAppSlot#interval}
  */
  readonly interval: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#path LinuxWebAppSlot#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#status_code_range LinuxWebAppSlot#status_code_range}
  */
  readonly statusCodeRange: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#sub_status LinuxWebAppSlot#sub_status}
  */
  readonly subStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#win32_status_code LinuxWebAppSlot#win32_status_code}
  */
  readonly win32StatusCode?: number;
}

export function linuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeToTerraform(struct?: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode | cdktf.IResolvable): any {
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
    win32_status_code: cdktf.numberToTerraform(struct!.win32StatusCode),
  }
}


export function linuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeToHclTerraform(struct?: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code_range: {
      value: cdktf.stringToHclTerraform(struct!.statusCodeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_status: {
      value: cdktf.numberToHclTerraform(struct!.subStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    win32_status_code: {
      value: cdktf.numberToHclTerraform(struct!.win32StatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode | cdktf.IResolvable | undefined {
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
    if (this._win32StatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.win32StatusCode = this._win32StatusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._interval = undefined;
      this._path = undefined;
      this._statusCodeRange = undefined;
      this._subStatus = undefined;
      this._win32StatusCode = undefined;
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
      this._win32StatusCode = value.win32StatusCode;
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

  // win32_status_code - computed: false, optional: true, required: false
  private _win32StatusCode?: number; 
  public get win32StatusCode() {
    return this.getNumberAttribute('win32_status_code');
  }
  public set win32StatusCode(value: number) {
    this._win32StatusCode = value;
  }
  public resetWin32StatusCode() {
    this._win32StatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get win32StatusCodeInput() {
    return this._win32StatusCode;
  }
}

export class LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList extends cdktf.ComplexList {
  public internalValue? : LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode[] | cdktf.IResolvable

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
  public get(index: number): LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference {
    return new LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxWebAppSlotSiteConfigAutoHealSettingTrigger {
  /**
  * requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#requests LinuxWebAppSlot#requests}
  */
  readonly requests?: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests;
  /**
  * slow_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#slow_request LinuxWebAppSlot#slow_request}
  */
  readonly slowRequest?: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest;
  /**
  * slow_request_with_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#slow_request_with_path LinuxWebAppSlot#slow_request_with_path}
  */
  readonly slowRequestWithPath?: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPath[] | cdktf.IResolvable;
  /**
  * status_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#status_code LinuxWebAppSlot#status_code}
  */
  readonly statusCode?: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode[] | cdktf.IResolvable;
}

export function linuxWebAppSlotSiteConfigAutoHealSettingTriggerToTerraform(struct?: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference | LinuxWebAppSlotSiteConfigAutoHealSettingTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    requests: linuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsToTerraform(struct!.requests),
    slow_request: linuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestToTerraform(struct!.slowRequest),
    slow_request_with_path: cdktf.listMapper(linuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPathToTerraform, true)(struct!.slowRequestWithPath),
    status_code: cdktf.listMapper(linuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeToTerraform, true)(struct!.statusCode),
  }
}


export function linuxWebAppSlotSiteConfigAutoHealSettingTriggerToHclTerraform(struct?: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference | LinuxWebAppSlotSiteConfigAutoHealSettingTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    requests: {
      value: linuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsToHclTerraform(struct!.requests),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsList",
    },
    slow_request: {
      value: linuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestToHclTerraform(struct!.slowRequest),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestList",
    },
    slow_request_with_path: {
      value: cdktf.listMapperHcl(linuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPathToHclTerraform, true)(struct!.slowRequestWithPath),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPathList",
    },
    status_code: {
      value: cdktf.listMapperHcl(linuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeToHclTerraform, true)(struct!.statusCode),
      isBlock: true,
      type: "set",
      storageClassType: "LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotSiteConfigAutoHealSettingTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    if (this._slowRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowRequest = this._slowRequest?.internalValue;
    }
    if (this._slowRequestWithPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowRequestWithPath = this._slowRequestWithPath?.internalValue;
    }
    if (this._statusCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotSiteConfigAutoHealSettingTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requests.internalValue = undefined;
      this._slowRequest.internalValue = undefined;
      this._slowRequestWithPath.internalValue = undefined;
      this._statusCode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requests.internalValue = value.requests;
      this._slowRequest.internalValue = value.slowRequest;
      this._slowRequestWithPath.internalValue = value.slowRequestWithPath;
      this._statusCode.internalValue = value.statusCode;
    }
  }

  // requests - computed: false, optional: true, required: false
  private _requests = new LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequestsOutputReference(this, "requests");
  public get requests() {
    return this._requests;
  }
  public putRequests(value: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerRequests) {
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
  private _slowRequest = new LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestOutputReference(this, "slow_request");
  public get slowRequest() {
    return this._slowRequest;
  }
  public putSlowRequest(value: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequest) {
    this._slowRequest.internalValue = value;
  }
  public resetSlowRequest() {
    this._slowRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowRequestInput() {
    return this._slowRequest.internalValue;
  }

  // slow_request_with_path - computed: false, optional: true, required: false
  private _slowRequestWithPath = new LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPathList(this, "slow_request_with_path", false);
  public get slowRequestWithPath() {
    return this._slowRequestWithPath;
  }
  public putSlowRequestWithPath(value: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerSlowRequestWithPath[] | cdktf.IResolvable) {
    this._slowRequestWithPath.internalValue = value;
  }
  public resetSlowRequestWithPath() {
    this._slowRequestWithPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowRequestWithPathInput() {
    return this._slowRequestWithPath.internalValue;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode = new LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCodeList(this, "status_code", true);
  public get statusCode() {
    return this._statusCode;
  }
  public putStatusCode(value: LinuxWebAppSlotSiteConfigAutoHealSettingTriggerStatusCode[] | cdktf.IResolvable) {
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
export interface LinuxWebAppSlotSiteConfigAutoHealSetting {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#action LinuxWebAppSlot#action}
  */
  readonly action?: LinuxWebAppSlotSiteConfigAutoHealSettingAction;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#trigger LinuxWebAppSlot#trigger}
  */
  readonly trigger?: LinuxWebAppSlotSiteConfigAutoHealSettingTrigger;
}

export function linuxWebAppSlotSiteConfigAutoHealSettingToTerraform(struct?: LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference | LinuxWebAppSlotSiteConfigAutoHealSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: linuxWebAppSlotSiteConfigAutoHealSettingActionToTerraform(struct!.action),
    trigger: linuxWebAppSlotSiteConfigAutoHealSettingTriggerToTerraform(struct!.trigger),
  }
}


export function linuxWebAppSlotSiteConfigAutoHealSettingToHclTerraform(struct?: LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference | LinuxWebAppSlotSiteConfigAutoHealSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: linuxWebAppSlotSiteConfigAutoHealSettingActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotSiteConfigAutoHealSettingActionList",
    },
    trigger: {
      value: linuxWebAppSlotSiteConfigAutoHealSettingTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotSiteConfigAutoHealSettingTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotSiteConfigAutoHealSetting | undefined {
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

  public set internalValue(value: LinuxWebAppSlotSiteConfigAutoHealSetting | undefined) {
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

  // action - computed: false, optional: true, required: false
  private _action = new LinuxWebAppSlotSiteConfigAutoHealSettingActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: LinuxWebAppSlotSiteConfigAutoHealSettingAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new LinuxWebAppSlotSiteConfigAutoHealSettingTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: LinuxWebAppSlotSiteConfigAutoHealSettingTrigger) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}
export interface LinuxWebAppSlotSiteConfigCors {
  /**
  * Specifies a list of origins that should be allowed to make cross-origin calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#allowed_origins LinuxWebAppSlot#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Are credentials allowed in CORS requests? Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#support_credentials LinuxWebAppSlot#support_credentials}
  */
  readonly supportCredentials?: boolean | cdktf.IResolvable;
}

export function linuxWebAppSlotSiteConfigCorsToTerraform(struct?: LinuxWebAppSlotSiteConfigCorsOutputReference | LinuxWebAppSlotSiteConfigCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    support_credentials: cdktf.booleanToTerraform(struct!.supportCredentials),
  }
}


export function linuxWebAppSlotSiteConfigCorsToHclTerraform(struct?: LinuxWebAppSlotSiteConfigCorsOutputReference | LinuxWebAppSlotSiteConfigCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    support_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.supportCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotSiteConfigCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotSiteConfigCors | undefined {
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

  public set internalValue(value: LinuxWebAppSlotSiteConfigCors | undefined) {
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

  // allowed_origins - computed: false, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_origins'));
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
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
export interface LinuxWebAppSlotSiteConfigIpRestrictionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#x_azure_fdid LinuxWebAppSlot#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#x_fd_health_probe LinuxWebAppSlot#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#x_forwarded_for LinuxWebAppSlot#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#x_forwarded_host LinuxWebAppSlot#x_forwarded_host}
  */
  readonly xForwardedHost?: string[];
}

export function linuxWebAppSlotSiteConfigIpRestrictionHeadersToTerraform(struct?: LinuxWebAppSlotSiteConfigIpRestrictionHeaders | cdktf.IResolvable): any {
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


export function linuxWebAppSlotSiteConfigIpRestrictionHeadersToHclTerraform(struct?: LinuxWebAppSlotSiteConfigIpRestrictionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x_azure_fdid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xAzureFdid),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    x_fd_health_probe: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xFdHealthProbe),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    x_forwarded_for: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xForwardedFor),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    x_forwarded_host: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xForwardedHost),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LinuxWebAppSlotSiteConfigIpRestrictionHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LinuxWebAppSlotSiteConfigIpRestrictionHeaders | cdktf.IResolvable | undefined) {
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

  // x_azure_fdid - computed: false, optional: true, required: false
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

  // x_fd_health_probe - computed: false, optional: true, required: false
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

  // x_forwarded_for - computed: false, optional: true, required: false
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

  // x_forwarded_host - computed: false, optional: true, required: false
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

export class LinuxWebAppSlotSiteConfigIpRestrictionHeadersList extends cdktf.ComplexList {
  public internalValue? : LinuxWebAppSlotSiteConfigIpRestrictionHeaders[] | cdktf.IResolvable

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
  public get(index: number): LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference {
    return new LinuxWebAppSlotSiteConfigIpRestrictionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxWebAppSlotSiteConfigIpRestriction {
  /**
  * The action to take. Possible values are `Allow` or `Deny`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#action LinuxWebAppSlot#action}
  */
  readonly action?: string;
  /**
  * The description of the IP restriction rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#description LinuxWebAppSlot#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#headers LinuxWebAppSlot#headers}
  */
  readonly headers?: LinuxWebAppSlotSiteConfigIpRestrictionHeaders[] | cdktf.IResolvable;
  /**
  * The CIDR notation of the IP or IP Range to match. For example: `10.0.0.0/24` or `192.168.10.1/32` or `fe80::/64` or `13.107.6.152/31,13.107.128.0/22`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#ip_address LinuxWebAppSlot#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The name which should be used for this `ip_restriction`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#name LinuxWebAppSlot#name}
  */
  readonly name?: string;
  /**
  * The priority value of this `ip_restriction`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#priority LinuxWebAppSlot#priority}
  */
  readonly priority?: number;
  /**
  * The Service Tag used for this IP Restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#service_tag LinuxWebAppSlot#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * The Virtual Network Subnet ID used for this IP Restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#virtual_network_subnet_id LinuxWebAppSlot#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
}

export function linuxWebAppSlotSiteConfigIpRestrictionToTerraform(struct?: LinuxWebAppSlotSiteConfigIpRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    headers: cdktf.listMapper(linuxWebAppSlotSiteConfigIpRestrictionHeadersToTerraform, false)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}


export function linuxWebAppSlotSiteConfigIpRestrictionToHclTerraform(struct?: LinuxWebAppSlotSiteConfigIpRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(linuxWebAppSlotSiteConfigIpRestrictionHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotSiteConfigIpRestrictionHeadersList",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_tag: {
      value: cdktf.stringToHclTerraform(struct!.serviceTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotSiteConfigIpRestrictionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LinuxWebAppSlotSiteConfigIpRestriction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
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

  public set internalValue(value: LinuxWebAppSlotSiteConfigIpRestriction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
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
      this._description = value.description;
      this._headers.internalValue = value.headers;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._priority = value.priority;
      this._serviceTag = value.serviceTag;
      this._virtualNetworkSubnetId = value.virtualNetworkSubnetId;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new LinuxWebAppSlotSiteConfigIpRestrictionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: LinuxWebAppSlotSiteConfigIpRestrictionHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // ip_address - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
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

  // service_tag - computed: false, optional: true, required: false
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
}

export class LinuxWebAppSlotSiteConfigIpRestrictionList extends cdktf.ComplexList {
  public internalValue? : LinuxWebAppSlotSiteConfigIpRestriction[] | cdktf.IResolvable

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
  public get(index: number): LinuxWebAppSlotSiteConfigIpRestrictionOutputReference {
    return new LinuxWebAppSlotSiteConfigIpRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#x_azure_fdid LinuxWebAppSlot#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#x_fd_health_probe LinuxWebAppSlot#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#x_forwarded_for LinuxWebAppSlot#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#x_forwarded_host LinuxWebAppSlot#x_forwarded_host}
  */
  readonly xForwardedHost?: string[];
}

export function linuxWebAppSlotSiteConfigScmIpRestrictionHeadersToTerraform(struct?: LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders | cdktf.IResolvable): any {
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


export function linuxWebAppSlotSiteConfigScmIpRestrictionHeadersToHclTerraform(struct?: LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x_azure_fdid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xAzureFdid),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    x_fd_health_probe: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xFdHealthProbe),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    x_forwarded_for: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xForwardedFor),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    x_forwarded_host: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xForwardedHost),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders | cdktf.IResolvable | undefined) {
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

  // x_azure_fdid - computed: false, optional: true, required: false
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

  // x_fd_health_probe - computed: false, optional: true, required: false
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

  // x_forwarded_for - computed: false, optional: true, required: false
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

  // x_forwarded_host - computed: false, optional: true, required: false
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

export class LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList extends cdktf.ComplexList {
  public internalValue? : LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders[] | cdktf.IResolvable

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
  public get(index: number): LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference {
    return new LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxWebAppSlotSiteConfigScmIpRestriction {
  /**
  * The action to take. Possible values are `Allow` or `Deny`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#action LinuxWebAppSlot#action}
  */
  readonly action?: string;
  /**
  * The description of the IP restriction rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#description LinuxWebAppSlot#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#headers LinuxWebAppSlot#headers}
  */
  readonly headers?: LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders[] | cdktf.IResolvable;
  /**
  * The CIDR notation of the IP or IP Range to match. For example: `10.0.0.0/24` or `192.168.10.1/32` or `fe80::/64` or `13.107.6.152/31,13.107.128.0/22`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#ip_address LinuxWebAppSlot#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The name which should be used for this `ip_restriction`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#name LinuxWebAppSlot#name}
  */
  readonly name?: string;
  /**
  * The priority value of this `ip_restriction`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#priority LinuxWebAppSlot#priority}
  */
  readonly priority?: number;
  /**
  * The Service Tag used for this IP Restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#service_tag LinuxWebAppSlot#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * The Virtual Network Subnet ID used for this IP Restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#virtual_network_subnet_id LinuxWebAppSlot#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
}

export function linuxWebAppSlotSiteConfigScmIpRestrictionToTerraform(struct?: LinuxWebAppSlotSiteConfigScmIpRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    headers: cdktf.listMapper(linuxWebAppSlotSiteConfigScmIpRestrictionHeadersToTerraform, false)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}


export function linuxWebAppSlotSiteConfigScmIpRestrictionToHclTerraform(struct?: LinuxWebAppSlotSiteConfigScmIpRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(linuxWebAppSlotSiteConfigScmIpRestrictionHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_tag: {
      value: cdktf.stringToHclTerraform(struct!.serviceTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LinuxWebAppSlotSiteConfigScmIpRestriction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
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

  public set internalValue(value: LinuxWebAppSlotSiteConfigScmIpRestriction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
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
      this._description = value.description;
      this._headers.internalValue = value.headers;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._priority = value.priority;
      this._serviceTag = value.serviceTag;
      this._virtualNetworkSubnetId = value.virtualNetworkSubnetId;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new LinuxWebAppSlotSiteConfigScmIpRestrictionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: LinuxWebAppSlotSiteConfigScmIpRestrictionHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // ip_address - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
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

  // service_tag - computed: false, optional: true, required: false
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
}

export class LinuxWebAppSlotSiteConfigScmIpRestrictionList extends cdktf.ComplexList {
  public internalValue? : LinuxWebAppSlotSiteConfigScmIpRestriction[] | cdktf.IResolvable

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
  public get(index: number): LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference {
    return new LinuxWebAppSlotSiteConfigScmIpRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxWebAppSlotSiteConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#always_on LinuxWebAppSlot#always_on}
  */
  readonly alwaysOn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#api_definition_url LinuxWebAppSlot#api_definition_url}
  */
  readonly apiDefinitionUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#api_management_api_id LinuxWebAppSlot#api_management_api_id}
  */
  readonly apiManagementApiId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#app_command_line LinuxWebAppSlot#app_command_line}
  */
  readonly appCommandLine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#auto_swap_slot_name LinuxWebAppSlot#auto_swap_slot_name}
  */
  readonly autoSwapSlotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#container_registry_managed_identity_client_id LinuxWebAppSlot#container_registry_managed_identity_client_id}
  */
  readonly containerRegistryManagedIdentityClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#container_registry_use_managed_identity LinuxWebAppSlot#container_registry_use_managed_identity}
  */
  readonly containerRegistryUseManagedIdentity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#default_documents LinuxWebAppSlot#default_documents}
  */
  readonly defaultDocuments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#ftps_state LinuxWebAppSlot#ftps_state}
  */
  readonly ftpsState?: string;
  /**
  * The amount of time in minutes that a node is unhealthy before being removed from the load balancer. Possible values are between `2` and `10`. Only valid in conjunction with `health_check_path`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#health_check_eviction_time_in_min LinuxWebAppSlot#health_check_eviction_time_in_min}
  */
  readonly healthCheckEvictionTimeInMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#health_check_path LinuxWebAppSlot#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#http2_enabled LinuxWebAppSlot#http2_enabled}
  */
  readonly http2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#ip_restriction_default_action LinuxWebAppSlot#ip_restriction_default_action}
  */
  readonly ipRestrictionDefaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#load_balancing_mode LinuxWebAppSlot#load_balancing_mode}
  */
  readonly loadBalancingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#local_mysql_enabled LinuxWebAppSlot#local_mysql_enabled}
  */
  readonly localMysqlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#managed_pipeline_mode LinuxWebAppSlot#managed_pipeline_mode}
  */
  readonly managedPipelineMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#minimum_tls_version LinuxWebAppSlot#minimum_tls_version}
  */
  readonly minimumTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#remote_debugging_enabled LinuxWebAppSlot#remote_debugging_enabled}
  */
  readonly remoteDebuggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#remote_debugging_version LinuxWebAppSlot#remote_debugging_version}
  */
  readonly remoteDebuggingVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#scm_ip_restriction_default_action LinuxWebAppSlot#scm_ip_restriction_default_action}
  */
  readonly scmIpRestrictionDefaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#scm_minimum_tls_version LinuxWebAppSlot#scm_minimum_tls_version}
  */
  readonly scmMinimumTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#scm_use_main_ip_restriction LinuxWebAppSlot#scm_use_main_ip_restriction}
  */
  readonly scmUseMainIpRestriction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#use_32_bit_worker LinuxWebAppSlot#use_32_bit_worker}
  */
  readonly use32BitWorker?: boolean | cdktf.IResolvable;
  /**
  * Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#vnet_route_all_enabled LinuxWebAppSlot#vnet_route_all_enabled}
  */
  readonly vnetRouteAllEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#websockets_enabled LinuxWebAppSlot#websockets_enabled}
  */
  readonly websocketsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#worker_count LinuxWebAppSlot#worker_count}
  */
  readonly workerCount?: number;
  /**
  * application_stack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#application_stack LinuxWebAppSlot#application_stack}
  */
  readonly applicationStack?: LinuxWebAppSlotSiteConfigApplicationStack;
  /**
  * auto_heal_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#auto_heal_setting LinuxWebAppSlot#auto_heal_setting}
  */
  readonly autoHealSetting?: LinuxWebAppSlotSiteConfigAutoHealSetting;
  /**
  * cors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#cors LinuxWebAppSlot#cors}
  */
  readonly cors?: LinuxWebAppSlotSiteConfigCors;
  /**
  * ip_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#ip_restriction LinuxWebAppSlot#ip_restriction}
  */
  readonly ipRestriction?: LinuxWebAppSlotSiteConfigIpRestriction[] | cdktf.IResolvable;
  /**
  * scm_ip_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#scm_ip_restriction LinuxWebAppSlot#scm_ip_restriction}
  */
  readonly scmIpRestriction?: LinuxWebAppSlotSiteConfigScmIpRestriction[] | cdktf.IResolvable;
}

export function linuxWebAppSlotSiteConfigToTerraform(struct?: LinuxWebAppSlotSiteConfigOutputReference | LinuxWebAppSlotSiteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_on: cdktf.booleanToTerraform(struct!.alwaysOn),
    api_definition_url: cdktf.stringToTerraform(struct!.apiDefinitionUrl),
    api_management_api_id: cdktf.stringToTerraform(struct!.apiManagementApiId),
    app_command_line: cdktf.stringToTerraform(struct!.appCommandLine),
    auto_swap_slot_name: cdktf.stringToTerraform(struct!.autoSwapSlotName),
    container_registry_managed_identity_client_id: cdktf.stringToTerraform(struct!.containerRegistryManagedIdentityClientId),
    container_registry_use_managed_identity: cdktf.booleanToTerraform(struct!.containerRegistryUseManagedIdentity),
    default_documents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultDocuments),
    ftps_state: cdktf.stringToTerraform(struct!.ftpsState),
    health_check_eviction_time_in_min: cdktf.numberToTerraform(struct!.healthCheckEvictionTimeInMin),
    health_check_path: cdktf.stringToTerraform(struct!.healthCheckPath),
    http2_enabled: cdktf.booleanToTerraform(struct!.http2Enabled),
    ip_restriction_default_action: cdktf.stringToTerraform(struct!.ipRestrictionDefaultAction),
    load_balancing_mode: cdktf.stringToTerraform(struct!.loadBalancingMode),
    local_mysql_enabled: cdktf.booleanToTerraform(struct!.localMysqlEnabled),
    managed_pipeline_mode: cdktf.stringToTerraform(struct!.managedPipelineMode),
    minimum_tls_version: cdktf.stringToTerraform(struct!.minimumTlsVersion),
    remote_debugging_enabled: cdktf.booleanToTerraform(struct!.remoteDebuggingEnabled),
    remote_debugging_version: cdktf.stringToTerraform(struct!.remoteDebuggingVersion),
    scm_ip_restriction_default_action: cdktf.stringToTerraform(struct!.scmIpRestrictionDefaultAction),
    scm_minimum_tls_version: cdktf.stringToTerraform(struct!.scmMinimumTlsVersion),
    scm_use_main_ip_restriction: cdktf.booleanToTerraform(struct!.scmUseMainIpRestriction),
    use_32_bit_worker: cdktf.booleanToTerraform(struct!.use32BitWorker),
    vnet_route_all_enabled: cdktf.booleanToTerraform(struct!.vnetRouteAllEnabled),
    websockets_enabled: cdktf.booleanToTerraform(struct!.websocketsEnabled),
    worker_count: cdktf.numberToTerraform(struct!.workerCount),
    application_stack: linuxWebAppSlotSiteConfigApplicationStackToTerraform(struct!.applicationStack),
    auto_heal_setting: linuxWebAppSlotSiteConfigAutoHealSettingToTerraform(struct!.autoHealSetting),
    cors: linuxWebAppSlotSiteConfigCorsToTerraform(struct!.cors),
    ip_restriction: cdktf.listMapper(linuxWebAppSlotSiteConfigIpRestrictionToTerraform, true)(struct!.ipRestriction),
    scm_ip_restriction: cdktf.listMapper(linuxWebAppSlotSiteConfigScmIpRestrictionToTerraform, true)(struct!.scmIpRestriction),
  }
}


export function linuxWebAppSlotSiteConfigToHclTerraform(struct?: LinuxWebAppSlotSiteConfigOutputReference | LinuxWebAppSlotSiteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_on: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysOn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_definition_url: {
      value: cdktf.stringToHclTerraform(struct!.apiDefinitionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_management_api_id: {
      value: cdktf.stringToHclTerraform(struct!.apiManagementApiId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_command_line: {
      value: cdktf.stringToHclTerraform(struct!.appCommandLine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_swap_slot_name: {
      value: cdktf.stringToHclTerraform(struct!.autoSwapSlotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_registry_managed_identity_client_id: {
      value: cdktf.stringToHclTerraform(struct!.containerRegistryManagedIdentityClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_registry_use_managed_identity: {
      value: cdktf.booleanToHclTerraform(struct!.containerRegistryUseManagedIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_documents: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultDocuments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ftps_state: {
      value: cdktf.stringToHclTerraform(struct!.ftpsState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_eviction_time_in_min: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckEvictionTimeInMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_path: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http2_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.http2Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_restriction_default_action: {
      value: cdktf.stringToHclTerraform(struct!.ipRestrictionDefaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancing_mode: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_mysql_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.localMysqlEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    managed_pipeline_mode: {
      value: cdktf.stringToHclTerraform(struct!.managedPipelineMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.minimumTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_debugging_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.remoteDebuggingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_debugging_version: {
      value: cdktf.stringToHclTerraform(struct!.remoteDebuggingVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scm_ip_restriction_default_action: {
      value: cdktf.stringToHclTerraform(struct!.scmIpRestrictionDefaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scm_minimum_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.scmMinimumTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scm_use_main_ip_restriction: {
      value: cdktf.booleanToHclTerraform(struct!.scmUseMainIpRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_32_bit_worker: {
      value: cdktf.booleanToHclTerraform(struct!.use32BitWorker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vnet_route_all_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.vnetRouteAllEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    websockets_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.websocketsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    worker_count: {
      value: cdktf.numberToHclTerraform(struct!.workerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    application_stack: {
      value: linuxWebAppSlotSiteConfigApplicationStackToHclTerraform(struct!.applicationStack),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotSiteConfigApplicationStackList",
    },
    auto_heal_setting: {
      value: linuxWebAppSlotSiteConfigAutoHealSettingToHclTerraform(struct!.autoHealSetting),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotSiteConfigAutoHealSettingList",
    },
    cors: {
      value: linuxWebAppSlotSiteConfigCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotSiteConfigCorsList",
    },
    ip_restriction: {
      value: cdktf.listMapperHcl(linuxWebAppSlotSiteConfigIpRestrictionToHclTerraform, true)(struct!.ipRestriction),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotSiteConfigIpRestrictionList",
    },
    scm_ip_restriction: {
      value: cdktf.listMapperHcl(linuxWebAppSlotSiteConfigScmIpRestrictionToHclTerraform, true)(struct!.scmIpRestriction),
      isBlock: true,
      type: "list",
      storageClassType: "LinuxWebAppSlotSiteConfigScmIpRestrictionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotSiteConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinuxWebAppSlotSiteConfig | undefined {
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
    if (this._ipRestrictionDefaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRestrictionDefaultAction = this._ipRestrictionDefaultAction;
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
    if (this._scmIpRestrictionDefaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.scmIpRestrictionDefaultAction = this._scmIpRestrictionDefaultAction;
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
    if (this._ipRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRestriction = this._ipRestriction?.internalValue;
    }
    if (this._scmIpRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scmIpRestriction = this._scmIpRestriction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxWebAppSlotSiteConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysOn = undefined;
      this._apiDefinitionUrl = undefined;
      this._apiManagementApiId = undefined;
      this._appCommandLine = undefined;
      this._autoSwapSlotName = undefined;
      this._containerRegistryManagedIdentityClientId = undefined;
      this._containerRegistryUseManagedIdentity = undefined;
      this._defaultDocuments = undefined;
      this._ftpsState = undefined;
      this._healthCheckEvictionTimeInMin = undefined;
      this._healthCheckPath = undefined;
      this._http2Enabled = undefined;
      this._ipRestrictionDefaultAction = undefined;
      this._loadBalancingMode = undefined;
      this._localMysqlEnabled = undefined;
      this._managedPipelineMode = undefined;
      this._minimumTlsVersion = undefined;
      this._remoteDebuggingEnabled = undefined;
      this._remoteDebuggingVersion = undefined;
      this._scmIpRestrictionDefaultAction = undefined;
      this._scmMinimumTlsVersion = undefined;
      this._scmUseMainIpRestriction = undefined;
      this._use32BitWorker = undefined;
      this._vnetRouteAllEnabled = undefined;
      this._websocketsEnabled = undefined;
      this._workerCount = undefined;
      this._applicationStack.internalValue = undefined;
      this._autoHealSetting.internalValue = undefined;
      this._cors.internalValue = undefined;
      this._ipRestriction.internalValue = undefined;
      this._scmIpRestriction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysOn = value.alwaysOn;
      this._apiDefinitionUrl = value.apiDefinitionUrl;
      this._apiManagementApiId = value.apiManagementApiId;
      this._appCommandLine = value.appCommandLine;
      this._autoSwapSlotName = value.autoSwapSlotName;
      this._containerRegistryManagedIdentityClientId = value.containerRegistryManagedIdentityClientId;
      this._containerRegistryUseManagedIdentity = value.containerRegistryUseManagedIdentity;
      this._defaultDocuments = value.defaultDocuments;
      this._ftpsState = value.ftpsState;
      this._healthCheckEvictionTimeInMin = value.healthCheckEvictionTimeInMin;
      this._healthCheckPath = value.healthCheckPath;
      this._http2Enabled = value.http2Enabled;
      this._ipRestrictionDefaultAction = value.ipRestrictionDefaultAction;
      this._loadBalancingMode = value.loadBalancingMode;
      this._localMysqlEnabled = value.localMysqlEnabled;
      this._managedPipelineMode = value.managedPipelineMode;
      this._minimumTlsVersion = value.minimumTlsVersion;
      this._remoteDebuggingEnabled = value.remoteDebuggingEnabled;
      this._remoteDebuggingVersion = value.remoteDebuggingVersion;
      this._scmIpRestrictionDefaultAction = value.scmIpRestrictionDefaultAction;
      this._scmMinimumTlsVersion = value.scmMinimumTlsVersion;
      this._scmUseMainIpRestriction = value.scmUseMainIpRestriction;
      this._use32BitWorker = value.use32BitWorker;
      this._vnetRouteAllEnabled = value.vnetRouteAllEnabled;
      this._websocketsEnabled = value.websocketsEnabled;
      this._workerCount = value.workerCount;
      this._applicationStack.internalValue = value.applicationStack;
      this._autoHealSetting.internalValue = value.autoHealSetting;
      this._cors.internalValue = value.cors;
      this._ipRestriction.internalValue = value.ipRestriction;
      this._scmIpRestriction.internalValue = value.scmIpRestriction;
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

  // health_check_eviction_time_in_min - computed: false, optional: true, required: false
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

  // ip_restriction_default_action - computed: false, optional: true, required: false
  private _ipRestrictionDefaultAction?: string; 
  public get ipRestrictionDefaultAction() {
    return this.getStringAttribute('ip_restriction_default_action');
  }
  public set ipRestrictionDefaultAction(value: string) {
    this._ipRestrictionDefaultAction = value;
  }
  public resetIpRestrictionDefaultAction() {
    this._ipRestrictionDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionDefaultActionInput() {
    return this._ipRestrictionDefaultAction;
  }

  // linux_fx_version - computed: true, optional: false, required: false
  public get linuxFxVersion() {
    return this.getStringAttribute('linux_fx_version');
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

  // scm_ip_restriction_default_action - computed: false, optional: true, required: false
  private _scmIpRestrictionDefaultAction?: string; 
  public get scmIpRestrictionDefaultAction() {
    return this.getStringAttribute('scm_ip_restriction_default_action');
  }
  public set scmIpRestrictionDefaultAction(value: string) {
    this._scmIpRestrictionDefaultAction = value;
  }
  public resetScmIpRestrictionDefaultAction() {
    this._scmIpRestrictionDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmIpRestrictionDefaultActionInput() {
    return this._scmIpRestrictionDefaultAction;
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

  // use_32_bit_worker - computed: false, optional: true, required: false
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
  private _applicationStack = new LinuxWebAppSlotSiteConfigApplicationStackOutputReference(this, "application_stack");
  public get applicationStack() {
    return this._applicationStack;
  }
  public putApplicationStack(value: LinuxWebAppSlotSiteConfigApplicationStack) {
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
  private _autoHealSetting = new LinuxWebAppSlotSiteConfigAutoHealSettingOutputReference(this, "auto_heal_setting");
  public get autoHealSetting() {
    return this._autoHealSetting;
  }
  public putAutoHealSetting(value: LinuxWebAppSlotSiteConfigAutoHealSetting) {
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
  private _cors = new LinuxWebAppSlotSiteConfigCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: LinuxWebAppSlotSiteConfigCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // ip_restriction - computed: false, optional: true, required: false
  private _ipRestriction = new LinuxWebAppSlotSiteConfigIpRestrictionList(this, "ip_restriction", false);
  public get ipRestriction() {
    return this._ipRestriction;
  }
  public putIpRestriction(value: LinuxWebAppSlotSiteConfigIpRestriction[] | cdktf.IResolvable) {
    this._ipRestriction.internalValue = value;
  }
  public resetIpRestriction() {
    this._ipRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionInput() {
    return this._ipRestriction.internalValue;
  }

  // scm_ip_restriction - computed: false, optional: true, required: false
  private _scmIpRestriction = new LinuxWebAppSlotSiteConfigScmIpRestrictionList(this, "scm_ip_restriction", false);
  public get scmIpRestriction() {
    return this._scmIpRestriction;
  }
  public putScmIpRestriction(value: LinuxWebAppSlotSiteConfigScmIpRestriction[] | cdktf.IResolvable) {
    this._scmIpRestriction.internalValue = value;
  }
  public resetScmIpRestriction() {
    this._scmIpRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmIpRestrictionInput() {
    return this._scmIpRestriction.internalValue;
  }
}
export interface LinuxWebAppSlotStorageAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#access_key LinuxWebAppSlot#access_key}
  */
  readonly accessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#account_name LinuxWebAppSlot#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#mount_path LinuxWebAppSlot#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#name LinuxWebAppSlot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#share_name LinuxWebAppSlot#share_name}
  */
  readonly shareName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#type LinuxWebAppSlot#type}
  */
  readonly type: string;
}

export function linuxWebAppSlotStorageAccountToTerraform(struct?: LinuxWebAppSlotStorageAccount | cdktf.IResolvable): any {
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


export function linuxWebAppSlotStorageAccountToHclTerraform(struct?: LinuxWebAppSlotStorageAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_name: {
      value: cdktf.stringToHclTerraform(struct!.shareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotStorageAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LinuxWebAppSlotStorageAccount | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LinuxWebAppSlotStorageAccount | cdktf.IResolvable | undefined) {
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

export class LinuxWebAppSlotStorageAccountList extends cdktf.ComplexList {
  public internalValue? : LinuxWebAppSlotStorageAccount[] | cdktf.IResolvable

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
  public get(index: number): LinuxWebAppSlotStorageAccountOutputReference {
    return new LinuxWebAppSlotStorageAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinuxWebAppSlotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#create LinuxWebAppSlot#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#delete LinuxWebAppSlot#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#read LinuxWebAppSlot#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#update LinuxWebAppSlot#update}
  */
  readonly update?: string;
}

export function linuxWebAppSlotTimeoutsToTerraform(struct?: LinuxWebAppSlotTimeouts | cdktf.IResolvable): any {
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


export function linuxWebAppSlotTimeoutsToHclTerraform(struct?: LinuxWebAppSlotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinuxWebAppSlotTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LinuxWebAppSlotTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LinuxWebAppSlotTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot azurerm_linux_web_app_slot}
*/
export class LinuxWebAppSlot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_linux_web_app_slot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LinuxWebAppSlot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LinuxWebAppSlot to import
  * @param importFromId The id of the existing LinuxWebAppSlot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LinuxWebAppSlot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_linux_web_app_slot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/linux_web_app_slot azurerm_linux_web_app_slot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LinuxWebAppSlotConfig
  */
  public constructor(scope: Construct, id: string, config: LinuxWebAppSlotConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_linux_web_app_slot',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
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
    this._clientCertificateExclusionPaths = config.clientCertificateExclusionPaths;
    this._clientCertificateMode = config.clientCertificateMode;
    this._enabled = config.enabled;
    this._ftpPublishBasicAuthenticationEnabled = config.ftpPublishBasicAuthenticationEnabled;
    this._httpsOnly = config.httpsOnly;
    this._id = config.id;
    this._keyVaultReferenceIdentityId = config.keyVaultReferenceIdentityId;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._servicePlanId = config.servicePlanId;
    this._tags = config.tags;
    this._virtualNetworkSubnetId = config.virtualNetworkSubnetId;
    this._webdeployPublishBasicAuthenticationEnabled = config.webdeployPublishBasicAuthenticationEnabled;
    this._zipDeployFile = config.zipDeployFile;
    this._authSettings.internalValue = config.authSettings;
    this._authSettingsV2.internalValue = config.authSettingsV2;
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

  // app_metadata - computed: true, optional: false, required: false
  private _appMetadata = new cdktf.StringMap(this, "app_metadata");
  public get appMetadata() {
    return this._appMetadata;
  }

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

  // client_certificate_exclusion_paths - computed: false, optional: true, required: false
  private _clientCertificateExclusionPaths?: string; 
  public get clientCertificateExclusionPaths() {
    return this.getStringAttribute('client_certificate_exclusion_paths');
  }
  public set clientCertificateExclusionPaths(value: string) {
    this._clientCertificateExclusionPaths = value;
  }
  public resetClientCertificateExclusionPaths() {
    this._clientCertificateExclusionPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateExclusionPathsInput() {
    return this._clientCertificateExclusionPaths;
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

  // ftp_publish_basic_authentication_enabled - computed: false, optional: true, required: false
  private _ftpPublishBasicAuthenticationEnabled?: boolean | cdktf.IResolvable; 
  public get ftpPublishBasicAuthenticationEnabled() {
    return this.getBooleanAttribute('ftp_publish_basic_authentication_enabled');
  }
  public set ftpPublishBasicAuthenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._ftpPublishBasicAuthenticationEnabled = value;
  }
  public resetFtpPublishBasicAuthenticationEnabled() {
    this._ftpPublishBasicAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpPublishBasicAuthenticationEnabledInput() {
    return this._ftpPublishBasicAuthenticationEnabled;
  }

  // hosting_environment_id - computed: true, optional: false, required: false
  public get hostingEnvironmentId() {
    return this.getStringAttribute('hosting_environment_id');
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

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
  }

  // service_plan_id - computed: false, optional: true, required: false
  private _servicePlanId?: string; 
  public get servicePlanId() {
    return this.getStringAttribute('service_plan_id');
  }
  public set servicePlanId(value: string) {
    this._servicePlanId = value;
  }
  public resetServicePlanId() {
    this._servicePlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePlanIdInput() {
    return this._servicePlanId;
  }

  // site_credential - computed: true, optional: false, required: false
  private _siteCredential = new LinuxWebAppSlotSiteCredentialList(this, "site_credential", false);
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

  // webdeploy_publish_basic_authentication_enabled - computed: false, optional: true, required: false
  private _webdeployPublishBasicAuthenticationEnabled?: boolean | cdktf.IResolvable; 
  public get webdeployPublishBasicAuthenticationEnabled() {
    return this.getBooleanAttribute('webdeploy_publish_basic_authentication_enabled');
  }
  public set webdeployPublishBasicAuthenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._webdeployPublishBasicAuthenticationEnabled = value;
  }
  public resetWebdeployPublishBasicAuthenticationEnabled() {
    this._webdeployPublishBasicAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webdeployPublishBasicAuthenticationEnabledInput() {
    return this._webdeployPublishBasicAuthenticationEnabled;
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
  private _authSettings = new LinuxWebAppSlotAuthSettingsOutputReference(this, "auth_settings");
  public get authSettings() {
    return this._authSettings;
  }
  public putAuthSettings(value: LinuxWebAppSlotAuthSettings) {
    this._authSettings.internalValue = value;
  }
  public resetAuthSettings() {
    this._authSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSettingsInput() {
    return this._authSettings.internalValue;
  }

  // auth_settings_v2 - computed: false, optional: true, required: false
  private _authSettingsV2 = new LinuxWebAppSlotAuthSettingsV2OutputReference(this, "auth_settings_v2");
  public get authSettingsV2() {
    return this._authSettingsV2;
  }
  public putAuthSettingsV2(value: LinuxWebAppSlotAuthSettingsV2) {
    this._authSettingsV2.internalValue = value;
  }
  public resetAuthSettingsV2() {
    this._authSettingsV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSettingsV2Input() {
    return this._authSettingsV2.internalValue;
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new LinuxWebAppSlotBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: LinuxWebAppSlotBackup) {
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
  private _connectionString = new LinuxWebAppSlotConnectionStringList(this, "connection_string", true);
  public get connectionString() {
    return this._connectionString;
  }
  public putConnectionString(value: LinuxWebAppSlotConnectionString[] | cdktf.IResolvable) {
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
  private _identity = new LinuxWebAppSlotIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: LinuxWebAppSlotIdentity) {
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
  private _logs = new LinuxWebAppSlotLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: LinuxWebAppSlotLogs) {
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
  private _siteConfig = new LinuxWebAppSlotSiteConfigOutputReference(this, "site_config");
  public get siteConfig() {
    return this._siteConfig;
  }
  public putSiteConfig(value: LinuxWebAppSlotSiteConfig) {
    this._siteConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteConfigInput() {
    return this._siteConfig.internalValue;
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount = new LinuxWebAppSlotStorageAccountList(this, "storage_account", true);
  public get storageAccount() {
    return this._storageAccount;
  }
  public putStorageAccount(value: LinuxWebAppSlotStorageAccount[] | cdktf.IResolvable) {
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
  private _timeouts = new LinuxWebAppSlotTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LinuxWebAppSlotTimeouts) {
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
      client_certificate_exclusion_paths: cdktf.stringToTerraform(this._clientCertificateExclusionPaths),
      client_certificate_mode: cdktf.stringToTerraform(this._clientCertificateMode),
      enabled: cdktf.booleanToTerraform(this._enabled),
      ftp_publish_basic_authentication_enabled: cdktf.booleanToTerraform(this._ftpPublishBasicAuthenticationEnabled),
      https_only: cdktf.booleanToTerraform(this._httpsOnly),
      id: cdktf.stringToTerraform(this._id),
      key_vault_reference_identity_id: cdktf.stringToTerraform(this._keyVaultReferenceIdentityId),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      service_plan_id: cdktf.stringToTerraform(this._servicePlanId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      virtual_network_subnet_id: cdktf.stringToTerraform(this._virtualNetworkSubnetId),
      webdeploy_publish_basic_authentication_enabled: cdktf.booleanToTerraform(this._webdeployPublishBasicAuthenticationEnabled),
      zip_deploy_file: cdktf.stringToTerraform(this._zipDeployFile),
      auth_settings: linuxWebAppSlotAuthSettingsToTerraform(this._authSettings.internalValue),
      auth_settings_v2: linuxWebAppSlotAuthSettingsV2ToTerraform(this._authSettingsV2.internalValue),
      backup: linuxWebAppSlotBackupToTerraform(this._backup.internalValue),
      connection_string: cdktf.listMapper(linuxWebAppSlotConnectionStringToTerraform, true)(this._connectionString.internalValue),
      identity: linuxWebAppSlotIdentityToTerraform(this._identity.internalValue),
      logs: linuxWebAppSlotLogsToTerraform(this._logs.internalValue),
      site_config: linuxWebAppSlotSiteConfigToTerraform(this._siteConfig.internalValue),
      storage_account: cdktf.listMapper(linuxWebAppSlotStorageAccountToTerraform, true)(this._storageAccount.internalValue),
      timeouts: linuxWebAppSlotTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_service_id: {
        value: cdktf.stringToHclTerraform(this._appServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._appSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      client_affinity_enabled: {
        value: cdktf.booleanToHclTerraform(this._clientAffinityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_certificate_enabled: {
        value: cdktf.booleanToHclTerraform(this._clientCertificateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_certificate_exclusion_paths: {
        value: cdktf.stringToHclTerraform(this._clientCertificateExclusionPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_mode: {
        value: cdktf.stringToHclTerraform(this._clientCertificateMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ftp_publish_basic_authentication_enabled: {
        value: cdktf.booleanToHclTerraform(this._ftpPublishBasicAuthenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      https_only: {
        value: cdktf.booleanToHclTerraform(this._httpsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_vault_reference_identity_id: {
        value: cdktf.stringToHclTerraform(this._keyVaultReferenceIdentityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_plan_id: {
        value: cdktf.stringToHclTerraform(this._servicePlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      virtual_network_subnet_id: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webdeploy_publish_basic_authentication_enabled: {
        value: cdktf.booleanToHclTerraform(this._webdeployPublishBasicAuthenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zip_deploy_file: {
        value: cdktf.stringToHclTerraform(this._zipDeployFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_settings: {
        value: linuxWebAppSlotAuthSettingsToHclTerraform(this._authSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LinuxWebAppSlotAuthSettingsList",
      },
      auth_settings_v2: {
        value: linuxWebAppSlotAuthSettingsV2ToHclTerraform(this._authSettingsV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LinuxWebAppSlotAuthSettingsV2List",
      },
      backup: {
        value: linuxWebAppSlotBackupToHclTerraform(this._backup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LinuxWebAppSlotBackupList",
      },
      connection_string: {
        value: cdktf.listMapperHcl(linuxWebAppSlotConnectionStringToHclTerraform, true)(this._connectionString.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LinuxWebAppSlotConnectionStringList",
      },
      identity: {
        value: linuxWebAppSlotIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LinuxWebAppSlotIdentityList",
      },
      logs: {
        value: linuxWebAppSlotLogsToHclTerraform(this._logs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LinuxWebAppSlotLogsList",
      },
      site_config: {
        value: linuxWebAppSlotSiteConfigToHclTerraform(this._siteConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LinuxWebAppSlotSiteConfigList",
      },
      storage_account: {
        value: cdktf.listMapperHcl(linuxWebAppSlotStorageAccountToHclTerraform, true)(this._storageAccount.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LinuxWebAppSlotStorageAccountList",
      },
      timeouts: {
        value: linuxWebAppSlotTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LinuxWebAppSlotTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
