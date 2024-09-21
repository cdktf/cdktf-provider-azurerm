// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WindowsFunctionAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * A map of key-value pairs for [App Settings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-app-settings) and custom values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#app_settings WindowsFunctionApp#app_settings}
  */
  readonly appSettings?: { [key: string]: string };
  /**
  * Should built in logging be enabled. Configures `AzureWebJobsDashboard` app setting based on the configured storage setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#builtin_logging_enabled WindowsFunctionApp#builtin_logging_enabled}
  */
  readonly builtinLoggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Should the function app use Client Certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_certificate_enabled WindowsFunctionApp#client_certificate_enabled}
  */
  readonly clientCertificateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Paths to exclude when using client certificates, separated by ;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_certificate_exclusion_paths WindowsFunctionApp#client_certificate_exclusion_paths}
  */
  readonly clientCertificateExclusionPaths?: string;
  /**
  * The mode of the Function App's client certificates requirement for incoming requests. Possible values are `Required`, `Optional`, and `OptionalInteractiveUser` 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_certificate_mode WindowsFunctionApp#client_certificate_mode}
  */
  readonly clientCertificateMode?: string;
  /**
  * Force disable the content share settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#content_share_force_disabled WindowsFunctionApp#content_share_force_disabled}
  */
  readonly contentShareForceDisabled?: boolean | cdktf.IResolvable;
  /**
  * The amount of memory in gigabyte-seconds that your application is allowed to consume per day. Setting this value only affects function apps in Consumption Plans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#daily_memory_time_quota WindowsFunctionApp#daily_memory_time_quota}
  */
  readonly dailyMemoryTimeQuota?: number;
  /**
  * Is the Windows Function App enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#enabled WindowsFunctionApp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#ftp_publish_basic_authentication_enabled WindowsFunctionApp#ftp_publish_basic_authentication_enabled}
  */
  readonly ftpPublishBasicAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The runtime version associated with the Function App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#functions_extension_version WindowsFunctionApp#functions_extension_version}
  */
  readonly functionsExtensionVersion?: string;
  /**
  * Can the Function App only be accessed via HTTPS?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#https_only WindowsFunctionApp#https_only}
  */
  readonly httpsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#id WindowsFunctionApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The User Assigned Identity to use for Key Vault access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#key_vault_reference_identity_id WindowsFunctionApp#key_vault_reference_identity_id}
  */
  readonly keyVaultReferenceIdentityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#location WindowsFunctionApp#location}
  */
  readonly location: string;
  /**
  * Specifies the name of the Function App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#name WindowsFunctionApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#public_network_access_enabled WindowsFunctionApp#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#resource_group_name WindowsFunctionApp#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * The ID of the App Service Plan within which to create this Function App
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#service_plan_id WindowsFunctionApp#service_plan_id}
  */
  readonly servicePlanId: string;
  /**
  * The access key which will be used to access the storage account for the Function App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#storage_account_access_key WindowsFunctionApp#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * The backend storage account name which will be used by this Function App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#storage_account_name WindowsFunctionApp#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * The Key Vault Secret ID, including version, that contains the Connection String to connect to the storage account for this Function App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#storage_key_vault_secret_id WindowsFunctionApp#storage_key_vault_secret_id}
  */
  readonly storageKeyVaultSecretId?: string;
  /**
  * Should the Function App use its Managed Identity to access storage?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#storage_uses_managed_identity WindowsFunctionApp#storage_uses_managed_identity}
  */
  readonly storageUsesManagedIdentity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#tags WindowsFunctionApp#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
  /**
  * Is container image pull over virtual network enabled? Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#vnet_image_pull_enabled WindowsFunctionApp#vnet_image_pull_enabled}
  */
  readonly vnetImagePullEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#webdeploy_publish_basic_authentication_enabled WindowsFunctionApp#webdeploy_publish_basic_authentication_enabled}
  */
  readonly webdeployPublishBasicAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The local path and filename of the Zip packaged application to deploy to this Windows Function App. **Note:** Using this value requires `WEBSITE_RUN_FROM_PACKAGE=1` to be set on the App in `app_settings`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#zip_deploy_file WindowsFunctionApp#zip_deploy_file}
  */
  readonly zipDeployFile?: string;
  /**
  * auth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#auth_settings WindowsFunctionApp#auth_settings}
  */
  readonly authSettings?: WindowsFunctionAppAuthSettings;
  /**
  * auth_settings_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#auth_settings_v2 WindowsFunctionApp#auth_settings_v2}
  */
  readonly authSettingsV2?: WindowsFunctionAppAuthSettingsV2;
  /**
  * backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#backup WindowsFunctionApp#backup}
  */
  readonly backup?: WindowsFunctionAppBackup;
  /**
  * connection_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#connection_string WindowsFunctionApp#connection_string}
  */
  readonly connectionString?: WindowsFunctionAppConnectionString[] | cdktf.IResolvable;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#identity WindowsFunctionApp#identity}
  */
  readonly identity?: WindowsFunctionAppIdentity;
  /**
  * site_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#site_config WindowsFunctionApp#site_config}
  */
  readonly siteConfig: WindowsFunctionAppSiteConfig;
  /**
  * sticky_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#sticky_settings WindowsFunctionApp#sticky_settings}
  */
  readonly stickySettings?: WindowsFunctionAppStickySettings;
  /**
  * storage_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#storage_account WindowsFunctionApp#storage_account}
  */
  readonly storageAccount?: WindowsFunctionAppStorageAccount[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#timeouts WindowsFunctionApp#timeouts}
  */
  readonly timeouts?: WindowsFunctionAppTimeouts;
}
export interface WindowsFunctionAppSiteCredential {
}

