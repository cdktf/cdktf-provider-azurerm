// https://www.terraform.io/docs/providers/azurerm/r/notification_hub_namespace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NotificationHubNamespaceConfig extends TerraformMetaArguments {
  readonly enabled?: boolean;
  readonly location: string;
  readonly name: string;
  readonly namespaceType: string;
  readonly resourceGroupName: string;
  readonly skuName: string;
  /** timeouts block */
  readonly timeouts?: NotificationHubNamespaceTimeouts;
}
export interface NotificationHubNamespaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NotificationHubNamespace extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NotificationHubNamespaceConfig) {
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
    this._enabled = config.enabled;
    this._location = config.location;
    this._name = config.name;
    this._namespaceType = config.namespaceType;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // namespace_type - computed: false, optional: false, required: true
  private _namespaceType: string;
  public get namespaceType() {
    return this._namespaceType;
  }
  public set namespaceType(value: string) {
    this._namespaceType = value;
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

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this._skuName;
  }
  public set skuName(value: string) {
    this._skuName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NotificationHubNamespaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NotificationHubNamespaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: this._enabled,
      location: this._location,
      name: this._name,
      namespace_type: this._namespaceType,
      resource_group_name: this._resourceGroupName,
      sku_name: this._skuName,
      timeouts: this._timeouts,
    };
  }
}
