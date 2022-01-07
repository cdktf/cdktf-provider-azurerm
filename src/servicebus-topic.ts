// https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicebusTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#auto_delete_on_idle ServicebusTopic#auto_delete_on_idle}
  */
  readonly autoDeleteOnIdle?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#default_message_ttl ServicebusTopic#default_message_ttl}
  */
  readonly defaultMessageTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#duplicate_detection_history_time_window ServicebusTopic#duplicate_detection_history_time_window}
  */
  readonly duplicateDetectionHistoryTimeWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#enable_batched_operations ServicebusTopic#enable_batched_operations}
  */
  readonly enableBatchedOperations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#enable_express ServicebusTopic#enable_express}
  */
  readonly enableExpress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#enable_partitioning ServicebusTopic#enable_partitioning}
  */
  readonly enablePartitioning?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#max_message_size_in_kilobytes ServicebusTopic#max_message_size_in_kilobytes}
  */
  readonly maxMessageSizeInKilobytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#max_size_in_megabytes ServicebusTopic#max_size_in_megabytes}
  */
  readonly maxSizeInMegabytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#name ServicebusTopic#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#namespace_id ServicebusTopic#namespace_id}
  */
  readonly namespaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#namespace_name ServicebusTopic#namespace_name}
  */
  readonly namespaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#requires_duplicate_detection ServicebusTopic#requires_duplicate_detection}
  */
  readonly requiresDuplicateDetection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#resource_group_name ServicebusTopic#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#status ServicebusTopic#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#support_ordering ServicebusTopic#support_ordering}
  */
  readonly supportOrdering?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#timeouts ServicebusTopic#timeouts}
  */
  readonly timeouts?: ServicebusTopicTimeouts;
}
export interface ServicebusTopicTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#create ServicebusTopic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#delete ServicebusTopic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#read ServicebusTopic#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html#update ServicebusTopic#update}
  */
  readonly update?: string;
}

