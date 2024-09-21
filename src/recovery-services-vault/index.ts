// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecoveryServicesVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#classic_vmware_replication_enabled RecoveryServicesVault#classic_vmware_replication_enabled}
  */
  readonly classicVmwareReplicationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#cross_region_restore_enabled RecoveryServicesVault#cross_region_restore_enabled}
  */
  readonly crossRegionRestoreEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#id RecoveryServicesVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#immutability RecoveryServicesVault#immutability}
  */
  readonly immutability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#location RecoveryServicesVault#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#name RecoveryServicesVault#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#public_network_access_enabled RecoveryServicesVault#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#resource_group_name RecoveryServicesVault#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#sku RecoveryServicesVault#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#soft_delete_enabled RecoveryServicesVault#soft_delete_enabled}
  */
  readonly softDeleteEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#storage_mode_type RecoveryServicesVault#storage_mode_type}
  */
  readonly storageModeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#tags RecoveryServicesVault#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#encryption RecoveryServicesVault#encryption}
  */
  readonly encryption?: RecoveryServicesVaultEncryption;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#identity RecoveryServicesVault#identity}
  */
  readonly identity?: RecoveryServicesVaultIdentity;
  /**
  * monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#monitoring RecoveryServicesVault#monitoring}
  */
  readonly monitoring?: RecoveryServicesVaultMonitoring;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#timeouts RecoveryServicesVault#timeouts}
  */
  readonly timeouts?: RecoveryServicesVaultTimeouts;
}
export interface RecoveryServicesVaultEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#infrastructure_encryption_enabled RecoveryServicesVault#infrastructure_encryption_enabled}
  */
  readonly infrastructureEncryptionEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#key_id RecoveryServicesVault#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#use_system_assigned_identity RecoveryServicesVault#use_system_assigned_identity}
  */
  readonly useSystemAssignedIdentity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#user_assigned_identity_id RecoveryServicesVault#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
}

export function recoveryServicesVaultEncryptionToTerraform(struct?: RecoveryServicesVaultEncryptionOutputReference | RecoveryServicesVaultEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    infrastructure_encryption_enabled: cdktf.booleanToTerraform(struct!.infrastructureEncryptionEnabled),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    use_system_assigned_identity: cdktf.booleanToTerraform(struct!.useSystemAssignedIdentity),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
  }
}


export function recoveryServicesVaultEncryptionToHclTerraform(struct?: RecoveryServicesVaultEncryptionOutputReference | RecoveryServicesVaultEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    infrastructure_encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.infrastructureEncryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_system_assigned_identity: {
      value: cdktf.booleanToHclTerraform(struct!.useSystemAssignedIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_assigned_identity_id: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedIdentityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryServicesVaultEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryServicesVaultEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infrastructureEncryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureEncryptionEnabled = this._infrastructureEncryptionEnabled;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._useSystemAssignedIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSystemAssignedIdentity = this._useSystemAssignedIdentity;
    }
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryServicesVaultEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._infrastructureEncryptionEnabled = undefined;
      this._keyId = undefined;
      this._useSystemAssignedIdentity = undefined;
      this._userAssignedIdentityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._infrastructureEncryptionEnabled = value.infrastructureEncryptionEnabled;
      this._keyId = value.keyId;
      this._useSystemAssignedIdentity = value.useSystemAssignedIdentity;
      this._userAssignedIdentityId = value.userAssignedIdentityId;
    }
  }

  // infrastructure_encryption_enabled - computed: false, optional: false, required: true
  private _infrastructureEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get infrastructureEncryptionEnabled() {
    return this.getBooleanAttribute('infrastructure_encryption_enabled');
  }
  public set infrastructureEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._infrastructureEncryptionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureEncryptionEnabledInput() {
    return this._infrastructureEncryptionEnabled;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // use_system_assigned_identity - computed: false, optional: true, required: false
  private _useSystemAssignedIdentity?: boolean | cdktf.IResolvable; 
  public get useSystemAssignedIdentity() {
    return this.getBooleanAttribute('use_system_assigned_identity');
  }
  public set useSystemAssignedIdentity(value: boolean | cdktf.IResolvable) {
    this._useSystemAssignedIdentity = value;
  }
  public resetUseSystemAssignedIdentity() {
    this._useSystemAssignedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemAssignedIdentityInput() {
    return this._useSystemAssignedIdentity;
  }

  // user_assigned_identity_id - computed: false, optional: true, required: false
  private _userAssignedIdentityId?: string; 
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string) {
    this._userAssignedIdentityId = value;
  }
  public resetUserAssignedIdentityId() {
    this._userAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId;
  }
}
export interface RecoveryServicesVaultIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#identity_ids RecoveryServicesVault#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#type RecoveryServicesVault#type}
  */
  readonly type: string;
}

