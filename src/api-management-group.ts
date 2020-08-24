// https://www.terraform.io/docs/providers/azurerm/r/api_management_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementGroupConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly description?: string;
  readonly displayName: string;
  readonly externalId?: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly type?: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementGroupTimeouts;
}
export interface ApiManagementGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_group',
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
    this._externalId = config.externalId;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._type = config.type;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName: string;
  public get apiManagementName() {
    return this._apiManagementName;
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string;
  public get externalId() {
    return this._externalId;
  }
  public set externalId(value: string | undefined) {
    this._externalId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type;
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      description: this._description,
      display_name: this._displayName,
      external_id: this._externalId,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      type: this._type,
      timeouts: this._timeouts,
    };
  }
}
