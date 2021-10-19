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

function apiManagementApiVersionSetTimeoutsToTerraform(struct?: ApiManagementApiVersionSetTimeoutsOutputReference | ApiManagementApiVersionSetTimeouts): any {
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

export class ApiManagementApiVersionSetTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_api_version_set.html azurerm_api_management_api_version_set}
*/
export class ApiManagementApiVersionSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_api_version_set";

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
  private _apiManagementName?: string; 
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
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
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
  private _displayName?: string; 
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

  // version_header_name - computed: false, optional: true, required: false
  private _versionHeaderName?: string | undefined; 
  public get versionHeaderName() {
    return this.getStringAttribute('version_header_name');
  }
  public set versionHeaderName(value: string | undefined) {
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
  private _versionQueryName?: string | undefined; 
  public get versionQueryName() {
    return this.getStringAttribute('version_query_name');
  }
  public set versionQueryName(value: string | undefined) {
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
  private _versioningScheme?: string; 
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
  private _timeouts?: ApiManagementApiVersionSetTimeouts | undefined; 
  private __timeoutsOutput = new ApiManagementApiVersionSetTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApiManagementApiVersionSetTimeouts | undefined) {
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
