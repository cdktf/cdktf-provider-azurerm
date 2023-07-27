// https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#collation SqlDatabase#collation}
  */
  readonly collation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#create_mode SqlDatabase#create_mode}
  */
  readonly createMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#edition SqlDatabase#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#elastic_pool_name SqlDatabase#elastic_pool_name}
  */
  readonly elasticPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#id SqlDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#location SqlDatabase#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#max_size_bytes SqlDatabase#max_size_bytes}
  */
  readonly maxSizeBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#max_size_gb SqlDatabase#max_size_gb}
  */
  readonly maxSizeGb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#name SqlDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#read_scale SqlDatabase#read_scale}
  */
  readonly readScale?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#requested_service_objective_id SqlDatabase#requested_service_objective_id}
  */
  readonly requestedServiceObjectiveId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#requested_service_objective_name SqlDatabase#requested_service_objective_name}
  */
  readonly requestedServiceObjectiveName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#resource_group_name SqlDatabase#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#restore_point_in_time SqlDatabase#restore_point_in_time}
  */
  readonly restorePointInTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#server_name SqlDatabase#server_name}
  */
  readonly serverName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#source_database_deletion_date SqlDatabase#source_database_deletion_date}
  */
  readonly sourceDatabaseDeletionDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#source_database_id SqlDatabase#source_database_id}
  */
  readonly sourceDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#tags SqlDatabase#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#zone_redundant SqlDatabase#zone_redundant}
  */
  readonly zoneRedundant?: boolean | cdktf.IResolvable;
  /**
  * import block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#import SqlDatabase#import}
  */
  readonly import?: SqlDatabaseImport;
  /**
  * threat_detection_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#threat_detection_policy SqlDatabase#threat_detection_policy}
  */
  readonly threatDetectionPolicy?: SqlDatabaseThreatDetectionPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#timeouts SqlDatabase#timeouts}
  */
  readonly timeouts?: SqlDatabaseTimeouts;
}
export interface SqlDatabaseImport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#administrator_login SqlDatabase#administrator_login}
  */
  readonly administratorLogin: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#administrator_login_password SqlDatabase#administrator_login_password}
  */
  readonly administratorLoginPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#authentication_type SqlDatabase#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#operation_mode SqlDatabase#operation_mode}
  */
  readonly operationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#storage_key SqlDatabase#storage_key}
  */
  readonly storageKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#storage_key_type SqlDatabase#storage_key_type}
  */
  readonly storageKeyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#storage_uri SqlDatabase#storage_uri}
  */
  readonly storageUri: string;
}

export function sqlDatabaseImportToTerraform(struct?: SqlDatabaseImportOutputReference | SqlDatabaseImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrator_login: cdktf.stringToTerraform(struct!.administratorLogin),
    administrator_login_password: cdktf.stringToTerraform(struct!.administratorLoginPassword),
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    operation_mode: cdktf.stringToTerraform(struct!.operationMode),
    storage_key: cdktf.stringToTerraform(struct!.storageKey),
    storage_key_type: cdktf.stringToTerraform(struct!.storageKeyType),
    storage_uri: cdktf.stringToTerraform(struct!.storageUri),
  }
}

