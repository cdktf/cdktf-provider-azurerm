// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_notification_hub_namespace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermNotificationHubNamespaceConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermNotificationHubNamespaceTimeouts;
}
export class DataAzurermNotificationHubNamespaceSku extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAzurermNotificationHubNamespaceTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermNotificationHubNamespace extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermNotificationHubNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_notification_hub_namespace',
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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // namespace_type - computed: true, optional: false, required: true
  public get namespaceType() {
    return this.getStringAttribute('namespace_type');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // servicebus_endpoint - computed: true, optional: false, required: true
  public get servicebusEndpoint() {
    return this.getStringAttribute('servicebus_endpoint');
  }

  // sku - computed: true, optional: false, required: true
  public sku(index: string) {
    return new DataAzurermNotificationHubNamespaceSku(this, 'sku', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermNotificationHubNamespaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermNotificationHubNamespaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
