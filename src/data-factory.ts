// https://www.terraform.io/docs/providers/azurerm/r/data_factory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#customer_managed_key_id DataFactory#customer_managed_key_id}
  */
  readonly customerManagedKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#location DataFactory#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#managed_virtual_network_enabled DataFactory#managed_virtual_network_enabled}
  */
  readonly managedVirtualNetworkEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#name DataFactory#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#public_network_enabled DataFactory#public_network_enabled}
  */
  readonly publicNetworkEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#resource_group_name DataFactory#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#tags DataFactory#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * github_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#github_configuration DataFactory#github_configuration}
  */
  readonly githubConfiguration?: DataFactoryGithubConfiguration;
  /**
  * global_parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#global_parameter DataFactory#global_parameter}
  */
  readonly globalParameter?: DataFactoryGlobalParameter[] | cdktf.IResolvable;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#identity DataFactory#identity}
  */
  readonly identity?: DataFactoryIdentity;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#timeouts DataFactory#timeouts}
  */
  readonly timeouts?: DataFactoryTimeouts;
  /**
  * vsts_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#vsts_configuration DataFactory#vsts_configuration}
  */
  readonly vstsConfiguration?: DataFactoryVstsConfiguration;
}
export interface DataFactoryGithubConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#account_name DataFactory#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#branch_name DataFactory#branch_name}
  */
  readonly branchName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#git_url DataFactory#git_url}
  */
  readonly gitUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#repository_name DataFactory#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#root_folder DataFactory#root_folder}
  */
  readonly rootFolder: string;
}

export function dataFactoryGithubConfigurationToTerraform(struct?: DataFactoryGithubConfigurationOutputReference | DataFactoryGithubConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    git_url: cdktf.stringToTerraform(struct!.gitUrl),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    root_folder: cdktf.stringToTerraform(struct!.rootFolder),
  }
}

