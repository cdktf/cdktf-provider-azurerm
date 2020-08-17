// https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NotificationHubAuthorizationRuleConfig extends TerraformMetaArguments {
  readonly listen?: boolean;
  readonly manage?: boolean;
  readonly name: string;
  readonly namespaceName: string;
  readonly notificationHubName: string;
  readonly resourceGroupName: string;
  readonly send?: boolean;
  /** timeouts block */
  readonly timeouts?: NotificationHubAuthorizationRuleTimeouts;
}
export interface NotificationHubAuthorizationRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NotificationHubAuthorizationRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NotificationHubAuthorizationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_notification_hub_authorization_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._listen = config.listen;
    this._manage = config.manage;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._notificationHubName = config.notificationHubName;
    this._resourceGroupName = config.resourceGroupName;
    this._send = config.send;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: boolean;
  public get listen() {
    return this._listen;
  }
  public set listen(value: boolean | undefined) {
    this._listen = value;
  }

  // manage - computed: false, optional: true, required: false
  private _manage?: boolean;
  public get manage() {
    return this._manage;
  }
  public set manage(value: boolean | undefined) {
    this._manage = value;
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

  // notification_hub_name - computed: false, optional: false, required: true
  private _notificationHubName: string;
  public get notificationHubName() {
    return this._notificationHubName;
  }
  public set notificationHubName(value: string) {
    this._notificationHubName = value;
  }

  // primary_access_key - computed: true, optional: false, required: true
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // secondary_access_key - computed: true, optional: false, required: true
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // send - computed: false, optional: true, required: false
  private _send?: boolean;
  public get send() {
    return this._send;
  }
  public set send(value: boolean | undefined) {
    this._send = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NotificationHubAuthorizationRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NotificationHubAuthorizationRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      listen: this._listen,
      manage: this._manage,
      name: this._name,
      namespace_name: this._namespaceName,
      notification_hub_name: this._notificationHubName,
      resource_group_name: this._resourceGroupName,
      send: this._send,
      timeouts: this._timeouts,
    };
  }
}
