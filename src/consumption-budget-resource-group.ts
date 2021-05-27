// https://www.terraform.io/docs/providers/azurerm/r/consumption_budget_resource_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsumptionBudgetResourceGroupConfig extends cdktf.TerraformMetaArguments {
  readonly amount: number;
  readonly name: string;
  readonly resourceGroupId: string;
  readonly timeGrain?: string;
  /** filter block */
  readonly filter?: ConsumptionBudgetResourceGroupFilter[];
  /** notification block */
  readonly notification: ConsumptionBudgetResourceGroupNotification[];
  /** time_period block */
  readonly timePeriod: ConsumptionBudgetResourceGroupTimePeriod[];
  /** timeouts block */
  readonly timeouts?: ConsumptionBudgetResourceGroupTimeouts;
}
export interface ConsumptionBudgetResourceGroupFilterDimension {
  readonly name: string;
  readonly operator?: string;
  readonly values: string[];
}

function consumptionBudgetResourceGroupFilterDimensionToTerraform(struct?: ConsumptionBudgetResourceGroupFilterDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ConsumptionBudgetResourceGroupFilterNotDimension {
  readonly name: string;
  readonly operator?: string;
  readonly values: string[];
}

function consumptionBudgetResourceGroupFilterNotDimensionToTerraform(struct?: ConsumptionBudgetResourceGroupFilterNotDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ConsumptionBudgetResourceGroupFilterNotTag {
  readonly name: string;
  readonly operator?: string;
  readonly values: string[];
}

function consumptionBudgetResourceGroupFilterNotTagToTerraform(struct?: ConsumptionBudgetResourceGroupFilterNotTag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ConsumptionBudgetResourceGroupFilterNot {
  /** dimension block */
  readonly dimension?: ConsumptionBudgetResourceGroupFilterNotDimension[];
  /** tag block */
  readonly tag?: ConsumptionBudgetResourceGroupFilterNotTag[];
}

function consumptionBudgetResourceGroupFilterNotToTerraform(struct?: ConsumptionBudgetResourceGroupFilterNot): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimension: cdktf.listMapper(consumptionBudgetResourceGroupFilterNotDimensionToTerraform)(struct!.dimension),
    tag: cdktf.listMapper(consumptionBudgetResourceGroupFilterNotTagToTerraform)(struct!.tag),
  }
}

export interface ConsumptionBudgetResourceGroupFilterTag {
  readonly name: string;
  readonly operator?: string;
  readonly values: string[];
}

function consumptionBudgetResourceGroupFilterTagToTerraform(struct?: ConsumptionBudgetResourceGroupFilterTag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ConsumptionBudgetResourceGroupFilter {
  /** dimension block */
  readonly dimension?: ConsumptionBudgetResourceGroupFilterDimension[];
  /** not block */
  readonly not?: ConsumptionBudgetResourceGroupFilterNot[];
  /** tag block */
  readonly tag?: ConsumptionBudgetResourceGroupFilterTag[];
}

function consumptionBudgetResourceGroupFilterToTerraform(struct?: ConsumptionBudgetResourceGroupFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimension: cdktf.listMapper(consumptionBudgetResourceGroupFilterDimensionToTerraform)(struct!.dimension),
    not: cdktf.listMapper(consumptionBudgetResourceGroupFilterNotToTerraform)(struct!.not),
    tag: cdktf.listMapper(consumptionBudgetResourceGroupFilterTagToTerraform)(struct!.tag),
  }
}

export interface ConsumptionBudgetResourceGroupNotification {
  readonly contactEmails?: string[];
  readonly contactGroups?: string[];
  readonly contactRoles?: string[];
  readonly enabled?: boolean;
  readonly operator: string;
  readonly threshold: number;
}

function consumptionBudgetResourceGroupNotificationToTerraform(struct?: ConsumptionBudgetResourceGroupNotification): any {
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

export interface ConsumptionBudgetResourceGroupTimePeriod {
  readonly endDate?: string;
  readonly startDate: string;
}

function consumptionBudgetResourceGroupTimePeriodToTerraform(struct?: ConsumptionBudgetResourceGroupTimePeriod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_date: cdktf.stringToTerraform(struct!.endDate),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}

export interface ConsumptionBudgetResourceGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function consumptionBudgetResourceGroupTimeoutsToTerraform(struct?: ConsumptionBudgetResourceGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ConsumptionBudgetResourceGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ConsumptionBudgetResourceGroupConfig) {
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
    this._amount = config.amount;
    this._name = config.name;
    this._resourceGroupId = config.resourceGroupId;
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
  private _filter?: ConsumptionBudgetResourceGroupFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: ConsumptionBudgetResourceGroupFilter[] ) {
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
  private _notification: ConsumptionBudgetResourceGroupNotification[];
  public get notification() {
    return this.interpolationForAttribute('notification') as any;
  }
  public set notification(value: ConsumptionBudgetResourceGroupNotification[]) {
    this._notification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification
  }

  // time_period - computed: false, optional: false, required: true
  private _timePeriod: ConsumptionBudgetResourceGroupTimePeriod[];
  public get timePeriod() {
    return this.interpolationForAttribute('time_period') as any;
  }
  public set timePeriod(value: ConsumptionBudgetResourceGroupTimePeriod[]) {
    this._timePeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInput() {
    return this._timePeriod
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ConsumptionBudgetResourceGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ConsumptionBudgetResourceGroupTimeouts ) {
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
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      time_grain: cdktf.stringToTerraform(this._timeGrain),
      filter: cdktf.listMapper(consumptionBudgetResourceGroupFilterToTerraform)(this._filter),
      notification: cdktf.listMapper(consumptionBudgetResourceGroupNotificationToTerraform)(this._notification),
      time_period: cdktf.listMapper(consumptionBudgetResourceGroupTimePeriodToTerraform)(this._timePeriod),
      timeouts: consumptionBudgetResourceGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
