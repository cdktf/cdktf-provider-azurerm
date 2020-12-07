// https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseSparkPoolConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly nodeCount?: number;
  readonly nodeSize: string;
  readonly nodeSizeFamily: string;
  readonly sparkEventsFolder?: string;
  readonly sparkLogFolder?: string;
  readonly sparkVersion?: string;
  readonly synapseWorkspaceId: string;
  readonly tags?: { [key: string]: string };
  /** auto_pause block */
  readonly autoPause?: SynapseSparkPoolAutoPause[];
  /** auto_scale block */
  readonly autoScale?: SynapseSparkPoolAutoScale[];
  /** library_requirement block */
  readonly libraryRequirement?: SynapseSparkPoolLibraryRequirement[];
  /** timeouts block */
  readonly timeouts?: SynapseSparkPoolTimeouts;
}
export interface SynapseSparkPoolAutoPause {
  readonly delayInMinutes: number;
}

function synapseSparkPoolAutoPauseToTerraform(struct?: SynapseSparkPoolAutoPause): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delay_in_minutes: cdktf.numberToTerraform(struct!.delayInMinutes),
  }
}

export interface SynapseSparkPoolAutoScale {
  readonly maxNodeCount: number;
  readonly minNodeCount: number;
}

function synapseSparkPoolAutoScaleToTerraform(struct?: SynapseSparkPoolAutoScale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
  }
}

export interface SynapseSparkPoolLibraryRequirement {
  readonly content: string;
  readonly filename: string;
}

function synapseSparkPoolLibraryRequirementToTerraform(struct?: SynapseSparkPoolLibraryRequirement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}

export interface SynapseSparkPoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function synapseSparkPoolTimeoutsToTerraform(struct?: SynapseSparkPoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SynapseSparkPool extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SynapseSparkPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_spark_pool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._nodeSize = config.nodeSize;
    this._nodeSizeFamily = config.nodeSizeFamily;
    this._sparkEventsFolder = config.sparkEventsFolder;
    this._sparkLogFolder = config.sparkLogFolder;
    this._sparkVersion = config.sparkVersion;
    this._synapseWorkspaceId = config.synapseWorkspaceId;
    this._tags = config.tags;
    this._autoPause = config.autoPause;
    this._autoScale = config.autoScale;
    this._libraryRequirement = config.libraryRequirement;
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

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number;
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number ) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount
  }

  // node_size - computed: false, optional: false, required: true
  private _nodeSize: string;
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize
  }

  // node_size_family - computed: false, optional: false, required: true
  private _nodeSizeFamily: string;
  public get nodeSizeFamily() {
    return this.getStringAttribute('node_size_family');
  }
  public set nodeSizeFamily(value: string) {
    this._nodeSizeFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeFamilyInput() {
    return this._nodeSizeFamily
  }

  // spark_events_folder - computed: false, optional: true, required: false
  private _sparkEventsFolder?: string;
  public get sparkEventsFolder() {
    return this.getStringAttribute('spark_events_folder');
  }
  public set sparkEventsFolder(value: string ) {
    this._sparkEventsFolder = value;
  }
  public resetSparkEventsFolder() {
    this._sparkEventsFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkEventsFolderInput() {
    return this._sparkEventsFolder
  }

  // spark_log_folder - computed: false, optional: true, required: false
  private _sparkLogFolder?: string;
  public get sparkLogFolder() {
    return this.getStringAttribute('spark_log_folder');
  }
  public set sparkLogFolder(value: string ) {
    this._sparkLogFolder = value;
  }
  public resetSparkLogFolder() {
    this._sparkLogFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkLogFolderInput() {
    return this._sparkLogFolder
  }

  // spark_version - computed: false, optional: true, required: false
  private _sparkVersion?: string;
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }
  public set sparkVersion(value: string ) {
    this._sparkVersion = value;
  }
  public resetSparkVersion() {
    this._sparkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkVersionInput() {
    return this._sparkVersion
  }

  // synapse_workspace_id - computed: false, optional: false, required: true
  private _synapseWorkspaceId: string;
  public get synapseWorkspaceId() {
    return this.getStringAttribute('synapse_workspace_id');
  }
  public set synapseWorkspaceId(value: string) {
    this._synapseWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get synapseWorkspaceIdInput() {
    return this._synapseWorkspaceId
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

  // auto_pause - computed: false, optional: true, required: false
  private _autoPause?: SynapseSparkPoolAutoPause[];
  public get autoPause() {
    return this.interpolationForAttribute('auto_pause') as any;
  }
  public set autoPause(value: SynapseSparkPoolAutoPause[] ) {
    this._autoPause = value;
  }
  public resetAutoPause() {
    this._autoPause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPauseInput() {
    return this._autoPause
  }

  // auto_scale - computed: false, optional: true, required: false
  private _autoScale?: SynapseSparkPoolAutoScale[];
  public get autoScale() {
    return this.interpolationForAttribute('auto_scale') as any;
  }
  public set autoScale(value: SynapseSparkPoolAutoScale[] ) {
    this._autoScale = value;
  }
  public resetAutoScale() {
    this._autoScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale
  }

  // library_requirement - computed: false, optional: true, required: false
  private _libraryRequirement?: SynapseSparkPoolLibraryRequirement[];
  public get libraryRequirement() {
    return this.interpolationForAttribute('library_requirement') as any;
  }
  public set libraryRequirement(value: SynapseSparkPoolLibraryRequirement[] ) {
    this._libraryRequirement = value;
  }
  public resetLibraryRequirement() {
    this._libraryRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryRequirementInput() {
    return this._libraryRequirement
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SynapseSparkPoolTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SynapseSparkPoolTimeouts ) {
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
      node_count: cdktf.numberToTerraform(this._nodeCount),
      node_size: cdktf.stringToTerraform(this._nodeSize),
      node_size_family: cdktf.stringToTerraform(this._nodeSizeFamily),
      spark_events_folder: cdktf.stringToTerraform(this._sparkEventsFolder),
      spark_log_folder: cdktf.stringToTerraform(this._sparkLogFolder),
      spark_version: cdktf.stringToTerraform(this._sparkVersion),
      synapse_workspace_id: cdktf.stringToTerraform(this._synapseWorkspaceId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      auto_pause: cdktf.listMapper(synapseSparkPoolAutoPauseToTerraform)(this._autoPause),
      auto_scale: cdktf.listMapper(synapseSparkPoolAutoScaleToTerraform)(this._autoScale),
      library_requirement: cdktf.listMapper(synapseSparkPoolLibraryRequirementToTerraform)(this._libraryRequirement),
      timeouts: synapseSparkPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
