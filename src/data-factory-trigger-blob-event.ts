// https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryTriggerBlobEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#activated DataFactoryTriggerBlobEvent#activated}
  */
  readonly activated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#additional_properties DataFactoryTriggerBlobEvent#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#annotations DataFactoryTriggerBlobEvent#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#blob_path_begins_with DataFactoryTriggerBlobEvent#blob_path_begins_with}
  */
  readonly blobPathBeginsWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#blob_path_ends_with DataFactoryTriggerBlobEvent#blob_path_ends_with}
  */
  readonly blobPathEndsWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#data_factory_id DataFactoryTriggerBlobEvent#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#description DataFactoryTriggerBlobEvent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#events DataFactoryTriggerBlobEvent#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#ignore_empty_blobs DataFactoryTriggerBlobEvent#ignore_empty_blobs}
  */
  readonly ignoreEmptyBlobs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#name DataFactoryTriggerBlobEvent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#storage_account_id DataFactoryTriggerBlobEvent#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * pipeline block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#pipeline DataFactoryTriggerBlobEvent#pipeline}
  */
  readonly pipeline: DataFactoryTriggerBlobEventPipeline[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#timeouts DataFactoryTriggerBlobEvent#timeouts}
  */
  readonly timeouts?: DataFactoryTriggerBlobEventTimeouts;
}
export interface DataFactoryTriggerBlobEventPipeline {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#name DataFactoryTriggerBlobEvent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#parameters DataFactoryTriggerBlobEvent#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
}

export function dataFactoryTriggerBlobEventPipelineToTerraform(struct?: DataFactoryTriggerBlobEventPipeline): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
  }
}

export interface DataFactoryTriggerBlobEventTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#create DataFactoryTriggerBlobEvent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#delete DataFactoryTriggerBlobEvent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#read DataFactoryTriggerBlobEvent#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html#update DataFactoryTriggerBlobEvent#update}
  */
  readonly update?: string;
}

export function dataFactoryTriggerBlobEventTimeoutsToTerraform(struct?: DataFactoryTriggerBlobEventTimeoutsOutputReference | DataFactoryTriggerBlobEventTimeouts): any {
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

export class DataFactoryTriggerBlobEventTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryTriggerBlobEventTimeouts | undefined {
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

  public set internalValue(value: DataFactoryTriggerBlobEventTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html azurerm_data_factory_trigger_blob_event}
*/
export class DataFactoryTriggerBlobEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_trigger_blob_event";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_blob_event.html azurerm_data_factory_trigger_blob_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryTriggerBlobEventConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryTriggerBlobEventConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_trigger_blob_event',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._activated = config.activated;
    this._additionalProperties = config.additionalProperties;
    this._annotations = config.annotations;
    this._blobPathBeginsWith = config.blobPathBeginsWith;
    this._blobPathEndsWith = config.blobPathEndsWith;
    this._dataFactoryId = config.dataFactoryId;
    this._description = config.description;
    this._events = config.events;
    this._ignoreEmptyBlobs = config.ignoreEmptyBlobs;
    this._name = config.name;
    this._storageAccountId = config.storageAccountId;
    this._pipeline = config.pipeline;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated - computed: false, optional: true, required: false
  private _activated?: boolean | cdktf.IResolvable; 
  public get activated() {
    return this.getBooleanAttribute('activated') as any;
  }
  public set activated(value: boolean | cdktf.IResolvable) {
    this._activated = value;
  }
  public resetActivated() {
    this._activated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activatedInput() {
    return this._activated;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string } | cdktf.IResolvable; 
  public get additionalProperties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_properties') as any;
  }
  public set additionalProperties(value: { [key: string]: string } | cdktf.IResolvable) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[]; 
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[]) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // blob_path_begins_with - computed: false, optional: true, required: false
  private _blobPathBeginsWith?: string; 
  public get blobPathBeginsWith() {
    return this.getStringAttribute('blob_path_begins_with');
  }
  public set blobPathBeginsWith(value: string) {
    this._blobPathBeginsWith = value;
  }
  public resetBlobPathBeginsWith() {
    this._blobPathBeginsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobPathBeginsWithInput() {
    return this._blobPathBeginsWith;
  }

  // blob_path_ends_with - computed: false, optional: true, required: false
  private _blobPathEndsWith?: string; 
  public get blobPathEndsWith() {
    return this.getStringAttribute('blob_path_ends_with');
  }
  public set blobPathEndsWith(value: string) {
    this._blobPathEndsWith = value;
  }
  public resetBlobPathEndsWith() {
    this._blobPathEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobPathEndsWithInput() {
    return this._blobPathEndsWith;
  }

  // data_factory_id - computed: false, optional: false, required: true
  private _dataFactoryId?: string; 
  public get dataFactoryId() {
    return this.getStringAttribute('data_factory_id');
  }
  public set dataFactoryId(value: string) {
    this._dataFactoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryIdInput() {
    return this._dataFactoryId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_empty_blobs - computed: false, optional: true, required: false
  private _ignoreEmptyBlobs?: boolean | cdktf.IResolvable; 
  public get ignoreEmptyBlobs() {
    return this.getBooleanAttribute('ignore_empty_blobs') as any;
  }
  public set ignoreEmptyBlobs(value: boolean | cdktf.IResolvable) {
    this._ignoreEmptyBlobs = value;
  }
  public resetIgnoreEmptyBlobs() {
    this._ignoreEmptyBlobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreEmptyBlobsInput() {
    return this._ignoreEmptyBlobs;
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

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }

  // pipeline - computed: false, optional: false, required: true
  private _pipeline?: DataFactoryTriggerBlobEventPipeline[]; 
  public get pipeline() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pipeline') as any;
  }
  public set pipeline(value: DataFactoryTriggerBlobEventPipeline[]) {
    this._pipeline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFactoryTriggerBlobEventTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFactoryTriggerBlobEventTimeouts) {
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
      activated: cdktf.booleanToTerraform(this._activated),
      additional_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._additionalProperties),
      annotations: cdktf.listMapper(cdktf.stringToTerraform)(this._annotations),
      blob_path_begins_with: cdktf.stringToTerraform(this._blobPathBeginsWith),
      blob_path_ends_with: cdktf.stringToTerraform(this._blobPathEndsWith),
      data_factory_id: cdktf.stringToTerraform(this._dataFactoryId),
      description: cdktf.stringToTerraform(this._description),
      events: cdktf.listMapper(cdktf.stringToTerraform)(this._events),
      ignore_empty_blobs: cdktf.booleanToTerraform(this._ignoreEmptyBlobs),
      name: cdktf.stringToTerraform(this._name),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      pipeline: cdktf.listMapper(dataFactoryTriggerBlobEventPipelineToTerraform)(this._pipeline),
      timeouts: dataFactoryTriggerBlobEventTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
