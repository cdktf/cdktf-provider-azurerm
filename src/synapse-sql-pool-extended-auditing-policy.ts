// https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseSqlPoolExtendedAuditingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#log_monitoring_enabled SynapseSqlPoolExtendedAuditingPolicy#log_monitoring_enabled}
  */
  readonly logMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#retention_in_days SynapseSqlPoolExtendedAuditingPolicy#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#sql_pool_id SynapseSqlPoolExtendedAuditingPolicy#sql_pool_id}
  */
  readonly sqlPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#storage_account_access_key SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#storage_account_access_key_is_secondary SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key_is_secondary}
  */
  readonly storageAccountAccessKeyIsSecondary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#storage_endpoint SynapseSqlPoolExtendedAuditingPolicy#storage_endpoint}
  */
  readonly storageEndpoint?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#timeouts SynapseSqlPoolExtendedAuditingPolicy#timeouts}
  */
  readonly timeouts?: SynapseSqlPoolExtendedAuditingPolicyTimeouts;
}
export interface SynapseSqlPoolExtendedAuditingPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#create SynapseSqlPoolExtendedAuditingPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#delete SynapseSqlPoolExtendedAuditingPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#read SynapseSqlPoolExtendedAuditingPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html#update SynapseSqlPoolExtendedAuditingPolicy#update}
  */
  readonly update?: string;
}

function synapseSqlPoolExtendedAuditingPolicyTimeoutsToTerraform(struct?: SynapseSqlPoolExtendedAuditingPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html azurerm_synapse_sql_pool_extended_auditing_policy}
*/
export class SynapseSqlPoolExtendedAuditingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_synapse_sql_pool_extended_auditing_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_extended_auditing_policy.html azurerm_synapse_sql_pool_extended_auditing_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseSqlPoolExtendedAuditingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SynapseSqlPoolExtendedAuditingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_sql_pool_extended_auditing_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._logMonitoringEnabled = config.logMonitoringEnabled;
    this._retentionInDays = config.retentionInDays;
    this._sqlPoolId = config.sqlPoolId;
    this._storageAccountAccessKey = config.storageAccountAccessKey;
    this._storageAccountAccessKeyIsSecondary = config.storageAccountAccessKeyIsSecondary;
    this._storageEndpoint = config.storageEndpoint;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_monitoring_enabled - computed: false, optional: true, required: false
  private _logMonitoringEnabled?: boolean | cdktf.IResolvable;
  public get logMonitoringEnabled() {
    return this.getBooleanAttribute('log_monitoring_enabled');
  }
  public set logMonitoringEnabled(value: boolean | cdktf.IResolvable ) {
    this._logMonitoringEnabled = value;
  }
  public resetLogMonitoringEnabled() {
    this._logMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMonitoringEnabledInput() {
    return this._logMonitoringEnabled
  }

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: number;
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number ) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays
  }

  // sql_pool_id - computed: false, optional: false, required: true
  private _sqlPoolId: string;
  public get sqlPoolId() {
    return this.getStringAttribute('sql_pool_id');
  }
  public set sqlPoolId(value: string) {
    this._sqlPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlPoolIdInput() {
    return this._sqlPoolId
  }

  // storage_account_access_key - computed: false, optional: true, required: false
  private _storageAccountAccessKey?: string;
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }
  public set storageAccountAccessKey(value: string ) {
    this._storageAccountAccessKey = value;
  }
  public resetStorageAccountAccessKey() {
    this._storageAccountAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyInput() {
    return this._storageAccountAccessKey
  }

  // storage_account_access_key_is_secondary - computed: false, optional: true, required: false
  private _storageAccountAccessKeyIsSecondary?: boolean | cdktf.IResolvable;
  public get storageAccountAccessKeyIsSecondary() {
    return this.getBooleanAttribute('storage_account_access_key_is_secondary');
  }
  public set storageAccountAccessKeyIsSecondary(value: boolean | cdktf.IResolvable ) {
    this._storageAccountAccessKeyIsSecondary = value;
  }
  public resetStorageAccountAccessKeyIsSecondary() {
    this._storageAccountAccessKeyIsSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyIsSecondaryInput() {
    return this._storageAccountAccessKeyIsSecondary
  }

  // storage_endpoint - computed: false, optional: true, required: false
  private _storageEndpoint?: string;
  public get storageEndpoint() {
    return this.getStringAttribute('storage_endpoint');
  }
  public set storageEndpoint(value: string ) {
    this._storageEndpoint = value;
  }
  public resetStorageEndpoint() {
    this._storageEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEndpointInput() {
    return this._storageEndpoint
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SynapseSqlPoolExtendedAuditingPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SynapseSqlPoolExtendedAuditingPolicyTimeouts ) {
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
      log_monitoring_enabled: cdktf.booleanToTerraform(this._logMonitoringEnabled),
      retention_in_days: cdktf.numberToTerraform(this._retentionInDays),
      sql_pool_id: cdktf.stringToTerraform(this._sqlPoolId),
      storage_account_access_key: cdktf.stringToTerraform(this._storageAccountAccessKey),
      storage_account_access_key_is_secondary: cdktf.booleanToTerraform(this._storageAccountAccessKeyIsSecondary),
      storage_endpoint: cdktf.stringToTerraform(this._storageEndpoint),
      timeouts: synapseSqlPoolExtendedAuditingPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
