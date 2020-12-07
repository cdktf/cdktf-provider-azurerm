// https://www.terraform.io/docs/providers/azurerm/r/automation_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationConnectionConfig extends cdktf.TerraformMetaArguments {
  readonly automationAccountName: string;
  readonly description?: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly type: string;
  readonly values: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: AutomationConnectionTimeouts;
}
export interface AutomationConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function automationConnectionTimeoutsToTerraform(struct?: AutomationConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AutomationConnection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutomationConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_connection',
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
    this._resourceGroupName = config.resourceGroupName;
    this._type = config.type;
    this._values = config.values;
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

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // values - computed: false, optional: false, required: true
  private _values: { [key: string]: string };
  public get values() {
    return this.interpolationForAttribute('values') as any;
  }
  public set values(value: { [key: string]: string }) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AutomationConnectionTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      type: cdktf.stringToTerraform(this._type),
      values: cdktf.hashMapper(cdktf.anyToTerraform)(this._values),
      timeouts: automationConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
