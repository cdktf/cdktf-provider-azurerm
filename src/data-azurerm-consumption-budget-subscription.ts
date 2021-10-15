// https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermConsumptionBudgetSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_subscription.html#name DataAzurermConsumptionBudgetSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_subscription.html#subscription_id DataAzurermConsumptionBudgetSubscription#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_subscription.html#timeouts DataAzurermConsumptionBudgetSubscription#timeouts}
  */
  readonly timeouts?: DataAzurermConsumptionBudgetSubscriptionTimeouts;
}
export class DataAzurermConsumptionBudgetSubscriptionFilterDimension extends cdktf.ComplexComputedList {

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
export class DataAzurermConsumptionBudgetSubscriptionFilterNotDimension extends cdktf.ComplexComputedList {

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
export class DataAzurermConsumptionBudgetSubscriptionFilterNotTag extends cdktf.ComplexComputedList {

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
export class DataAzurermConsumptionBudgetSubscriptionFilterNot extends cdktf.ComplexComputedList {

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.interpolationForAttribute('dimension') as any;
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.interpolationForAttribute('tag') as any;
  }
}
export class DataAzurermConsumptionBudgetSubscriptionFilterTag extends cdktf.ComplexComputedList {

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
export class DataAzurermConsumptionBudgetSubscriptionFilter extends cdktf.ComplexComputedList {

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
export class DataAzurermConsumptionBudgetSubscriptionNotification extends cdktf.ComplexComputedList {

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
export class DataAzurermConsumptionBudgetSubscriptionTimePeriod extends cdktf.ComplexComputedList {

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
}
export interface DataAzurermConsumptionBudgetSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_subscription.html#read DataAzurermConsumptionBudgetSubscription#read}
  */
  readonly read?: string;
}

function dataAzurermConsumptionBudgetSubscriptionTimeoutsToTerraform(struct?: DataAzurermConsumptionBudgetSubscriptionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_subscription.html azurerm_consumption_budget_subscription}
*/
export class DataAzurermConsumptionBudgetSubscription extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_consumption_budget_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_subscription.html azurerm_consumption_budget_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermConsumptionBudgetSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermConsumptionBudgetSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_consumption_budget_subscription',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._subscriptionId = config.subscriptionId;
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
    return new DataAzurermConsumptionBudgetSubscriptionFilter(this, 'filter', index);
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
    return new DataAzurermConsumptionBudgetSubscriptionNotification(this, 'notification', index);
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId: string;
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId
  }

  // time_grain - computed: true, optional: false, required: false
  public get timeGrain() {
    return this.getStringAttribute('time_grain');
  }

  // time_period - computed: true, optional: false, required: false
  public timePeriod(index: string) {
    return new DataAzurermConsumptionBudgetSubscriptionTimePeriod(this, 'time_period', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermConsumptionBudgetSubscriptionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermConsumptionBudgetSubscriptionTimeouts ) {
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
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      timeouts: dataAzurermConsumptionBudgetSubscriptionTimeoutsToTerraform(this._timeouts),
    };
  }
}
