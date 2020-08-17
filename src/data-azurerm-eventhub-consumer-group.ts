// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_eventhub_consumer_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermEventhubConsumerGroupConfig extends TerraformMetaArguments {
  readonly eventhubName: string;
  readonly name: string;
  readonly namespaceName: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermEventhubConsumerGroupTimeouts;
}
export interface DataAzurermEventhubConsumerGroupTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermEventhubConsumerGroup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermEventhubConsumerGroupConfig) {
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

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
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

  // user_metadata - computed: true, optional: false, required: true
  public get userMetadata() {
    return this.getStringAttribute('user_metadata');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermEventhubConsumerGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermEventhubConsumerGroupTimeouts | undefined) {
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
      timeouts: this._timeouts,
    };
  }
}
