// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#build_agent_pool_size SpringCloudService#build_agent_pool_size}
  */
  readonly buildAgentPoolSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#id SpringCloudService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#location SpringCloudService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#log_stream_public_endpoint_enabled SpringCloudService#log_stream_public_endpoint_enabled}
  */
  readonly logStreamPublicEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#managed_environment_id SpringCloudService#managed_environment_id}
  */
  readonly managedEnvironmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#name SpringCloudService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#resource_group_name SpringCloudService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#service_registry_enabled SpringCloudService#service_registry_enabled}
  */
  readonly serviceRegistryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#sku_name SpringCloudService#sku_name}
  */
  readonly skuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#sku_tier SpringCloudService#sku_tier}
  */
  readonly skuTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#tags SpringCloudService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#zone_redundant SpringCloudService#zone_redundant}
  */
  readonly zoneRedundant?: boolean | cdktf.IResolvable;
  /**
  * config_server_git_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#config_server_git_setting SpringCloudService#config_server_git_setting}
  */
  readonly configServerGitSetting?: SpringCloudServiceConfigServerGitSetting;
  /**
  * container_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#container_registry SpringCloudService#container_registry}
  */
  readonly containerRegistry?: SpringCloudServiceContainerRegistry[] | cdktf.IResolvable;
  /**
  * default_build_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#default_build_service SpringCloudService#default_build_service}
  */
  readonly defaultBuildService?: SpringCloudServiceDefaultBuildService;
  /**
  * marketplace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#marketplace SpringCloudService#marketplace}
  */
  readonly marketplace?: SpringCloudServiceMarketplace;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#network SpringCloudService#network}
  */
  readonly network?: SpringCloudServiceNetwork;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#timeouts SpringCloudService#timeouts}
  */
  readonly timeouts?: SpringCloudServiceTimeouts;
  /**
  * trace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#trace SpringCloudService#trace}
  */
  readonly trace?: SpringCloudServiceTrace;
}
export interface SpringCloudServiceRequiredNetworkTrafficRules {
}

