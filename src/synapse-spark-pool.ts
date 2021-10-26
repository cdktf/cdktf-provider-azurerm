// https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseSparkPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#cache_size SynapseSparkPool#cache_size}
  */
  readonly cacheSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#compute_isolation_enabled SynapseSparkPool#compute_isolation_enabled}
  */
  readonly computeIsolationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#dynamic_executor_allocation_enabled SynapseSparkPool#dynamic_executor_allocation_enabled}
  */
  readonly dynamicExecutorAllocationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#name SynapseSparkPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#node_count SynapseSparkPool#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#node_size SynapseSparkPool#node_size}
  */
  readonly nodeSize: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#node_size_family SynapseSparkPool#node_size_family}
  */
  readonly nodeSizeFamily: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#session_level_packages_enabled SynapseSparkPool#session_level_packages_enabled}
  */
  readonly sessionLevelPackagesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#spark_events_folder SynapseSparkPool#spark_events_folder}
  */
  readonly sparkEventsFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#spark_log_folder SynapseSparkPool#spark_log_folder}
  */
  readonly sparkLogFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#spark_version SynapseSparkPool#spark_version}
  */
  readonly sparkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#synapse_workspace_id SynapseSparkPool#synapse_workspace_id}
  */
  readonly synapseWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#tags SynapseSparkPool#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * auto_pause block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#auto_pause SynapseSparkPool#auto_pause}
  */
  readonly autoPause?: SynapseSparkPoolAutoPause;
  /**
  * auto_scale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#auto_scale SynapseSparkPool#auto_scale}
  */
  readonly autoScale?: SynapseSparkPoolAutoScale;
  /**
  * library_requirement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#library_requirement SynapseSparkPool#library_requirement}
  */
  readonly libraryRequirement?: SynapseSparkPoolLibraryRequirement;
  /**
  * spark_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#spark_config SynapseSparkPool#spark_config}
  */
  readonly sparkConfig?: SynapseSparkPoolSparkConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#timeouts SynapseSparkPool#timeouts}
  */
  readonly timeouts?: SynapseSparkPoolTimeouts;
}
export interface SynapseSparkPoolAutoPause {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#delay_in_minutes SynapseSparkPool#delay_in_minutes}
  */
  readonly delayInMinutes: number;
}

function synapseSparkPoolAutoPauseToTerraform(struct?: SynapseSparkPoolAutoPauseOutputReference | SynapseSparkPoolAutoPause): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_in_minutes: cdktf.numberToTerraform(struct!.delayInMinutes),
  }
}

export class SynapseSparkPoolAutoPauseOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // delay_in_minutes - computed: false, optional: false, required: true
  private _delayInMinutes?: number; 
  public get delayInMinutes() {
    return this.getNumberAttribute('delay_in_minutes');
  }
  public set delayInMinutes(value: number) {
    this._delayInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInMinutesInput() {
    return this._delayInMinutes
  }
}
export interface SynapseSparkPoolAutoScale {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#max_node_count SynapseSparkPool#max_node_count}
  */
  readonly maxNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#min_node_count SynapseSparkPool#min_node_count}
  */
  readonly minNodeCount: number;
}

function synapseSparkPoolAutoScaleToTerraform(struct?: SynapseSparkPoolAutoScaleOutputReference | SynapseSparkPoolAutoScale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
  }
}

export class SynapseSparkPoolAutoScaleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_node_count - computed: false, optional: false, required: true
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount
  }

  // min_node_count - computed: false, optional: false, required: true
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount
  }
}
export interface SynapseSparkPoolLibraryRequirement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#content SynapseSparkPool#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#filename SynapseSparkPool#filename}
  */
  readonly filename: string;
}

function synapseSparkPoolLibraryRequirementToTerraform(struct?: SynapseSparkPoolLibraryRequirementOutputReference | SynapseSparkPoolLibraryRequirement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}

export class SynapseSparkPoolLibraryRequirementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename
  }
}
export interface SynapseSparkPoolSparkConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#content SynapseSparkPool#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#filename SynapseSparkPool#filename}
  */
  readonly filename: string;
}

function synapseSparkPoolSparkConfigToTerraform(struct?: SynapseSparkPoolSparkConfigOutputReference | SynapseSparkPoolSparkConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}

export class SynapseSparkPoolSparkConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename
  }
}
export interface SynapseSparkPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#create SynapseSparkPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#delete SynapseSparkPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#read SynapseSparkPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html#update SynapseSparkPool#update}
  */
  readonly update?: string;
}

function synapseSparkPoolTimeoutsToTerraform(struct?: SynapseSparkPoolTimeoutsOutputReference | SynapseSparkPoolTimeouts): any {
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

export class SynapseSparkPoolTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html azurerm_synapse_spark_pool}
*/
export class SynapseSparkPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_synapse_spark_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool.html azurerm_synapse_spark_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseSparkPoolConfig
  */
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
    this._cacheSize = config.cacheSize;
    this._computeIsolationEnabled = config.computeIsolationEnabled;
    this._dynamicExecutorAllocationEnabled = config.dynamicExecutorAllocationEnabled;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._nodeSize = config.nodeSize;
    this._nodeSizeFamily = config.nodeSizeFamily;
    this._sessionLevelPackagesEnabled = config.sessionLevelPackagesEnabled;
    this._sparkEventsFolder = config.sparkEventsFolder;
    this._sparkLogFolder = config.sparkLogFolder;
    this._sparkVersion = config.sparkVersion;
    this._synapseWorkspaceId = config.synapseWorkspaceId;
    this._tags = config.tags;
    this._autoPause = config.autoPause;
    this._autoScale = config.autoScale;
    this._libraryRequirement = config.libraryRequirement;
    this._sparkConfig = config.sparkConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_size - computed: false, optional: true, required: false
  private _cacheSize?: number | undefined; 
  public get cacheSize() {
    return this.getNumberAttribute('cache_size');
  }
  public set cacheSize(value: number | undefined) {
    this._cacheSize = value;
  }
  public resetCacheSize() {
    this._cacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInput() {
    return this._cacheSize
  }

  // compute_isolation_enabled - computed: false, optional: true, required: false
  private _computeIsolationEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get computeIsolationEnabled() {
    return this.getBooleanAttribute('compute_isolation_enabled') as any;
  }
  public set computeIsolationEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._computeIsolationEnabled = value;
  }
  public resetComputeIsolationEnabled() {
    this._computeIsolationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeIsolationEnabledInput() {
    return this._computeIsolationEnabled
  }

  // dynamic_executor_allocation_enabled - computed: false, optional: true, required: false
  private _dynamicExecutorAllocationEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get dynamicExecutorAllocationEnabled() {
    return this.getBooleanAttribute('dynamic_executor_allocation_enabled') as any;
  }
  public set dynamicExecutorAllocationEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._dynamicExecutorAllocationEnabled = value;
  }
  public resetDynamicExecutorAllocationEnabled() {
    this._dynamicExecutorAllocationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicExecutorAllocationEnabledInput() {
    return this._dynamicExecutorAllocationEnabled
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

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number | undefined; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number | undefined) {
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
  private _nodeSize?: string; 
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
  private _nodeSizeFamily?: string; 
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

  // session_level_packages_enabled - computed: false, optional: true, required: false
  private _sessionLevelPackagesEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get sessionLevelPackagesEnabled() {
    return this.getBooleanAttribute('session_level_packages_enabled') as any;
  }
  public set sessionLevelPackagesEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._sessionLevelPackagesEnabled = value;
  }
  public resetSessionLevelPackagesEnabled() {
    this._sessionLevelPackagesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLevelPackagesEnabledInput() {
    return this._sessionLevelPackagesEnabled
  }

  // spark_events_folder - computed: false, optional: true, required: false
  private _sparkEventsFolder?: string | undefined; 
  public get sparkEventsFolder() {
    return this.getStringAttribute('spark_events_folder');
  }
  public set sparkEventsFolder(value: string | undefined) {
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
  private _sparkLogFolder?: string | undefined; 
  public get sparkLogFolder() {
    return this.getStringAttribute('spark_log_folder');
  }
  public set sparkLogFolder(value: string | undefined) {
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
  private _sparkVersion?: string | undefined; 
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }
  public set sparkVersion(value: string | undefined) {
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
  private _synapseWorkspaceId?: string; 
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

  // auto_pause - computed: false, optional: true, required: false
  private _autoPause?: SynapseSparkPoolAutoPause | undefined; 
  private __autoPauseOutput = new SynapseSparkPoolAutoPauseOutputReference(this as any, "auto_pause", true);
  public get autoPause() {
    return this.__autoPauseOutput;
  }
  public putAutoPause(value: SynapseSparkPoolAutoPause | undefined) {
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
  private _autoScale?: SynapseSparkPoolAutoScale | undefined; 
  private __autoScaleOutput = new SynapseSparkPoolAutoScaleOutputReference(this as any, "auto_scale", true);
  public get autoScale() {
    return this.__autoScaleOutput;
  }
  public putAutoScale(value: SynapseSparkPoolAutoScale | undefined) {
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
  private _libraryRequirement?: SynapseSparkPoolLibraryRequirement | undefined; 
  private __libraryRequirementOutput = new SynapseSparkPoolLibraryRequirementOutputReference(this as any, "library_requirement", true);
  public get libraryRequirement() {
    return this.__libraryRequirementOutput;
  }
  public putLibraryRequirement(value: SynapseSparkPoolLibraryRequirement | undefined) {
    this._libraryRequirement = value;
  }
  public resetLibraryRequirement() {
    this._libraryRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryRequirementInput() {
    return this._libraryRequirement
  }

  // spark_config - computed: false, optional: true, required: false
  private _sparkConfig?: SynapseSparkPoolSparkConfig | undefined; 
  private __sparkConfigOutput = new SynapseSparkPoolSparkConfigOutputReference(this as any, "spark_config", true);
  public get sparkConfig() {
    return this.__sparkConfigOutput;
  }
  public putSparkConfig(value: SynapseSparkPoolSparkConfig | undefined) {
    this._sparkConfig = value;
  }
  public resetSparkConfig() {
    this._sparkConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfigInput() {
    return this._sparkConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SynapseSparkPoolTimeouts | undefined; 
  private __timeoutsOutput = new SynapseSparkPoolTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SynapseSparkPoolTimeouts | undefined) {
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
      cache_size: cdktf.numberToTerraform(this._cacheSize),
      compute_isolation_enabled: cdktf.booleanToTerraform(this._computeIsolationEnabled),
      dynamic_executor_allocation_enabled: cdktf.booleanToTerraform(this._dynamicExecutorAllocationEnabled),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      node_size: cdktf.stringToTerraform(this._nodeSize),
      node_size_family: cdktf.stringToTerraform(this._nodeSizeFamily),
      session_level_packages_enabled: cdktf.booleanToTerraform(this._sessionLevelPackagesEnabled),
      spark_events_folder: cdktf.stringToTerraform(this._sparkEventsFolder),
      spark_log_folder: cdktf.stringToTerraform(this._sparkLogFolder),
      spark_version: cdktf.stringToTerraform(this._sparkVersion),
      synapse_workspace_id: cdktf.stringToTerraform(this._synapseWorkspaceId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      auto_pause: synapseSparkPoolAutoPauseToTerraform(this._autoPause),
      auto_scale: synapseSparkPoolAutoScaleToTerraform(this._autoScale),
      library_requirement: synapseSparkPoolLibraryRequirementToTerraform(this._libraryRequirement),
      spark_config: synapseSparkPoolSparkConfigToTerraform(this._sparkConfig),
      timeouts: synapseSparkPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
