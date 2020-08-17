// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_resources.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermResourcesConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly requiredTags?: { [key: string]: string };
  readonly resourceGroupName?: string;
  readonly type?: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermResourcesTimeouts;
}
export class DataAzurermResourcesResources extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: true
  public get tags() {
    return 'not implemented' as any;
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAzurermResourcesTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermResources extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermResourcesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azurerm_resources',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._requiredTags = config.requiredTags;
    this._resourceGroupName = config.resourceGroupName;
    this._type = config.type;
    this._timeouts = config.timeouts;
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

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // required_tags - computed: false, optional: true, required: false
  private _requiredTags?: { [key: string]: string };
  public get requiredTags() {
    return this._requiredTags;
  }
  public set requiredTags(value: { [key: string]: string } | undefined) {
    this._requiredTags = value;
  }

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string;
  public get resourceGroupName() {
    return this._resourceGroupName ?? this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string | undefined) {
    this._resourceGroupName = value;
  }

  // resources - computed: true, optional: false, required: true
  public resources(index: string) {
    return new DataAzurermResourcesResources(this, 'resources', index);
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type ?? this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermResourcesTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermResourcesTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      required_tags: this._requiredTags,
      resource_group_name: this._resourceGroupName,
      type: this._type,
      timeouts: this._timeouts,
    };
  }
}
