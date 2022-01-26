// https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_resource_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermConsumptionBudgetResourceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_resource_group#name DataAzurermConsumptionBudgetResourceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_resource_group#resource_group_id DataAzurermConsumptionBudgetResourceGroup#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_resource_group#timeouts DataAzurermConsumptionBudgetResourceGroup#timeouts}
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
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dimension');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tag');
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
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dimension');
  }

  // not - computed: true, optional: false, required: false
  public get not() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('not');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tag');
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

  // threshold_type - computed: true, optional: false, required: false
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_resource_group#read DataAzurermConsumptionBudgetResourceGroup#read}
  */
  readonly read?: string;
}

export function dataAzurermConsumptionBudgetResourceGroupTimeoutsToTerraform(struct?: DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference | DataAzurermConsumptionBudgetResourceGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermConsumptionBudgetResourceGroupTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermConsumptionBudgetResourceGroupTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_resource_group azurerm_consumption_budget_resource_group}
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
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/consumption_budget_resource_group azurerm_consumption_budget_resource_group} Data Source
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
    this._timeouts.internalValue = config.timeouts;
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
    return new DataAzurermConsumptionBudgetResourceGroupFilter(this, 'filter', index, false);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notification - computed: true, optional: false, required: false
  public notification(index: string) {
    return new DataAzurermConsumptionBudgetResourceGroupNotification(this, 'notification', index, false);
  }

  // resource_group_id - computed: false, optional: false, required: true
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // time_grain - computed: true, optional: false, required: false
  public get timeGrain() {
    return this.getStringAttribute('time_grain');
  }

  // time_period - computed: true, optional: false, required: false
  public timePeriod(index: string) {
    return new DataAzurermConsumptionBudgetResourceGroupTimePeriod(this, 'time_period', index, false);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermConsumptionBudgetResourceGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      timeouts: dataAzurermConsumptionBudgetResourceGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
