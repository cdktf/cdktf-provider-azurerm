// https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#location SpringCloudService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#name SpringCloudService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#resource_group_name SpringCloudService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#sku_name SpringCloudService#sku_name}
  */
  readonly skuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#tags SpringCloudService#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * config_server_git_setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#config_server_git_setting SpringCloudService#config_server_git_setting}
  */
  readonly configServerGitSetting?: SpringCloudServiceConfigServerGitSetting;
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#network SpringCloudService#network}
  */
  readonly network?: SpringCloudServiceNetwork;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#timeouts SpringCloudService#timeouts}
  */
  readonly timeouts?: SpringCloudServiceTimeouts;
  /**
  * trace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#trace SpringCloudService#trace}
  */
  readonly trace?: SpringCloudServiceTrace;
}
export class SpringCloudServiceRequiredNetworkTrafficRules extends cdktf.ComplexComputedList {

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // fqdns - computed: true, optional: false, required: false
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}
export interface SpringCloudServiceConfigServerGitSettingHttpBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#password SpringCloudService#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#username SpringCloudService#username}
  */
  readonly username: string;
}

export function springCloudServiceConfigServerGitSettingHttpBasicAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference | SpringCloudServiceConfigServerGitSettingHttpBasicAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SpringCloudServiceConfigServerGitSettingHttpBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudServiceConfigServerGitSettingHttpBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#password SpringCloudService#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#username SpringCloudService#username}
  */
  readonly username: string;
}

export function springCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference | SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface SpringCloudServiceConfigServerGitSettingRepositorySshAuth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#host_key SpringCloudService#host_key}
  */
  readonly hostKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#host_key_algorithm SpringCloudService#host_key_algorithm}
  */
  readonly hostKeyAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#private_key SpringCloudService#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}
  */
  readonly strictHostKeyCheckingEnabled?: boolean | cdktf.IResolvable;
}

export function springCloudServiceConfigServerGitSettingRepositorySshAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference | SpringCloudServiceConfigServerGitSettingRepositorySshAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_key: cdktf.stringToTerraform(struct!.hostKey),
    host_key_algorithm: cdktf.stringToTerraform(struct!.hostKeyAlgorithm),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    strict_host_key_checking_enabled: cdktf.booleanToTerraform(struct!.strictHostKeyCheckingEnabled),
  }
}

export class SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SpringCloudServiceConfigServerGitSettingRepositorySshAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostKey) {
      hasAnyValues = true;
      internalValueResult.hostKey = this._hostKey;
    }
    if (this._hostKeyAlgorithm) {
      hasAnyValues = true;
      internalValueResult.hostKeyAlgorithm = this._hostKeyAlgorithm;
    }
    if (this._privateKey) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._strictHostKeyCheckingEnabled) {
      hasAnyValues = true;
      internalValueResult.strictHostKeyCheckingEnabled = this._strictHostKeyCheckingEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudServiceConfigServerGitSettingRepositorySshAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostKey = undefined;
      this._hostKeyAlgorithm = undefined;
      this._privateKey = undefined;
      this._strictHostKeyCheckingEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostKey = value.hostKey;
      this._hostKeyAlgorithm = value.hostKeyAlgorithm;
      this._privateKey = value.privateKey;
      this._strictHostKeyCheckingEnabled = value.strictHostKeyCheckingEnabled;
    }
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string; 
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey;
  }

  // host_key_algorithm - computed: false, optional: true, required: false
  private _hostKeyAlgorithm?: string; 
  public get hostKeyAlgorithm() {
    return this.getStringAttribute('host_key_algorithm');
  }
  public set hostKeyAlgorithm(value: string) {
    this._hostKeyAlgorithm = value;
  }
  public resetHostKeyAlgorithm() {
    this._hostKeyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyAlgorithmInput() {
    return this._hostKeyAlgorithm;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // strict_host_key_checking_enabled - computed: false, optional: true, required: false
  private _strictHostKeyCheckingEnabled?: boolean | cdktf.IResolvable; 
  public get strictHostKeyCheckingEnabled() {
    return this.getBooleanAttribute('strict_host_key_checking_enabled') as any;
  }
  public set strictHostKeyCheckingEnabled(value: boolean | cdktf.IResolvable) {
    this._strictHostKeyCheckingEnabled = value;
  }
  public resetStrictHostKeyCheckingEnabled() {
    this._strictHostKeyCheckingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictHostKeyCheckingEnabledInput() {
    return this._strictHostKeyCheckingEnabled;
  }
}
export interface SpringCloudServiceConfigServerGitSettingRepository {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#label SpringCloudService#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#name SpringCloudService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#pattern SpringCloudService#pattern}
  */
  readonly pattern?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#search_paths SpringCloudService#search_paths}
  */
  readonly searchPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#uri SpringCloudService#uri}
  */
  readonly uri: string;
  /**
  * http_basic_auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#http_basic_auth SpringCloudService#http_basic_auth}
  */
  readonly httpBasicAuth?: SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth;
  /**
  * ssh_auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#ssh_auth SpringCloudService#ssh_auth}
  */
  readonly sshAuth?: SpringCloudServiceConfigServerGitSettingRepositorySshAuth;
}

export function springCloudServiceConfigServerGitSettingRepositoryToTerraform(struct?: SpringCloudServiceConfigServerGitSettingRepository): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.listMapper(cdktf.stringToTerraform)(struct!.pattern),
    search_paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searchPaths),
    uri: cdktf.stringToTerraform(struct!.uri),
    http_basic_auth: springCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthToTerraform(struct!.httpBasicAuth),
    ssh_auth: springCloudServiceConfigServerGitSettingRepositorySshAuthToTerraform(struct!.sshAuth),
  }
}

