// https://www.terraform.io/docs/providers/azurerm/r/automation_credential.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AutomationCredentialConfig extends TerraformMetaArguments {
  readonly automationAccountName: string;
  readonly description?: string;
  readonly name: string;
  readonly password: string;
  readonly resourceGroupName: string;
  readonly username: string;
  /** timeouts block */
  readonly timeouts?: AutomationCredentialTimeouts;
}
export interface AutomationCredentialTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AutomationCredential extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutomationCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_credential',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automationAccountName = config.automationAccountName;
    this._description = config.description;
    this._name = config.name;
    this._password = config.password;
    this._resourceGroupName = config.resourceGroupName;
    this._username = config.username;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation_account_name - computed: false, optional: false, required: true
  private _automationAccountName: string;
  public get automationAccountName() {
    return this._automationAccountName;
  }
  public set automationAccountName(value: string) {
    this._automationAccountName = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // password - computed: false, optional: false, required: true
  private _password: string;
  public get password() {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // username - computed: false, optional: false, required: true
  private _username: string;
  public get username() {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationCredentialTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AutomationCredentialTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automation_account_name: this._automationAccountName,
      description: this._description,
      name: this._name,
      password: this._password,
      resource_group_name: this._resourceGroupName,
      username: this._username,
      timeouts: this._timeouts,
    };
  }
}
