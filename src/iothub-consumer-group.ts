// https://www.terraform.io/docs/providers/azurerm/r/iothub_consumer_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IothubConsumerGroupConfig extends TerraformMetaArguments {
  readonly eventhubEndpointName: string;
  readonly iothubName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: IothubConsumerGroupTimeouts;
}
export interface IothubConsumerGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class IothubConsumerGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IothubConsumerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_consumer_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eventhubEndpointName = config.eventhubEndpointName;
    this._iothubName = config.iothubName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eventhub_endpoint_name - computed: false, optional: false, required: true
  private _eventhubEndpointName: string;
  public get eventhubEndpointName() {
    return this._eventhubEndpointName;
  }
  public set eventhubEndpointName(value: string) {
    this._eventhubEndpointName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // iothub_name - computed: false, optional: false, required: true
  private _iothubName: string;
  public get iothubName() {
    return this._iothubName;
  }
  public set iothubName(value: string) {
    this._iothubName = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubConsumerGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IothubConsumerGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      eventhub_endpoint_name: this._eventhubEndpointName,
      iothub_name: this._iothubName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
