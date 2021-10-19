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

function synapseSqlPoolSecurityAlertPolicyTimeoutsToTerraform(struct?: SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference | SynapseSqlPoolSecurityAlertPolicyTimeouts): any {
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

export class SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
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
  private _disabledAlerts?: string[] | undefined; 
  public get disabledAlerts() {
    return this.getListAttribute('disabled_alerts');
  }
  public set disabledAlerts(value: string[] | undefined) {
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
  private _emailAccountAdminsEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get emailAccountAdminsEnabled() {
    return this.getBooleanAttribute('email_account_admins_enabled') as any;
  }
  public set emailAccountAdminsEnabled(value: boolean | cdktf.IResolvable | undefined) {
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
  private _emailAddresses?: string[] | undefined; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[] | undefined) {
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
  private _policyState?: string; 
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
  private _retentionDays?: number | undefined; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number | undefined) {
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
  private _sqlPoolId?: string; 
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
  private _storageAccountAccessKey?: string | undefined; 
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }
  public set storageAccountAccessKey(value: string | undefined) {
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
  private _storageEndpoint?: string | undefined; 
  public get storageEndpoint() {
    return this.getStringAttribute('storage_endpoint');
  }
  public set storageEndpoint(value: string | undefined) {
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
  private _timeouts?: SynapseSqlPoolSecurityAlertPolicyTimeouts | undefined; 
  private __timeoutsOutput = new SynapseSqlPoolSecurityAlertPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SynapseSqlPoolSecurityAlertPolicyTimeouts | undefined) {
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
