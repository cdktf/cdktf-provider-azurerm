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

function dataProtectionBackupPolicyDiskRetentionRuleCriteriaToTerraform(struct?: DataProtectionBackupPolicyDiskRetentionRuleCriteriaOutputReference | DataProtectionBackupPolicyDiskRetentionRuleCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_criteria: cdktf.stringToTerraform(struct!.absoluteCriteria),
  }
}

export class DataProtectionBackupPolicyDiskRetentionRuleCriteriaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // absolute_criteria - computed: false, optional: true, required: false
  private _absoluteCriteria?: string | undefined; 
  public get absoluteCriteria() {
    return this.getStringAttribute('absolute_criteria');
  }
  public set absoluteCriteria(value: string | undefined) {
    this._absoluteCriteria = value;
  }
  public resetAbsoluteCriteria() {
    this._absoluteCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteCriteriaInput() {
    return this._absoluteCriteria
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
  readonly criteria: DataProtectionBackupPolicyDiskRetentionRuleCriteria;
}

function dataProtectionBackupPolicyDiskRetentionRuleToTerraform(struct?: DataProtectionBackupPolicyDiskRetentionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    criteria: dataProtectionBackupPolicyDiskRetentionRuleCriteriaToTerraform(struct!.criteria),
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

function dataProtectionBackupPolicyDiskTimeoutsToTerraform(struct?: DataProtectionBackupPolicyDiskTimeoutsOutputReference | DataProtectionBackupPolicyDiskTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DataProtectionBackupPolicyDiskTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
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
  private _backupRepeatingTimeIntervals?: string[]; 
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
  private _defaultRetentionDuration?: string; 
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
  private _name?: string; 
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
  private _vaultId?: string; 
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
  private _retentionRule?: DataProtectionBackupPolicyDiskRetentionRule[] | undefined; 
  public get retentionRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('retention_rule') as any;
  }
  public set retentionRule(value: DataProtectionBackupPolicyDiskRetentionRule[] | undefined) {
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
  private _timeouts?: DataProtectionBackupPolicyDiskTimeouts | undefined; 
  private __timeoutsOutput = new DataProtectionBackupPolicyDiskTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataProtectionBackupPolicyDiskTimeouts | undefined) {
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