export function servicebusTopicTimeoutsToTerraform(struct?: ServicebusTopicTimeoutsOutputReference | ServicebusTopicTimeouts): any {
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

export class ServicebusTopicTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServicebusTopicTimeouts | undefined {
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

  public set internalValue(value: ServicebusTopicTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html azurerm_servicebus_topic}
*/
export class ServicebusTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_servicebus_topic";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html azurerm_servicebus_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicebusTopicConfig
  */
  public constructor(scope: Construct, id: string, config: ServicebusTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_topic',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoDeleteOnIdle = config.autoDeleteOnIdle;
    this._defaultMessageTtl = config.defaultMessageTtl;
    this._duplicateDetectionHistoryTimeWindow = config.duplicateDetectionHistoryTimeWindow;
    this._enableBatchedOperations = config.enableBatchedOperations;
    this._enableExpress = config.enableExpress;
    this._enablePartitioning = config.enablePartitioning;
    this._maxMessageSizeInKilobytes = config.maxMessageSizeInKilobytes;
    this._maxSizeInMegabytes = config.maxSizeInMegabytes;
    this._name = config.name;
    this._namespaceId = config.namespaceId;
    this._namespaceName = config.namespaceName;
    this._requiresDuplicateDetection = config.requiresDuplicateDetection;
    this._resourceGroupName = config.resourceGroupName;
    this._status = config.status;
    this._supportOrdering = config.supportOrdering;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_delete_on_idle - computed: true, optional: true, required: false
  private _autoDeleteOnIdle?: string; 
  public get autoDeleteOnIdle() {
    return this.getStringAttribute('auto_delete_on_idle');
  }
  public set autoDeleteOnIdle(value: string) {
    this._autoDeleteOnIdle = value;
  }
  public resetAutoDeleteOnIdle() {
    this._autoDeleteOnIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteOnIdleInput() {
    return this._autoDeleteOnIdle;
  }

  // default_message_ttl - computed: true, optional: true, required: false
  private _defaultMessageTtl?: string; 
  public get defaultMessageTtl() {
    return this.getStringAttribute('default_message_ttl');
  }
  public set defaultMessageTtl(value: string) {
    this._defaultMessageTtl = value;
  }
  public resetDefaultMessageTtl() {
    this._defaultMessageTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMessageTtlInput() {
    return this._defaultMessageTtl;
  }

  // duplicate_detection_history_time_window - computed: true, optional: true, required: false
  private _duplicateDetectionHistoryTimeWindow?: string; 
  public get duplicateDetectionHistoryTimeWindow() {
    return this.getStringAttribute('duplicate_detection_history_time_window');
  }
  public set duplicateDetectionHistoryTimeWindow(value: string) {
    this._duplicateDetectionHistoryTimeWindow = value;
  }
  public resetDuplicateDetectionHistoryTimeWindow() {
    this._duplicateDetectionHistoryTimeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateDetectionHistoryTimeWindowInput() {
    return this._duplicateDetectionHistoryTimeWindow;
  }

  // enable_batched_operations - computed: false, optional: true, required: false
  private _enableBatchedOperations?: boolean | cdktf.IResolvable; 
  public get enableBatchedOperations() {
    return this.getBooleanAttribute('enable_batched_operations') as any;
  }
  public set enableBatchedOperations(value: boolean | cdktf.IResolvable) {
    this._enableBatchedOperations = value;
  }
  public resetEnableBatchedOperations() {
    this._enableBatchedOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBatchedOperationsInput() {
    return this._enableBatchedOperations;
  }

  // enable_express - computed: false, optional: true, required: false
  private _enableExpress?: boolean | cdktf.IResolvable; 
  public get enableExpress() {
    return this.getBooleanAttribute('enable_express') as any;
  }
  public set enableExpress(value: boolean | cdktf.IResolvable) {
    this._enableExpress = value;
  }
  public resetEnableExpress() {
    this._enableExpress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExpressInput() {
    return this._enableExpress;
  }

  // enable_partitioning - computed: false, optional: true, required: false
  private _enablePartitioning?: boolean | cdktf.IResolvable; 
  public get enablePartitioning() {
    return this.getBooleanAttribute('enable_partitioning') as any;
  }
  public set enablePartitioning(value: boolean | cdktf.IResolvable) {
    this._enablePartitioning = value;
  }
  public resetEnablePartitioning() {
    this._enablePartitioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePartitioningInput() {
    return this._enablePartitioning;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_message_size_in_kilobytes - computed: true, optional: true, required: false
  private _maxMessageSizeInKilobytes?: number; 
  public get maxMessageSizeInKilobytes() {
    return this.getNumberAttribute('max_message_size_in_kilobytes');
  }
  public set maxMessageSizeInKilobytes(value: number) {
    this._maxMessageSizeInKilobytes = value;
  }
  public resetMaxMessageSizeInKilobytes() {
    this._maxMessageSizeInKilobytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageSizeInKilobytesInput() {
    return this._maxMessageSizeInKilobytes;
  }

  // max_size_in_megabytes - computed: true, optional: true, required: false
  private _maxSizeInMegabytes?: number; 
  public get maxSizeInMegabytes() {
    return this.getNumberAttribute('max_size_in_megabytes');
  }
  public set maxSizeInMegabytes(value: number) {
    this._maxSizeInMegabytes = value;
  }
  public resetMaxSizeInMegabytes() {
    this._maxSizeInMegabytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInMegabytesInput() {
    return this._maxSizeInMegabytes;
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

  // namespace_id - computed: true, optional: true, required: false
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // namespace_name - computed: true, optional: true, required: false
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  public resetNamespaceName() {
    this._namespaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // requires_duplicate_detection - computed: false, optional: true, required: false
  private _requiresDuplicateDetection?: boolean | cdktf.IResolvable; 
  public get requiresDuplicateDetection() {
    return this.getBooleanAttribute('requires_duplicate_detection') as any;
  }
  public set requiresDuplicateDetection(value: boolean | cdktf.IResolvable) {
    this._requiresDuplicateDetection = value;
  }
  public resetRequiresDuplicateDetection() {
    this._requiresDuplicateDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresDuplicateDetectionInput() {
    return this._requiresDuplicateDetection;
  }

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // support_ordering - computed: false, optional: true, required: false
  private _supportOrdering?: boolean | cdktf.IResolvable; 
  public get supportOrdering() {
    return this.getBooleanAttribute('support_ordering') as any;
  }
  public set supportOrdering(value: boolean | cdktf.IResolvable) {
    this._supportOrdering = value;
  }
  public resetSupportOrdering() {
    this._supportOrdering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportOrderingInput() {
    return this._supportOrdering;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServicebusTopicTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServicebusTopicTimeouts) {
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
      auto_delete_on_idle: cdktf.stringToTerraform(this._autoDeleteOnIdle),
      default_message_ttl: cdktf.stringToTerraform(this._defaultMessageTtl),
      duplicate_detection_history_time_window: cdktf.stringToTerraform(this._duplicateDetectionHistoryTimeWindow),
      enable_batched_operations: cdktf.booleanToTerraform(this._enableBatchedOperations),
      enable_express: cdktf.booleanToTerraform(this._enableExpress),
      enable_partitioning: cdktf.booleanToTerraform(this._enablePartitioning),
      max_message_size_in_kilobytes: cdktf.numberToTerraform(this._maxMessageSizeInKilobytes),
      max_size_in_megabytes: cdktf.numberToTerraform(this._maxSizeInMegabytes),
      name: cdktf.stringToTerraform(this._name),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      requires_duplicate_detection: cdktf.booleanToTerraform(this._requiresDuplicateDetection),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      status: cdktf.stringToTerraform(this._status),
      support_ordering: cdktf.booleanToTerraform(this._supportOrdering),
      timeouts: servicebusTopicTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
