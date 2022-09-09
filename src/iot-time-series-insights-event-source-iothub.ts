// https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotTimeSeriesInsightsEventSourceIothubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#consumer_group_name IotTimeSeriesInsightsEventSourceIothub#consumer_group_name}
  */
  readonly consumerGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#environment_id IotTimeSeriesInsightsEventSourceIothub#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#event_source_resource_id IotTimeSeriesInsightsEventSourceIothub#event_source_resource_id}
  */
  readonly eventSourceResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#id IotTimeSeriesInsightsEventSourceIothub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#iothub_name IotTimeSeriesInsightsEventSourceIothub#iothub_name}
  */
  readonly iothubName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#location IotTimeSeriesInsightsEventSourceIothub#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#name IotTimeSeriesInsightsEventSourceIothub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#shared_access_key IotTimeSeriesInsightsEventSourceIothub#shared_access_key}
  */
  readonly sharedAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#shared_access_key_name IotTimeSeriesInsightsEventSourceIothub#shared_access_key_name}
  */
  readonly sharedAccessKeyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#tags IotTimeSeriesInsightsEventSourceIothub#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#timestamp_property_name IotTimeSeriesInsightsEventSourceIothub#timestamp_property_name}
  */
  readonly timestampPropertyName?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#timeouts IotTimeSeriesInsightsEventSourceIothub#timeouts}
  */
  readonly timeouts?: IotTimeSeriesInsightsEventSourceIothubTimeouts;
}
export interface IotTimeSeriesInsightsEventSourceIothubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#create IotTimeSeriesInsightsEventSourceIothub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#delete IotTimeSeriesInsightsEventSourceIothub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#read IotTimeSeriesInsightsEventSourceIothub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#update IotTimeSeriesInsightsEventSourceIothub#update}
  */
  readonly update?: string;
}

export function iotTimeSeriesInsightsEventSourceIothubTimeoutsToTerraform(struct?: IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference | IotTimeSeriesInsightsEventSourceIothubTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTimeSeriesInsightsEventSourceIothubTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: IotTimeSeriesInsightsEventSourceIothubTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub azurerm_iot_time_series_insights_event_source_iothub}
*/
export class IotTimeSeriesInsightsEventSourceIothub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_iot_time_series_insights_event_source_iothub";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub azurerm_iot_time_series_insights_event_source_iothub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotTimeSeriesInsightsEventSourceIothubConfig
  */
  public constructor(scope: Construct, id: string, config: IotTimeSeriesInsightsEventSourceIothubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iot_time_series_insights_event_source_iothub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.22.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consumerGroupName = config.consumerGroupName;
    this._environmentId = config.environmentId;
    this._eventSourceResourceId = config.eventSourceResourceId;
    this._id = config.id;
    this._iothubName = config.iothubName;
    this._location = config.location;
    this._name = config.name;
    this._sharedAccessKey = config.sharedAccessKey;
    this._sharedAccessKeyName = config.sharedAccessKeyName;
    this._tags = config.tags;
    this._timestampPropertyName = config.timestampPropertyName;
    this._timeouts.internalValue = config.timeouts;
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
    return this._consumerGroupName;
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
    return this._environmentId;
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
    return this._eventSourceResourceId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // iothub_name - computed: false, optional: false, required: true
  private _iothubName?: string; 
  public get iothubName() {
    return this.getStringAttribute('iothub_name');
  }
  public set iothubName(value: string) {
    this._iothubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubNameInput() {
    return this._iothubName;
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
    return this._location;
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
    return this._sharedAccessKey;
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
    return this._sharedAccessKeyName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timestamp_property_name - computed: true, optional: true, required: false
  private _timestampPropertyName?: string; 
  public get timestampPropertyName() {
    return this.getStringAttribute('timestamp_property_name');
  }
  public set timestampPropertyName(value: string) {
    this._timestampPropertyName = value;
  }
  public resetTimestampPropertyName() {
    this._timestampPropertyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampPropertyNameInput() {
    return this._timestampPropertyName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IotTimeSeriesInsightsEventSourceIothubTimeouts) {
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
      consumer_group_name: cdktf.stringToTerraform(this._consumerGroupName),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      event_source_resource_id: cdktf.stringToTerraform(this._eventSourceResourceId),
      id: cdktf.stringToTerraform(this._id),
      iothub_name: cdktf.stringToTerraform(this._iothubName),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      shared_access_key: cdktf.stringToTerraform(this._sharedAccessKey),
      shared_access_key_name: cdktf.stringToTerraform(this._sharedAccessKeyName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timestamp_property_name: cdktf.stringToTerraform(this._timestampPropertyName),
      timeouts: iotTimeSeriesInsightsEventSourceIothubTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
