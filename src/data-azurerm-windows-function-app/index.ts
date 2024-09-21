// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/windows_function_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermWindowsFunctionAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/windows_function_app#id DataAzurermWindowsFunctionApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/windows_function_app#name DataAzurermWindowsFunctionApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/windows_function_app#resource_group_name DataAzurermWindowsFunctionApp#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/windows_function_app#timeouts DataAzurermWindowsFunctionApp#timeouts}
  */
  readonly timeouts?: DataAzurermWindowsFunctionAppTimeouts;
}
export interface DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory {
}

export function dataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_audiences - computed: true, optional: false, required: false
  public get allowedAudiences() {
    return this.getListAttribute('allowed_audiences');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_setting_name - computed: true, optional: false, required: false
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsFacebook {
}

export function dataAzurermWindowsFunctionAppAuthSettingsFacebookToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsFacebook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsFacebookToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsFacebook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsFacebook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsFacebook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_secret - computed: true, optional: false, required: false
  public get appSecret() {
    return this.getStringAttribute('app_secret');
  }

  // app_secret_setting_name - computed: true, optional: false, required: false
  public get appSecretSettingName() {
    return this.getStringAttribute('app_secret_setting_name');
  }

  // oauth_scopes - computed: true, optional: false, required: false
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsFacebookList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsGithub {
}

export function dataAzurermWindowsFunctionAppAuthSettingsGithubToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsGithubToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_setting_name - computed: true, optional: false, required: false
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }

  // oauth_scopes - computed: true, optional: false, required: false
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsGithubList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsGoogle {
}

export function dataAzurermWindowsFunctionAppAuthSettingsGoogleToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsGoogle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsGoogleToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsGoogle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsGoogle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsGoogle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_setting_name - computed: true, optional: false, required: false
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }

  // oauth_scopes - computed: true, optional: false, required: false
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsGoogleList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsMicrosoft {
}

export function dataAzurermWindowsFunctionAppAuthSettingsMicrosoftToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsMicrosoft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsMicrosoftToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsMicrosoft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsMicrosoft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsMicrosoft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_setting_name - computed: true, optional: false, required: false
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }

  // oauth_scopes - computed: true, optional: false, required: false
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsTwitter {
}

