// https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventgridTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#inbound_ip_rule EventgridTopic#inbound_ip_rule}
  */
  readonly inboundIpRule?: EventgridTopicInboundIpRule[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#input_schema EventgridTopic#input_schema}
  */
  readonly inputSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#location EventgridTopic#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#name EventgridTopic#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#public_network_access_enabled EventgridTopic#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#resource_group_name EventgridTopic#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#tags EventgridTopic#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#identity EventgridTopic#identity}
  */
  readonly identity?: EventgridTopicIdentity;
  /**
  * input_mapping_default_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#input_mapping_default_values EventgridTopic#input_mapping_default_values}
  */
  readonly inputMappingDefaultValues?: EventgridTopicInputMappingDefaultValues;
  /**
  * input_mapping_fields block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#input_mapping_fields EventgridTopic#input_mapping_fields}
  */
  readonly inputMappingFields?: EventgridTopicInputMappingFields;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#timeouts EventgridTopic#timeouts}
  */
  readonly timeouts?: EventgridTopicTimeouts;
}
export interface EventgridTopicInboundIpRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#action EventgridTopic#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#ip_mask EventgridTopic#ip_mask}
  */
  readonly ipMask?: string;
}

function eventgridTopicInboundIpRuleToTerraform(struct?: EventgridTopicInboundIpRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: struct!.action === undefined ? null : cdktf.stringToTerraform(struct!.action),
    ip_mask: struct!.ipMask === undefined ? null : cdktf.stringToTerraform(struct!.ipMask),
  }
}

export interface EventgridTopicIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#identity_ids EventgridTopic#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#type EventgridTopic#type}
  */
  readonly type: string;
}

function eventgridTopicIdentityToTerraform(struct?: EventgridTopicIdentityOutputReference | EventgridTopicIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class EventgridTopicIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[] | undefined; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[] | undefined) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface EventgridTopicInputMappingDefaultValues {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#data_version EventgridTopic#data_version}
  */
  readonly dataVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#event_type EventgridTopic#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#subject EventgridTopic#subject}
  */
  readonly subject?: string;
}

function eventgridTopicInputMappingDefaultValuesToTerraform(struct?: EventgridTopicInputMappingDefaultValuesOutputReference | EventgridTopicInputMappingDefaultValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_version: cdktf.stringToTerraform(struct!.dataVersion),
    event_type: cdktf.stringToTerraform(struct!.eventType),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}

export class EventgridTopicInputMappingDefaultValuesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // data_version - computed: false, optional: true, required: false
  private _dataVersion?: string | undefined; 
  public get dataVersion() {
    return this.getStringAttribute('data_version');
  }
  public set dataVersion(value: string | undefined) {
    this._dataVersion = value;
  }
  public resetDataVersion() {
    this._dataVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVersionInput() {
    return this._dataVersion
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType?: string | undefined; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string | undefined) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string | undefined; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string | undefined) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject
  }
}
export interface EventgridTopicInputMappingFields {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#data_version EventgridTopic#data_version}
  */
  readonly dataVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#event_time EventgridTopic#event_time}
  */
  readonly eventTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#event_type EventgridTopic#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#id EventgridTopic#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#subject EventgridTopic#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#topic EventgridTopic#topic}
  */
  readonly topic?: string;
}

function eventgridTopicInputMappingFieldsToTerraform(struct?: EventgridTopicInputMappingFieldsOutputReference | EventgridTopicInputMappingFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_version: cdktf.stringToTerraform(struct!.dataVersion),
    event_time: cdktf.stringToTerraform(struct!.eventTime),
    event_type: cdktf.stringToTerraform(struct!.eventType),
    id: cdktf.stringToTerraform(struct!.id),
    subject: cdktf.stringToTerraform(struct!.subject),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export class EventgridTopicInputMappingFieldsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // data_version - computed: false, optional: true, required: false
  private _dataVersion?: string | undefined; 
  public get dataVersion() {
    return this.getStringAttribute('data_version');
  }
  public set dataVersion(value: string | undefined) {
    this._dataVersion = value;
  }
  public resetDataVersion() {
    this._dataVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVersionInput() {
    return this._dataVersion
  }

  // event_time - computed: false, optional: true, required: false
  private _eventTime?: string | undefined; 
  public get eventTime() {
    return this.getStringAttribute('event_time');
  }
  public set eventTime(value: string | undefined) {
    this._eventTime = value;
  }
  public resetEventTime() {
    this._eventTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimeInput() {
    return this._eventTime
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType?: string | undefined; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string | undefined) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType
  }

  // id - computed: false, optional: true, required: false
  private _id?: string | undefined; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string | undefined; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string | undefined) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string | undefined; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string | undefined) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic
  }
}
export interface EventgridTopicTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#create EventgridTopic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#delete EventgridTopic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#read EventgridTopic#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html#update EventgridTopic#update}
  */
  readonly update?: string;
}

