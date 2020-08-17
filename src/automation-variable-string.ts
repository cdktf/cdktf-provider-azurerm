// https://www.terraform.io/docs/providers/azurerm/r/automation_variable_string.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AutomationVariableStringConfig extends TerraformMetaArguments {
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

// Resource

export class AutomationVariableString extends TerraformResource {

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

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean;
  public get encrypted() {
    return this._encrypted;
  }
  public set encrypted(value: boolean | undefined) {
    this._encrypted = value;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string;
  public get value() {
    return this._value;
  }
  public set value(value: string | undefined) {
    this._value = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationVariableStringTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AutomationVariableStringTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      automation_account_name: this._automationAccountName,
      description: this._description,
      encrypted: this._encrypted,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      value: this._value,
      timeouts: this._timeouts,
    };
  }
}
