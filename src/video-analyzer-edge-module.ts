// https://www.terraform.io/docs/providers/azurerm/r/video_analyzer_edge_module.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VideoAnalyzerEdgeModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/video_analyzer_edge_module.html#name VideoAnalyzerEdgeModule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/video_analyzer_edge_module.html#resource_group_name VideoAnalyzerEdgeModule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/video_analyzer_edge_module.html#video_analyzer_name VideoAnalyzerEdgeModule#video_analyzer_name}
  */
  readonly videoAnalyzerName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/video_analyzer_edge_module.html#timeouts VideoAnalyzerEdgeModule#timeouts}
  */
  readonly timeouts?: VideoAnalyzerEdgeModuleTimeouts;
}
export interface VideoAnalyzerEdgeModuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/video_analyzer_edge_module.html#create VideoAnalyzerEdgeModule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/video_analyzer_edge_module.html#delete VideoAnalyzerEdgeModule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/video_analyzer_edge_module.html#read VideoAnalyzerEdgeModule#read}
  */
  readonly read?: string;
}

function videoAnalyzerEdgeModuleTimeoutsToTerraform(struct?: VideoAnalyzerEdgeModuleTimeoutsOutputReference | VideoAnalyzerEdgeModuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class VideoAnalyzerEdgeModuleTimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/video_analyzer_edge_module.html azurerm_video_analyzer_edge_module}
*/
export class VideoAnalyzerEdgeModule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_video_analyzer_edge_module";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/video_analyzer_edge_module.html azurerm_video_analyzer_edge_module} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VideoAnalyzerEdgeModuleConfig
  */
  public constructor(scope: Construct, id: string, config: VideoAnalyzerEdgeModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_video_analyzer_edge_module',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._videoAnalyzerName = config.videoAnalyzerName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // video_analyzer_name - computed: false, optional: false, required: true
  private _videoAnalyzerName?: string; 
  public get videoAnalyzerName() {
    return this.getStringAttribute('video_analyzer_name');
  }
  public set videoAnalyzerName(value: string) {
    this._videoAnalyzerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get videoAnalyzerNameInput() {
    return this._videoAnalyzerName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VideoAnalyzerEdgeModuleTimeouts | undefined; 
  private __timeoutsOutput = new VideoAnalyzerEdgeModuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VideoAnalyzerEdgeModuleTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      video_analyzer_name: cdktf.stringToTerraform(this._videoAnalyzerName),
      timeouts: videoAnalyzerEdgeModuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
