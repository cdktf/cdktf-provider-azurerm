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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // type - computed: true, optional: false, required: false
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // required_tags - computed: false, optional: true, required: false
  private _requiredTags?: { [key: string]: string };
  public get requiredTags() {
    return this.interpolationForAttribute('required_tags') as any;
  }
  public set requiredTags(value: { [key: string]: string } ) {
    this._requiredTags = value;
  }
  public resetRequiredTags() {
    this._requiredTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredTagsInput() {
    return this._requiredTags
  }

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // resources - computed: true, optional: false, required: false
  public resources(index: string) {
    return new DataAzurermResourcesResources(this, 'resources', index);
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermResourcesTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermResourcesTimeouts ) {
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
      name: this._name,
      required_tags: this._requiredTags,
      resource_group_name: this._resourceGroupName,
      type: this._type,
      timeouts: this._timeouts,
    };
  }
}
