// https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CustomProviderConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** action block */
  readonly action?: CustomProviderAction[];
  /** resource_type block */
  readonly resourceType?: CustomProviderResourceType[];
  /** timeouts block */
  readonly timeouts?: CustomProviderTimeouts;
  /** validation block */
  readonly validation?: CustomProviderValidation[];
}
export interface CustomProviderAction {
  readonly endpoint: string;
  readonly name: string;
}
export interface CustomProviderResourceType {
  readonly endpoint: string;
  readonly name: string;
  readonly routingType?: string;
}
export interface CustomProviderTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface CustomProviderValidation {
  readonly specification: string;
}

// Resource

export class CustomProvider extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CustomProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_custom_provider',
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
    this._action = config.action;
    this._resourceType = config.resourceType;
    this._timeouts = config.timeouts;
    this._validation = config.validation;
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

  // action - computed: false, optional: true, required: false
  private _action?: CustomProviderAction[];
  public get action() {
    return this.interpolationForAttribute('action') as any;
  }
  public set action(value: CustomProviderAction[] ) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: CustomProviderResourceType[];
  public get resourceType() {
    return this.interpolationForAttribute('resource_type') as any;
  }
  public set resourceType(value: CustomProviderResourceType[] ) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CustomProviderTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CustomProviderTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // validation - computed: false, optional: true, required: false
  private _validation?: CustomProviderValidation[];
  public get validation() {
    return this.interpolationForAttribute('validation') as any;
  }
  public set validation(value: CustomProviderValidation[] ) {
    this._validation = value;
  }
  public resetValidation() {
    this._validation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation
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
      action: this._action,
      resource_type: this._resourceType,
      timeouts: this._timeouts,
      validation: this._validation,
    };
  }
}
