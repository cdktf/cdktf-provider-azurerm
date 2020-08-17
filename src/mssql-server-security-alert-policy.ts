// https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MssqlServerSecurityAlertPolicyConfig extends TerraformMetaArguments {
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

// Resource

export class MssqlServerSecurityAlertPolicy extends TerraformResource {

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
    return this._disabledAlerts;
  }
  public set disabledAlerts(value: string[] | undefined) {
    this._disabledAlerts = value;
  }

  // email_account_admins - computed: false, optional: true, required: false
  private _emailAccountAdmins?: boolean;
  public get emailAccountAdmins() {
    return this._emailAccountAdmins;
  }
  public set emailAccountAdmins(value: boolean | undefined) {
    this._emailAccountAdmins = value;
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[];
  public get emailAddresses() {
    return this._emailAddresses;
  }
  public set emailAddresses(value: string[] | undefined) {
    this._emailAddresses = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number;
  public get retentionDays() {
    return this._retentionDays;
  }
  public set retentionDays(value: number | undefined) {
    this._retentionDays = value;
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this._serverName;
  }
  public set serverName(value: string) {
    this._serverName = value;
  }

  // state - computed: false, optional: false, required: true
  private _state: string;
  public get state() {
    return this._state;
  }
  public set state(value: string) {
    this._state = value;
  }

  // storage_account_access_key - computed: false, optional: true, required: false
  private _storageAccountAccessKey?: string;
  public get storageAccountAccessKey() {
    return this._storageAccountAccessKey;
  }
  public set storageAccountAccessKey(value: string | undefined) {
    this._storageAccountAccessKey = value;
  }

  // storage_endpoint - computed: false, optional: true, required: false
  private _storageEndpoint?: string;
  public get storageEndpoint() {
    return this._storageEndpoint;
  }
  public set storageEndpoint(value: string | undefined) {
    this._storageEndpoint = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MssqlServerSecurityAlertPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MssqlServerSecurityAlertPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled_alerts: this._disabledAlerts,
      email_account_admins: this._emailAccountAdmins,
      email_addresses: this._emailAddresses,
      resource_group_name: this._resourceGroupName,
      retention_days: this._retentionDays,
      server_name: this._serverName,
      state: this._state,
      storage_account_access_key: this._storageAccountAccessKey,
      storage_endpoint: this._storageEndpoint,
      timeouts: this._timeouts,
    };
  }
}
