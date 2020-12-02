// https://www.terraform.io/docs/providers/azurerm/r/eventgrid_system_topic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EventgridSystemTopicConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sourceArmResourceId: string;
  readonly tags?: { [key: string]: string };
  readonly topicType: string;
  /** timeouts block */
  readonly timeouts?: EventgridSystemTopicTimeouts;
}
export interface EventgridSystemTopicTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class EventgridSystemTopic extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EventgridSystemTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventgrid_system_topic',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceArmResourceId = config.sourceArmResourceId;
    this._tags = config.tags;
    this._topicType = config.topicType;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
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

  // metric_arm_resource_id - computed: true, optional: false, required: false
  public get metricArmResourceId() {
    return this.getStringAttribute('metric_arm_resource_id');
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

  // source_arm_resource_id - computed: false, optional: false, required: true
  private _sourceArmResourceId: string;
  public get sourceArmResourceId() {
    return this.getStringAttribute('source_arm_resource_id');
  }
  public set sourceArmResourceId(value: string) {
    this._sourceArmResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArmResourceIdInput() {
    return this._sourceArmResourceId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // topic_type - computed: false, optional: false, required: true
  private _topicType: string;
  public get topicType() {
    return this.getStringAttribute('topic_type');
  }
  public set topicType(value: string) {
    this._topicType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicTypeInput() {
    return this._topicType
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventgridSystemTopicTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EventgridSystemTopicTimeouts ) {
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
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      source_arm_resource_id: this._sourceArmResourceId,
      tags: this._tags,
      topic_type: this._topicType,
      timeouts: this._timeouts,
    };
  }
}
