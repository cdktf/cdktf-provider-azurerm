// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StreamAnalyticsOutputServicebusQueueConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly queueName: string;
  readonly resourceGroupName: string;
  readonly servicebusNamespace: string;
  readonly sharedAccessPolicyKey: string;
  readonly sharedAccessPolicyName: string;
  readonly streamAnalyticsJobName: string;
  /** serialization block */
  readonly serialization: StreamAnalyticsOutputServicebusQueueSerialization[];
  /** timeouts block */
  readonly timeouts?: StreamAnalyticsOutputServicebusQueueTimeouts;
}
export interface StreamAnalyticsOutputServicebusQueueSerialization {
  readonly encoding?: string;
  readonly fieldDelimiter?: string;
  readonly format?: string;
  readonly type: string;
}
export interface StreamAnalyticsOutputServicebusQueueTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class StreamAnalyticsOutputServicebusQueue extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StreamAnalyticsOutputServicebusQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_output_servicebus_queue',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._queueName = config.queueName;
    this._resourceGroupName = config.resourceGroupName;
    this._servicebusNamespace = config.servicebusNamespace;
    this._sharedAccessPolicyKey = config.sharedAccessPolicyKey;
    this._sharedAccessPolicyName = config.sharedAccessPolicyName;
    this._streamAnalyticsJobName = config.streamAnalyticsJobName;
    this._serialization = config.serialization;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // queue_name - computed: false, optional: false, required: true
  private _queueName: string;
  public get queueName() {
    return this._queueName;
  }
  public set queueName(value: string) {
    this._queueName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // servicebus_namespace - computed: false, optional: false, required: true
  private _servicebusNamespace: string;
  public get servicebusNamespace() {
    return this._servicebusNamespace;
  }
  public set servicebusNamespace(value: string) {
    this._servicebusNamespace = value;
  }

  // shared_access_policy_key - computed: false, optional: false, required: true
  private _sharedAccessPolicyKey: string;
  public get sharedAccessPolicyKey() {
    return this._sharedAccessPolicyKey;
  }
  public set sharedAccessPolicyKey(value: string) {
    this._sharedAccessPolicyKey = value;
  }

  // shared_access_policy_name - computed: false, optional: false, required: true
  private _sharedAccessPolicyName: string;
  public get sharedAccessPolicyName() {
    return this._sharedAccessPolicyName;
  }
  public set sharedAccessPolicyName(value: string) {
    this._sharedAccessPolicyName = value;
  }

  // stream_analytics_job_name - computed: false, optional: false, required: true
  private _streamAnalyticsJobName: string;
  public get streamAnalyticsJobName() {
    return this._streamAnalyticsJobName;
  }
  public set streamAnalyticsJobName(value: string) {
    this._streamAnalyticsJobName = value;
  }

  // serialization - computed: false, optional: false, required: true
  private _serialization: StreamAnalyticsOutputServicebusQueueSerialization[];
  public get serialization() {
    return this._serialization;
  }
  public set serialization(value: StreamAnalyticsOutputServicebusQueueSerialization[]) {
    this._serialization = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsOutputServicebusQueueTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StreamAnalyticsOutputServicebusQueueTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      queue_name: this._queueName,
      resource_group_name: this._resourceGroupName,
      servicebus_namespace: this._servicebusNamespace,
      shared_access_policy_key: this._sharedAccessPolicyKey,
      shared_access_policy_name: this._sharedAccessPolicyName,
      stream_analytics_job_name: this._streamAnalyticsJobName,
      serialization: this._serialization,
      timeouts: this._timeouts,
    };
  }
}
