// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceSourceControlAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Windows or Linux Web App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#app_id AppServiceSourceControlA#app_id}
  */
  readonly appId: string;
  /**
  * The branch name to use for deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#branch AppServiceSourceControlA#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#id AppServiceSourceControlA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The URL for the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#repo_url AppServiceSourceControlA#repo_url}
  */
  readonly repoUrl?: string;
  /**
  * Should the Deployment Rollback be enabled? Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#rollback_enabled AppServiceSourceControlA#rollback_enabled}
  */
  readonly rollbackEnabled?: boolean | cdktf.IResolvable;
  /**
  * Should the App use local Git configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#use_local_git AppServiceSourceControlA#use_local_git}
  */
  readonly useLocalGit?: boolean | cdktf.IResolvable;
  /**
  * Should code be deployed manually. Set to `false` to enable continuous integration, such as webhooks into online repos such as GitHub. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#use_manual_integration AppServiceSourceControlA#use_manual_integration}
  */
  readonly useManualIntegration?: boolean | cdktf.IResolvable;
  /**
  * The repository specified is Mercurial. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#use_mercurial AppServiceSourceControlA#use_mercurial}
  */
  readonly useMercurial?: boolean | cdktf.IResolvable;
  /**
  * github_action_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#github_action_configuration AppServiceSourceControlA#github_action_configuration}
  */
  readonly githubActionConfiguration?: AppServiceSourceControlGithubActionConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#timeouts AppServiceSourceControlA#timeouts}
  */
  readonly timeouts?: AppServiceSourceControlTimeouts;
}
export interface AppServiceSourceControlGithubActionConfigurationCodeConfiguration {
  /**
  * The value to use for the Runtime Stack in the workflow file content for code base apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#runtime_stack AppServiceSourceControlA#runtime_stack}
  */
  readonly runtimeStack: string;
  /**
  * The value to use for the Runtime Version in the workflow file content for code base apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#runtime_version AppServiceSourceControlA#runtime_version}
  */
  readonly runtimeVersion: string;
}

export function appServiceSourceControlGithubActionConfigurationCodeConfigurationToTerraform(struct?: AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference | AppServiceSourceControlGithubActionConfigurationCodeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    runtime_stack: cdktf.stringToTerraform(struct!.runtimeStack),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
  }
}


export function appServiceSourceControlGithubActionConfigurationCodeConfigurationToHclTerraform(struct?: AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference | AppServiceSourceControlGithubActionConfigurationCodeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    runtime_stack: {
      value: cdktf.stringToHclTerraform(struct!.runtimeStack),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppServiceSourceControlGithubActionConfigurationCodeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runtimeStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeStack = this._runtimeStack;
    }
    if (this._runtimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppServiceSourceControlGithubActionConfigurationCodeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._runtimeStack = undefined;
      this._runtimeVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._runtimeStack = value.runtimeStack;
      this._runtimeVersion = value.runtimeVersion;
    }
  }

  // runtime_stack - computed: false, optional: false, required: true
  private _runtimeStack?: string; 
  public get runtimeStack() {
    return this.getStringAttribute('runtime_stack');
  }
  public set runtimeStack(value: string) {
    this._runtimeStack = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeStackInput() {
    return this._runtimeStack;
  }

  // runtime_version - computed: false, optional: false, required: true
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }
}
export interface AppServiceSourceControlGithubActionConfigurationContainerConfiguration {
  /**
  * The image name for the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#image_name AppServiceSourceControlA#image_name}
  */
  readonly imageName: string;
  /**
  * The password used to upload the image to the container registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#registry_password AppServiceSourceControlA#registry_password}
  */
  readonly registryPassword?: string;
  /**
  * The server URL for the container registry where the build will be hosted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#registry_url AppServiceSourceControlA#registry_url}
  */
  readonly registryUrl: string;
  /**
  * The username used to upload the image to the container registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#registry_username AppServiceSourceControlA#registry_username}
  */
  readonly registryUsername?: string;
}

