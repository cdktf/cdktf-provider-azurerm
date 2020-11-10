// https://www.terraform.io/docs/providers/azurerm/r/security_center_contact.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SecurityCenterContactConfig extends TerraformMetaArguments {
  readonly alertNotifications: boolean;
  readonly alertsToAdmins: boolean;
  readonly email: string;
  readonly phone?: string;
  /** timeouts block */
  readonly timeouts?: SecurityCenterContactTimeouts;
}
export interface SecurityCenterContactTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SecurityCenterContact extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _alertNotifications: boolean;
  public get alertNotifications() {
    return this.getBooleanAttribute('alert_notifications');
  }
  public set alertNotifications(value: boolean) {
    this._alertNotifications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertNotificationsInput() {
    return this._alertNotifications
  }

  // alerts_to_admins - computed: false, optional: false, required: true
  private _alertsToAdmins: boolean;
  public get alertsToAdmins() {
    return this.getBooleanAttribute('alerts_to_admins');
  }
  public set alertsToAdmins(value: boolean) {
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
      alert_notifications: this._alertNotifications,
      alerts_to_admins: this._alertsToAdmins,
      email: this._email,
      phone: this._phone,
      timeouts: this._timeouts,
    };
  }
}
