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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#compute_subnet_id SynapseWorkspace#compute_subnet_id}
  */
  readonly computeSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#data_exfiltration_protection_enabled SynapseWorkspace#data_exfiltration_protection_enabled}
  */
  readonly dataExfiltrationProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#linking_allowed_for_aad_tenant_ids SynapseWorkspace#linking_allowed_for_aad_tenant_ids}
  */
  readonly linkingAllowedForAadTenantIds?: string[];
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
  readonly managedVirtualNetworkEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#name SynapseWorkspace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#public_network_access_enabled SynapseWorkspace#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#purview_id SynapseWorkspace#purview_id}
  */
  readonly purviewId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#resource_group_name SynapseWorkspace#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#sql_aad_admin SynapseWorkspace#sql_aad_admin}
  */
  readonly sqlAadAdmin?: SynapseWorkspaceSqlAadAdmin[];
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
  readonly sqlIdentityControlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#storage_data_lake_gen2_filesystem_id SynapseWorkspace#storage_data_lake_gen2_filesystem_id}
  */
  readonly storageDataLakeGen2FilesystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#tags SynapseWorkspace#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * azure_devops_repo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#azure_devops_repo SynapseWorkspace#azure_devops_repo}
  */
  readonly azureDevopsRepo?: SynapseWorkspaceAzureDevopsRepo;
  /**
  * customer_managed_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#customer_managed_key SynapseWorkspace#customer_managed_key}
  */
  readonly customerManagedKey?: SynapseWorkspaceCustomerManagedKey;
  /**
  * github_repo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#github_repo SynapseWorkspace#github_repo}
  */
  readonly githubRepo?: SynapseWorkspaceGithubRepo;
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
export interface SynapseWorkspaceSqlAadAdmin {
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

function synapseWorkspaceSqlAadAdminToTerraform(struct?: SynapseWorkspaceSqlAadAdmin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login: cdktf.stringToTerraform(struct!.login),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#last_commit_id SynapseWorkspace#last_commit_id}
  */
  readonly lastCommitId?: string;
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#tenant_id SynapseWorkspace#tenant_id}
  */
  readonly tenantId?: string;
}

function synapseWorkspaceAzureDevopsRepoToTerraform(struct?: SynapseWorkspaceAzureDevopsRepoOutputReference | SynapseWorkspaceAzureDevopsRepo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    last_commit_id: cdktf.stringToTerraform(struct!.lastCommitId),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    root_folder: cdktf.stringToTerraform(struct!.rootFolder),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export class SynapseWorkspaceAzureDevopsRepoOutputReference extends cdktf.ComplexObject {
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

  // last_commit_id - computed: false, optional: true, required: false
  private _lastCommitId?: string | undefined; 
  public get lastCommitId() {
    return this.getStringAttribute('last_commit_id');
  }
  public set lastCommitId(value: string | undefined) {
    this._lastCommitId = value;
  }
  public resetLastCommitId() {
    this._lastCommitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastCommitIdInput() {
    return this._lastCommitId
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

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string | undefined; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }
}
export interface SynapseWorkspaceCustomerManagedKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#key_name SynapseWorkspace#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#key_versionless_id SynapseWorkspace#key_versionless_id}
  */
  readonly keyVersionlessId: string;
}

function synapseWorkspaceCustomerManagedKeyToTerraform(struct?: SynapseWorkspaceCustomerManagedKeyOutputReference | SynapseWorkspaceCustomerManagedKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    key_versionless_id: cdktf.stringToTerraform(struct!.keyVersionlessId),
  }
}

export class SynapseWorkspaceCustomerManagedKeyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string | undefined; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string | undefined) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName
  }

  // key_versionless_id - computed: false, optional: false, required: true
  private _keyVersionlessId?: string; 
  public get keyVersionlessId() {
    return this.getStringAttribute('key_versionless_id');
  }
  public set keyVersionlessId(value: string) {
    this._keyVersionlessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionlessIdInput() {
    return this._keyVersionlessId
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#last_commit_id SynapseWorkspace#last_commit_id}
  */
  readonly lastCommitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#repository_name SynapseWorkspace#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html#root_folder SynapseWorkspace#root_folder}
  */
  readonly rootFolder: string;
}

function synapseWorkspaceGithubRepoToTerraform(struct?: SynapseWorkspaceGithubRepoOutputReference | SynapseWorkspaceGithubRepo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    git_url: cdktf.stringToTerraform(struct!.gitUrl),
    last_commit_id: cdktf.stringToTerraform(struct!.lastCommitId),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    root_folder: cdktf.stringToTerraform(struct!.rootFolder),
  }
}

export class SynapseWorkspaceGithubRepoOutputReference extends cdktf.ComplexObject {
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

