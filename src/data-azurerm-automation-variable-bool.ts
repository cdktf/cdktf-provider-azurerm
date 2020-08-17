// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_automation_variable_bool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermAutomationVariableBoolConfig extends TerraformMetaArguments {
  readonly automationAccountName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermAutomationVariableBoolTimeouts;
}
export interface DataAzurermAutomationVariableBoolTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermAutomationVariableBool extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermAutomationVariableBoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_variable_bool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automationAccountName = config.automationAccountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
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

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // encrypted - computed: true, optional: false, required: true
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
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

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getBooleanAttribute('value');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermAutomationVariableBoolTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermAutomationVariableBoolTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      automation_account_name: this._automationAccountName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
