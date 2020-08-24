// https://www.terraform.io/docs/providers/azurerm/r/data_factory.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataFactoryConfig extends TerraformMetaArguments {
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
export interface DataFactoryIdentity {
  readonly type: string;
}
export interface DataFactoryTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface DataFactoryVstsConfiguration {
  readonly accountName: string;
  readonly branchName: string;
  readonly projectName: string;
  readonly repositoryName: string;
  readonly rootFolder: string;
  readonly tenantId: string;
}

// Resource

export class DataFactory extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // github_configuration - computed: false, optional: true, required: false
  private _githubConfiguration?: DataFactoryGithubConfiguration[];
  public get githubConfiguration() {
    return this._githubConfiguration;
  }
  public set githubConfiguration(value: DataFactoryGithubConfiguration[] | undefined) {
    this._githubConfiguration = value;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: DataFactoryIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: DataFactoryIdentity[] | undefined) {
    this._identity = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataFactoryTimeouts | undefined) {
    this._timeouts = value;
  }

  // vsts_configuration - computed: false, optional: true, required: false
  private _vstsConfiguration?: DataFactoryVstsConfiguration[];
  public get vstsConfiguration() {
    return this._vstsConfiguration;
  }
  public set vstsConfiguration(value: DataFactoryVstsConfiguration[] | undefined) {
    this._vstsConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      github_configuration: this._githubConfiguration,
      identity: this._identity,
      timeouts: this._timeouts,
      vsts_configuration: this._vstsConfiguration,
    };
  }
}