  // git_url - computed: false, optional: true, required: false
  private _gitUrl?: string | undefined; 
  public get gitUrl() {
    return this.getStringAttribute('git_url');
  }
  public set gitUrl(value: string | undefined) {
    this._gitUrl = value;
  }
  public resetGitUrl() {
    this._gitUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitUrlInput() {
    return this._gitUrl
  }

  // last_commit_id - computed: false, optional: true, required: false
  private _lastCommitId?: string | undefined; 
  public get lastCommitId() {
    return this.getStringAttribute('last_commit_id');
  }
  public set lastCommitId(value: string | undefined) {
    this._lastCommitId = value;
  }
  public resetLastCommitId() {
    this._lastCommitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastCommitIdInput() {
    return this._lastCommitId
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

function synapseWorkspaceTimeoutsToTerraform(struct?: SynapseWorkspaceTimeoutsOutputReference | SynapseWorkspaceTimeouts): any {
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

export class SynapseWorkspaceTimeoutsOutputReference extends cdktf.ComplexObject {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html azurerm_synapse_workspace}
*/
export class SynapseWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_synapse_workspace";

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
    this._computeSubnetId = config.computeSubnetId;
    this._dataExfiltrationProtectionEnabled = config.dataExfiltrationProtectionEnabled;
    this._linkingAllowedForAadTenantIds = config.linkingAllowedForAadTenantIds;
    this._location = config.location;
    this._managedResourceGroupName = config.managedResourceGroupName;
    this._managedVirtualNetworkEnabled = config.managedVirtualNetworkEnabled;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._purviewId = config.purviewId;
    this._resourceGroupName = config.resourceGroupName;
    this._sqlAadAdmin = config.sqlAadAdmin;
    this._sqlAdministratorLogin = config.sqlAdministratorLogin;
    this._sqlAdministratorLoginPassword = config.sqlAdministratorLoginPassword;
    this._sqlIdentityControlEnabled = config.sqlIdentityControlEnabled;
    this._storageDataLakeGen2FilesystemId = config.storageDataLakeGen2FilesystemId;
    this._tags = config.tags;
    this._azureDevopsRepo = config.azureDevopsRepo;
    this._customerManagedKey = config.customerManagedKey;
    this._githubRepo = config.githubRepo;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aad_admin - computed: true, optional: true, required: false
  private _aadAdmin?: SynapseWorkspaceAadAdmin[] | undefined; 
  public get aadAdmin() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('aad_admin') as any;
  }
  public set aadAdmin(value: SynapseWorkspaceAadAdmin[] | undefined) {
    this._aadAdmin = value;
  }
  public resetAadAdmin() {
    this._aadAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadAdminInput() {
    return this._aadAdmin
  }

  // compute_subnet_id - computed: false, optional: true, required: false
  private _computeSubnetId?: string | undefined; 
  public get computeSubnetId() {
    return this.getStringAttribute('compute_subnet_id');
  }
  public set computeSubnetId(value: string | undefined) {
    this._computeSubnetId = value;
  }
  public resetComputeSubnetId() {
    this._computeSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeSubnetIdInput() {
    return this._computeSubnetId
  }

  // connectivity_endpoints - computed: true, optional: false, required: false
  public connectivityEndpoints(key: string): string {
    return new cdktf.StringMap(this, 'connectivity_endpoints').lookup(key);
  }

  // data_exfiltration_protection_enabled - computed: false, optional: true, required: false
  private _dataExfiltrationProtectionEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get dataExfiltrationProtectionEnabled() {
    return this.getBooleanAttribute('data_exfiltration_protection_enabled') as any;
  }
  public set dataExfiltrationProtectionEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._dataExfiltrationProtectionEnabled = value;
  }
  public resetDataExfiltrationProtectionEnabled() {
    this._dataExfiltrationProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExfiltrationProtectionEnabledInput() {
    return this._dataExfiltrationProtectionEnabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public identity(index: string) {
    return new SynapseWorkspaceIdentity(this, 'identity', index);
  }

  // linking_allowed_for_aad_tenant_ids - computed: false, optional: true, required: false
  private _linkingAllowedForAadTenantIds?: string[] | undefined; 
  public get linkingAllowedForAadTenantIds() {
    return this.getListAttribute('linking_allowed_for_aad_tenant_ids');
  }
  public set linkingAllowedForAadTenantIds(value: string[] | undefined) {
    this._linkingAllowedForAadTenantIds = value;
  }
  public resetLinkingAllowedForAadTenantIds() {
    this._linkingAllowedForAadTenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkingAllowedForAadTenantIdsInput() {
    return this._linkingAllowedForAadTenantIds
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

  // managed_resource_group_name - computed: true, optional: true, required: false
  private _managedResourceGroupName?: string | undefined; 
  public get managedResourceGroupName() {
    return this.getStringAttribute('managed_resource_group_name');
  }
  public set managedResourceGroupName(value: string | undefined) {
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

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled') as any;
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled
  }

  // purview_id - computed: false, optional: true, required: false
  private _purviewId?: string | undefined; 
  public get purviewId() {
    return this.getStringAttribute('purview_id');
  }
  public set purviewId(value: string | undefined) {
    this._purviewId = value;
  }
  public resetPurviewId() {
    this._purviewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purviewIdInput() {
    return this._purviewId
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

  // sql_aad_admin - computed: true, optional: true, required: false
  private _sqlAadAdmin?: SynapseWorkspaceSqlAadAdmin[] | undefined; 
  public get sqlAadAdmin() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sql_aad_admin') as any;
  }
  public set sqlAadAdmin(value: SynapseWorkspaceSqlAadAdmin[] | undefined) {
    this._sqlAadAdmin = value;
  }
  public resetSqlAadAdmin() {
    this._sqlAadAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlAadAdminInput() {
    return this._sqlAadAdmin
  }

  // sql_administrator_login - computed: false, optional: false, required: true
  private _sqlAdministratorLogin?: string; 
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
  private _sqlAdministratorLoginPassword?: string; 
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
  private _sqlIdentityControlEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get sqlIdentityControlEnabled() {
    return this.getBooleanAttribute('sql_identity_control_enabled') as any;
  }
  public set sqlIdentityControlEnabled(value: boolean | cdktf.IResolvable | undefined) {
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
  private _storageDataLakeGen2FilesystemId?: string; 
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

  // azure_devops_repo - computed: false, optional: true, required: false
  private _azureDevopsRepo?: SynapseWorkspaceAzureDevopsRepo | undefined; 
  private __azureDevopsRepoOutput = new SynapseWorkspaceAzureDevopsRepoOutputReference(this as any, "azure_devops_repo", true);
  public get azureDevopsRepo() {
    return this.__azureDevopsRepoOutput;
  }
  public putAzureDevopsRepo(value: SynapseWorkspaceAzureDevopsRepo | undefined) {
    this._azureDevopsRepo = value;
  }
  public resetAzureDevopsRepo() {
    this._azureDevopsRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDevopsRepoInput() {
    return this._azureDevopsRepo
  }

  // customer_managed_key - computed: false, optional: true, required: false
  private _customerManagedKey?: SynapseWorkspaceCustomerManagedKey | undefined; 
  private __customerManagedKeyOutput = new SynapseWorkspaceCustomerManagedKeyOutputReference(this as any, "customer_managed_key", true);
  public get customerManagedKey() {
    return this.__customerManagedKeyOutput;
  }
  public putCustomerManagedKey(value: SynapseWorkspaceCustomerManagedKey | undefined) {
    this._customerManagedKey = value;
  }
  public resetCustomerManagedKey() {
    this._customerManagedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyInput() {
    return this._customerManagedKey
  }

  // github_repo - computed: false, optional: true, required: false
  private _githubRepo?: SynapseWorkspaceGithubRepo | undefined; 
  private __githubRepoOutput = new SynapseWorkspaceGithubRepoOutputReference(this as any, "github_repo", true);
  public get githubRepo() {
    return this.__githubRepoOutput;
  }
  public putGithubRepo(value: SynapseWorkspaceGithubRepo | undefined) {
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
  private _timeouts?: SynapseWorkspaceTimeouts | undefined; 
  private __timeoutsOutput = new SynapseWorkspaceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SynapseWorkspaceTimeouts | undefined) {
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
      compute_subnet_id: cdktf.stringToTerraform(this._computeSubnetId),
      data_exfiltration_protection_enabled: cdktf.booleanToTerraform(this._dataExfiltrationProtectionEnabled),
      linking_allowed_for_aad_tenant_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._linkingAllowedForAadTenantIds),
      location: cdktf.stringToTerraform(this._location),
      managed_resource_group_name: cdktf.stringToTerraform(this._managedResourceGroupName),
      managed_virtual_network_enabled: cdktf.booleanToTerraform(this._managedVirtualNetworkEnabled),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      purview_id: cdktf.stringToTerraform(this._purviewId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sql_aad_admin: cdktf.listMapper(synapseWorkspaceSqlAadAdminToTerraform)(this._sqlAadAdmin),
      sql_administrator_login: cdktf.stringToTerraform(this._sqlAdministratorLogin),
      sql_administrator_login_password: cdktf.stringToTerraform(this._sqlAdministratorLoginPassword),
      sql_identity_control_enabled: cdktf.booleanToTerraform(this._sqlIdentityControlEnabled),
      storage_data_lake_gen2_filesystem_id: cdktf.stringToTerraform(this._storageDataLakeGen2FilesystemId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      azure_devops_repo: synapseWorkspaceAzureDevopsRepoToTerraform(this._azureDevopsRepo),
      customer_managed_key: synapseWorkspaceCustomerManagedKeyToTerraform(this._customerManagedKey),
      github_repo: synapseWorkspaceGithubRepoToTerraform(this._githubRepo),
      timeouts: synapseWorkspaceTimeoutsToTerraform(this._timeouts),
    };
  }
}
