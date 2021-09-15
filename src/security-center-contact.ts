// https://www.terraform.io/docs/providers/azurerm/r/security_center_contact.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityCenterContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_contact.html#alert_notifications SecurityCenterContact#alert_notifications}
  */
  readonly alertNotifications: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_contact.html#alerts_to_admins SecurityCenterContact#alerts_to_admins}
  */
  readonly alertsToAdmins: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_contact.html#email SecurityCenterContact#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_contact.html#phone SecurityCenterContact#phone}
  */
  readonly phone?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_contact.html#timeouts SecurityCenterContact#timeouts}
  */
  readonly timeouts?: SecurityCenterContactTimeouts;
}
export interface SecurityCenterContactTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_contact.html#create SecurityCenterContact#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_contact.html#delete SecurityCenterContact#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_contact.html#read SecurityCenterContact#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_contact.html#update SecurityCenterContact#update}
  */
  readonly update?: string;
}

function securityCenterContactTimeoutsToTerraform(struct?: SecurityCenterContactTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_contact.html azurerm_security_center_contact}
*/
export class SecurityCenterContact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_security_center_contact";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_contact.html azurerm_security_center_contact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityCenterContactConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityCenterContactConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_security_center_contact',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alertNotifications = config.alertNotifications;
    this._alertsToAdmins = config.alertsToAdmins;
    this._email = config.email;
    this._phone = config.phone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_notifications - computed: false, optional: false, required: true
  private _alertNotifications: boolean | cdktf.IResolvable;
  public get alertNotifications() {
    return this.getBooleanAttribute('alert_notifications');
  }
  public set alertNotifications(value: boolean | cdktf.IResolvable) {
    this._alertNotifications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertNotificationsInput() {
    return this._alertNotifications
  }

  // alerts_to_admins - computed: false, optional: false, required: true
  private _alertsToAdmins: boolean | cdktf.IResolvable;
  public get alertsToAdmins() {
    return this.getBooleanAttribute('alerts_to_admins');
  }
  public set alertsToAdmins(value: boolean | cdktf.IResolvable) {
    this._alertsToAdmins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsToAdminsInput() {
    return this._alertsToAdmins
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

  // phone - computed: false, optional: true, required: false
  private _phone?: string;
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string ) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecurityCenterContactTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SecurityCenterContactTimeouts ) {
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
      alert_notifications: cdktf.booleanToTerraform(this._alertNotifications),
      alerts_to_admins: cdktf.booleanToTerraform(this._alertsToAdmins),
      email: cdktf.stringToTerraform(this._email),
      phone: cdktf.stringToTerraform(this._phone),
      timeouts: securityCenterContactTimeoutsToTerraform(this._timeouts),
    };
  }
}
