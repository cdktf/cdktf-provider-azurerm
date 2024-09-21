// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#auto_pause_delay_in_minutes MssqlDatabase#auto_pause_delay_in_minutes}
  */
  readonly autoPauseDelayInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#collation MssqlDatabase#collation}
  */
  readonly collation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#create_mode MssqlDatabase#create_mode}
  */
  readonly createMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#creation_source_database_id MssqlDatabase#creation_source_database_id}
  */
  readonly creationSourceDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#elastic_pool_id MssqlDatabase#elastic_pool_id}
  */
  readonly elasticPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#enclave_type MssqlDatabase#enclave_type}
  */
  readonly enclaveType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#geo_backup_enabled MssqlDatabase#geo_backup_enabled}
  */
  readonly geoBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#id MssqlDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#ledger_enabled MssqlDatabase#ledger_enabled}
  */
  readonly ledgerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#license_type MssqlDatabase#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#maintenance_configuration_name MssqlDatabase#maintenance_configuration_name}
  */
  readonly maintenanceConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#max_size_gb MssqlDatabase#max_size_gb}
  */
  readonly maxSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#min_capacity MssqlDatabase#min_capacity}
  */
  readonly minCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#name MssqlDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#read_replica_count MssqlDatabase#read_replica_count}
  */
  readonly readReplicaCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#read_scale MssqlDatabase#read_scale}
  */
  readonly readScale?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#recover_database_id MssqlDatabase#recover_database_id}
  */
  readonly recoverDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#recovery_point_id MssqlDatabase#recovery_point_id}
  */
  readonly recoveryPointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#restore_dropped_database_id MssqlDatabase#restore_dropped_database_id}
  */
  readonly restoreDroppedDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#restore_long_term_retention_backup_id MssqlDatabase#restore_long_term_retention_backup_id}
  */
  readonly restoreLongTermRetentionBackupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#restore_point_in_time MssqlDatabase#restore_point_in_time}
  */
  readonly restorePointInTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#sample_name MssqlDatabase#sample_name}
  */
  readonly sampleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#secondary_type MssqlDatabase#secondary_type}
  */
  readonly secondaryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#server_id MssqlDatabase#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#sku_name MssqlDatabase#sku_name}
  */
  readonly skuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#storage_account_type MssqlDatabase#storage_account_type}
  */
  readonly storageAccountType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#tags MssqlDatabase#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#transparent_data_encryption_enabled MssqlDatabase#transparent_data_encryption_enabled}
  */
  readonly transparentDataEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#transparent_data_encryption_key_automatic_rotation_enabled MssqlDatabase#transparent_data_encryption_key_automatic_rotation_enabled}
  */
  readonly transparentDataEncryptionKeyAutomaticRotationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#transparent_data_encryption_key_vault_key_id MssqlDatabase#transparent_data_encryption_key_vault_key_id}
  */
  readonly transparentDataEncryptionKeyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#zone_redundant MssqlDatabase#zone_redundant}
  */
  readonly zoneRedundant?: boolean | cdktf.IResolvable;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#identity MssqlDatabase#identity}
  */
  readonly identity?: MssqlDatabaseIdentity;
  /**
  * import block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#import MssqlDatabase#import}
  */
  readonly import?: MssqlDatabaseImport;
  /**
  * long_term_retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#long_term_retention_policy MssqlDatabase#long_term_retention_policy}
  */
  readonly longTermRetentionPolicy?: MssqlDatabaseLongTermRetentionPolicy;
  /**
  * short_term_retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#short_term_retention_policy MssqlDatabase#short_term_retention_policy}
  */
  readonly shortTermRetentionPolicy?: MssqlDatabaseShortTermRetentionPolicy;
  /**
  * threat_detection_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#threat_detection_policy MssqlDatabase#threat_detection_policy}
  */
  readonly threatDetectionPolicy?: MssqlDatabaseThreatDetectionPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#timeouts MssqlDatabase#timeouts}
  */
  readonly timeouts?: MssqlDatabaseTimeouts;
}
export interface MssqlDatabaseIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#identity_ids MssqlDatabase#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#type MssqlDatabase#type}
  */
  readonly type: string;
}