export class DataFactoryGithubConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryGithubConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._gitUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitUrl = this._gitUrl;
    }
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    if (this._rootFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootFolder = this._rootFolder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryGithubConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountName = undefined;
      this._branchName = undefined;
      this._gitUrl = undefined;
      this._repositoryName = undefined;
      this._rootFolder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountName = value.accountName;
      this._branchName = value.branchName;
      this._gitUrl = value.gitUrl;
      this._repositoryName = value.repositoryName;
      this._rootFolder = value.rootFolder;
    }
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

  // branch_name - computed: false, optional: false, required: true
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // git_url - computed: false, optional: false, required: true
  private _gitUrl?: string; 
  public get gitUrl() {
    return this.getStringAttribute('git_url');
  }
  public set gitUrl(value: string) {
    this._gitUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitUrlInput() {
    return this._gitUrl;
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // root_folder - computed: false, optional: false, required: true
  private _rootFolder?: string; 
  public get rootFolder() {
    return this.getStringAttribute('root_folder');
  }
  public set rootFolder(value: string) {
    this._rootFolder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootFolderInput() {
    return this._rootFolder;
  }
}
export interface DataFactoryGlobalParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#name DataFactory#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#type DataFactory#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#value DataFactory#value}
  */
  readonly value: string;
}

export function dataFactoryGlobalParameterToTerraform(struct?: DataFactoryGlobalParameter | cdktf.IResolvable): any {
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

export interface DataFactoryIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#identity_ids DataFactory#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#type DataFactory#type}
  */
  readonly type: string;
}

export function dataFactoryIdentityToTerraform(struct?: DataFactoryIdentityOutputReference | DataFactoryIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataFactoryIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryIdentity | undefined {
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

  public set internalValue(value: DataFactoryIdentity | undefined) {
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
export interface DataFactoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#create DataFactory#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#delete DataFactory#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#read DataFactory#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#update DataFactory#update}
  */
  readonly update?: string;
}

export function dataFactoryTimeoutsToTerraform(struct?: DataFactoryTimeoutsOutputReference | DataFactoryTimeouts | cdktf.IResolvable): any {
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

export class DataFactoryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryTimeouts | undefined {
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

  public set internalValue(value: DataFactoryTimeouts | undefined) {
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
export interface DataFactoryVstsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#account_name DataFactory#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#branch_name DataFactory#branch_name}
  */
  readonly branchName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#project_name DataFactory#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#repository_name DataFactory#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#root_folder DataFactory#root_folder}
  */
  readonly rootFolder: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory#tenant_id DataFactory#tenant_id}
  */
  readonly tenantId: string;
}

export function dataFactoryVstsConfigurationToTerraform(struct?: DataFactoryVstsConfigurationOutputReference | DataFactoryVstsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    root_folder: cdktf.stringToTerraform(struct!.rootFolder),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export class DataFactoryVstsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryVstsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    if (this._rootFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootFolder = this._rootFolder;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryVstsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountName = undefined;
      this._branchName = undefined;
      this._projectName = undefined;
      this._repositoryName = undefined;
      this._rootFolder = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountName = value.accountName;
      this._branchName = value.branchName;
      this._projectName = value.projectName;
      this._repositoryName = value.repositoryName;
      this._rootFolder = value.rootFolder;
      this._tenantId = value.tenantId;
    }
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

  // branch_name - computed: false, optional: false, required: true
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // root_folder - computed: false, optional: false, required: true
  private _rootFolder?: string; 
  public get rootFolder() {
    return this.getStringAttribute('root_folder');
  }
  public set rootFolder(value: string) {
    this._rootFolder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootFolderInput() {
    return this._rootFolder;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory azurerm_data_factory}
*/
export class DataFactory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_data_factory";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory azurerm_data_factory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '2.99.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customerManagedKeyId = config.customerManagedKeyId;
    this._location = config.location;
    this._managedVirtualNetworkEnabled = config.managedVirtualNetworkEnabled;
    this._name = config.name;
    this._publicNetworkEnabled = config.publicNetworkEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._githubConfiguration.internalValue = config.githubConfiguration;
    this._globalParameter = config.globalParameter;
    this._identity.internalValue = config.identity;
    this._timeouts.internalValue = config.timeouts;
    this._vstsConfiguration.internalValue = config.vstsConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_managed_key_id - computed: false, optional: true, required: false
  private _customerManagedKeyId?: string; 
  public get customerManagedKeyId() {
    return this.getStringAttribute('customer_managed_key_id');
  }
  public set customerManagedKeyId(value: string) {
    this._customerManagedKeyId = value;
  }
  public resetCustomerManagedKeyId() {
    this._customerManagedKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyIdInput() {
    return this._customerManagedKeyId;
  }

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

  // managed_virtual_network_enabled - computed: false, optional: true, required: false
  private _managedVirtualNetworkEnabled?: boolean | cdktf.IResolvable; 
  public get managedVirtualNetworkEnabled() {
    return this.getBooleanAttribute('managed_virtual_network_enabled');
  }
  public set managedVirtualNetworkEnabled(value: boolean | cdktf.IResolvable) {
    this._managedVirtualNetworkEnabled = value;
  }
  public resetManagedVirtualNetworkEnabled() {
    this._managedVirtualNetworkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedVirtualNetworkEnabledInput() {
    return this._managedVirtualNetworkEnabled;
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

  // public_network_enabled - computed: false, optional: true, required: false
  private _publicNetworkEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkEnabled() {
    return this.getBooleanAttribute('public_network_enabled');
  }
  public set publicNetworkEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkEnabled = value;
  }
  public resetPublicNetworkEnabled() {
    this._publicNetworkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkEnabledInput() {
    return this._publicNetworkEnabled;
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

  // github_configuration - computed: false, optional: true, required: false
  private _githubConfiguration = new DataFactoryGithubConfigurationOutputReference(this, "github_configuration");
  public get githubConfiguration() {
    return this._githubConfiguration;
  }
  public putGithubConfiguration(value: DataFactoryGithubConfiguration) {
    this._githubConfiguration.internalValue = value;
  }
  public resetGithubConfiguration() {
    this._githubConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubConfigurationInput() {
    return this._githubConfiguration.internalValue;
  }

  // global_parameter - computed: false, optional: true, required: false
  private _globalParameter?: DataFactoryGlobalParameter[] | cdktf.IResolvable; 
  public get globalParameter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('global_parameter')));
  }
  public set globalParameter(value: DataFactoryGlobalParameter[] | cdktf.IResolvable) {
    this._globalParameter = value;
  }
  public resetGlobalParameter() {
    this._globalParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalParameterInput() {
    return this._globalParameter;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new DataFactoryIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: DataFactoryIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFactoryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFactoryTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vsts_configuration - computed: false, optional: true, required: false
  private _vstsConfiguration = new DataFactoryVstsConfigurationOutputReference(this, "vsts_configuration");
  public get vstsConfiguration() {
    return this._vstsConfiguration;
  }
  public putVstsConfiguration(value: DataFactoryVstsConfiguration) {
    this._vstsConfiguration.internalValue = value;
  }
  public resetVstsConfiguration() {
    this._vstsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vstsConfigurationInput() {
    return this._vstsConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_managed_key_id: cdktf.stringToTerraform(this._customerManagedKeyId),
      location: cdktf.stringToTerraform(this._location),
      managed_virtual_network_enabled: cdktf.booleanToTerraform(this._managedVirtualNetworkEnabled),
      name: cdktf.stringToTerraform(this._name),
      public_network_enabled: cdktf.booleanToTerraform(this._publicNetworkEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      github_configuration: dataFactoryGithubConfigurationToTerraform(this._githubConfiguration.internalValue),
      global_parameter: cdktf.listMapper(dataFactoryGlobalParameterToTerraform)(this._globalParameter),
      identity: dataFactoryIdentityToTerraform(this._identity.internalValue),
      timeouts: dataFactoryTimeoutsToTerraform(this._timeouts.internalValue),
      vsts_configuration: dataFactoryVstsConfigurationToTerraform(this._vstsConfiguration.internalValue),
    };
  }
}
