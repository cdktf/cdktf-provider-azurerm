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

function springCloudServiceConfigServerGitSettingHttpBasicAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference | SpringCloudServiceConfigServerGitSettingHttpBasicAuth): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._password
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
    return this._username
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

function springCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference | SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._password
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
    return this._username
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

function springCloudServiceConfigServerGitSettingRepositorySshAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference | SpringCloudServiceConfigServerGitSettingRepositorySshAuth): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string | undefined; 
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string | undefined) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey
  }

  // host_key_algorithm - computed: false, optional: true, required: false
  private _hostKeyAlgorithm?: string | undefined; 
  public get hostKeyAlgorithm() {
    return this.getStringAttribute('host_key_algorithm');
  }
  public set hostKeyAlgorithm(value: string | undefined) {
    this._hostKeyAlgorithm = value;
  }
  public resetHostKeyAlgorithm() {
    this._hostKeyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyAlgorithmInput() {
    return this._hostKeyAlgorithm
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
    return this._privateKey
  }

  // strict_host_key_checking_enabled - computed: false, optional: true, required: false
  private _strictHostKeyCheckingEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get strictHostKeyCheckingEnabled() {
    return this.getBooleanAttribute('strict_host_key_checking_enabled') as any;
  }
  public set strictHostKeyCheckingEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._strictHostKeyCheckingEnabled = value;
  }
  public resetStrictHostKeyCheckingEnabled() {
    this._strictHostKeyCheckingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictHostKeyCheckingEnabledInput() {
    return this._strictHostKeyCheckingEnabled
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

function springCloudServiceConfigServerGitSettingRepositoryToTerraform(struct?: SpringCloudServiceConfigServerGitSettingRepository): any {
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

function springCloudServiceConfigServerGitSettingSshAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingSshAuthOutputReference | SpringCloudServiceConfigServerGitSettingSshAuth): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string | undefined; 
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string | undefined) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey
  }

  // host_key_algorithm - computed: false, optional: true, required: false
  private _hostKeyAlgorithm?: string | undefined; 
  public get hostKeyAlgorithm() {
    return this.getStringAttribute('host_key_algorithm');
  }
  public set hostKeyAlgorithm(value: string | undefined) {
    this._hostKeyAlgorithm = value;
  }
  public resetHostKeyAlgorithm() {
    this._hostKeyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyAlgorithmInput() {
    return this._hostKeyAlgorithm
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
    return this._privateKey
  }

  // strict_host_key_checking_enabled - computed: false, optional: true, required: false
  private _strictHostKeyCheckingEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get strictHostKeyCheckingEnabled() {
    return this.getBooleanAttribute('strict_host_key_checking_enabled') as any;
  }
  public set strictHostKeyCheckingEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._strictHostKeyCheckingEnabled = value;
  }
  public resetStrictHostKeyCheckingEnabled() {
    this._strictHostKeyCheckingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictHostKeyCheckingEnabledInput() {
    return this._strictHostKeyCheckingEnabled
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

function springCloudServiceConfigServerGitSettingToTerraform(struct?: SpringCloudServiceConfigServerGitSettingOutputReference | SpringCloudServiceConfigServerGitSetting): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // label - computed: false, optional: true, required: false
  private _label?: string | undefined; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string | undefined) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label
  }

  // search_paths - computed: false, optional: true, required: false
  private _searchPaths?: string[] | undefined; 
  public get searchPaths() {
    return this.getListAttribute('search_paths');
  }
  public set searchPaths(value: string[] | undefined) {
    this._searchPaths = value;
  }
  public resetSearchPaths() {
    this._searchPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchPathsInput() {
    return this._searchPaths
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
    return this._uri
  }

  // http_basic_auth - computed: false, optional: true, required: false
  private _httpBasicAuth?: SpringCloudServiceConfigServerGitSettingHttpBasicAuth | undefined; 
  private __httpBasicAuthOutput = new SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference(this as any, "http_basic_auth", true);
  public get httpBasicAuth() {
    return this.__httpBasicAuthOutput;
  }
  public putHttpBasicAuth(value: SpringCloudServiceConfigServerGitSettingHttpBasicAuth | undefined) {
    this._httpBasicAuth = value;
  }
  public resetHttpBasicAuth() {
    this._httpBasicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBasicAuthInput() {
    return this._httpBasicAuth
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: SpringCloudServiceConfigServerGitSettingRepository[] | undefined; 
  public get repository() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('repository') as any;
  }
  public set repository(value: SpringCloudServiceConfigServerGitSettingRepository[] | undefined) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // ssh_auth - computed: false, optional: true, required: false
  private _sshAuth?: SpringCloudServiceConfigServerGitSettingSshAuth | undefined; 
  private __sshAuthOutput = new SpringCloudServiceConfigServerGitSettingSshAuthOutputReference(this as any, "ssh_auth", true);
  public get sshAuth() {
    return this.__sshAuthOutput;
  }
  public putSshAuth(value: SpringCloudServiceConfigServerGitSettingSshAuth | undefined) {
    this._sshAuth = value;
  }
  public resetSshAuth() {
    this._sshAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthInput() {
    return this._sshAuth
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

function springCloudServiceNetworkToTerraform(struct?: SpringCloudServiceNetworkOutputReference | SpringCloudServiceNetwork): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // app_network_resource_group - computed: true, optional: true, required: false
  private _appNetworkResourceGroup?: string | undefined; 
  public get appNetworkResourceGroup() {
    return this.getStringAttribute('app_network_resource_group');
  }
  public set appNetworkResourceGroup(value: string | undefined) {
    this._appNetworkResourceGroup = value;
  }
  public resetAppNetworkResourceGroup() {
    this._appNetworkResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNetworkResourceGroupInput() {
    return this._appNetworkResourceGroup
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
    return this._appSubnetId
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
    return this._cidrRanges
  }

  // service_runtime_network_resource_group - computed: true, optional: true, required: false
  private _serviceRuntimeNetworkResourceGroup?: string | undefined; 
  public get serviceRuntimeNetworkResourceGroup() {
    return this.getStringAttribute('service_runtime_network_resource_group');
  }
  public set serviceRuntimeNetworkResourceGroup(value: string | undefined) {
    this._serviceRuntimeNetworkResourceGroup = value;
  }
  public resetServiceRuntimeNetworkResourceGroup() {
    this._serviceRuntimeNetworkResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRuntimeNetworkResourceGroupInput() {
    return this._serviceRuntimeNetworkResourceGroup
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
    return this._serviceRuntimeSubnetId
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

function springCloudServiceTimeoutsToTerraform(struct?: SpringCloudServiceTimeoutsOutputReference | SpringCloudServiceTimeouts): any {
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

function springCloudServiceTraceToTerraform(struct?: SpringCloudServiceTraceOutputReference | SpringCloudServiceTrace): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: string | undefined; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string | undefined) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString
  }

  // instrumentation_key - computed: false, optional: true, required: false
  private _instrumentationKey?: string | undefined; 
  public get instrumentationKey() {
    return this.getStringAttribute('instrumentation_key');
  }
  public set instrumentationKey(value: string | undefined) {
    this._instrumentationKey = value;
  }
  public resetInstrumentationKey() {
    this._instrumentationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instrumentationKeyInput() {
    return this._instrumentationKey
  }

  // sample_rate - computed: false, optional: true, required: false
  private _sampleRate?: number | undefined; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number | undefined) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate
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
    this._configServerGitSetting = config.configServerGitSetting;
    this._network = config.network;
    this._timeouts = config.timeouts;
    this._trace = config.trace;
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
    return this._resourceGroupName
  }

  // sku_name - computed: false, optional: true, required: false
  private _skuName?: string | undefined; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string | undefined) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
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

  // config_server_git_setting - computed: false, optional: true, required: false
  private _configServerGitSetting?: SpringCloudServiceConfigServerGitSetting | undefined; 
  private __configServerGitSettingOutput = new SpringCloudServiceConfigServerGitSettingOutputReference(this as any, "config_server_git_setting", true);
  public get configServerGitSetting() {
    return this.__configServerGitSettingOutput;
  }
  public putConfigServerGitSetting(value: SpringCloudServiceConfigServerGitSetting | undefined) {
    this._configServerGitSetting = value;
  }
  public resetConfigServerGitSetting() {
    this._configServerGitSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configServerGitSettingInput() {
    return this._configServerGitSetting
  }

  // network - computed: false, optional: true, required: false
  private _network?: SpringCloudServiceNetwork | undefined; 
  private __networkOutput = new SpringCloudServiceNetworkOutputReference(this as any, "network", true);
  public get network() {
    return this.__networkOutput;
  }
  public putNetwork(value: SpringCloudServiceNetwork | undefined) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpringCloudServiceTimeouts | undefined; 
  private __timeoutsOutput = new SpringCloudServiceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SpringCloudServiceTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // trace - computed: false, optional: true, required: false
  private _trace?: SpringCloudServiceTrace | undefined; 
  private __traceOutput = new SpringCloudServiceTraceOutputReference(this as any, "trace", true);
  public get trace() {
    return this.__traceOutput;
  }
  public putTrace(value: SpringCloudServiceTrace | undefined) {
    this._trace = value;
  }
  public resetTrace() {
    this._trace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace
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
      config_server_git_setting: springCloudServiceConfigServerGitSettingToTerraform(this._configServerGitSetting),
      network: springCloudServiceNetworkToTerraform(this._network),
      timeouts: springCloudServiceTimeoutsToTerraform(this._timeouts),
      trace: springCloudServiceTraceToTerraform(this._trace),
    };
  }
}
