/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlManagedInstanceSecurityAlertPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#disabled_alerts MssqlManagedInstanceSecurityAlertPolicy#disabled_alerts}
  */
  readonly disabledAlerts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#email_account_admins_enabled MssqlManagedInstanceSecurityAlertPolicy#email_account_admins_enabled}
  */
  readonly emailAccountAdminsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#email_addresses MssqlManagedInstanceSecurityAlertPolicy#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#enabled MssqlManagedInstanceSecurityAlertPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#id MssqlManagedInstanceSecurityAlertPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#managed_instance_name MssqlManagedInstanceSecurityAlertPolicy#managed_instance_name}
  */
  readonly managedInstanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#resource_group_name MssqlManagedInstanceSecurityAlertPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#retention_days MssqlManagedInstanceSecurityAlertPolicy#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_account_access_key MssqlManagedInstanceSecurityAlertPolicy#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#storage_endpoint MssqlManagedInstanceSecurityAlertPolicy#storage_endpoint}
  */
  readonly storageEndpoint?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#timeouts MssqlManagedInstanceSecurityAlertPolicy#timeouts}
  */
  readonly timeouts?: MssqlManagedInstanceSecurityAlertPolicyTimeouts;
}
export interface MssqlManagedInstanceSecurityAlertPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#create MssqlManagedInstanceSecurityAlertPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#delete MssqlManagedInstanceSecurityAlertPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#read MssqlManagedInstanceSecurityAlertPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#update MssqlManagedInstanceSecurityAlertPolicy#update}
  */
  readonly update?: string;
}

export function mssqlManagedInstanceSecurityAlertPolicyTimeoutsToTerraform(struct?: MssqlManagedInstanceSecurityAlertPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function mssqlManagedInstanceSecurityAlertPolicyTimeoutsToHclTerraform(struct?: MssqlManagedInstanceSecurityAlertPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MssqlManagedInstanceSecurityAlertPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlManagedInstanceSecurityAlertPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy azurerm_mssql_managed_instance_security_alert_policy}
*/
export class MssqlManagedInstanceSecurityAlertPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mssql_managed_instance_security_alert_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MssqlManagedInstanceSecurityAlertPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MssqlManagedInstanceSecurityAlertPolicy to import
  * @param importFromId The id of the existing MssqlManagedInstanceSecurityAlertPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MssqlManagedInstanceSecurityAlertPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mssql_managed_instance_security_alert_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_security_alert_policy azurerm_mssql_managed_instance_security_alert_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlManagedInstanceSecurityAlertPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlManagedInstanceSecurityAlertPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_managed_instance_security_alert_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.37.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disabledAlerts = config.disabledAlerts;
    this._emailAccountAdminsEnabled = config.emailAccountAdminsEnabled;
    this._emailAddresses = config.emailAddresses;
    this._enabled = config.enabled;
    this._id = config.id;
    this._managedInstanceName = config.managedInstanceName;
    this._resourceGroupName = config.resourceGroupName;
    this._retentionDays = config.retentionDays;
    this._storageAccountAccessKey = config.storageAccountAccessKey;
    this._storageEndpoint = config.storageEndpoint;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled_alerts - computed: false, optional: true, required: false
  private _disabledAlerts?: string[]; 
  public get disabledAlerts() {
    return cdktf.Fn.tolist(this.getListAttribute('disabled_alerts'));
  }
  public set disabledAlerts(value: string[]) {
    this._disabledAlerts = value;
  }
  public resetDisabledAlerts() {
    this._disabledAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledAlertsInput() {
    return this._disabledAlerts;
  }

  // email_account_admins_enabled - computed: false, optional: true, required: false
  private _emailAccountAdminsEnabled?: boolean | cdktf.IResolvable; 
  public get emailAccountAdminsEnabled() {
    return this.getBooleanAttribute('email_account_admins_enabled');
  }
  public set emailAccountAdminsEnabled(value: boolean | cdktf.IResolvable) {
    this._emailAccountAdminsEnabled = value;
  }
  public resetEmailAccountAdminsEnabled() {
    this._emailAccountAdminsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAccountAdminsEnabledInput() {
    return this._emailAccountAdminsEnabled;
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('email_addresses'));
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // managed_instance_name - computed: false, optional: false, required: true
  private _managedInstanceName?: string; 
  public get managedInstanceName() {
    return this.getStringAttribute('managed_instance_name');
  }
  public set managedInstanceName(value: string) {
    this._managedInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceNameInput() {
    return this._managedInstanceName;
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
    return this._resourceGroupName;
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // storage_account_access_key - computed: false, optional: true, required: false
  private _storageAccountAccessKey?: string; 
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }
  public set storageAccountAccessKey(value: string) {
    this._storageAccountAccessKey = value;
  }
  public resetStorageAccountAccessKey() {
    this._storageAccountAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyInput() {
    return this._storageAccountAccessKey;
  }

  // storage_endpoint - computed: false, optional: true, required: false
  private _storageEndpoint?: string; 
  public get storageEndpoint() {
    return this.getStringAttribute('storage_endpoint');
  }
  public set storageEndpoint(value: string) {
    this._storageEndpoint = value;
  }
  public resetStorageEndpoint() {
    this._storageEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEndpointInput() {
    return this._storageEndpoint;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MssqlManagedInstanceSecurityAlertPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MssqlManagedInstanceSecurityAlertPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled_alerts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disabledAlerts),
      email_account_admins_enabled: cdktf.booleanToTerraform(this._emailAccountAdminsEnabled),
      email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailAddresses),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      managed_instance_name: cdktf.stringToTerraform(this._managedInstanceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      storage_account_access_key: cdktf.stringToTerraform(this._storageAccountAccessKey),
      storage_endpoint: cdktf.stringToTerraform(this._storageEndpoint),
      timeouts: mssqlManagedInstanceSecurityAlertPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled_alerts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disabledAlerts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      email_account_admins_enabled: {
        value: cdktf.booleanToHclTerraform(this._emailAccountAdminsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_instance_name: {
        value: cdktf.stringToHclTerraform(this._managedInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_days: {
        value: cdktf.numberToHclTerraform(this._retentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_account_access_key: {
        value: cdktf.stringToHclTerraform(this._storageAccountAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_endpoint: {
        value: cdktf.stringToHclTerraform(this._storageEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: mssqlManagedInstanceSecurityAlertPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MssqlManagedInstanceSecurityAlertPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