export function mssqlDatabaseIdentityToTerraform(struct?: MssqlDatabaseIdentityOutputReference | MssqlDatabaseIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mssqlDatabaseIdentityToHclTerraform(struct?: MssqlDatabaseIdentityOutputReference | MssqlDatabaseIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlDatabaseIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlDatabaseIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlDatabaseIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: false, required: true
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MssqlDatabaseImport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#administrator_login MssqlDatabase#administrator_login}
  */
  readonly administratorLogin: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#administrator_login_password MssqlDatabase#administrator_login_password}
  */
  readonly administratorLoginPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#authentication_type MssqlDatabase#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#storage_account_id MssqlDatabase#storage_account_id}
  */
  readonly storageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#storage_key MssqlDatabase#storage_key}
  */
  readonly storageKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#storage_key_type MssqlDatabase#storage_key_type}
  */
  readonly storageKeyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#storage_uri MssqlDatabase#storage_uri}
  */
  readonly storageUri: string;
}

export function mssqlDatabaseImportToTerraform(struct?: MssqlDatabaseImportOutputReference | MssqlDatabaseImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrator_login: cdktf.stringToTerraform(struct!.administratorLogin),
    administrator_login_password: cdktf.stringToTerraform(struct!.administratorLoginPassword),
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
    storage_key: cdktf.stringToTerraform(struct!.storageKey),
    storage_key_type: cdktf.stringToTerraform(struct!.storageKeyType),
    storage_uri: cdktf.stringToTerraform(struct!.storageUri),
  }
}


