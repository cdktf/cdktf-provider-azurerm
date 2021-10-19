// https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlServerSecurityAlertPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html#disabled_alerts MssqlServerSecurityAlertPolicy#disabled_alerts}
  */
  readonly disabledAlerts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html#email_account_admins MssqlServerSecurityAlertPolicy#email_account_admins}
  */
  readonly emailAccountAdmins?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html#email_addresses MssqlServerSecurityAlertPolicy#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html#resource_group_name MssqlServerSecurityAlertPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html#retention_days MssqlServerSecurityAlertPolicy#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html#server_name MssqlServerSecurityAlertPolicy#server_name}
  */
  readonly serverName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html#state MssqlServerSecurityAlertPolicy#state}
  */
  readonly state: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html#storage_account_access_key MssqlServerSecurityAlertPolicy#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html#storage_endpoint MssqlServerSecurityAlertPolicy#storage_endpoint}
  */
  readonly storageEndpoint?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html#timeouts MssqlServerSecurityAlertPolicy#timeouts}
  */
  readonly timeouts?: MssqlServerSecurityAlertPolicyTimeouts;
}
export interface MssqlServerSecurityAlertPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html#create MssqlServerSecurityAlertPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html#delete MssqlServerSecurityAlertPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html#read MssqlServerSecurityAlertPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html#update MssqlServerSecurityAlertPolicy#update}
  */
  readonly update?: string;
}

function mssqlServerSecurityAlertPolicyTimeoutsToTerraform(struct?: MssqlServerSecurityAlertPolicyTimeoutsOutputReference | MssqlServerSecurityAlertPolicyTimeouts): any {
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

export class MssqlServerSecurityAlertPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html azurerm_mssql_server_security_alert_policy}
*/
export class MssqlServerSecurityAlertPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_mssql_server_security_alert_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_server_security_alert_policy.html azurerm_mssql_server_security_alert_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlServerSecurityAlertPolicyConfig
  */
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

  // email_account_admins - computed: false, optional: true, required: false
  private _emailAccountAdmins?: boolean | cdktf.IResolvable | undefined; 
  public get emailAccountAdmins() {
    return this.getBooleanAttribute('email_account_admins') as any;
  }
  public set emailAccountAdmins(value: boolean | cdktf.IResolvable | undefined) {
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
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
  private _state?: string; 
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
  private _timeouts?: MssqlServerSecurityAlertPolicyTimeouts | undefined; 
  private __timeoutsOutput = new MssqlServerSecurityAlertPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MssqlServerSecurityAlertPolicyTimeouts | undefined) {
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