export function recoveryServicesVaultIdentityToTerraform(struct?: RecoveryServicesVaultIdentityOutputReference | RecoveryServicesVaultIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function recoveryServicesVaultIdentityToHclTerraform(struct?: RecoveryServicesVaultIdentityOutputReference | RecoveryServicesVaultIdentity): any {
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

export class RecoveryServicesVaultIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryServicesVaultIdentity | undefined {
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

  public set internalValue(value: RecoveryServicesVaultIdentity | undefined) {
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

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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
export interface RecoveryServicesVaultMonitoring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#alerts_for_all_job_failures_enabled RecoveryServicesVault#alerts_for_all_job_failures_enabled}
  */
  readonly alertsForAllJobFailuresEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#alerts_for_critical_operation_failures_enabled RecoveryServicesVault#alerts_for_critical_operation_failures_enabled}
  */
  readonly alertsForCriticalOperationFailuresEnabled?: boolean | cdktf.IResolvable;
}

export function recoveryServicesVaultMonitoringToTerraform(struct?: RecoveryServicesVaultMonitoringOutputReference | RecoveryServicesVaultMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alerts_for_all_job_failures_enabled: cdktf.booleanToTerraform(struct!.alertsForAllJobFailuresEnabled),
    alerts_for_critical_operation_failures_enabled: cdktf.booleanToTerraform(struct!.alertsForCriticalOperationFailuresEnabled),
  }
}


export function recoveryServicesVaultMonitoringToHclTerraform(struct?: RecoveryServicesVaultMonitoringOutputReference | RecoveryServicesVaultMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alerts_for_all_job_failures_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.alertsForAllJobFailuresEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alerts_for_critical_operation_failures_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.alertsForCriticalOperationFailuresEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryServicesVaultMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryServicesVaultMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertsForAllJobFailuresEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertsForAllJobFailuresEnabled = this._alertsForAllJobFailuresEnabled;
    }
    if (this._alertsForCriticalOperationFailuresEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertsForCriticalOperationFailuresEnabled = this._alertsForCriticalOperationFailuresEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryServicesVaultMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertsForAllJobFailuresEnabled = undefined;
      this._alertsForCriticalOperationFailuresEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertsForAllJobFailuresEnabled = value.alertsForAllJobFailuresEnabled;
      this._alertsForCriticalOperationFailuresEnabled = value.alertsForCriticalOperationFailuresEnabled;
    }
  }

  // alerts_for_all_job_failures_enabled - computed: false, optional: true, required: false
  private _alertsForAllJobFailuresEnabled?: boolean | cdktf.IResolvable; 
  public get alertsForAllJobFailuresEnabled() {
    return this.getBooleanAttribute('alerts_for_all_job_failures_enabled');
  }
  public set alertsForAllJobFailuresEnabled(value: boolean | cdktf.IResolvable) {
    this._alertsForAllJobFailuresEnabled = value;
  }
  public resetAlertsForAllJobFailuresEnabled() {
    this._alertsForAllJobFailuresEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsForAllJobFailuresEnabledInput() {
    return this._alertsForAllJobFailuresEnabled;
  }

  // alerts_for_critical_operation_failures_enabled - computed: false, optional: true, required: false
  private _alertsForCriticalOperationFailuresEnabled?: boolean | cdktf.IResolvable; 
  public get alertsForCriticalOperationFailuresEnabled() {
    return this.getBooleanAttribute('alerts_for_critical_operation_failures_enabled');
  }
  public set alertsForCriticalOperationFailuresEnabled(value: boolean | cdktf.IResolvable) {
    this._alertsForCriticalOperationFailuresEnabled = value;
  }
  public resetAlertsForCriticalOperationFailuresEnabled() {
    this._alertsForCriticalOperationFailuresEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsForCriticalOperationFailuresEnabledInput() {
    return this._alertsForCriticalOperationFailuresEnabled;
  }
}
export interface RecoveryServicesVaultTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#create RecoveryServicesVault#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#delete RecoveryServicesVault#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#read RecoveryServicesVault#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#update RecoveryServicesVault#update}
  */
  readonly update?: string;
}

export function recoveryServicesVaultTimeoutsToTerraform(struct?: RecoveryServicesVaultTimeouts | cdktf.IResolvable): any {
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


export function recoveryServicesVaultTimeoutsToHclTerraform(struct?: RecoveryServicesVaultTimeouts | cdktf.IResolvable): any {
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

export class RecoveryServicesVaultTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RecoveryServicesVaultTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RecoveryServicesVaultTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault azurerm_recovery_services_vault}
*/
export class RecoveryServicesVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_recovery_services_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RecoveryServicesVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RecoveryServicesVault to import
  * @param importFromId The id of the existing RecoveryServicesVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RecoveryServicesVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_recovery_services_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/recovery_services_vault azurerm_recovery_services_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RecoveryServicesVaultConfig
  */
  public constructor(scope: Construct, id: string, config: RecoveryServicesVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_recovery_services_vault',
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
    this._classicVmwareReplicationEnabled = config.classicVmwareReplicationEnabled;
    this._crossRegionRestoreEnabled = config.crossRegionRestoreEnabled;
    this._id = config.id;
    this._immutability = config.immutability;
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._softDeleteEnabled = config.softDeleteEnabled;
    this._storageModeType = config.storageModeType;
    this._tags = config.tags;
    this._encryption.internalValue = config.encryption;
    this._identity.internalValue = config.identity;
    this._monitoring.internalValue = config.monitoring;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // classic_vmware_replication_enabled - computed: false, optional: true, required: false
  private _classicVmwareReplicationEnabled?: boolean | cdktf.IResolvable; 
  public get classicVmwareReplicationEnabled() {
    return this.getBooleanAttribute('classic_vmware_replication_enabled');
  }
  public set classicVmwareReplicationEnabled(value: boolean | cdktf.IResolvable) {
    this._classicVmwareReplicationEnabled = value;
  }
  public resetClassicVmwareReplicationEnabled() {
    this._classicVmwareReplicationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classicVmwareReplicationEnabledInput() {
    return this._classicVmwareReplicationEnabled;
  }

  // cross_region_restore_enabled - computed: false, optional: true, required: false
  private _crossRegionRestoreEnabled?: boolean | cdktf.IResolvable; 
  public get crossRegionRestoreEnabled() {
    return this.getBooleanAttribute('cross_region_restore_enabled');
  }
  public set crossRegionRestoreEnabled(value: boolean | cdktf.IResolvable) {
    this._crossRegionRestoreEnabled = value;
  }
  public resetCrossRegionRestoreEnabled() {
    this._crossRegionRestoreEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionRestoreEnabledInput() {
    return this._crossRegionRestoreEnabled;
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

  // immutability - computed: true, optional: true, required: false
  private _immutability?: string; 
  public get immutability() {
    return this.getStringAttribute('immutability');
  }
  public set immutability(value: string) {
    this._immutability = value;
  }
  public resetImmutability() {
    this._immutability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutabilityInput() {
    return this._immutability;
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

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
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

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // soft_delete_enabled - computed: false, optional: true, required: false
  private _softDeleteEnabled?: boolean | cdktf.IResolvable; 
  public get softDeleteEnabled() {
    return this.getBooleanAttribute('soft_delete_enabled');
  }
  public set softDeleteEnabled(value: boolean | cdktf.IResolvable) {
    this._softDeleteEnabled = value;
  }
  public resetSoftDeleteEnabled() {
    this._softDeleteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteEnabledInput() {
    return this._softDeleteEnabled;
  }

  // storage_mode_type - computed: false, optional: true, required: false
  private _storageModeType?: string; 
  public get storageModeType() {
    return this.getStringAttribute('storage_mode_type');
  }
  public set storageModeType(value: string) {
    this._storageModeType = value;
  }
  public resetStorageModeType() {
    this._storageModeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeTypeInput() {
    return this._storageModeType;
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

  // encryption - computed: false, optional: true, required: false
  private _encryption = new RecoveryServicesVaultEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: RecoveryServicesVaultEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new RecoveryServicesVaultIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: RecoveryServicesVaultIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new RecoveryServicesVaultMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: RecoveryServicesVaultMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RecoveryServicesVaultTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RecoveryServicesVaultTimeouts) {
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
      classic_vmware_replication_enabled: cdktf.booleanToTerraform(this._classicVmwareReplicationEnabled),
      cross_region_restore_enabled: cdktf.booleanToTerraform(this._crossRegionRestoreEnabled),
      id: cdktf.stringToTerraform(this._id),
      immutability: cdktf.stringToTerraform(this._immutability),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      soft_delete_enabled: cdktf.booleanToTerraform(this._softDeleteEnabled),
      storage_mode_type: cdktf.stringToTerraform(this._storageModeType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      encryption: recoveryServicesVaultEncryptionToTerraform(this._encryption.internalValue),
      identity: recoveryServicesVaultIdentityToTerraform(this._identity.internalValue),
      monitoring: recoveryServicesVaultMonitoringToTerraform(this._monitoring.internalValue),
      timeouts: recoveryServicesVaultTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      classic_vmware_replication_enabled: {
        value: cdktf.booleanToHclTerraform(this._classicVmwareReplicationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cross_region_restore_enabled: {
        value: cdktf.booleanToHclTerraform(this._crossRegionRestoreEnabled),
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
      immutability: {
        value: cdktf.stringToHclTerraform(this._immutability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sku: {
        value: cdktf.stringToHclTerraform(this._sku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_delete_enabled: {
        value: cdktf.booleanToHclTerraform(this._softDeleteEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_mode_type: {
        value: cdktf.stringToHclTerraform(this._storageModeType),
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
      encryption: {
        value: recoveryServicesVaultEncryptionToHclTerraform(this._encryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecoveryServicesVaultEncryptionList",
      },
      identity: {
        value: recoveryServicesVaultIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecoveryServicesVaultIdentityList",
      },
      monitoring: {
        value: recoveryServicesVaultMonitoringToHclTerraform(this._monitoring.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecoveryServicesVaultMonitoringList",
      },
      timeouts: {
        value: recoveryServicesVaultTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RecoveryServicesVaultTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
