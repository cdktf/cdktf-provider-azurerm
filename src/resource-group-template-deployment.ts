// https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceGroupTemplateDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment#debug_level ResourceGroupTemplateDeployment#debug_level}
  */
  readonly debugLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment#deployment_mode ResourceGroupTemplateDeployment#deployment_mode}
  */
  readonly deploymentMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment#name ResourceGroupTemplateDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment#parameters_content ResourceGroupTemplateDeployment#parameters_content}
  */
  readonly parametersContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment#resource_group_name ResourceGroupTemplateDeployment#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment#tags ResourceGroupTemplateDeployment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment#template_content ResourceGroupTemplateDeployment#template_content}
  */
  readonly templateContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment#template_spec_version_id ResourceGroupTemplateDeployment#template_spec_version_id}
  */
  readonly templateSpecVersionId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment#timeouts ResourceGroupTemplateDeployment#timeouts}
  */
  readonly timeouts?: ResourceGroupTemplateDeploymentTimeouts;
}
export interface ResourceGroupTemplateDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment#create ResourceGroupTemplateDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment#delete ResourceGroupTemplateDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment#read ResourceGroupTemplateDeployment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment#update ResourceGroupTemplateDeployment#update}
  */
  readonly update?: string;
}

export function resourceGroupTemplateDeploymentTimeoutsToTerraform(struct?: ResourceGroupTemplateDeploymentTimeoutsOutputReference | ResourceGroupTemplateDeploymentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class ResourceGroupTemplateDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceGroupTemplateDeploymentTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceGroupTemplateDeploymentTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment azurerm_resource_group_template_deployment}
*/
export class ResourceGroupTemplateDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_resource_group_template_deployment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_template_deployment azurerm_resource_group_template_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceGroupTemplateDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceGroupTemplateDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_resource_group_template_deployment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '2.99.0',
        providerVersionConstraint: '~> 2.0'
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
    this._templateSpecVersionId = config.templateSpecVersionId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug_level - computed: false, optional: true, required: false
  private _debugLevel?: string; 
  public get debugLevel() {
    return this.getStringAttribute('debug_level');
  }
  public set debugLevel(value: string) {
    this._debugLevel = value;
  }
  public resetDebugLevel() {
    this._debugLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLevelInput() {
    return this._debugLevel;
  }

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
    return this._deploymentMode;
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
    return this._name;
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
    return this._parametersContent;
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
    return this._resourceGroupName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // template_content - computed: true, optional: true, required: false
  private _templateContent?: string; 
  public get templateContent() {
    return this.getStringAttribute('template_content');
  }
  public set templateContent(value: string) {
    this._templateContent = value;
  }
  public resetTemplateContent() {
    this._templateContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateContentInput() {
    return this._templateContent;
  }

  // template_spec_version_id - computed: false, optional: true, required: false
  private _templateSpecVersionId?: string; 
  public get templateSpecVersionId() {
    return this.getStringAttribute('template_spec_version_id');
  }
  public set templateSpecVersionId(value: string) {
    this._templateSpecVersionId = value;
  }
  public resetTemplateSpecVersionId() {
    this._templateSpecVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSpecVersionIdInput() {
    return this._templateSpecVersionId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResourceGroupTemplateDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceGroupTemplateDeploymentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      template_content: cdktf.stringToTerraform(this._templateContent),
      template_spec_version_id: cdktf.stringToTerraform(this._templateSpecVersionId),
      timeouts: resourceGroupTemplateDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
