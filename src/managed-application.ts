// https://www.terraform.io/docs/providers/azurerm/r/managed_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#application_definition_id ManagedApplication#application_definition_id}
  */
  readonly applicationDefinitionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#kind ManagedApplication#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#location ManagedApplication#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#managed_resource_group_name ManagedApplication#managed_resource_group_name}
  */
  readonly managedResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#name ManagedApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#parameter_values ManagedApplication#parameter_values}
  */
  readonly parameterValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#parameters ManagedApplication#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#resource_group_name ManagedApplication#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#tags ManagedApplication#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * plan block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#plan ManagedApplication#plan}
  */
  readonly plan?: ManagedApplicationPlan[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#timeouts ManagedApplication#timeouts}
  */
  readonly timeouts?: ManagedApplicationTimeouts;
}
export interface ManagedApplicationPlan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#name ManagedApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#product ManagedApplication#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#promotion_code ManagedApplication#promotion_code}
  */
  readonly promotionCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#publisher ManagedApplication#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#version ManagedApplication#version}
  */
  readonly version: string;
}

function managedApplicationPlanToTerraform(struct?: ManagedApplicationPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    promotion_code: cdktf.stringToTerraform(struct!.promotionCode),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface ManagedApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#create ManagedApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#delete ManagedApplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#read ManagedApplication#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html#update ManagedApplication#update}
  */
  readonly update?: string;
}

function managedApplicationTimeoutsToTerraform(struct?: ManagedApplicationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html azurerm_managed_application}
*/
export class ManagedApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_managed_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/managed_application.html azurerm_managed_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_managed_application',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationDefinitionId = config.applicationDefinitionId;
    this._kind = config.kind;
    this._location = config.location;
    this._managedResourceGroupName = config.managedResourceGroupName;
    this._name = config.name;
    this._parameterValues = config.parameterValues;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._plan = config.plan;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_definition_id - computed: false, optional: true, required: false
  private _applicationDefinitionId?: string;
  public get applicationDefinitionId() {
    return this.getStringAttribute('application_definition_id');
  }
  public set applicationDefinitionId(value: string ) {
    this._applicationDefinitionId = value;
  }
  public resetApplicationDefinitionId() {
    this._applicationDefinitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationDefinitionIdInput() {
    return this._applicationDefinitionId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind: string;
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
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

  // managed_resource_group_name - computed: false, optional: false, required: true
  private _managedResourceGroupName: string;
  public get managedResourceGroupName() {
    return this.getStringAttribute('managed_resource_group_name');
  }
  public set managedResourceGroupName(value: string) {
    this._managedResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourceGroupNameInput() {
    return this._managedResourceGroupName
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

  // outputs - computed: true, optional: false, required: false
  public outputs(key: string): string {
    return new cdktf.StringMap(this, 'outputs').lookup(key);
  }

  // parameter_values - computed: true, optional: true, required: false
  private _parameterValues?: string;
  public get parameterValues() {
    return this.getStringAttribute('parameter_values');
  }
  public set parameterValues(value: string) {
    this._parameterValues = value;
  }
  public resetParameterValues() {
    this._parameterValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValuesInput() {
    return this._parameterValues
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable
  public get parameters(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('parameters') as any; // Getting the computed value is not yet implemented
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: ManagedApplicationPlan[];
  public get plan() {
    return this.interpolationForAttribute('plan') as any;
  }
  public set plan(value: ManagedApplicationPlan[] ) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ManagedApplicationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ManagedApplicationTimeouts ) {
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
      application_definition_id: cdktf.stringToTerraform(this._applicationDefinitionId),
      kind: cdktf.stringToTerraform(this._kind),
      location: cdktf.stringToTerraform(this._location),
      managed_resource_group_name: cdktf.stringToTerraform(this._managedResourceGroupName),
      name: cdktf.stringToTerraform(this._name),
      parameter_values: cdktf.stringToTerraform(this._parameterValues),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      plan: cdktf.listMapper(managedApplicationPlanToTerraform)(this._plan),
      timeouts: managedApplicationTimeoutsToTerraform(this._timeouts),
    };
  }
}