export function dataAzurermWindowsFunctionAppAuthSettingsTwitterToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsTwitter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsTwitterToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsTwitter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsTwitter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsTwitter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_key - computed: true, optional: false, required: false
  public get consumerKey() {
    return this.getStringAttribute('consumer_key');
  }

  // consumer_secret - computed: true, optional: false, required: false
  public get consumerSecret() {
    return this.getStringAttribute('consumer_secret');
  }

  // consumer_secret_setting_name - computed: true, optional: false, required: false
  public get consumerSecretSettingName() {
    return this.getStringAttribute('consumer_secret_setting_name');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsTwitterList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettings {
}

export function dataAzurermWindowsFunctionAppAuthSettingsToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_directory - computed: true, optional: false, required: false
  private _activeDirectory = new DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList(this, "active_directory", false);
  public get activeDirectory() {
    return this._activeDirectory;
  }

  // additional_login_parameters - computed: true, optional: false, required: false
  private _additionalLoginParameters = new cdktf.StringMap(this, "additional_login_parameters");
  public get additionalLoginParameters() {
    return this._additionalLoginParameters;
  }

  // allowed_external_redirect_urls - computed: true, optional: false, required: false
  public get allowedExternalRedirectUrls() {
    return this.getListAttribute('allowed_external_redirect_urls');
  }

  // default_provider - computed: true, optional: false, required: false
  public get defaultProvider() {
    return this.getStringAttribute('default_provider');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // facebook - computed: true, optional: false, required: false
  private _facebook = new DataAzurermWindowsFunctionAppAuthSettingsFacebookList(this, "facebook", false);
  public get facebook() {
    return this._facebook;
  }

  // github - computed: true, optional: false, required: false
  private _github = new DataAzurermWindowsFunctionAppAuthSettingsGithubList(this, "github", false);
  public get github() {
    return this._github;
  }

  // google - computed: true, optional: false, required: false
  private _google = new DataAzurermWindowsFunctionAppAuthSettingsGoogleList(this, "google", false);
  public get google() {
    return this._google;
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // microsoft - computed: true, optional: false, required: false
  private _microsoft = new DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList(this, "microsoft", false);
  public get microsoft() {
    return this._microsoft;
  }

  // runtime_version - computed: true, optional: false, required: false
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }

  // token_refresh_extension_hours - computed: true, optional: false, required: false
  public get tokenRefreshExtensionHours() {
    return this.getNumberAttribute('token_refresh_extension_hours');
  }

  // token_store_enabled - computed: true, optional: false, required: false
  public get tokenStoreEnabled() {
    return this.getBooleanAttribute('token_store_enabled');
  }

  // twitter - computed: true, optional: false, required: false
  private _twitter = new DataAzurermWindowsFunctionAppAuthSettingsTwitterList(this, "twitter", false);
  public get twitter() {
    return this._twitter;
  }

  // unauthenticated_client_action - computed: true, optional: false, required: false
  public get unauthenticatedClientAction() {
    return this.getStringAttribute('unauthenticated_client_action');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsOutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2 {
}

export function dataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2ToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2ToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_applications - computed: true, optional: false, required: false
  public get allowedApplications() {
    return this.getListAttribute('allowed_applications');
  }

  // allowed_audiences - computed: true, optional: false, required: false
  public get allowedAudiences() {
    return this.getListAttribute('allowed_audiences');
  }

  // allowed_groups - computed: true, optional: false, required: false
  public get allowedGroups() {
    return this.getListAttribute('allowed_groups');
  }

  // allowed_identities - computed: true, optional: false, required: false
  public get allowedIdentities() {
    return this.getListAttribute('allowed_identities');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_certificate_thumbprint - computed: true, optional: false, required: false
  public get clientSecretCertificateThumbprint() {
    return this.getStringAttribute('client_secret_certificate_thumbprint');
  }

  // client_secret_setting_name - computed: true, optional: false, required: false
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }

  // jwt_allowed_client_applications - computed: true, optional: false, required: false
  public get jwtAllowedClientApplications() {
    return this.getListAttribute('jwt_allowed_client_applications');
  }

  // jwt_allowed_groups - computed: true, optional: false, required: false
  public get jwtAllowedGroups() {
    return this.getListAttribute('jwt_allowed_groups');
  }

  // login_parameters - computed: true, optional: false, required: false
  private _loginParameters = new cdktf.StringMap(this, "login_parameters");
  public get loginParameters() {
    return this._loginParameters;
  }

  // tenant_auth_endpoint - computed: true, optional: false, required: false
  public get tenantAuthEndpoint() {
    return this.getStringAttribute('tenant_auth_endpoint');
  }

  // www_authentication_disabled - computed: true, optional: false, required: false
  public get wwwAuthenticationDisabled() {
    return this.getBooleanAttribute('www_authentication_disabled');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2 {
}

export function dataAzurermWindowsFunctionAppAuthSettingsV2AppleV2ToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsV2AppleV2ToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_setting_name - computed: true, optional: false, required: false
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }

  // login_scopes - computed: true, optional: false, required: false
  public get loginScopes() {
    return this.getListAttribute('login_scopes');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2 {
}

export function dataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2ToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2ToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2 {
}

export function dataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2ToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2ToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_setting_name - computed: true, optional: false, required: false
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }

  // issuer_endpoint - computed: true, optional: false, required: false
  public get issuerEndpoint() {
    return this.getStringAttribute('issuer_endpoint');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_claim_type - computed: true, optional: false, required: false
  public get nameClaimType() {
    return this.getStringAttribute('name_claim_type');
  }

  // openid_configuration_endpoint - computed: true, optional: false, required: false
  public get openidConfigurationEndpoint() {
    return this.getStringAttribute('openid_configuration_endpoint');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2 {
}

export function dataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2ToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2ToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_secret_setting_name - computed: true, optional: false, required: false
  public get appSecretSettingName() {
    return this.getStringAttribute('app_secret_setting_name');
  }

  // graph_api_version - computed: true, optional: false, required: false
  public get graphApiVersion() {
    return this.getStringAttribute('graph_api_version');
  }

  // login_scopes - computed: true, optional: false, required: false
  public get loginScopes() {
    return this.getListAttribute('login_scopes');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2 {
}

export function dataAzurermWindowsFunctionAppAuthSettingsV2GithubV2ToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsV2GithubV2ToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_setting_name - computed: true, optional: false, required: false
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }

  // login_scopes - computed: true, optional: false, required: false
  public get loginScopes() {
    return this.getListAttribute('login_scopes');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2 {
}

export function dataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2ToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2ToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_audiences - computed: true, optional: false, required: false
  public get allowedAudiences() {
    return this.getListAttribute('allowed_audiences');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_setting_name - computed: true, optional: false, required: false
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }

  // login_scopes - computed: true, optional: false, required: false
  public get loginScopes() {
    return this.getListAttribute('login_scopes');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsV2Login {
}

export function dataAzurermWindowsFunctionAppAuthSettingsV2LoginToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2Login): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsV2LoginToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2Login): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsV2Login | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsV2Login | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_external_redirect_urls - computed: true, optional: false, required: false
  public get allowedExternalRedirectUrls() {
    return this.getListAttribute('allowed_external_redirect_urls');
  }

  // cookie_expiration_convention - computed: true, optional: false, required: false
  public get cookieExpirationConvention() {
    return this.getStringAttribute('cookie_expiration_convention');
  }

  // cookie_expiration_time - computed: true, optional: false, required: false
  public get cookieExpirationTime() {
    return this.getStringAttribute('cookie_expiration_time');
  }

  // logout_endpoint - computed: true, optional: false, required: false
  public get logoutEndpoint() {
    return this.getStringAttribute('logout_endpoint');
  }

  // nonce_expiration_time - computed: true, optional: false, required: false
  public get nonceExpirationTime() {
    return this.getStringAttribute('nonce_expiration_time');
  }

  // preserve_url_fragments_for_logins - computed: true, optional: false, required: false
  public get preserveUrlFragmentsForLogins() {
    return this.getBooleanAttribute('preserve_url_fragments_for_logins');
  }

  // token_refresh_extension_time - computed: true, optional: false, required: false
  public get tokenRefreshExtensionTime() {
    return this.getNumberAttribute('token_refresh_extension_time');
  }

  // token_store_enabled - computed: true, optional: false, required: false
  public get tokenStoreEnabled() {
    return this.getBooleanAttribute('token_store_enabled');
  }

  // token_store_path - computed: true, optional: false, required: false
  public get tokenStorePath() {
    return this.getStringAttribute('token_store_path');
  }

  // token_store_sas_setting_name - computed: true, optional: false, required: false
  public get tokenStoreSasSettingName() {
    return this.getStringAttribute('token_store_sas_setting_name');
  }

  // validate_nonce - computed: true, optional: false, required: false
  public get validateNonce() {
    return this.getBooleanAttribute('validate_nonce');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2LoginList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2 {
}

export function dataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2ToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2ToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_audiences - computed: true, optional: false, required: false
  public get allowedAudiences() {
    return this.getListAttribute('allowed_audiences');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_setting_name - computed: true, optional: false, required: false
  public get clientSecretSettingName() {
    return this.getStringAttribute('client_secret_setting_name');
  }

  // login_scopes - computed: true, optional: false, required: false
  public get loginScopes() {
    return this.getListAttribute('login_scopes');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2 {
}

export function dataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2ToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2ToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_key - computed: true, optional: false, required: false
  public get consumerKey() {
    return this.getStringAttribute('consumer_key');
  }

  // consumer_secret_setting_name - computed: true, optional: false, required: false
  public get consumerSecretSettingName() {
    return this.getStringAttribute('consumer_secret_setting_name');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppAuthSettingsV2 {
}

export function dataAzurermWindowsFunctionAppAuthSettingsV2ToTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppAuthSettingsV2ToHclTerraform(struct?: DataAzurermWindowsFunctionAppAuthSettingsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppAuthSettingsV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppAuthSettingsV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_directory_v2 - computed: true, optional: false, required: false
  private _activeDirectoryV2 = new DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List(this, "active_directory_v2", false);
  public get activeDirectoryV2() {
    return this._activeDirectoryV2;
  }

  // apple_v2 - computed: true, optional: false, required: false
  private _appleV2 = new DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List(this, "apple_v2", false);
  public get appleV2() {
    return this._appleV2;
  }

  // auth_enabled - computed: true, optional: false, required: false
  public get authEnabled() {
    return this.getBooleanAttribute('auth_enabled');
  }

  // azure_static_web_app_v2 - computed: true, optional: false, required: false
  private _azureStaticWebAppV2 = new DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List(this, "azure_static_web_app_v2", false);
  public get azureStaticWebAppV2() {
    return this._azureStaticWebAppV2;
  }

  // config_file_path - computed: true, optional: false, required: false
  public get configFilePath() {
    return this.getStringAttribute('config_file_path');
  }

  // custom_oidc_v2 - computed: true, optional: false, required: false
  private _customOidcV2 = new DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List(this, "custom_oidc_v2", false);
  public get customOidcV2() {
    return this._customOidcV2;
  }

  // default_provider - computed: true, optional: false, required: false
  public get defaultProvider() {
    return this.getStringAttribute('default_provider');
  }

  // excluded_paths - computed: true, optional: false, required: false
  public get excludedPaths() {
    return this.getListAttribute('excluded_paths');
  }

  // facebook_v2 - computed: true, optional: false, required: false
  private _facebookV2 = new DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List(this, "facebook_v2", false);
  public get facebookV2() {
    return this._facebookV2;
  }

  // forward_proxy_convention - computed: true, optional: false, required: false
  public get forwardProxyConvention() {
    return this.getStringAttribute('forward_proxy_convention');
  }

  // forward_proxy_custom_host_header_name - computed: true, optional: false, required: false
  public get forwardProxyCustomHostHeaderName() {
    return this.getStringAttribute('forward_proxy_custom_host_header_name');
  }

  // forward_proxy_custom_scheme_header_name - computed: true, optional: false, required: false
  public get forwardProxyCustomSchemeHeaderName() {
    return this.getStringAttribute('forward_proxy_custom_scheme_header_name');
  }

  // github_v2 - computed: true, optional: false, required: false
  private _githubV2 = new DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List(this, "github_v2", false);
  public get githubV2() {
    return this._githubV2;
  }

  // google_v2 - computed: true, optional: false, required: false
  private _googleV2 = new DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List(this, "google_v2", false);
  public get googleV2() {
    return this._googleV2;
  }

  // http_route_api_prefix - computed: true, optional: false, required: false
  public get httpRouteApiPrefix() {
    return this.getStringAttribute('http_route_api_prefix');
  }

  // login - computed: true, optional: false, required: false
  private _login = new DataAzurermWindowsFunctionAppAuthSettingsV2LoginList(this, "login", false);
  public get login() {
    return this._login;
  }

  // microsoft_v2 - computed: true, optional: false, required: false
  private _microsoftV2 = new DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List(this, "microsoft_v2", false);
  public get microsoftV2() {
    return this._microsoftV2;
  }

  // require_authentication - computed: true, optional: false, required: false
  public get requireAuthentication() {
    return this.getBooleanAttribute('require_authentication');
  }

  // require_https - computed: true, optional: false, required: false
  public get requireHttps() {
    return this.getBooleanAttribute('require_https');
  }

  // runtime_version - computed: true, optional: false, required: false
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }

  // twitter_v2 - computed: true, optional: false, required: false
  private _twitterV2 = new DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List(this, "twitter_v2", false);
  public get twitterV2() {
    return this._twitterV2;
  }

  // unauthenticated_action - computed: true, optional: false, required: false
  public get unauthenticatedAction() {
    return this.getStringAttribute('unauthenticated_action');
  }
}

export class DataAzurermWindowsFunctionAppAuthSettingsV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference {
    return new DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppBackupSchedule {
}

export function dataAzurermWindowsFunctionAppBackupScheduleToTerraform(struct?: DataAzurermWindowsFunctionAppBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppBackupScheduleToHclTerraform(struct?: DataAzurermWindowsFunctionAppBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppBackupScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppBackupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frequency_interval - computed: true, optional: false, required: false
  public get frequencyInterval() {
    return this.getNumberAttribute('frequency_interval');
  }

  // frequency_unit - computed: true, optional: false, required: false
  public get frequencyUnit() {
    return this.getStringAttribute('frequency_unit');
  }

  // keep_at_least_one_backup - computed: true, optional: false, required: false
  public get keepAtLeastOneBackup() {
    return this.getBooleanAttribute('keep_at_least_one_backup');
  }

  // last_execution_time - computed: true, optional: false, required: false
  public get lastExecutionTime() {
    return this.getStringAttribute('last_execution_time');
  }

  // retention_period_days - computed: true, optional: false, required: false
  public get retentionPeriodDays() {
    return this.getNumberAttribute('retention_period_days');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataAzurermWindowsFunctionAppBackupScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppBackupScheduleOutputReference {
    return new DataAzurermWindowsFunctionAppBackupScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppBackup {
}

export function dataAzurermWindowsFunctionAppBackupToTerraform(struct?: DataAzurermWindowsFunctionAppBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppBackupToHclTerraform(struct?: DataAzurermWindowsFunctionAppBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataAzurermWindowsFunctionAppBackupScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }

  // storage_account_url - computed: true, optional: false, required: false
  public get storageAccountUrl() {
    return this.getStringAttribute('storage_account_url');
  }
}

export class DataAzurermWindowsFunctionAppBackupList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppBackupOutputReference {
    return new DataAzurermWindowsFunctionAppBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppConnectionString {
}

export function dataAzurermWindowsFunctionAppConnectionStringToTerraform(struct?: DataAzurermWindowsFunctionAppConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppConnectionStringToHclTerraform(struct?: DataAzurermWindowsFunctionAppConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppConnectionString | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAzurermWindowsFunctionAppConnectionStringList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppConnectionStringOutputReference {
    return new DataAzurermWindowsFunctionAppConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppIdentity {
}

export function dataAzurermWindowsFunctionAppIdentityToTerraform(struct?: DataAzurermWindowsFunctionAppIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppIdentityToHclTerraform(struct?: DataAzurermWindowsFunctionAppIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_ids - computed: true, optional: false, required: false
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAzurermWindowsFunctionAppIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppIdentityOutputReference {
    return new DataAzurermWindowsFunctionAppIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs {
}

export function dataAzurermWindowsFunctionAppSiteConfigAppServiceLogsToTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppSiteConfigAppServiceLogsToHclTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_quota_mb - computed: true, optional: false, required: false
  public get diskQuotaMb() {
    return this.getNumberAttribute('disk_quota_mb');
  }

  // retention_period_days - computed: true, optional: false, required: false
  public get retentionPeriodDays() {
    return this.getNumberAttribute('retention_period_days');
  }
}

export class DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference {
    return new DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppSiteConfigApplicationStack {
}

export function dataAzurermWindowsFunctionAppSiteConfigApplicationStackToTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfigApplicationStack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppSiteConfigApplicationStackToHclTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfigApplicationStack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppSiteConfigApplicationStack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppSiteConfigApplicationStack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dotnet_version - computed: true, optional: false, required: false
  public get dotnetVersion() {
    return this.getStringAttribute('dotnet_version');
  }

  // java_version - computed: true, optional: false, required: false
  public get javaVersion() {
    return this.getStringAttribute('java_version');
  }

  // node_version - computed: true, optional: false, required: false
  public get nodeVersion() {
    return this.getStringAttribute('node_version');
  }

  // powershell_core_version - computed: true, optional: false, required: false
  public get powershellCoreVersion() {
    return this.getStringAttribute('powershell_core_version');
  }

  // use_custom_runtime - computed: true, optional: false, required: false
  public get useCustomRuntime() {
    return this.getBooleanAttribute('use_custom_runtime');
  }

  // use_dotnet_isolated_runtime - computed: true, optional: false, required: false
  public get useDotnetIsolatedRuntime() {
    return this.getBooleanAttribute('use_dotnet_isolated_runtime');
  }
}

export class DataAzurermWindowsFunctionAppSiteConfigApplicationStackList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference {
    return new DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppSiteConfigCors {
}

export function dataAzurermWindowsFunctionAppSiteConfigCorsToTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfigCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppSiteConfigCorsToHclTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfigCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppSiteConfigCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppSiteConfigCors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_origins - computed: true, optional: false, required: false
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // support_credentials - computed: true, optional: false, required: false
  public get supportCredentials() {
    return this.getBooleanAttribute('support_credentials');
  }
}

export class DataAzurermWindowsFunctionAppSiteConfigCorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference {
    return new DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders {
}

export function dataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersToTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersToHclTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // x_azure_fdid - computed: true, optional: false, required: false
  public get xAzureFdid() {
    return this.getListAttribute('x_azure_fdid');
  }

  // x_fd_health_probe - computed: true, optional: false, required: false
  public get xFdHealthProbe() {
    return this.getListAttribute('x_fd_health_probe');
  }

  // x_forwarded_for - computed: true, optional: false, required: false
  public get xForwardedFor() {
    return this.getListAttribute('x_forwarded_for');
  }

  // x_forwarded_host - computed: true, optional: false, required: false
  public get xForwardedHost() {
    return this.getListAttribute('x_forwarded_host');
  }
}

export class DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference {
    return new DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppSiteConfigIpRestriction {
}

export function dataAzurermWindowsFunctionAppSiteConfigIpRestrictionToTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfigIpRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppSiteConfigIpRestrictionToHclTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfigIpRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppSiteConfigIpRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppSiteConfigIpRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // service_tag - computed: true, optional: false, required: false
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }

  // virtual_network_subnet_id - computed: true, optional: false, required: false
  public get virtualNetworkSubnetId() {
    return this.getStringAttribute('virtual_network_subnet_id');
  }
}

export class DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference {
    return new DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders {
}

export function dataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersToTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersToHclTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // x_azure_fdid - computed: true, optional: false, required: false
  public get xAzureFdid() {
    return this.getListAttribute('x_azure_fdid');
  }

  // x_fd_health_probe - computed: true, optional: false, required: false
  public get xFdHealthProbe() {
    return this.getListAttribute('x_fd_health_probe');
  }

  // x_forwarded_for - computed: true, optional: false, required: false
  public get xForwardedFor() {
    return this.getListAttribute('x_forwarded_for');
  }

  // x_forwarded_host - computed: true, optional: false, required: false
  public get xForwardedHost() {
    return this.getListAttribute('x_forwarded_host');
  }
}

export class DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference {
    return new DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction {
}

export function dataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionToTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionToHclTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // service_tag - computed: true, optional: false, required: false
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }

  // virtual_network_subnet_id - computed: true, optional: false, required: false
  public get virtualNetworkSubnetId() {
    return this.getStringAttribute('virtual_network_subnet_id');
  }
}

export class DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference {
    return new DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppSiteConfig {
}

export function dataAzurermWindowsFunctionAppSiteConfigToTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppSiteConfigToHclTerraform(struct?: DataAzurermWindowsFunctionAppSiteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppSiteConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppSiteConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppSiteConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // always_on - computed: true, optional: false, required: false
  public get alwaysOn() {
    return this.getBooleanAttribute('always_on');
  }

  // api_definition_url - computed: true, optional: false, required: false
  public get apiDefinitionUrl() {
    return this.getStringAttribute('api_definition_url');
  }

  // api_management_api_id - computed: true, optional: false, required: false
  public get apiManagementApiId() {
    return this.getStringAttribute('api_management_api_id');
  }

  // app_command_line - computed: true, optional: false, required: false
  public get appCommandLine() {
    return this.getStringAttribute('app_command_line');
  }

  // app_scale_limit - computed: true, optional: false, required: false
  public get appScaleLimit() {
    return this.getNumberAttribute('app_scale_limit');
  }

  // app_service_logs - computed: true, optional: false, required: false
  private _appServiceLogs = new DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList(this, "app_service_logs", false);
  public get appServiceLogs() {
    return this._appServiceLogs;
  }

  // application_insights_connection_string - computed: true, optional: false, required: false
  public get applicationInsightsConnectionString() {
    return this.getStringAttribute('application_insights_connection_string');
  }

  // application_insights_key - computed: true, optional: false, required: false
  public get applicationInsightsKey() {
    return this.getStringAttribute('application_insights_key');
  }

  // application_stack - computed: true, optional: false, required: false
  private _applicationStack = new DataAzurermWindowsFunctionAppSiteConfigApplicationStackList(this, "application_stack", false);
  public get applicationStack() {
    return this._applicationStack;
  }

  // cors - computed: true, optional: false, required: false
  private _cors = new DataAzurermWindowsFunctionAppSiteConfigCorsList(this, "cors", false);
  public get cors() {
    return this._cors;
  }

  // default_documents - computed: true, optional: false, required: false
  public get defaultDocuments() {
    return this.getListAttribute('default_documents');
  }

  // detailed_error_logging_enabled - computed: true, optional: false, required: false
  public get detailedErrorLoggingEnabled() {
    return this.getBooleanAttribute('detailed_error_logging_enabled');
  }

  // elastic_instance_minimum - computed: true, optional: false, required: false
  public get elasticInstanceMinimum() {
    return this.getNumberAttribute('elastic_instance_minimum');
  }

  // ftps_state - computed: true, optional: false, required: false
  public get ftpsState() {
    return this.getStringAttribute('ftps_state');
  }

  // health_check_eviction_time_in_min - computed: true, optional: false, required: false
  public get healthCheckEvictionTimeInMin() {
    return this.getNumberAttribute('health_check_eviction_time_in_min');
  }

  // health_check_path - computed: true, optional: false, required: false
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }

  // http2_enabled - computed: true, optional: false, required: false
  public get http2Enabled() {
    return this.getBooleanAttribute('http2_enabled');
  }

  // ip_restriction - computed: true, optional: false, required: false
  private _ipRestriction = new DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList(this, "ip_restriction", false);
  public get ipRestriction() {
    return this._ipRestriction;
  }

  // ip_restriction_default_action - computed: true, optional: false, required: false
  public get ipRestrictionDefaultAction() {
    return this.getStringAttribute('ip_restriction_default_action');
  }

  // load_balancing_mode - computed: true, optional: false, required: false
  public get loadBalancingMode() {
    return this.getStringAttribute('load_balancing_mode');
  }

  // managed_pipeline_mode - computed: true, optional: false, required: false
  public get managedPipelineMode() {
    return this.getStringAttribute('managed_pipeline_mode');
  }

  // minimum_tls_version - computed: true, optional: false, required: false
  public get minimumTlsVersion() {
    return this.getStringAttribute('minimum_tls_version');
  }

  // pre_warmed_instance_count - computed: true, optional: false, required: false
  public get preWarmedInstanceCount() {
    return this.getNumberAttribute('pre_warmed_instance_count');
  }

  // remote_debugging_enabled - computed: true, optional: false, required: false
  public get remoteDebuggingEnabled() {
    return this.getBooleanAttribute('remote_debugging_enabled');
  }

  // remote_debugging_version - computed: true, optional: false, required: false
  public get remoteDebuggingVersion() {
    return this.getStringAttribute('remote_debugging_version');
  }

  // runtime_scale_monitoring_enabled - computed: true, optional: false, required: false
  public get runtimeScaleMonitoringEnabled() {
    return this.getBooleanAttribute('runtime_scale_monitoring_enabled');
  }

  // scm_ip_restriction - computed: true, optional: false, required: false
  private _scmIpRestriction = new DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList(this, "scm_ip_restriction", false);
  public get scmIpRestriction() {
    return this._scmIpRestriction;
  }

  // scm_ip_restriction_default_action - computed: true, optional: false, required: false
  public get scmIpRestrictionDefaultAction() {
    return this.getStringAttribute('scm_ip_restriction_default_action');
  }

  // scm_minimum_tls_version - computed: true, optional: false, required: false
  public get scmMinimumTlsVersion() {
    return this.getStringAttribute('scm_minimum_tls_version');
  }

  // scm_type - computed: true, optional: false, required: false
  public get scmType() {
    return this.getStringAttribute('scm_type');
  }

  // scm_use_main_ip_restriction - computed: true, optional: false, required: false
  public get scmUseMainIpRestriction() {
    return this.getBooleanAttribute('scm_use_main_ip_restriction');
  }

  // use_32_bit_worker - computed: true, optional: false, required: false
  public get use32BitWorker() {
    return this.getBooleanAttribute('use_32_bit_worker');
  }

  // vnet_route_all_enabled - computed: true, optional: false, required: false
  public get vnetRouteAllEnabled() {
    return this.getBooleanAttribute('vnet_route_all_enabled');
  }

  // websockets_enabled - computed: true, optional: false, required: false
  public get websocketsEnabled() {
    return this.getBooleanAttribute('websockets_enabled');
  }

  // windows_fx_version - computed: true, optional: false, required: false
  public get windowsFxVersion() {
    return this.getStringAttribute('windows_fx_version');
  }

  // worker_count - computed: true, optional: false, required: false
  public get workerCount() {
    return this.getNumberAttribute('worker_count');
  }
}

export class DataAzurermWindowsFunctionAppSiteConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppSiteConfigOutputReference {
    return new DataAzurermWindowsFunctionAppSiteConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppSiteCredential {
}

export function dataAzurermWindowsFunctionAppSiteCredentialToTerraform(struct?: DataAzurermWindowsFunctionAppSiteCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppSiteCredentialToHclTerraform(struct?: DataAzurermWindowsFunctionAppSiteCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppSiteCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppSiteCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppSiteCredential | undefined) {
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

export class DataAzurermWindowsFunctionAppSiteCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppSiteCredentialOutputReference {
    return new DataAzurermWindowsFunctionAppSiteCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppStickySettings {
}

export function dataAzurermWindowsFunctionAppStickySettingsToTerraform(struct?: DataAzurermWindowsFunctionAppStickySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermWindowsFunctionAppStickySettingsToHclTerraform(struct?: DataAzurermWindowsFunctionAppStickySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermWindowsFunctionAppStickySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermWindowsFunctionAppStickySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppStickySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_setting_names - computed: true, optional: false, required: false
  public get appSettingNames() {
    return this.getListAttribute('app_setting_names');
  }

  // connection_string_names - computed: true, optional: false, required: false
  public get connectionStringNames() {
    return this.getListAttribute('connection_string_names');
  }
}

export class DataAzurermWindowsFunctionAppStickySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermWindowsFunctionAppStickySettingsOutputReference {
    return new DataAzurermWindowsFunctionAppStickySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermWindowsFunctionAppTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/windows_function_app#read DataAzurermWindowsFunctionApp#read}
  */
  readonly read?: string;
}

export function dataAzurermWindowsFunctionAppTimeoutsToTerraform(struct?: DataAzurermWindowsFunctionAppTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermWindowsFunctionAppTimeoutsToHclTerraform(struct?: DataAzurermWindowsFunctionAppTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermWindowsFunctionAppTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermWindowsFunctionAppTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermWindowsFunctionAppTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/windows_function_app azurerm_windows_function_app}
*/
export class DataAzurermWindowsFunctionApp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_windows_function_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermWindowsFunctionApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermWindowsFunctionApp to import
  * @param importFromId The id of the existing DataAzurermWindowsFunctionApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/windows_function_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermWindowsFunctionApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_windows_function_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/windows_function_app azurerm_windows_function_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermWindowsFunctionAppConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermWindowsFunctionAppConfig) {
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
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_settings - computed: true, optional: false, required: false
  private _appSettings = new cdktf.StringMap(this, "app_settings");
  public get appSettings() {
    return this._appSettings;
  }

  // auth_settings - computed: true, optional: false, required: false
  private _authSettings = new DataAzurermWindowsFunctionAppAuthSettingsList(this, "auth_settings", false);
  public get authSettings() {
    return this._authSettings;
  }

  // auth_settings_v2 - computed: true, optional: false, required: false
  private _authSettingsV2 = new DataAzurermWindowsFunctionAppAuthSettingsV2List(this, "auth_settings_v2", false);
  public get authSettingsV2() {
    return this._authSettingsV2;
  }

  // backup - computed: true, optional: false, required: false
  private _backup = new DataAzurermWindowsFunctionAppBackupList(this, "backup", false);
  public get backup() {
    return this._backup;
  }

  // builtin_logging_enabled - computed: true, optional: false, required: false
  public get builtinLoggingEnabled() {
    return this.getBooleanAttribute('builtin_logging_enabled');
  }

  // client_certificate_enabled - computed: true, optional: false, required: false
  public get clientCertificateEnabled() {
    return this.getBooleanAttribute('client_certificate_enabled');
  }

  // client_certificate_exclusion_paths - computed: true, optional: false, required: false
  public get clientCertificateExclusionPaths() {
    return this.getStringAttribute('client_certificate_exclusion_paths');
  }

  // client_certificate_mode - computed: true, optional: false, required: false
  public get clientCertificateMode() {
    return this.getStringAttribute('client_certificate_mode');
  }

  // connection_string - computed: true, optional: false, required: false
  private _connectionString = new DataAzurermWindowsFunctionAppConnectionStringList(this, "connection_string", true);
  public get connectionString() {
    return this._connectionString;
  }

  // content_share_force_disabled - computed: true, optional: false, required: false
  public get contentShareForceDisabled() {
    return this.getBooleanAttribute('content_share_force_disabled');
  }

  // custom_domain_verification_id - computed: true, optional: false, required: false
  public get customDomainVerificationId() {
    return this.getStringAttribute('custom_domain_verification_id');
  }

  // daily_memory_time_quota - computed: true, optional: false, required: false
  public get dailyMemoryTimeQuota() {
    return this.getNumberAttribute('daily_memory_time_quota');
  }

  // default_hostname - computed: true, optional: false, required: false
  public get defaultHostname() {
    return this.getStringAttribute('default_hostname');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ftp_publish_basic_authentication_enabled - computed: true, optional: false, required: false
  public get ftpPublishBasicAuthenticationEnabled() {
    return this.getBooleanAttribute('ftp_publish_basic_authentication_enabled');
  }

  // functions_extension_version - computed: true, optional: false, required: false
  public get functionsExtensionVersion() {
    return this.getStringAttribute('functions_extension_version');
  }

  // hosting_environment_id - computed: true, optional: false, required: false
  public get hostingEnvironmentId() {
    return this.getStringAttribute('hosting_environment_id');
  }

  // https_only - computed: true, optional: false, required: false
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only');
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

  // identity - computed: true, optional: false, required: false
  private _identity = new DataAzurermWindowsFunctionAppIdentityList(this, "identity", false);
  public get identity() {
    return this._identity;
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // public_network_access_enabled - computed: true, optional: false, required: false
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
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

  // service_plan_id - computed: true, optional: false, required: false
  public get servicePlanId() {
    return this.getStringAttribute('service_plan_id');
  }

  // site_config - computed: true, optional: false, required: false
  private _siteConfig = new DataAzurermWindowsFunctionAppSiteConfigList(this, "site_config", false);
  public get siteConfig() {
    return this._siteConfig;
  }

  // site_credential - computed: true, optional: false, required: false
  private _siteCredential = new DataAzurermWindowsFunctionAppSiteCredentialList(this, "site_credential", false);
  public get siteCredential() {
    return this._siteCredential;
  }

  // sticky_settings - computed: true, optional: false, required: false
  private _stickySettings = new DataAzurermWindowsFunctionAppStickySettingsList(this, "sticky_settings", false);
  public get stickySettings() {
    return this._stickySettings;
  }

  // storage_account_access_key - computed: true, optional: false, required: false
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }

  // storage_account_name - computed: true, optional: false, required: false
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }

  // storage_key_vault_secret_id - computed: true, optional: false, required: false
  public get storageKeyVaultSecretId() {
    return this.getStringAttribute('storage_key_vault_secret_id');
  }

  // storage_uses_managed_identity - computed: true, optional: false, required: false
  public get storageUsesManagedIdentity() {
    return this.getBooleanAttribute('storage_uses_managed_identity');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // virtual_network_subnet_id - computed: true, optional: false, required: false
  public get virtualNetworkSubnetId() {
    return this.getStringAttribute('virtual_network_subnet_id');
  }

  // webdeploy_publish_basic_authentication_enabled - computed: true, optional: false, required: false
  public get webdeployPublishBasicAuthenticationEnabled() {
    return this.getBooleanAttribute('webdeploy_publish_basic_authentication_enabled');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermWindowsFunctionAppTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermWindowsFunctionAppTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermWindowsFunctionAppTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermWindowsFunctionAppTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermWindowsFunctionAppTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
