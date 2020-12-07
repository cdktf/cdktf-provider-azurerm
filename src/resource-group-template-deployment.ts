// https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceGroupTemplateDeploymentConfig extends cdktf.TerraformMetaArguments {
  readonly debugLevel?: string;
  readonly deploymentMode: string;
  readonly name: string;
  readonly parametersContent?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly templateContent: string;
  /** timeouts block */
  readonly timeouts?: ResourceGroupTemplateDeploymentTimeouts;
}
export interface ResourceGroupTemplateDeploymentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function resourceGroupTemplateDeploymentTimeoutsToTerraform(struct?: ResourceGroupTemplateDeploymentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ResourceGroupTemplateDeployment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ResourceGroupTemplateDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_resource_group_template_deployment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._debugLevel = config.debugLevel;
    this._deploymentMode = config.deploymentMode;
    this._name = config.name;
    this._parametersContent = config.parametersContent;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._templateContent = config.templateContent;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug_level - computed: false, optional: true, required: false
  private _debugLevel?: string;
  public get debugLevel() {
    return this.getStringAttribute('debug_level');
  }
  public set debugLevel(value: string ) {
    this._debugLevel = value;
  }
  public resetDebugLevel() {
    this._debugLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLevelInput() {
    return this._debugLevel
  }

  // deployment_mode - computed: false, optional: false, required: true
  private _deploymentMode: string;
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

  // output_content - computed: true, optional: false, required: false
  public get outputContent() {
    return this.getStringAttribute('output_content');
  }

  // parameters_content - computed: true, optional: true, required: false
  private _parametersContent?: string;
  public get parametersContent() {
    return this.getStringAttribute('parameters_content');
  }
  public set parametersContent(value: string) {
    this._parametersContent = value;
  }
  public resetParametersContent() {
    this._parametersContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersContentInput() {
    return this._parametersContent
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

  // template_content - computed: false, optional: false, required: true
  private _templateContent: string;
  public get templateContent() {
    return this.getStringAttribute('template_content');
  }
  public set templateContent(value: string) {
    this._templateContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateContentInput() {
    return this._templateContent
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ResourceGroupTemplateDeploymentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ResourceGroupTemplateDeploymentTimeouts ) {
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
      debug_level: cdktf.stringToTerraform(this._debugLevel),
      deployment_mode: cdktf.stringToTerraform(this._deploymentMode),
      name: cdktf.stringToTerraform(this._name),
      parameters_content: cdktf.stringToTerraform(this._parametersContent),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      template_content: cdktf.stringToTerraform(this._templateContent),
      timeouts: resourceGroupTemplateDeploymentTimeoutsToTerraform(this._timeouts),
    };
  }
}