export function appServiceSourceControlGithubActionConfigurationContainerConfigurationToTerraform(struct?: AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference | AppServiceSourceControlGithubActionConfigurationContainerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_name: cdktf.stringToTerraform(struct!.imageName),
    registry_password: cdktf.stringToTerraform(struct!.registryPassword),
    registry_url: cdktf.stringToTerraform(struct!.registryUrl),
    registry_username: cdktf.stringToTerraform(struct!.registryUsername),
  }
}


export function appServiceSourceControlGithubActionConfigurationContainerConfigurationToHclTerraform(struct?: AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference | AppServiceSourceControlGithubActionConfigurationContainerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_password: {
      value: cdktf.stringToHclTerraform(struct!.registryPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_url: {
      value: cdktf.stringToHclTerraform(struct!.registryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_username: {
      value: cdktf.stringToHclTerraform(struct!.registryUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppServiceSourceControlGithubActionConfigurationContainerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._registryPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryPassword = this._registryPassword;
    }
    if (this._registryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryUrl = this._registryUrl;
    }
    if (this._registryUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryUsername = this._registryUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppServiceSourceControlGithubActionConfigurationContainerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageName = undefined;
      this._registryPassword = undefined;
      this._registryUrl = undefined;
      this._registryUsername = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageName = value.imageName;
      this._registryPassword = value.registryPassword;
      this._registryUrl = value.registryUrl;
      this._registryUsername = value.registryUsername;
    }
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // registry_password - computed: false, optional: true, required: false
  private _registryPassword?: string; 
  public get registryPassword() {
    return this.getStringAttribute('registry_password');
  }
  public set registryPassword(value: string) {
    this._registryPassword = value;
  }
  public resetRegistryPassword() {
    this._registryPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryPasswordInput() {
    return this._registryPassword;
  }

  // registry_url - computed: false, optional: false, required: true
  private _registryUrl?: string; 
  public get registryUrl() {
    return this.getStringAttribute('registry_url');
  }
  public set registryUrl(value: string) {
    this._registryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryUrlInput() {
    return this._registryUrl;
  }

  // registry_username - computed: false, optional: true, required: false
  private _registryUsername?: string; 
  public get registryUsername() {
    return this.getStringAttribute('registry_username');
  }
  public set registryUsername(value: string) {
    this._registryUsername = value;
  }
  public resetRegistryUsername() {
    this._registryUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryUsernameInput() {
    return this._registryUsername;
  }
}
export interface AppServiceSourceControlGithubActionConfiguration {
  /**
  * Should the service generate the GitHub Action Workflow file. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#generate_workflow_file AppServiceSourceControlA#generate_workflow_file}
  */
  readonly generateWorkflowFile?: boolean | cdktf.IResolvable;
  /**
  * code_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#code_configuration AppServiceSourceControlA#code_configuration}
  */
  readonly codeConfiguration?: AppServiceSourceControlGithubActionConfigurationCodeConfiguration;
  /**
  * container_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#container_configuration AppServiceSourceControlA#container_configuration}
  */
  readonly containerConfiguration?: AppServiceSourceControlGithubActionConfigurationContainerConfiguration;
}

export function appServiceSourceControlGithubActionConfigurationToTerraform(struct?: AppServiceSourceControlGithubActionConfigurationOutputReference | AppServiceSourceControlGithubActionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generate_workflow_file: cdktf.booleanToTerraform(struct!.generateWorkflowFile),
    code_configuration: appServiceSourceControlGithubActionConfigurationCodeConfigurationToTerraform(struct!.codeConfiguration),
    container_configuration: appServiceSourceControlGithubActionConfigurationContainerConfigurationToTerraform(struct!.containerConfiguration),
  }
}


export function appServiceSourceControlGithubActionConfigurationToHclTerraform(struct?: AppServiceSourceControlGithubActionConfigurationOutputReference | AppServiceSourceControlGithubActionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generate_workflow_file: {
      value: cdktf.booleanToHclTerraform(struct!.generateWorkflowFile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    code_configuration: {
      value: appServiceSourceControlGithubActionConfigurationCodeConfigurationToHclTerraform(struct!.codeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AppServiceSourceControlGithubActionConfigurationCodeConfigurationList",
    },
    container_configuration: {
      value: appServiceSourceControlGithubActionConfigurationContainerConfigurationToHclTerraform(struct!.containerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AppServiceSourceControlGithubActionConfigurationContainerConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppServiceSourceControlGithubActionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppServiceSourceControlGithubActionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generateWorkflowFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateWorkflowFile = this._generateWorkflowFile;
    }
    if (this._codeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeConfiguration = this._codeConfiguration?.internalValue;
    }
    if (this._containerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConfiguration = this._containerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppServiceSourceControlGithubActionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generateWorkflowFile = undefined;
      this._codeConfiguration.internalValue = undefined;
      this._containerConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generateWorkflowFile = value.generateWorkflowFile;
      this._codeConfiguration.internalValue = value.codeConfiguration;
      this._containerConfiguration.internalValue = value.containerConfiguration;
    }
  }

  // generate_workflow_file - computed: false, optional: true, required: false
  private _generateWorkflowFile?: boolean | cdktf.IResolvable; 
  public get generateWorkflowFile() {
    return this.getBooleanAttribute('generate_workflow_file');
  }
  public set generateWorkflowFile(value: boolean | cdktf.IResolvable) {
    this._generateWorkflowFile = value;
  }
  public resetGenerateWorkflowFile() {
    this._generateWorkflowFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateWorkflowFileInput() {
    return this._generateWorkflowFile;
  }

  // linux_action - computed: true, optional: false, required: false
  public get linuxAction() {
    return this.getBooleanAttribute('linux_action');
  }

  // code_configuration - computed: false, optional: true, required: false
  private _codeConfiguration = new AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference(this, "code_configuration");
  public get codeConfiguration() {
    return this._codeConfiguration;
  }
  public putCodeConfiguration(value: AppServiceSourceControlGithubActionConfigurationCodeConfiguration) {
    this._codeConfiguration.internalValue = value;
  }
  public resetCodeConfiguration() {
    this._codeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeConfigurationInput() {
    return this._codeConfiguration.internalValue;
  }

  // container_configuration - computed: false, optional: true, required: false
  private _containerConfiguration = new AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference(this, "container_configuration");
  public get containerConfiguration() {
    return this._containerConfiguration;
  }
  public putContainerConfiguration(value: AppServiceSourceControlGithubActionConfigurationContainerConfiguration) {
    this._containerConfiguration.internalValue = value;
  }
  public resetContainerConfiguration() {
    this._containerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigurationInput() {
    return this._containerConfiguration.internalValue;
  }
}
export interface AppServiceSourceControlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#create AppServiceSourceControlA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#delete AppServiceSourceControlA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#read AppServiceSourceControlA#read}
  */
  readonly read?: string;
}

export function appServiceSourceControlTimeoutsToTerraform(struct?: AppServiceSourceControlTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function appServiceSourceControlTimeoutsToHclTerraform(struct?: AppServiceSourceControlTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppServiceSourceControlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppServiceSourceControlTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppServiceSourceControlTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control azurerm_app_service_source_control}
*/
export class AppServiceSourceControlA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_app_service_source_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppServiceSourceControlA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppServiceSourceControlA to import
  * @param importFromId The id of the existing AppServiceSourceControlA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppServiceSourceControlA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_app_service_source_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_service_source_control azurerm_app_service_source_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppServiceSourceControlAConfig
  */
  public constructor(scope: Construct, id: string, config: AppServiceSourceControlAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_source_control',
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
    this._appId = config.appId;
    this._branch = config.branch;
    this._id = config.id;
    this._repoUrl = config.repoUrl;
    this._rollbackEnabled = config.rollbackEnabled;
    this._useLocalGit = config.useLocalGit;
    this._useManualIntegration = config.useManualIntegration;
    this._useMercurial = config.useMercurial;
    this._githubActionConfiguration.internalValue = config.githubActionConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rollback_enabled - computed: false, optional: true, required: false
  private _rollbackEnabled?: boolean | cdktf.IResolvable; 
  public get rollbackEnabled() {
    return this.getBooleanAttribute('rollback_enabled');
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

  // scm_type - computed: true, optional: false, required: false
  public get scmType() {
    return this.getStringAttribute('scm_type');
  }

  // use_local_git - computed: false, optional: true, required: false
  private _useLocalGit?: boolean | cdktf.IResolvable; 
  public get useLocalGit() {
    return this.getBooleanAttribute('use_local_git');
  }
  public set useLocalGit(value: boolean | cdktf.IResolvable) {
    this._useLocalGit = value;
  }
  public resetUseLocalGit() {
    this._useLocalGit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLocalGitInput() {
    return this._useLocalGit;
  }

  // use_manual_integration - computed: false, optional: true, required: false
  private _useManualIntegration?: boolean | cdktf.IResolvable; 
  public get useManualIntegration() {
    return this.getBooleanAttribute('use_manual_integration');
  }
  public set useManualIntegration(value: boolean | cdktf.IResolvable) {
    this._useManualIntegration = value;
  }
  public resetUseManualIntegration() {
    this._useManualIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useManualIntegrationInput() {
    return this._useManualIntegration;
  }

  // use_mercurial - computed: false, optional: true, required: false
  private _useMercurial?: boolean | cdktf.IResolvable; 
  public get useMercurial() {
    return this.getBooleanAttribute('use_mercurial');
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

  // uses_github_action - computed: true, optional: false, required: false
  public get usesGithubAction() {
    return this.getBooleanAttribute('uses_github_action');
  }

  // github_action_configuration - computed: false, optional: true, required: false
  private _githubActionConfiguration = new AppServiceSourceControlGithubActionConfigurationOutputReference(this, "github_action_configuration");
  public get githubActionConfiguration() {
    return this._githubActionConfiguration;
  }
  public putGithubActionConfiguration(value: AppServiceSourceControlGithubActionConfiguration) {
    this._githubActionConfiguration.internalValue = value;
  }
  public resetGithubActionConfiguration() {
    this._githubActionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubActionConfigurationInput() {
    return this._githubActionConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppServiceSourceControlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppServiceSourceControlTimeouts) {
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
      app_id: cdktf.stringToTerraform(this._appId),
      branch: cdktf.stringToTerraform(this._branch),
      id: cdktf.stringToTerraform(this._id),
      repo_url: cdktf.stringToTerraform(this._repoUrl),
      rollback_enabled: cdktf.booleanToTerraform(this._rollbackEnabled),
      use_local_git: cdktf.booleanToTerraform(this._useLocalGit),
      use_manual_integration: cdktf.booleanToTerraform(this._useManualIntegration),
      use_mercurial: cdktf.booleanToTerraform(this._useMercurial),
      github_action_configuration: appServiceSourceControlGithubActionConfigurationToTerraform(this._githubActionConfiguration.internalValue),
      timeouts: appServiceSourceControlTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
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
      repo_url: {
        value: cdktf.stringToHclTerraform(this._repoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rollback_enabled: {
        value: cdktf.booleanToHclTerraform(this._rollbackEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_local_git: {
        value: cdktf.booleanToHclTerraform(this._useLocalGit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_manual_integration: {
        value: cdktf.booleanToHclTerraform(this._useManualIntegration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_mercurial: {
        value: cdktf.booleanToHclTerraform(this._useMercurial),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      github_action_configuration: {
        value: appServiceSourceControlGithubActionConfigurationToHclTerraform(this._githubActionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppServiceSourceControlGithubActionConfigurationList",
      },
      timeouts: {
        value: appServiceSourceControlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppServiceSourceControlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