export interface SpringCloudServiceConfigServerGitSettingSshAuth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#host_key SpringCloudService#host_key}
  */
  readonly hostKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#host_key_algorithm SpringCloudService#host_key_algorithm}
  */
  readonly hostKeyAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#private_key SpringCloudService#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}
  */
  readonly strictHostKeyCheckingEnabled?: boolean | cdktf.IResolvable;
}

export function springCloudServiceConfigServerGitSettingSshAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingSshAuthOutputReference | SpringCloudServiceConfigServerGitSettingSshAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_key: cdktf.stringToTerraform(struct!.hostKey),
    host_key_algorithm: cdktf.stringToTerraform(struct!.hostKeyAlgorithm),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    strict_host_key_checking_enabled: cdktf.booleanToTerraform(struct!.strictHostKeyCheckingEnabled),
  }
}

export class SpringCloudServiceConfigServerGitSettingSshAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SpringCloudServiceConfigServerGitSettingSshAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostKey) {
      hasAnyValues = true;
      internalValueResult.hostKey = this._hostKey;
    }
    if (this._hostKeyAlgorithm) {
      hasAnyValues = true;
      internalValueResult.hostKeyAlgorithm = this._hostKeyAlgorithm;
    }
    if (this._privateKey) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._strictHostKeyCheckingEnabled) {
      hasAnyValues = true;
      internalValueResult.strictHostKeyCheckingEnabled = this._strictHostKeyCheckingEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudServiceConfigServerGitSettingSshAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostKey = undefined;
      this._hostKeyAlgorithm = undefined;
      this._privateKey = undefined;
      this._strictHostKeyCheckingEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostKey = value.hostKey;
      this._hostKeyAlgorithm = value.hostKeyAlgorithm;
      this._privateKey = value.privateKey;
      this._strictHostKeyCheckingEnabled = value.strictHostKeyCheckingEnabled;
    }
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string; 
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey;
  }

  // host_key_algorithm - computed: false, optional: true, required: false
  private _hostKeyAlgorithm?: string; 
  public get hostKeyAlgorithm() {
    return this.getStringAttribute('host_key_algorithm');
  }
  public set hostKeyAlgorithm(value: string) {
    this._hostKeyAlgorithm = value;
  }
  public resetHostKeyAlgorithm() {
    this._hostKeyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyAlgorithmInput() {
    return this._hostKeyAlgorithm;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // strict_host_key_checking_enabled - computed: false, optional: true, required: false
  private _strictHostKeyCheckingEnabled?: boolean | cdktf.IResolvable; 
  public get strictHostKeyCheckingEnabled() {
    return this.getBooleanAttribute('strict_host_key_checking_enabled') as any;
  }
  public set strictHostKeyCheckingEnabled(value: boolean | cdktf.IResolvable) {
    this._strictHostKeyCheckingEnabled = value;
  }
  public resetStrictHostKeyCheckingEnabled() {
    this._strictHostKeyCheckingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictHostKeyCheckingEnabledInput() {
    return this._strictHostKeyCheckingEnabled;
  }
}
export interface SpringCloudServiceConfigServerGitSetting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#label SpringCloudService#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#search_paths SpringCloudService#search_paths}
  */
  readonly searchPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#uri SpringCloudService#uri}
  */
  readonly uri: string;
  /**
  * http_basic_auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#http_basic_auth SpringCloudService#http_basic_auth}
  */
  readonly httpBasicAuth?: SpringCloudServiceConfigServerGitSettingHttpBasicAuth;
  /**
  * repository block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#repository SpringCloudService#repository}
  */
  readonly repository?: SpringCloudServiceConfigServerGitSettingRepository[];
  /**
  * ssh_auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#ssh_auth SpringCloudService#ssh_auth}
  */
  readonly sshAuth?: SpringCloudServiceConfigServerGitSettingSshAuth;
}

export function springCloudServiceConfigServerGitSettingToTerraform(struct?: SpringCloudServiceConfigServerGitSettingOutputReference | SpringCloudServiceConfigServerGitSetting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    search_paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searchPaths),
    uri: cdktf.stringToTerraform(struct!.uri),
    http_basic_auth: springCloudServiceConfigServerGitSettingHttpBasicAuthToTerraform(struct!.httpBasicAuth),
    repository: cdktf.listMapper(springCloudServiceConfigServerGitSettingRepositoryToTerraform)(struct!.repository),
    ssh_auth: springCloudServiceConfigServerGitSettingSshAuthToTerraform(struct!.sshAuth),
  }
}

export class SpringCloudServiceConfigServerGitSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SpringCloudServiceConfigServerGitSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._searchPaths) {
      hasAnyValues = true;
      internalValueResult.searchPaths = this._searchPaths;
    }
    if (this._uri) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._httpBasicAuth?.internalValue) {
      hasAnyValues = true;
      internalValueResult.httpBasicAuth = this._httpBasicAuth?.internalValue;
    }
    if (this._repository) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._sshAuth?.internalValue) {
      hasAnyValues = true;
      internalValueResult.sshAuth = this._sshAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudServiceConfigServerGitSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._label = undefined;
      this._searchPaths = undefined;
      this._uri = undefined;
      this._httpBasicAuth.internalValue = undefined;
      this._repository = undefined;
      this._sshAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._label = value.label;
      this._searchPaths = value.searchPaths;
      this._uri = value.uri;
      this._httpBasicAuth.internalValue = value.httpBasicAuth;
      this._repository = value.repository;
      this._sshAuth.internalValue = value.sshAuth;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // search_paths - computed: false, optional: true, required: false
  private _searchPaths?: string[]; 
  public get searchPaths() {
    return this.getListAttribute('search_paths');
  }
  public set searchPaths(value: string[]) {
    this._searchPaths = value;
  }
  public resetSearchPaths() {
    this._searchPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchPathsInput() {
    return this._searchPaths;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // http_basic_auth - computed: false, optional: true, required: false
  private _httpBasicAuth = new SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference(this as any, "http_basic_auth", true);
  public get httpBasicAuth() {
    return this._httpBasicAuth;
  }
  public putHttpBasicAuth(value: SpringCloudServiceConfigServerGitSettingHttpBasicAuth) {
    this._httpBasicAuth.internalValue = value;
  }
  public resetHttpBasicAuth() {
    this._httpBasicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBasicAuthInput() {
    return this._httpBasicAuth.internalValue;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: SpringCloudServiceConfigServerGitSettingRepository[]; 
  public get repository() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('repository') as any;
  }
  public set repository(value: SpringCloudServiceConfigServerGitSettingRepository[]) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // ssh_auth - computed: false, optional: true, required: false
  private _sshAuth = new SpringCloudServiceConfigServerGitSettingSshAuthOutputReference(this as any, "ssh_auth", true);
  public get sshAuth() {
    return this._sshAuth;
  }
  public putSshAuth(value: SpringCloudServiceConfigServerGitSettingSshAuth) {
    this._sshAuth.internalValue = value;
  }
  public resetSshAuth() {
    this._sshAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthInput() {
    return this._sshAuth.internalValue;
  }
}
export interface SpringCloudServiceNetwork {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#app_network_resource_group SpringCloudService#app_network_resource_group}
  */
  readonly appNetworkResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#app_subnet_id SpringCloudService#app_subnet_id}
  */
  readonly appSubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#cidr_ranges SpringCloudService#cidr_ranges}
  */
  readonly cidrRanges: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#service_runtime_network_resource_group SpringCloudService#service_runtime_network_resource_group}
  */
  readonly serviceRuntimeNetworkResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#service_runtime_subnet_id SpringCloudService#service_runtime_subnet_id}
  */
  readonly serviceRuntimeSubnetId: string;
}

export function springCloudServiceNetworkToTerraform(struct?: SpringCloudServiceNetworkOutputReference | SpringCloudServiceNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_network_resource_group: cdktf.stringToTerraform(struct!.appNetworkResourceGroup),
    app_subnet_id: cdktf.stringToTerraform(struct!.appSubnetId),
    cidr_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrRanges),
    service_runtime_network_resource_group: cdktf.stringToTerraform(struct!.serviceRuntimeNetworkResourceGroup),
    service_runtime_subnet_id: cdktf.stringToTerraform(struct!.serviceRuntimeSubnetId),
  }
}

export class SpringCloudServiceNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SpringCloudServiceNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appNetworkResourceGroup) {
      hasAnyValues = true;
      internalValueResult.appNetworkResourceGroup = this._appNetworkResourceGroup;
    }
    if (this._appSubnetId) {
      hasAnyValues = true;
      internalValueResult.appSubnetId = this._appSubnetId;
    }
    if (this._cidrRanges) {
      hasAnyValues = true;
      internalValueResult.cidrRanges = this._cidrRanges;
    }
    if (this._serviceRuntimeNetworkResourceGroup) {
      hasAnyValues = true;
      internalValueResult.serviceRuntimeNetworkResourceGroup = this._serviceRuntimeNetworkResourceGroup;
    }
    if (this._serviceRuntimeSubnetId) {
      hasAnyValues = true;
      internalValueResult.serviceRuntimeSubnetId = this._serviceRuntimeSubnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudServiceNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appNetworkResourceGroup = undefined;
      this._appSubnetId = undefined;
      this._cidrRanges = undefined;
      this._serviceRuntimeNetworkResourceGroup = undefined;
      this._serviceRuntimeSubnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appNetworkResourceGroup = value.appNetworkResourceGroup;
      this._appSubnetId = value.appSubnetId;
      this._cidrRanges = value.cidrRanges;
      this._serviceRuntimeNetworkResourceGroup = value.serviceRuntimeNetworkResourceGroup;
      this._serviceRuntimeSubnetId = value.serviceRuntimeSubnetId;
    }
  }

  // app_network_resource_group - computed: true, optional: true, required: false
  private _appNetworkResourceGroup?: string; 
  public get appNetworkResourceGroup() {
    return this.getStringAttribute('app_network_resource_group');
  }
  public set appNetworkResourceGroup(value: string) {
    this._appNetworkResourceGroup = value;
  }
  public resetAppNetworkResourceGroup() {
    this._appNetworkResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNetworkResourceGroupInput() {
    return this._appNetworkResourceGroup;
  }

  // app_subnet_id - computed: false, optional: false, required: true
  private _appSubnetId?: string; 
  public get appSubnetId() {
    return this.getStringAttribute('app_subnet_id');
  }
  public set appSubnetId(value: string) {
    this._appSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appSubnetIdInput() {
    return this._appSubnetId;
  }

  // cidr_ranges - computed: false, optional: false, required: true
  private _cidrRanges?: string[]; 
  public get cidrRanges() {
    return this.getListAttribute('cidr_ranges');
  }
  public set cidrRanges(value: string[]) {
    this._cidrRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRangesInput() {
    return this._cidrRanges;
  }

  // service_runtime_network_resource_group - computed: true, optional: true, required: false
  private _serviceRuntimeNetworkResourceGroup?: string; 
  public get serviceRuntimeNetworkResourceGroup() {
    return this.getStringAttribute('service_runtime_network_resource_group');
  }
  public set serviceRuntimeNetworkResourceGroup(value: string) {
    this._serviceRuntimeNetworkResourceGroup = value;
  }
  public resetServiceRuntimeNetworkResourceGroup() {
    this._serviceRuntimeNetworkResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRuntimeNetworkResourceGroupInput() {
    return this._serviceRuntimeNetworkResourceGroup;
  }

  // service_runtime_subnet_id - computed: false, optional: false, required: true
  private _serviceRuntimeSubnetId?: string; 
  public get serviceRuntimeSubnetId() {
    return this.getStringAttribute('service_runtime_subnet_id');
  }
  public set serviceRuntimeSubnetId(value: string) {
    this._serviceRuntimeSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRuntimeSubnetIdInput() {
    return this._serviceRuntimeSubnetId;
  }
}
export interface SpringCloudServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#create SpringCloudService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#delete SpringCloudService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#read SpringCloudService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#update SpringCloudService#update}
  */
  readonly update?: string;
}

export function springCloudServiceTimeoutsToTerraform(struct?: SpringCloudServiceTimeoutsOutputReference | SpringCloudServiceTimeouts): any {
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

export class SpringCloudServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SpringCloudServiceTimeouts | undefined {
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

  public set internalValue(value: SpringCloudServiceTimeouts | undefined) {
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
export interface SpringCloudServiceTrace {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#connection_string SpringCloudService#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#instrumentation_key SpringCloudService#instrumentation_key}
  */
  readonly instrumentationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html#sample_rate SpringCloudService#sample_rate}
  */
  readonly sampleRate?: number;
}

export function springCloudServiceTraceToTerraform(struct?: SpringCloudServiceTraceOutputReference | SpringCloudServiceTrace): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    instrumentation_key: cdktf.stringToTerraform(struct!.instrumentationKey),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}

export class SpringCloudServiceTraceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SpringCloudServiceTrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionString) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._instrumentationKey) {
      hasAnyValues = true;
      internalValueResult.instrumentationKey = this._instrumentationKey;
    }
    if (this._sampleRate) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudServiceTrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionString = undefined;
      this._instrumentationKey = undefined;
      this._sampleRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionString = value.connectionString;
      this._instrumentationKey = value.instrumentationKey;
      this._sampleRate = value.sampleRate;
    }
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // instrumentation_key - computed: false, optional: true, required: false
  private _instrumentationKey?: string; 
  public get instrumentationKey() {
    return this.getStringAttribute('instrumentation_key');
  }
  public set instrumentationKey(value: string) {
    this._instrumentationKey = value;
  }
  public resetInstrumentationKey() {
    this._instrumentationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instrumentationKeyInput() {
    return this._instrumentationKey;
  }

  // sample_rate - computed: false, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html azurerm_spring_cloud_service}
*/
export class SpringCloudService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_spring_cloud_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_service.html azurerm_spring_cloud_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudServiceConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_service',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._configServerGitSetting.internalValue = config.configServerGitSetting;
    this._network.internalValue = config.network;
    this._timeouts.internalValue = config.timeouts;
    this._trace.internalValue = config.trace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // outbound_public_ip_addresses - computed: true, optional: false, required: false
  public get outboundPublicIpAddresses() {
    return this.getListAttribute('outbound_public_ip_addresses');
  }

  // required_network_traffic_rules - computed: true, optional: false, required: false
  public requiredNetworkTrafficRules(index: string) {
    return new SpringCloudServiceRequiredNetworkTrafficRules(this, 'required_network_traffic_rules', index);
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

  // sku_name - computed: false, optional: true, required: false
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
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

  // config_server_git_setting - computed: false, optional: true, required: false
  private _configServerGitSetting = new SpringCloudServiceConfigServerGitSettingOutputReference(this as any, "config_server_git_setting", true);
  public get configServerGitSetting() {
    return this._configServerGitSetting;
  }
  public putConfigServerGitSetting(value: SpringCloudServiceConfigServerGitSetting) {
    this._configServerGitSetting.internalValue = value;
  }
  public resetConfigServerGitSetting() {
    this._configServerGitSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configServerGitSettingInput() {
    return this._configServerGitSetting.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new SpringCloudServiceNetworkOutputReference(this as any, "network", true);
  public get network() {
    return this._network;
  }
  public putNetwork(value: SpringCloudServiceNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SpringCloudServiceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SpringCloudServiceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trace - computed: false, optional: true, required: false
  private _trace = new SpringCloudServiceTraceOutputReference(this as any, "trace", true);
  public get trace() {
    return this._trace;
  }
  public putTrace(value: SpringCloudServiceTrace) {
    this._trace.internalValue = value;
  }
  public resetTrace() {
    this._trace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      config_server_git_setting: springCloudServiceConfigServerGitSettingToTerraform(this._configServerGitSetting.internalValue),
      network: springCloudServiceNetworkToTerraform(this._network.internalValue),
      timeouts: springCloudServiceTimeoutsToTerraform(this._timeouts.internalValue),
      trace: springCloudServiceTraceToTerraform(this._trace.internalValue),
    };
  }
}
