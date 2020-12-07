// https://www.terraform.io/docs/providers/azurerm/r/data_factory.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** github_configuration block */
  readonly githubConfiguration?: DataFactoryGithubConfiguration[];
  /** identity block */
  readonly identity?: DataFactoryIdentity[];
  /** timeouts block */
  readonly timeouts?: DataFactoryTimeouts;
  /** vsts_configuration block */
  readonly vstsConfiguration?: DataFactoryVstsConfiguration[];
}
export interface DataFactoryGithubConfiguration {
  readonly accountName: string;
  readonly branchName: string;
  readonly gitUrl: string;
  readonly repositoryName: string;
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

export interface DataFactoryIdentity {
  readonly type: string;
}

function dataFactoryIdentityToTerraform(struct?: DataFactoryIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface DataFactoryTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
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
  readonly accountName: string;
  readonly branchName: string;
  readonly projectName: string;
  readonly repositoryName: string;
  readonly rootFolder: string;
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


// Resource

export class DataFactory extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._githubConfiguration = config.githubConfiguration;
    this._identity = config.identity;
    this._timeouts = config.timeouts;
    this._vstsConfiguration = config.vstsConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      github_configuration: cdktf.listMapper(dataFactoryGithubConfigurationToTerraform)(this._githubConfiguration),
      identity: cdktf.listMapper(dataFactoryIdentityToTerraform)(this._identity),
      timeouts: dataFactoryTimeoutsToTerraform(this._timeouts),
      vsts_configuration: cdktf.listMapper(dataFactoryVstsConfigurationToTerraform)(this._vstsConfiguration),
    };
  }
}
