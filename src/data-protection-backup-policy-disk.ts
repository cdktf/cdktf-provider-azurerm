// https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProtectionBackupPolicyDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html#backup_repeating_time_intervals DataProtectionBackupPolicyDisk#backup_repeating_time_intervals}
  */
  readonly backupRepeatingTimeIntervals: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html#default_retention_duration DataProtectionBackupPolicyDisk#default_retention_duration}
  */
  readonly defaultRetentionDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html#name DataProtectionBackupPolicyDisk#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html#vault_id DataProtectionBackupPolicyDisk#vault_id}
  */
  readonly vaultId: string;
  /**
  * retention_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html#retention_rule DataProtectionBackupPolicyDisk#retention_rule}
  */
  readonly retentionRule?: DataProtectionBackupPolicyDiskRetentionRule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html#timeouts DataProtectionBackupPolicyDisk#timeouts}
  */
  readonly timeouts?: DataProtectionBackupPolicyDiskTimeouts;
}
export interface DataProtectionBackupPolicyDiskRetentionRuleCriteria {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html#absolute_criteria DataProtectionBackupPolicyDisk#absolute_criteria}
  */
  readonly absoluteCriteria?: string;
}

function dataProtectionBackupPolicyDiskRetentionRuleCriteriaToTerraform(struct?: DataProtectionBackupPolicyDiskRetentionRuleCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    absolute_criteria: cdktf.stringToTerraform(struct!.absoluteCriteria),
  }
}

export interface DataProtectionBackupPolicyDiskRetentionRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html#duration DataProtectionBackupPolicyDisk#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html#name DataProtectionBackupPolicyDisk#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html#priority DataProtectionBackupPolicyDisk#priority}
  */
  readonly priority: number;
  /**
  * criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html#criteria DataProtectionBackupPolicyDisk#criteria}
  */
  readonly criteria: DataProtectionBackupPolicyDiskRetentionRuleCriteria[];
}

function dataProtectionBackupPolicyDiskRetentionRuleToTerraform(struct?: DataProtectionBackupPolicyDiskRetentionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    criteria: cdktf.listMapper(dataProtectionBackupPolicyDiskRetentionRuleCriteriaToTerraform)(struct!.criteria),
  }
}

export interface DataProtectionBackupPolicyDiskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html#create DataProtectionBackupPolicyDisk#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html#delete DataProtectionBackupPolicyDisk#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html#read DataProtectionBackupPolicyDisk#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html#update DataProtectionBackupPolicyDisk#update}
  */
  readonly update?: string;
}

function dataProtectionBackupPolicyDiskTimeoutsToTerraform(struct?: DataProtectionBackupPolicyDiskTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html azurerm_data_protection_backup_policy_disk}
*/
export class DataProtectionBackupPolicyDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_protection_backup_policy_disk";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_policy_disk.html azurerm_data_protection_backup_policy_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProtectionBackupPolicyDiskConfig
  */
  public constructor(scope: Construct, id: string, config: DataProtectionBackupPolicyDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_protection_backup_policy_disk',
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
    this._vaultId = config.vaultId;
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

  // vault_id - computed: false, optional: false, required: true
  private _vaultId: string;
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId
  }

  // retention_rule - computed: false, optional: true, required: false
  private _retentionRule?: DataProtectionBackupPolicyDiskRetentionRule[];
  public get retentionRule() {
    return this.interpolationForAttribute('retention_rule') as any;
  }
  public set retentionRule(value: DataProtectionBackupPolicyDiskRetentionRule[] ) {
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
  private _timeouts?: DataProtectionBackupPolicyDiskTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataProtectionBackupPolicyDiskTimeouts ) {
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
      vault_id: cdktf.stringToTerraform(this._vaultId),
      retention_rule: cdktf.listMapper(dataProtectionBackupPolicyDiskRetentionRuleToTerraform)(this._retentionRule),
      timeouts: dataProtectionBackupPolicyDiskTimeoutsToTerraform(this._timeouts),
    };
  }
}
