// https://www.terraform.io/docs/providers/azurerm/r/batch_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_job.html#batch_pool_id BatchJob#batch_pool_id}
  */
  readonly batchPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_job.html#common_environment_properties BatchJob#common_environment_properties}
  */
  readonly commonEnvironmentProperties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_job.html#display_name BatchJob#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_job.html#name BatchJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_job.html#priority BatchJob#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_job.html#task_retry_maximum BatchJob#task_retry_maximum}
  */
  readonly taskRetryMaximum?: number;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_job.html#timeouts BatchJob#timeouts}
  */
  readonly timeouts?: BatchJobTimeouts;
}
export interface BatchJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_job.html#create BatchJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_job.html#delete BatchJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_job.html#read BatchJob#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_job.html#update BatchJob#update}
  */
  readonly update?: string;
}

function batchJobTimeoutsToTerraform(struct?: BatchJobTimeoutsOutputReference | BatchJobTimeouts): any {
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

export class BatchJobTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/batch_job.html azurerm_batch_job}
*/
export class BatchJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_batch_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/batch_job.html azurerm_batch_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchJobConfig
  */
  public constructor(scope: Construct, id: string, config: BatchJobConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_batch_job',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._batchPoolId = config.batchPoolId;
    this._commonEnvironmentProperties = config.commonEnvironmentProperties;
    this._displayName = config.displayName;
    this._name = config.name;
    this._priority = config.priority;
    this._taskRetryMaximum = config.taskRetryMaximum;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batch_pool_id - computed: false, optional: false, required: true
  private _batchPoolId?: string; 
  public get batchPoolId() {
    return this.getStringAttribute('batch_pool_id');
  }
  public set batchPoolId(value: string) {
    this._batchPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchPoolIdInput() {
    return this._batchPoolId
  }

  // common_environment_properties - computed: false, optional: true, required: false
  private _commonEnvironmentProperties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get commonEnvironmentProperties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('common_environment_properties') as any;
  }
  public set commonEnvironmentProperties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._commonEnvironmentProperties = value;
  }
  public resetCommonEnvironmentProperties() {
    this._commonEnvironmentProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonEnvironmentPropertiesInput() {
    return this._commonEnvironmentProperties
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string | undefined; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number | undefined; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number | undefined) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // task_retry_maximum - computed: false, optional: true, required: false
  private _taskRetryMaximum?: number | undefined; 
  public get taskRetryMaximum() {
    return this.getNumberAttribute('task_retry_maximum');
  }
  public set taskRetryMaximum(value: number | undefined) {
    this._taskRetryMaximum = value;
  }
  public resetTaskRetryMaximum() {
    this._taskRetryMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRetryMaximumInput() {
    return this._taskRetryMaximum
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BatchJobTimeouts | undefined; 
  private __timeoutsOutput = new BatchJobTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: BatchJobTimeouts | undefined) {
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
      batch_pool_id: cdktf.stringToTerraform(this._batchPoolId),
      common_environment_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._commonEnvironmentProperties),
      display_name: cdktf.stringToTerraform(this._displayName),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      task_retry_maximum: cdktf.numberToTerraform(this._taskRetryMaximum),
      timeouts: batchJobTimeoutsToTerraform(this._timeouts),
    };
  }
}
