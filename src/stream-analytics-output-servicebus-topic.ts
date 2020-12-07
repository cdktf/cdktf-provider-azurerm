// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_topic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsOutputServicebusTopicConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly servicebusNamespace: string;
  readonly sharedAccessPolicyKey: string;
  readonly sharedAccessPolicyName: string;
  readonly streamAnalyticsJobName: string;
  readonly topicName: string;
  /** serialization block */
  readonly serialization: StreamAnalyticsOutputServicebusTopicSerialization[];
  /** timeouts block */
  readonly timeouts?: StreamAnalyticsOutputServicebusTopicTimeouts;
}
export interface StreamAnalyticsOutputServicebusTopicSerialization {
  readonly encoding?: string;
  readonly fieldDelimiter?: string;
  readonly format?: string;
  readonly type: string;
}

function streamAnalyticsOutputServicebusTopicSerializationToTerraform(struct?: StreamAnalyticsOutputServicebusTopicSerialization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    format: cdktf.stringToTerraform(struct!.format),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StreamAnalyticsOutputServicebusTopicTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function streamAnalyticsOutputServicebusTopicTimeoutsToTerraform(struct?: StreamAnalyticsOutputServicebusTopicTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class StreamAnalyticsOutputServicebusTopic extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StreamAnalyticsOutputServicebusTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_output_servicebus_topic',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._servicebusNamespace = config.servicebusNamespace;
    this._sharedAccessPolicyKey = config.sharedAccessPolicyKey;
    this._sharedAccessPolicyName = config.sharedAccessPolicyName;
    this._streamAnalyticsJobName = config.streamAnalyticsJobName;
    this._topicName = config.topicName;
    this._serialization = config.serialization;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // servicebus_namespace - computed: false, optional: false, required: true
  private _servicebusNamespace: string;
  public get servicebusNamespace() {
    return this.getStringAttribute('servicebus_namespace');
  }
  public set servicebusNamespace(value: string) {
    this._servicebusNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicebusNamespaceInput() {
    return this._servicebusNamespace
  }

  // shared_access_policy_key - computed: false, optional: false, required: true
  private _sharedAccessPolicyKey: string;
  public get sharedAccessPolicyKey() {
    return this.getStringAttribute('shared_access_policy_key');
  }
  public set sharedAccessPolicyKey(value: string) {
    this._sharedAccessPolicyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessPolicyKeyInput() {
    return this._sharedAccessPolicyKey
  }

  // shared_access_policy_name - computed: false, optional: false, required: true
  private _sharedAccessPolicyName: string;
  public get sharedAccessPolicyName() {
    return this.getStringAttribute('shared_access_policy_name');
  }
  public set sharedAccessPolicyName(value: string) {
    this._sharedAccessPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessPolicyNameInput() {
    return this._sharedAccessPolicyName
  }

  // stream_analytics_job_name - computed: false, optional: false, required: true
  private _streamAnalyticsJobName: string;
  public get streamAnalyticsJobName() {
    return this.getStringAttribute('stream_analytics_job_name');
  }
  public set streamAnalyticsJobName(value: string) {
    this._streamAnalyticsJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamAnalyticsJobNameInput() {
    return this._streamAnalyticsJobName
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName: string;
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName
  }

  // serialization - computed: false, optional: false, required: true
  private _serialization: StreamAnalyticsOutputServicebusTopicSerialization[];
  public get serialization() {
    return this.interpolationForAttribute('serialization') as any;
  }
  public set serialization(value: StreamAnalyticsOutputServicebusTopicSerialization[]) {
    this._serialization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationInput() {
    return this._serialization
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsOutputServicebusTopicTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StreamAnalyticsOutputServicebusTopicTimeouts ) {
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
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      servicebus_namespace: cdktf.stringToTerraform(this._servicebusNamespace),
      shared_access_policy_key: cdktf.stringToTerraform(this._sharedAccessPolicyKey),
      shared_access_policy_name: cdktf.stringToTerraform(this._sharedAccessPolicyName),
      stream_analytics_job_name: cdktf.stringToTerraform(this._streamAnalyticsJobName),
      topic_name: cdktf.stringToTerraform(this._topicName),
      serialization: cdktf.listMapper(streamAnalyticsOutputServicebusTopicSerializationToTerraform)(this._serialization),
      timeouts: streamAnalyticsOutputServicebusTopicTimeoutsToTerraform(this._timeouts),
    };
  }
}
