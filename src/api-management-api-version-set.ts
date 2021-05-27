// https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementApiVersionSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html#api_management_name ApiManagementApiVersionSet#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html#description ApiManagementApiVersionSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html#display_name ApiManagementApiVersionSet#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html#name ApiManagementApiVersionSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html#resource_group_name ApiManagementApiVersionSet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html#version_header_name ApiManagementApiVersionSet#version_header_name}
  */
  readonly versionHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html#version_query_name ApiManagementApiVersionSet#version_query_name}
  */
  readonly versionQueryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html#versioning_scheme ApiManagementApiVersionSet#versioning_scheme}
  */
  readonly versioningScheme: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html#timeouts ApiManagementApiVersionSet#timeouts}
  */
  readonly timeouts?: ApiManagementApiVersionSetTimeouts;
}
export interface ApiManagementApiVersionSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html#create ApiManagementApiVersionSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html#delete ApiManagementApiVersionSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html#read ApiManagementApiVersionSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html#update ApiManagementApiVersionSet#update}
  */
  readonly update?: string;
}

function apiManagementApiVersionSetTimeoutsToTerraform(struct?: ApiManagementApiVersionSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html azurerm_api_management_api_version_set}
*/
export class ApiManagementApiVersionSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html azurerm_api_management_api_version_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementApiVersionSetConfig
  */
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
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      version_header_name: cdktf.stringToTerraform(this._versionHeaderName),
      version_query_name: cdktf.stringToTerraform(this._versionQueryName),
      versioning_scheme: cdktf.stringToTerraform(this._versioningScheme),
      timeouts: apiManagementApiVersionSetTimeoutsToTerraform(this._timeouts),
    };
  }
}
