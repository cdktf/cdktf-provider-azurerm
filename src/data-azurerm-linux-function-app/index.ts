// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/linux_function_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermLinuxFunctionAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/linux_function_app#id DataAzurermLinuxFunctionApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/linux_function_app#name DataAzurermLinuxFunctionApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/linux_function_app#resource_group_name DataAzurermLinuxFunctionApp#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/linux_function_app#timeouts DataAzurermLinuxFunctionApp#timeouts}
  */
  readonly timeouts?: DataAzurermLinuxFunctionAppTimeouts;
}
export interface DataAzurermLinuxFunctionAppAuthSettingsActiveDirectory {
}

export function dataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsActiveDirectory | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsFacebook {
}

export function dataAzurermLinuxFunctionAppAuthSettingsFacebookToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsFacebook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsFacebookToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsFacebook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsFacebook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsFacebook | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsFacebookList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsFacebookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsGithub {
}

export function dataAzurermLinuxFunctionAppAuthSettingsGithubToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsGithubToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsGithub | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsGithubList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsGithubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsGoogle {
}

export function dataAzurermLinuxFunctionAppAuthSettingsGoogleToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsGoogle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsGoogleToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsGoogle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsGoogle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsGoogle | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsGoogleList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsGoogleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsMicrosoft {
}

export function dataAzurermLinuxFunctionAppAuthSettingsMicrosoftToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsMicrosoft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsMicrosoftToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsMicrosoft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsMicrosoft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsMicrosoft | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsMicrosoftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsTwitter {
}

export function dataAzurermLinuxFunctionAppAuthSettingsTwitterToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsTwitter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsTwitterToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsTwitter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsTwitter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsTwitter | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsTwitterList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsTwitterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettings {
}

export function dataAzurermLinuxFunctionAppAuthSettingsToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_directory - computed: true, optional: false, required: false
  private _activeDirectory = new DataAzurermLinuxFunctionAppAuthSettingsActiveDirectoryList(this, "active_directory", false);
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
  private _facebook = new DataAzurermLinuxFunctionAppAuthSettingsFacebookList(this, "facebook", false);
  public get facebook() {
    return this._facebook;
  }

  // github - computed: true, optional: false, required: false
  private _github = new DataAzurermLinuxFunctionAppAuthSettingsGithubList(this, "github", false);
  public get github() {
    return this._github;
  }

  // google - computed: true, optional: false, required: false
  private _google = new DataAzurermLinuxFunctionAppAuthSettingsGoogleList(this, "google", false);
  public get google() {
    return this._google;
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // microsoft - computed: true, optional: false, required: false
  private _microsoft = new DataAzurermLinuxFunctionAppAuthSettingsMicrosoftList(this, "microsoft", false);
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
  private _twitter = new DataAzurermLinuxFunctionAppAuthSettingsTwitterList(this, "twitter", false);
  public get twitter() {
    return this._twitter;
  }

  // unauthenticated_client_action - computed: true, optional: false, required: false
  public get unauthenticatedClientAction() {
    return this.getStringAttribute('unauthenticated_client_action');
  }
}

export class DataAzurermLinuxFunctionAppAuthSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsOutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2 {
}

export function dataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2ToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2ToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2 | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2 {
}

export function dataAzurermLinuxFunctionAppAuthSettingsV2AppleV2ToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsV2AppleV2ToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2 | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2 {
}

export function dataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2ToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2ToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2 | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2 {
}

export function dataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2ToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2ToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2 | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2 {
}

export function dataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2ToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2ToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2 | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2 {
}

export function dataAzurermLinuxFunctionAppAuthSettingsV2GithubV2ToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsV2GithubV2ToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2 | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2 {
}

export function dataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2ToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2ToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2 | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsV2Login {
}

export function dataAzurermLinuxFunctionAppAuthSettingsV2LoginToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2Login): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsV2LoginToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2Login): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsV2Login | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsV2Login | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsV2LoginList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsV2LoginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2 {
}

export function dataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2ToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2ToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2 | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2 {
}