export function springCloudServiceRequiredNetworkTrafficRulesToTerraform(struct?: SpringCloudServiceRequiredNetworkTrafficRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function springCloudServiceRequiredNetworkTrafficRulesToHclTerraform(struct?: SpringCloudServiceRequiredNetworkTrafficRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SpringCloudServiceRequiredNetworkTrafficRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpringCloudServiceRequiredNetworkTrafficRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudServiceRequiredNetworkTrafficRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class SpringCloudServiceRequiredNetworkTrafficRulesList extends cdktf.ComplexList {

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
  public get(index: number): SpringCloudServiceRequiredNetworkTrafficRulesOutputReference {
    return new SpringCloudServiceRequiredNetworkTrafficRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpringCloudServiceConfigServerGitSettingHttpBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#password SpringCloudService#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#username SpringCloudService#username}
  */
  readonly username: string;
}

export function springCloudServiceConfigServerGitSettingHttpBasicAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference | SpringCloudServiceConfigServerGitSettingHttpBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function springCloudServiceConfigServerGitSettingHttpBasicAuthToHclTerraform(struct?: SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference | SpringCloudServiceConfigServerGitSettingHttpBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudServiceConfigServerGitSettingHttpBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#password SpringCloudService#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#username SpringCloudService#username}
  */
  readonly username: string;
}

export function springCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference | SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function springCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthToHclTerraform(struct?: SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference | SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#host_key SpringCloudService#host_key}
  */
  readonly hostKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#host_key_algorithm SpringCloudService#host_key_algorithm}
  */
  readonly hostKeyAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#private_key SpringCloudService#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}
  */
  readonly strictHostKeyCheckingEnabled?: boolean | cdktf.IResolvable;
}

export function springCloudServiceConfigServerGitSettingRepositorySshAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference | SpringCloudServiceConfigServerGitSettingRepositorySshAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function springCloudServiceConfigServerGitSettingRepositorySshAuthToHclTerraform(struct?: SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference | SpringCloudServiceConfigServerGitSettingRepositorySshAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_key: {
      value: cdktf.stringToHclTerraform(struct!.hostKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.hostKeyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict_host_key_checking_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.strictHostKeyCheckingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudServiceConfigServerGitSettingRepositorySshAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKey = this._hostKey;
    }
    if (this._hostKeyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKeyAlgorithm = this._hostKeyAlgorithm;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._strictHostKeyCheckingEnabled !== undefined) {
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
    return this.getBooleanAttribute('strict_host_key_checking_enabled');
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#label SpringCloudService#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#name SpringCloudService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#pattern SpringCloudService#pattern}
  */
  readonly pattern?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#search_paths SpringCloudService#search_paths}
  */
  readonly searchPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#uri SpringCloudService#uri}
  */
  readonly uri: string;
  /**
  * http_basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#http_basic_auth SpringCloudService#http_basic_auth}
  */
  readonly httpBasicAuth?: SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth;
  /**
  * ssh_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#ssh_auth SpringCloudService#ssh_auth}
  */
  readonly sshAuth?: SpringCloudServiceConfigServerGitSettingRepositorySshAuth;
}

export function springCloudServiceConfigServerGitSettingRepositoryToTerraform(struct?: SpringCloudServiceConfigServerGitSettingRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pattern),
    search_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchPaths),
    uri: cdktf.stringToTerraform(struct!.uri),
    http_basic_auth: springCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthToTerraform(struct!.httpBasicAuth),
    ssh_auth: springCloudServiceConfigServerGitSettingRepositorySshAuthToTerraform(struct!.sshAuth),
  }
}


export function springCloudServiceConfigServerGitSettingRepositoryToHclTerraform(struct?: SpringCloudServiceConfigServerGitSettingRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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
    pattern: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pattern),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    search_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_basic_auth: {
      value: springCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthToHclTerraform(struct!.httpBasicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList",
    },
    ssh_auth: {
      value: springCloudServiceConfigServerGitSettingRepositorySshAuthToHclTerraform(struct!.sshAuth),
      isBlock: true,
      type: "list",
      storageClassType: "SpringCloudServiceConfigServerGitSettingRepositorySshAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudServiceConfigServerGitSettingRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpringCloudServiceConfigServerGitSettingRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._searchPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchPaths = this._searchPaths;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._httpBasicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpBasicAuth = this._httpBasicAuth?.internalValue;
    }
    if (this._sshAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAuth = this._sshAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudServiceConfigServerGitSettingRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._name = undefined;
      this._pattern = undefined;
      this._searchPaths = undefined;
      this._uri = undefined;
      this._httpBasicAuth.internalValue = undefined;
      this._sshAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._name = value.name;
      this._pattern = value.pattern;
      this._searchPaths = value.searchPaths;
      this._uri = value.uri;
      this._httpBasicAuth.internalValue = value.httpBasicAuth;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string[]; 
  public get pattern() {
    return this.getListAttribute('pattern');
  }
  public set pattern(value: string[]) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
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
  private _httpBasicAuth = new SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference(this, "http_basic_auth");
  public get httpBasicAuth() {
    return this._httpBasicAuth;
  }
  public putHttpBasicAuth(value: SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth) {
    this._httpBasicAuth.internalValue = value;
  }
  public resetHttpBasicAuth() {
    this._httpBasicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBasicAuthInput() {
    return this._httpBasicAuth.internalValue;
  }

  // ssh_auth - computed: false, optional: true, required: false
  private _sshAuth = new SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference(this, "ssh_auth");
  public get sshAuth() {
    return this._sshAuth;
  }
  public putSshAuth(value: SpringCloudServiceConfigServerGitSettingRepositorySshAuth) {
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

export class SpringCloudServiceConfigServerGitSettingRepositoryList extends cdktf.ComplexList {
  public internalValue? : SpringCloudServiceConfigServerGitSettingRepository[] | cdktf.IResolvable

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
  public get(index: number): SpringCloudServiceConfigServerGitSettingRepositoryOutputReference {
    return new SpringCloudServiceConfigServerGitSettingRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpringCloudServiceConfigServerGitSettingSshAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#host_key SpringCloudService#host_key}
  */
  readonly hostKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#host_key_algorithm SpringCloudService#host_key_algorithm}
  */
  readonly hostKeyAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#private_key SpringCloudService#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}
  */
  readonly strictHostKeyCheckingEnabled?: boolean | cdktf.IResolvable;
}

export function springCloudServiceConfigServerGitSettingSshAuthToTerraform(struct?: SpringCloudServiceConfigServerGitSettingSshAuthOutputReference | SpringCloudServiceConfigServerGitSettingSshAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function springCloudServiceConfigServerGitSettingSshAuthToHclTerraform(struct?: SpringCloudServiceConfigServerGitSettingSshAuthOutputReference | SpringCloudServiceConfigServerGitSettingSshAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_key: {
      value: cdktf.stringToHclTerraform(struct!.hostKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.hostKeyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict_host_key_checking_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.strictHostKeyCheckingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudServiceConfigServerGitSettingSshAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudServiceConfigServerGitSettingSshAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKey = this._hostKey;
    }
    if (this._hostKeyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKeyAlgorithm = this._hostKeyAlgorithm;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._strictHostKeyCheckingEnabled !== undefined) {
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
    return this.getBooleanAttribute('strict_host_key_checking_enabled');
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#label SpringCloudService#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#search_paths SpringCloudService#search_paths}
  */
  readonly searchPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#uri SpringCloudService#uri}
  */
  readonly uri: string;
  /**
  * http_basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#http_basic_auth SpringCloudService#http_basic_auth}
  */
  readonly httpBasicAuth?: SpringCloudServiceConfigServerGitSettingHttpBasicAuth;
  /**
  * repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#repository SpringCloudService#repository}
  */
  readonly repository?: SpringCloudServiceConfigServerGitSettingRepository[] | cdktf.IResolvable;
  /**
  * ssh_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#ssh_auth SpringCloudService#ssh_auth}
  */
  readonly sshAuth?: SpringCloudServiceConfigServerGitSettingSshAuth;
}

export function springCloudServiceConfigServerGitSettingToTerraform(struct?: SpringCloudServiceConfigServerGitSettingOutputReference | SpringCloudServiceConfigServerGitSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    search_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchPaths),
    uri: cdktf.stringToTerraform(struct!.uri),
    http_basic_auth: springCloudServiceConfigServerGitSettingHttpBasicAuthToTerraform(struct!.httpBasicAuth),
    repository: cdktf.listMapper(springCloudServiceConfigServerGitSettingRepositoryToTerraform, true)(struct!.repository),
    ssh_auth: springCloudServiceConfigServerGitSettingSshAuthToTerraform(struct!.sshAuth),
  }
}


export function springCloudServiceConfigServerGitSettingToHclTerraform(struct?: SpringCloudServiceConfigServerGitSettingOutputReference | SpringCloudServiceConfigServerGitSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_basic_auth: {
      value: springCloudServiceConfigServerGitSettingHttpBasicAuthToHclTerraform(struct!.httpBasicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "SpringCloudServiceConfigServerGitSettingHttpBasicAuthList",
    },
    repository: {
      value: cdktf.listMapperHcl(springCloudServiceConfigServerGitSettingRepositoryToHclTerraform, true)(struct!.repository),
      isBlock: true,
      type: "list",
      storageClassType: "SpringCloudServiceConfigServerGitSettingRepositoryList",
    },
    ssh_auth: {
      value: springCloudServiceConfigServerGitSettingSshAuthToHclTerraform(struct!.sshAuth),
      isBlock: true,
      type: "list",
      storageClassType: "SpringCloudServiceConfigServerGitSettingSshAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudServiceConfigServerGitSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudServiceConfigServerGitSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._searchPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchPaths = this._searchPaths;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._httpBasicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpBasicAuth = this._httpBasicAuth?.internalValue;
    }
    if (this._repository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository?.internalValue;
    }
    if (this._sshAuth?.internalValue !== undefined) {
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
      this._repository.internalValue = undefined;
      this._sshAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._label = value.label;
      this._searchPaths = value.searchPaths;
      this._uri = value.uri;
      this._httpBasicAuth.internalValue = value.httpBasicAuth;
      this._repository.internalValue = value.repository;
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
  private _httpBasicAuth = new SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference(this, "http_basic_auth");
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
  private _repository = new SpringCloudServiceConfigServerGitSettingRepositoryList(this, "repository", false);
  public get repository() {
    return this._repository;
  }
  public putRepository(value: SpringCloudServiceConfigServerGitSettingRepository[] | cdktf.IResolvable) {
    this._repository.internalValue = value;
  }
  public resetRepository() {
    this._repository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository.internalValue;
  }

  // ssh_auth - computed: false, optional: true, required: false
  private _sshAuth = new SpringCloudServiceConfigServerGitSettingSshAuthOutputReference(this, "ssh_auth");
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
export interface SpringCloudServiceContainerRegistry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#name SpringCloudService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#password SpringCloudService#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#server SpringCloudService#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#username SpringCloudService#username}
  */
  readonly username: string;
}

export function springCloudServiceContainerRegistryToTerraform(struct?: SpringCloudServiceContainerRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function springCloudServiceContainerRegistryToHclTerraform(struct?: SpringCloudServiceContainerRegistry | cdktf.IResolvable): any {
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudServiceContainerRegistryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpringCloudServiceContainerRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudServiceContainerRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._password = undefined;
      this._server = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._password = value.password;
      this._server = value.server;
      this._username = value.username;
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

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
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

export class SpringCloudServiceContainerRegistryList extends cdktf.ComplexList {
  public internalValue? : SpringCloudServiceContainerRegistry[] | cdktf.IResolvable

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
  public get(index: number): SpringCloudServiceContainerRegistryOutputReference {
    return new SpringCloudServiceContainerRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpringCloudServiceDefaultBuildService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#container_registry_name SpringCloudService#container_registry_name}
  */
  readonly containerRegistryName?: string;
}

export function springCloudServiceDefaultBuildServiceToTerraform(struct?: SpringCloudServiceDefaultBuildServiceOutputReference | SpringCloudServiceDefaultBuildService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_registry_name: cdktf.stringToTerraform(struct!.containerRegistryName),
  }
}


export function springCloudServiceDefaultBuildServiceToHclTerraform(struct?: SpringCloudServiceDefaultBuildServiceOutputReference | SpringCloudServiceDefaultBuildService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_registry_name: {
      value: cdktf.stringToHclTerraform(struct!.containerRegistryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudServiceDefaultBuildServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudServiceDefaultBuildService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerRegistryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerRegistryName = this._containerRegistryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudServiceDefaultBuildService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerRegistryName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerRegistryName = value.containerRegistryName;
    }
  }

  // container_registry_name - computed: false, optional: true, required: false
  private _containerRegistryName?: string; 
  public get containerRegistryName() {
    return this.getStringAttribute('container_registry_name');
  }
  public set containerRegistryName(value: string) {
    this._containerRegistryName = value;
  }
  public resetContainerRegistryName() {
    this._containerRegistryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryNameInput() {
    return this._containerRegistryName;
  }
}
export interface SpringCloudServiceMarketplace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#plan SpringCloudService#plan}
  */
  readonly plan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#product SpringCloudService#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#publisher SpringCloudService#publisher}
  */
  readonly publisher: string;
}

export function springCloudServiceMarketplaceToTerraform(struct?: SpringCloudServiceMarketplaceOutputReference | SpringCloudServiceMarketplace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plan: cdktf.stringToTerraform(struct!.plan),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
  }
}


export function springCloudServiceMarketplaceToHclTerraform(struct?: SpringCloudServiceMarketplaceOutputReference | SpringCloudServiceMarketplace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plan: {
      value: cdktf.stringToHclTerraform(struct!.plan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudServiceMarketplaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudServiceMarketplace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plan !== undefined) {
      hasAnyValues = true;
      internalValueResult.plan = this._plan;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudServiceMarketplace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plan = undefined;
      this._product = undefined;
      this._publisher = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plan = value.plan;
      this._product = value.product;
      this._publisher = value.publisher;
    }
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }
}
export interface SpringCloudServiceNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#app_network_resource_group SpringCloudService#app_network_resource_group}
  */
  readonly appNetworkResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#app_subnet_id SpringCloudService#app_subnet_id}
  */
  readonly appSubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#cidr_ranges SpringCloudService#cidr_ranges}
  */
  readonly cidrRanges: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#outbound_type SpringCloudService#outbound_type}
  */
  readonly outboundType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#read_timeout_seconds SpringCloudService#read_timeout_seconds}
  */
  readonly readTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#service_runtime_network_resource_group SpringCloudService#service_runtime_network_resource_group}
  */
  readonly serviceRuntimeNetworkResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#service_runtime_subnet_id SpringCloudService#service_runtime_subnet_id}
  */
  readonly serviceRuntimeSubnetId: string;
}

export function springCloudServiceNetworkToTerraform(struct?: SpringCloudServiceNetworkOutputReference | SpringCloudServiceNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_network_resource_group: cdktf.stringToTerraform(struct!.appNetworkResourceGroup),
    app_subnet_id: cdktf.stringToTerraform(struct!.appSubnetId),
    cidr_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrRanges),
    outbound_type: cdktf.stringToTerraform(struct!.outboundType),
    read_timeout_seconds: cdktf.numberToTerraform(struct!.readTimeoutSeconds),
    service_runtime_network_resource_group: cdktf.stringToTerraform(struct!.serviceRuntimeNetworkResourceGroup),
    service_runtime_subnet_id: cdktf.stringToTerraform(struct!.serviceRuntimeSubnetId),
  }
}


export function springCloudServiceNetworkToHclTerraform(struct?: SpringCloudServiceNetworkOutputReference | SpringCloudServiceNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_network_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.appNetworkResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.appSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    outbound_type: {
      value: cdktf.stringToHclTerraform(struct!.outboundType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.readTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_runtime_network_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.serviceRuntimeNetworkResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_runtime_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceRuntimeSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudServiceNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudServiceNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appNetworkResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.appNetworkResourceGroup = this._appNetworkResourceGroup;
    }
    if (this._appSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSubnetId = this._appSubnetId;
    }
    if (this._cidrRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrRanges = this._cidrRanges;
    }
    if (this._outboundType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundType = this._outboundType;
    }
    if (this._readTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeoutSeconds = this._readTimeoutSeconds;
    }
    if (this._serviceRuntimeNetworkResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRuntimeNetworkResourceGroup = this._serviceRuntimeNetworkResourceGroup;
    }
    if (this._serviceRuntimeSubnetId !== undefined) {
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
      this._outboundType = undefined;
      this._readTimeoutSeconds = undefined;
      this._serviceRuntimeNetworkResourceGroup = undefined;
      this._serviceRuntimeSubnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appNetworkResourceGroup = value.appNetworkResourceGroup;
      this._appSubnetId = value.appSubnetId;
      this._cidrRanges = value.cidrRanges;
      this._outboundType = value.outboundType;
      this._readTimeoutSeconds = value.readTimeoutSeconds;
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

  // outbound_type - computed: false, optional: true, required: false
  private _outboundType?: string; 
  public get outboundType() {
    return this.getStringAttribute('outbound_type');
  }
  public set outboundType(value: string) {
    this._outboundType = value;
  }
  public resetOutboundType() {
    this._outboundType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundTypeInput() {
    return this._outboundType;
  }

  // read_timeout_seconds - computed: false, optional: true, required: false
  private _readTimeoutSeconds?: number; 
  public get readTimeoutSeconds() {
    return this.getNumberAttribute('read_timeout_seconds');
  }
  public set readTimeoutSeconds(value: number) {
    this._readTimeoutSeconds = value;
  }
  public resetReadTimeoutSeconds() {
    this._readTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutSecondsInput() {
    return this._readTimeoutSeconds;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#create SpringCloudService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#delete SpringCloudService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#read SpringCloudService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#update SpringCloudService#update}
  */
  readonly update?: string;
}

export function springCloudServiceTimeoutsToTerraform(struct?: SpringCloudServiceTimeouts | cdktf.IResolvable): any {
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


export function springCloudServiceTimeoutsToHclTerraform(struct?: SpringCloudServiceTimeouts | cdktf.IResolvable): any {
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

export class SpringCloudServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpringCloudServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpringCloudServiceTimeouts | cdktf.IResolvable | undefined) {
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
export interface SpringCloudServiceTrace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#connection_string SpringCloudService#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#sample_rate SpringCloudService#sample_rate}
  */
  readonly sampleRate?: number;
}

export function springCloudServiceTraceToTerraform(struct?: SpringCloudServiceTraceOutputReference | SpringCloudServiceTrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}


export function springCloudServiceTraceToHclTerraform(struct?: SpringCloudServiceTraceOutputReference | SpringCloudServiceTrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_string: {
      value: cdktf.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudServiceTraceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudServiceTrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudServiceTrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionString = undefined;
      this._sampleRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionString = value.connectionString;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service azurerm_spring_cloud_service}
*/
export class SpringCloudService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_spring_cloud_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpringCloudService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpringCloudService to import
  * @param importFromId The id of the existing SpringCloudService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpringCloudService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_spring_cloud_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_service azurerm_spring_cloud_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudServiceConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_service',
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
    this._buildAgentPoolSize = config.buildAgentPoolSize;
    this._id = config.id;
    this._location = config.location;
    this._logStreamPublicEndpointEnabled = config.logStreamPublicEndpointEnabled;
    this._managedEnvironmentId = config.managedEnvironmentId;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceRegistryEnabled = config.serviceRegistryEnabled;
    this._skuName = config.skuName;
    this._skuTier = config.skuTier;
    this._tags = config.tags;
    this._zoneRedundant = config.zoneRedundant;
    this._configServerGitSetting.internalValue = config.configServerGitSetting;
    this._containerRegistry.internalValue = config.containerRegistry;
    this._defaultBuildService.internalValue = config.defaultBuildService;
    this._marketplace.internalValue = config.marketplace;
    this._network.internalValue = config.network;
    this._timeouts.internalValue = config.timeouts;
    this._trace.internalValue = config.trace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // build_agent_pool_size - computed: false, optional: true, required: false
  private _buildAgentPoolSize?: string; 
  public get buildAgentPoolSize() {
    return this.getStringAttribute('build_agent_pool_size');
  }
  public set buildAgentPoolSize(value: string) {
    this._buildAgentPoolSize = value;
  }
  public resetBuildAgentPoolSize() {
    this._buildAgentPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAgentPoolSizeInput() {
    return this._buildAgentPoolSize;
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

  // log_stream_public_endpoint_enabled - computed: false, optional: true, required: false
  private _logStreamPublicEndpointEnabled?: boolean | cdktf.IResolvable; 
  public get logStreamPublicEndpointEnabled() {
    return this.getBooleanAttribute('log_stream_public_endpoint_enabled');
  }
  public set logStreamPublicEndpointEnabled(value: boolean | cdktf.IResolvable) {
    this._logStreamPublicEndpointEnabled = value;
  }
  public resetLogStreamPublicEndpointEnabled() {
    this._logStreamPublicEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamPublicEndpointEnabledInput() {
    return this._logStreamPublicEndpointEnabled;
  }

  // managed_environment_id - computed: false, optional: true, required: false
  private _managedEnvironmentId?: string; 
  public get managedEnvironmentId() {
    return this.getStringAttribute('managed_environment_id');
  }
  public set managedEnvironmentId(value: string) {
    this._managedEnvironmentId = value;
  }
  public resetManagedEnvironmentId() {
    this._managedEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedEnvironmentIdInput() {
    return this._managedEnvironmentId;
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
  private _requiredNetworkTrafficRules = new SpringCloudServiceRequiredNetworkTrafficRulesList(this, "required_network_traffic_rules", false);
  public get requiredNetworkTrafficRules() {
    return this._requiredNetworkTrafficRules;
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

  // service_registry_enabled - computed: false, optional: true, required: false
  private _serviceRegistryEnabled?: boolean | cdktf.IResolvable; 
  public get serviceRegistryEnabled() {
    return this.getBooleanAttribute('service_registry_enabled');
  }
  public set serviceRegistryEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceRegistryEnabled = value;
  }
  public resetServiceRegistryEnabled() {
    this._serviceRegistryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRegistryEnabledInput() {
    return this._serviceRegistryEnabled;
  }

  // service_registry_id - computed: true, optional: false, required: false
  public get serviceRegistryId() {
    return this.getStringAttribute('service_registry_id');
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

  // sku_tier - computed: true, optional: true, required: false
  private _skuTier?: string; 
  public get skuTier() {
    return this.getStringAttribute('sku_tier');
  }
  public set skuTier(value: string) {
    this._skuTier = value;
  }
  public resetSkuTier() {
    this._skuTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuTierInput() {
    return this._skuTier;
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

  // zone_redundant - computed: false, optional: true, required: false
  private _zoneRedundant?: boolean | cdktf.IResolvable; 
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant');
  }
  public set zoneRedundant(value: boolean | cdktf.IResolvable) {
    this._zoneRedundant = value;
  }
  public resetZoneRedundant() {
    this._zoneRedundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRedundantInput() {
    return this._zoneRedundant;
  }

  // config_server_git_setting - computed: false, optional: true, required: false
  private _configServerGitSetting = new SpringCloudServiceConfigServerGitSettingOutputReference(this, "config_server_git_setting");
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

  // container_registry - computed: false, optional: true, required: false
  private _containerRegistry = new SpringCloudServiceContainerRegistryList(this, "container_registry", false);
  public get containerRegistry() {
    return this._containerRegistry;
  }
  public putContainerRegistry(value: SpringCloudServiceContainerRegistry[] | cdktf.IResolvable) {
    this._containerRegistry.internalValue = value;
  }
  public resetContainerRegistry() {
    this._containerRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryInput() {
    return this._containerRegistry.internalValue;
  }

  // default_build_service - computed: false, optional: true, required: false
  private _defaultBuildService = new SpringCloudServiceDefaultBuildServiceOutputReference(this, "default_build_service");
  public get defaultBuildService() {
    return this._defaultBuildService;
  }
  public putDefaultBuildService(value: SpringCloudServiceDefaultBuildService) {
    this._defaultBuildService.internalValue = value;
  }
  public resetDefaultBuildService() {
    this._defaultBuildService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBuildServiceInput() {
    return this._defaultBuildService.internalValue;
  }

  // marketplace - computed: false, optional: true, required: false
  private _marketplace = new SpringCloudServiceMarketplaceOutputReference(this, "marketplace");
  public get marketplace() {
    return this._marketplace;
  }
  public putMarketplace(value: SpringCloudServiceMarketplace) {
    this._marketplace.internalValue = value;
  }
  public resetMarketplace() {
    this._marketplace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketplaceInput() {
    return this._marketplace.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new SpringCloudServiceNetworkOutputReference(this, "network");
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
  private _timeouts = new SpringCloudServiceTimeoutsOutputReference(this, "timeouts");
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
  private _trace = new SpringCloudServiceTraceOutputReference(this, "trace");
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
      build_agent_pool_size: cdktf.stringToTerraform(this._buildAgentPoolSize),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      log_stream_public_endpoint_enabled: cdktf.booleanToTerraform(this._logStreamPublicEndpointEnabled),
      managed_environment_id: cdktf.stringToTerraform(this._managedEnvironmentId),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_registry_enabled: cdktf.booleanToTerraform(this._serviceRegistryEnabled),
      sku_name: cdktf.stringToTerraform(this._skuName),
      sku_tier: cdktf.stringToTerraform(this._skuTier),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zone_redundant: cdktf.booleanToTerraform(this._zoneRedundant),
      config_server_git_setting: springCloudServiceConfigServerGitSettingToTerraform(this._configServerGitSetting.internalValue),
      container_registry: cdktf.listMapper(springCloudServiceContainerRegistryToTerraform, true)(this._containerRegistry.internalValue),
      default_build_service: springCloudServiceDefaultBuildServiceToTerraform(this._defaultBuildService.internalValue),
      marketplace: springCloudServiceMarketplaceToTerraform(this._marketplace.internalValue),
      network: springCloudServiceNetworkToTerraform(this._network.internalValue),
      timeouts: springCloudServiceTimeoutsToTerraform(this._timeouts.internalValue),
      trace: springCloudServiceTraceToTerraform(this._trace.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      build_agent_pool_size: {
        value: cdktf.stringToHclTerraform(this._buildAgentPoolSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      log_stream_public_endpoint_enabled: {
        value: cdktf.booleanToHclTerraform(this._logStreamPublicEndpointEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      managed_environment_id: {
        value: cdktf.stringToHclTerraform(this._managedEnvironmentId),
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
      service_registry_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceRegistryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sku_name: {
        value: cdktf.stringToHclTerraform(this._skuName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sku_tier: {
        value: cdktf.stringToHclTerraform(this._skuTier),
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
      zone_redundant: {
        value: cdktf.booleanToHclTerraform(this._zoneRedundant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_server_git_setting: {
        value: springCloudServiceConfigServerGitSettingToHclTerraform(this._configServerGitSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudServiceConfigServerGitSettingList",
      },
      container_registry: {
        value: cdktf.listMapperHcl(springCloudServiceContainerRegistryToHclTerraform, true)(this._containerRegistry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudServiceContainerRegistryList",
      },
      default_build_service: {
        value: springCloudServiceDefaultBuildServiceToHclTerraform(this._defaultBuildService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudServiceDefaultBuildServiceList",
      },
      marketplace: {
        value: springCloudServiceMarketplaceToHclTerraform(this._marketplace.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudServiceMarketplaceList",
      },
      network: {
        value: springCloudServiceNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudServiceNetworkList",
      },
      timeouts: {
        value: springCloudServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpringCloudServiceTimeouts",
      },
      trace: {
        value: springCloudServiceTraceToHclTerraform(this._trace.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudServiceTraceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
