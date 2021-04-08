// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_servicebus_topic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermServicebusTopicConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly namespaceName: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermServicebusTopicTimeouts;
}
export interface DataAzurermServicebusTopicTimeouts {
  readonly read?: string;
}

function dataAzurermServicebusTopicTimeoutsToTerraform(struct?: DataAzurermServicebusTopicTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermServicebusTopic extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermServicebusTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_topic',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_delete_on_idle - computed: true, optional: false, required: false
  public get autoDeleteOnIdle() {
    return this.getStringAttribute('auto_delete_on_idle');
  }

  // default_message_ttl - computed: true, optional: false, required: false
  public get defaultMessageTtl() {
    return this.getStringAttribute('default_message_ttl');
  }

  // duplicate_detection_history_time_window - computed: true, optional: false, required: false
  public get duplicateDetectionHistoryTimeWindow() {
    return this.getStringAttribute('duplicate_detection_history_time_window');
  }

  // enable_batched_operations - computed: true, optional: false, required: false
  public get enableBatchedOperations() {
    return this.getBooleanAttribute('enable_batched_operations');
  }

  // enable_express - computed: true, optional: false, required: false
  public get enableExpress() {
    return this.getBooleanAttribute('enable_express');
  }

  // enable_partitioning - computed: true, optional: false, required: false
  public get enablePartitioning() {
    return this.getBooleanAttribute('enable_partitioning');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_size_in_megabytes - computed: true, optional: false, required: false
  public get maxSizeInMegabytes() {
    return this.getNumberAttribute('max_size_in_megabytes');
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

  // requires_duplicate_detection - computed: true, optional: false, required: false
  public get requiresDuplicateDetection() {
    return this.getBooleanAttribute('requires_duplicate_detection');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // support_ordering - computed: true, optional: false, required: false
  public get supportOrdering() {
    return this.getBooleanAttribute('support_ordering');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermServicebusTopicTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermServicebusTopicTimeouts ) {
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
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermServicebusTopicTimeoutsToTerraform(this._timeouts),
    };
  }
}
