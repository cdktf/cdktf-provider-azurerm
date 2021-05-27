// https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationHubAuthorizationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html#listen NotificationHubAuthorizationRule#listen}
  */
  readonly listen?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html#manage NotificationHubAuthorizationRule#manage}
  */
  readonly manage?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html#name NotificationHubAuthorizationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html#namespace_name NotificationHubAuthorizationRule#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html#notification_hub_name NotificationHubAuthorizationRule#notification_hub_name}
  */
  readonly notificationHubName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html#resource_group_name NotificationHubAuthorizationRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html#send NotificationHubAuthorizationRule#send}
  */
  readonly send?: boolean;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html#timeouts NotificationHubAuthorizationRule#timeouts}
  */
  readonly timeouts?: NotificationHubAuthorizationRuleTimeouts;
}
export interface NotificationHubAuthorizationRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html#create NotificationHubAuthorizationRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html#delete NotificationHubAuthorizationRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html#read NotificationHubAuthorizationRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html#update NotificationHubAuthorizationRule#update}
  */
  readonly update?: string;
}

function notificationHubAuthorizationRuleTimeoutsToTerraform(struct?: NotificationHubAuthorizationRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html azurerm_notification_hub_authorization_rule}
*/
export class NotificationHubAuthorizationRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/notification_hub_authorization_rule.html azurerm_notification_hub_authorization_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationHubAuthorizationRuleConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: boolean;
  public get listen() {
    return this.getBooleanAttribute('listen');
  }
  public set listen(value: boolean ) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen
  }

  // manage - computed: false, optional: true, required: false
  private _manage?: boolean;
  public get manage() {
    return this.getBooleanAttribute('manage');
  }
  public set manage(value: boolean ) {
    this._manage = value;
  }
  public resetManage() {
    this._manage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageInput() {
    return this._manage
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

  // notification_hub_name - computed: false, optional: false, required: true
  private _notificationHubName: string;
  public get notificationHubName() {
    return this.getStringAttribute('notification_hub_name');
  }
  public set notificationHubName(value: string) {
    this._notificationHubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationHubNameInput() {
    return this._notificationHubName
  }

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // send - computed: false, optional: true, required: false
  private _send?: boolean;
  public get send() {
    return this.getBooleanAttribute('send');
  }
  public set send(value: boolean ) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NotificationHubAuthorizationRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NotificationHubAuthorizationRuleTimeouts ) {
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
      listen: cdktf.booleanToTerraform(this._listen),
      manage: cdktf.booleanToTerraform(this._manage),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      notification_hub_name: cdktf.stringToTerraform(this._notificationHubName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      send: cdktf.booleanToTerraform(this._send),
      timeouts: notificationHubAuthorizationRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