export class SqlDatabaseImportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseImport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._administratorLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.administratorLogin = this._administratorLogin;
    }
    if (this._administratorLoginPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.administratorLoginPassword = this._administratorLoginPassword;
    }
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._operationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationMode = this._operationMode;
    }
    if (this._storageKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageKey = this._storageKey;
    }
    if (this._storageKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageKeyType = this._storageKeyType;
    }
    if (this._storageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageUri = this._storageUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseImport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._administratorLogin = undefined;
      this._administratorLoginPassword = undefined;
      this._authenticationType = undefined;
      this._operationMode = undefined;
      this._storageKey = undefined;
      this._storageKeyType = undefined;
      this._storageUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._administratorLogin = value.administratorLogin;
      this._administratorLoginPassword = value.administratorLoginPassword;
      this._authenticationType = value.authenticationType;
      this._operationMode = value.operationMode;
      this._storageKey = value.storageKey;
      this._storageKeyType = value.storageKeyType;
      this._storageUri = value.storageUri;
    }
  }

  // administrator_login - computed: false, optional: false, required: true
  private _administratorLogin?: string; 
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }
  public set administratorLogin(value: string) {
    this._administratorLogin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginInput() {
    return this._administratorLogin;
  }

  // administrator_login_password - computed: false, optional: false, required: true
  private _administratorLoginPassword?: string; 
  public get administratorLoginPassword() {
    return this.getStringAttribute('administrator_login_password');
  }
  public set administratorLoginPassword(value: string) {
    this._administratorLoginPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginPasswordInput() {
    return this._administratorLoginPassword;
  }

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // operation_mode - computed: false, optional: true, required: false
  private _operationMode?: string; 
  public get operationMode() {
    return this.getStringAttribute('operation_mode');
  }
  public set operationMode(value: string) {
    this._operationMode = value;
  }
  public resetOperationMode() {
    this._operationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationModeInput() {
    return this._operationMode;
  }

  // storage_key - computed: false, optional: false, required: true
  private _storageKey?: string; 
  public get storageKey() {
    return this.getStringAttribute('storage_key');
  }
  public set storageKey(value: string) {
    this._storageKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageKeyInput() {
    return this._storageKey;
  }

  // storage_key_type - computed: false, optional: false, required: true
  private _storageKeyType?: string; 
  public get storageKeyType() {
    return this.getStringAttribute('storage_key_type');
  }
  public set storageKeyType(value: string) {
    this._storageKeyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageKeyTypeInput() {
    return this._storageKeyType;
  }

  // storage_uri - computed: false, optional: false, required: true
  private _storageUri?: string; 
  public get storageUri() {
    return this.getStringAttribute('storage_uri');
  }
  public set storageUri(value: string) {
    this._storageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUriInput() {
    return this._storageUri;
  }
}
export interface SqlDatabaseThreatDetectionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#disabled_alerts SqlDatabase#disabled_alerts}
  */
  readonly disabledAlerts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#email_account_admins SqlDatabase#email_account_admins}
  */
  readonly emailAccountAdmins?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#email_addresses SqlDatabase#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#retention_days SqlDatabase#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#state SqlDatabase#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#storage_account_access_key SqlDatabase#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#storage_endpoint SqlDatabase#storage_endpoint}
  */
  readonly storageEndpoint?: string;
}

export function sqlDatabaseThreatDetectionPolicyToTerraform(struct?: SqlDatabaseThreatDetectionPolicyOutputReference | SqlDatabaseThreatDetectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled_alerts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabledAlerts),
    email_account_admins: cdktf.stringToTerraform(struct!.emailAccountAdmins),
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailAddresses),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
    state: cdktf.stringToTerraform(struct!.state),
    storage_account_access_key: cdktf.stringToTerraform(struct!.storageAccountAccessKey),
    storage_endpoint: cdktf.stringToTerraform(struct!.storageEndpoint),
  }
}

export class SqlDatabaseThreatDetectionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseThreatDetectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabledAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledAlerts = this._disabledAlerts;
    }
    if (this._emailAccountAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAccountAdmins = this._emailAccountAdmins;
    }
    if (this._emailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddresses = this._emailAddresses;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._storageAccountAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountAccessKey = this._storageAccountAccessKey;
    }
    if (this._storageEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageEndpoint = this._storageEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseThreatDetectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabledAlerts = undefined;
      this._emailAccountAdmins = undefined;
      this._emailAddresses = undefined;
      this._retentionDays = undefined;
      this._state = undefined;
      this._storageAccountAccessKey = undefined;
      this._storageEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabledAlerts = value.disabledAlerts;
      this._emailAccountAdmins = value.emailAccountAdmins;
      this._emailAddresses = value.emailAddresses;
      this._retentionDays = value.retentionDays;
      this._state = value.state;
      this._storageAccountAccessKey = value.storageAccountAccessKey;
      this._storageEndpoint = value.storageEndpoint;
    }
  }

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

  // email_account_admins - computed: false, optional: true, required: false
  private _emailAccountAdmins?: string; 
  public get emailAccountAdmins() {
    return this.getStringAttribute('email_account_admins');
  }
  public set emailAccountAdmins(value: string) {
    this._emailAccountAdmins = value;
  }
  public resetEmailAccountAdmins() {
    this._emailAccountAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAccountAdminsInput() {
    return this._emailAccountAdmins;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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
}
export interface SqlDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#create SqlDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#delete SqlDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#read SqlDatabase#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database#update SqlDatabase#update}
  */
  readonly update?: string;
}

