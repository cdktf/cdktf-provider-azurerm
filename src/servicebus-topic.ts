// https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServicebusTopicConfig extends TerraformMetaArguments {
  readonly autoDeleteOnIdle?: string;
  readonly defaultMessageTtl?: string;
  readonly duplicateDetectionHistoryTimeWindow?: string;
  readonly enableBatchedOperations?: boolean;
  readonly enableExpress?: boolean;
  readonly enablePartitioning?: boolean;
  readonly maxSizeInMegabytes?: number;
  readonly name: string;
  readonly namespaceName: string;
  readonly requiresDuplicateDetection?: boolean;
  readonly resourceGroupName: string;
  readonly status?: string;
  readonly supportOrdering?: boolean;
  /** timeouts block */
  readonly timeouts?: ServicebusTopicTimeouts;
}
export interface ServicebusTopicTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ServicebusTopic extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._maxSizeInMegabytes = config.maxSizeInMegabytes;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._requiresDuplicateDetection = config.requiresDuplicateDetection;
    this._resourceGroupName = config.resourceGroupName;
    this._status = config.status;
    this._supportOrdering = config.supportOrdering;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_delete_on_idle - computed: true, optional: true, required: false
  private _autoDeleteOnIdle?: string;
  public get autoDeleteOnIdle() {
    return this._autoDeleteOnIdle ?? this.getStringAttribute('auto_delete_on_idle');
  }
  public set autoDeleteOnIdle(value: string | undefined) {
    this._autoDeleteOnIdle = value;
  }

  // default_message_ttl - computed: true, optional: true, required: false
  private _defaultMessageTtl?: string;
  public get defaultMessageTtl() {
    return this._defaultMessageTtl ?? this.getStringAttribute('default_message_ttl');
  }
  public set defaultMessageTtl(value: string | undefined) {
    this._defaultMessageTtl = value;
  }

  // duplicate_detection_history_time_window - computed: true, optional: true, required: false
  private _duplicateDetectionHistoryTimeWindow?: string;
  public get duplicateDetectionHistoryTimeWindow() {
    return this._duplicateDetectionHistoryTimeWindow ?? this.getStringAttribute('duplicate_detection_history_time_window');
  }
  public set duplicateDetectionHistoryTimeWindow(value: string | undefined) {
    this._duplicateDetectionHistoryTimeWindow = value;
  }

  // enable_batched_operations - computed: false, optional: true, required: false
  private _enableBatchedOperations?: boolean;
  public get enableBatchedOperations() {
    return this._enableBatchedOperations;
  }
  public set enableBatchedOperations(value: boolean | undefined) {
    this._enableBatchedOperations = value;
  }

  // enable_express - computed: false, optional: true, required: false
  private _enableExpress?: boolean;
  public get enableExpress() {
    return this._enableExpress;
  }
  public set enableExpress(value: boolean | undefined) {
    this._enableExpress = value;
  }

  // enable_partitioning - computed: false, optional: true, required: false
  private _enablePartitioning?: boolean;
  public get enablePartitioning() {
    return this._enablePartitioning;
  }
  public set enablePartitioning(value: boolean | undefined) {
    this._enablePartitioning = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // max_size_in_megabytes - computed: true, optional: true, required: false
  private _maxSizeInMegabytes?: number;
  public get maxSizeInMegabytes() {
    return this._maxSizeInMegabytes ?? this.getNumberAttribute('max_size_in_megabytes');
  }
  public set maxSizeInMegabytes(value: number | undefined) {
    this._maxSizeInMegabytes = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
  public get namespaceName() {
    return this._namespaceName;
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }

  // requires_duplicate_detection - computed: false, optional: true, required: false
  private _requiresDuplicateDetection?: boolean;
  public get requiresDuplicateDetection() {
    return this._requiresDuplicateDetection;
  }
  public set requiresDuplicateDetection(value: boolean | undefined) {
    this._requiresDuplicateDetection = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this._status;
  }
  public set status(value: string | undefined) {
    this._status = value;
  }

  // support_ordering - computed: false, optional: true, required: false
  private _supportOrdering?: boolean;
  public get supportOrdering() {
    return this._supportOrdering;
  }
  public set supportOrdering(value: boolean | undefined) {
    this._supportOrdering = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicebusTopicTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ServicebusTopicTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_delete_on_idle: this._autoDeleteOnIdle,
      default_message_ttl: this._defaultMessageTtl,
      duplicate_detection_history_time_window: this._duplicateDetectionHistoryTimeWindow,
      enable_batched_operations: this._enableBatchedOperations,
      enable_express: this._enableExpress,
      enable_partitioning: this._enablePartitioning,
      max_size_in_megabytes: this._maxSizeInMegabytes,
      name: this._name,
      namespace_name: this._namespaceName,
      requires_duplicate_detection: this._requiresDuplicateDetection,
      resource_group_name: this._resourceGroupName,
      status: this._status,
      support_ordering: this._supportOrdering,
      timeouts: this._timeouts,
    };
  }
}