export function dataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2ToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2ToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2 | undefined) {
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

export class DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppAuthSettingsV2 {
}

export function dataAzurermLinuxFunctionAppAuthSettingsV2ToTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppAuthSettingsV2ToHclTerraform(struct?: DataAzurermLinuxFunctionAppAuthSettingsV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppAuthSettingsV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppAuthSettingsV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_directory_v2 - computed: true, optional: false, required: false
  private _activeDirectoryV2 = new DataAzurermLinuxFunctionAppAuthSettingsV2ActiveDirectoryV2List(this, "active_directory_v2", false);
  public get activeDirectoryV2() {
    return this._activeDirectoryV2;
  }

  // apple_v2 - computed: true, optional: false, required: false
  private _appleV2 = new DataAzurermLinuxFunctionAppAuthSettingsV2AppleV2List(this, "apple_v2", false);
  public get appleV2() {
    return this._appleV2;
  }

  // auth_enabled - computed: true, optional: false, required: false
  public get authEnabled() {
    return this.getBooleanAttribute('auth_enabled');
  }

  // azure_static_web_app_v2 - computed: true, optional: false, required: false
  private _azureStaticWebAppV2 = new DataAzurermLinuxFunctionAppAuthSettingsV2AzureStaticWebAppV2List(this, "azure_static_web_app_v2", false);
  public get azureStaticWebAppV2() {
    return this._azureStaticWebAppV2;
  }

  // config_file_path - computed: true, optional: false, required: false
  public get configFilePath() {
    return this.getStringAttribute('config_file_path');
  }

  // custom_oidc_v2 - computed: true, optional: false, required: false
  private _customOidcV2 = new DataAzurermLinuxFunctionAppAuthSettingsV2CustomOidcV2List(this, "custom_oidc_v2", false);
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
  private _facebookV2 = new DataAzurermLinuxFunctionAppAuthSettingsV2FacebookV2List(this, "facebook_v2", false);
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
  private _githubV2 = new DataAzurermLinuxFunctionAppAuthSettingsV2GithubV2List(this, "github_v2", false);
  public get githubV2() {
    return this._githubV2;
  }

  // google_v2 - computed: true, optional: false, required: false
  private _googleV2 = new DataAzurermLinuxFunctionAppAuthSettingsV2GoogleV2List(this, "google_v2", false);
  public get googleV2() {
    return this._googleV2;
  }

  // http_route_api_prefix - computed: true, optional: false, required: false
  public get httpRouteApiPrefix() {
    return this.getStringAttribute('http_route_api_prefix');
  }

  // login - computed: true, optional: false, required: false
  private _login = new DataAzurermLinuxFunctionAppAuthSettingsV2LoginList(this, "login", false);
  public get login() {
    return this._login;
  }

  // microsoft_v2 - computed: true, optional: false, required: false
  private _microsoftV2 = new DataAzurermLinuxFunctionAppAuthSettingsV2MicrosoftV2List(this, "microsoft_v2", false);
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
  private _twitterV2 = new DataAzurermLinuxFunctionAppAuthSettingsV2TwitterV2List(this, "twitter_v2", false);
  public get twitterV2() {
    return this._twitterV2;
  }

  // unauthenticated_action - computed: true, optional: false, required: false
  public get unauthenticatedAction() {
    return this.getStringAttribute('unauthenticated_action');
  }
}

export class DataAzurermLinuxFunctionAppAuthSettingsV2List extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference {
    return new DataAzurermLinuxFunctionAppAuthSettingsV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppBackupSchedule {
}

export function dataAzurermLinuxFunctionAppBackupScheduleToTerraform(struct?: DataAzurermLinuxFunctionAppBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppBackupScheduleToHclTerraform(struct?: DataAzurermLinuxFunctionAppBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppBackupScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppBackupSchedule | undefined) {
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

export class DataAzurermLinuxFunctionAppBackupScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppBackupScheduleOutputReference {
    return new DataAzurermLinuxFunctionAppBackupScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppBackup {
}

export function dataAzurermLinuxFunctionAppBackupToTerraform(struct?: DataAzurermLinuxFunctionAppBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppBackupToHclTerraform(struct?: DataAzurermLinuxFunctionAppBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppBackup | undefined) {
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
  private _schedule = new DataAzurermLinuxFunctionAppBackupScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }

  // storage_account_url - computed: true, optional: false, required: false
  public get storageAccountUrl() {
    return this.getStringAttribute('storage_account_url');
  }
}

export class DataAzurermLinuxFunctionAppBackupList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppBackupOutputReference {
    return new DataAzurermLinuxFunctionAppBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppConnectionString {
}

export function dataAzurermLinuxFunctionAppConnectionStringToTerraform(struct?: DataAzurermLinuxFunctionAppConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppConnectionStringToHclTerraform(struct?: DataAzurermLinuxFunctionAppConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppConnectionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppConnectionString | undefined) {
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

export class DataAzurermLinuxFunctionAppConnectionStringList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppConnectionStringOutputReference {
    return new DataAzurermLinuxFunctionAppConnectionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppIdentity {
}

export function dataAzurermLinuxFunctionAppIdentityToTerraform(struct?: DataAzurermLinuxFunctionAppIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppIdentityToHclTerraform(struct?: DataAzurermLinuxFunctionAppIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppIdentity | undefined) {
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

export class DataAzurermLinuxFunctionAppIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppIdentityOutputReference {
    return new DataAzurermLinuxFunctionAppIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppSiteConfigAppServiceLogs {
}

export function dataAzurermLinuxFunctionAppSiteConfigAppServiceLogsToTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigAppServiceLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppSiteConfigAppServiceLogsToHclTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigAppServiceLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppSiteConfigAppServiceLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppSiteConfigAppServiceLogs | undefined) {
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

export class DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference {
    return new DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppSiteConfigApplicationStackDocker {
}

export function dataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerToTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigApplicationStackDocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerToHclTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigApplicationStackDocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppSiteConfigApplicationStackDocker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppSiteConfigApplicationStackDocker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // image_tag - computed: true, optional: false, required: false
  public get imageTag() {
    return this.getStringAttribute('image_tag');
  }

  // registry_password - computed: true, optional: false, required: false
  public get registryPassword() {
    return this.getStringAttribute('registry_password');
  }

  // registry_url - computed: true, optional: false, required: false
  public get registryUrl() {
    return this.getStringAttribute('registry_url');
  }

  // registry_username - computed: true, optional: false, required: false
  public get registryUsername() {
    return this.getStringAttribute('registry_username');
  }
}

export class DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference {
    return new DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppSiteConfigApplicationStack {
}

export function dataAzurermLinuxFunctionAppSiteConfigApplicationStackToTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigApplicationStack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppSiteConfigApplicationStackToHclTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigApplicationStack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppSiteConfigApplicationStack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppSiteConfigApplicationStack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // docker - computed: true, optional: false, required: false
  private _docker = new DataAzurermLinuxFunctionAppSiteConfigApplicationStackDockerList(this, "docker", false);
  public get docker() {
    return this._docker;
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

  // python_version - computed: true, optional: false, required: false
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
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

export class DataAzurermLinuxFunctionAppSiteConfigApplicationStackList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference {
    return new DataAzurermLinuxFunctionAppSiteConfigApplicationStackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppSiteConfigCors {
}

export function dataAzurermLinuxFunctionAppSiteConfigCorsToTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppSiteConfigCorsToHclTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppSiteConfigCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppSiteConfigCors | undefined) {
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

export class DataAzurermLinuxFunctionAppSiteConfigCorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference {
    return new DataAzurermLinuxFunctionAppSiteConfigCorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeaders {
}

export function dataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersToTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersToHclTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeaders | undefined) {
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

export class DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference {
    return new DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppSiteConfigIpRestriction {
}

export function dataAzurermLinuxFunctionAppSiteConfigIpRestrictionToTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigIpRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppSiteConfigIpRestrictionToHclTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigIpRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppSiteConfigIpRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppSiteConfigIpRestriction | undefined) {
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
  private _headers = new DataAzurermLinuxFunctionAppSiteConfigIpRestrictionHeadersList(this, "headers", false);
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

export class DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference {
    return new DataAzurermLinuxFunctionAppSiteConfigIpRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeaders {
}

export function dataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersToTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersToHclTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeaders | undefined) {
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

export class DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference {
    return new DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppSiteConfigScmIpRestriction {
}

export function dataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionToTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigScmIpRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionToHclTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfigScmIpRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppSiteConfigScmIpRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppSiteConfigScmIpRestriction | undefined) {
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
  private _headers = new DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionHeadersList(this, "headers", false);
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

export class DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference {
    return new DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppSiteConfig {
}

export function dataAzurermLinuxFunctionAppSiteConfigToTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppSiteConfigToHclTerraform(struct?: DataAzurermLinuxFunctionAppSiteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppSiteConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppSiteConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppSiteConfig | undefined) {
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
  private _appServiceLogs = new DataAzurermLinuxFunctionAppSiteConfigAppServiceLogsList(this, "app_service_logs", false);
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
  private _applicationStack = new DataAzurermLinuxFunctionAppSiteConfigApplicationStackList(this, "application_stack", false);
  public get applicationStack() {
    return this._applicationStack;
  }

  // container_registry_managed_identity_client_id - computed: true, optional: false, required: false
  public get containerRegistryManagedIdentityClientId() {
    return this.getStringAttribute('container_registry_managed_identity_client_id');
  }

  // container_registry_use_managed_identity - computed: true, optional: false, required: false
  public get containerRegistryUseManagedIdentity() {
    return this.getBooleanAttribute('container_registry_use_managed_identity');
  }

  // cors - computed: true, optional: false, required: false
  private _cors = new DataAzurermLinuxFunctionAppSiteConfigCorsList(this, "cors", false);
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
  private _ipRestriction = new DataAzurermLinuxFunctionAppSiteConfigIpRestrictionList(this, "ip_restriction", false);
  public get ipRestriction() {
    return this._ipRestriction;
  }

  // ip_restriction_default_action - computed: true, optional: false, required: false
  public get ipRestrictionDefaultAction() {
    return this.getStringAttribute('ip_restriction_default_action');
  }

  // linux_fx_version - computed: true, optional: false, required: false
  public get linuxFxVersion() {
    return this.getStringAttribute('linux_fx_version');
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
  private _scmIpRestriction = new DataAzurermLinuxFunctionAppSiteConfigScmIpRestrictionList(this, "scm_ip_restriction", false);
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

  // worker_count - computed: true, optional: false, required: false
  public get workerCount() {
    return this.getNumberAttribute('worker_count');
  }
}

export class DataAzurermLinuxFunctionAppSiteConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppSiteConfigOutputReference {
    return new DataAzurermLinuxFunctionAppSiteConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppSiteCredential {
}

export function dataAzurermLinuxFunctionAppSiteCredentialToTerraform(struct?: DataAzurermLinuxFunctionAppSiteCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppSiteCredentialToHclTerraform(struct?: DataAzurermLinuxFunctionAppSiteCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppSiteCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppSiteCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppSiteCredential | undefined) {
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

export class DataAzurermLinuxFunctionAppSiteCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppSiteCredentialOutputReference {
    return new DataAzurermLinuxFunctionAppSiteCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppStickySettings {
}

export function dataAzurermLinuxFunctionAppStickySettingsToTerraform(struct?: DataAzurermLinuxFunctionAppStickySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermLinuxFunctionAppStickySettingsToHclTerraform(struct?: DataAzurermLinuxFunctionAppStickySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermLinuxFunctionAppStickySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermLinuxFunctionAppStickySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermLinuxFunctionAppStickySettings | undefined) {
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

export class DataAzurermLinuxFunctionAppStickySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermLinuxFunctionAppStickySettingsOutputReference {
    return new DataAzurermLinuxFunctionAppStickySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermLinuxFunctionAppTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/linux_function_app#read DataAzurermLinuxFunctionApp#read}
  */
  readonly read?: string;
}

export function dataAzurermLinuxFunctionAppTimeoutsToTerraform(struct?: DataAzurermLinuxFunctionAppTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermLinuxFunctionAppTimeoutsToHclTerraform(struct?: DataAzurermLinuxFunctionAppTimeouts | cdktf.IResolvable): any {
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

export class DataAzurermLinuxFunctionAppTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermLinuxFunctionAppTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAzurermLinuxFunctionAppTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/linux_function_app azurerm_linux_function_app}
*/
export class DataAzurermLinuxFunctionApp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_linux_function_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermLinuxFunctionApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermLinuxFunctionApp to import
  * @param importFromId The id of the existing DataAzurermLinuxFunctionApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/linux_function_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermLinuxFunctionApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_linux_function_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/linux_function_app azurerm_linux_function_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermLinuxFunctionAppConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermLinuxFunctionAppConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_linux_function_app',
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
  private _authSettings = new DataAzurermLinuxFunctionAppAuthSettingsList(this, "auth_settings", false);
  public get authSettings() {
    return this._authSettings;
  }

  // auth_settings_v2 - computed: true, optional: false, required: false
  private _authSettingsV2 = new DataAzurermLinuxFunctionAppAuthSettingsV2List(this, "auth_settings_v2", false);
  public get authSettingsV2() {
    return this._authSettingsV2;
  }

  // availability - computed: true, optional: false, required: false
  public get availability() {
    return this.getStringAttribute('availability');
  }

  // backup - computed: true, optional: false, required: false
  private _backup = new DataAzurermLinuxFunctionAppBackupList(this, "backup", false);
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
  private _connectionString = new DataAzurermLinuxFunctionAppConnectionStringList(this, "connection_string", true);
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
  private _identity = new DataAzurermLinuxFunctionAppIdentityList(this, "identity", false);
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
  private _siteConfig = new DataAzurermLinuxFunctionAppSiteConfigList(this, "site_config", false);
  public get siteConfig() {
    return this._siteConfig;
  }

  // site_credential - computed: true, optional: false, required: false
  private _siteCredential = new DataAzurermLinuxFunctionAppSiteCredentialList(this, "site_credential", false);
  public get siteCredential() {
    return this._siteCredential;
  }

  // sticky_settings - computed: true, optional: false, required: false
  private _stickySettings = new DataAzurermLinuxFunctionAppStickySettingsList(this, "sticky_settings", false);
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

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
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
  private _timeouts = new DataAzurermLinuxFunctionAppTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermLinuxFunctionAppTimeouts) {
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
      timeouts: dataAzurermLinuxFunctionAppTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: dataAzurermLinuxFunctionAppTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermLinuxFunctionAppTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
