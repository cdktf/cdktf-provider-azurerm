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

function securityCenterContactTimeoutsToTerraform(struct?: SecurityCenterContactTimeoutsOutputReference | SecurityCenterContactTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class SecurityCenterContactTimeoutsOutputReference extends cdktf.ComplexObject {
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
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
  private _alertNotifications?: boolean | cdktf.IResolvable; 
  public get alertNotifications() {
    return this.getBooleanAttribute('alert_notifications') as any;
  }
  public set alertNotifications(value: boolean | cdktf.IResolvable) {
    this._alertNotifications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertNotificationsInput() {
    return this._alertNotifications
  }

  // alerts_to_admins - computed: false, optional: false, required: true
  private _alertsToAdmins?: boolean | cdktf.IResolvable; 
  public get alertsToAdmins() {
    return this.getBooleanAttribute('alerts_to_admins') as any;
  }
  public set alertsToAdmins(value: boolean | cdktf.IResolvable) {
    this._alertsToAdmins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsToAdminsInput() {
    return this._alertsToAdmins
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

  // phone - computed: false, optional: true, required: false
  private _phone?: string | undefined; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string | undefined) {
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
  private _timeouts?: SecurityCenterContactTimeouts | undefined; 
  private __timeoutsOutput = new SecurityCenterContactTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SecurityCenterContactTimeouts | undefined) {
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
