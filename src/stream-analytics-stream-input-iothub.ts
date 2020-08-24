// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StreamAnalyticsStreamInputIothubConfig extends TerraformMetaArguments {
  readonly endpoint: string;
  readonly eventhubConsumerGroupName: string;
  readonly iothubNamespace: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sharedAccessPolicyKey: string;
  readonly sharedAccessPolicyName: string;
  readonly streamAnalyticsJobName: string;
  /** serialization block */
  readonly serialization: StreamAnalyticsStreamInputIothubSerialization[];
  /** timeouts block */
  readonly timeouts?: StreamAnalyticsStreamInputIothubTimeouts;
}
export interface StreamAnalyticsStreamInputIothubSerialization {
  readonly encoding?: string;
  readonly fieldDelimiter?: string;
  readonly type: string;
}
export interface StreamAnalyticsStreamInputIothubTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class StreamAnalyticsStreamInputIothub extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StreamAnalyticsStreamInputIothubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_stream_input_iothub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endpoint = config.endpoint;
    this._eventhubConsumerGroupName = config.eventhubConsumerGroupName;
    this._iothubNamespace = config.iothubNamespace;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sharedAccessPolicyKey = config.sharedAccessPolicyKey;
    this._sharedAccessPolicyName = config.sharedAccessPolicyName;
    this._streamAnalyticsJobName = config.streamAnalyticsJobName;
    this._serialization = config.serialization;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: false, required: true
  private _endpoint: string;
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }

  // eventhub_consumer_group_name - computed: false, optional: false, required: true
  private _eventhubConsumerGroupName: string;
  public get eventhubConsumerGroupName() {
    return this._eventhubConsumerGroupName;
  }
  public set eventhubConsumerGroupName(value: string) {
    this._eventhubConsumerGroupName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // iothub_namespace - computed: false, optional: false, required: true
  private _iothubNamespace: string;
  public get iothubNamespace() {
    return this._iothubNamespace;
  }
  public set iothubNamespace(value: string) {
    this._iothubNamespace = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
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
  private _serialization: StreamAnalyticsStreamInputIothubSerialization[];
  public get serialization() {
    return this._serialization;
  }
  public set serialization(value: StreamAnalyticsStreamInputIothubSerialization[]) {
    this._serialization = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsStreamInputIothubTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StreamAnalyticsStreamInputIothubTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: this._endpoint,
      eventhub_consumer_group_name: this._eventhubConsumerGroupName,
      iothub_namespace: this._iothubNamespace,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      shared_access_policy_key: this._sharedAccessPolicyKey,
      shared_access_policy_name: this._sharedAccessPolicyName,
      stream_analytics_job_name: this._streamAnalyticsJobName,
      serialization: this._serialization,
      timeouts: this._timeouts,
    };
  }
}
