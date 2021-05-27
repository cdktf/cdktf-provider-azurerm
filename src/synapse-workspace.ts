// https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#aad_admin SynapseWorkspace#aad_admin}
  */
  readonly aadAdmin?: SynapseWorkspaceAadAdmin[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#customer_managed_key_versionless_id SynapseWorkspace#customer_managed_key_versionless_id}
  */
  readonly customerManagedKeyVersionlessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#location SynapseWorkspace#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#managed_resource_group_name SynapseWorkspace#managed_resource_group_name}
  */
  readonly managedResourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#managed_virtual_network_enabled SynapseWorkspace#managed_virtual_network_enabled}
  */
  readonly managedVirtualNetworkEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#name SynapseWorkspace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#resource_group_name SynapseWorkspace#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#sql_administrator_login SynapseWorkspace#sql_administrator_login}
  */
  readonly sqlAdministratorLogin: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#sql_administrator_login_password SynapseWorkspace#sql_administrator_login_password}
  */
  readonly sqlAdministratorLoginPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#sql_identity_control_enabled SynapseWorkspace#sql_identity_control_enabled}
  */
  readonly sqlIdentityControlEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#storage_data_lake_gen2_filesystem_id SynapseWorkspace#storage_data_lake_gen2_filesystem_id}
  */
  readonly storageDataLakeGen2FilesystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#tags SynapseWorkspace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * azure_devops_repo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#azure_devops_repo SynapseWorkspace#azure_devops_repo}
  */
  readonly azureDevopsRepo?: SynapseWorkspaceAzureDevopsRepo[];
  /**
  * github_repo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#github_repo SynapseWorkspace#github_repo}
  */
  readonly githubRepo?: SynapseWorkspaceGithubRepo[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#timeouts SynapseWorkspace#timeouts}
  */
  readonly timeouts?: SynapseWorkspaceTimeouts;
}
export interface SynapseWorkspaceAadAdmin {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#login SynapseWorkspace#login}
  */
  readonly login?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#object_id SynapseWorkspace#object_id}
  */
  readonly objectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#tenant_id SynapseWorkspace#tenant_id}
  */
  readonly tenantId?: string;
}

function synapseWorkspaceAadAdminToTerraform(struct?: SynapseWorkspaceAadAdmin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    login: struct!.login === undefined ? null : cdktf.stringToTerraform(struct!.login),
    object_id: struct!.objectId === undefined ? null : cdktf.stringToTerraform(struct!.objectId),
    tenant_id: struct!.tenantId === undefined ? null : cdktf.stringToTerraform(struct!.tenantId),
  }
}

export class SynapseWorkspaceIdentity extends cdktf.ComplexComputedList {

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
export interface SynapseWorkspaceAzureDevopsRepo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#account_name SynapseWorkspace#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#branch_name SynapseWorkspace#branch_name}
  */
  readonly branchName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#project_name SynapseWorkspace#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#repository_name SynapseWorkspace#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#root_folder SynapseWorkspace#root_folder}
  */
  readonly rootFolder: string;
}

function synapseWorkspaceAzureDevopsRepoToTerraform(struct?: SynapseWorkspaceAzureDevopsRepo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    root_folder: cdktf.stringToTerraform(struct!.rootFolder),
  }
}

export interface SynapseWorkspaceGithubRepo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#account_name SynapseWorkspace#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#branch_name SynapseWorkspace#branch_name}
  */
  readonly branchName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#git_url SynapseWorkspace#git_url}
  */
  readonly gitUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#repository_name SynapseWorkspace#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#root_folder SynapseWorkspace#root_folder}
  */
  readonly rootFolder: string;
}

function synapseWorkspaceGithubRepoToTerraform(struct?: SynapseWorkspaceGithubRepo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    git_url: cdktf.stringToTerraform(struct!.gitUrl),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    root_folder: cdktf.stringToTerraform(struct!.rootFolder),
  }
}

export interface SynapseWorkspaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#create SynapseWorkspace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#delete SynapseWorkspace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#read SynapseWorkspace#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#update SynapseWorkspace#update}
  */
  readonly update?: string;
}