export function windowsFunctionAppSiteCredentialToTerraform(struct?: WindowsFunctionAppSiteCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function windowsFunctionAppSiteCredentialToHclTerraform(struct?: WindowsFunctionAppSiteCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WindowsFunctionAppSiteCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WindowsFunctionAppSiteCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsFunctionAppSiteCredential | undefined) {
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

export class WindowsFunctionAppSiteCredentialList extends cdktf.ComplexList {

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
  public get(index: number): WindowsFunctionAppSiteCredentialOutputReference {
    return new WindowsFunctionAppSiteCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsFunctionAppAuthSettingsActiveDirectory {
  /**
  * Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#allowed_audiences WindowsFunctionApp#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * The ID of the Client to use to authenticate with Azure Active Directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_id WindowsFunctionApp#client_id}
  */
  readonly clientId: string;
  /**
  * The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_secret WindowsFunctionApp#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}
  */
  readonly clientSecretSettingName?: string;
}

export function windowsFunctionAppAuthSettingsActiveDirectoryToTerraform(struct?: WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference | WindowsFunctionAppAuthSettingsActiveDirectory): any {
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


export function windowsFunctionAppAuthSettingsActiveDirectoryToHclTerraform(struct?: WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference | WindowsFunctionAppAuthSettingsActiveDirectory): any {
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

export class WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsActiveDirectory | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsActiveDirectory | undefined) {
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
export interface WindowsFunctionAppAuthSettingsFacebook {
  /**
  * The App ID of the Facebook app used for login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#app_id WindowsFunctionApp#app_id}
  */
  readonly appId: string;
  /**
  * The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#app_secret WindowsFunctionApp#app_secret}
  */
  readonly appSecret?: string;
  /**
  * The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#app_secret_setting_name WindowsFunctionApp#app_secret_setting_name}
  */
  readonly appSecretSettingName?: string;
  /**
  * Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}
  */
  readonly oauthScopes?: string[];
}

export function windowsFunctionAppAuthSettingsFacebookToTerraform(struct?: WindowsFunctionAppAuthSettingsFacebookOutputReference | WindowsFunctionAppAuthSettingsFacebook): any {
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


export function windowsFunctionAppAuthSettingsFacebookToHclTerraform(struct?: WindowsFunctionAppAuthSettingsFacebookOutputReference | WindowsFunctionAppAuthSettingsFacebook): any {
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

export class WindowsFunctionAppAuthSettingsFacebookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsFacebook | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsFacebook | undefined) {
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
export interface WindowsFunctionAppAuthSettingsGithub {
  /**
  * The ID of the GitHub app used for login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_id WindowsFunctionApp#client_id}
  */
  readonly clientId: string;
  /**
  * The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_secret WindowsFunctionApp#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}
  */
  readonly clientSecretSettingName?: string;
  /**
  * Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}
  */
  readonly oauthScopes?: string[];
}

export function windowsFunctionAppAuthSettingsGithubToTerraform(struct?: WindowsFunctionAppAuthSettingsGithubOutputReference | WindowsFunctionAppAuthSettingsGithub): any {
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


export function windowsFunctionAppAuthSettingsGithubToHclTerraform(struct?: WindowsFunctionAppAuthSettingsGithubOutputReference | WindowsFunctionAppAuthSettingsGithub): any {
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

export class WindowsFunctionAppAuthSettingsGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsGithub | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsGithub | undefined) {
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
export interface WindowsFunctionAppAuthSettingsGoogle {
  /**
  * The OpenID Connect Client ID for the Google web application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_id WindowsFunctionApp#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_secret WindowsFunctionApp#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}
  */
  readonly clientSecretSettingName?: string;
  /**
  * Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}
  */
  readonly oauthScopes?: string[];
}

export function windowsFunctionAppAuthSettingsGoogleToTerraform(struct?: WindowsFunctionAppAuthSettingsGoogleOutputReference | WindowsFunctionAppAuthSettingsGoogle): any {
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


export function windowsFunctionAppAuthSettingsGoogleToHclTerraform(struct?: WindowsFunctionAppAuthSettingsGoogleOutputReference | WindowsFunctionAppAuthSettingsGoogle): any {
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

export class WindowsFunctionAppAuthSettingsGoogleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsGoogle | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsGoogle | undefined) {
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
export interface WindowsFunctionAppAuthSettingsMicrosoft {
  /**
  * The OAuth 2.0 client ID that was created for the app used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_id WindowsFunctionApp#client_id}
  */
  readonly clientId: string;
  /**
  * The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_secret WindowsFunctionApp#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}
  */
  readonly clientSecretSettingName?: string;
  /**
  * The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}
  */
  readonly oauthScopes?: string[];
}

export function windowsFunctionAppAuthSettingsMicrosoftToTerraform(struct?: WindowsFunctionAppAuthSettingsMicrosoftOutputReference | WindowsFunctionAppAuthSettingsMicrosoft): any {
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


export function windowsFunctionAppAuthSettingsMicrosoftToHclTerraform(struct?: WindowsFunctionAppAuthSettingsMicrosoftOutputReference | WindowsFunctionAppAuthSettingsMicrosoft): any {
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

export class WindowsFunctionAppAuthSettingsMicrosoftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsMicrosoft | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsMicrosoft | undefined) {
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
export interface WindowsFunctionAppAuthSettingsTwitter {
  /**
  * The OAuth 1.0a consumer key of the Twitter application used for sign-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#consumer_key WindowsFunctionApp#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#consumer_secret WindowsFunctionApp#consumer_secret}
  */
  readonly consumerSecret?: string;
  /**
  * The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#consumer_secret_setting_name WindowsFunctionApp#consumer_secret_setting_name}
  */
  readonly consumerSecretSettingName?: string;
}

export function windowsFunctionAppAuthSettingsTwitterToTerraform(struct?: WindowsFunctionAppAuthSettingsTwitterOutputReference | WindowsFunctionAppAuthSettingsTwitter): any {
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


export function windowsFunctionAppAuthSettingsTwitterToHclTerraform(struct?: WindowsFunctionAppAuthSettingsTwitterOutputReference | WindowsFunctionAppAuthSettingsTwitter): any {
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

export class WindowsFunctionAppAuthSettingsTwitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsTwitter | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsTwitter | undefined) {
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
export interface WindowsFunctionAppAuthSettings {
  /**
  * Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#additional_login_parameters WindowsFunctionApp#additional_login_parameters}
  */
  readonly additionalLoginParameters?: { [key: string]: string };
  /**
  * Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#allowed_external_redirect_urls WindowsFunctionApp#allowed_external_redirect_urls}
  */
  readonly allowedExternalRedirectUrls?: string[];
  /**
  * The default authentication provider to use when multiple providers are configured. Possible values include: `AzureActiveDirectory`, `Facebook`, `Google`, `MicrosoftAccount`, `Twitter`, `Github`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#default_provider WindowsFunctionApp#default_provider}
  */
  readonly defaultProvider?: string;
  /**
  * Should the Authentication / Authorization feature be enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#enabled WindowsFunctionApp#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The OpenID Connect Issuer URI that represents the entity which issues access tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#issuer WindowsFunctionApp#issuer}
  */
  readonly issuer?: string;
  /**
  * The RuntimeVersion of the Authentication / Authorization feature in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#runtime_version WindowsFunctionApp#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * The number of hours after session token expiration that a session token can be used to call the token refresh API. Defaults to `72` hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#token_refresh_extension_hours WindowsFunctionApp#token_refresh_extension_hours}
  */
  readonly tokenRefreshExtensionHours?: number;
  /**
  * Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#token_store_enabled WindowsFunctionApp#token_store_enabled}
  */
  readonly tokenStoreEnabled?: boolean | cdktf.IResolvable;
  /**
  * The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#unauthenticated_client_action WindowsFunctionApp#unauthenticated_client_action}
  */
  readonly unauthenticatedClientAction?: string;
  /**
  * active_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#active_directory WindowsFunctionApp#active_directory}
  */
  readonly activeDirectory?: WindowsFunctionAppAuthSettingsActiveDirectory;
  /**
  * facebook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#facebook WindowsFunctionApp#facebook}
  */
  readonly facebook?: WindowsFunctionAppAuthSettingsFacebook;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#github WindowsFunctionApp#github}
  */
  readonly github?: WindowsFunctionAppAuthSettingsGithub;
  /**
  * google block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#google WindowsFunctionApp#google}
  */
  readonly google?: WindowsFunctionAppAuthSettingsGoogle;
  /**
  * microsoft block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#microsoft WindowsFunctionApp#microsoft}
  */
  readonly microsoft?: WindowsFunctionAppAuthSettingsMicrosoft;
  /**
  * twitter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#twitter WindowsFunctionApp#twitter}
  */
  readonly twitter?: WindowsFunctionAppAuthSettingsTwitter;
}

export function windowsFunctionAppAuthSettingsToTerraform(struct?: WindowsFunctionAppAuthSettingsOutputReference | WindowsFunctionAppAuthSettings): any {
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
    active_directory: windowsFunctionAppAuthSettingsActiveDirectoryToTerraform(struct!.activeDirectory),
    facebook: windowsFunctionAppAuthSettingsFacebookToTerraform(struct!.facebook),
    github: windowsFunctionAppAuthSettingsGithubToTerraform(struct!.github),
    google: windowsFunctionAppAuthSettingsGoogleToTerraform(struct!.google),
    microsoft: windowsFunctionAppAuthSettingsMicrosoftToTerraform(struct!.microsoft),
    twitter: windowsFunctionAppAuthSettingsTwitterToTerraform(struct!.twitter),
  }
}


export function windowsFunctionAppAuthSettingsToHclTerraform(struct?: WindowsFunctionAppAuthSettingsOutputReference | WindowsFunctionAppAuthSettings): any {
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
      value: windowsFunctionAppAuthSettingsActiveDirectoryToHclTerraform(struct!.activeDirectory),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsActiveDirectoryList",
    },
    facebook: {
      value: windowsFunctionAppAuthSettingsFacebookToHclTerraform(struct!.facebook),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsFacebookList",
    },
    github: {
      value: windowsFunctionAppAuthSettingsGithubToHclTerraform(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsGithubList",
    },
    google: {
      value: windowsFunctionAppAuthSettingsGoogleToHclTerraform(struct!.google),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsGoogleList",
    },
    microsoft: {
      value: windowsFunctionAppAuthSettingsMicrosoftToHclTerraform(struct!.microsoft),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsMicrosoftList",
    },
    twitter: {
      value: windowsFunctionAppAuthSettingsTwitterToHclTerraform(struct!.twitter),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsTwitterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsFunctionAppAuthSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettings | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettings | undefined) {
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
  private _activeDirectory = new WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference(this, "active_directory");
  public get activeDirectory() {
    return this._activeDirectory;
  }
  public putActiveDirectory(value: WindowsFunctionAppAuthSettingsActiveDirectory) {
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
  private _facebook = new WindowsFunctionAppAuthSettingsFacebookOutputReference(this, "facebook");
  public get facebook() {
    return this._facebook;
  }
  public putFacebook(value: WindowsFunctionAppAuthSettingsFacebook) {
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
  private _github = new WindowsFunctionAppAuthSettingsGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: WindowsFunctionAppAuthSettingsGithub) {
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
  private _google = new WindowsFunctionAppAuthSettingsGoogleOutputReference(this, "google");
  public get google() {
    return this._google;
  }
  public putGoogle(value: WindowsFunctionAppAuthSettingsGoogle) {
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
  private _microsoft = new WindowsFunctionAppAuthSettingsMicrosoftOutputReference(this, "microsoft");
  public get microsoft() {
    return this._microsoft;
  }
  public putMicrosoft(value: WindowsFunctionAppAuthSettingsMicrosoft) {
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
  private _twitter = new WindowsFunctionAppAuthSettingsTwitterOutputReference(this, "twitter");
  public get twitter() {
    return this._twitter;
  }
  public putTwitter(value: WindowsFunctionAppAuthSettingsTwitter) {
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
export interface WindowsFunctionAppAuthSettingsV2ActiveDirectoryV2 {
  /**
  * The list of allowed Applications for the Default Authorisation Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#allowed_applications WindowsFunctionApp#allowed_applications}
  */
  readonly allowedApplications?: string[];
  /**
  * Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#allowed_audiences WindowsFunctionApp#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * The list of allowed Group Names for the Default Authorisation Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#allowed_groups WindowsFunctionApp#allowed_groups}
  */
  readonly allowedGroups?: string[];
  /**
  * The list of allowed Identities for the Default Authorisation Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#allowed_identities WindowsFunctionApp#allowed_identities}
  */
  readonly allowedIdentities?: string[];
  /**
  * The ID of the Client to use to authenticate with Azure Active Directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_id WindowsFunctionApp#client_id}
  */
  readonly clientId: string;
  /**
  * The thumbprint of the certificate used for signing purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_secret_certificate_thumbprint WindowsFunctionApp#client_secret_certificate_thumbprint}
  */
  readonly clientSecretCertificateThumbprint?: string;
  /**
  * The App Setting name that contains the client secret of the Client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}
  */
  readonly clientSecretSettingName?: string;
  /**
  * A list of Allowed Client Applications in the JWT Claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#jwt_allowed_client_applications WindowsFunctionApp#jwt_allowed_client_applications}
  */
  readonly jwtAllowedClientApplications?: string[];
  /**
  * A list of Allowed Groups in the JWT Claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#jwt_allowed_groups WindowsFunctionApp#jwt_allowed_groups}
  */
  readonly jwtAllowedGroups?: string[];
  /**
  * A map of key-value pairs to send to the Authorisation Endpoint when a user logs in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#login_parameters WindowsFunctionApp#login_parameters}
  */
  readonly loginParameters?: { [key: string]: string };
  /**
  * The Azure Tenant Endpoint for the Authenticating Tenant. e.g. `https://login.microsoftonline.com/v2.0/{tenant-guid}/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#tenant_auth_endpoint WindowsFunctionApp#tenant_auth_endpoint}
  */
  readonly tenantAuthEndpoint: string;
  /**
  * Should the www-authenticate provider should be omitted from the request? Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#www_authentication_disabled WindowsFunctionApp#www_authentication_disabled}
  */
  readonly wwwAuthenticationDisabled?: boolean | cdktf.IResolvable;
}

export function windowsFunctionAppAuthSettingsV2ActiveDirectoryV2ToTerraform(struct?: WindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference | WindowsFunctionAppAuthSettingsV2ActiveDirectoryV2): any {
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


export function windowsFunctionAppAuthSettingsV2ActiveDirectoryV2ToHclTerraform(struct?: WindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference | WindowsFunctionAppAuthSettingsV2ActiveDirectoryV2): any {
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

export class WindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsV2ActiveDirectoryV2 | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsV2ActiveDirectoryV2 | undefined) {
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
export interface WindowsFunctionAppAuthSettingsV2AppleV2 {
  /**
  * The OpenID Connect Client ID for the Apple web application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_id WindowsFunctionApp#client_id}
  */
  readonly clientId: string;
  /**
  * The app setting name that contains the `client_secret` value used for Apple Login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}
  */
  readonly clientSecretSettingName: string;
}

export function windowsFunctionAppAuthSettingsV2AppleV2ToTerraform(struct?: WindowsFunctionAppAuthSettingsV2AppleV2OutputReference | WindowsFunctionAppAuthSettingsV2AppleV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_setting_name: cdktf.stringToTerraform(struct!.clientSecretSettingName),
  }
}


export function windowsFunctionAppAuthSettingsV2AppleV2ToHclTerraform(struct?: WindowsFunctionAppAuthSettingsV2AppleV2OutputReference | WindowsFunctionAppAuthSettingsV2AppleV2): any {
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

export class WindowsFunctionAppAuthSettingsV2AppleV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsV2AppleV2 | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsV2AppleV2 | undefined) {
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
export interface WindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2 {
  /**
  * The ID of the Client to use to authenticate with Azure Static Web App Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_id WindowsFunctionApp#client_id}
  */
  readonly clientId: string;
}

export function windowsFunctionAppAuthSettingsV2AzureStaticWebAppV2ToTerraform(struct?: WindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference | WindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
  }
}


export function windowsFunctionAppAuthSettingsV2AzureStaticWebAppV2ToHclTerraform(struct?: WindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference | WindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2): any {
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

export class WindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2 | undefined) {
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
export interface WindowsFunctionAppAuthSettingsV2CustomOidcV2 {
  /**
  * The ID of the Client to use to authenticate with this Custom OIDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_id WindowsFunctionApp#client_id}
  */
  readonly clientId: string;
  /**
  * The name of the Custom OIDC Authentication Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#name WindowsFunctionApp#name}
  */
  readonly name: string;
  /**
  * The name of the claim that contains the users name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#name_claim_type WindowsFunctionApp#name_claim_type}
  */
  readonly nameClaimType?: string;
  /**
  * The endpoint that contains all the configuration endpoints for this Custom OIDC provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#openid_configuration_endpoint WindowsFunctionApp#openid_configuration_endpoint}
  */
  readonly openidConfigurationEndpoint: string;
  /**
  * The list of the scopes that should be requested while authenticating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#scopes WindowsFunctionApp#scopes}
  */
  readonly scopes?: string[];
}

export function windowsFunctionAppAuthSettingsV2CustomOidcV2ToTerraform(struct?: WindowsFunctionAppAuthSettingsV2CustomOidcV2 | cdktf.IResolvable): any {
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


export function windowsFunctionAppAuthSettingsV2CustomOidcV2ToHclTerraform(struct?: WindowsFunctionAppAuthSettingsV2CustomOidcV2 | cdktf.IResolvable): any {
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

export class WindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WindowsFunctionAppAuthSettingsV2CustomOidcV2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsV2CustomOidcV2 | cdktf.IResolvable | undefined) {
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

export class WindowsFunctionAppAuthSettingsV2CustomOidcV2List extends cdktf.ComplexList {
  public internalValue? : WindowsFunctionAppAuthSettingsV2CustomOidcV2[] | cdktf.IResolvable

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
  public get(index: number): WindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference {
    return new WindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsFunctionAppAuthSettingsV2FacebookV2 {
  /**
  * The App ID of the Facebook app used for login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#app_id WindowsFunctionApp#app_id}
  */
  readonly appId: string;
  /**
  * The app setting name that contains the `app_secret` value used for Facebook Login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#app_secret_setting_name WindowsFunctionApp#app_secret_setting_name}
  */
  readonly appSecretSettingName: string;
  /**
  * The version of the Facebook API to be used while logging in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#graph_api_version WindowsFunctionApp#graph_api_version}
  */
  readonly graphApiVersion?: string;
  /**
  * Specifies a list of scopes to be requested as part of Facebook Login authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#login_scopes WindowsFunctionApp#login_scopes}
  */
  readonly loginScopes?: string[];
}

export function windowsFunctionAppAuthSettingsV2FacebookV2ToTerraform(struct?: WindowsFunctionAppAuthSettingsV2FacebookV2OutputReference | WindowsFunctionAppAuthSettingsV2FacebookV2): any {
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


export function windowsFunctionAppAuthSettingsV2FacebookV2ToHclTerraform(struct?: WindowsFunctionAppAuthSettingsV2FacebookV2OutputReference | WindowsFunctionAppAuthSettingsV2FacebookV2): any {
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

export class WindowsFunctionAppAuthSettingsV2FacebookV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsV2FacebookV2 | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsV2FacebookV2 | undefined) {
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
export interface WindowsFunctionAppAuthSettingsV2GithubV2 {
  /**
  * The ID of the GitHub app used for login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_id WindowsFunctionApp#client_id}
  */
  readonly clientId: string;
  /**
  * The app setting name that contains the `client_secret` value used for GitHub Login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}
  */
  readonly clientSecretSettingName: string;
  /**
  * Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#login_scopes WindowsFunctionApp#login_scopes}
  */
  readonly loginScopes?: string[];
}

export function windowsFunctionAppAuthSettingsV2GithubV2ToTerraform(struct?: WindowsFunctionAppAuthSettingsV2GithubV2OutputReference | WindowsFunctionAppAuthSettingsV2GithubV2): any {
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


export function windowsFunctionAppAuthSettingsV2GithubV2ToHclTerraform(struct?: WindowsFunctionAppAuthSettingsV2GithubV2OutputReference | WindowsFunctionAppAuthSettingsV2GithubV2): any {
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

export class WindowsFunctionAppAuthSettingsV2GithubV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsV2GithubV2 | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsV2GithubV2 | undefined) {
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
export interface WindowsFunctionAppAuthSettingsV2GoogleV2 {
  /**
  * Specifies a list of Allowed Audiences that will be requested as part of Google Sign-In authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#allowed_audiences WindowsFunctionApp#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * The OpenID Connect Client ID for the Google web application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_id WindowsFunctionApp#client_id}
  */
  readonly clientId: string;
  /**
  * The app setting name that contains the `client_secret` value used for Google Login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}
  */
  readonly clientSecretSettingName: string;
  /**
  * Specifies a list of Login scopes that will be requested as part of Google Sign-In authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#login_scopes WindowsFunctionApp#login_scopes}
  */
  readonly loginScopes?: string[];
}

export function windowsFunctionAppAuthSettingsV2GoogleV2ToTerraform(struct?: WindowsFunctionAppAuthSettingsV2GoogleV2OutputReference | WindowsFunctionAppAuthSettingsV2GoogleV2): any {
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


export function windowsFunctionAppAuthSettingsV2GoogleV2ToHclTerraform(struct?: WindowsFunctionAppAuthSettingsV2GoogleV2OutputReference | WindowsFunctionAppAuthSettingsV2GoogleV2): any {
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

export class WindowsFunctionAppAuthSettingsV2GoogleV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsV2GoogleV2 | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsV2GoogleV2 | undefined) {
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
export interface WindowsFunctionAppAuthSettingsV2Login {
  /**
  * External URLs that can be redirected to as part of logging in or logging out of the app. This is an advanced setting typically only needed by Windows Store application backends. **Note:** URLs within the current domain are always implicitly allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#allowed_external_redirect_urls WindowsFunctionApp#allowed_external_redirect_urls}
  */
  readonly allowedExternalRedirectUrls?: string[];
  /**
  * The method by which cookies expire. Possible values include: `FixedTime`, and `IdentityProviderDerived`. Defaults to `FixedTime`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#cookie_expiration_convention WindowsFunctionApp#cookie_expiration_convention}
  */
  readonly cookieExpirationConvention?: string;
  /**
  * The time after the request is made when the session cookie should expire. Defaults to `08:00:00`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#cookie_expiration_time WindowsFunctionApp#cookie_expiration_time}
  */
  readonly cookieExpirationTime?: string;
  /**
  * The endpoint to which logout requests should be made.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#logout_endpoint WindowsFunctionApp#logout_endpoint}
  */
  readonly logoutEndpoint?: string;
  /**
  * The time after the request is made when the nonce should expire. Defaults to `00:05:00`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#nonce_expiration_time WindowsFunctionApp#nonce_expiration_time}
  */
  readonly nonceExpirationTime?: string;
  /**
  * Should the fragments from the request be preserved after the login request is made. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#preserve_url_fragments_for_logins WindowsFunctionApp#preserve_url_fragments_for_logins}
  */
  readonly preserveUrlFragmentsForLogins?: boolean | cdktf.IResolvable;
  /**
  * The number of hours after session token expiration that a session token can be used to call the token refresh API. Defaults to `72` hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#token_refresh_extension_time WindowsFunctionApp#token_refresh_extension_time}
  */
  readonly tokenRefreshExtensionTime?: number;
  /**
  * Should the Token Store configuration Enabled. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#token_store_enabled WindowsFunctionApp#token_store_enabled}
  */
  readonly tokenStoreEnabled?: boolean | cdktf.IResolvable;
  /**
  * The directory path in the App Filesystem in which the tokens will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#token_store_path WindowsFunctionApp#token_store_path}
  */
  readonly tokenStorePath?: string;
  /**
  * The name of the app setting which contains the SAS URL of the blob storage containing the tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#token_store_sas_setting_name WindowsFunctionApp#token_store_sas_setting_name}
  */
  readonly tokenStoreSasSettingName?: string;
  /**
  * Should the nonce be validated while completing the login flow. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#validate_nonce WindowsFunctionApp#validate_nonce}
  */
  readonly validateNonce?: boolean | cdktf.IResolvable;
}

export function windowsFunctionAppAuthSettingsV2LoginToTerraform(struct?: WindowsFunctionAppAuthSettingsV2LoginOutputReference | WindowsFunctionAppAuthSettingsV2Login): any {
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


export function windowsFunctionAppAuthSettingsV2LoginToHclTerraform(struct?: WindowsFunctionAppAuthSettingsV2LoginOutputReference | WindowsFunctionAppAuthSettingsV2Login): any {
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

export class WindowsFunctionAppAuthSettingsV2LoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsV2Login | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsV2Login | undefined) {
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
export interface WindowsFunctionAppAuthSettingsV2MicrosoftV2 {
  /**
  * Specifies a list of Allowed Audiences that will be requested as part of Microsoft Sign-In authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#allowed_audiences WindowsFunctionApp#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * The OAuth 2.0 client ID that was created for the app used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_id WindowsFunctionApp#client_id}
  */
  readonly clientId: string;
  /**
  * The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}
  */
  readonly clientSecretSettingName: string;
  /**
  * The list of Login scopes that will be requested as part of Microsoft Account authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#login_scopes WindowsFunctionApp#login_scopes}
  */
  readonly loginScopes?: string[];
}

export function windowsFunctionAppAuthSettingsV2MicrosoftV2ToTerraform(struct?: WindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference | WindowsFunctionAppAuthSettingsV2MicrosoftV2): any {
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


export function windowsFunctionAppAuthSettingsV2MicrosoftV2ToHclTerraform(struct?: WindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference | WindowsFunctionAppAuthSettingsV2MicrosoftV2): any {
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

export class WindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsV2MicrosoftV2 | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsV2MicrosoftV2 | undefined) {
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
export interface WindowsFunctionAppAuthSettingsV2TwitterV2 {
  /**
  * The OAuth 1.0a consumer key of the Twitter application used for sign-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#consumer_key WindowsFunctionApp#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#consumer_secret_setting_name WindowsFunctionApp#consumer_secret_setting_name}
  */
  readonly consumerSecretSettingName: string;
}

export function windowsFunctionAppAuthSettingsV2TwitterV2ToTerraform(struct?: WindowsFunctionAppAuthSettingsV2TwitterV2OutputReference | WindowsFunctionAppAuthSettingsV2TwitterV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_key: cdktf.stringToTerraform(struct!.consumerKey),
    consumer_secret_setting_name: cdktf.stringToTerraform(struct!.consumerSecretSettingName),
  }
}


export function windowsFunctionAppAuthSettingsV2TwitterV2ToHclTerraform(struct?: WindowsFunctionAppAuthSettingsV2TwitterV2OutputReference | WindowsFunctionAppAuthSettingsV2TwitterV2): any {
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

export class WindowsFunctionAppAuthSettingsV2TwitterV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsV2TwitterV2 | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsV2TwitterV2 | undefined) {
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
export interface WindowsFunctionAppAuthSettingsV2 {
  /**
  * Should the AuthV2 Settings be enabled. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#auth_enabled WindowsFunctionApp#auth_enabled}
  */
  readonly authEnabled?: boolean | cdktf.IResolvable;
  /**
  * The path to the App Auth settings. **Note:** Relative Paths are evaluated from the Site Root directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#config_file_path WindowsFunctionApp#config_file_path}
  */
  readonly configFilePath?: string;
  /**
  * The Default Authentication Provider to use when the `unauthenticated_action` is set to `RedirectToLoginPage`. Possible values include: `apple`, `azureactivedirectory`, `facebook`, `github`, `google`, `twitter` and the `name` of your `custom_oidc_v2` provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#default_provider WindowsFunctionApp#default_provider}
  */
  readonly defaultProvider?: string;
  /**
  * The paths which should be excluded from the `unauthenticated_action` when it is set to `RedirectToLoginPage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#excluded_paths WindowsFunctionApp#excluded_paths}
  */
  readonly excludedPaths?: string[];
  /**
  * The convention used to determine the url of the request made. Possible values include `ForwardProxyConventionNoProxy`, `ForwardProxyConventionStandard`, `ForwardProxyConventionCustom`. Defaults to `ForwardProxyConventionNoProxy`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#forward_proxy_convention WindowsFunctionApp#forward_proxy_convention}
  */
  readonly forwardProxyConvention?: string;
  /**
  * The name of the header containing the host of the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#forward_proxy_custom_host_header_name WindowsFunctionApp#forward_proxy_custom_host_header_name}
  */
  readonly forwardProxyCustomHostHeaderName?: string;
  /**
  * The name of the header containing the scheme of the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#forward_proxy_custom_scheme_header_name WindowsFunctionApp#forward_proxy_custom_scheme_header_name}
  */
  readonly forwardProxyCustomSchemeHeaderName?: string;
  /**
  * The prefix that should precede all the authentication and authorisation paths. Defaults to `/.auth`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#http_route_api_prefix WindowsFunctionApp#http_route_api_prefix}
  */
  readonly httpRouteApiPrefix?: string;
  /**
  * Should the authentication flow be used for all requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#require_authentication WindowsFunctionApp#require_authentication}
  */
  readonly requireAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Should HTTPS be required on connections? Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#require_https WindowsFunctionApp#require_https}
  */
  readonly requireHttps?: boolean | cdktf.IResolvable;
  /**
  * The Runtime Version of the Authentication and Authorisation feature of this App. Defaults to `~1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#runtime_version WindowsFunctionApp#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * The action to take for requests made without authentication. Possible values include `RedirectToLoginPage`, `AllowAnonymous`, `Return401`, and `Return403`. Defaults to `RedirectToLoginPage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#unauthenticated_action WindowsFunctionApp#unauthenticated_action}
  */
  readonly unauthenticatedAction?: string;
  /**
  * active_directory_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#active_directory_v2 WindowsFunctionApp#active_directory_v2}
  */
  readonly activeDirectoryV2?: WindowsFunctionAppAuthSettingsV2ActiveDirectoryV2;
  /**
  * apple_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#apple_v2 WindowsFunctionApp#apple_v2}
  */
  readonly appleV2?: WindowsFunctionAppAuthSettingsV2AppleV2;
  /**
  * azure_static_web_app_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#azure_static_web_app_v2 WindowsFunctionApp#azure_static_web_app_v2}
  */
  readonly azureStaticWebAppV2?: WindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2;
  /**
  * custom_oidc_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#custom_oidc_v2 WindowsFunctionApp#custom_oidc_v2}
  */
  readonly customOidcV2?: WindowsFunctionAppAuthSettingsV2CustomOidcV2[] | cdktf.IResolvable;
  /**
  * facebook_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#facebook_v2 WindowsFunctionApp#facebook_v2}
  */
  readonly facebookV2?: WindowsFunctionAppAuthSettingsV2FacebookV2;
  /**
  * github_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#github_v2 WindowsFunctionApp#github_v2}
  */
  readonly githubV2?: WindowsFunctionAppAuthSettingsV2GithubV2;
  /**
  * google_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#google_v2 WindowsFunctionApp#google_v2}
  */
  readonly googleV2?: WindowsFunctionAppAuthSettingsV2GoogleV2;
  /**
  * login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#login WindowsFunctionApp#login}
  */
  readonly login: WindowsFunctionAppAuthSettingsV2Login;
  /**
  * microsoft_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#microsoft_v2 WindowsFunctionApp#microsoft_v2}
  */
  readonly microsoftV2?: WindowsFunctionAppAuthSettingsV2MicrosoftV2;
  /**
  * twitter_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#twitter_v2 WindowsFunctionApp#twitter_v2}
  */
  readonly twitterV2?: WindowsFunctionAppAuthSettingsV2TwitterV2;
}

export function windowsFunctionAppAuthSettingsV2ToTerraform(struct?: WindowsFunctionAppAuthSettingsV2OutputReference | WindowsFunctionAppAuthSettingsV2): any {
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
    active_directory_v2: windowsFunctionAppAuthSettingsV2ActiveDirectoryV2ToTerraform(struct!.activeDirectoryV2),
    apple_v2: windowsFunctionAppAuthSettingsV2AppleV2ToTerraform(struct!.appleV2),
    azure_static_web_app_v2: windowsFunctionAppAuthSettingsV2AzureStaticWebAppV2ToTerraform(struct!.azureStaticWebAppV2),
    custom_oidc_v2: cdktf.listMapper(windowsFunctionAppAuthSettingsV2CustomOidcV2ToTerraform, true)(struct!.customOidcV2),
    facebook_v2: windowsFunctionAppAuthSettingsV2FacebookV2ToTerraform(struct!.facebookV2),
    github_v2: windowsFunctionAppAuthSettingsV2GithubV2ToTerraform(struct!.githubV2),
    google_v2: windowsFunctionAppAuthSettingsV2GoogleV2ToTerraform(struct!.googleV2),
    login: windowsFunctionAppAuthSettingsV2LoginToTerraform(struct!.login),
    microsoft_v2: windowsFunctionAppAuthSettingsV2MicrosoftV2ToTerraform(struct!.microsoftV2),
    twitter_v2: windowsFunctionAppAuthSettingsV2TwitterV2ToTerraform(struct!.twitterV2),
  }
}


export function windowsFunctionAppAuthSettingsV2ToHclTerraform(struct?: WindowsFunctionAppAuthSettingsV2OutputReference | WindowsFunctionAppAuthSettingsV2): any {
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
      value: windowsFunctionAppAuthSettingsV2ActiveDirectoryV2ToHclTerraform(struct!.activeDirectoryV2),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List",
    },
    apple_v2: {
      value: windowsFunctionAppAuthSettingsV2AppleV2ToHclTerraform(struct!.appleV2),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsV2AppleV2List",
    },
    azure_static_web_app_v2: {
      value: windowsFunctionAppAuthSettingsV2AzureStaticWebAppV2ToHclTerraform(struct!.azureStaticWebAppV2),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List",
    },
    custom_oidc_v2: {
      value: cdktf.listMapperHcl(windowsFunctionAppAuthSettingsV2CustomOidcV2ToHclTerraform, true)(struct!.customOidcV2),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsV2CustomOidcV2List",
    },
    facebook_v2: {
      value: windowsFunctionAppAuthSettingsV2FacebookV2ToHclTerraform(struct!.facebookV2),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsV2FacebookV2List",
    },
    github_v2: {
      value: windowsFunctionAppAuthSettingsV2GithubV2ToHclTerraform(struct!.githubV2),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsV2GithubV2List",
    },
    google_v2: {
      value: windowsFunctionAppAuthSettingsV2GoogleV2ToHclTerraform(struct!.googleV2),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsV2GoogleV2List",
    },
    login: {
      value: windowsFunctionAppAuthSettingsV2LoginToHclTerraform(struct!.login),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsV2LoginList",
    },
    microsoft_v2: {
      value: windowsFunctionAppAuthSettingsV2MicrosoftV2ToHclTerraform(struct!.microsoftV2),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsV2MicrosoftV2List",
    },
    twitter_v2: {
      value: windowsFunctionAppAuthSettingsV2TwitterV2ToHclTerraform(struct!.twitterV2),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppAuthSettingsV2TwitterV2List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsFunctionAppAuthSettingsV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppAuthSettingsV2 | undefined {
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

  public set internalValue(value: WindowsFunctionAppAuthSettingsV2 | undefined) {
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
  private _activeDirectoryV2 = new WindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference(this, "active_directory_v2");
  public get activeDirectoryV2() {
    return this._activeDirectoryV2;
  }
  public putActiveDirectoryV2(value: WindowsFunctionAppAuthSettingsV2ActiveDirectoryV2) {
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
  private _appleV2 = new WindowsFunctionAppAuthSettingsV2AppleV2OutputReference(this, "apple_v2");
  public get appleV2() {
    return this._appleV2;
  }
  public putAppleV2(value: WindowsFunctionAppAuthSettingsV2AppleV2) {
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
  private _azureStaticWebAppV2 = new WindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference(this, "azure_static_web_app_v2");
  public get azureStaticWebAppV2() {
    return this._azureStaticWebAppV2;
  }
  public putAzureStaticWebAppV2(value: WindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2) {
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
  private _customOidcV2 = new WindowsFunctionAppAuthSettingsV2CustomOidcV2List(this, "custom_oidc_v2", false);
  public get customOidcV2() {
    return this._customOidcV2;
  }
  public putCustomOidcV2(value: WindowsFunctionAppAuthSettingsV2CustomOidcV2[] | cdktf.IResolvable) {
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
  private _facebookV2 = new WindowsFunctionAppAuthSettingsV2FacebookV2OutputReference(this, "facebook_v2");
  public get facebookV2() {
    return this._facebookV2;
  }
  public putFacebookV2(value: WindowsFunctionAppAuthSettingsV2FacebookV2) {
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
  private _githubV2 = new WindowsFunctionAppAuthSettingsV2GithubV2OutputReference(this, "github_v2");
  public get githubV2() {
    return this._githubV2;
  }
  public putGithubV2(value: WindowsFunctionAppAuthSettingsV2GithubV2) {
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
  private _googleV2 = new WindowsFunctionAppAuthSettingsV2GoogleV2OutputReference(this, "google_v2");
  public get googleV2() {
    return this._googleV2;
  }
  public putGoogleV2(value: WindowsFunctionAppAuthSettingsV2GoogleV2) {
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
  private _login = new WindowsFunctionAppAuthSettingsV2LoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: WindowsFunctionAppAuthSettingsV2Login) {
    this._login.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }

  // microsoft_v2 - computed: false, optional: true, required: false
  private _microsoftV2 = new WindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference(this, "microsoft_v2");
  public get microsoftV2() {
    return this._microsoftV2;
  }
  public putMicrosoftV2(value: WindowsFunctionAppAuthSettingsV2MicrosoftV2) {
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
  private _twitterV2 = new WindowsFunctionAppAuthSettingsV2TwitterV2OutputReference(this, "twitter_v2");
  public get twitterV2() {
    return this._twitterV2;
  }
  public putTwitterV2(value: WindowsFunctionAppAuthSettingsV2TwitterV2) {
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
export interface WindowsFunctionAppBackupSchedule {
  /**
  * How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#frequency_interval WindowsFunctionApp#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#frequency_unit WindowsFunctionApp#frequency_unit}
  */
  readonly frequencyUnit: string;
  /**
  * Should the service keep at least one backup, regardless of age of backup. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#keep_at_least_one_backup WindowsFunctionApp#keep_at_least_one_backup}
  */
  readonly keepAtLeastOneBackup?: boolean | cdktf.IResolvable;
  /**
  * After how many days backups should be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#retention_period_days WindowsFunctionApp#retention_period_days}
  */
  readonly retentionPeriodDays?: number;
  /**
  * When the schedule should start working in RFC-3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#start_time WindowsFunctionApp#start_time}
  */
  readonly startTime?: string;
}

export function windowsFunctionAppBackupScheduleToTerraform(struct?: WindowsFunctionAppBackupScheduleOutputReference | WindowsFunctionAppBackupSchedule): any {
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


export function windowsFunctionAppBackupScheduleToHclTerraform(struct?: WindowsFunctionAppBackupScheduleOutputReference | WindowsFunctionAppBackupSchedule): any {
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

export class WindowsFunctionAppBackupScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppBackupSchedule | undefined {
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

  public set internalValue(value: WindowsFunctionAppBackupSchedule | undefined) {
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
export interface WindowsFunctionAppBackup {
  /**
  * Should this backup job be enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#enabled WindowsFunctionApp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name which should be used for this Backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#name WindowsFunctionApp#name}
  */
  readonly name: string;
  /**
  * The SAS URL to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#storage_account_url WindowsFunctionApp#storage_account_url}
  */
  readonly storageAccountUrl: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#schedule WindowsFunctionApp#schedule}
  */
  readonly schedule: WindowsFunctionAppBackupSchedule;
}

export function windowsFunctionAppBackupToTerraform(struct?: WindowsFunctionAppBackupOutputReference | WindowsFunctionAppBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    storage_account_url: cdktf.stringToTerraform(struct!.storageAccountUrl),
    schedule: windowsFunctionAppBackupScheduleToTerraform(struct!.schedule),
  }
}


export function windowsFunctionAppBackupToHclTerraform(struct?: WindowsFunctionAppBackupOutputReference | WindowsFunctionAppBackup): any {
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
      value: windowsFunctionAppBackupScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppBackupScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsFunctionAppBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppBackup | undefined {
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

  public set internalValue(value: WindowsFunctionAppBackup | undefined) {
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
  private _schedule = new WindowsFunctionAppBackupScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: WindowsFunctionAppBackupSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface WindowsFunctionAppConnectionString {
  /**
  * The name which should be used for this Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#name WindowsFunctionApp#name}
  */
  readonly name: string;
  /**
  * Type of database. Possible values include: `MySQL`, `SQLServer`, `SQLAzure`, `Custom`, `NotificationHub`, `ServiceBus`, `EventHub`, `APIHub`, `DocDb`, `RedisCache`, and `PostgreSQL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#type WindowsFunctionApp#type}
  */
  readonly type: string;
  /**
  * The connection string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#value WindowsFunctionApp#value}
  */
  readonly value: string;
}

export function windowsFunctionAppConnectionStringToTerraform(struct?: WindowsFunctionAppConnectionString | cdktf.IResolvable): any {
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


export function windowsFunctionAppConnectionStringToHclTerraform(struct?: WindowsFunctionAppConnectionString | cdktf.IResolvable): any {
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

export class WindowsFunctionAppConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WindowsFunctionAppConnectionString | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WindowsFunctionAppConnectionString | cdktf.IResolvable | undefined) {
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

export class WindowsFunctionAppConnectionStringList extends cdktf.ComplexList {
  public internalValue? : WindowsFunctionAppConnectionString[] | cdktf.IResolvable

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
  public get(index: number): WindowsFunctionAppConnectionStringOutputReference {
    return new WindowsFunctionAppConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsFunctionAppIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#identity_ids WindowsFunctionApp#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#type WindowsFunctionApp#type}
  */
  readonly type: string;
}

export function windowsFunctionAppIdentityToTerraform(struct?: WindowsFunctionAppIdentityOutputReference | WindowsFunctionAppIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function windowsFunctionAppIdentityToHclTerraform(struct?: WindowsFunctionAppIdentityOutputReference | WindowsFunctionAppIdentity): any {
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

export class WindowsFunctionAppIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppIdentity | undefined {
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

  public set internalValue(value: WindowsFunctionAppIdentity | undefined) {
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
export interface WindowsFunctionAppSiteConfigAppServiceLogs {
  /**
  * The amount of disk space to use for logs. Valid values are between `25` and `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#disk_quota_mb WindowsFunctionApp#disk_quota_mb}
  */
  readonly diskQuotaMb?: number;
  /**
  * The retention period for logs in days. Valid values are between `0` and `99999`. Defaults to `0` (never delete).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#retention_period_days WindowsFunctionApp#retention_period_days}
  */
  readonly retentionPeriodDays?: number;
}

export function windowsFunctionAppSiteConfigAppServiceLogsToTerraform(struct?: WindowsFunctionAppSiteConfigAppServiceLogsOutputReference | WindowsFunctionAppSiteConfigAppServiceLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_quota_mb: cdktf.numberToTerraform(struct!.diskQuotaMb),
    retention_period_days: cdktf.numberToTerraform(struct!.retentionPeriodDays),
  }
}


export function windowsFunctionAppSiteConfigAppServiceLogsToHclTerraform(struct?: WindowsFunctionAppSiteConfigAppServiceLogsOutputReference | WindowsFunctionAppSiteConfigAppServiceLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_quota_mb: {
      value: cdktf.numberToHclTerraform(struct!.diskQuotaMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_period_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionPeriodDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsFunctionAppSiteConfigAppServiceLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppSiteConfigAppServiceLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskQuotaMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskQuotaMb = this._diskQuotaMb;
    }
    if (this._retentionPeriodDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriodDays = this._retentionPeriodDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsFunctionAppSiteConfigAppServiceLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskQuotaMb = undefined;
      this._retentionPeriodDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskQuotaMb = value.diskQuotaMb;
      this._retentionPeriodDays = value.retentionPeriodDays;
    }
  }

  // disk_quota_mb - computed: false, optional: true, required: false
  private _diskQuotaMb?: number; 
  public get diskQuotaMb() {
    return this.getNumberAttribute('disk_quota_mb');
  }
  public set diskQuotaMb(value: number) {
    this._diskQuotaMb = value;
  }
  public resetDiskQuotaMb() {
    this._diskQuotaMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskQuotaMbInput() {
    return this._diskQuotaMb;
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
}
export interface WindowsFunctionAppSiteConfigApplicationStack {
  /**
  * The version of .Net. Possible values are `v3.0`, `v4.0`, `v6.0` and `v7.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#dotnet_version WindowsFunctionApp#dotnet_version}
  */
  readonly dotnetVersion?: string;
  /**
  * The version of Java to use. Possible values are `1.8`, `11` and `17`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#java_version WindowsFunctionApp#java_version}
  */
  readonly javaVersion?: string;
  /**
  * The version of Node to use. Possible values include `12`, `14`, `16` and `18`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#node_version WindowsFunctionApp#node_version}
  */
  readonly nodeVersion?: string;
  /**
  * The PowerShell Core version to use. Possible values are `7`, `7.2`, and `7.4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#powershell_core_version WindowsFunctionApp#powershell_core_version}
  */
  readonly powershellCoreVersion?: string;
  /**
  * Does the Function App use a custom Application Stack?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#use_custom_runtime WindowsFunctionApp#use_custom_runtime}
  */
  readonly useCustomRuntime?: boolean | cdktf.IResolvable;
  /**
  * Should the DotNet process use an isolated runtime. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#use_dotnet_isolated_runtime WindowsFunctionApp#use_dotnet_isolated_runtime}
  */
  readonly useDotnetIsolatedRuntime?: boolean | cdktf.IResolvable;
}

export function windowsFunctionAppSiteConfigApplicationStackToTerraform(struct?: WindowsFunctionAppSiteConfigApplicationStackOutputReference | WindowsFunctionAppSiteConfigApplicationStack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dotnet_version: cdktf.stringToTerraform(struct!.dotnetVersion),
    java_version: cdktf.stringToTerraform(struct!.javaVersion),
    node_version: cdktf.stringToTerraform(struct!.nodeVersion),
    powershell_core_version: cdktf.stringToTerraform(struct!.powershellCoreVersion),
    use_custom_runtime: cdktf.booleanToTerraform(struct!.useCustomRuntime),
    use_dotnet_isolated_runtime: cdktf.booleanToTerraform(struct!.useDotnetIsolatedRuntime),
  }
}


export function windowsFunctionAppSiteConfigApplicationStackToHclTerraform(struct?: WindowsFunctionAppSiteConfigApplicationStackOutputReference | WindowsFunctionAppSiteConfigApplicationStack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dotnet_version: {
      value: cdktf.stringToHclTerraform(struct!.dotnetVersion),
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
    powershell_core_version: {
      value: cdktf.stringToHclTerraform(struct!.powershellCoreVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_custom_runtime: {
      value: cdktf.booleanToHclTerraform(struct!.useCustomRuntime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_dotnet_isolated_runtime: {
      value: cdktf.booleanToHclTerraform(struct!.useDotnetIsolatedRuntime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsFunctionAppSiteConfigApplicationStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppSiteConfigApplicationStack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dotnetVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dotnetVersion = this._dotnetVersion;
    }
    if (this._javaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaVersion = this._javaVersion;
    }
    if (this._nodeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeVersion = this._nodeVersion;
    }
    if (this._powershellCoreVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.powershellCoreVersion = this._powershellCoreVersion;
    }
    if (this._useCustomRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCustomRuntime = this._useCustomRuntime;
    }
    if (this._useDotnetIsolatedRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDotnetIsolatedRuntime = this._useDotnetIsolatedRuntime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsFunctionAppSiteConfigApplicationStack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dotnetVersion = undefined;
      this._javaVersion = undefined;
      this._nodeVersion = undefined;
      this._powershellCoreVersion = undefined;
      this._useCustomRuntime = undefined;
      this._useDotnetIsolatedRuntime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dotnetVersion = value.dotnetVersion;
      this._javaVersion = value.javaVersion;
      this._nodeVersion = value.nodeVersion;
      this._powershellCoreVersion = value.powershellCoreVersion;
      this._useCustomRuntime = value.useCustomRuntime;
      this._useDotnetIsolatedRuntime = value.useDotnetIsolatedRuntime;
    }
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

  // powershell_core_version - computed: false, optional: true, required: false
  private _powershellCoreVersion?: string; 
  public get powershellCoreVersion() {
    return this.getStringAttribute('powershell_core_version');
  }
  public set powershellCoreVersion(value: string) {
    this._powershellCoreVersion = value;
  }
  public resetPowershellCoreVersion() {
    this._powershellCoreVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powershellCoreVersionInput() {
    return this._powershellCoreVersion;
  }

  // use_custom_runtime - computed: true, optional: true, required: false
  private _useCustomRuntime?: boolean | cdktf.IResolvable; 
  public get useCustomRuntime() {
    return this.getBooleanAttribute('use_custom_runtime');
  }
  public set useCustomRuntime(value: boolean | cdktf.IResolvable) {
    this._useCustomRuntime = value;
  }
  public resetUseCustomRuntime() {
    this._useCustomRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomRuntimeInput() {
    return this._useCustomRuntime;
  }

  // use_dotnet_isolated_runtime - computed: true, optional: true, required: false
  private _useDotnetIsolatedRuntime?: boolean | cdktf.IResolvable; 
  public get useDotnetIsolatedRuntime() {
    return this.getBooleanAttribute('use_dotnet_isolated_runtime');
  }
  public set useDotnetIsolatedRuntime(value: boolean | cdktf.IResolvable) {
    this._useDotnetIsolatedRuntime = value;
  }
  public resetUseDotnetIsolatedRuntime() {
    this._useDotnetIsolatedRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDotnetIsolatedRuntimeInput() {
    return this._useDotnetIsolatedRuntime;
  }
}
export interface WindowsFunctionAppSiteConfigCors {
  /**
  * Specifies a list of origins that should be allowed to make cross-origin calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#allowed_origins WindowsFunctionApp#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Are credentials allowed in CORS requests? Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#support_credentials WindowsFunctionApp#support_credentials}
  */
  readonly supportCredentials?: boolean | cdktf.IResolvable;
}

export function windowsFunctionAppSiteConfigCorsToTerraform(struct?: WindowsFunctionAppSiteConfigCorsOutputReference | WindowsFunctionAppSiteConfigCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    support_credentials: cdktf.booleanToTerraform(struct!.supportCredentials),
  }
}


export function windowsFunctionAppSiteConfigCorsToHclTerraform(struct?: WindowsFunctionAppSiteConfigCorsOutputReference | WindowsFunctionAppSiteConfigCors): any {
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

export class WindowsFunctionAppSiteConfigCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppSiteConfigCors | undefined {
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

  public set internalValue(value: WindowsFunctionAppSiteConfigCors | undefined) {
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
export interface WindowsFunctionAppSiteConfigIpRestrictionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#x_azure_fdid WindowsFunctionApp#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#x_fd_health_probe WindowsFunctionApp#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#x_forwarded_for WindowsFunctionApp#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#x_forwarded_host WindowsFunctionApp#x_forwarded_host}
  */
  readonly xForwardedHost?: string[];
}

export function windowsFunctionAppSiteConfigIpRestrictionHeadersToTerraform(struct?: WindowsFunctionAppSiteConfigIpRestrictionHeaders | cdktf.IResolvable): any {
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


export function windowsFunctionAppSiteConfigIpRestrictionHeadersToHclTerraform(struct?: WindowsFunctionAppSiteConfigIpRestrictionHeaders | cdktf.IResolvable): any {
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

export class WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WindowsFunctionAppSiteConfigIpRestrictionHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WindowsFunctionAppSiteConfigIpRestrictionHeaders | cdktf.IResolvable | undefined) {
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

export class WindowsFunctionAppSiteConfigIpRestrictionHeadersList extends cdktf.ComplexList {
  public internalValue? : WindowsFunctionAppSiteConfigIpRestrictionHeaders[] | cdktf.IResolvable

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
  public get(index: number): WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference {
    return new WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsFunctionAppSiteConfigIpRestriction {
  /**
  * The action to take. Possible values are `Allow` or `Deny`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#action WindowsFunctionApp#action}
  */
  readonly action?: string;
  /**
  * The description of the IP restriction rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#description WindowsFunctionApp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#headers WindowsFunctionApp#headers}
  */
  readonly headers?: WindowsFunctionAppSiteConfigIpRestrictionHeaders[] | cdktf.IResolvable;
  /**
  * The CIDR notation of the IP or IP Range to match. For example: `10.0.0.0/24` or `192.168.10.1/32` or `fe80::/64` or `13.107.6.152/31,13.107.128.0/22`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#ip_address WindowsFunctionApp#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The name which should be used for this `ip_restriction`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#name WindowsFunctionApp#name}
  */
  readonly name?: string;
  /**
  * The priority value of this `ip_restriction`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#priority WindowsFunctionApp#priority}
  */
  readonly priority?: number;
  /**
  * The Service Tag used for this IP Restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#service_tag WindowsFunctionApp#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * The Virtual Network Subnet ID used for this IP Restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
}

export function windowsFunctionAppSiteConfigIpRestrictionToTerraform(struct?: WindowsFunctionAppSiteConfigIpRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    headers: cdktf.listMapper(windowsFunctionAppSiteConfigIpRestrictionHeadersToTerraform, false)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}


export function windowsFunctionAppSiteConfigIpRestrictionToHclTerraform(struct?: WindowsFunctionAppSiteConfigIpRestriction | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(windowsFunctionAppSiteConfigIpRestrictionHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppSiteConfigIpRestrictionHeadersList",
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

export class WindowsFunctionAppSiteConfigIpRestrictionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WindowsFunctionAppSiteConfigIpRestriction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WindowsFunctionAppSiteConfigIpRestriction | cdktf.IResolvable | undefined) {
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
  private _headers = new WindowsFunctionAppSiteConfigIpRestrictionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: WindowsFunctionAppSiteConfigIpRestrictionHeaders[] | cdktf.IResolvable) {
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

export class WindowsFunctionAppSiteConfigIpRestrictionList extends cdktf.ComplexList {
  public internalValue? : WindowsFunctionAppSiteConfigIpRestriction[] | cdktf.IResolvable

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
  public get(index: number): WindowsFunctionAppSiteConfigIpRestrictionOutputReference {
    return new WindowsFunctionAppSiteConfigIpRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsFunctionAppSiteConfigScmIpRestrictionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#x_azure_fdid WindowsFunctionApp#x_azure_fdid}
  */
  readonly xAzureFdid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#x_fd_health_probe WindowsFunctionApp#x_fd_health_probe}
  */
  readonly xFdHealthProbe?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#x_forwarded_for WindowsFunctionApp#x_forwarded_for}
  */
  readonly xForwardedFor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#x_forwarded_host WindowsFunctionApp#x_forwarded_host}
  */
  readonly xForwardedHost?: string[];
}

export function windowsFunctionAppSiteConfigScmIpRestrictionHeadersToTerraform(struct?: WindowsFunctionAppSiteConfigScmIpRestrictionHeaders | cdktf.IResolvable): any {
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


export function windowsFunctionAppSiteConfigScmIpRestrictionHeadersToHclTerraform(struct?: WindowsFunctionAppSiteConfigScmIpRestrictionHeaders | cdktf.IResolvable): any {
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

export class WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WindowsFunctionAppSiteConfigScmIpRestrictionHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WindowsFunctionAppSiteConfigScmIpRestrictionHeaders | cdktf.IResolvable | undefined) {
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

export class WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList extends cdktf.ComplexList {
  public internalValue? : WindowsFunctionAppSiteConfigScmIpRestrictionHeaders[] | cdktf.IResolvable

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
  public get(index: number): WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference {
    return new WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsFunctionAppSiteConfigScmIpRestriction {
  /**
  * The action to take. Possible values are `Allow` or `Deny`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#action WindowsFunctionApp#action}
  */
  readonly action?: string;
  /**
  * The description of the IP restriction rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#description WindowsFunctionApp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#headers WindowsFunctionApp#headers}
  */
  readonly headers?: WindowsFunctionAppSiteConfigScmIpRestrictionHeaders[] | cdktf.IResolvable;
  /**
  * The CIDR notation of the IP or IP Range to match. For example: `10.0.0.0/24` or `192.168.10.1/32` or `fe80::/64` or `13.107.6.152/31,13.107.128.0/22`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#ip_address WindowsFunctionApp#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The name which should be used for this `ip_restriction`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#name WindowsFunctionApp#name}
  */
  readonly name?: string;
  /**
  * The priority value of this `ip_restriction`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#priority WindowsFunctionApp#priority}
  */
  readonly priority?: number;
  /**
  * The Service Tag used for this IP Restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#service_tag WindowsFunctionApp#service_tag}
  */
  readonly serviceTag?: string;
  /**
  * The Virtual Network Subnet ID used for this IP Restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}
  */
  readonly virtualNetworkSubnetId?: string;
}

export function windowsFunctionAppSiteConfigScmIpRestrictionToTerraform(struct?: WindowsFunctionAppSiteConfigScmIpRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    headers: cdktf.listMapper(windowsFunctionAppSiteConfigScmIpRestrictionHeadersToTerraform, false)(struct!.headers),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
    virtual_network_subnet_id: cdktf.stringToTerraform(struct!.virtualNetworkSubnetId),
  }
}


export function windowsFunctionAppSiteConfigScmIpRestrictionToHclTerraform(struct?: WindowsFunctionAppSiteConfigScmIpRestriction | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(windowsFunctionAppSiteConfigScmIpRestrictionHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList",
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

export class WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WindowsFunctionAppSiteConfigScmIpRestriction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WindowsFunctionAppSiteConfigScmIpRestriction | cdktf.IResolvable | undefined) {
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
  private _headers = new WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: WindowsFunctionAppSiteConfigScmIpRestrictionHeaders[] | cdktf.IResolvable) {
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

export class WindowsFunctionAppSiteConfigScmIpRestrictionList extends cdktf.ComplexList {
  public internalValue? : WindowsFunctionAppSiteConfigScmIpRestriction[] | cdktf.IResolvable

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
  public get(index: number): WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference {
    return new WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsFunctionAppSiteConfig {
  /**
  * If this Windows Web App is Always On enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#always_on WindowsFunctionApp#always_on}
  */
  readonly alwaysOn?: boolean | cdktf.IResolvable;
  /**
  * The URL of the API definition that describes this Windows Function App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#api_definition_url WindowsFunctionApp#api_definition_url}
  */
  readonly apiDefinitionUrl?: string;
  /**
  * The ID of the API Management API for this Windows Function App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#api_management_api_id WindowsFunctionApp#api_management_api_id}
  */
  readonly apiManagementApiId?: string;
  /**
  * The program and any arguments used to launch this app via the command line. (Example `node myapp.js`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#app_command_line WindowsFunctionApp#app_command_line}
  */
  readonly appCommandLine?: string;
  /**
  * The number of workers this function app can scale out to. Only applicable to apps on the Consumption and Premium plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#app_scale_limit WindowsFunctionApp#app_scale_limit}
  */
  readonly appScaleLimit?: number;
  /**
  * The Connection String for linking the Windows Function App to Application Insights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#application_insights_connection_string WindowsFunctionApp#application_insights_connection_string}
  */
  readonly applicationInsightsConnectionString?: string;
  /**
  * The Instrumentation Key for connecting the Windows Function App to Application Insights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#application_insights_key WindowsFunctionApp#application_insights_key}
  */
  readonly applicationInsightsKey?: string;
  /**
  * Specifies a list of Default Documents for the Windows Web App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#default_documents WindowsFunctionApp#default_documents}
  */
  readonly defaultDocuments?: string[];
  /**
  * The number of minimum instances for this Windows Function App. Only affects apps on Elastic Premium plans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#elastic_instance_minimum WindowsFunctionApp#elastic_instance_minimum}
  */
  readonly elasticInstanceMinimum?: number;
  /**
  * State of FTP / FTPS service for this function app. Possible values include: `AllAllowed`, `FtpsOnly` and `Disabled`. Defaults to `Disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#ftps_state WindowsFunctionApp#ftps_state}
  */
  readonly ftpsState?: string;
  /**
  * The amount of time in minutes that a node is unhealthy before being removed from the load balancer. Possible values are between `2` and `10`. Only valid in conjunction with `health_check_path`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#health_check_eviction_time_in_min WindowsFunctionApp#health_check_eviction_time_in_min}
  */
  readonly healthCheckEvictionTimeInMin?: number;
  /**
  * The path to be checked for this function app health.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#health_check_path WindowsFunctionApp#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Specifies if the http2 protocol should be enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#http2_enabled WindowsFunctionApp#http2_enabled}
  */
  readonly http2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#ip_restriction_default_action WindowsFunctionApp#ip_restriction_default_action}
  */
  readonly ipRestrictionDefaultAction?: string;
  /**
  * The Site load balancing mode. Possible values include: `WeightedRoundRobin`, `LeastRequests`, `LeastResponseTime`, `WeightedTotalTraffic`, `RequestHash`, `PerSiteRoundRobin`. Defaults to `LeastRequests` if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#load_balancing_mode WindowsFunctionApp#load_balancing_mode}
  */
  readonly loadBalancingMode?: string;
  /**
  * The Managed Pipeline mode. Possible values include: `Integrated`, `Classic`. Defaults to `Integrated`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#managed_pipeline_mode WindowsFunctionApp#managed_pipeline_mode}
  */
  readonly managedPipelineMode?: string;
  /**
  * The configures the minimum version of TLS required for SSL requests. Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#minimum_tls_version WindowsFunctionApp#minimum_tls_version}
  */
  readonly minimumTlsVersion?: string;
  /**
  * The number of pre-warmed instances for this function app. Only affects apps on an Elastic Premium plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#pre_warmed_instance_count WindowsFunctionApp#pre_warmed_instance_count}
  */
  readonly preWarmedInstanceCount?: number;
  /**
  * Should Remote Debugging be enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#remote_debugging_enabled WindowsFunctionApp#remote_debugging_enabled}
  */
  readonly remoteDebuggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Remote Debugging Version. Possible values include `VS2017`, `VS2019`, and `VS2022`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#remote_debugging_version WindowsFunctionApp#remote_debugging_version}
  */
  readonly remoteDebuggingVersion?: string;
  /**
  * Should Functions Runtime Scale Monitoring be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#runtime_scale_monitoring_enabled WindowsFunctionApp#runtime_scale_monitoring_enabled}
  */
  readonly runtimeScaleMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#scm_ip_restriction_default_action WindowsFunctionApp#scm_ip_restriction_default_action}
  */
  readonly scmIpRestrictionDefaultAction?: string;
  /**
  * Configures the minimum version of TLS required for SSL requests to the SCM site Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#scm_minimum_tls_version WindowsFunctionApp#scm_minimum_tls_version}
  */
  readonly scmMinimumTlsVersion?: string;
  /**
  * Should the Windows Function App `ip_restriction` configuration be used for the SCM also.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#scm_use_main_ip_restriction WindowsFunctionApp#scm_use_main_ip_restriction}
  */
  readonly scmUseMainIpRestriction?: boolean | cdktf.IResolvable;
  /**
  * Should the Windows Web App use a 32-bit worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#use_32_bit_worker WindowsFunctionApp#use_32_bit_worker}
  */
  readonly use32BitWorker?: boolean | cdktf.IResolvable;
  /**
  * Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#vnet_route_all_enabled WindowsFunctionApp#vnet_route_all_enabled}
  */
  readonly vnetRouteAllEnabled?: boolean | cdktf.IResolvable;
  /**
  * Should Web Sockets be enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#websockets_enabled WindowsFunctionApp#websockets_enabled}
  */
  readonly websocketsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The number of Workers for this Windows Function App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#worker_count WindowsFunctionApp#worker_count}
  */
  readonly workerCount?: number;
  /**
  * app_service_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#app_service_logs WindowsFunctionApp#app_service_logs}
  */
  readonly appServiceLogs?: WindowsFunctionAppSiteConfigAppServiceLogs;
  /**
  * application_stack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#application_stack WindowsFunctionApp#application_stack}
  */
  readonly applicationStack?: WindowsFunctionAppSiteConfigApplicationStack;
  /**
  * cors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#cors WindowsFunctionApp#cors}
  */
  readonly cors?: WindowsFunctionAppSiteConfigCors;
  /**
  * ip_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#ip_restriction WindowsFunctionApp#ip_restriction}
  */
  readonly ipRestriction?: WindowsFunctionAppSiteConfigIpRestriction[] | cdktf.IResolvable;
  /**
  * scm_ip_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#scm_ip_restriction WindowsFunctionApp#scm_ip_restriction}
  */
  readonly scmIpRestriction?: WindowsFunctionAppSiteConfigScmIpRestriction[] | cdktf.IResolvable;
}

export function windowsFunctionAppSiteConfigToTerraform(struct?: WindowsFunctionAppSiteConfigOutputReference | WindowsFunctionAppSiteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_on: cdktf.booleanToTerraform(struct!.alwaysOn),
    api_definition_url: cdktf.stringToTerraform(struct!.apiDefinitionUrl),
    api_management_api_id: cdktf.stringToTerraform(struct!.apiManagementApiId),
    app_command_line: cdktf.stringToTerraform(struct!.appCommandLine),
    app_scale_limit: cdktf.numberToTerraform(struct!.appScaleLimit),
    application_insights_connection_string: cdktf.stringToTerraform(struct!.applicationInsightsConnectionString),
    application_insights_key: cdktf.stringToTerraform(struct!.applicationInsightsKey),
    default_documents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultDocuments),
    elastic_instance_minimum: cdktf.numberToTerraform(struct!.elasticInstanceMinimum),
    ftps_state: cdktf.stringToTerraform(struct!.ftpsState),
    health_check_eviction_time_in_min: cdktf.numberToTerraform(struct!.healthCheckEvictionTimeInMin),
    health_check_path: cdktf.stringToTerraform(struct!.healthCheckPath),
    http2_enabled: cdktf.booleanToTerraform(struct!.http2Enabled),
    ip_restriction_default_action: cdktf.stringToTerraform(struct!.ipRestrictionDefaultAction),
    load_balancing_mode: cdktf.stringToTerraform(struct!.loadBalancingMode),
    managed_pipeline_mode: cdktf.stringToTerraform(struct!.managedPipelineMode),
    minimum_tls_version: cdktf.stringToTerraform(struct!.minimumTlsVersion),
    pre_warmed_instance_count: cdktf.numberToTerraform(struct!.preWarmedInstanceCount),
    remote_debugging_enabled: cdktf.booleanToTerraform(struct!.remoteDebuggingEnabled),
    remote_debugging_version: cdktf.stringToTerraform(struct!.remoteDebuggingVersion),
    runtime_scale_monitoring_enabled: cdktf.booleanToTerraform(struct!.runtimeScaleMonitoringEnabled),
    scm_ip_restriction_default_action: cdktf.stringToTerraform(struct!.scmIpRestrictionDefaultAction),
    scm_minimum_tls_version: cdktf.stringToTerraform(struct!.scmMinimumTlsVersion),
    scm_use_main_ip_restriction: cdktf.booleanToTerraform(struct!.scmUseMainIpRestriction),
    use_32_bit_worker: cdktf.booleanToTerraform(struct!.use32BitWorker),
    vnet_route_all_enabled: cdktf.booleanToTerraform(struct!.vnetRouteAllEnabled),
    websockets_enabled: cdktf.booleanToTerraform(struct!.websocketsEnabled),
    worker_count: cdktf.numberToTerraform(struct!.workerCount),
    app_service_logs: windowsFunctionAppSiteConfigAppServiceLogsToTerraform(struct!.appServiceLogs),
    application_stack: windowsFunctionAppSiteConfigApplicationStackToTerraform(struct!.applicationStack),
    cors: windowsFunctionAppSiteConfigCorsToTerraform(struct!.cors),
    ip_restriction: cdktf.listMapper(windowsFunctionAppSiteConfigIpRestrictionToTerraform, true)(struct!.ipRestriction),
    scm_ip_restriction: cdktf.listMapper(windowsFunctionAppSiteConfigScmIpRestrictionToTerraform, true)(struct!.scmIpRestriction),
  }
}


export function windowsFunctionAppSiteConfigToHclTerraform(struct?: WindowsFunctionAppSiteConfigOutputReference | WindowsFunctionAppSiteConfig): any {
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
    app_scale_limit: {
      value: cdktf.numberToHclTerraform(struct!.appScaleLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    application_insights_connection_string: {
      value: cdktf.stringToHclTerraform(struct!.applicationInsightsConnectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_insights_key: {
      value: cdktf.stringToHclTerraform(struct!.applicationInsightsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_documents: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultDocuments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    elastic_instance_minimum: {
      value: cdktf.numberToHclTerraform(struct!.elasticInstanceMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    pre_warmed_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.preWarmedInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    runtime_scale_monitoring_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.runtimeScaleMonitoringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    app_service_logs: {
      value: windowsFunctionAppSiteConfigAppServiceLogsToHclTerraform(struct!.appServiceLogs),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppSiteConfigAppServiceLogsList",
    },
    application_stack: {
      value: windowsFunctionAppSiteConfigApplicationStackToHclTerraform(struct!.applicationStack),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppSiteConfigApplicationStackList",
    },
    cors: {
      value: windowsFunctionAppSiteConfigCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppSiteConfigCorsList",
    },
    ip_restriction: {
      value: cdktf.listMapperHcl(windowsFunctionAppSiteConfigIpRestrictionToHclTerraform, true)(struct!.ipRestriction),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppSiteConfigIpRestrictionList",
    },
    scm_ip_restriction: {
      value: cdktf.listMapperHcl(windowsFunctionAppSiteConfigScmIpRestrictionToHclTerraform, true)(struct!.scmIpRestriction),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsFunctionAppSiteConfigScmIpRestrictionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsFunctionAppSiteConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppSiteConfig | undefined {
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
    if (this._appScaleLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appScaleLimit = this._appScaleLimit;
    }
    if (this._applicationInsightsConnectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationInsightsConnectionString = this._applicationInsightsConnectionString;
    }
    if (this._applicationInsightsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationInsightsKey = this._applicationInsightsKey;
    }
    if (this._defaultDocuments !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDocuments = this._defaultDocuments;
    }
    if (this._elasticInstanceMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticInstanceMinimum = this._elasticInstanceMinimum;
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
    if (this._managedPipelineMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedPipelineMode = this._managedPipelineMode;
    }
    if (this._minimumTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumTlsVersion = this._minimumTlsVersion;
    }
    if (this._preWarmedInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.preWarmedInstanceCount = this._preWarmedInstanceCount;
    }
    if (this._remoteDebuggingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDebuggingEnabled = this._remoteDebuggingEnabled;
    }
    if (this._remoteDebuggingVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDebuggingVersion = this._remoteDebuggingVersion;
    }
    if (this._runtimeScaleMonitoringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeScaleMonitoringEnabled = this._runtimeScaleMonitoringEnabled;
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
    if (this._appServiceLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appServiceLogs = this._appServiceLogs?.internalValue;
    }
    if (this._applicationStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationStack = this._applicationStack?.internalValue;
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

  public set internalValue(value: WindowsFunctionAppSiteConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysOn = undefined;
      this._apiDefinitionUrl = undefined;
      this._apiManagementApiId = undefined;
      this._appCommandLine = undefined;
      this._appScaleLimit = undefined;
      this._applicationInsightsConnectionString = undefined;
      this._applicationInsightsKey = undefined;
      this._defaultDocuments = undefined;
      this._elasticInstanceMinimum = undefined;
      this._ftpsState = undefined;
      this._healthCheckEvictionTimeInMin = undefined;
      this._healthCheckPath = undefined;
      this._http2Enabled = undefined;
      this._ipRestrictionDefaultAction = undefined;
      this._loadBalancingMode = undefined;
      this._managedPipelineMode = undefined;
      this._minimumTlsVersion = undefined;
      this._preWarmedInstanceCount = undefined;
      this._remoteDebuggingEnabled = undefined;
      this._remoteDebuggingVersion = undefined;
      this._runtimeScaleMonitoringEnabled = undefined;
      this._scmIpRestrictionDefaultAction = undefined;
      this._scmMinimumTlsVersion = undefined;
      this._scmUseMainIpRestriction = undefined;
      this._use32BitWorker = undefined;
      this._vnetRouteAllEnabled = undefined;
      this._websocketsEnabled = undefined;
      this._workerCount = undefined;
      this._appServiceLogs.internalValue = undefined;
      this._applicationStack.internalValue = undefined;
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
      this._appScaleLimit = value.appScaleLimit;
      this._applicationInsightsConnectionString = value.applicationInsightsConnectionString;
      this._applicationInsightsKey = value.applicationInsightsKey;
      this._defaultDocuments = value.defaultDocuments;
      this._elasticInstanceMinimum = value.elasticInstanceMinimum;
      this._ftpsState = value.ftpsState;
      this._healthCheckEvictionTimeInMin = value.healthCheckEvictionTimeInMin;
      this._healthCheckPath = value.healthCheckPath;
      this._http2Enabled = value.http2Enabled;
      this._ipRestrictionDefaultAction = value.ipRestrictionDefaultAction;
      this._loadBalancingMode = value.loadBalancingMode;
      this._managedPipelineMode = value.managedPipelineMode;
      this._minimumTlsVersion = value.minimumTlsVersion;
      this._preWarmedInstanceCount = value.preWarmedInstanceCount;
      this._remoteDebuggingEnabled = value.remoteDebuggingEnabled;
      this._remoteDebuggingVersion = value.remoteDebuggingVersion;
      this._runtimeScaleMonitoringEnabled = value.runtimeScaleMonitoringEnabled;
      this._scmIpRestrictionDefaultAction = value.scmIpRestrictionDefaultAction;
      this._scmMinimumTlsVersion = value.scmMinimumTlsVersion;
      this._scmUseMainIpRestriction = value.scmUseMainIpRestriction;
      this._use32BitWorker = value.use32BitWorker;
      this._vnetRouteAllEnabled = value.vnetRouteAllEnabled;
      this._websocketsEnabled = value.websocketsEnabled;
      this._workerCount = value.workerCount;
      this._appServiceLogs.internalValue = value.appServiceLogs;
      this._applicationStack.internalValue = value.applicationStack;
      this._cors.internalValue = value.cors;
      this._ipRestriction.internalValue = value.ipRestriction;
      this._scmIpRestriction.internalValue = value.scmIpRestriction;
    }
  }

  // always_on - computed: true, optional: true, required: false
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

  // application_insights_connection_string - computed: false, optional: true, required: false
  private _applicationInsightsConnectionString?: string; 
  public get applicationInsightsConnectionString() {
    return this.getStringAttribute('application_insights_connection_string');
  }
  public set applicationInsightsConnectionString(value: string) {
    this._applicationInsightsConnectionString = value;
  }
  public resetApplicationInsightsConnectionString() {
    this._applicationInsightsConnectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsConnectionStringInput() {
    return this._applicationInsightsConnectionString;
  }

  // application_insights_key - computed: false, optional: true, required: false
  private _applicationInsightsKey?: string; 
  public get applicationInsightsKey() {
    return this.getStringAttribute('application_insights_key');
  }
  public set applicationInsightsKey(value: string) {
    this._applicationInsightsKey = value;
  }
  public resetApplicationInsightsKey() {
    this._applicationInsightsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsKeyInput() {
    return this._applicationInsightsKey;
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

  // runtime_scale_monitoring_enabled - computed: false, optional: true, required: false
  private _runtimeScaleMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get runtimeScaleMonitoringEnabled() {
    return this.getBooleanAttribute('runtime_scale_monitoring_enabled');
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

  // app_service_logs - computed: false, optional: true, required: false
  private _appServiceLogs = new WindowsFunctionAppSiteConfigAppServiceLogsOutputReference(this, "app_service_logs");
  public get appServiceLogs() {
    return this._appServiceLogs;
  }
  public putAppServiceLogs(value: WindowsFunctionAppSiteConfigAppServiceLogs) {
    this._appServiceLogs.internalValue = value;
  }
  public resetAppServiceLogs() {
    this._appServiceLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceLogsInput() {
    return this._appServiceLogs.internalValue;
  }

  // application_stack - computed: false, optional: true, required: false
  private _applicationStack = new WindowsFunctionAppSiteConfigApplicationStackOutputReference(this, "application_stack");
  public get applicationStack() {
    return this._applicationStack;
  }
  public putApplicationStack(value: WindowsFunctionAppSiteConfigApplicationStack) {
    this._applicationStack.internalValue = value;
  }
  public resetApplicationStack() {
    this._applicationStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationStackInput() {
    return this._applicationStack.internalValue;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new WindowsFunctionAppSiteConfigCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: WindowsFunctionAppSiteConfigCors) {
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
  private _ipRestriction = new WindowsFunctionAppSiteConfigIpRestrictionList(this, "ip_restriction", false);
  public get ipRestriction() {
    return this._ipRestriction;
  }
  public putIpRestriction(value: WindowsFunctionAppSiteConfigIpRestriction[] | cdktf.IResolvable) {
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
  private _scmIpRestriction = new WindowsFunctionAppSiteConfigScmIpRestrictionList(this, "scm_ip_restriction", false);
  public get scmIpRestriction() {
    return this._scmIpRestriction;
  }
  public putScmIpRestriction(value: WindowsFunctionAppSiteConfigScmIpRestriction[] | cdktf.IResolvable) {
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
export interface WindowsFunctionAppStickySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#app_setting_names WindowsFunctionApp#app_setting_names}
  */
  readonly appSettingNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#connection_string_names WindowsFunctionApp#connection_string_names}
  */
  readonly connectionStringNames?: string[];
}

export function windowsFunctionAppStickySettingsToTerraform(struct?: WindowsFunctionAppStickySettingsOutputReference | WindowsFunctionAppStickySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_setting_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appSettingNames),
    connection_string_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connectionStringNames),
  }
}


export function windowsFunctionAppStickySettingsToHclTerraform(struct?: WindowsFunctionAppStickySettingsOutputReference | WindowsFunctionAppStickySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_setting_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appSettingNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    connection_string_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connectionStringNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsFunctionAppStickySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsFunctionAppStickySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appSettingNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSettingNames = this._appSettingNames;
    }
    if (this._connectionStringNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionStringNames = this._connectionStringNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsFunctionAppStickySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appSettingNames = undefined;
      this._connectionStringNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appSettingNames = value.appSettingNames;
      this._connectionStringNames = value.connectionStringNames;
    }
  }

  // app_setting_names - computed: false, optional: true, required: false
  private _appSettingNames?: string[]; 
  public get appSettingNames() {
    return this.getListAttribute('app_setting_names');
  }
  public set appSettingNames(value: string[]) {
    this._appSettingNames = value;
  }
  public resetAppSettingNames() {
    this._appSettingNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSettingNamesInput() {
    return this._appSettingNames;
  }

  // connection_string_names - computed: false, optional: true, required: false
  private _connectionStringNames?: string[]; 
  public get connectionStringNames() {
    return this.getListAttribute('connection_string_names');
  }
  public set connectionStringNames(value: string[]) {
    this._connectionStringNames = value;
  }
  public resetConnectionStringNames() {
    this._connectionStringNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringNamesInput() {
    return this._connectionStringNames;
  }
}
export interface WindowsFunctionAppStorageAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#access_key WindowsFunctionApp#access_key}
  */
  readonly accessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#account_name WindowsFunctionApp#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#mount_path WindowsFunctionApp#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#name WindowsFunctionApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#share_name WindowsFunctionApp#share_name}
  */
  readonly shareName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#type WindowsFunctionApp#type}
  */
  readonly type: string;
}

export function windowsFunctionAppStorageAccountToTerraform(struct?: WindowsFunctionAppStorageAccount | cdktf.IResolvable): any {
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


export function windowsFunctionAppStorageAccountToHclTerraform(struct?: WindowsFunctionAppStorageAccount | cdktf.IResolvable): any {
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

export class WindowsFunctionAppStorageAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WindowsFunctionAppStorageAccount | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WindowsFunctionAppStorageAccount | cdktf.IResolvable | undefined) {
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

export class WindowsFunctionAppStorageAccountList extends cdktf.ComplexList {
  public internalValue? : WindowsFunctionAppStorageAccount[] | cdktf.IResolvable

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
  public get(index: number): WindowsFunctionAppStorageAccountOutputReference {
    return new WindowsFunctionAppStorageAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsFunctionAppTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#create WindowsFunctionApp#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#delete WindowsFunctionApp#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#read WindowsFunctionApp#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#update WindowsFunctionApp#update}
  */
  readonly update?: string;
}

export function windowsFunctionAppTimeoutsToTerraform(struct?: WindowsFunctionAppTimeouts | cdktf.IResolvable): any {
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


export function windowsFunctionAppTimeoutsToHclTerraform(struct?: WindowsFunctionAppTimeouts | cdktf.IResolvable): any {
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

export class WindowsFunctionAppTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WindowsFunctionAppTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WindowsFunctionAppTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app azurerm_windows_function_app}
*/
export class WindowsFunctionApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_windows_function_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WindowsFunctionApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WindowsFunctionApp to import
  * @param importFromId The id of the existing WindowsFunctionApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WindowsFunctionApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_windows_function_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_function_app azurerm_windows_function_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WindowsFunctionAppConfig
  */
  public constructor(scope: Construct, id: string, config: WindowsFunctionAppConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_windows_function_app',
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
    this._appSettings = config.appSettings;
    this._builtinLoggingEnabled = config.builtinLoggingEnabled;
    this._clientCertificateEnabled = config.clientCertificateEnabled;
    this._clientCertificateExclusionPaths = config.clientCertificateExclusionPaths;
    this._clientCertificateMode = config.clientCertificateMode;
    this._contentShareForceDisabled = config.contentShareForceDisabled;
    this._dailyMemoryTimeQuota = config.dailyMemoryTimeQuota;
    this._enabled = config.enabled;
    this._ftpPublishBasicAuthenticationEnabled = config.ftpPublishBasicAuthenticationEnabled;
    this._functionsExtensionVersion = config.functionsExtensionVersion;
    this._httpsOnly = config.httpsOnly;
    this._id = config.id;
    this._keyVaultReferenceIdentityId = config.keyVaultReferenceIdentityId;
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._servicePlanId = config.servicePlanId;
    this._storageAccountAccessKey = config.storageAccountAccessKey;
    this._storageAccountName = config.storageAccountName;
    this._storageKeyVaultSecretId = config.storageKeyVaultSecretId;
    this._storageUsesManagedIdentity = config.storageUsesManagedIdentity;
    this._tags = config.tags;
    this._virtualNetworkSubnetId = config.virtualNetworkSubnetId;
    this._vnetImagePullEnabled = config.vnetImagePullEnabled;
    this._webdeployPublishBasicAuthenticationEnabled = config.webdeployPublishBasicAuthenticationEnabled;
    this._zipDeployFile = config.zipDeployFile;
    this._authSettings.internalValue = config.authSettings;
    this._authSettingsV2.internalValue = config.authSettingsV2;
    this._backup.internalValue = config.backup;
    this._connectionString.internalValue = config.connectionString;
    this._identity.internalValue = config.identity;
    this._siteConfig.internalValue = config.siteConfig;
    this._stickySettings.internalValue = config.stickySettings;
    this._storageAccount.internalValue = config.storageAccount;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // builtin_logging_enabled - computed: false, optional: true, required: false
  private _builtinLoggingEnabled?: boolean | cdktf.IResolvable; 
  public get builtinLoggingEnabled() {
    return this.getBooleanAttribute('builtin_logging_enabled');
  }
  public set builtinLoggingEnabled(value: boolean | cdktf.IResolvable) {
    this._builtinLoggingEnabled = value;
  }
  public resetBuiltinLoggingEnabled() {
    this._builtinLoggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtinLoggingEnabledInput() {
    return this._builtinLoggingEnabled;
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

  // content_share_force_disabled - computed: false, optional: true, required: false
  private _contentShareForceDisabled?: boolean | cdktf.IResolvable; 
  public get contentShareForceDisabled() {
    return this.getBooleanAttribute('content_share_force_disabled');
  }
  public set contentShareForceDisabled(value: boolean | cdktf.IResolvable) {
    this._contentShareForceDisabled = value;
  }
  public resetContentShareForceDisabled() {
    this._contentShareForceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentShareForceDisabledInput() {
    return this._contentShareForceDisabled;
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

  // functions_extension_version - computed: false, optional: true, required: false
  private _functionsExtensionVersion?: string; 
  public get functionsExtensionVersion() {
    return this.getStringAttribute('functions_extension_version');
  }
  public set functionsExtensionVersion(value: string) {
    this._functionsExtensionVersion = value;
  }
  public resetFunctionsExtensionVersion() {
    this._functionsExtensionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsExtensionVersionInput() {
    return this._functionsExtensionVersion;
  }

  // hosting_environment_id - computed: true, optional: false, required: false
  public get hostingEnvironmentId() {
    return this.getStringAttribute('hosting_environment_id');
  }

  // https_only - computed: true, optional: true, required: false
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

  // service_plan_id - computed: false, optional: false, required: true
  private _servicePlanId?: string; 
  public get servicePlanId() {
    return this.getStringAttribute('service_plan_id');
  }
  public set servicePlanId(value: string) {
    this._servicePlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePlanIdInput() {
    return this._servicePlanId;
  }

  // site_credential - computed: true, optional: false, required: false
  private _siteCredential = new WindowsFunctionAppSiteCredentialList(this, "site_credential", false);
  public get siteCredential() {
    return this._siteCredential;
  }

  // storage_account_access_key - computed: false, optional: true, required: false
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

  // storage_account_name - computed: false, optional: true, required: false
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

  // storage_key_vault_secret_id - computed: false, optional: true, required: false
  private _storageKeyVaultSecretId?: string; 
  public get storageKeyVaultSecretId() {
    return this.getStringAttribute('storage_key_vault_secret_id');
  }
  public set storageKeyVaultSecretId(value: string) {
    this._storageKeyVaultSecretId = value;
  }
  public resetStorageKeyVaultSecretId() {
    this._storageKeyVaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageKeyVaultSecretIdInput() {
    return this._storageKeyVaultSecretId;
  }

  // storage_uses_managed_identity - computed: false, optional: true, required: false
  private _storageUsesManagedIdentity?: boolean | cdktf.IResolvable; 
  public get storageUsesManagedIdentity() {
    return this.getBooleanAttribute('storage_uses_managed_identity');
  }
  public set storageUsesManagedIdentity(value: boolean | cdktf.IResolvable) {
    this._storageUsesManagedIdentity = value;
  }
  public resetStorageUsesManagedIdentity() {
    this._storageUsesManagedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUsesManagedIdentityInput() {
    return this._storageUsesManagedIdentity;
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

  // vnet_image_pull_enabled - computed: false, optional: true, required: false
  private _vnetImagePullEnabled?: boolean | cdktf.IResolvable; 
  public get vnetImagePullEnabled() {
    return this.getBooleanAttribute('vnet_image_pull_enabled');
  }
  public set vnetImagePullEnabled(value: boolean | cdktf.IResolvable) {
    this._vnetImagePullEnabled = value;
  }
  public resetVnetImagePullEnabled() {
    this._vnetImagePullEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetImagePullEnabledInput() {
    return this._vnetImagePullEnabled;
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
  private _authSettings = new WindowsFunctionAppAuthSettingsOutputReference(this, "auth_settings");
  public get authSettings() {
    return this._authSettings;
  }
  public putAuthSettings(value: WindowsFunctionAppAuthSettings) {
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
  private _authSettingsV2 = new WindowsFunctionAppAuthSettingsV2OutputReference(this, "auth_settings_v2");
  public get authSettingsV2() {
    return this._authSettingsV2;
  }
  public putAuthSettingsV2(value: WindowsFunctionAppAuthSettingsV2) {
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
  private _backup = new WindowsFunctionAppBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: WindowsFunctionAppBackup) {
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
  private _connectionString = new WindowsFunctionAppConnectionStringList(this, "connection_string", true);
  public get connectionString() {
    return this._connectionString;
  }
  public putConnectionString(value: WindowsFunctionAppConnectionString[] | cdktf.IResolvable) {
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
  private _identity = new WindowsFunctionAppIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: WindowsFunctionAppIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // site_config - computed: false, optional: false, required: true
  private _siteConfig = new WindowsFunctionAppSiteConfigOutputReference(this, "site_config");
  public get siteConfig() {
    return this._siteConfig;
  }
  public putSiteConfig(value: WindowsFunctionAppSiteConfig) {
    this._siteConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteConfigInput() {
    return this._siteConfig.internalValue;
  }

  // sticky_settings - computed: false, optional: true, required: false
  private _stickySettings = new WindowsFunctionAppStickySettingsOutputReference(this, "sticky_settings");
  public get stickySettings() {
    return this._stickySettings;
  }
  public putStickySettings(value: WindowsFunctionAppStickySettings) {
    this._stickySettings.internalValue = value;
  }
  public resetStickySettings() {
    this._stickySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickySettingsInput() {
    return this._stickySettings.internalValue;
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount = new WindowsFunctionAppStorageAccountList(this, "storage_account", true);
  public get storageAccount() {
    return this._storageAccount;
  }
  public putStorageAccount(value: WindowsFunctionAppStorageAccount[] | cdktf.IResolvable) {
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
  private _timeouts = new WindowsFunctionAppTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WindowsFunctionAppTimeouts) {
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
      app_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._appSettings),
      builtin_logging_enabled: cdktf.booleanToTerraform(this._builtinLoggingEnabled),
      client_certificate_enabled: cdktf.booleanToTerraform(this._clientCertificateEnabled),
      client_certificate_exclusion_paths: cdktf.stringToTerraform(this._clientCertificateExclusionPaths),
      client_certificate_mode: cdktf.stringToTerraform(this._clientCertificateMode),
      content_share_force_disabled: cdktf.booleanToTerraform(this._contentShareForceDisabled),
      daily_memory_time_quota: cdktf.numberToTerraform(this._dailyMemoryTimeQuota),
      enabled: cdktf.booleanToTerraform(this._enabled),
      ftp_publish_basic_authentication_enabled: cdktf.booleanToTerraform(this._ftpPublishBasicAuthenticationEnabled),
      functions_extension_version: cdktf.stringToTerraform(this._functionsExtensionVersion),
      https_only: cdktf.booleanToTerraform(this._httpsOnly),
      id: cdktf.stringToTerraform(this._id),
      key_vault_reference_identity_id: cdktf.stringToTerraform(this._keyVaultReferenceIdentityId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_plan_id: cdktf.stringToTerraform(this._servicePlanId),
      storage_account_access_key: cdktf.stringToTerraform(this._storageAccountAccessKey),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      storage_key_vault_secret_id: cdktf.stringToTerraform(this._storageKeyVaultSecretId),
      storage_uses_managed_identity: cdktf.booleanToTerraform(this._storageUsesManagedIdentity),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      virtual_network_subnet_id: cdktf.stringToTerraform(this._virtualNetworkSubnetId),
      vnet_image_pull_enabled: cdktf.booleanToTerraform(this._vnetImagePullEnabled),
      webdeploy_publish_basic_authentication_enabled: cdktf.booleanToTerraform(this._webdeployPublishBasicAuthenticationEnabled),
      zip_deploy_file: cdktf.stringToTerraform(this._zipDeployFile),
      auth_settings: windowsFunctionAppAuthSettingsToTerraform(this._authSettings.internalValue),
      auth_settings_v2: windowsFunctionAppAuthSettingsV2ToTerraform(this._authSettingsV2.internalValue),
      backup: windowsFunctionAppBackupToTerraform(this._backup.internalValue),
      connection_string: cdktf.listMapper(windowsFunctionAppConnectionStringToTerraform, true)(this._connectionString.internalValue),
      identity: windowsFunctionAppIdentityToTerraform(this._identity.internalValue),
      site_config: windowsFunctionAppSiteConfigToTerraform(this._siteConfig.internalValue),
      sticky_settings: windowsFunctionAppStickySettingsToTerraform(this._stickySettings.internalValue),
      storage_account: cdktf.listMapper(windowsFunctionAppStorageAccountToTerraform, true)(this._storageAccount.internalValue),
      timeouts: windowsFunctionAppTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._appSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      builtin_logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._builtinLoggingEnabled),
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
      content_share_force_disabled: {
        value: cdktf.booleanToHclTerraform(this._contentShareForceDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      daily_memory_time_quota: {
        value: cdktf.numberToHclTerraform(this._dailyMemoryTimeQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      functions_extension_version: {
        value: cdktf.stringToHclTerraform(this._functionsExtensionVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_plan_id: {
        value: cdktf.stringToHclTerraform(this._servicePlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_access_key: {
        value: cdktf.stringToHclTerraform(this._storageAccountAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_name: {
        value: cdktf.stringToHclTerraform(this._storageAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_key_vault_secret_id: {
        value: cdktf.stringToHclTerraform(this._storageKeyVaultSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_uses_managed_identity: {
        value: cdktf.booleanToHclTerraform(this._storageUsesManagedIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      vnet_image_pull_enabled: {
        value: cdktf.booleanToHclTerraform(this._vnetImagePullEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
        value: windowsFunctionAppAuthSettingsToHclTerraform(this._authSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsFunctionAppAuthSettingsList",
      },
      auth_settings_v2: {
        value: windowsFunctionAppAuthSettingsV2ToHclTerraform(this._authSettingsV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsFunctionAppAuthSettingsV2List",
      },
      backup: {
        value: windowsFunctionAppBackupToHclTerraform(this._backup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsFunctionAppBackupList",
      },
      connection_string: {
        value: cdktf.listMapperHcl(windowsFunctionAppConnectionStringToHclTerraform, true)(this._connectionString.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WindowsFunctionAppConnectionStringList",
      },
      identity: {
        value: windowsFunctionAppIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsFunctionAppIdentityList",
      },
      site_config: {
        value: windowsFunctionAppSiteConfigToHclTerraform(this._siteConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsFunctionAppSiteConfigList",
      },
      sticky_settings: {
        value: windowsFunctionAppStickySettingsToHclTerraform(this._stickySettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsFunctionAppStickySettingsList",
      },
      storage_account: {
        value: cdktf.listMapperHcl(windowsFunctionAppStorageAccountToHclTerraform, true)(this._storageAccount.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WindowsFunctionAppStorageAccountList",
      },
      timeouts: {
        value: windowsFunctionAppTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WindowsFunctionAppTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
