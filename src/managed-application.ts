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
  readonly plan?: ManagedApplicationPlan;
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

function managedApplicationPlanToTerraform(struct?: ManagedApplicationPlanOutputReference | ManagedApplicationPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    promotion_code: cdktf.stringToTerraform(struct!.promotionCode),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class ManagedApplicationPlanOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product
  }

  // promotion_code - computed: false, optional: true, required: false
  private _promotionCode?: string | undefined; 
  public get promotionCode() {
    return this.getStringAttribute('promotion_code');
  }
  public set promotionCode(value: string | undefined) {
    this._promotionCode = value;
  }
  public resetPromotionCode() {
    this._promotionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promotionCodeInput() {
    return this._promotionCode
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
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

function managedApplicationTimeoutsToTerraform(struct?: ManagedApplicationTimeoutsOutputReference | ManagedApplicationTimeouts): any {
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

export class ManagedApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
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
  private _applicationDefinitionId?: string | undefined; 
  public get applicationDefinitionId() {
    return this.getStringAttribute('application_definition_id');
  }
  public set applicationDefinitionId(value: string | undefined) {
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
  private _kind?: string; 
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
  private _location?: string; 
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
  private _managedResourceGroupName?: string; 
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

  // outputs - computed: true, optional: false, required: false
  public outputs(key: string): string {
    return new cdktf.StringMap(this, 'outputs').lookup(key);
  }

  // parameter_values - computed: true, optional: true, required: false
  private _parameterValues?: string | undefined; 
  public get parameterValues() {
    return this.getStringAttribute('parameter_values');
  }
  public set parameterValues(value: string | undefined) {
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
  private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _plan?: ManagedApplicationPlan | undefined; 
  private __planOutput = new ManagedApplicationPlanOutputReference(this as any, "plan", true);
  public get plan() {
    return this.__planOutput;
  }
  public putPlan(value: ManagedApplicationPlan | undefined) {
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
  private _timeouts?: ManagedApplicationTimeouts | undefined; 
  private __timeoutsOutput = new ManagedApplicationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ManagedApplicationTimeouts | undefined) {
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
      plan: managedApplicationPlanToTerraform(this._plan),
      timeouts: managedApplicationTimeoutsToTerraform(this._timeouts),
    };
  }
}
