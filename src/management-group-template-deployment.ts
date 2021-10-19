// https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementGroupTemplateDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html#debug_level ManagementGroupTemplateDeployment#debug_level}
  */
  readonly debugLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html#location ManagementGroupTemplateDeployment#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html#management_group_id ManagementGroupTemplateDeployment#management_group_id}
  */
  readonly managementGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html#name ManagementGroupTemplateDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html#parameters_content ManagementGroupTemplateDeployment#parameters_content}
  */
  readonly parametersContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html#tags ManagementGroupTemplateDeployment#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html#template_content ManagementGroupTemplateDeployment#template_content}
  */
  readonly templateContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html#template_spec_version_id ManagementGroupTemplateDeployment#template_spec_version_id}
  */
  readonly templateSpecVersionId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html#timeouts ManagementGroupTemplateDeployment#timeouts}
  */
  readonly timeouts?: ManagementGroupTemplateDeploymentTimeouts;
}
export interface ManagementGroupTemplateDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html#create ManagementGroupTemplateDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html#delete ManagementGroupTemplateDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html#read ManagementGroupTemplateDeployment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html#update ManagementGroupTemplateDeployment#update}
  */
  readonly update?: string;
}

function managementGroupTemplateDeploymentTimeoutsToTerraform(struct?: ManagementGroupTemplateDeploymentTimeoutsOutputReference | ManagementGroupTemplateDeploymentTimeouts): any {
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

export class ManagementGroupTemplateDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html azurerm_management_group_template_deployment}
*/
export class ManagementGroupTemplateDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_management_group_template_deployment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_template_deployment.html azurerm_management_group_template_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementGroupTemplateDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementGroupTemplateDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_management_group_template_deployment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._debugLevel = config.debugLevel;
    this._location = config.location;
    this._managementGroupId = config.managementGroupId;
    this._name = config.name;
    this._parametersContent = config.parametersContent;
    this._tags = config.tags;
    this._templateContent = config.templateContent;
    this._templateSpecVersionId = config.templateSpecVersionId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug_level - computed: false, optional: true, required: false
  private _debugLevel?: string | undefined; 
  public get debugLevel() {
    return this.getStringAttribute('debug_level');
  }
  public set debugLevel(value: string | undefined) {
    this._debugLevel = value;
  }
  public resetDebugLevel() {
    this._debugLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLevelInput() {
    return this._debugLevel
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // management_group_id - computed: false, optional: false, required: true
  private _managementGroupId?: string; 
  public get managementGroupId() {
    return this.getStringAttribute('management_group_id');
  }
  public set managementGroupId(value: string) {
    this._managementGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupIdInput() {
    return this._managementGroupId
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

  // output_content - computed: true, optional: false, required: false
  public get outputContent() {
    return this.getStringAttribute('output_content');
  }

  // parameters_content - computed: true, optional: true, required: false
  private _parametersContent?: string | undefined; 
  public get parametersContent() {
    return this.getStringAttribute('parameters_content');
  }
  public set parametersContent(value: string | undefined) {
    this._parametersContent = value;
  }
  public resetParametersContent() {
    this._parametersContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersContentInput() {
    return this._parametersContent
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

  // template_content - computed: true, optional: true, required: false
  private _templateContent?: string | undefined; 
  public get templateContent() {
    return this.getStringAttribute('template_content');
  }
  public set templateContent(value: string | undefined) {
    this._templateContent = value;
  }
  public resetTemplateContent() {
    this._templateContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateContentInput() {
    return this._templateContent
  }

  // template_spec_version_id - computed: false, optional: true, required: false
  private _templateSpecVersionId?: string | undefined; 
  public get templateSpecVersionId() {
    return this.getStringAttribute('template_spec_version_id');
  }
  public set templateSpecVersionId(value: string | undefined) {
    this._templateSpecVersionId = value;
  }
  public resetTemplateSpecVersionId() {
    this._templateSpecVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSpecVersionIdInput() {
    return this._templateSpecVersionId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ManagementGroupTemplateDeploymentTimeouts | undefined; 
  private __timeoutsOutput = new ManagementGroupTemplateDeploymentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ManagementGroupTemplateDeploymentTimeouts | undefined) {
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
      location: cdktf.stringToTerraform(this._location),
      management_group_id: cdktf.stringToTerraform(this._managementGroupId),
      name: cdktf.stringToTerraform(this._name),
      parameters_content: cdktf.stringToTerraform(this._parametersContent),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      template_content: cdktf.stringToTerraform(this._templateContent),
      template_spec_version_id: cdktf.stringToTerraform(this._templateSpecVersionId),
      timeouts: managementGroupTemplateDeploymentTimeoutsToTerraform(this._timeouts),
    };
  }
}