export function mssqlDatabaseImportToHclTerraform(struct?: MssqlDatabaseImportOutputReference | MssqlDatabaseImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    administrator_login: {
      value: cdktf.stringToHclTerraform(struct!.administratorLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    administrator_login_password: {
      value: cdktf.stringToHclTerraform(struct!.administratorLoginPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_id: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_key: {
      value: cdktf.stringToHclTerraform(struct!.storageKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_key_type: {
      value: cdktf.stringToHclTerraform(struct!.storageKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_uri: {
      value: cdktf.stringToHclTerraform(struct!.storageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlDatabaseImportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlDatabaseImport | undefined {
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
    if (this._storageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountId = this._storageAccountId;
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

  public set internalValue(value: MssqlDatabaseImport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._administratorLogin = undefined;
      this._administratorLoginPassword = undefined;
      this._authenticationType = undefined;
      this._storageAccountId = undefined;
      this._storageKey = undefined;
      this._storageKeyType = undefined;
      this._storageUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._administratorLogin = value.administratorLogin;
      this._administratorLoginPassword = value.administratorLoginPassword;
      this._authenticationType = value.authenticationType;
      this._storageAccountId = value.storageAccountId;
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

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  public resetStorageAccountId() {
    this._storageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
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
export interface MssqlDatabaseLongTermRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#monthly_retention MssqlDatabase#monthly_retention}
  */
  readonly monthlyRetention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#week_of_year MssqlDatabase#week_of_year}
  */
  readonly weekOfYear?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#weekly_retention MssqlDatabase#weekly_retention}
  */
  readonly weeklyRetention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#yearly_retention MssqlDatabase#yearly_retention}
  */
  readonly yearlyRetention?: string;
}

export function mssqlDatabaseLongTermRetentionPolicyToTerraform(struct?: MssqlDatabaseLongTermRetentionPolicyOutputReference | MssqlDatabaseLongTermRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monthly_retention: cdktf.stringToTerraform(struct!.monthlyRetention),
    week_of_year: cdktf.numberToTerraform(struct!.weekOfYear),
    weekly_retention: cdktf.stringToTerraform(struct!.weeklyRetention),
    yearly_retention: cdktf.stringToTerraform(struct!.yearlyRetention),
  }
}


export function mssqlDatabaseLongTermRetentionPolicyToHclTerraform(struct?: MssqlDatabaseLongTermRetentionPolicyOutputReference | MssqlDatabaseLongTermRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monthly_retention: {
      value: cdktf.stringToHclTerraform(struct!.monthlyRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_of_year: {
      value: cdktf.numberToHclTerraform(struct!.weekOfYear),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weekly_retention: {
      value: cdktf.stringToHclTerraform(struct!.weeklyRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yearly_retention: {
      value: cdktf.stringToHclTerraform(struct!.yearlyRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlDatabaseLongTermRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlDatabaseLongTermRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monthlyRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyRetention = this._monthlyRetention;
    }
    if (this._weekOfYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekOfYear = this._weekOfYear;
    }
    if (this._weeklyRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyRetention = this._weeklyRetention;
    }
    if (this._yearlyRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.yearlyRetention = this._yearlyRetention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlDatabaseLongTermRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monthlyRetention = undefined;
      this._weekOfYear = undefined;
      this._weeklyRetention = undefined;
      this._yearlyRetention = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monthlyRetention = value.monthlyRetention;
      this._weekOfYear = value.weekOfYear;
      this._weeklyRetention = value.weeklyRetention;
      this._yearlyRetention = value.yearlyRetention;
    }
  }

  // monthly_retention - computed: true, optional: true, required: false
  private _monthlyRetention?: string; 
  public get monthlyRetention() {
    return this.getStringAttribute('monthly_retention');
  }
  public set monthlyRetention(value: string) {
    this._monthlyRetention = value;
  }
  public resetMonthlyRetention() {
    this._monthlyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyRetentionInput() {
    return this._monthlyRetention;
  }

  // week_of_year - computed: true, optional: true, required: false
  private _weekOfYear?: number; 
  public get weekOfYear() {
    return this.getNumberAttribute('week_of_year');
  }
  public set weekOfYear(value: number) {
    this._weekOfYear = value;
  }
  public resetWeekOfYear() {
    this._weekOfYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOfYearInput() {
    return this._weekOfYear;
  }

  // weekly_retention - computed: true, optional: true, required: false
  private _weeklyRetention?: string; 
  public get weeklyRetention() {
    return this.getStringAttribute('weekly_retention');
  }
  public set weeklyRetention(value: string) {
    this._weeklyRetention = value;
  }
  public resetWeeklyRetention() {
    this._weeklyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyRetentionInput() {
    return this._weeklyRetention;
  }

  // yearly_retention - computed: true, optional: true, required: false
  private _yearlyRetention?: string; 
  public get yearlyRetention() {
    return this.getStringAttribute('yearly_retention');
  }
  public set yearlyRetention(value: string) {
    this._yearlyRetention = value;
  }
  public resetYearlyRetention() {
    this._yearlyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearlyRetentionInput() {
    return this._yearlyRetention;
  }
}
export interface MssqlDatabaseShortTermRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#backup_interval_in_hours MssqlDatabase#backup_interval_in_hours}
  */
  readonly backupIntervalInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#retention_days MssqlDatabase#retention_days}
  */
  readonly retentionDays: number;
}

export function mssqlDatabaseShortTermRetentionPolicyToTerraform(struct?: MssqlDatabaseShortTermRetentionPolicyOutputReference | MssqlDatabaseShortTermRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_interval_in_hours: cdktf.numberToTerraform(struct!.backupIntervalInHours),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
  }
}


export function mssqlDatabaseShortTermRetentionPolicyToHclTerraform(struct?: MssqlDatabaseShortTermRetentionPolicyOutputReference | MssqlDatabaseShortTermRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_interval_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.backupIntervalInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlDatabaseShortTermRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlDatabaseShortTermRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupIntervalInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupIntervalInHours = this._backupIntervalInHours;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlDatabaseShortTermRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupIntervalInHours = undefined;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupIntervalInHours = value.backupIntervalInHours;
      this._retentionDays = value.retentionDays;
    }
  }

  // backup_interval_in_hours - computed: false, optional: true, required: false
  private _backupIntervalInHours?: number; 
  public get backupIntervalInHours() {
    return this.getNumberAttribute('backup_interval_in_hours');
  }
  public set backupIntervalInHours(value: number) {
    this._backupIntervalInHours = value;
  }
  public resetBackupIntervalInHours() {
    this._backupIntervalInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIntervalInHoursInput() {
    return this._backupIntervalInHours;
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface MssqlDatabaseThreatDetectionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#disabled_alerts MssqlDatabase#disabled_alerts}
  */
  readonly disabledAlerts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#email_account_admins MssqlDatabase#email_account_admins}
  */
  readonly emailAccountAdmins?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#email_addresses MssqlDatabase#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#retention_days MssqlDatabase#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#state MssqlDatabase#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#storage_account_access_key MssqlDatabase#storage_account_access_key}
  */
  readonly storageAccountAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#storage_endpoint MssqlDatabase#storage_endpoint}
  */
  readonly storageEndpoint?: string;
}

export function mssqlDatabaseThreatDetectionPolicyToTerraform(struct?: MssqlDatabaseThreatDetectionPolicyOutputReference | MssqlDatabaseThreatDetectionPolicy): any {
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


export function mssqlDatabaseThreatDetectionPolicyToHclTerraform(struct?: MssqlDatabaseThreatDetectionPolicyOutputReference | MssqlDatabaseThreatDetectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled_alerts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disabledAlerts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    email_account_admins: {
      value: cdktf.stringToHclTerraform(struct!.emailAccountAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_access_key: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.storageEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlDatabaseThreatDetectionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlDatabaseThreatDetectionPolicy | undefined {
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

  public set internalValue(value: MssqlDatabaseThreatDetectionPolicy | undefined) {
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
export interface MssqlDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#create MssqlDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#delete MssqlDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#read MssqlDatabase#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#update MssqlDatabase#update}
  */
  readonly update?: string;
}

export function mssqlDatabaseTimeoutsToTerraform(struct?: MssqlDatabaseTimeouts | cdktf.IResolvable): any {
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


export function mssqlDatabaseTimeoutsToHclTerraform(struct?: MssqlDatabaseTimeouts | cdktf.IResolvable): any {
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

export class MssqlDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MssqlDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MssqlDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database azurerm_mssql_database}
*/
export class MssqlDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mssql_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MssqlDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MssqlDatabase to import
  * @param importFromId The id of the existing MssqlDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MssqlDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mssql_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_database azurerm_mssql_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
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
    this._autoPauseDelayInMinutes = config.autoPauseDelayInMinutes;
    this._collation = config.collation;
    this._createMode = config.createMode;
    this._creationSourceDatabaseId = config.creationSourceDatabaseId;
    this._elasticPoolId = config.elasticPoolId;
    this._enclaveType = config.enclaveType;
    this._geoBackupEnabled = config.geoBackupEnabled;
    this._id = config.id;
    this._ledgerEnabled = config.ledgerEnabled;
    this._licenseType = config.licenseType;
    this._maintenanceConfigurationName = config.maintenanceConfigurationName;
    this._maxSizeGb = config.maxSizeGb;
    this._minCapacity = config.minCapacity;
    this._name = config.name;
    this._readReplicaCount = config.readReplicaCount;
    this._readScale = config.readScale;
    this._recoverDatabaseId = config.recoverDatabaseId;
    this._recoveryPointId = config.recoveryPointId;
    this._restoreDroppedDatabaseId = config.restoreDroppedDatabaseId;
    this._restoreLongTermRetentionBackupId = config.restoreLongTermRetentionBackupId;
    this._restorePointInTime = config.restorePointInTime;
    this._sampleName = config.sampleName;
    this._secondaryType = config.secondaryType;
    this._serverId = config.serverId;
    this._skuName = config.skuName;
    this._storageAccountType = config.storageAccountType;
    this._tags = config.tags;
    this._transparentDataEncryptionEnabled = config.transparentDataEncryptionEnabled;
    this._transparentDataEncryptionKeyAutomaticRotationEnabled = config.transparentDataEncryptionKeyAutomaticRotationEnabled;
    this._transparentDataEncryptionKeyVaultKeyId = config.transparentDataEncryptionKeyVaultKeyId;
    this._zoneRedundant = config.zoneRedundant;
    this._identity.internalValue = config.identity;
    this._import.internalValue = config.import;
    this._longTermRetentionPolicy.internalValue = config.longTermRetentionPolicy;
    this._shortTermRetentionPolicy.internalValue = config.shortTermRetentionPolicy;
    this._threatDetectionPolicy.internalValue = config.threatDetectionPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_pause_delay_in_minutes - computed: true, optional: true, required: false
  private _autoPauseDelayInMinutes?: number; 
  public get autoPauseDelayInMinutes() {
    return this.getNumberAttribute('auto_pause_delay_in_minutes');
  }
  public set autoPauseDelayInMinutes(value: number) {
    this._autoPauseDelayInMinutes = value;
  }
  public resetAutoPauseDelayInMinutes() {
    this._autoPauseDelayInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPauseDelayInMinutesInput() {
    return this._autoPauseDelayInMinutes;
  }

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

  // creation_source_database_id - computed: true, optional: true, required: false
  private _creationSourceDatabaseId?: string; 
  public get creationSourceDatabaseId() {
    return this.getStringAttribute('creation_source_database_id');
  }
  public set creationSourceDatabaseId(value: string) {
    this._creationSourceDatabaseId = value;
  }
  public resetCreationSourceDatabaseId() {
    this._creationSourceDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationSourceDatabaseIdInput() {
    return this._creationSourceDatabaseId;
  }

  // elastic_pool_id - computed: false, optional: true, required: false
  private _elasticPoolId?: string; 
  public get elasticPoolId() {
    return this.getStringAttribute('elastic_pool_id');
  }
  public set elasticPoolId(value: string) {
    this._elasticPoolId = value;
  }
  public resetElasticPoolId() {
    this._elasticPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticPoolIdInput() {
    return this._elasticPoolId;
  }

  // enclave_type - computed: true, optional: true, required: false
  private _enclaveType?: string; 
  public get enclaveType() {
    return this.getStringAttribute('enclave_type');
  }
  public set enclaveType(value: string) {
    this._enclaveType = value;
  }
  public resetEnclaveType() {
    this._enclaveType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enclaveTypeInput() {
    return this._enclaveType;
  }

  // geo_backup_enabled - computed: false, optional: true, required: false
  private _geoBackupEnabled?: boolean | cdktf.IResolvable; 
  public get geoBackupEnabled() {
    return this.getBooleanAttribute('geo_backup_enabled');
  }
  public set geoBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._geoBackupEnabled = value;
  }
  public resetGeoBackupEnabled() {
    this._geoBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoBackupEnabledInput() {
    return this._geoBackupEnabled;
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

  // ledger_enabled - computed: true, optional: true, required: false
  private _ledgerEnabled?: boolean | cdktf.IResolvable; 
  public get ledgerEnabled() {
    return this.getBooleanAttribute('ledger_enabled');
  }
  public set ledgerEnabled(value: boolean | cdktf.IResolvable) {
    this._ledgerEnabled = value;
  }
  public resetLedgerEnabled() {
    this._ledgerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ledgerEnabledInput() {
    return this._ledgerEnabled;
  }

  // license_type - computed: true, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // maintenance_configuration_name - computed: true, optional: true, required: false
  private _maintenanceConfigurationName?: string; 
  public get maintenanceConfigurationName() {
    return this.getStringAttribute('maintenance_configuration_name');
  }
  public set maintenanceConfigurationName(value: string) {
    this._maintenanceConfigurationName = value;
  }
  public resetMaintenanceConfigurationName() {
    this._maintenanceConfigurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceConfigurationNameInput() {
    return this._maintenanceConfigurationName;
  }

  // max_size_gb - computed: true, optional: true, required: false
  private _maxSizeGb?: number; 
  public get maxSizeGb() {
    return this.getNumberAttribute('max_size_gb');
  }
  public set maxSizeGb(value: number) {
    this._maxSizeGb = value;
  }
  public resetMaxSizeGb() {
    this._maxSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeGbInput() {
    return this._maxSizeGb;
  }

  // min_capacity - computed: true, optional: true, required: false
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
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

  // read_replica_count - computed: true, optional: true, required: false
  private _readReplicaCount?: number; 
  public get readReplicaCount() {
    return this.getNumberAttribute('read_replica_count');
  }
  public set readReplicaCount(value: number) {
    this._readReplicaCount = value;
  }
  public resetReadReplicaCount() {
    this._readReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readReplicaCountInput() {
    return this._readReplicaCount;
  }

  // read_scale - computed: true, optional: true, required: false
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

  // recover_database_id - computed: false, optional: true, required: false
  private _recoverDatabaseId?: string; 
  public get recoverDatabaseId() {
    return this.getStringAttribute('recover_database_id');
  }
  public set recoverDatabaseId(value: string) {
    this._recoverDatabaseId = value;
  }
  public resetRecoverDatabaseId() {
    this._recoverDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverDatabaseIdInput() {
    return this._recoverDatabaseId;
  }

  // recovery_point_id - computed: false, optional: true, required: false
  private _recoveryPointId?: string; 
  public get recoveryPointId() {
    return this.getStringAttribute('recovery_point_id');
  }
  public set recoveryPointId(value: string) {
    this._recoveryPointId = value;
  }
  public resetRecoveryPointId() {
    this._recoveryPointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointIdInput() {
    return this._recoveryPointId;
  }

  // restore_dropped_database_id - computed: false, optional: true, required: false
  private _restoreDroppedDatabaseId?: string; 
  public get restoreDroppedDatabaseId() {
    return this.getStringAttribute('restore_dropped_database_id');
  }
  public set restoreDroppedDatabaseId(value: string) {
    this._restoreDroppedDatabaseId = value;
  }
  public resetRestoreDroppedDatabaseId() {
    this._restoreDroppedDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreDroppedDatabaseIdInput() {
    return this._restoreDroppedDatabaseId;
  }

  // restore_long_term_retention_backup_id - computed: false, optional: true, required: false
  private _restoreLongTermRetentionBackupId?: string; 
  public get restoreLongTermRetentionBackupId() {
    return this.getStringAttribute('restore_long_term_retention_backup_id');
  }
  public set restoreLongTermRetentionBackupId(value: string) {
    this._restoreLongTermRetentionBackupId = value;
  }
  public resetRestoreLongTermRetentionBackupId() {
    this._restoreLongTermRetentionBackupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreLongTermRetentionBackupIdInput() {
    return this._restoreLongTermRetentionBackupId;
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

  // sample_name - computed: true, optional: true, required: false
  private _sampleName?: string; 
  public get sampleName() {
    return this.getStringAttribute('sample_name');
  }
  public set sampleName(value: string) {
    this._sampleName = value;
  }
  public resetSampleName() {
    this._sampleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleNameInput() {
    return this._sampleName;
  }

  // secondary_type - computed: true, optional: true, required: false
  private _secondaryType?: string; 
  public get secondaryType() {
    return this.getStringAttribute('secondary_type');
  }
  public set secondaryType(value: string) {
    this._secondaryType = value;
  }
  public resetSecondaryType() {
    this._secondaryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryTypeInput() {
    return this._secondaryType;
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // sku_name - computed: true, optional: true, required: false
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
  }

  // storage_account_type - computed: false, optional: true, required: false
  private _storageAccountType?: string; 
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
  public set storageAccountType(value: string) {
    this._storageAccountType = value;
  }
  public resetStorageAccountType() {
    this._storageAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTypeInput() {
    return this._storageAccountType;
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

  // transparent_data_encryption_enabled - computed: false, optional: true, required: false
  private _transparentDataEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get transparentDataEncryptionEnabled() {
    return this.getBooleanAttribute('transparent_data_encryption_enabled');
  }
  public set transparentDataEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._transparentDataEncryptionEnabled = value;
  }
  public resetTransparentDataEncryptionEnabled() {
    this._transparentDataEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentDataEncryptionEnabledInput() {
    return this._transparentDataEncryptionEnabled;
  }

  // transparent_data_encryption_key_automatic_rotation_enabled - computed: false, optional: true, required: false
  private _transparentDataEncryptionKeyAutomaticRotationEnabled?: boolean | cdktf.IResolvable; 
  public get transparentDataEncryptionKeyAutomaticRotationEnabled() {
    return this.getBooleanAttribute('transparent_data_encryption_key_automatic_rotation_enabled');
  }
  public set transparentDataEncryptionKeyAutomaticRotationEnabled(value: boolean | cdktf.IResolvable) {
    this._transparentDataEncryptionKeyAutomaticRotationEnabled = value;
  }
  public resetTransparentDataEncryptionKeyAutomaticRotationEnabled() {
    this._transparentDataEncryptionKeyAutomaticRotationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentDataEncryptionKeyAutomaticRotationEnabledInput() {
    return this._transparentDataEncryptionKeyAutomaticRotationEnabled;
  }

  // transparent_data_encryption_key_vault_key_id - computed: false, optional: true, required: false
  private _transparentDataEncryptionKeyVaultKeyId?: string; 
  public get transparentDataEncryptionKeyVaultKeyId() {
    return this.getStringAttribute('transparent_data_encryption_key_vault_key_id');
  }
  public set transparentDataEncryptionKeyVaultKeyId(value: string) {
    this._transparentDataEncryptionKeyVaultKeyId = value;
  }
  public resetTransparentDataEncryptionKeyVaultKeyId() {
    this._transparentDataEncryptionKeyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentDataEncryptionKeyVaultKeyIdInput() {
    return this._transparentDataEncryptionKeyVaultKeyId;
  }

  // zone_redundant - computed: true, optional: true, required: false
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

  // identity - computed: false, optional: true, required: false
  private _identity = new MssqlDatabaseIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: MssqlDatabaseIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // import - computed: false, optional: true, required: false
  private _import = new MssqlDatabaseImportOutputReference(this, "import");
  public get import() {
    return this._import;
  }
  public putImport(value: MssqlDatabaseImport) {
    this._import.internalValue = value;
  }
  public resetImport() {
    this._import.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import.internalValue;
  }

  // long_term_retention_policy - computed: false, optional: true, required: false
  private _longTermRetentionPolicy = new MssqlDatabaseLongTermRetentionPolicyOutputReference(this, "long_term_retention_policy");
  public get longTermRetentionPolicy() {
    return this._longTermRetentionPolicy;
  }
  public putLongTermRetentionPolicy(value: MssqlDatabaseLongTermRetentionPolicy) {
    this._longTermRetentionPolicy.internalValue = value;
  }
  public resetLongTermRetentionPolicy() {
    this._longTermRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longTermRetentionPolicyInput() {
    return this._longTermRetentionPolicy.internalValue;
  }

  // short_term_retention_policy - computed: false, optional: true, required: false
  private _shortTermRetentionPolicy = new MssqlDatabaseShortTermRetentionPolicyOutputReference(this, "short_term_retention_policy");
  public get shortTermRetentionPolicy() {
    return this._shortTermRetentionPolicy;
  }
  public putShortTermRetentionPolicy(value: MssqlDatabaseShortTermRetentionPolicy) {
    this._shortTermRetentionPolicy.internalValue = value;
  }
  public resetShortTermRetentionPolicy() {
    this._shortTermRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortTermRetentionPolicyInput() {
    return this._shortTermRetentionPolicy.internalValue;
  }

  // threat_detection_policy - computed: false, optional: true, required: false
  private _threatDetectionPolicy = new MssqlDatabaseThreatDetectionPolicyOutputReference(this, "threat_detection_policy");
  public get threatDetectionPolicy() {
    return this._threatDetectionPolicy;
  }
  public putThreatDetectionPolicy(value: MssqlDatabaseThreatDetectionPolicy) {
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
  private _timeouts = new MssqlDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MssqlDatabaseTimeouts) {
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
      auto_pause_delay_in_minutes: cdktf.numberToTerraform(this._autoPauseDelayInMinutes),
      collation: cdktf.stringToTerraform(this._collation),
      create_mode: cdktf.stringToTerraform(this._createMode),
      creation_source_database_id: cdktf.stringToTerraform(this._creationSourceDatabaseId),
      elastic_pool_id: cdktf.stringToTerraform(this._elasticPoolId),
      enclave_type: cdktf.stringToTerraform(this._enclaveType),
      geo_backup_enabled: cdktf.booleanToTerraform(this._geoBackupEnabled),
      id: cdktf.stringToTerraform(this._id),
      ledger_enabled: cdktf.booleanToTerraform(this._ledgerEnabled),
      license_type: cdktf.stringToTerraform(this._licenseType),
      maintenance_configuration_name: cdktf.stringToTerraform(this._maintenanceConfigurationName),
      max_size_gb: cdktf.numberToTerraform(this._maxSizeGb),
      min_capacity: cdktf.numberToTerraform(this._minCapacity),
      name: cdktf.stringToTerraform(this._name),
      read_replica_count: cdktf.numberToTerraform(this._readReplicaCount),
      read_scale: cdktf.booleanToTerraform(this._readScale),
      recover_database_id: cdktf.stringToTerraform(this._recoverDatabaseId),
      recovery_point_id: cdktf.stringToTerraform(this._recoveryPointId),
      restore_dropped_database_id: cdktf.stringToTerraform(this._restoreDroppedDatabaseId),
      restore_long_term_retention_backup_id: cdktf.stringToTerraform(this._restoreLongTermRetentionBackupId),
      restore_point_in_time: cdktf.stringToTerraform(this._restorePointInTime),
      sample_name: cdktf.stringToTerraform(this._sampleName),
      secondary_type: cdktf.stringToTerraform(this._secondaryType),
      server_id: cdktf.stringToTerraform(this._serverId),
      sku_name: cdktf.stringToTerraform(this._skuName),
      storage_account_type: cdktf.stringToTerraform(this._storageAccountType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transparent_data_encryption_enabled: cdktf.booleanToTerraform(this._transparentDataEncryptionEnabled),
      transparent_data_encryption_key_automatic_rotation_enabled: cdktf.booleanToTerraform(this._transparentDataEncryptionKeyAutomaticRotationEnabled),
      transparent_data_encryption_key_vault_key_id: cdktf.stringToTerraform(this._transparentDataEncryptionKeyVaultKeyId),
      zone_redundant: cdktf.booleanToTerraform(this._zoneRedundant),
      identity: mssqlDatabaseIdentityToTerraform(this._identity.internalValue),
      import: mssqlDatabaseImportToTerraform(this._import.internalValue),
      long_term_retention_policy: mssqlDatabaseLongTermRetentionPolicyToTerraform(this._longTermRetentionPolicy.internalValue),
      short_term_retention_policy: mssqlDatabaseShortTermRetentionPolicyToTerraform(this._shortTermRetentionPolicy.internalValue),
      threat_detection_policy: mssqlDatabaseThreatDetectionPolicyToTerraform(this._threatDetectionPolicy.internalValue),
      timeouts: mssqlDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_pause_delay_in_minutes: {
        value: cdktf.numberToHclTerraform(this._autoPauseDelayInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      collation: {
        value: cdktf.stringToHclTerraform(this._collation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_mode: {
        value: cdktf.stringToHclTerraform(this._createMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creation_source_database_id: {
        value: cdktf.stringToHclTerraform(this._creationSourceDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elastic_pool_id: {
        value: cdktf.stringToHclTerraform(this._elasticPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enclave_type: {
        value: cdktf.stringToHclTerraform(this._enclaveType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_backup_enabled: {
        value: cdktf.booleanToHclTerraform(this._geoBackupEnabled),
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
      ledger_enabled: {
        value: cdktf.booleanToHclTerraform(this._ledgerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_configuration_name: {
        value: cdktf.stringToHclTerraform(this._maintenanceConfigurationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_size_gb: {
        value: cdktf.numberToHclTerraform(this._maxSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_capacity: {
        value: cdktf.numberToHclTerraform(this._minCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_replica_count: {
        value: cdktf.numberToHclTerraform(this._readReplicaCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_scale: {
        value: cdktf.booleanToHclTerraform(this._readScale),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recover_database_id: {
        value: cdktf.stringToHclTerraform(this._recoverDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_point_id: {
        value: cdktf.stringToHclTerraform(this._recoveryPointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_dropped_database_id: {
        value: cdktf.stringToHclTerraform(this._restoreDroppedDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_long_term_retention_backup_id: {
        value: cdktf.stringToHclTerraform(this._restoreLongTermRetentionBackupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_point_in_time: {
        value: cdktf.stringToHclTerraform(this._restorePointInTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sample_name: {
        value: cdktf.stringToHclTerraform(this._sampleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_type: {
        value: cdktf.stringToHclTerraform(this._secondaryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sku_name: {
        value: cdktf.stringToHclTerraform(this._skuName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_type: {
        value: cdktf.stringToHclTerraform(this._storageAccountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      transparent_data_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._transparentDataEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transparent_data_encryption_key_automatic_rotation_enabled: {
        value: cdktf.booleanToHclTerraform(this._transparentDataEncryptionKeyAutomaticRotationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transparent_data_encryption_key_vault_key_id: {
        value: cdktf.stringToHclTerraform(this._transparentDataEncryptionKeyVaultKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_redundant: {
        value: cdktf.booleanToHclTerraform(this._zoneRedundant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      identity: {
        value: mssqlDatabaseIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlDatabaseIdentityList",
      },
      import: {
        value: mssqlDatabaseImportToHclTerraform(this._import.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlDatabaseImportList",
      },
      long_term_retention_policy: {
        value: mssqlDatabaseLongTermRetentionPolicyToHclTerraform(this._longTermRetentionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlDatabaseLongTermRetentionPolicyList",
      },
      short_term_retention_policy: {
        value: mssqlDatabaseShortTermRetentionPolicyToHclTerraform(this._shortTermRetentionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlDatabaseShortTermRetentionPolicyList",
      },
      threat_detection_policy: {
        value: mssqlDatabaseThreatDetectionPolicyToHclTerraform(this._threatDetectionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlDatabaseThreatDetectionPolicyList",
      },
      timeouts: {
        value: mssqlDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MssqlDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
