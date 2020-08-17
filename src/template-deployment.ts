// https://www.terraform.io/docs/providers/azurerm/r/template_deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface TemplateDeploymentConfig extends TerraformMetaArguments {
  readonly deploymentMode: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly parametersBody?: string;
  readonly resourceGroupName: string;
  readonly templateBody?: string;
  /** timeouts block */
  readonly timeouts?: TemplateDeploymentTimeouts;
}
export interface TemplateDeploymentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class TemplateDeployment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _deploymentMode: string;
  public get deploymentMode() {
    return this._deploymentMode;
  }
  public set deploymentMode(value: string) {
    this._deploymentMode = value;
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

  // outputs - computed: true, optional: false, required: true
  public outputs(key: string): string {
    return new StringMap(this, 'outputs').lookup(key);
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // parameters_body - computed: false, optional: true, required: false
  private _parametersBody?: string;
  public get parametersBody() {
    return this._parametersBody;
  }
  public set parametersBody(value: string | undefined) {
    this._parametersBody = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // template_body - computed: true, optional: true, required: false
  private _templateBody?: string;
  public get templateBody() {
    return this._templateBody ?? this.getStringAttribute('template_body');
  }
  public set templateBody(value: string | undefined) {
    this._templateBody = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: TemplateDeploymentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: TemplateDeploymentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_mode: this._deploymentMode,
      name: this._name,
      parameters: this._parameters,
      parameters_body: this._parametersBody,
      resource_group_name: this._resourceGroupName,
      template_body: this._templateBody,
      timeouts: this._timeouts,
    };
  }
}
