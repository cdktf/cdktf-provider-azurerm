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

function videoAnalyzerEdgeModuleTimeoutsToTerraform(struct?: VideoAnalyzerEdgeModuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
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

  // video_analyzer_name - computed: false, optional: false, required: true
  private _videoAnalyzerName: string;
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
  private _timeouts?: VideoAnalyzerEdgeModuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VideoAnalyzerEdgeModuleTimeouts ) {
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
