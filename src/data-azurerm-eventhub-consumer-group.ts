// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_eventhub_consumer_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermEventhubConsumerGroupConfig extends cdktf.TerraformMetaArguments {
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

function dataAzurermEventhubConsumerGroupTimeoutsToTerraform(struct?: DataAzurermEventhubConsumerGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermEventhubConsumerGroup extends cdktf.TerraformDataSource {

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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
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

  // user_metadata - computed: true, optional: false, required: false
  public get userMetadata() {
    return this.getStringAttribute('user_metadata');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermEventhubConsumerGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermEventhubConsumerGroupTimeouts ) {
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
      eventhub_name: cdktf.stringToTerraform(this._eventhubName),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermEventhubConsumerGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
