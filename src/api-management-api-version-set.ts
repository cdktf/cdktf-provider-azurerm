// https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementApiVersionSetConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly description?: string;
  readonly displayName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly versionHeaderName?: string;
  readonly versionQueryName?: string;
  readonly versioningScheme: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementApiVersionSetTimeouts;
}
export interface ApiManagementApiVersionSetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementApiVersionSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementApiVersionSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_api_version_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._description = config.description;
    this._displayName = config.displayName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._versionHeaderName = config.versionHeaderName;
    this._versionQueryName = config.versionQueryName;
    this._versioningScheme = config.versioningScheme;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName: string;
  public get apiManagementName() {
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // version_header_name - computed: false, optional: true, required: false
  private _versionHeaderName?: string;
  public get versionHeaderName() {
    return this.getStringAttribute('version_header_name');
  }
  public set versionHeaderName(value: string ) {
    this._versionHeaderName = value;
  }
  public resetVersionHeaderName() {
    this._versionHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionHeaderNameInput() {
    return this._versionHeaderName
  }

  // version_query_name - computed: false, optional: true, required: false
  private _versionQueryName?: string;
  public get versionQueryName() {
    return this.getStringAttribute('version_query_name');
  }
  public set versionQueryName(value: string ) {
    this._versionQueryName = value;
  }
  public resetVersionQueryName() {
    this._versionQueryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionQueryNameInput() {
    return this._versionQueryName
  }

  // versioning_scheme - computed: false, optional: false, required: true
  private _versioningScheme: string;
  public get versioningScheme() {
    return this.getStringAttribute('versioning_scheme');
  }
  public set versioningScheme(value: string) {
    this._versioningScheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningSchemeInput() {
    return this._versioningScheme
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementApiVersionSetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementApiVersionSetTimeouts ) {
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
      api_management_name: this._apiManagementName,
      description: this._description,
      display_name: this._displayName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      version_header_name: this._versionHeaderName,
      version_query_name: this._versionQueryName,
      versioning_scheme: this._versioningScheme,
      timeouts: this._timeouts,
    };
  }
}
