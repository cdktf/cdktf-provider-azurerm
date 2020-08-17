// https://www.terraform.io/docs/providers/azurerm/r/servicebus_queue.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServicebusQueueConfig extends TerraformMetaArguments {
  readonly autoDeleteOnIdle?: string;
  readonly deadLetteringOnMessageExpiration?: boolean;
  readonly defaultMessageTtl?: string;
  readonly duplicateDetectionHistoryTimeWindow?: string;
  readonly enableExpress?: boolean;
  readonly enablePartitioning?: boolean;
  readonly lockDuration?: string;
  readonly maxDeliveryCount?: number;
  readonly maxSizeInMegabytes?: number;
  readonly name: string;
  readonly namespaceName: string;
  readonly requiresDuplicateDetection?: boolean;
  readonly requiresSession?: boolean;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: ServicebusQueueTimeouts;
}
export interface ServicebusQueueTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ServicebusQueue extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServicebusQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_queue',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoDeleteOnIdle = config.autoDeleteOnIdle;
    this._deadLetteringOnMessageExpiration = config.deadLetteringOnMessageExpiration;
    this._defaultMessageTtl = config.defaultMessageTtl;
    this._duplicateDetectionHistoryTimeWindow = config.duplicateDetectionHistoryTimeWindow;
    this._enableExpress = config.enableExpress;
    this._enablePartitioning = config.enablePartitioning;
    this._lockDuration = config.lockDuration;
    this._maxDeliveryCount = config.maxDeliveryCount;
    this._maxSizeInMegabytes = config.maxSizeInMegabytes;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._requiresDuplicateDetection = config.requiresDuplicateDetection;
    this._requiresSession = config.requiresSession;
    this._resourceGroupName = config.resourceGroupName;
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

  // dead_lettering_on_message_expiration - computed: false, optional: true, required: false
  private _deadLetteringOnMessageExpiration?: boolean;
  public get deadLetteringOnMessageExpiration() {
    return this._deadLetteringOnMessageExpiration;
  }
  public set deadLetteringOnMessageExpiration(value: boolean | undefined) {
    this._deadLetteringOnMessageExpiration = value;
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

  // lock_duration - computed: true, optional: true, required: false
  private _lockDuration?: string;
  public get lockDuration() {
    return this._lockDuration ?? this.getStringAttribute('lock_duration');
  }
  public set lockDuration(value: string | undefined) {
    this._lockDuration = value;
  }

  // max_delivery_count - computed: false, optional: true, required: false
  private _maxDeliveryCount?: number;
  public get maxDeliveryCount() {
    return this._maxDeliveryCount;
  }
  public set maxDeliveryCount(value: number | undefined) {
    this._maxDeliveryCount = value;
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

  // requires_session - computed: false, optional: true, required: false
  private _requiresSession?: boolean;
  public get requiresSession() {
    return this._requiresSession;
  }
  public set requiresSession(value: boolean | undefined) {
    this._requiresSession = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicebusQueueTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ServicebusQueueTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_delete_on_idle: this._autoDeleteOnIdle,
      dead_lettering_on_message_expiration: this._deadLetteringOnMessageExpiration,
      default_message_ttl: this._defaultMessageTtl,
      duplicate_detection_history_time_window: this._duplicateDetectionHistoryTimeWindow,
      enable_express: this._enableExpress,
      enable_partitioning: this._enablePartitioning,
      lock_duration: this._lockDuration,
      max_delivery_count: this._maxDeliveryCount,
      max_size_in_megabytes: this._maxSizeInMegabytes,
      name: this._name,
      namespace_name: this._namespaceName,
      requires_duplicate_detection: this._requiresDuplicateDetection,
      requires_session: this._requiresSession,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
