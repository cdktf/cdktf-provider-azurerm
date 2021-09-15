// https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProtectionBackupPolicyPostgresqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresql#backup_repeating_time_intervals}
  */
  readonly backupRepeatingTimeIntervals: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#default_retention_duration DataProtectionBackupPolicyPostgresql#default_retention_duration}
  */
  readonly defaultRetentionDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#name DataProtectionBackupPolicyPostgresql#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#resource_group_name DataProtectionBackupPolicyPostgresql#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#vault_name DataProtectionBackupPolicyPostgresql#vault_name}
  */
  readonly vaultName: string;
  /**
  * retention_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#retention_rule DataProtectionBackupPolicyPostgresql#retention_rule}
  */
  readonly retentionRule?: DataProtectionBackupPolicyPostgresqlRetentionRule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#timeouts DataProtectionBackupPolicyPostgresql#timeouts}
  */
  readonly timeouts?: DataProtectionBackupPolicyPostgresqlTimeouts;
}
export interface DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#absolute_criteria DataProtectionBackupPolicyPostgresql#absolute_criteria}
  */
  readonly absoluteCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#days_of_week DataProtectionBackupPolicyPostgresql#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#months_of_year DataProtectionBackupPolicyPostgresql#months_of_year}
  */
  readonly monthsOfYear?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#scheduled_backup_times DataProtectionBackupPolicyPostgresql#scheduled_backup_times}
  */
  readonly scheduledBackupTimes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#weeks_of_month DataProtectionBackupPolicyPostgresql#weeks_of_month}
  */
  readonly weeksOfMonth?: string[];
}

function dataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaToTerraform(struct?: DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    absolute_criteria: cdktf.stringToTerraform(struct!.absoluteCriteria),
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform)(struct!.daysOfWeek),
    months_of_year: cdktf.listMapper(cdktf.stringToTerraform)(struct!.monthsOfYear),
    scheduled_backup_times: cdktf.listMapper(cdktf.stringToTerraform)(struct!.scheduledBackupTimes),
    weeks_of_month: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weeksOfMonth),
  }
}

export interface DataProtectionBackupPolicyPostgresqlRetentionRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#duration DataProtectionBackupPolicyPostgresql#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#name DataProtectionBackupPolicyPostgresql#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#priority DataProtectionBackupPolicyPostgresql#priority}
  */
  readonly priority: number;
  /**
  * criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#criteria DataProtectionBackupPolicyPostgresql#criteria}
  */
  readonly criteria: DataProtectionBackupPolicyPostgresqlRetentionRuleCriteria[];
}

function dataProtectionBackupPolicyPostgresqlRetentionRuleToTerraform(struct?: DataProtectionBackupPolicyPostgresqlRetentionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    criteria: cdktf.listMapper(dataProtectionBackupPolicyPostgresqlRetentionRuleCriteriaToTerraform)(struct!.criteria),
  }
}

export interface DataProtectionBackupPolicyPostgresqlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#create DataProtectionBackupPolicyPostgresql#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#delete DataProtectionBackupPolicyPostgresql#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#read DataProtectionBackupPolicyPostgresql#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html#update DataProtectionBackupPolicyPostgresql#update}
  */
  readonly update?: string;
}

function dataProtectionBackupPolicyPostgresqlTimeoutsToTerraform(struct?: DataProtectionBackupPolicyPostgresqlTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html azurerm_data_protection_backup_policy_postgresql}
*/
export class DataProtectionBackupPolicyPostgresql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_protection_backup_policy_postgresql";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_postgresql.html azurerm_data_protection_backup_policy_postgresql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProtectionBackupPolicyPostgresqlConfig
  */
  public constructor(scope: Construct, id: string, config: DataProtectionBackupPolicyPostgresqlConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_protection_backup_policy_postgresql',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupRepeatingTimeIntervals = config.backupRepeatingTimeIntervals;
    this._defaultRetentionDuration = config.defaultRetentionDuration;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._vaultName = config.vaultName;
    this._retentionRule = config.retentionRule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_repeating_time_intervals - computed: false, optional: false, required: true
  private _backupRepeatingTimeIntervals: string[];
  public get backupRepeatingTimeIntervals() {
    return this.getListAttribute('backup_repeating_time_intervals');
  }
  public set backupRepeatingTimeIntervals(value: string[]) {
    this._backupRepeatingTimeIntervals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRepeatingTimeIntervalsInput() {
    return this._backupRepeatingTimeIntervals
  }

  // default_retention_duration - computed: false, optional: false, required: true
  private _defaultRetentionDuration: string;
  public get defaultRetentionDuration() {
    return this.getStringAttribute('default_retention_duration');
  }
  public set defaultRetentionDuration(value: string) {
    this._defaultRetentionDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRetentionDurationInput() {
    return this._defaultRetentionDuration
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

  // vault_name - computed: false, optional: false, required: true
  private _vaultName: string;
  public get vaultName() {
    return this.getStringAttribute('vault_name');
  }
  public set vaultName(value: string) {
    this._vaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultNameInput() {
    return this._vaultName
  }

  // retention_rule - computed: false, optional: true, required: false
  private _retentionRule?: DataProtectionBackupPolicyPostgresqlRetentionRule[];
  public get retentionRule() {
    return this.interpolationForAttribute('retention_rule') as any;
  }
  public set retentionRule(value: DataProtectionBackupPolicyPostgresqlRetentionRule[] ) {
    this._retentionRule = value;
  }
  public resetRetentionRule() {
    this._retentionRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionRuleInput() {
    return this._retentionRule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataProtectionBackupPolicyPostgresqlTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataProtectionBackupPolicyPostgresqlTimeouts ) {
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
      backup_repeating_time_intervals: cdktf.listMapper(cdktf.stringToTerraform)(this._backupRepeatingTimeIntervals),
      default_retention_duration: cdktf.stringToTerraform(this._defaultRetentionDuration),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      vault_name: cdktf.stringToTerraform(this._vaultName),
      retention_rule: cdktf.listMapper(dataProtectionBackupPolicyPostgresqlRetentionRuleToTerraform)(this._retentionRule),
      timeouts: dataProtectionBackupPolicyPostgresqlTimeoutsToTerraform(this._timeouts),
    };
  }
}