function eventgridTopicTimeoutsToTerraform(struct?: EventgridTopicTimeoutsOutputReference | EventgridTopicTimeouts): any {
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

export class EventgridTopicTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html azurerm_eventgrid_topic}
*/
export class EventgridTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_eventgrid_topic";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html azurerm_eventgrid_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventgridTopicConfig
  */
  public constructor(scope: Construct, id: string, config: EventgridTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventgrid_topic',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._inboundIpRule = config.inboundIpRule;
    this._inputSchema = config.inputSchema;
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._identity = config.identity;
    this._inputMappingDefaultValues = config.inputMappingDefaultValues;
    this._inputMappingFields = config.inputMappingFields;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inbound_ip_rule - computed: false, optional: true, required: false
  private _inboundIpRule?: EventgridTopicInboundIpRule[] | undefined; 
  public get inboundIpRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('inbound_ip_rule') as any;
  }
  public set inboundIpRule(value: EventgridTopicInboundIpRule[] | undefined) {
    this._inboundIpRule = value;
  }
  public resetInboundIpRule() {
    this._inboundIpRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundIpRuleInput() {
    return this._inboundIpRule
  }

  // input_schema - computed: false, optional: true, required: false
  private _inputSchema?: string | undefined; 
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
  public set inputSchema(value: string | undefined) {
    this._inputSchema = value;
  }
  public resetInputSchema() {
    this._inputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema
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

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled') as any;
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
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

  // identity - computed: false, optional: true, required: false
  private _identity?: EventgridTopicIdentity | undefined; 
  private __identityOutput = new EventgridTopicIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: EventgridTopicIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // input_mapping_default_values - computed: false, optional: true, required: false
  private _inputMappingDefaultValues?: EventgridTopicInputMappingDefaultValues | undefined; 
  private __inputMappingDefaultValuesOutput = new EventgridTopicInputMappingDefaultValuesOutputReference(this as any, "input_mapping_default_values", true);
  public get inputMappingDefaultValues() {
    return this.__inputMappingDefaultValuesOutput;
  }
  public putInputMappingDefaultValues(value: EventgridTopicInputMappingDefaultValues | undefined) {
    this._inputMappingDefaultValues = value;
  }
  public resetInputMappingDefaultValues() {
    this._inputMappingDefaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputMappingDefaultValuesInput() {
    return this._inputMappingDefaultValues
  }

  // input_mapping_fields - computed: false, optional: true, required: false
  private _inputMappingFields?: EventgridTopicInputMappingFields | undefined; 
  private __inputMappingFieldsOutput = new EventgridTopicInputMappingFieldsOutputReference(this as any, "input_mapping_fields", true);
  public get inputMappingFields() {
    return this.__inputMappingFieldsOutput;
  }
  public putInputMappingFields(value: EventgridTopicInputMappingFields | undefined) {
    this._inputMappingFields = value;
  }
  public resetInputMappingFields() {
    this._inputMappingFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputMappingFieldsInput() {
    return this._inputMappingFields
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventgridTopicTimeouts | undefined; 
  private __timeoutsOutput = new EventgridTopicTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: EventgridTopicTimeouts | undefined) {
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
      inbound_ip_rule: cdktf.listMapper(eventgridTopicInboundIpRuleToTerraform)(this._inboundIpRule),
      input_schema: cdktf.stringToTerraform(this._inputSchema),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      identity: eventgridTopicIdentityToTerraform(this._identity),
      input_mapping_default_values: eventgridTopicInputMappingDefaultValuesToTerraform(this._inputMappingDefaultValues),
      input_mapping_fields: eventgridTopicInputMappingFieldsToTerraform(this._inputMappingFields),
      timeouts: eventgridTopicTimeoutsToTerraform(this._timeouts),
    };
  }
}
