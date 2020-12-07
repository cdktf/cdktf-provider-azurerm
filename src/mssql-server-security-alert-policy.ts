// https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlServerSecurityAlertPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly disabledAlerts?: string[];
  readonly emailAccountAdmins?: boolean;
  readonly emailAddresses?: string[];
  readonly resourceGroupName: string;
  readonly retentionDays?: number;
  readonly serverName: string;
  readonly state: string;
  readonly storageAccountAccessKey?: string;
  readonly storageEndpoint?: string;
  /** timeouts block */
  readonly timeouts?: MssqlServerSecurityAlertPolicyTimeouts;
}
export interface MssqlServerSecurityAlertPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function mssqlServerSecurityAlertPolicyTimeoutsToTerraform(struct?: MssqlServerSecurityAlertPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MssqlServerSecurityAlertPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MssqlServerSecurityAlertPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_server_security_alert_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._disabledAlerts = config.disabledAlerts;
    this._emailAccountAdmins = config.emailAccountAdmins;
    this._emailAddresses = config.emailAddresses;
    this._resourceGroupName = config.resourceGroupName;
    this._retentionDays = config.retentionDays;
    this._serverName = config.serverName;
    this._state = config.state;
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

  // email_account_admins - computed: false, optional: true, required: false
  private _emailAccountAdmins?: boolean;
  public get emailAccountAdmins() {
    return this.getBooleanAttribute('email_account_admins');
  }
  public set emailAccountAdmins(value: boolean ) {
    this._emailAccountAdmins = value;
  }
  public resetEmailAccountAdmins() {
    this._emailAccountAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAccountAdminsInput() {
    return this._emailAccountAdmins
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

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName
  }

  // state - computed: false, optional: false, required: true
  private _state: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
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
  private _timeouts?: MssqlServerSecurityAlertPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MssqlServerSecurityAlertPolicyTimeouts ) {
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
      email_account_admins: cdktf.booleanToTerraform(this._emailAccountAdmins),
      email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._emailAddresses),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      server_name: cdktf.stringToTerraform(this._serverName),
      state: cdktf.stringToTerraform(this._state),
      storage_account_access_key: cdktf.stringToTerraform(this._storageAccountAccessKey),
      storage_endpoint: cdktf.stringToTerraform(this._storageEndpoint),
      timeouts: mssqlServerSecurityAlertPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
