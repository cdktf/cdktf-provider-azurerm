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

function apiManagementNotificationRecipientEmailTimeoutsToTerraform(struct?: ApiManagementNotificationRecipientEmailTimeoutsOutputReference | ApiManagementNotificationRecipientEmailTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class ApiManagementNotificationRecipientEmailTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
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
  private _apiManagementId?: string; 
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
  private _email?: string; 
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
  private _notificationType?: string; 
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
  private _timeouts?: ApiManagementNotificationRecipientEmailTimeouts | undefined; 
  private __timeoutsOutput = new ApiManagementNotificationRecipientEmailTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApiManagementNotificationRecipientEmailTimeouts | undefined) {
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
