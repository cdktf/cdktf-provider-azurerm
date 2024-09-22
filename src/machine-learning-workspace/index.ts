// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineLearningWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#application_insights_id MachineLearningWorkspace#application_insights_id}
  */
  readonly applicationInsightsId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#container_registry_id MachineLearningWorkspace#container_registry_id}
  */
  readonly containerRegistryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#description MachineLearningWorkspace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#friendly_name MachineLearningWorkspace#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#high_business_impact MachineLearningWorkspace#high_business_impact}
  */
  readonly highBusinessImpact?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#id MachineLearningWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#image_build_compute_name MachineLearningWorkspace#image_build_compute_name}
  */
  readonly imageBuildComputeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#kind MachineLearningWorkspace#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#location MachineLearningWorkspace#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#name MachineLearningWorkspace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#primary_user_assigned_identity MachineLearningWorkspace#primary_user_assigned_identity}
  */
  readonly primaryUserAssignedIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#public_network_access_enabled MachineLearningWorkspace#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#resource_group_name MachineLearningWorkspace#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#sku_name MachineLearningWorkspace#sku_name}
  */
  readonly skuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#storage_account_id MachineLearningWorkspace#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#tags MachineLearningWorkspace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#v1_legacy_mode_enabled MachineLearningWorkspace#v1_legacy_mode_enabled}
  */
  readonly v1LegacyModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#encryption MachineLearningWorkspace#encryption}
  */
  readonly encryption?: MachineLearningWorkspaceEncryption;
  /**
  * feature_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#feature_store MachineLearningWorkspace#feature_store}
  */
  readonly featureStore?: MachineLearningWorkspaceFeatureStore;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#identity MachineLearningWorkspace#identity}
  */
  readonly identity: MachineLearningWorkspaceIdentity;
  /**
  * managed_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#managed_network MachineLearningWorkspace#managed_network}
  */
  readonly managedNetwork?: MachineLearningWorkspaceManagedNetwork;
  /**
  * serverless_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#serverless_compute MachineLearningWorkspace#serverless_compute}
  */
  readonly serverlessCompute?: MachineLearningWorkspaceServerlessCompute;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#timeouts MachineLearningWorkspace#timeouts}
  */
  readonly timeouts?: MachineLearningWorkspaceTimeouts;
}
export interface MachineLearningWorkspaceEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#key_id MachineLearningWorkspace#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#user_assigned_identity_id MachineLearningWorkspace#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
}

export function machineLearningWorkspaceEncryptionToTerraform(struct?: MachineLearningWorkspaceEncryptionOutputReference | MachineLearningWorkspaceEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
  }
}


export function machineLearningWorkspaceEncryptionToHclTerraform(struct?: MachineLearningWorkspaceEncryptionOutputReference | MachineLearningWorkspaceEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class MachineLearningWorkspaceEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachineLearningWorkspaceEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLearningWorkspaceEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
      this._keyVaultId = undefined;
      this._userAssignedIdentityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
      this._keyVaultId = value.keyVaultId;
      this._userAssignedIdentityId = value.userAssignedIdentityId;
    }
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

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
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
export interface MachineLearningWorkspaceFeatureStore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#computer_spark_runtime_version MachineLearningWorkspace#computer_spark_runtime_version}
  */
  readonly computerSparkRuntimeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#offline_connection_name MachineLearningWorkspace#offline_connection_name}
  */
  readonly offlineConnectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#online_connection_name MachineLearningWorkspace#online_connection_name}
  */
  readonly onlineConnectionName?: string;
}

export function machineLearningWorkspaceFeatureStoreToTerraform(struct?: MachineLearningWorkspaceFeatureStoreOutputReference | MachineLearningWorkspaceFeatureStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    computer_spark_runtime_version: cdktf.stringToTerraform(struct!.computerSparkRuntimeVersion),
    offline_connection_name: cdktf.stringToTerraform(struct!.offlineConnectionName),
    online_connection_name: cdktf.stringToTerraform(struct!.onlineConnectionName),
  }
}


