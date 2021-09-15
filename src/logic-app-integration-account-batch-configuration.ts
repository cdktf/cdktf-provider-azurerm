// https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppIntegrationAccountBatchConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#batch_group_name LogicAppIntegrationAccountBatchConfiguration#batch_group_name}
  */
  readonly batchGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#integration_account_name LogicAppIntegrationAccountBatchConfiguration#integration_account_name}
  */
  readonly integrationAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#metadata LogicAppIntegrationAccountBatchConfiguration#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#name LogicAppIntegrationAccountBatchConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#resource_group_name LogicAppIntegrationAccountBatchConfiguration#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * release_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#release_criteria LogicAppIntegrationAccountBatchConfiguration#release_criteria}
  */
  readonly releaseCriteria: LogicAppIntegrationAccountBatchConfigurationReleaseCriteria[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#timeouts LogicAppIntegrationAccountBatchConfiguration#timeouts}
  */
  readonly timeouts?: LogicAppIntegrationAccountBatchConfigurationTimeouts;
}
export interface LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#week LogicAppIntegrationAccountBatchConfiguration#week}
  */
  readonly week: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#weekday LogicAppIntegrationAccountBatchConfiguration#weekday}
  */
  readonly weekday: string;
}

function logicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyToTerraform(struct?: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    week: cdktf.numberToTerraform(struct!.week),
    weekday: cdktf.stringToTerraform(struct!.weekday),
  }
}

export interface LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#hours LogicAppIntegrationAccountBatchConfiguration#hours}
  */
  readonly hours?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#minutes LogicAppIntegrationAccountBatchConfiguration#minutes}
  */
  readonly minutes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#month_days LogicAppIntegrationAccountBatchConfiguration#month_days}
  */
  readonly monthDays?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#week_days LogicAppIntegrationAccountBatchConfiguration#week_days}
  */
  readonly weekDays?: string[];
  /**
  * monthly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#monthly LogicAppIntegrationAccountBatchConfiguration#monthly}
  */
  readonly monthly?: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly[];
}

function logicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleToTerraform(struct?: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hours: cdktf.listMapper(cdktf.numberToTerraform)(struct!.hours),
    minutes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.minutes),
    month_days: cdktf.listMapper(cdktf.numberToTerraform)(struct!.monthDays),
    week_days: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekDays),
    monthly: cdktf.listMapper(logicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyToTerraform)(struct!.monthly),
  }
}

export interface LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#end_time LogicAppIntegrationAccountBatchConfiguration#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#frequency LogicAppIntegrationAccountBatchConfiguration#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#interval LogicAppIntegrationAccountBatchConfiguration#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#start_time LogicAppIntegrationAccountBatchConfiguration#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#time_zone LogicAppIntegrationAccountBatchConfiguration#time_zone}
  */
  readonly timeZone?: string;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#schedule LogicAppIntegrationAccountBatchConfiguration#schedule}
  */
  readonly schedule?: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule[];
}

function logicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceToTerraform(struct?: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    interval: cdktf.numberToTerraform(struct!.interval),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    schedule: cdktf.listMapper(logicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleToTerraform)(struct!.schedule),
  }
}

export interface LogicAppIntegrationAccountBatchConfigurationReleaseCriteria {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#batch_size LogicAppIntegrationAccountBatchConfiguration#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#message_count LogicAppIntegrationAccountBatchConfiguration#message_count}
  */
  readonly messageCount?: number;
  /**
  * recurrence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#recurrence LogicAppIntegrationAccountBatchConfiguration#recurrence}
  */
  readonly recurrence?: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence[];
}

function logicAppIntegrationAccountBatchConfigurationReleaseCriteriaToTerraform(struct?: LogicAppIntegrationAccountBatchConfigurationReleaseCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    message_count: cdktf.numberToTerraform(struct!.messageCount),
    recurrence: cdktf.listMapper(logicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceToTerraform)(struct!.recurrence),
  }
}

export interface LogicAppIntegrationAccountBatchConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#create LogicAppIntegrationAccountBatchConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#delete LogicAppIntegrationAccountBatchConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#read LogicAppIntegrationAccountBatchConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html#update LogicAppIntegrationAccountBatchConfiguration#update}
  */
  readonly update?: string;
}

function logicAppIntegrationAccountBatchConfigurationTimeoutsToTerraform(struct?: LogicAppIntegrationAccountBatchConfigurationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html azurerm_logic_app_integration_account_batch_configuration}
*/
export class LogicAppIntegrationAccountBatchConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_logic_app_integration_account_batch_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_batch_configuration.html azurerm_logic_app_integration_account_batch_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicAppIntegrationAccountBatchConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: LogicAppIntegrationAccountBatchConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_integration_account_batch_configuration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._batchGroupName = config.batchGroupName;
    this._integrationAccountName = config.integrationAccountName;
    this._metadata = config.metadata;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._releaseCriteria = config.releaseCriteria;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batch_group_name - computed: false, optional: false, required: true
  private _batchGroupName: string;
  public get batchGroupName() {
    return this.getStringAttribute('batch_group_name');
  }
  public set batchGroupName(value: string) {
    this._batchGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchGroupNameInput() {
    return this._batchGroupName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_account_name - computed: false, optional: false, required: true
  private _integrationAccountName: string;
  public get integrationAccountName() {
    return this.getStringAttribute('integration_account_name');
  }
  public set integrationAccountName(value: string) {
    this._integrationAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationAccountNameInput() {
    return this._integrationAccountName
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable;
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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

  // release_criteria - computed: false, optional: false, required: true
  private _releaseCriteria: LogicAppIntegrationAccountBatchConfigurationReleaseCriteria[];
  public get releaseCriteria() {
    return this.interpolationForAttribute('release_criteria') as any;
  }
  public set releaseCriteria(value: LogicAppIntegrationAccountBatchConfigurationReleaseCriteria[]) {
    this._releaseCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseCriteriaInput() {
    return this._releaseCriteria
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogicAppIntegrationAccountBatchConfigurationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogicAppIntegrationAccountBatchConfigurationTimeouts ) {
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
      batch_group_name: cdktf.stringToTerraform(this._batchGroupName),
      integration_account_name: cdktf.stringToTerraform(this._integrationAccountName),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      release_criteria: cdktf.listMapper(logicAppIntegrationAccountBatchConfigurationReleaseCriteriaToTerraform)(this._releaseCriteria),
      timeouts: logicAppIntegrationAccountBatchConfigurationTimeoutsToTerraform(this._timeouts),
    };
  }
}
