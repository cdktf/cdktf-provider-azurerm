// https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html#deployment_mode TemplateDeployment#deployment_mode}
  */
  readonly deploymentMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html#name TemplateDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html#parameters TemplateDeployment#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html#parameters_body TemplateDeployment#parameters_body}
  */
  readonly parametersBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html#resource_group_name TemplateDeployment#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html#template_body TemplateDeployment#template_body}
  */
  readonly templateBody?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html#timeouts TemplateDeployment#timeouts}
  */
  readonly timeouts?: TemplateDeploymentTimeouts;
}
export interface TemplateDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html#create TemplateDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html#delete TemplateDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html#read TemplateDeployment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html#update TemplateDeployment#update}
  */
  readonly update?: string;
}

function templateDeploymentTimeoutsToTerraform(struct?: TemplateDeploymentTimeoutsOutputReference | TemplateDeploymentTimeouts): any {
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

export class TemplateDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html azurerm_template_deployment}
*/
export class TemplateDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_template_deployment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html azurerm_template_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_template_deployment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deploymentMode = config.deploymentMode;
    this._name = config.name;
    this._parameters = config.parameters;
    this._parametersBody = config.parametersBody;
    this._resourceGroupName = config.resourceGroupName;
    this._templateBody = config.templateBody;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_mode - computed: false, optional: false, required: true
  private _deploymentMode?: string; 
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }
  public set deploymentMode(value: string) {
    this._deploymentMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModeInput() {
    return this._deploymentMode
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

  // outputs - computed: true, optional: false, required: false
  public outputs(key: string): string {
    return new cdktf.StringMap(this, 'outputs').lookup(key);
  }

  // parameters - computed: false, optional: true, required: false
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

  // parameters_body - computed: false, optional: true, required: false
  private _parametersBody?: string | undefined; 
  public get parametersBody() {
    return this.getStringAttribute('parameters_body');
  }
  public set parametersBody(value: string | undefined) {
    this._parametersBody = value;
  }
  public resetParametersBody() {
    this._parametersBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersBodyInput() {
    return this._parametersBody
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

  // template_body - computed: true, optional: true, required: false
  private _templateBody?: string | undefined; 
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }
  public set templateBody(value: string | undefined) {
    this._templateBody = value;
  }
  public resetTemplateBody() {
    this._templateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBodyInput() {
    return this._templateBody
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: TemplateDeploymentTimeouts | undefined; 
  private __timeoutsOutput = new TemplateDeploymentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: TemplateDeploymentTimeouts | undefined) {
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
      deployment_mode: cdktf.stringToTerraform(this._deploymentMode),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      parameters_body: cdktf.stringToTerraform(this._parametersBody),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      template_body: cdktf.stringToTerraform(this._templateBody),
      timeouts: templateDeploymentTimeoutsToTerraform(this._timeouts),
    };
  }
}
