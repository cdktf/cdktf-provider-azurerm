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
    return this._alertNotifications;
  }
  public set alertNotifications(value: boolean) {
    this._alertNotifications = value;
  }

  // alerts_to_admins - computed: false, optional: false, required: true
  private _alertsToAdmins: boolean;
  public get alertsToAdmins() {
    return this._alertsToAdmins;
  }
  public set alertsToAdmins(value: boolean) {
    this._alertsToAdmins = value;
  }

  // email - computed: false, optional: false, required: true
  private _email: string;
  public get email() {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // phone - computed: false, optional: true, required: false
  private _phone?: string;
  public get phone() {
    return this._phone;
  }
  public set phone(value: string | undefined) {
    this._phone = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecurityCenterContactTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SecurityCenterContactTimeouts | undefined) {
    this._timeouts = value;
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
