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
  readonly managedVirtualNetworkEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#name DataFactory#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#public_network_enabled DataFactory#public_network_enabled}
  */
  readonly publicNetworkEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#resource_group_name DataFactory#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#tags DataFactory#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * github_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html#github_configuration DataFactory#github_configuration}
  */
  readonly githubConfiguration?: DataFactoryGithubConfiguration[];
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
  readonly identity?: DataFactoryIdentity[];
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
  readonly vstsConfiguration?: DataFactoryVstsConfiguration[];
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

function dataFactoryGithubConfigurationToTerraform(struct?: DataFactoryGithubConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    git_url: cdktf.stringToTerraform(struct!.gitUrl),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    root_folder: cdktf.stringToTerraform(struct!.rootFolder),
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

function dataFactoryIdentityToTerraform(struct?: DataFactoryIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
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

function dataFactoryTimeoutsToTerraform(struct?: DataFactoryTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
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

function dataFactoryVstsConfigurationToTerraform(struct?: DataFactoryVstsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    root_folder: cdktf.stringToTerraform(struct!.rootFolder),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory.html azurerm_data_factory}
*/
export class DataFactory extends cdktf.TerraformResource {

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
  private _customerManagedKeyId?: string;
  public get customerManagedKeyId() {
    return this.getStringAttribute('customer_managed_key_id');
  }
  public set customerManagedKeyId(value: string ) {
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
  private _location: string;
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
  private _managedVirtualNetworkEnabled?: boolean;
  public get managedVirtualNetworkEnabled() {
    return this.getBooleanAttribute('managed_virtual_network_enabled');
  }
  public set managedVirtualNetworkEnabled(value: boolean ) {
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
  private _name: string;
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
  private _publicNetworkEnabled?: boolean;
  public get publicNetworkEnabled() {
    return this.getBooleanAttribute('public_network_enabled');
  }
  public set publicNetworkEnabled(value: boolean ) {
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
  private _resourceGroupName: string;
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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
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
  private _githubConfiguration?: DataFactoryGithubConfiguration[];
  public get githubConfiguration() {
    return this.interpolationForAttribute('github_configuration') as any;
  }
  public set githubConfiguration(value: DataFactoryGithubConfiguration[] ) {
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
  private _globalParameter?: DataFactoryGlobalParameter[];
  public get globalParameter() {
    return this.interpolationForAttribute('global_parameter') as any;
  }
  public set globalParameter(value: DataFactoryGlobalParameter[] ) {
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
  private _identity?: DataFactoryIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: DataFactoryIdentity[] ) {
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
  private _timeouts?: DataFactoryTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryTimeouts ) {
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
  private _vstsConfiguration?: DataFactoryVstsConfiguration[];
  public get vstsConfiguration() {
    return this.interpolationForAttribute('vsts_configuration') as any;
  }
  public set vstsConfiguration(value: DataFactoryVstsConfiguration[] ) {
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
      github_configuration: cdktf.listMapper(dataFactoryGithubConfigurationToTerraform)(this._githubConfiguration),
      global_parameter: cdktf.listMapper(dataFactoryGlobalParameterToTerraform)(this._globalParameter),
      identity: cdktf.listMapper(dataFactoryIdentityToTerraform)(this._identity),
      timeouts: dataFactoryTimeoutsToTerraform(this._timeouts),
      vsts_configuration: cdktf.listMapper(dataFactoryVstsConfigurationToTerraform)(this._vstsConfiguration),
    };
  }
}