function synapseWorkspaceTimeoutsToTerraform(struct?: SynapseWorkspaceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html azurerm_synapse_workspace}
*/
export class SynapseWorkspace extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html azurerm_synapse_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: SynapseWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_workspace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._aadAdmin = config.aadAdmin;
    this._customerManagedKeyVersionlessId = config.customerManagedKeyVersionlessId;
    this._location = config.location;
    this._managedResourceGroupName = config.managedResourceGroupName;
    this._managedVirtualNetworkEnabled = config.managedVirtualNetworkEnabled;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sqlAdministratorLogin = config.sqlAdministratorLogin;
    this._sqlAdministratorLoginPassword = config.sqlAdministratorLoginPassword;
    this._sqlIdentityControlEnabled = config.sqlIdentityControlEnabled;
    this._storageDataLakeGen2FilesystemId = config.storageDataLakeGen2FilesystemId;
    this._tags = config.tags;
    this._azureDevopsRepo = config.azureDevopsRepo;
    this._githubRepo = config.githubRepo;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aad_admin - computed: true, optional: true, required: false
  private _aadAdmin?: SynapseWorkspaceAadAdmin[]
  public get aadAdmin(): SynapseWorkspaceAadAdmin[] {
    return this.interpolationForAttribute('aad_admin') as any; // Getting the computed value is not yet implemented
  }
  public set aadAdmin(value: SynapseWorkspaceAadAdmin[]) {
    this._aadAdmin = value;
  }
  public resetAadAdmin() {
    this._aadAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadAdminInput() {
    return this._aadAdmin
  }

  // connectivity_endpoints - computed: true, optional: false, required: false
  public connectivityEndpoints(key: string): string {
    return new cdktf.StringMap(this, 'connectivity_endpoints').lookup(key);
  }

  // customer_managed_key_versionless_id - computed: false, optional: true, required: false
  private _customerManagedKeyVersionlessId?: string;
  public get customerManagedKeyVersionlessId() {
    return this.getStringAttribute('customer_managed_key_versionless_id');
  }
  public set customerManagedKeyVersionlessId(value: string ) {
    this._customerManagedKeyVersionlessId = value;
  }
  public resetCustomerManagedKeyVersionlessId() {
    this._customerManagedKeyVersionlessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyVersionlessIdInput() {
    return this._customerManagedKeyVersionlessId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public identity(index: string) {
    return new SynapseWorkspaceIdentity(this, 'identity', index);
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

  // managed_resource_group_name - computed: true, optional: true, required: false
  private _managedResourceGroupName?: string;
  public get managedResourceGroupName() {
    return this.getStringAttribute('managed_resource_group_name');
  }
  public set managedResourceGroupName(value: string) {
    this._managedResourceGroupName = value;
  }
  public resetManagedResourceGroupName() {
    this._managedResourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourceGroupNameInput() {
    return this._managedResourceGroupName
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

  // sql_administrator_login - computed: false, optional: false, required: true
  private _sqlAdministratorLogin: string;
  public get sqlAdministratorLogin() {
    return this.getStringAttribute('sql_administrator_login');
  }
  public set sqlAdministratorLogin(value: string) {
    this._sqlAdministratorLogin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlAdministratorLoginInput() {
    return this._sqlAdministratorLogin
  }

  // sql_administrator_login_password - computed: false, optional: false, required: true
  private _sqlAdministratorLoginPassword: string;
  public get sqlAdministratorLoginPassword() {
    return this.getStringAttribute('sql_administrator_login_password');
  }
  public set sqlAdministratorLoginPassword(value: string) {
    this._sqlAdministratorLoginPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlAdministratorLoginPasswordInput() {
    return this._sqlAdministratorLoginPassword
  }

  // sql_identity_control_enabled - computed: false, optional: true, required: false
  private _sqlIdentityControlEnabled?: boolean;
  public get sqlIdentityControlEnabled() {
    return this.getBooleanAttribute('sql_identity_control_enabled');
  }
  public set sqlIdentityControlEnabled(value: boolean ) {
    this._sqlIdentityControlEnabled = value;
  }
  public resetSqlIdentityControlEnabled() {
    this._sqlIdentityControlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlIdentityControlEnabledInput() {
    return this._sqlIdentityControlEnabled
  }

  // storage_data_lake_gen2_filesystem_id - computed: false, optional: false, required: true
  private _storageDataLakeGen2FilesystemId: string;
  public get storageDataLakeGen2FilesystemId() {
    return this.getStringAttribute('storage_data_lake_gen2_filesystem_id');
  }
  public set storageDataLakeGen2FilesystemId(value: string) {
    this._storageDataLakeGen2FilesystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDataLakeGen2FilesystemIdInput() {
    return this._storageDataLakeGen2FilesystemId
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

  // azure_devops_repo - computed: false, optional: true, required: false
  private _azureDevopsRepo?: SynapseWorkspaceAzureDevopsRepo[];
  public get azureDevopsRepo() {
    return this.interpolationForAttribute('azure_devops_repo') as any;
  }
  public set azureDevopsRepo(value: SynapseWorkspaceAzureDevopsRepo[] ) {
    this._azureDevopsRepo = value;
  }
  public resetAzureDevopsRepo() {
    this._azureDevopsRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDevopsRepoInput() {
    return this._azureDevopsRepo
  }

  // github_repo - computed: false, optional: true, required: false
  private _githubRepo?: SynapseWorkspaceGithubRepo[];
  public get githubRepo() {
    return this.interpolationForAttribute('github_repo') as any;
  }
  public set githubRepo(value: SynapseWorkspaceGithubRepo[] ) {
    this._githubRepo = value;
  }
  public resetGithubRepo() {
    this._githubRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubRepoInput() {
    return this._githubRepo
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SynapseWorkspaceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SynapseWorkspaceTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aad_admin: cdktf.listMapper(synapseWorkspaceAadAdminToTerraform)(this._aadAdmin),
      customer_managed_key_versionless_id: cdktf.stringToTerraform(this._customerManagedKeyVersionlessId),
      location: cdktf.stringToTerraform(this._location),
      managed_resource_group_name: cdktf.stringToTerraform(this._managedResourceGroupName),
      managed_virtual_network_enabled: cdktf.booleanToTerraform(this._managedVirtualNetworkEnabled),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sql_administrator_login: cdktf.stringToTerraform(this._sqlAdministratorLogin),
      sql_administrator_login_password: cdktf.stringToTerraform(this._sqlAdministratorLoginPassword),
      sql_identity_control_enabled: cdktf.booleanToTerraform(this._sqlIdentityControlEnabled),
      storage_data_lake_gen2_filesystem_id: cdktf.stringToTerraform(this._storageDataLakeGen2FilesystemId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      azure_devops_repo: cdktf.listMapper(synapseWorkspaceAzureDevopsRepoToTerraform)(this._azureDevopsRepo),
      github_repo: cdktf.listMapper(synapseWorkspaceGithubRepoToTerraform)(this._githubRepo),
      timeouts: synapseWorkspaceTimeoutsToTerraform(this._timeouts),
    };
  }
}
