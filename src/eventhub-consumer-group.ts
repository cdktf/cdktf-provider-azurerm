// https://www.terraform.io/docs/providers/azurerm/r/eventhub_consumer_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EventhubConsumerGroupConfig extends TerraformMetaArguments {
  readonly eventhubName: string;
  readonly name: string;
  readonly namespaceName: string;
  readonly resourceGroupName: string;
  readonly userMetadata?: string;
  /** timeouts block */
  readonly timeouts?: EventhubConsumerGroupTimeouts;
}
export interface EventhubConsumerGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class EventhubConsumerGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EventhubConsumerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventhub_consumer_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eventhubName = config.eventhubName;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._userMetadata = config.userMetadata;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eventhub_name - computed: false, optional: false, required: true
  private _eventhubName: string;
  public get eventhubName() {
    return this._eventhubName;
  }
  public set eventhubName(value: string) {
    this._eventhubName = value;
  }

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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
  public get namespaceName() {
    return this._namespaceName;
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // user_metadata - computed: false, optional: true, required: false
  private _userMetadata?: string;
  public get userMetadata() {
    return this._userMetadata;
  }
  public set userMetadata(value: string | undefined) {
    this._userMetadata = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventhubConsumerGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: EventhubConsumerGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      eventhub_name: this._eventhubName,
      name: this._name,
      namespace_name: this._namespaceName,
      resource_group_name: this._resourceGroupName,
      user_metadata: this._userMetadata,
      timeouts: this._timeouts,
    };
  }
}