export function machineLearningWorkspaceFeatureStoreToHclTerraform(struct?: MachineLearningWorkspaceFeatureStoreOutputReference | MachineLearningWorkspaceFeatureStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    computer_spark_runtime_version: {
      value: cdktf.stringToHclTerraform(struct!.computerSparkRuntimeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offline_connection_name: {
      value: cdktf.stringToHclTerraform(struct!.offlineConnectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    online_connection_name: {
      value: cdktf.stringToHclTerraform(struct!.onlineConnectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineLearningWorkspaceFeatureStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachineLearningWorkspaceFeatureStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computerSparkRuntimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.computerSparkRuntimeVersion = this._computerSparkRuntimeVersion;
    }
    if (this._offlineConnectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.offlineConnectionName = this._offlineConnectionName;
    }
    if (this._onlineConnectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlineConnectionName = this._onlineConnectionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLearningWorkspaceFeatureStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computerSparkRuntimeVersion = undefined;
      this._offlineConnectionName = undefined;
      this._onlineConnectionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computerSparkRuntimeVersion = value.computerSparkRuntimeVersion;
      this._offlineConnectionName = value.offlineConnectionName;
      this._onlineConnectionName = value.onlineConnectionName;
    }
  }

  // computer_spark_runtime_version - computed: false, optional: true, required: false
  private _computerSparkRuntimeVersion?: string; 
  public get computerSparkRuntimeVersion() {
    return this.getStringAttribute('computer_spark_runtime_version');
  }
  public set computerSparkRuntimeVersion(value: string) {
    this._computerSparkRuntimeVersion = value;
  }
  public resetComputerSparkRuntimeVersion() {
    this._computerSparkRuntimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerSparkRuntimeVersionInput() {
    return this._computerSparkRuntimeVersion;
  }

  // offline_connection_name - computed: false, optional: true, required: false
  private _offlineConnectionName?: string; 
  public get offlineConnectionName() {
    return this.getStringAttribute('offline_connection_name');
  }
  public set offlineConnectionName(value: string) {
    this._offlineConnectionName = value;
  }
  public resetOfflineConnectionName() {
    this._offlineConnectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineConnectionNameInput() {
    return this._offlineConnectionName;
  }

  // online_connection_name - computed: false, optional: true, required: false
  private _onlineConnectionName?: string; 
  public get onlineConnectionName() {
    return this.getStringAttribute('online_connection_name');
  }
  public set onlineConnectionName(value: string) {
    this._onlineConnectionName = value;
  }
  public resetOnlineConnectionName() {
    this._onlineConnectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineConnectionNameInput() {
    return this._onlineConnectionName;
  }
}
export interface MachineLearningWorkspaceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#identity_ids MachineLearningWorkspace#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#type MachineLearningWorkspace#type}
  */
  readonly type: string;
}

export function machineLearningWorkspaceIdentityToTerraform(struct?: MachineLearningWorkspaceIdentityOutputReference | MachineLearningWorkspaceIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function machineLearningWorkspaceIdentityToHclTerraform(struct?: MachineLearningWorkspaceIdentityOutputReference | MachineLearningWorkspaceIdentity): any {
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

export class MachineLearningWorkspaceIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachineLearningWorkspaceIdentity | undefined {
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

  public set internalValue(value: MachineLearningWorkspaceIdentity | undefined) {
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
export interface MachineLearningWorkspaceManagedNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#isolation_mode MachineLearningWorkspace#isolation_mode}
  */
  readonly isolationMode?: string;
}

export function machineLearningWorkspaceManagedNetworkToTerraform(struct?: MachineLearningWorkspaceManagedNetworkOutputReference | MachineLearningWorkspaceManagedNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isolation_mode: cdktf.stringToTerraform(struct!.isolationMode),
  }
}


export function machineLearningWorkspaceManagedNetworkToHclTerraform(struct?: MachineLearningWorkspaceManagedNetworkOutputReference | MachineLearningWorkspaceManagedNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isolation_mode: {
      value: cdktf.stringToHclTerraform(struct!.isolationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineLearningWorkspaceManagedNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachineLearningWorkspaceManagedNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isolationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolationMode = this._isolationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLearningWorkspaceManagedNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isolationMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isolationMode = value.isolationMode;
    }
  }

  // isolation_mode - computed: true, optional: true, required: false
  private _isolationMode?: string; 
  public get isolationMode() {
    return this.getStringAttribute('isolation_mode');
  }
  public set isolationMode(value: string) {
    this._isolationMode = value;
  }
  public resetIsolationMode() {
    this._isolationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationModeInput() {
    return this._isolationMode;
  }
}
export interface MachineLearningWorkspaceServerlessCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#public_ip_enabled MachineLearningWorkspace#public_ip_enabled}
  */
  readonly publicIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#subnet_id MachineLearningWorkspace#subnet_id}
  */
  readonly subnetId?: string;
}

export function machineLearningWorkspaceServerlessComputeToTerraform(struct?: MachineLearningWorkspaceServerlessComputeOutputReference | MachineLearningWorkspaceServerlessCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip_enabled: cdktf.booleanToTerraform(struct!.publicIpEnabled),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function machineLearningWorkspaceServerlessComputeToHclTerraform(struct?: MachineLearningWorkspaceServerlessComputeOutputReference | MachineLearningWorkspaceServerlessCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ip_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.publicIpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineLearningWorkspaceServerlessComputeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachineLearningWorkspaceServerlessCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpEnabled = this._publicIpEnabled;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLearningWorkspaceServerlessCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIpEnabled = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIpEnabled = value.publicIpEnabled;
      this._subnetId = value.subnetId;
    }
  }

  // public_ip_enabled - computed: false, optional: true, required: false
  private _publicIpEnabled?: boolean | cdktf.IResolvable; 
  public get publicIpEnabled() {
    return this.getBooleanAttribute('public_ip_enabled');
  }
  public set publicIpEnabled(value: boolean | cdktf.IResolvable) {
    this._publicIpEnabled = value;
  }
  public resetPublicIpEnabled() {
    this._publicIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpEnabledInput() {
    return this._publicIpEnabled;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface MachineLearningWorkspaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#create MachineLearningWorkspace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#delete MachineLearningWorkspace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#read MachineLearningWorkspace#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#update MachineLearningWorkspace#update}
  */
  readonly update?: string;
}

export function machineLearningWorkspaceTimeoutsToTerraform(struct?: MachineLearningWorkspaceTimeouts | cdktf.IResolvable): any {
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


export function machineLearningWorkspaceTimeoutsToHclTerraform(struct?: MachineLearningWorkspaceTimeouts | cdktf.IResolvable): any {
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

export class MachineLearningWorkspaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineLearningWorkspaceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MachineLearningWorkspaceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace azurerm_machine_learning_workspace}
*/
export class MachineLearningWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_machine_learning_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MachineLearningWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MachineLearningWorkspace to import
  * @param importFromId The id of the existing MachineLearningWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MachineLearningWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_machine_learning_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_workspace azurerm_machine_learning_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineLearningWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: MachineLearningWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_machine_learning_workspace',
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
    this._applicationInsightsId = config.applicationInsightsId;
    this._containerRegistryId = config.containerRegistryId;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._highBusinessImpact = config.highBusinessImpact;
    this._id = config.id;
    this._imageBuildComputeName = config.imageBuildComputeName;
    this._keyVaultId = config.keyVaultId;
    this._kind = config.kind;
    this._location = config.location;
    this._name = config.name;
    this._primaryUserAssignedIdentity = config.primaryUserAssignedIdentity;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._storageAccountId = config.storageAccountId;
    this._tags = config.tags;
    this._v1LegacyModeEnabled = config.v1LegacyModeEnabled;
    this._encryption.internalValue = config.encryption;
    this._featureStore.internalValue = config.featureStore;
    this._identity.internalValue = config.identity;
    this._managedNetwork.internalValue = config.managedNetwork;
    this._serverlessCompute.internalValue = config.serverlessCompute;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_insights_id - computed: false, optional: false, required: true
  private _applicationInsightsId?: string; 
  public get applicationInsightsId() {
    return this.getStringAttribute('application_insights_id');
  }
  public set applicationInsightsId(value: string) {
    this._applicationInsightsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsIdInput() {
    return this._applicationInsightsId;
  }

  // container_registry_id - computed: false, optional: true, required: false
  private _containerRegistryId?: string; 
  public get containerRegistryId() {
    return this.getStringAttribute('container_registry_id');
  }
  public set containerRegistryId(value: string) {
    this._containerRegistryId = value;
  }
  public resetContainerRegistryId() {
    this._containerRegistryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryIdInput() {
    return this._containerRegistryId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // high_business_impact - computed: false, optional: true, required: false
  private _highBusinessImpact?: boolean | cdktf.IResolvable; 
  public get highBusinessImpact() {
    return this.getBooleanAttribute('high_business_impact');
  }
  public set highBusinessImpact(value: boolean | cdktf.IResolvable) {
    this._highBusinessImpact = value;
  }
  public resetHighBusinessImpact() {
    this._highBusinessImpact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highBusinessImpactInput() {
    return this._highBusinessImpact;
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

  // image_build_compute_name - computed: false, optional: true, required: false
  private _imageBuildComputeName?: string; 
  public get imageBuildComputeName() {
    return this.getStringAttribute('image_build_compute_name');
  }
  public set imageBuildComputeName(value: string) {
    this._imageBuildComputeName = value;
  }
  public resetImageBuildComputeName() {
    this._imageBuildComputeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageBuildComputeNameInput() {
    return this._imageBuildComputeName;
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // primary_user_assigned_identity - computed: false, optional: true, required: false
  private _primaryUserAssignedIdentity?: string; 
  public get primaryUserAssignedIdentity() {
    return this.getStringAttribute('primary_user_assigned_identity');
  }
  public set primaryUserAssignedIdentity(value: string) {
    this._primaryUserAssignedIdentity = value;
  }
  public resetPrimaryUserAssignedIdentity() {
    this._primaryUserAssignedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryUserAssignedIdentityInput() {
    return this._primaryUserAssignedIdentity;
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

  // sku_name - computed: false, optional: true, required: false
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

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
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

  // v1_legacy_mode_enabled - computed: false, optional: true, required: false
  private _v1LegacyModeEnabled?: boolean | cdktf.IResolvable; 
  public get v1LegacyModeEnabled() {
    return this.getBooleanAttribute('v1_legacy_mode_enabled');
  }
  public set v1LegacyModeEnabled(value: boolean | cdktf.IResolvable) {
    this._v1LegacyModeEnabled = value;
  }
  public resetV1LegacyModeEnabled() {
    this._v1LegacyModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1LegacyModeEnabledInput() {
    return this._v1LegacyModeEnabled;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new MachineLearningWorkspaceEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: MachineLearningWorkspaceEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // feature_store - computed: false, optional: true, required: false
  private _featureStore = new MachineLearningWorkspaceFeatureStoreOutputReference(this, "feature_store");
  public get featureStore() {
    return this._featureStore;
  }
  public putFeatureStore(value: MachineLearningWorkspaceFeatureStore) {
    this._featureStore.internalValue = value;
  }
  public resetFeatureStore() {
    this._featureStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureStoreInput() {
    return this._featureStore.internalValue;
  }

  // identity - computed: false, optional: false, required: true
  private _identity = new MachineLearningWorkspaceIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: MachineLearningWorkspaceIdentity) {
    this._identity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // managed_network - computed: false, optional: true, required: false
  private _managedNetwork = new MachineLearningWorkspaceManagedNetworkOutputReference(this, "managed_network");
  public get managedNetwork() {
    return this._managedNetwork;
  }
  public putManagedNetwork(value: MachineLearningWorkspaceManagedNetwork) {
    this._managedNetwork.internalValue = value;
  }
  public resetManagedNetwork() {
    this._managedNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedNetworkInput() {
    return this._managedNetwork.internalValue;
  }

  // serverless_compute - computed: false, optional: true, required: false
  private _serverlessCompute = new MachineLearningWorkspaceServerlessComputeOutputReference(this, "serverless_compute");
  public get serverlessCompute() {
    return this._serverlessCompute;
  }
  public putServerlessCompute(value: MachineLearningWorkspaceServerlessCompute) {
    this._serverlessCompute.internalValue = value;
  }
  public resetServerlessCompute() {
    this._serverlessCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessComputeInput() {
    return this._serverlessCompute.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MachineLearningWorkspaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MachineLearningWorkspaceTimeouts) {
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
      application_insights_id: cdktf.stringToTerraform(this._applicationInsightsId),
      container_registry_id: cdktf.stringToTerraform(this._containerRegistryId),
      description: cdktf.stringToTerraform(this._description),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      high_business_impact: cdktf.booleanToTerraform(this._highBusinessImpact),
      id: cdktf.stringToTerraform(this._id),
      image_build_compute_name: cdktf.stringToTerraform(this._imageBuildComputeName),
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      kind: cdktf.stringToTerraform(this._kind),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      primary_user_assigned_identity: cdktf.stringToTerraform(this._primaryUserAssignedIdentity),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      v1_legacy_mode_enabled: cdktf.booleanToTerraform(this._v1LegacyModeEnabled),
      encryption: machineLearningWorkspaceEncryptionToTerraform(this._encryption.internalValue),
      feature_store: machineLearningWorkspaceFeatureStoreToTerraform(this._featureStore.internalValue),
      identity: machineLearningWorkspaceIdentityToTerraform(this._identity.internalValue),
      managed_network: machineLearningWorkspaceManagedNetworkToTerraform(this._managedNetwork.internalValue),
      serverless_compute: machineLearningWorkspaceServerlessComputeToTerraform(this._serverlessCompute.internalValue),
      timeouts: machineLearningWorkspaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_insights_id: {
        value: cdktf.stringToHclTerraform(this._applicationInsightsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_registry_id: {
        value: cdktf.stringToHclTerraform(this._containerRegistryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      high_business_impact: {
        value: cdktf.booleanToHclTerraform(this._highBusinessImpact),
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
      image_build_compute_name: {
        value: cdktf.stringToHclTerraform(this._imageBuildComputeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_vault_id: {
        value: cdktf.stringToHclTerraform(this._keyVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
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
      primary_user_assigned_identity: {
        value: cdktf.stringToHclTerraform(this._primaryUserAssignedIdentity),
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
      sku_name: {
        value: cdktf.stringToHclTerraform(this._skuName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_id: {
        value: cdktf.stringToHclTerraform(this._storageAccountId),
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
      v1_legacy_mode_enabled: {
        value: cdktf.booleanToHclTerraform(this._v1LegacyModeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption: {
        value: machineLearningWorkspaceEncryptionToHclTerraform(this._encryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MachineLearningWorkspaceEncryptionList",
      },
      feature_store: {
        value: machineLearningWorkspaceFeatureStoreToHclTerraform(this._featureStore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MachineLearningWorkspaceFeatureStoreList",
      },
      identity: {
        value: machineLearningWorkspaceIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MachineLearningWorkspaceIdentityList",
      },
      managed_network: {
        value: machineLearningWorkspaceManagedNetworkToHclTerraform(this._managedNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MachineLearningWorkspaceManagedNetworkList",
      },
      serverless_compute: {
        value: machineLearningWorkspaceServerlessComputeToHclTerraform(this._serverlessCompute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MachineLearningWorkspaceServerlessComputeList",
      },
      timeouts: {
        value: machineLearningWorkspaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MachineLearningWorkspaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
