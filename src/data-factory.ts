// https://www.terraform.io/docs/providers/azurerm/r/data_factory.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#customer_managed_key_id DataFactory#customer_managed_key_id}
  */
  readonly customerManagedKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#location DataFactory#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#managed_virtual_network_enabled DataFactory#managed_virtual_network_enabled}
  */
  readonly managedVirtualNetworkEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#name DataFactory#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#public_network_enabled DataFactory#public_network_enabled}
  */
  readonly publicNetworkEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#resource_group_name DataFactory#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#tags DataFactory#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * github_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#github_configuration DataFactory#github_configuration}
  */
  readonly githubConfiguration?: DataFactoryGithubConfiguration;
  /**
  * global_parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#global_parameter DataFactory#global_parameter}
  */
  readonly globalParameter?: DataFactoryGlobalParameter[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#identity DataFactory#identity}
  */
  readonly identity?: DataFactoryIdentity;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#timeouts DataFactory#timeouts}
  */
  readonly timeouts?: DataFactoryTimeouts;
  /**
  * vsts_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#vsts_configuration DataFactory#vsts_configuration}
  */
  readonly vstsConfiguration?: DataFactoryVstsConfiguration;
}
export interface DataFactoryGithubConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#account_name DataFactory#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#branch_name DataFactory#branch_name}
  */
  readonly branchName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#git_url DataFactory#git_url}
  */
  readonly gitUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#repository_name DataFactory#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#root_folder DataFactory#root_folder}
  */
  readonly rootFolder: string;
}

function dataFactoryGithubConfigurationToTerraform(struct?: DataFactoryGithubConfigurationOutputReference | DataFactoryGithubConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._accountName
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
    return this._branchName
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
    return this._gitUrl
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
    return this._repositoryName
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
    return this._rootFolder
  }
}
export interface DataFactoryGlobalParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#name DataFactory#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#type DataFactory#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#value DataFactory#value}
  */
  readonly value: string;
}

function dataFactoryGlobalParameterToTerraform(struct?: DataFactoryGlobalParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#identity_ids DataFactory#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#type DataFactory#type}
  */
  readonly type: string;
}

function dataFactoryIdentityToTerraform(struct?: DataFactoryIdentityOutputReference | DataFactoryIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataFactoryIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[] | undefined; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[] | undefined) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds
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
    return this._type
  }
}
export interface DataFactoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#create DataFactory#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#delete DataFactory#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#read DataFactory#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#update DataFactory#update}
  */
  readonly update?: string;
}

function dataFactoryTimeoutsToTerraform(struct?: DataFactoryTimeoutsOutputReference | DataFactoryTimeouts): any {
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

export class DataFactoryTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryVstsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#account_name DataFactory#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#branch_name DataFactory#branch_name}
  */
  readonly branchName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#project_name DataFactory#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#repository_name DataFactory#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#root_folder DataFactory#root_folder}
  */
  readonly rootFolder: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#tenant_id DataFactory#tenant_id}
  */
  readonly tenantId: string;
}

function dataFactoryVstsConfigurationToTerraform(struct?: DataFactoryVstsConfigurationOutputReference | DataFactoryVstsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._accountName
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
    return this._branchName
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
    return this._projectName
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
    return this._repositoryName
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
    return this._rootFolder
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
    return this._tenantId
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html azurerm_data_factory}
*/
export class DataFactory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html azurerm_data_factory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
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
    this._githubConfiguration = config.githubConfiguration;
    this._globalParameter = config.globalParameter;
    this._identity = config.identity;
    this._timeouts = config.timeouts;
    this._vstsConfiguration = config.vstsConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_managed_key_id - computed: false, optional: true, required: false
  private _customerManagedKeyId?: string | undefined; 
  public get customerManagedKeyId() {
    return this.getStringAttribute('customer_managed_key_id');
  }
  public set customerManagedKeyId(value: string | undefined) {
    this._customerManagedKeyId = value;
  }
  public resetCustomerManagedKeyId() {
    this._customerManagedKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyIdInput() {
    return this._customerManagedKeyId
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
    return this._location
  }

  // managed_virtual_network_enabled - computed: false, optional: true, required: false
  private _managedVirtualNetworkEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get managedVirtualNetworkEnabled() {
    return this.getBooleanAttribute('managed_virtual_network_enabled') as any;
  }
  public set managedVirtualNetworkEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._managedVirtualNetworkEnabled = value;
  }
  public resetManagedVirtualNetworkEnabled() {
    this._managedVirtualNetworkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedVirtualNetworkEnabledInput() {
    return this._managedVirtualNetworkEnabled
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

  // public_network_enabled - computed: false, optional: true, required: false
  private _publicNetworkEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get publicNetworkEnabled() {
    return this.getBooleanAttribute('public_network_enabled') as any;
  }
  public set publicNetworkEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._publicNetworkEnabled = value;
  }
  public resetPublicNetworkEnabled() {
    this._publicNetworkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkEnabledInput() {
    return this._publicNetworkEnabled
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

  // github_configuration - computed: false, optional: true, required: false
  private _githubConfiguration?: DataFactoryGithubConfiguration | undefined; 
  private __githubConfigurationOutput = new DataFactoryGithubConfigurationOutputReference(this as any, "github_configuration", true);
  public get githubConfiguration() {
    return this.__githubConfigurationOutput;
  }
  public putGithubConfiguration(value: DataFactoryGithubConfiguration | undefined) {
    this._githubConfiguration = value;
  }
  public resetGithubConfiguration() {
    this._githubConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubConfigurationInput() {
    return this._githubConfiguration
  }

  // global_parameter - computed: false, optional: true, required: false
  private _globalParameter?: DataFactoryGlobalParameter[] | undefined; 
  public get globalParameter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('global_parameter') as any;
  }
  public set globalParameter(value: DataFactoryGlobalParameter[] | undefined) {
    this._globalParameter = value;
  }
  public resetGlobalParameter() {
    this._globalParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalParameterInput() {
    return this._globalParameter
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: DataFactoryIdentity | undefined; 
  private __identityOutput = new DataFactoryIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: DataFactoryIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryTimeouts | undefined; 
  private __timeoutsOutput = new DataFactoryTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataFactoryTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // vsts_configuration - computed: false, optional: true, required: false
  private _vstsConfiguration?: DataFactoryVstsConfiguration | undefined; 
  private __vstsConfigurationOutput = new DataFactoryVstsConfigurationOutputReference(this as any, "vsts_configuration", true);
  public get vstsConfiguration() {
    return this.__vstsConfigurationOutput;
  }
  public putVstsConfiguration(value: DataFactoryVstsConfiguration | undefined) {
    this._vstsConfiguration = value;
  }
  public resetVstsConfiguration() {
    this._vstsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vstsConfigurationInput() {
    return this._vstsConfiguration
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
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      github_configuration: dataFactoryGithubConfigurationToTerraform(this._githubConfiguration),
      global_parameter: cdktf.listMapper(dataFactoryGlobalParameterToTerraform)(this._globalParameter),
      identity: dataFactoryIdentityToTerraform(this._identity),
      timeouts: dataFactoryTimeoutsToTerraform(this._timeouts),
      vsts_configuration: dataFactoryVstsConfigurationToTerraform(this._vstsConfiguration),
    };
  }
}