export function sqlDatabaseTimeoutsToTerraform(struct?: SqlDatabaseTimeouts | cdktf.IResolvable): any {
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

export class SqlDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SqlDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SqlDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database azurerm_sql_database}
*/
export class SqlDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_sql_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/sql_database azurerm_sql_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: SqlDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sql_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.66.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collation = config.collation;
    this._createMode = config.createMode;
    this._edition = config.edition;
    this._elasticPoolName = config.elasticPoolName;
    this._id = config.id;
    this._location = config.location;
    this._maxSizeBytes = config.maxSizeBytes;
    this._maxSizeGb = config.maxSizeGb;
    this._name = config.name;
    this._readScale = config.readScale;
    this._requestedServiceObjectiveId = config.requestedServiceObjectiveId;
    this._requestedServiceObjectiveName = config.requestedServiceObjectiveName;
    this._resourceGroupName = config.resourceGroupName;
    this._restorePointInTime = config.restorePointInTime;
    this._serverName = config.serverName;
    this._sourceDatabaseDeletionDate = config.sourceDatabaseDeletionDate;
    this._sourceDatabaseId = config.sourceDatabaseId;
    this._tags = config.tags;
    this._zoneRedundant = config.zoneRedundant;
    this._import.internalValue = config.import;
    this._threatDetectionPolicy.internalValue = config.threatDetectionPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collation - computed: true, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // create_mode - computed: false, optional: true, required: false
  private _createMode?: string; 
  public get createMode() {
    return this.getStringAttribute('create_mode');
  }
  public set createMode(value: string) {
    this._createMode = value;
  }
  public resetCreateMode() {
    this._createMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createModeInput() {
    return this._createMode;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // default_secondary_location - computed: true, optional: false, required: false
  public get defaultSecondaryLocation() {
    return this.getStringAttribute('default_secondary_location');
  }

  // edition - computed: true, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // elastic_pool_name - computed: true, optional: true, required: false
  private _elasticPoolName?: string; 
  public get elasticPoolName() {
    return this.getStringAttribute('elastic_pool_name');
  }
  public set elasticPoolName(value: string) {
    this._elasticPoolName = value;
  }
  public resetElasticPoolName() {
    this._elasticPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticPoolNameInput() {
    return this._elasticPoolName;
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.getStringAttribute('encryption');
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // max_size_bytes - computed: true, optional: true, required: false
  private _maxSizeBytes?: string; 
  public get maxSizeBytes() {
    return this.getStringAttribute('max_size_bytes');
  }
  public set maxSizeBytes(value: string) {
    this._maxSizeBytes = value;
  }
  public resetMaxSizeBytes() {
    this._maxSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeBytesInput() {
    return this._maxSizeBytes;
  }

  // max_size_gb - computed: true, optional: true, required: false
  private _maxSizeGb?: string; 
  public get maxSizeGb() {
    return this.getStringAttribute('max_size_gb');
  }
  public set maxSizeGb(value: string) {
    this._maxSizeGb = value;
  }
  public resetMaxSizeGb() {
    this._maxSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeGbInput() {
    return this._maxSizeGb;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // read_scale - computed: false, optional: true, required: false
  private _readScale?: boolean | cdktf.IResolvable; 
  public get readScale() {
    return this.getBooleanAttribute('read_scale');
  }
  public set readScale(value: boolean | cdktf.IResolvable) {
    this._readScale = value;
  }
  public resetReadScale() {
    this._readScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readScaleInput() {
    return this._readScale;
  }

  // requested_service_objective_id - computed: true, optional: true, required: false
  private _requestedServiceObjectiveId?: string; 
  public get requestedServiceObjectiveId() {
    return this.getStringAttribute('requested_service_objective_id');
  }
  public set requestedServiceObjectiveId(value: string) {
    this._requestedServiceObjectiveId = value;
  }
  public resetRequestedServiceObjectiveId() {
    this._requestedServiceObjectiveId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedServiceObjectiveIdInput() {
    return this._requestedServiceObjectiveId;
  }

  // requested_service_objective_name - computed: true, optional: true, required: false
  private _requestedServiceObjectiveName?: string; 
  public get requestedServiceObjectiveName() {
    return this.getStringAttribute('requested_service_objective_name');
  }
  public set requestedServiceObjectiveName(value: string) {
    this._requestedServiceObjectiveName = value;
  }
  public resetRequestedServiceObjectiveName() {
    this._requestedServiceObjectiveName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedServiceObjectiveNameInput() {
    return this._requestedServiceObjectiveName;
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

  // restore_point_in_time - computed: true, optional: true, required: false
  private _restorePointInTime?: string; 
  public get restorePointInTime() {
    return this.getStringAttribute('restore_point_in_time');
  }
  public set restorePointInTime(value: string) {
    this._restorePointInTime = value;
  }
  public resetRestorePointInTime() {
    this._restorePointInTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorePointInTimeInput() {
    return this._restorePointInTime;
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
    return this._serverName;
  }

  // source_database_deletion_date - computed: true, optional: true, required: false
  private _sourceDatabaseDeletionDate?: string; 
  public get sourceDatabaseDeletionDate() {
    return this.getStringAttribute('source_database_deletion_date');
  }
  public set sourceDatabaseDeletionDate(value: string) {
    this._sourceDatabaseDeletionDate = value;
  }
  public resetSourceDatabaseDeletionDate() {
    this._sourceDatabaseDeletionDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDatabaseDeletionDateInput() {
    return this._sourceDatabaseDeletionDate;
  }

  // source_database_id - computed: true, optional: true, required: false
  private _sourceDatabaseId?: string; 
  public get sourceDatabaseId() {
    return this.getStringAttribute('source_database_id');
  }
  public set sourceDatabaseId(value: string) {
    this._sourceDatabaseId = value;
  }
  public resetSourceDatabaseId() {
    this._sourceDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDatabaseIdInput() {
    return this._sourceDatabaseId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zone_redundant - computed: false, optional: true, required: false
  private _zoneRedundant?: boolean | cdktf.IResolvable; 
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant');
  }
  public set zoneRedundant(value: boolean | cdktf.IResolvable) {
    this._zoneRedundant = value;
  }
  public resetZoneRedundant() {
    this._zoneRedundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRedundantInput() {
    return this._zoneRedundant;
  }

  // import - computed: false, optional: true, required: false
  private _import = new SqlDatabaseImportOutputReference(this, "import");
  public get import() {
    return this._import;
  }
  public putImport(value: SqlDatabaseImport) {
    this._import.internalValue = value;
  }
  public resetImport() {
    this._import.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import.internalValue;
  }

  // threat_detection_policy - computed: false, optional: true, required: false
  private _threatDetectionPolicy = new SqlDatabaseThreatDetectionPolicyOutputReference(this, "threat_detection_policy");
  public get threatDetectionPolicy() {
    return this._threatDetectionPolicy;
  }
  public putThreatDetectionPolicy(value: SqlDatabaseThreatDetectionPolicy) {
    this._threatDetectionPolicy.internalValue = value;
  }
  public resetThreatDetectionPolicy() {
    this._threatDetectionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatDetectionPolicyInput() {
    return this._threatDetectionPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SqlDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SqlDatabaseTimeouts) {
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
      collation: cdktf.stringToTerraform(this._collation),
      create_mode: cdktf.stringToTerraform(this._createMode),
      edition: cdktf.stringToTerraform(this._edition),
      elastic_pool_name: cdktf.stringToTerraform(this._elasticPoolName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      max_size_bytes: cdktf.stringToTerraform(this._maxSizeBytes),
      max_size_gb: cdktf.stringToTerraform(this._maxSizeGb),
      name: cdktf.stringToTerraform(this._name),
      read_scale: cdktf.booleanToTerraform(this._readScale),
      requested_service_objective_id: cdktf.stringToTerraform(this._requestedServiceObjectiveId),
      requested_service_objective_name: cdktf.stringToTerraform(this._requestedServiceObjectiveName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      restore_point_in_time: cdktf.stringToTerraform(this._restorePointInTime),
      server_name: cdktf.stringToTerraform(this._serverName),
      source_database_deletion_date: cdktf.stringToTerraform(this._sourceDatabaseDeletionDate),
      source_database_id: cdktf.stringToTerraform(this._sourceDatabaseId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zone_redundant: cdktf.booleanToTerraform(this._zoneRedundant),
      import: sqlDatabaseImportToTerraform(this._import.internalValue),
      threat_detection_policy: sqlDatabaseThreatDetectionPolicyToTerraform(this._threatDetectionPolicy.internalValue),
      timeouts: sqlDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
