// https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#location CustomProvider#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#name CustomProvider#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#resource_group_name CustomProvider#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#tags CustomProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#action CustomProvider#action}
  */
  readonly action?: CustomProviderAction[];
  /**
  * resource_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#resource_type CustomProvider#resource_type}
  */
  readonly resourceType?: CustomProviderResourceType[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#timeouts CustomProvider#timeouts}
  */
  readonly timeouts?: CustomProviderTimeouts;
  /**
  * validation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#validation CustomProvider#validation}
  */
  readonly validation?: CustomProviderValidation[];
}
export interface CustomProviderAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#endpoint CustomProvider#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#name CustomProvider#name}
  */
  readonly name: string;
}

function customProviderActionToTerraform(struct?: CustomProviderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface CustomProviderResourceType {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#endpoint CustomProvider#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#name CustomProvider#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#routing_type CustomProvider#routing_type}
  */
  readonly routingType?: string;
}

function customProviderResourceTypeToTerraform(struct?: CustomProviderResourceType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    name: cdktf.stringToTerraform(struct!.name),
    routing_type: cdktf.stringToTerraform(struct!.routingType),
  }
}

export interface CustomProviderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#create CustomProvider#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#delete CustomProvider#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#read CustomProvider#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#update CustomProvider#update}
  */
  readonly update?: string;
}

function customProviderTimeoutsToTerraform(struct?: CustomProviderTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface CustomProviderValidation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html#specification CustomProvider#specification}
  */
  readonly specification: string;
}

function customProviderValidationToTerraform(struct?: CustomProviderValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    specification: cdktf.stringToTerraform(struct!.specification),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html azurerm_custom_provider}
*/
export class CustomProvider extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/custom_provider.html azurerm_custom_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomProviderConfig
  */
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      action: cdktf.listMapper(customProviderActionToTerraform)(this._action),
      resource_type: cdktf.listMapper(customProviderResourceTypeToTerraform)(this._resourceType),
      timeouts: customProviderTimeoutsToTerraform(this._timeouts),
      validation: cdktf.listMapper(customProviderValidationToTerraform)(this._validation),
    };
  }
}
