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

function batchJobTimeoutsToTerraform(struct?: BatchJobTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
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
  private _batchPoolId: string;
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
  private _commonEnvironmentProperties?: { [key: string]: string } | cdktf.IResolvable;
  public get commonEnvironmentProperties() {
    return this.interpolationForAttribute('common_environment_properties') as any;
  }
  public set commonEnvironmentProperties(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number ) {
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
  private _taskRetryMaximum?: number;
  public get taskRetryMaximum() {
    return this.getNumberAttribute('task_retry_maximum');
  }
  public set taskRetryMaximum(value: number ) {
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
  private _timeouts?: BatchJobTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BatchJobTimeouts ) {
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
