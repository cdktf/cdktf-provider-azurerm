// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_data_factory.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermDataFactoryConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermDataFactoryTimeouts;
}
export class DataAzurermDataFactoryGithubConfiguration extends ComplexComputedList {

  // account_name - computed: true, optional: false, required: true
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // branch_name - computed: true, optional: false, required: true
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }

  // git_url - computed: true, optional: false, required: true
  public get gitUrl() {
    return this.getStringAttribute('git_url');
  }

  // repository_name - computed: true, optional: false, required: true
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }

  // root_folder - computed: true, optional: false, required: true
  public get rootFolder() {
    return this.getStringAttribute('root_folder');
  }
}
export class DataAzurermDataFactoryIdentity extends ComplexComputedList {

  // principal_id - computed: true, optional: false, required: true
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: true
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAzurermDataFactoryVstsConfiguration extends ComplexComputedList {

  // account_name - computed: true, optional: false, required: true
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // branch_name - computed: true, optional: false, required: true
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }

  // project_name - computed: true, optional: false, required: true
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // repository_name - computed: true, optional: false, required: true
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }

  // root_folder - computed: true, optional: false, required: true
  public get rootFolder() {
    return this.getStringAttribute('root_folder');
  }

  // tenant_id - computed: true, optional: false, required: true
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}
export interface DataAzurermDataFactoryTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermDataFactory extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermDataFactoryConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // github_configuration - computed: true, optional: false, required: true
  public githubConfiguration(index: string) {
    return new DataAzurermDataFactoryGithubConfiguration(this, 'github_configuration', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity - computed: true, optional: false, required: true
  public identity(index: string) {
    return new DataAzurermDataFactoryIdentity(this, 'identity', index);
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // vsts_configuration - computed: true, optional: false, required: true
  public vstsConfiguration(index: string) {
    return new DataAzurermDataFactoryVstsConfiguration(this, 'vsts_configuration', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermDataFactoryTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermDataFactoryTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
