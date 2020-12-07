// https://www.terraform.io/docs/providers/azurerm/r/monitor_log_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorLogProfileConfig extends cdktf.TerraformMetaArguments {
  readonly categories: string[];
  readonly locations: string[];
  readonly name: string;
  readonly servicebusRuleId?: string;
  readonly storageAccountId?: string;
  /** retention_policy block */
  readonly retentionPolicy: MonitorLogProfileRetentionPolicy[];
  /** timeouts block */
  readonly timeouts?: MonitorLogProfileTimeouts;
}
export interface MonitorLogProfileRetentionPolicy {
  readonly days?: number;
  readonly enabled: boolean;
}

function monitorLogProfileRetentionPolicyToTerraform(struct?: MonitorLogProfileRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface MonitorLogProfileTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function monitorLogProfileTimeoutsToTerraform(struct?: MonitorLogProfileTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MonitorLogProfile extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MonitorLogProfileConfig) {
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
    this._categories = config.categories;
    this._locations = config.locations;
    this._name = config.name;
    this._servicebusRuleId = config.servicebusRuleId;
    this._storageAccountId = config.storageAccountId;
    this._retentionPolicy = config.retentionPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: false, optional: false, required: true
  private _categories: string[];
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locations - computed: false, optional: false, required: true
  private _locations: string[];
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations
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

  // servicebus_rule_id - computed: false, optional: true, required: false
  private _servicebusRuleId?: string;
  public get servicebusRuleId() {
    return this.getStringAttribute('servicebus_rule_id');
  }
  public set servicebusRuleId(value: string ) {
    this._servicebusRuleId = value;
  }
  public resetServicebusRuleId() {
    this._servicebusRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicebusRuleIdInput() {
    return this._servicebusRuleId
  }

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string;
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string ) {
    this._storageAccountId = value;
  }
  public resetStorageAccountId() {
    this._storageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
  }

  // retention_policy - computed: false, optional: false, required: true
  private _retentionPolicy: MonitorLogProfileRetentionPolicy[];
  public get retentionPolicy() {
    return this.interpolationForAttribute('retention_policy') as any;
  }
  public set retentionPolicy(value: MonitorLogProfileRetentionPolicy[]) {
    this._retentionPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorLogProfileTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitorLogProfileTimeouts ) {
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
      categories: cdktf.listMapper(cdktf.stringToTerraform)(this._categories),
      locations: cdktf.listMapper(cdktf.stringToTerraform)(this._locations),
      name: cdktf.stringToTerraform(this._name),
      servicebus_rule_id: cdktf.stringToTerraform(this._servicebusRuleId),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      retention_policy: cdktf.listMapper(monitorLogProfileRetentionPolicyToTerraform)(this._retentionPolicy),
      timeouts: monitorLogProfileTimeoutsToTerraform(this._timeouts),
    };
  }
}
