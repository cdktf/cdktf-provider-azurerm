// https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsumptionBudgetSubscriptionConfig extends cdktf.TerraformMetaArguments {
  readonly amount: number;
  readonly name: string;
  readonly subscriptionId: string;
  readonly timeGrain?: string;
  /** filter block */
  readonly filter?: ConsumptionBudgetSubscriptionFilter[];
  /** notification block */
  readonly notification: ConsumptionBudgetSubscriptionNotification[];
  /** time_period block */
  readonly timePeriod: ConsumptionBudgetSubscriptionTimePeriod[];
  /** timeouts block */
  readonly timeouts?: ConsumptionBudgetSubscriptionTimeouts;
}
export interface ConsumptionBudgetSubscriptionFilterDimension {
  readonly name: string;
  readonly operator?: string;
  readonly values: string[];
}

function consumptionBudgetSubscriptionFilterDimensionToTerraform(struct?: ConsumptionBudgetSubscriptionFilterDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ConsumptionBudgetSubscriptionFilterNotDimension {
  readonly name: string;
  readonly operator?: string;
  readonly values: string[];
}

function consumptionBudgetSubscriptionFilterNotDimensionToTerraform(struct?: ConsumptionBudgetSubscriptionFilterNotDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ConsumptionBudgetSubscriptionFilterNotTag {
  readonly name: string;
  readonly operator?: string;
  readonly values: string[];
}

function consumptionBudgetSubscriptionFilterNotTagToTerraform(struct?: ConsumptionBudgetSubscriptionFilterNotTag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ConsumptionBudgetSubscriptionFilterNot {
  /** dimension block */
  readonly dimension?: ConsumptionBudgetSubscriptionFilterNotDimension[];
  /** tag block */
  readonly tag?: ConsumptionBudgetSubscriptionFilterNotTag[];
}

function consumptionBudgetSubscriptionFilterNotToTerraform(struct?: ConsumptionBudgetSubscriptionFilterNot): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimension: cdktf.listMapper(consumptionBudgetSubscriptionFilterNotDimensionToTerraform)(struct!.dimension),
    tag: cdktf.listMapper(consumptionBudgetSubscriptionFilterNotTagToTerraform)(struct!.tag),
  }
}

export interface ConsumptionBudgetSubscriptionFilterTag {
  readonly name: string;
  readonly operator?: string;
  readonly values: string[];
}

function consumptionBudgetSubscriptionFilterTagToTerraform(struct?: ConsumptionBudgetSubscriptionFilterTag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ConsumptionBudgetSubscriptionFilter {
  /** dimension block */
  readonly dimension?: ConsumptionBudgetSubscriptionFilterDimension[];
  /** not block */
  readonly not?: ConsumptionBudgetSubscriptionFilterNot[];
  /** tag block */
  readonly tag?: ConsumptionBudgetSubscriptionFilterTag[];
}

function consumptionBudgetSubscriptionFilterToTerraform(struct?: ConsumptionBudgetSubscriptionFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimension: cdktf.listMapper(consumptionBudgetSubscriptionFilterDimensionToTerraform)(struct!.dimension),
    not: cdktf.listMapper(consumptionBudgetSubscriptionFilterNotToTerraform)(struct!.not),
    tag: cdktf.listMapper(consumptionBudgetSubscriptionFilterTagToTerraform)(struct!.tag),
  }
}

export interface ConsumptionBudgetSubscriptionNotification {
  readonly contactEmails?: string[];
  readonly contactGroups?: string[];
  readonly contactRoles?: string[];
  readonly enabled?: boolean;
  readonly operator: string;
  readonly threshold: number;
}

function consumptionBudgetSubscriptionNotificationToTerraform(struct?: ConsumptionBudgetSubscriptionNotification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contact_emails: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contactEmails),
    contact_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contactGroups),
    contact_roles: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contactRoles),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    operator: cdktf.stringToTerraform(struct!.operator),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}

export interface ConsumptionBudgetSubscriptionTimePeriod {
  readonly endDate?: string;
  readonly startDate: string;
}

function consumptionBudgetSubscriptionTimePeriodToTerraform(struct?: ConsumptionBudgetSubscriptionTimePeriod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_date: cdktf.stringToTerraform(struct!.endDate),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}

export interface ConsumptionBudgetSubscriptionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function consumptionBudgetSubscriptionTimeoutsToTerraform(struct?: ConsumptionBudgetSubscriptionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ConsumptionBudgetSubscription extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ConsumptionBudgetSubscriptionConfig) {
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
    this._amount = config.amount;
    this._name = config.name;
    this._subscriptionId = config.subscriptionId;
    this._timeGrain = config.timeGrain;
    this._filter = config.filter;
    this._notification = config.notification;
    this._timePeriod = config.timePeriod;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount - computed: false, optional: false, required: true
  private _amount: number;
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount
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

  // time_grain - computed: false, optional: true, required: false
  private _timeGrain?: string;
  public get timeGrain() {
    return this.getStringAttribute('time_grain');
  }
  public set timeGrain(value: string ) {
    this._timeGrain = value;
  }
  public resetTimeGrain() {
    this._timeGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGrainInput() {
    return this._timeGrain
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: ConsumptionBudgetSubscriptionFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: ConsumptionBudgetSubscriptionFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // notification - computed: false, optional: false, required: true
  private _notification: ConsumptionBudgetSubscriptionNotification[];
  public get notification() {
    return this.interpolationForAttribute('notification') as any;
  }
  public set notification(value: ConsumptionBudgetSubscriptionNotification[]) {
    this._notification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification
  }

  // time_period - computed: false, optional: false, required: true
  private _timePeriod: ConsumptionBudgetSubscriptionTimePeriod[];
  public get timePeriod() {
    return this.interpolationForAttribute('time_period') as any;
  }
  public set timePeriod(value: ConsumptionBudgetSubscriptionTimePeriod[]) {
    this._timePeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInput() {
    return this._timePeriod
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ConsumptionBudgetSubscriptionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ConsumptionBudgetSubscriptionTimeouts ) {
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
      amount: cdktf.numberToTerraform(this._amount),
      name: cdktf.stringToTerraform(this._name),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      time_grain: cdktf.stringToTerraform(this._timeGrain),
      filter: cdktf.listMapper(consumptionBudgetSubscriptionFilterToTerraform)(this._filter),
      notification: cdktf.listMapper(consumptionBudgetSubscriptionNotificationToTerraform)(this._notification),
      time_period: cdktf.listMapper(consumptionBudgetSubscriptionTimePeriodToTerraform)(this._timePeriod),
      timeouts: consumptionBudgetSubscriptionTimeoutsToTerraform(this._timeouts),
    };
  }
}
