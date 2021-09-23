// https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseSqlPoolSecurityAlertPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html#disabled_alerts SynapseSqlPoolSecurityAlertPolicy#disabled_alerts}
  */
  readonly disabledAlerts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html#email_account_admins_enabled SynapseSqlPoolSecurityAlertPolicy#email_account_admins_enabled}
  */
  readonly emailAccountAdminsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html#email_addresses SynapseSqlPoolSecurityAlertPolicy#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html#policy_state SynapseSqlPoolSecurityAlertPolicy#policy_state}
  */
  readonly policyState: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html#retention_days SynapseSqlPoolSecurityAlertPolicy#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html#sql_pool_id SynapseSqlPoolSecurityAlertPolicy#sql_pool_id}
  */
  readonly sqlPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html#storage_account_access_key SynapseSqlPoolSecurityAlertPolicy#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html#storage_endpoint SynapseSqlPoolSecurityAlertPolicy#storage_endpoint}
  */
  readonly storageEndpoint?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html#timeouts SynapseSqlPoolSecurityAlertPolicy#timeouts}
  */
  readonly timeouts?: SynapseSqlPoolSecurityAlertPolicyTimeouts;
}
export interface SynapseSqlPoolSecurityAlertPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html#create SynapseSqlPoolSecurityAlertPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html#delete SynapseSqlPoolSecurityAlertPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html#read SynapseSqlPoolSecurityAlertPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html#update SynapseSqlPoolSecurityAlertPolicy#update}
  */
  readonly update?: string;
}

function synapseSqlPoolSecurityAlertPolicyTimeoutsToTerraform(struct?: SynapseSqlPoolSecurityAlertPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html azurerm_synapse_sql_pool_security_alert_policy}
*/
export class SynapseSqlPoolSecurityAlertPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_synapse_sql_pool_security_alert_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool_security_alert_policy.html azurerm_synapse_sql_pool_security_alert_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseSqlPoolSecurityAlertPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SynapseSqlPoolSecurityAlertPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_sql_pool_security_alert_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._disabledAlerts = config.disabledAlerts;
    this._emailAccountAdminsEnabled = config.emailAccountAdminsEnabled;
    this._emailAddresses = config.emailAddresses;
    this._policyState = config.policyState;
    this._retentionDays = config.retentionDays;
    this._sqlPoolId = config.sqlPoolId;
    this._storageAccountAccessKey = config.storageAccountAccessKey;
    this._storageEndpoint = config.storageEndpoint;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled_alerts - computed: false, optional: true, required: false
  private _disabledAlerts?: string[];
  public get disabledAlerts() {
    return this.getListAttribute('disabled_alerts');
  }
  public set disabledAlerts(value: string[] ) {
    this._disabledAlerts = value;
  }
  public resetDisabledAlerts() {
    this._disabledAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledAlertsInput() {
    return this._disabledAlerts
  }

  // email_account_admins_enabled - computed: false, optional: true, required: false
  private _emailAccountAdminsEnabled?: boolean | cdktf.IResolvable;
  public get emailAccountAdminsEnabled() {
    return this.getBooleanAttribute('email_account_admins_enabled');
  }
  public set emailAccountAdminsEnabled(value: boolean | cdktf.IResolvable ) {
    this._emailAccountAdminsEnabled = value;
  }
  public resetEmailAccountAdminsEnabled() {
    this._emailAccountAdminsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAccountAdminsEnabledInput() {
    return this._emailAccountAdminsEnabled
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[];
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[] ) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_state - computed: false, optional: false, required: true
  private _policyState: string;
  public get policyState() {
    return this.getStringAttribute('policy_state');
  }
  public set policyState(value: string) {
    this._policyState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyStateInput() {
    return this._policyState
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number;
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number ) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays
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
  private _timeouts?: SynapseSqlPoolSecurityAlertPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SynapseSqlPoolSecurityAlertPolicyTimeouts ) {
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
      disabled_alerts: cdktf.listMapper(cdktf.stringToTerraform)(this._disabledAlerts),
      email_account_admins_enabled: cdktf.booleanToTerraform(this._emailAccountAdminsEnabled),
      email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._emailAddresses),
      policy_state: cdktf.stringToTerraform(this._policyState),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      sql_pool_id: cdktf.stringToTerraform(this._sqlPoolId),
      storage_account_access_key: cdktf.stringToTerraform(this._storageAccountAccessKey),
      storage_endpoint: cdktf.stringToTerraform(this._storageEndpoint),
      timeouts: synapseSqlPoolSecurityAlertPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
