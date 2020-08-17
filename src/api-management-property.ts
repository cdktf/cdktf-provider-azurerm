// https://www.terraform.io/docs/providers/azurerm/r/api_management_property.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementPropertyConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly displayName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly secret?: boolean;
  readonly tags?: string[];
  readonly value: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementPropertyTimeouts;
}
export interface ApiManagementPropertyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementProperty extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementPropertyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_property',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._displayName = config.displayName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._secret = config.secret;
    this._tags = config.tags;
    this._value = config.value;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // secret - computed: false, optional: true, required: false
  private _secret?: boolean;
  public get secret() {
    return this._secret;
  }
  public set secret(value: boolean | undefined) {
    this._secret = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[];
  public get tags() {
    return this._tags;
  }
  public set tags(value: string[] | undefined) {
    this._tags = value;
  }

  // value - computed: false, optional: false, required: true
  private _value: string;
  public get value() {
    return this._value;
  }
  public set value(value: string) {
    this._value = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementPropertyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementPropertyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      display_name: this._displayName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      secret: this._secret,
      tags: this._tags,
      value: this._value,
      timeouts: this._timeouts,
    };
  }
}
