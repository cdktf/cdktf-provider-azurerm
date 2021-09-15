// https://www.terraform.io/docs/providers/azurerm/r/api_management_notification_recipient_email.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementNotificationRecipientEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_notification_recipient_email.html#api_management_id ApiManagementNotificationRecipientEmail#api_management_id}
  */
  readonly apiManagementId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_notification_recipient_email.html#email ApiManagementNotificationRecipientEmail#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_notification_recipient_email.html#notification_type ApiManagementNotificationRecipientEmail#notification_type}
  */
  readonly notificationType: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_notification_recipient_email.html#timeouts ApiManagementNotificationRecipientEmail#timeouts}
  */
  readonly timeouts?: ApiManagementNotificationRecipientEmailTimeouts;
}
export interface ApiManagementNotificationRecipientEmailTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_notification_recipient_email.html#create ApiManagementNotificationRecipientEmail#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_notification_recipient_email.html#delete ApiManagementNotificationRecipientEmail#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_notification_recipient_email.html#read ApiManagementNotificationRecipientEmail#read}
  */
  readonly read?: string;
}

function apiManagementNotificationRecipientEmailTimeoutsToTerraform(struct?: ApiManagementNotificationRecipientEmailTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_notification_recipient_email.html azurerm_api_management_notification_recipient_email}
*/
export class ApiManagementNotificationRecipientEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_notification_recipient_email";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_notification_recipient_email.html azurerm_api_management_notification_recipient_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementNotificationRecipientEmailConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementNotificationRecipientEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_notification_recipient_email',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementId = config.apiManagementId;
    this._email = config.email;
    this._notificationType = config.notificationType;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_id - computed: false, optional: false, required: true
  private _apiManagementId: string;
  public get apiManagementId() {
    return this.getStringAttribute('api_management_id');
  }
  public set apiManagementId(value: string) {
    this._apiManagementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementIdInput() {
    return this._apiManagementId
  }

  // email - computed: false, optional: false, required: true
  private _email: string;
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notification_type - computed: false, optional: false, required: true
  private _notificationType: string;
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementNotificationRecipientEmailTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementNotificationRecipientEmailTimeouts ) {
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
      api_management_id: cdktf.stringToTerraform(this._apiManagementId),
      email: cdktf.stringToTerraform(this._email),
      notification_type: cdktf.stringToTerraform(this._notificationType),
      timeouts: apiManagementNotificationRecipientEmailTimeoutsToTerraform(this._timeouts),
    };
  }
}
