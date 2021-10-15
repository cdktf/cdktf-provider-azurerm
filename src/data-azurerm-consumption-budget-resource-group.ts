// https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_resource_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermConsumptionBudgetResourceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_resource_group.html#name DataAzurermConsumptionBudgetResourceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_resource_group.html#resource_group_id DataAzurermConsumptionBudgetResourceGroup#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_resource_group.html#timeouts DataAzurermConsumptionBudgetResourceGroup#timeouts}
  */
  readonly timeouts?: DataAzurermConsumptionBudgetResourceGroupTimeouts;
}
export class DataAzurermConsumptionBudgetResourceGroupFilterDimension extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataAzurermConsumptionBudgetResourceGroupFilterNotDimension extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataAzurermConsumptionBudgetResourceGroupFilterNotTag extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataAzurermConsumptionBudgetResourceGroupFilterNot extends cdktf.ComplexComputedList {

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.interpolationForAttribute('dimension') as any;
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.interpolationForAttribute('tag') as any;
  }
}
export class DataAzurermConsumptionBudgetResourceGroupFilterTag extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataAzurermConsumptionBudgetResourceGroupFilter extends cdktf.ComplexComputedList {

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.interpolationForAttribute('dimension') as any;
  }

  // not - computed: true, optional: false, required: false
  public get not() {
    return this.interpolationForAttribute('not') as any;
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.interpolationForAttribute('tag') as any;
  }
}
export class DataAzurermConsumptionBudgetResourceGroupNotification extends cdktf.ComplexComputedList {

  // contact_emails - computed: true, optional: false, required: false
  public get contactEmails() {
    return this.getListAttribute('contact_emails');
  }

  // contact_groups - computed: true, optional: false, required: false
  public get contactGroups() {
    return this.getListAttribute('contact_groups');
  }

  // contact_roles - computed: true, optional: false, required: false
  public get contactRoles() {
    return this.getListAttribute('contact_roles');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export class DataAzurermConsumptionBudgetResourceGroupTimePeriod extends cdktf.ComplexComputedList {

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
}
export interface DataAzurermConsumptionBudgetResourceGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_resource_group.html#read DataAzurermConsumptionBudgetResourceGroup#read}
  */
  readonly read?: string;
}

function dataAzurermConsumptionBudgetResourceGroupTimeoutsToTerraform(struct?: DataAzurermConsumptionBudgetResourceGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_resource_group.html azurerm_consumption_budget_resource_group}
*/
export class DataAzurermConsumptionBudgetResourceGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_consumption_budget_resource_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_resource_group.html azurerm_consumption_budget_resource_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermConsumptionBudgetResourceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermConsumptionBudgetResourceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_consumption_budget_resource_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupId = config.resourceGroupId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount - computed: true, optional: false, required: false
  public get amount() {
    return this.getNumberAttribute('amount');
  }

  // filter - computed: true, optional: false, required: false
  public filter(index: string) {
    return new DataAzurermConsumptionBudgetResourceGroupFilter(this, 'filter', index);
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

  // notification - computed: true, optional: false, required: false
  public notification(index: string) {
    return new DataAzurermConsumptionBudgetResourceGroupNotification(this, 'notification', index);
  }

  // resource_group_id - computed: false, optional: false, required: true
  private _resourceGroupId: string;
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId
  }

  // time_grain - computed: true, optional: false, required: false
  public get timeGrain() {
    return this.getStringAttribute('time_grain');
  }

  // time_period - computed: true, optional: false, required: false
  public timePeriod(index: string) {
    return new DataAzurermConsumptionBudgetResourceGroupTimePeriod(this, 'time_period', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermConsumptionBudgetResourceGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermConsumptionBudgetResourceGroupTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      timeouts: dataAzurermConsumptionBudgetResourceGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
