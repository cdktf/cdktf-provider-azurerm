// https://www.terraform.io/docs/providers/azurerm/r/monitor_log_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MonitorLogProfileConfig extends TerraformMetaArguments {
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
export interface MonitorLogProfileTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class MonitorLogProfile extends TerraformResource {

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
    return this._categories;
  }
  public set categories(value: string[]) {
    this._categories = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // locations - computed: false, optional: false, required: true
  private _locations: string[];
  public get locations() {
    return this._locations;
  }
  public set locations(value: string[]) {
    this._locations = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // servicebus_rule_id - computed: false, optional: true, required: false
  private _servicebusRuleId?: string;
  public get servicebusRuleId() {
    return this._servicebusRuleId;
  }
  public set servicebusRuleId(value: string | undefined) {
    this._servicebusRuleId = value;
  }

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string;
  public get storageAccountId() {
    return this._storageAccountId;
  }
  public set storageAccountId(value: string | undefined) {
    this._storageAccountId = value;
  }

  // retention_policy - computed: false, optional: false, required: true
  private _retentionPolicy: MonitorLogProfileRetentionPolicy[];
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public set retentionPolicy(value: MonitorLogProfileRetentionPolicy[]) {
    this._retentionPolicy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorLogProfileTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MonitorLogProfileTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      categories: this._categories,
      locations: this._locations,
      name: this._name,
      servicebus_rule_id: this._servicebusRuleId,
      storage_account_id: this._storageAccountId,
      retention_policy: this._retentionPolicy,
      timeouts: this._timeouts,
    };
  }
}
