// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_monitor_log_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermMonitorLogProfileConfig extends TerraformMetaArguments {
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermMonitorLogProfileTimeouts;
}
export class DataAzurermMonitorLogProfileRetentionPolicy extends ComplexComputedList {

  // days - computed: true, optional: false, required: true
  public get days() {
    return this.getNumberAttribute('days');
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAzurermMonitorLogProfileTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermMonitorLogProfile extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermMonitorLogProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_log_profile',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: true, optional: false, required: true
  public get categories() {
    return this.getListAttribute('categories');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // locations - computed: true, optional: false, required: true
  public get locations() {
    return this.getListAttribute('locations');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // retention_policy - computed: true, optional: false, required: true
  public retentionPolicy(index: string) {
    return new DataAzurermMonitorLogProfileRetentionPolicy(this, 'retention_policy', index);
  }

  // servicebus_rule_id - computed: true, optional: false, required: true
  public get servicebusRuleId() {
    return this.getStringAttribute('servicebus_rule_id');
  }

  // storage_account_id - computed: true, optional: false, required: true
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermMonitorLogProfileTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermMonitorLogProfileTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      timeouts: this._timeouts,
    };
  }
}
