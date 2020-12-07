// https://www.terraform.io/docs/providers/azurerm/r/automation_variable_string.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationVariableStringConfig extends cdktf.TerraformMetaArguments {
  readonly automationAccountName: string;
  readonly description?: string;
  readonly encrypted?: boolean;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly value?: string;
  /** timeouts block */
  readonly timeouts?: AutomationVariableStringTimeouts;
}
export interface AutomationVariableStringTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function automationVariableStringTimeoutsToTerraform(struct?: AutomationVariableStringTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AutomationVariableString extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutomationVariableStringConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_variable_string',
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
    this._encrypted = config.encrypted;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._value = config.value;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation_account_name - computed: false, optional: false, required: true
  private _automationAccountName: string;
  public get automationAccountName() {
    return this.getStringAttribute('automation_account_name');
  }
  public set automationAccountName(value: string) {
    this._automationAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automationAccountNameInput() {
    return this._automationAccountName
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean;
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean ) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // value - computed: false, optional: true, required: false
  private _value?: string;
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string ) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationVariableStringTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AutomationVariableStringTimeouts ) {
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
      automation_account_name: cdktf.stringToTerraform(this._automationAccountName),
      description: cdktf.stringToTerraform(this._description),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      value: cdktf.stringToTerraform(this._value),
      timeouts: automationVariableStringTimeoutsToTerraform(this._timeouts),
    };
  }
}
