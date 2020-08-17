// https://www.terraform.io/docs/providers/azurerm/r/backup_policy_vm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BackupPolicyVmConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly recoveryVaultName: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly timezone?: string;
  /** backup block */
  readonly backup: BackupPolicyVmBackup[];
  /** retention_daily block */
  readonly retentionDaily?: BackupPolicyVmRetentionDaily[];
  /** retention_monthly block */
  readonly retentionMonthly?: BackupPolicyVmRetentionMonthly[];
  /** retention_weekly block */
  readonly retentionWeekly?: BackupPolicyVmRetentionWeekly[];
  /** retention_yearly block */
  readonly retentionYearly?: BackupPolicyVmRetentionYearly[];
  /** timeouts block */
  readonly timeouts?: BackupPolicyVmTimeouts;
}
export interface BackupPolicyVmBackup {
  readonly frequency: string;
  readonly time: string;
  readonly weekdays?: string[];
}
export interface BackupPolicyVmRetentionDaily {
  readonly count: number;
}
export interface BackupPolicyVmRetentionMonthly {
  readonly count: number;
  readonly weekdays: string[];
  readonly weeks: string[];
}
export interface BackupPolicyVmRetentionWeekly {
  readonly count: number;
  readonly weekdays: string[];
}
export interface BackupPolicyVmRetentionYearly {
  readonly count: number;
  readonly months: string[];
  readonly weekdays: string[];
  readonly weeks: string[];
}
export interface BackupPolicyVmTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class BackupPolicyVm extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BackupPolicyVmConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_backup_policy_vm',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._backup = config.backup;
    this._retentionDaily = config.retentionDaily;
    this._retentionMonthly = config.retentionMonthly;
    this._retentionWeekly = config.retentionWeekly;
    this._retentionYearly = config.retentionYearly;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // recovery_vault_name - computed: false, optional: false, required: true
  private _recoveryVaultName: string;
  public get recoveryVaultName() {
    return this._recoveryVaultName;
  }
  public set recoveryVaultName(value: string) {
    this._recoveryVaultName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string;
  public get timezone() {
    return this._timezone;
  }
  public set timezone(value: string | undefined) {
    this._timezone = value;
  }

  // backup - computed: false, optional: false, required: true
  private _backup: BackupPolicyVmBackup[];
  public get backup() {
    return this._backup;
  }
  public set backup(value: BackupPolicyVmBackup[]) {
    this._backup = value;
  }

  // retention_daily - computed: false, optional: true, required: false
  private _retentionDaily?: BackupPolicyVmRetentionDaily[];
  public get retentionDaily() {
    return this._retentionDaily;
  }
  public set retentionDaily(value: BackupPolicyVmRetentionDaily[] | undefined) {
    this._retentionDaily = value;
  }

  // retention_monthly - computed: false, optional: true, required: false
  private _retentionMonthly?: BackupPolicyVmRetentionMonthly[];
  public get retentionMonthly() {
    return this._retentionMonthly;
  }
  public set retentionMonthly(value: BackupPolicyVmRetentionMonthly[] | undefined) {
    this._retentionMonthly = value;
  }

  // retention_weekly - computed: false, optional: true, required: false
  private _retentionWeekly?: BackupPolicyVmRetentionWeekly[];
  public get retentionWeekly() {
    return this._retentionWeekly;
  }
  public set retentionWeekly(value: BackupPolicyVmRetentionWeekly[] | undefined) {
    this._retentionWeekly = value;
  }

  // retention_yearly - computed: false, optional: true, required: false
  private _retentionYearly?: BackupPolicyVmRetentionYearly[];
  public get retentionYearly() {
    return this._retentionYearly;
  }
  public set retentionYearly(value: BackupPolicyVmRetentionYearly[] | undefined) {
    this._retentionYearly = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BackupPolicyVmTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BackupPolicyVmTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      recovery_vault_name: this._recoveryVaultName,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      timezone: this._timezone,
      backup: this._backup,
      retention_daily: this._retentionDaily,
      retention_monthly: this._retentionMonthly,
      retention_weekly: this._retentionWeekly,
      retention_yearly: this._retentionYearly,
      timeouts: this._timeouts,
    };
  }
}
