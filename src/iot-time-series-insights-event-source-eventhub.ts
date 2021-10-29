// https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotTimeSeriesInsightsEventSourceEventhubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#consumer_group_name IotTimeSeriesInsightsEventSourceEventhub#consumer_group_name}
  */
  readonly consumerGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#environment_id IotTimeSeriesInsightsEventSourceEventhub#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#event_source_resource_id IotTimeSeriesInsightsEventSourceEventhub#event_source_resource_id}
  */
  readonly eventSourceResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#eventhub_name IotTimeSeriesInsightsEventSourceEventhub#eventhub_name}
  */
  readonly eventhubName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#location IotTimeSeriesInsightsEventSourceEventhub#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#name IotTimeSeriesInsightsEventSourceEventhub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#namespace_name IotTimeSeriesInsightsEventSourceEventhub#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#shared_access_key IotTimeSeriesInsightsEventSourceEventhub#shared_access_key}
  */
  readonly sharedAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#shared_access_key_name IotTimeSeriesInsightsEventSourceEventhub#shared_access_key_name}
  */
  readonly sharedAccessKeyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#tags IotTimeSeriesInsightsEventSourceEventhub#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#timestamp_property_name IotTimeSeriesInsightsEventSourceEventhub#timestamp_property_name}
  */
  readonly timestampPropertyName?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#timeouts IotTimeSeriesInsightsEventSourceEventhub#timeouts}
  */
  readonly timeouts?: IotTimeSeriesInsightsEventSourceEventhubTimeouts;
}
export interface IotTimeSeriesInsightsEventSourceEventhubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#create IotTimeSeriesInsightsEventSourceEventhub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#delete IotTimeSeriesInsightsEventSourceEventhub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#read IotTimeSeriesInsightsEventSourceEventhub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html#update IotTimeSeriesInsightsEventSourceEventhub#update}
  */
  readonly update?: string;
}

function iotTimeSeriesInsightsEventSourceEventhubTimeoutsToTerraform(struct?: IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference | IotTimeSeriesInsightsEventSourceEventhubTimeouts): any {
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

export class IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html azurerm_iot_time_series_insights_event_source_eventhub}
*/
export class IotTimeSeriesInsightsEventSourceEventhub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_iot_time_series_insights_event_source_eventhub";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_eventhub.html azurerm_iot_time_series_insights_event_source_eventhub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotTimeSeriesInsightsEventSourceEventhubConfig
  */
  public constructor(scope: Construct, id: string, config: IotTimeSeriesInsightsEventSourceEventhubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iot_time_series_insights_event_source_eventhub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._consumerGroupName = config.consumerGroupName;
    this._environmentId = config.environmentId;
    this._eventSourceResourceId = config.eventSourceResourceId;
    this._eventhubName = config.eventhubName;
    this._location = config.location;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._sharedAccessKey = config.sharedAccessKey;
    this._sharedAccessKeyName = config.sharedAccessKeyName;
    this._tags = config.tags;
    this._timestampPropertyName = config.timestampPropertyName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_group_name - computed: false, optional: false, required: true
  private _consumerGroupName?: string; 
  public get consumerGroupName() {
    return this.getStringAttribute('consumer_group_name');
  }
  public set consumerGroupName(value: string) {
    this._consumerGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupNameInput() {
    return this._consumerGroupName
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId
  }

  // event_source_resource_id - computed: false, optional: false, required: true
  private _eventSourceResourceId?: string; 
  public get eventSourceResourceId() {
    return this.getStringAttribute('event_source_resource_id');
  }
  public set eventSourceResourceId(value: string) {
    this._eventSourceResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceResourceIdInput() {
    return this._eventSourceResourceId
  }

  // eventhub_name - computed: false, optional: false, required: true
  private _eventhubName?: string; 
  public get eventhubName() {
    return this.getStringAttribute('eventhub_name');
  }
  public set eventhubName(value: string) {
    this._eventhubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubNameInput() {
    return this._eventhubName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName
  }

  // shared_access_key - computed: false, optional: false, required: true
  private _sharedAccessKey?: string; 
  public get sharedAccessKey() {
    return this.getStringAttribute('shared_access_key');
  }
  public set sharedAccessKey(value: string) {
    this._sharedAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessKeyInput() {
    return this._sharedAccessKey
  }

  // shared_access_key_name - computed: false, optional: false, required: true
  private _sharedAccessKeyName?: string; 
  public get sharedAccessKeyName() {
    return this.getStringAttribute('shared_access_key_name');
  }
  public set sharedAccessKeyName(value: string) {
    this._sharedAccessKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessKeyNameInput() {
    return this._sharedAccessKeyName
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

  // timestamp_property_name - computed: true, optional: true, required: false
  private _timestampPropertyName?: string | undefined; 
  public get timestampPropertyName() {
    return this.getStringAttribute('timestamp_property_name');
  }
  public set timestampPropertyName(value: string | undefined) {
    this._timestampPropertyName = value;
  }
  public resetTimestampPropertyName() {
    this._timestampPropertyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampPropertyNameInput() {
    return this._timestampPropertyName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IotTimeSeriesInsightsEventSourceEventhubTimeouts | undefined; 
  private __timeoutsOutput = new IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: IotTimeSeriesInsightsEventSourceEventhubTimeouts | undefined) {
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
      consumer_group_name: cdktf.stringToTerraform(this._consumerGroupName),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      event_source_resource_id: cdktf.stringToTerraform(this._eventSourceResourceId),
      eventhub_name: cdktf.stringToTerraform(this._eventhubName),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      shared_access_key: cdktf.stringToTerraform(this._sharedAccessKey),
      shared_access_key_name: cdktf.stringToTerraform(this._sharedAccessKeyName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timestamp_property_name: cdktf.stringToTerraform(this._timestampPropertyName),
      timeouts: iotTimeSeriesInsightsEventSourceEventhubTimeoutsToTerraform(this._timeouts),
    };
  }
}
