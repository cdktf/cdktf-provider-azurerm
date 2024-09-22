// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HdinsightKafkaClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#cluster_version HdinsightKafkaCluster#cluster_version}
  */
  readonly clusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#encryption_in_transit_enabled HdinsightKafkaCluster#encryption_in_transit_enabled}
  */
  readonly encryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#id HdinsightKafkaCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#location HdinsightKafkaCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#resource_group_name HdinsightKafkaCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#tags HdinsightKafkaCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#tier HdinsightKafkaCluster#tier}
  */
  readonly tier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#tls_min_version HdinsightKafkaCluster#tls_min_version}
  */
  readonly tlsMinVersion?: string;
  /**
  * component_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#component_version HdinsightKafkaCluster#component_version}
  */
  readonly componentVersion: HdinsightKafkaClusterComponentVersion;
  /**
  * compute_isolation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#compute_isolation HdinsightKafkaCluster#compute_isolation}
  */
  readonly computeIsolation?: HdinsightKafkaClusterComputeIsolation;
  /**
  * disk_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#disk_encryption HdinsightKafkaCluster#disk_encryption}
  */
  readonly diskEncryption?: HdinsightKafkaClusterDiskEncryption[] | cdktf.IResolvable;
  /**
  * extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#extension HdinsightKafkaCluster#extension}
  */
  readonly extension?: HdinsightKafkaClusterExtension;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#gateway HdinsightKafkaCluster#gateway}
  */
  readonly gateway: HdinsightKafkaClusterGateway;
  /**
  * metastores block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#metastores HdinsightKafkaCluster#metastores}
  */
  readonly metastores?: HdinsightKafkaClusterMetastores;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#monitor HdinsightKafkaCluster#monitor}
  */
  readonly monitor?: HdinsightKafkaClusterMonitor;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#network HdinsightKafkaCluster#network}
  */
  readonly network?: HdinsightKafkaClusterNetwork;
  /**
  * private_link_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#private_link_configuration HdinsightKafkaCluster#private_link_configuration}
  */
  readonly privateLinkConfiguration?: HdinsightKafkaClusterPrivateLinkConfiguration;
  /**
  * rest_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#rest_proxy HdinsightKafkaCluster#rest_proxy}
  */
  readonly restProxy?: HdinsightKafkaClusterRestProxy;
  /**
  * roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#roles HdinsightKafkaCluster#roles}
  */
  readonly roles: HdinsightKafkaClusterRoles;
  /**
  * security_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#security_profile HdinsightKafkaCluster#security_profile}
  */
  readonly securityProfile?: HdinsightKafkaClusterSecurityProfile;
  /**
  * storage_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#storage_account HdinsightKafkaCluster#storage_account}
  */
  readonly storageAccount?: HdinsightKafkaClusterStorageAccount[] | cdktf.IResolvable;
  /**
  * storage_account_gen2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#storage_account_gen2 HdinsightKafkaCluster#storage_account_gen2}
  */
  readonly storageAccountGen2?: HdinsightKafkaClusterStorageAccountGen2;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#timeouts HdinsightKafkaCluster#timeouts}
  */
  readonly timeouts?: HdinsightKafkaClusterTimeouts;
}
export interface HdinsightKafkaClusterComponentVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#kafka HdinsightKafkaCluster#kafka}
  */
  readonly kafka: string;
}

export function hdinsightKafkaClusterComponentVersionToTerraform(struct?: HdinsightKafkaClusterComponentVersionOutputReference | HdinsightKafkaClusterComponentVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka: cdktf.stringToTerraform(struct!.kafka),
  }
}


export function hdinsightKafkaClusterComponentVersionToHclTerraform(struct?: HdinsightKafkaClusterComponentVersionOutputReference | HdinsightKafkaClusterComponentVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kafka: {
      value: cdktf.stringToHclTerraform(struct!.kafka),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterComponentVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterComponentVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafka !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterComponentVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kafka = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kafka = value.kafka;
    }
  }

  // kafka - computed: false, optional: false, required: true
  private _kafka?: string; 
  public get kafka() {
    return this.getStringAttribute('kafka');
  }
  public set kafka(value: string) {
    this._kafka = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka;
  }
}
export interface HdinsightKafkaClusterComputeIsolation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#compute_isolation_enabled HdinsightKafkaCluster#compute_isolation_enabled}
  */
  readonly computeIsolationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#host_sku HdinsightKafkaCluster#host_sku}
  */
  readonly hostSku?: string;
}

export function hdinsightKafkaClusterComputeIsolationToTerraform(struct?: HdinsightKafkaClusterComputeIsolationOutputReference | HdinsightKafkaClusterComputeIsolation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_isolation_enabled: cdktf.booleanToTerraform(struct!.computeIsolationEnabled),
    host_sku: cdktf.stringToTerraform(struct!.hostSku),
  }
}


export function hdinsightKafkaClusterComputeIsolationToHclTerraform(struct?: HdinsightKafkaClusterComputeIsolationOutputReference | HdinsightKafkaClusterComputeIsolation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_isolation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.computeIsolationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_sku: {
      value: cdktf.stringToHclTerraform(struct!.hostSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterComputeIsolationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterComputeIsolation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeIsolationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeIsolationEnabled = this._computeIsolationEnabled;
    }
    if (this._hostSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSku = this._hostSku;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterComputeIsolation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeIsolationEnabled = undefined;
      this._hostSku = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeIsolationEnabled = value.computeIsolationEnabled;
      this._hostSku = value.hostSku;
    }
  }

  // compute_isolation_enabled - computed: false, optional: true, required: false
  private _computeIsolationEnabled?: boolean | cdktf.IResolvable; 
  public get computeIsolationEnabled() {
    return this.getBooleanAttribute('compute_isolation_enabled');
  }
  public set computeIsolationEnabled(value: boolean | cdktf.IResolvable) {
    this._computeIsolationEnabled = value;
  }
  public resetComputeIsolationEnabled() {
    this._computeIsolationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeIsolationEnabledInput() {
    return this._computeIsolationEnabled;
  }

  // host_sku - computed: false, optional: true, required: false
  private _hostSku?: string; 
  public get hostSku() {
    return this.getStringAttribute('host_sku');
  }
  public set hostSku(value: string) {
    this._hostSku = value;
  }
  public resetHostSku() {
    this._hostSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSkuInput() {
    return this._hostSku;
  }
}
export interface HdinsightKafkaClusterDiskEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#encryption_algorithm HdinsightKafkaCluster#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#encryption_at_host_enabled HdinsightKafkaCluster#encryption_at_host_enabled}
  */
  readonly encryptionAtHostEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#key_vault_key_id HdinsightKafkaCluster#key_vault_key_id}
  */
  readonly keyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#key_vault_managed_identity_id HdinsightKafkaCluster#key_vault_managed_identity_id}
  */
  readonly keyVaultManagedIdentityId?: string;
}

export function hdinsightKafkaClusterDiskEncryptionToTerraform(struct?: HdinsightKafkaClusterDiskEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    encryption_at_host_enabled: cdktf.booleanToTerraform(struct!.encryptionAtHostEnabled),
    key_vault_key_id: cdktf.stringToTerraform(struct!.keyVaultKeyId),
    key_vault_managed_identity_id: cdktf.stringToTerraform(struct!.keyVaultManagedIdentityId),
  }
}


export function hdinsightKafkaClusterDiskEncryptionToHclTerraform(struct?: HdinsightKafkaClusterDiskEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.encryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_at_host_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.encryptionAtHostEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_vault_key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_managed_identity_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultManagedIdentityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterDiskEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HdinsightKafkaClusterDiskEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._encryptionAtHostEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAtHostEnabled = this._encryptionAtHostEnabled;
    }
    if (this._keyVaultKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultKeyId = this._keyVaultKeyId;
    }
    if (this._keyVaultManagedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultManagedIdentityId = this._keyVaultManagedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterDiskEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionAlgorithm = undefined;
      this._encryptionAtHostEnabled = undefined;
      this._keyVaultKeyId = undefined;
      this._keyVaultManagedIdentityId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._encryptionAtHostEnabled = value.encryptionAtHostEnabled;
      this._keyVaultKeyId = value.keyVaultKeyId;
      this._keyVaultManagedIdentityId = value.keyVaultManagedIdentityId;
    }
  }

  // encryption_algorithm - computed: false, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // encryption_at_host_enabled - computed: false, optional: true, required: false
  private _encryptionAtHostEnabled?: boolean | cdktf.IResolvable; 
  public get encryptionAtHostEnabled() {
    return this.getBooleanAttribute('encryption_at_host_enabled');
  }
  public set encryptionAtHostEnabled(value: boolean | cdktf.IResolvable) {
    this._encryptionAtHostEnabled = value;
  }
  public resetEncryptionAtHostEnabled() {
    this._encryptionAtHostEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtHostEnabledInput() {
    return this._encryptionAtHostEnabled;
  }

  // key_vault_key_id - computed: false, optional: true, required: false
  private _keyVaultKeyId?: string; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  public resetKeyVaultKeyId() {
    this._keyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId;
  }

  // key_vault_managed_identity_id - computed: false, optional: true, required: false
  private _keyVaultManagedIdentityId?: string; 
  public get keyVaultManagedIdentityId() {
    return this.getStringAttribute('key_vault_managed_identity_id');
  }
  public set keyVaultManagedIdentityId(value: string) {
    this._keyVaultManagedIdentityId = value;
  }
  public resetKeyVaultManagedIdentityId() {
    this._keyVaultManagedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultManagedIdentityIdInput() {
    return this._keyVaultManagedIdentityId;
  }
}

export class HdinsightKafkaClusterDiskEncryptionList extends cdktf.ComplexList {
  public internalValue? : HdinsightKafkaClusterDiskEncryption[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HdinsightKafkaClusterDiskEncryptionOutputReference {
    return new HdinsightKafkaClusterDiskEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HdinsightKafkaClusterExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}
  */
  readonly primaryKey: string;
}

export function hdinsightKafkaClusterExtensionToTerraform(struct?: HdinsightKafkaClusterExtensionOutputReference | HdinsightKafkaClusterExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function hdinsightKafkaClusterExtensionToHclTerraform(struct?: HdinsightKafkaClusterExtensionOutputReference | HdinsightKafkaClusterExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_analytics_workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterExtension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceId = this._logAnalyticsWorkspaceId;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterExtension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAnalyticsWorkspaceId = undefined;
      this._primaryKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAnalyticsWorkspaceId = value.logAnalyticsWorkspaceId;
      this._primaryKey = value.primaryKey;
    }
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface HdinsightKafkaClusterGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
}

export function hdinsightKafkaClusterGatewayToTerraform(struct?: HdinsightKafkaClusterGatewayOutputReference | HdinsightKafkaClusterGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function hdinsightKafkaClusterGatewayToHclTerraform(struct?: HdinsightKafkaClusterGatewayOutputReference | HdinsightKafkaClusterGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface HdinsightKafkaClusterMetastoresAmbari {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
}

export function hdinsightKafkaClusterMetastoresAmbariToTerraform(struct?: HdinsightKafkaClusterMetastoresAmbariOutputReference | HdinsightKafkaClusterMetastoresAmbari): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function hdinsightKafkaClusterMetastoresAmbariToHclTerraform(struct?: HdinsightKafkaClusterMetastoresAmbariOutputReference | HdinsightKafkaClusterMetastoresAmbari): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterMetastoresAmbariOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterMetastoresAmbari | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterMetastoresAmbari | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._password = undefined;
      this._server = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._password = value.password;
      this._server = value.server;
      this._username = value.username;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface HdinsightKafkaClusterMetastoresHive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
}

export function hdinsightKafkaClusterMetastoresHiveToTerraform(struct?: HdinsightKafkaClusterMetastoresHiveOutputReference | HdinsightKafkaClusterMetastoresHive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function hdinsightKafkaClusterMetastoresHiveToHclTerraform(struct?: HdinsightKafkaClusterMetastoresHiveOutputReference | HdinsightKafkaClusterMetastoresHive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterMetastoresHiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterMetastoresHive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterMetastoresHive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._password = undefined;
      this._server = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._password = value.password;
      this._server = value.server;
      this._username = value.username;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface HdinsightKafkaClusterMetastoresOozie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
}

export function hdinsightKafkaClusterMetastoresOozieToTerraform(struct?: HdinsightKafkaClusterMetastoresOozieOutputReference | HdinsightKafkaClusterMetastoresOozie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function hdinsightKafkaClusterMetastoresOozieToHclTerraform(struct?: HdinsightKafkaClusterMetastoresOozieOutputReference | HdinsightKafkaClusterMetastoresOozie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterMetastoresOozieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterMetastoresOozie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterMetastoresOozie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._password = undefined;
      this._server = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._password = value.password;
      this._server = value.server;
      this._username = value.username;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface HdinsightKafkaClusterMetastores {
  /**
  * ambari block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#ambari HdinsightKafkaCluster#ambari}
  */
  readonly ambari?: HdinsightKafkaClusterMetastoresAmbari;
  /**
  * hive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#hive HdinsightKafkaCluster#hive}
  */
  readonly hive?: HdinsightKafkaClusterMetastoresHive;
  /**
  * oozie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#oozie HdinsightKafkaCluster#oozie}
  */
  readonly oozie?: HdinsightKafkaClusterMetastoresOozie;
}

export function hdinsightKafkaClusterMetastoresToTerraform(struct?: HdinsightKafkaClusterMetastoresOutputReference | HdinsightKafkaClusterMetastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ambari: hdinsightKafkaClusterMetastoresAmbariToTerraform(struct!.ambari),
    hive: hdinsightKafkaClusterMetastoresHiveToTerraform(struct!.hive),
    oozie: hdinsightKafkaClusterMetastoresOozieToTerraform(struct!.oozie),
  }
}


export function hdinsightKafkaClusterMetastoresToHclTerraform(struct?: HdinsightKafkaClusterMetastoresOutputReference | HdinsightKafkaClusterMetastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ambari: {
      value: hdinsightKafkaClusterMetastoresAmbariToHclTerraform(struct!.ambari),
      isBlock: true,
      type: "list",
      storageClassType: "HdinsightKafkaClusterMetastoresAmbariList",
    },
    hive: {
      value: hdinsightKafkaClusterMetastoresHiveToHclTerraform(struct!.hive),
      isBlock: true,
      type: "list",
      storageClassType: "HdinsightKafkaClusterMetastoresHiveList",
    },
    oozie: {
      value: hdinsightKafkaClusterMetastoresOozieToHclTerraform(struct!.oozie),
      isBlock: true,
      type: "list",
      storageClassType: "HdinsightKafkaClusterMetastoresOozieList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterMetastoresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterMetastores | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ambari?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ambari = this._ambari?.internalValue;
    }
    if (this._hive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hive = this._hive?.internalValue;
    }
    if (this._oozie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oozie = this._oozie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterMetastores | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ambari.internalValue = undefined;
      this._hive.internalValue = undefined;
      this._oozie.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ambari.internalValue = value.ambari;
      this._hive.internalValue = value.hive;
      this._oozie.internalValue = value.oozie;
    }
  }

  // ambari - computed: false, optional: true, required: false
  private _ambari = new HdinsightKafkaClusterMetastoresAmbariOutputReference(this, "ambari");
  public get ambari() {
    return this._ambari;
  }
  public putAmbari(value: HdinsightKafkaClusterMetastoresAmbari) {
    this._ambari.internalValue = value;
  }
  public resetAmbari() {
    this._ambari.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ambariInput() {
    return this._ambari.internalValue;
  }

  // hive - computed: false, optional: true, required: false
  private _hive = new HdinsightKafkaClusterMetastoresHiveOutputReference(this, "hive");
  public get hive() {
    return this._hive;
  }
  public putHive(value: HdinsightKafkaClusterMetastoresHive) {
    this._hive.internalValue = value;
  }
  public resetHive() {
    this._hive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveInput() {
    return this._hive.internalValue;
  }

  // oozie - computed: false, optional: true, required: false
  private _oozie = new HdinsightKafkaClusterMetastoresOozieOutputReference(this, "oozie");
  public get oozie() {
    return this._oozie;
  }
  public putOozie(value: HdinsightKafkaClusterMetastoresOozie) {
    this._oozie.internalValue = value;
  }
  public resetOozie() {
    this._oozie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oozieInput() {
    return this._oozie.internalValue;
  }
}
export interface HdinsightKafkaClusterMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}
  */
  readonly primaryKey: string;
}

export function hdinsightKafkaClusterMonitorToTerraform(struct?: HdinsightKafkaClusterMonitorOutputReference | HdinsightKafkaClusterMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function hdinsightKafkaClusterMonitorToHclTerraform(struct?: HdinsightKafkaClusterMonitorOutputReference | HdinsightKafkaClusterMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_analytics_workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.logAnalyticsWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceId = this._logAnalyticsWorkspaceId;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAnalyticsWorkspaceId = undefined;
      this._primaryKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAnalyticsWorkspaceId = value.logAnalyticsWorkspaceId;
      this._primaryKey = value.primaryKey;
    }
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface HdinsightKafkaClusterNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#connection_direction HdinsightKafkaCluster#connection_direction}
  */
  readonly connectionDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#private_link_enabled HdinsightKafkaCluster#private_link_enabled}
  */
  readonly privateLinkEnabled?: boolean | cdktf.IResolvable;
}

export function hdinsightKafkaClusterNetworkToTerraform(struct?: HdinsightKafkaClusterNetworkOutputReference | HdinsightKafkaClusterNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_direction: cdktf.stringToTerraform(struct!.connectionDirection),
    private_link_enabled: cdktf.booleanToTerraform(struct!.privateLinkEnabled),
  }
}


export function hdinsightKafkaClusterNetworkToHclTerraform(struct?: HdinsightKafkaClusterNetworkOutputReference | HdinsightKafkaClusterNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_direction: {
      value: cdktf.stringToHclTerraform(struct!.connectionDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_link_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.privateLinkEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionDirection = this._connectionDirection;
    }
    if (this._privateLinkEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkEnabled = this._privateLinkEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionDirection = undefined;
      this._privateLinkEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionDirection = value.connectionDirection;
      this._privateLinkEnabled = value.privateLinkEnabled;
    }
  }

  // connection_direction - computed: false, optional: true, required: false
  private _connectionDirection?: string; 
  public get connectionDirection() {
    return this.getStringAttribute('connection_direction');
  }
  public set connectionDirection(value: string) {
    this._connectionDirection = value;
  }
  public resetConnectionDirection() {
    this._connectionDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDirectionInput() {
    return this._connectionDirection;
  }

  // private_link_enabled - computed: false, optional: true, required: false
  private _privateLinkEnabled?: boolean | cdktf.IResolvable; 
  public get privateLinkEnabled() {
    return this.getBooleanAttribute('private_link_enabled');
  }
  public set privateLinkEnabled(value: boolean | cdktf.IResolvable) {
    this._privateLinkEnabled = value;
  }
  public resetPrivateLinkEnabled() {
    this._privateLinkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkEnabledInput() {
    return this._privateLinkEnabled;
  }
}
export interface HdinsightKafkaClusterPrivateLinkConfigurationIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#primary HdinsightKafkaCluster#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#private_ip_address HdinsightKafkaCluster#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#private_ip_allocation_method HdinsightKafkaCluster#private_ip_allocation_method}
  */
  readonly privateIpAllocationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}
  */
  readonly subnetId?: string;
}

export function hdinsightKafkaClusterPrivateLinkConfigurationIpConfigurationToTerraform(struct?: HdinsightKafkaClusterPrivateLinkConfigurationIpConfigurationOutputReference | HdinsightKafkaClusterPrivateLinkConfigurationIpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    primary: cdktf.booleanToTerraform(struct!.primary),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    private_ip_allocation_method: cdktf.stringToTerraform(struct!.privateIpAllocationMethod),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function hdinsightKafkaClusterPrivateLinkConfigurationIpConfigurationToHclTerraform(struct?: HdinsightKafkaClusterPrivateLinkConfigurationIpConfigurationOutputReference | HdinsightKafkaClusterPrivateLinkConfigurationIpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_allocation_method: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAllocationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class HdinsightKafkaClusterPrivateLinkConfigurationIpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterPrivateLinkConfigurationIpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    if (this._privateIpAllocationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAllocationMethod = this._privateIpAllocationMethod;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterPrivateLinkConfigurationIpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._primary = undefined;
      this._privateIpAddress = undefined;
      this._privateIpAllocationMethod = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._primary = value.primary;
      this._privateIpAddress = value.privateIpAddress;
      this._privateIpAllocationMethod = value.privateIpAllocationMethod;
      this._subnetId = value.subnetId;
    }
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

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // private_ip_allocation_method - computed: false, optional: true, required: false
  private _privateIpAllocationMethod?: string; 
  public get privateIpAllocationMethod() {
    return this.getStringAttribute('private_ip_allocation_method');
  }
  public set privateIpAllocationMethod(value: string) {
    this._privateIpAllocationMethod = value;
  }
  public resetPrivateIpAllocationMethod() {
    this._privateIpAllocationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAllocationMethodInput() {
    return this._privateIpAllocationMethod;
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
export interface HdinsightKafkaClusterPrivateLinkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#group_id HdinsightKafkaCluster#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}
  */
  readonly name: string;
  /**
  * ip_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#ip_configuration HdinsightKafkaCluster#ip_configuration}
  */
  readonly ipConfiguration: HdinsightKafkaClusterPrivateLinkConfigurationIpConfiguration;
}

export function hdinsightKafkaClusterPrivateLinkConfigurationToTerraform(struct?: HdinsightKafkaClusterPrivateLinkConfigurationOutputReference | HdinsightKafkaClusterPrivateLinkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    name: cdktf.stringToTerraform(struct!.name),
    ip_configuration: hdinsightKafkaClusterPrivateLinkConfigurationIpConfigurationToTerraform(struct!.ipConfiguration),
  }
}


export function hdinsightKafkaClusterPrivateLinkConfigurationToHclTerraform(struct?: HdinsightKafkaClusterPrivateLinkConfigurationOutputReference | HdinsightKafkaClusterPrivateLinkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_configuration: {
      value: hdinsightKafkaClusterPrivateLinkConfigurationIpConfigurationToHclTerraform(struct!.ipConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "HdinsightKafkaClusterPrivateLinkConfigurationIpConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterPrivateLinkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterPrivateLinkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ipConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfiguration = this._ipConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterPrivateLinkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupId = undefined;
      this._name = undefined;
      this._ipConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupId = value.groupId;
      this._name = value.name;
      this._ipConfiguration.internalValue = value.ipConfiguration;
    }
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // ip_configuration - computed: false, optional: false, required: true
  private _ipConfiguration = new HdinsightKafkaClusterPrivateLinkConfigurationIpConfigurationOutputReference(this, "ip_configuration");
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public putIpConfiguration(value: HdinsightKafkaClusterPrivateLinkConfigurationIpConfiguration) {
    this._ipConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration.internalValue;
  }
}
export interface HdinsightKafkaClusterRestProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#security_group_id HdinsightKafkaCluster#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#security_group_name HdinsightKafkaCluster#security_group_name}
  */
  readonly securityGroupName: string;
}

export function hdinsightKafkaClusterRestProxyToTerraform(struct?: HdinsightKafkaClusterRestProxyOutputReference | HdinsightKafkaClusterRestProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
  }
}


export function hdinsightKafkaClusterRestProxyToHclTerraform(struct?: HdinsightKafkaClusterRestProxyOutputReference | HdinsightKafkaClusterRestProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_name: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterRestProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterRestProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._securityGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupName = this._securityGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRestProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupId = undefined;
      this._securityGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupId = value.securityGroupId;
      this._securityGroupName = value.securityGroupName;
    }
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // security_group_name - computed: false, optional: false, required: true
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }
}
export interface HdinsightKafkaClusterRolesHeadNodeScriptActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}
  */
  readonly uri: string;
}

export function hdinsightKafkaClusterRolesHeadNodeScriptActionsToTerraform(struct?: HdinsightKafkaClusterRolesHeadNodeScriptActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.stringToTerraform(struct!.parameters),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function hdinsightKafkaClusterRolesHeadNodeScriptActionsToHclTerraform(struct?: HdinsightKafkaClusterRolesHeadNodeScriptActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HdinsightKafkaClusterRolesHeadNodeScriptActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRolesHeadNodeScriptActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameters = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameters = value.parameters;
      this._uri = value.uri;
    }
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class HdinsightKafkaClusterRolesHeadNodeScriptActionsList extends cdktf.ComplexList {
  public internalValue? : HdinsightKafkaClusterRolesHeadNodeScriptActions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference {
    return new HdinsightKafkaClusterRolesHeadNodeScriptActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HdinsightKafkaClusterRolesHeadNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}
  */
  readonly vmSize: string;
  /**
  * script_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}
  */
  readonly scriptActions?: HdinsightKafkaClusterRolesHeadNodeScriptActions[] | cdktf.IResolvable;
}

export function hdinsightKafkaClusterRolesHeadNodeToTerraform(struct?: HdinsightKafkaClusterRolesHeadNodeOutputReference | HdinsightKafkaClusterRolesHeadNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeys),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    username: cdktf.stringToTerraform(struct!.username),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    script_actions: cdktf.listMapper(hdinsightKafkaClusterRolesHeadNodeScriptActionsToTerraform, true)(struct!.scriptActions),
  }
}


export function hdinsightKafkaClusterRolesHeadNodeToHclTerraform(struct?: HdinsightKafkaClusterRolesHeadNodeOutputReference | HdinsightKafkaClusterRolesHeadNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_size: {
      value: cdktf.stringToHclTerraform(struct!.vmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_actions: {
      value: cdktf.listMapperHcl(hdinsightKafkaClusterRolesHeadNodeScriptActionsToHclTerraform, true)(struct!.scriptActions),
      isBlock: true,
      type: "list",
      storageClassType: "HdinsightKafkaClusterRolesHeadNodeScriptActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterRolesHeadNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterRolesHeadNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    if (this._scriptActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptActions = this._scriptActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRolesHeadNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._sshKeys = undefined;
      this._subnetId = undefined;
      this._username = undefined;
      this._virtualNetworkId = undefined;
      this._vmSize = undefined;
      this._scriptActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._sshKeys = value.sshKeys;
      this._subnetId = value.subnetId;
      this._username = value.username;
      this._virtualNetworkId = value.virtualNetworkId;
      this._vmSize = value.vmSize;
      this._scriptActions.internalValue = value.scriptActions;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }

  // script_actions - computed: false, optional: true, required: false
  private _scriptActions = new HdinsightKafkaClusterRolesHeadNodeScriptActionsList(this, "script_actions", false);
  public get scriptActions() {
    return this._scriptActions;
  }
  public putScriptActions(value: HdinsightKafkaClusterRolesHeadNodeScriptActions[] | cdktf.IResolvable) {
    this._scriptActions.internalValue = value;
  }
  public resetScriptActions() {
    this._scriptActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptActionsInput() {
    return this._scriptActions.internalValue;
  }
}
export interface HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}
  */
  readonly uri: string;
}

export function hdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsToTerraform(struct?: HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.stringToTerraform(struct!.parameters),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function hdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsToHclTerraform(struct?: HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameters = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameters = value.parameters;
      this._uri = value.uri;
    }
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList extends cdktf.ComplexList {
  public internalValue? : HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference {
    return new HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HdinsightKafkaClusterRolesKafkaManagementNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}
  */
  readonly vmSize: string;
  /**
  * script_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}
  */
  readonly scriptActions?: HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions[] | cdktf.IResolvable;
}

export function hdinsightKafkaClusterRolesKafkaManagementNodeToTerraform(struct?: HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference | HdinsightKafkaClusterRolesKafkaManagementNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeys),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    script_actions: cdktf.listMapper(hdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsToTerraform, true)(struct!.scriptActions),
  }
}


export function hdinsightKafkaClusterRolesKafkaManagementNodeToHclTerraform(struct?: HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference | HdinsightKafkaClusterRolesKafkaManagementNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_size: {
      value: cdktf.stringToHclTerraform(struct!.vmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_actions: {
      value: cdktf.listMapperHcl(hdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsToHclTerraform, true)(struct!.scriptActions),
      isBlock: true,
      type: "list",
      storageClassType: "HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterRolesKafkaManagementNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    if (this._scriptActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptActions = this._scriptActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRolesKafkaManagementNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._sshKeys = undefined;
      this._subnetId = undefined;
      this._virtualNetworkId = undefined;
      this._vmSize = undefined;
      this._scriptActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._sshKeys = value.sshKeys;
      this._subnetId = value.subnetId;
      this._virtualNetworkId = value.virtualNetworkId;
      this._vmSize = value.vmSize;
      this._scriptActions.internalValue = value.scriptActions;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
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

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }

  // script_actions - computed: false, optional: true, required: false
  private _scriptActions = new HdinsightKafkaClusterRolesKafkaManagementNodeScriptActionsList(this, "script_actions", false);
  public get scriptActions() {
    return this._scriptActions;
  }
  public putScriptActions(value: HdinsightKafkaClusterRolesKafkaManagementNodeScriptActions[] | cdktf.IResolvable) {
    this._scriptActions.internalValue = value;
  }
  public resetScriptActions() {
    this._scriptActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptActionsInput() {
    return this._scriptActions.internalValue;
  }
}
export interface HdinsightKafkaClusterRolesWorkerNodeScriptActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}
  */
  readonly uri: string;
}

export function hdinsightKafkaClusterRolesWorkerNodeScriptActionsToTerraform(struct?: HdinsightKafkaClusterRolesWorkerNodeScriptActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.stringToTerraform(struct!.parameters),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function hdinsightKafkaClusterRolesWorkerNodeScriptActionsToHclTerraform(struct?: HdinsightKafkaClusterRolesWorkerNodeScriptActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HdinsightKafkaClusterRolesWorkerNodeScriptActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRolesWorkerNodeScriptActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameters = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameters = value.parameters;
      this._uri = value.uri;
    }
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class HdinsightKafkaClusterRolesWorkerNodeScriptActionsList extends cdktf.ComplexList {
  public internalValue? : HdinsightKafkaClusterRolesWorkerNodeScriptActions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference {
    return new HdinsightKafkaClusterRolesWorkerNodeScriptActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HdinsightKafkaClusterRolesWorkerNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#number_of_disks_per_node HdinsightKafkaCluster#number_of_disks_per_node}
  */
  readonly numberOfDisksPerNode: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#target_instance_count HdinsightKafkaCluster#target_instance_count}
  */
  readonly targetInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}
  */
  readonly vmSize: string;
  /**
  * script_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}
  */
  readonly scriptActions?: HdinsightKafkaClusterRolesWorkerNodeScriptActions[] | cdktf.IResolvable;
}

export function hdinsightKafkaClusterRolesWorkerNodeToTerraform(struct?: HdinsightKafkaClusterRolesWorkerNodeOutputReference | HdinsightKafkaClusterRolesWorkerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_disks_per_node: cdktf.numberToTerraform(struct!.numberOfDisksPerNode),
    password: cdktf.stringToTerraform(struct!.password),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeys),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    target_instance_count: cdktf.numberToTerraform(struct!.targetInstanceCount),
    username: cdktf.stringToTerraform(struct!.username),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    script_actions: cdktf.listMapper(hdinsightKafkaClusterRolesWorkerNodeScriptActionsToTerraform, true)(struct!.scriptActions),
  }
}


export function hdinsightKafkaClusterRolesWorkerNodeToHclTerraform(struct?: HdinsightKafkaClusterRolesWorkerNodeOutputReference | HdinsightKafkaClusterRolesWorkerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_disks_per_node: {
      value: cdktf.numberToHclTerraform(struct!.numberOfDisksPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.targetInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_size: {
      value: cdktf.stringToHclTerraform(struct!.vmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_actions: {
      value: cdktf.listMapperHcl(hdinsightKafkaClusterRolesWorkerNodeScriptActionsToHclTerraform, true)(struct!.scriptActions),
      isBlock: true,
      type: "list",
      storageClassType: "HdinsightKafkaClusterRolesWorkerNodeScriptActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterRolesWorkerNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterRolesWorkerNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfDisksPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfDisksPerNode = this._numberOfDisksPerNode;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._targetInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetInstanceCount = this._targetInstanceCount;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    if (this._scriptActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptActions = this._scriptActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRolesWorkerNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numberOfDisksPerNode = undefined;
      this._password = undefined;
      this._sshKeys = undefined;
      this._subnetId = undefined;
      this._targetInstanceCount = undefined;
      this._username = undefined;
      this._virtualNetworkId = undefined;
      this._vmSize = undefined;
      this._scriptActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numberOfDisksPerNode = value.numberOfDisksPerNode;
      this._password = value.password;
      this._sshKeys = value.sshKeys;
      this._subnetId = value.subnetId;
      this._targetInstanceCount = value.targetInstanceCount;
      this._username = value.username;
      this._virtualNetworkId = value.virtualNetworkId;
      this._vmSize = value.vmSize;
      this._scriptActions.internalValue = value.scriptActions;
    }
  }

  // number_of_disks_per_node - computed: false, optional: false, required: true
  private _numberOfDisksPerNode?: number; 
  public get numberOfDisksPerNode() {
    return this.getNumberAttribute('number_of_disks_per_node');
  }
  public set numberOfDisksPerNode(value: number) {
    this._numberOfDisksPerNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDisksPerNodeInput() {
    return this._numberOfDisksPerNode;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
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

  // target_instance_count - computed: false, optional: false, required: true
  private _targetInstanceCount?: number; 
  public get targetInstanceCount() {
    return this.getNumberAttribute('target_instance_count');
  }
  public set targetInstanceCount(value: number) {
    this._targetInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInstanceCountInput() {
    return this._targetInstanceCount;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }

  // script_actions - computed: false, optional: true, required: false
  private _scriptActions = new HdinsightKafkaClusterRolesWorkerNodeScriptActionsList(this, "script_actions", false);
  public get scriptActions() {
    return this._scriptActions;
  }
  public putScriptActions(value: HdinsightKafkaClusterRolesWorkerNodeScriptActions[] | cdktf.IResolvable) {
    this._scriptActions.internalValue = value;
  }
  public resetScriptActions() {
    this._scriptActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptActionsInput() {
    return this._scriptActions.internalValue;
  }
}
export interface HdinsightKafkaClusterRolesZookeeperNodeScriptActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#parameters HdinsightKafkaCluster#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#uri HdinsightKafkaCluster#uri}
  */
  readonly uri: string;
}

export function hdinsightKafkaClusterRolesZookeeperNodeScriptActionsToTerraform(struct?: HdinsightKafkaClusterRolesZookeeperNodeScriptActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.stringToTerraform(struct!.parameters),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function hdinsightKafkaClusterRolesZookeeperNodeScriptActionsToHclTerraform(struct?: HdinsightKafkaClusterRolesZookeeperNodeScriptActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HdinsightKafkaClusterRolesZookeeperNodeScriptActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRolesZookeeperNodeScriptActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameters = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameters = value.parameters;
      this._uri = value.uri;
    }
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList extends cdktf.ComplexList {
  public internalValue? : HdinsightKafkaClusterRolesZookeeperNodeScriptActions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference {
    return new HdinsightKafkaClusterRolesZookeeperNodeScriptActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HdinsightKafkaClusterRolesZookeeperNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}
  */
  readonly vmSize: string;
  /**
  * script_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#script_actions HdinsightKafkaCluster#script_actions}
  */
  readonly scriptActions?: HdinsightKafkaClusterRolesZookeeperNodeScriptActions[] | cdktf.IResolvable;
}

export function hdinsightKafkaClusterRolesZookeeperNodeToTerraform(struct?: HdinsightKafkaClusterRolesZookeeperNodeOutputReference | HdinsightKafkaClusterRolesZookeeperNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeys),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    username: cdktf.stringToTerraform(struct!.username),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    script_actions: cdktf.listMapper(hdinsightKafkaClusterRolesZookeeperNodeScriptActionsToTerraform, true)(struct!.scriptActions),
  }
}


export function hdinsightKafkaClusterRolesZookeeperNodeToHclTerraform(struct?: HdinsightKafkaClusterRolesZookeeperNodeOutputReference | HdinsightKafkaClusterRolesZookeeperNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_size: {
      value: cdktf.stringToHclTerraform(struct!.vmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_actions: {
      value: cdktf.listMapperHcl(hdinsightKafkaClusterRolesZookeeperNodeScriptActionsToHclTerraform, true)(struct!.scriptActions),
      isBlock: true,
      type: "list",
      storageClassType: "HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterRolesZookeeperNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterRolesZookeeperNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    if (this._scriptActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptActions = this._scriptActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRolesZookeeperNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._sshKeys = undefined;
      this._subnetId = undefined;
      this._username = undefined;
      this._virtualNetworkId = undefined;
      this._vmSize = undefined;
      this._scriptActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._sshKeys = value.sshKeys;
      this._subnetId = value.subnetId;
      this._username = value.username;
      this._virtualNetworkId = value.virtualNetworkId;
      this._vmSize = value.vmSize;
      this._scriptActions.internalValue = value.scriptActions;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }

  // script_actions - computed: false, optional: true, required: false
  private _scriptActions = new HdinsightKafkaClusterRolesZookeeperNodeScriptActionsList(this, "script_actions", false);
  public get scriptActions() {
    return this._scriptActions;
  }
  public putScriptActions(value: HdinsightKafkaClusterRolesZookeeperNodeScriptActions[] | cdktf.IResolvable) {
    this._scriptActions.internalValue = value;
  }
  public resetScriptActions() {
    this._scriptActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptActionsInput() {
    return this._scriptActions.internalValue;
  }
}
export interface HdinsightKafkaClusterRoles {
  /**
  * head_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#head_node HdinsightKafkaCluster#head_node}
  */
  readonly headNode: HdinsightKafkaClusterRolesHeadNode;
  /**
  * kafka_management_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#kafka_management_node HdinsightKafkaCluster#kafka_management_node}
  */
  readonly kafkaManagementNode?: HdinsightKafkaClusterRolesKafkaManagementNode;
  /**
  * worker_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#worker_node HdinsightKafkaCluster#worker_node}
  */
  readonly workerNode: HdinsightKafkaClusterRolesWorkerNode;
  /**
  * zookeeper_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#zookeeper_node HdinsightKafkaCluster#zookeeper_node}
  */
  readonly zookeeperNode: HdinsightKafkaClusterRolesZookeeperNode;
}

export function hdinsightKafkaClusterRolesToTerraform(struct?: HdinsightKafkaClusterRolesOutputReference | HdinsightKafkaClusterRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    head_node: hdinsightKafkaClusterRolesHeadNodeToTerraform(struct!.headNode),
    kafka_management_node: hdinsightKafkaClusterRolesKafkaManagementNodeToTerraform(struct!.kafkaManagementNode),
    worker_node: hdinsightKafkaClusterRolesWorkerNodeToTerraform(struct!.workerNode),
    zookeeper_node: hdinsightKafkaClusterRolesZookeeperNodeToTerraform(struct!.zookeeperNode),
  }
}


export function hdinsightKafkaClusterRolesToHclTerraform(struct?: HdinsightKafkaClusterRolesOutputReference | HdinsightKafkaClusterRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    head_node: {
      value: hdinsightKafkaClusterRolesHeadNodeToHclTerraform(struct!.headNode),
      isBlock: true,
      type: "list",
      storageClassType: "HdinsightKafkaClusterRolesHeadNodeList",
    },
    kafka_management_node: {
      value: hdinsightKafkaClusterRolesKafkaManagementNodeToHclTerraform(struct!.kafkaManagementNode),
      isBlock: true,
      type: "list",
      storageClassType: "HdinsightKafkaClusterRolesKafkaManagementNodeList",
    },
    worker_node: {
      value: hdinsightKafkaClusterRolesWorkerNodeToHclTerraform(struct!.workerNode),
      isBlock: true,
      type: "list",
      storageClassType: "HdinsightKafkaClusterRolesWorkerNodeList",
    },
    zookeeper_node: {
      value: hdinsightKafkaClusterRolesZookeeperNodeToHclTerraform(struct!.zookeeperNode),
      isBlock: true,
      type: "list",
      storageClassType: "HdinsightKafkaClusterRolesZookeeperNodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headNode = this._headNode?.internalValue;
    }
    if (this._kafkaManagementNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaManagementNode = this._kafkaManagementNode?.internalValue;
    }
    if (this._workerNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerNode = this._workerNode?.internalValue;
    }
    if (this._zookeeperNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperNode = this._zookeeperNode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headNode.internalValue = undefined;
      this._kafkaManagementNode.internalValue = undefined;
      this._workerNode.internalValue = undefined;
      this._zookeeperNode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headNode.internalValue = value.headNode;
      this._kafkaManagementNode.internalValue = value.kafkaManagementNode;
      this._workerNode.internalValue = value.workerNode;
      this._zookeeperNode.internalValue = value.zookeeperNode;
    }
  }

  // head_node - computed: false, optional: false, required: true
  private _headNode = new HdinsightKafkaClusterRolesHeadNodeOutputReference(this, "head_node");
  public get headNode() {
    return this._headNode;
  }
  public putHeadNode(value: HdinsightKafkaClusterRolesHeadNode) {
    this._headNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headNodeInput() {
    return this._headNode.internalValue;
  }

  // kafka_management_node - computed: false, optional: true, required: false
  private _kafkaManagementNode = new HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference(this, "kafka_management_node");
  public get kafkaManagementNode() {
    return this._kafkaManagementNode;
  }
  public putKafkaManagementNode(value: HdinsightKafkaClusterRolesKafkaManagementNode) {
    this._kafkaManagementNode.internalValue = value;
  }
  public resetKafkaManagementNode() {
    this._kafkaManagementNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaManagementNodeInput() {
    return this._kafkaManagementNode.internalValue;
  }

  // worker_node - computed: false, optional: false, required: true
  private _workerNode = new HdinsightKafkaClusterRolesWorkerNodeOutputReference(this, "worker_node");
  public get workerNode() {
    return this._workerNode;
  }
  public putWorkerNode(value: HdinsightKafkaClusterRolesWorkerNode) {
    this._workerNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeInput() {
    return this._workerNode.internalValue;
  }

  // zookeeper_node - computed: false, optional: false, required: true
  private _zookeeperNode = new HdinsightKafkaClusterRolesZookeeperNodeOutputReference(this, "zookeeper_node");
  public get zookeeperNode() {
    return this._zookeeperNode;
  }
  public putZookeeperNode(value: HdinsightKafkaClusterRolesZookeeperNode) {
    this._zookeeperNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperNodeInput() {
    return this._zookeeperNode.internalValue;
  }
}
export interface HdinsightKafkaClusterSecurityProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#aadds_resource_id HdinsightKafkaCluster#aadds_resource_id}
  */
  readonly aaddsResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#cluster_users_group_dns HdinsightKafkaCluster#cluster_users_group_dns}
  */
  readonly clusterUsersGroupDns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#domain_name HdinsightKafkaCluster#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#domain_user_password HdinsightKafkaCluster#domain_user_password}
  */
  readonly domainUserPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#domain_username HdinsightKafkaCluster#domain_username}
  */
  readonly domainUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#ldaps_urls HdinsightKafkaCluster#ldaps_urls}
  */
  readonly ldapsUrls: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#msi_resource_id HdinsightKafkaCluster#msi_resource_id}
  */
  readonly msiResourceId: string;
}

export function hdinsightKafkaClusterSecurityProfileToTerraform(struct?: HdinsightKafkaClusterSecurityProfileOutputReference | HdinsightKafkaClusterSecurityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aadds_resource_id: cdktf.stringToTerraform(struct!.aaddsResourceId),
    cluster_users_group_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterUsersGroupDns),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_user_password: cdktf.stringToTerraform(struct!.domainUserPassword),
    domain_username: cdktf.stringToTerraform(struct!.domainUsername),
    ldaps_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ldapsUrls),
    msi_resource_id: cdktf.stringToTerraform(struct!.msiResourceId),
  }
}


export function hdinsightKafkaClusterSecurityProfileToHclTerraform(struct?: HdinsightKafkaClusterSecurityProfileOutputReference | HdinsightKafkaClusterSecurityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aadds_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.aaddsResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_users_group_dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterUsersGroupDns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_user_password: {
      value: cdktf.stringToHclTerraform(struct!.domainUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_username: {
      value: cdktf.stringToHclTerraform(struct!.domainUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldaps_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ldapsUrls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    msi_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.msiResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterSecurityProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterSecurityProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aaddsResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaddsResourceId = this._aaddsResourceId;
    }
    if (this._clusterUsersGroupDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterUsersGroupDns = this._clusterUsersGroupDns;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._domainUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUserPassword = this._domainUserPassword;
    }
    if (this._domainUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUsername = this._domainUsername;
    }
    if (this._ldapsUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapsUrls = this._ldapsUrls;
    }
    if (this._msiResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.msiResourceId = this._msiResourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterSecurityProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aaddsResourceId = undefined;
      this._clusterUsersGroupDns = undefined;
      this._domainName = undefined;
      this._domainUserPassword = undefined;
      this._domainUsername = undefined;
      this._ldapsUrls = undefined;
      this._msiResourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aaddsResourceId = value.aaddsResourceId;
      this._clusterUsersGroupDns = value.clusterUsersGroupDns;
      this._domainName = value.domainName;
      this._domainUserPassword = value.domainUserPassword;
      this._domainUsername = value.domainUsername;
      this._ldapsUrls = value.ldapsUrls;
      this._msiResourceId = value.msiResourceId;
    }
  }

  // aadds_resource_id - computed: false, optional: false, required: true
  private _aaddsResourceId?: string; 
  public get aaddsResourceId() {
    return this.getStringAttribute('aadds_resource_id');
  }
  public set aaddsResourceId(value: string) {
    this._aaddsResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aaddsResourceIdInput() {
    return this._aaddsResourceId;
  }

  // cluster_users_group_dns - computed: false, optional: true, required: false
  private _clusterUsersGroupDns?: string[]; 
  public get clusterUsersGroupDns() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster_users_group_dns'));
  }
  public set clusterUsersGroupDns(value: string[]) {
    this._clusterUsersGroupDns = value;
  }
  public resetClusterUsersGroupDns() {
    this._clusterUsersGroupDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUsersGroupDnsInput() {
    return this._clusterUsersGroupDns;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_user_password - computed: false, optional: false, required: true
  private _domainUserPassword?: string; 
  public get domainUserPassword() {
    return this.getStringAttribute('domain_user_password');
  }
  public set domainUserPassword(value: string) {
    this._domainUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUserPasswordInput() {
    return this._domainUserPassword;
  }

  // domain_username - computed: false, optional: false, required: true
  private _domainUsername?: string; 
  public get domainUsername() {
    return this.getStringAttribute('domain_username');
  }
  public set domainUsername(value: string) {
    this._domainUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUsernameInput() {
    return this._domainUsername;
  }

  // ldaps_urls - computed: false, optional: false, required: true
  private _ldapsUrls?: string[]; 
  public get ldapsUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('ldaps_urls'));
  }
  public set ldapsUrls(value: string[]) {
    this._ldapsUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsUrlsInput() {
    return this._ldapsUrls;
  }

  // msi_resource_id - computed: false, optional: false, required: true
  private _msiResourceId?: string; 
  public get msiResourceId() {
    return this.getStringAttribute('msi_resource_id');
  }
  public set msiResourceId(value: string) {
    this._msiResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msiResourceIdInput() {
    return this._msiResourceId;
  }
}
export interface HdinsightKafkaClusterStorageAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}
  */
  readonly isDefault: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#storage_account_key HdinsightKafkaCluster#storage_account_key}
  */
  readonly storageAccountKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#storage_container_id HdinsightKafkaCluster#storage_container_id}
  */
  readonly storageContainerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}
  */
  readonly storageResourceId?: string;
}

export function hdinsightKafkaClusterStorageAccountToTerraform(struct?: HdinsightKafkaClusterStorageAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_container_id: cdktf.stringToTerraform(struct!.storageContainerId),
    storage_resource_id: cdktf.stringToTerraform(struct!.storageResourceId),
  }
}


export function hdinsightKafkaClusterStorageAccountToHclTerraform(struct?: HdinsightKafkaClusterStorageAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_account_key: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_container_id: {
      value: cdktf.stringToHclTerraform(struct!.storageContainerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.storageResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterStorageAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HdinsightKafkaClusterStorageAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._storageAccountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountKey = this._storageAccountKey;
    }
    if (this._storageContainerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageContainerId = this._storageContainerId;
    }
    if (this._storageResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageResourceId = this._storageResourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterStorageAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isDefault = undefined;
      this._storageAccountKey = undefined;
      this._storageContainerId = undefined;
      this._storageResourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isDefault = value.isDefault;
      this._storageAccountKey = value.storageAccountKey;
      this._storageContainerId = value.storageContainerId;
      this._storageResourceId = value.storageResourceId;
    }
  }

  // is_default - computed: false, optional: false, required: true
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // storage_account_key - computed: false, optional: false, required: true
  private _storageAccountKey?: string; 
  public get storageAccountKey() {
    return this.getStringAttribute('storage_account_key');
  }
  public set storageAccountKey(value: string) {
    this._storageAccountKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountKeyInput() {
    return this._storageAccountKey;
  }

  // storage_container_id - computed: false, optional: false, required: true
  private _storageContainerId?: string; 
  public get storageContainerId() {
    return this.getStringAttribute('storage_container_id');
  }
  public set storageContainerId(value: string) {
    this._storageContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerIdInput() {
    return this._storageContainerId;
  }

  // storage_resource_id - computed: false, optional: true, required: false
  private _storageResourceId?: string; 
  public get storageResourceId() {
    return this.getStringAttribute('storage_resource_id');
  }
  public set storageResourceId(value: string) {
    this._storageResourceId = value;
  }
  public resetStorageResourceId() {
    this._storageResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageResourceIdInput() {
    return this._storageResourceId;
  }
}

export class HdinsightKafkaClusterStorageAccountList extends cdktf.ComplexList {
  public internalValue? : HdinsightKafkaClusterStorageAccount[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HdinsightKafkaClusterStorageAccountOutputReference {
    return new HdinsightKafkaClusterStorageAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HdinsightKafkaClusterStorageAccountGen2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#filesystem_id HdinsightKafkaCluster#filesystem_id}
  */
  readonly filesystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}
  */
  readonly isDefault: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#managed_identity_resource_id HdinsightKafkaCluster#managed_identity_resource_id}
  */
  readonly managedIdentityResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}
  */
  readonly storageResourceId: string;
}

export function hdinsightKafkaClusterStorageAccountGen2ToTerraform(struct?: HdinsightKafkaClusterStorageAccountGen2OutputReference | HdinsightKafkaClusterStorageAccountGen2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filesystem_id: cdktf.stringToTerraform(struct!.filesystemId),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    managed_identity_resource_id: cdktf.stringToTerraform(struct!.managedIdentityResourceId),
    storage_resource_id: cdktf.stringToTerraform(struct!.storageResourceId),
  }
}


export function hdinsightKafkaClusterStorageAccountGen2ToHclTerraform(struct?: HdinsightKafkaClusterStorageAccountGen2OutputReference | HdinsightKafkaClusterStorageAccountGen2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filesystem_id: {
      value: cdktf.stringToHclTerraform(struct!.filesystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    managed_identity_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.managedIdentityResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.storageResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HdinsightKafkaClusterStorageAccountGen2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HdinsightKafkaClusterStorageAccountGen2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filesystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystemId = this._filesystemId;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._managedIdentityResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedIdentityResourceId = this._managedIdentityResourceId;
    }
    if (this._storageResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageResourceId = this._storageResourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterStorageAccountGen2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filesystemId = undefined;
      this._isDefault = undefined;
      this._managedIdentityResourceId = undefined;
      this._storageResourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filesystemId = value.filesystemId;
      this._isDefault = value.isDefault;
      this._managedIdentityResourceId = value.managedIdentityResourceId;
      this._storageResourceId = value.storageResourceId;
    }
  }

  // filesystem_id - computed: false, optional: false, required: true
  private _filesystemId?: string; 
  public get filesystemId() {
    return this.getStringAttribute('filesystem_id');
  }
  public set filesystemId(value: string) {
    this._filesystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemIdInput() {
    return this._filesystemId;
  }

  // is_default - computed: false, optional: false, required: true
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // managed_identity_resource_id - computed: false, optional: false, required: true
  private _managedIdentityResourceId?: string; 
  public get managedIdentityResourceId() {
    return this.getStringAttribute('managed_identity_resource_id');
  }
  public set managedIdentityResourceId(value: string) {
    this._managedIdentityResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedIdentityResourceIdInput() {
    return this._managedIdentityResourceId;
  }

  // storage_resource_id - computed: false, optional: false, required: true
  private _storageResourceId?: string; 
  public get storageResourceId() {
    return this.getStringAttribute('storage_resource_id');
  }
  public set storageResourceId(value: string) {
    this._storageResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageResourceIdInput() {
    return this._storageResourceId;
  }
}
export interface HdinsightKafkaClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#create HdinsightKafkaCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#delete HdinsightKafkaCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#read HdinsightKafkaCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#update HdinsightKafkaCluster#update}
  */
  readonly update?: string;
}

export function hdinsightKafkaClusterTimeoutsToTerraform(struct?: HdinsightKafkaClusterTimeouts | cdktf.IResolvable): any {
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


export function hdinsightKafkaClusterTimeoutsToHclTerraform(struct?: HdinsightKafkaClusterTimeouts | cdktf.IResolvable): any {
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

export class HdinsightKafkaClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HdinsightKafkaClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HdinsightKafkaClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster azurerm_hdinsight_kafka_cluster}
*/
export class HdinsightKafkaCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_hdinsight_kafka_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HdinsightKafkaCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HdinsightKafkaCluster to import
  * @param importFromId The id of the existing HdinsightKafkaCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HdinsightKafkaCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_hdinsight_kafka_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hdinsight_kafka_cluster azurerm_hdinsight_kafka_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HdinsightKafkaClusterConfig
  */
  public constructor(scope: Construct, id: string, config: HdinsightKafkaClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hdinsight_kafka_cluster',
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
    this._clusterVersion = config.clusterVersion;
    this._encryptionInTransitEnabled = config.encryptionInTransitEnabled;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._tier = config.tier;
    this._tlsMinVersion = config.tlsMinVersion;
    this._componentVersion.internalValue = config.componentVersion;
    this._computeIsolation.internalValue = config.computeIsolation;
    this._diskEncryption.internalValue = config.diskEncryption;
    this._extension.internalValue = config.extension;
    this._gateway.internalValue = config.gateway;
    this._metastores.internalValue = config.metastores;
    this._monitor.internalValue = config.monitor;
    this._network.internalValue = config.network;
    this._privateLinkConfiguration.internalValue = config.privateLinkConfiguration;
    this._restProxy.internalValue = config.restProxy;
    this._roles.internalValue = config.roles;
    this._securityProfile.internalValue = config.securityProfile;
    this._storageAccount.internalValue = config.storageAccount;
    this._storageAccountGen2.internalValue = config.storageAccountGen2;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_version - computed: false, optional: false, required: true
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
  }

  // encryption_in_transit_enabled - computed: false, optional: true, required: false
  private _encryptionInTransitEnabled?: boolean | cdktf.IResolvable; 
  public get encryptionInTransitEnabled() {
    return this.getBooleanAttribute('encryption_in_transit_enabled');
  }
  public set encryptionInTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._encryptionInTransitEnabled = value;
  }
  public resetEncryptionInTransitEnabled() {
    this._encryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInTransitEnabledInput() {
    return this._encryptionInTransitEnabled;
  }

  // https_endpoint - computed: true, optional: false, required: false
  public get httpsEndpoint() {
    return this.getStringAttribute('https_endpoint');
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

  // kafka_rest_proxy_endpoint - computed: true, optional: false, required: false
  public get kafkaRestProxyEndpoint() {
    return this.getStringAttribute('kafka_rest_proxy_endpoint');
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

  // ssh_endpoint - computed: true, optional: false, required: false
  public get sshEndpoint() {
    return this.getStringAttribute('ssh_endpoint');
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

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // tls_min_version - computed: false, optional: true, required: false
  private _tlsMinVersion?: string; 
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }
  public set tlsMinVersion(value: string) {
    this._tlsMinVersion = value;
  }
  public resetTlsMinVersion() {
    this._tlsMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMinVersionInput() {
    return this._tlsMinVersion;
  }

  // component_version - computed: false, optional: false, required: true
  private _componentVersion = new HdinsightKafkaClusterComponentVersionOutputReference(this, "component_version");
  public get componentVersion() {
    return this._componentVersion;
  }
  public putComponentVersion(value: HdinsightKafkaClusterComponentVersion) {
    this._componentVersion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentVersionInput() {
    return this._componentVersion.internalValue;
  }

  // compute_isolation - computed: false, optional: true, required: false
  private _computeIsolation = new HdinsightKafkaClusterComputeIsolationOutputReference(this, "compute_isolation");
  public get computeIsolation() {
    return this._computeIsolation;
  }
  public putComputeIsolation(value: HdinsightKafkaClusterComputeIsolation) {
    this._computeIsolation.internalValue = value;
  }
  public resetComputeIsolation() {
    this._computeIsolation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeIsolationInput() {
    return this._computeIsolation.internalValue;
  }

  // disk_encryption - computed: false, optional: true, required: false
  private _diskEncryption = new HdinsightKafkaClusterDiskEncryptionList(this, "disk_encryption", false);
  public get diskEncryption() {
    return this._diskEncryption;
  }
  public putDiskEncryption(value: HdinsightKafkaClusterDiskEncryption[] | cdktf.IResolvable) {
    this._diskEncryption.internalValue = value;
  }
  public resetDiskEncryption() {
    this._diskEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionInput() {
    return this._diskEncryption.internalValue;
  }

  // extension - computed: false, optional: true, required: false
  private _extension = new HdinsightKafkaClusterExtensionOutputReference(this, "extension");
  public get extension() {
    return this._extension;
  }
  public putExtension(value: HdinsightKafkaClusterExtension) {
    this._extension.internalValue = value;
  }
  public resetExtension() {
    this._extension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension.internalValue;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway = new HdinsightKafkaClusterGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: HdinsightKafkaClusterGateway) {
    this._gateway.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // metastores - computed: false, optional: true, required: false
  private _metastores = new HdinsightKafkaClusterMetastoresOutputReference(this, "metastores");
  public get metastores() {
    return this._metastores;
  }
  public putMetastores(value: HdinsightKafkaClusterMetastores) {
    this._metastores.internalValue = value;
  }
  public resetMetastores() {
    this._metastores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoresInput() {
    return this._metastores.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new HdinsightKafkaClusterMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: HdinsightKafkaClusterMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new HdinsightKafkaClusterNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: HdinsightKafkaClusterNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // private_link_configuration - computed: false, optional: true, required: false
  private _privateLinkConfiguration = new HdinsightKafkaClusterPrivateLinkConfigurationOutputReference(this, "private_link_configuration");
  public get privateLinkConfiguration() {
    return this._privateLinkConfiguration;
  }
  public putPrivateLinkConfiguration(value: HdinsightKafkaClusterPrivateLinkConfiguration) {
    this._privateLinkConfiguration.internalValue = value;
  }
  public resetPrivateLinkConfiguration() {
    this._privateLinkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkConfigurationInput() {
    return this._privateLinkConfiguration.internalValue;
  }

  // rest_proxy - computed: false, optional: true, required: false
  private _restProxy = new HdinsightKafkaClusterRestProxyOutputReference(this, "rest_proxy");
  public get restProxy() {
    return this._restProxy;
  }
  public putRestProxy(value: HdinsightKafkaClusterRestProxy) {
    this._restProxy.internalValue = value;
  }
  public resetRestProxy() {
    this._restProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restProxyInput() {
    return this._restProxy.internalValue;
  }

  // roles - computed: false, optional: false, required: true
  private _roles = new HdinsightKafkaClusterRolesOutputReference(this, "roles");
  public get roles() {
    return this._roles;
  }
  public putRoles(value: HdinsightKafkaClusterRoles) {
    this._roles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // security_profile - computed: false, optional: true, required: false
  private _securityProfile = new HdinsightKafkaClusterSecurityProfileOutputReference(this, "security_profile");
  public get securityProfile() {
    return this._securityProfile;
  }
  public putSecurityProfile(value: HdinsightKafkaClusterSecurityProfile) {
    this._securityProfile.internalValue = value;
  }
  public resetSecurityProfile() {
    this._securityProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileInput() {
    return this._securityProfile.internalValue;
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount = new HdinsightKafkaClusterStorageAccountList(this, "storage_account", false);
  public get storageAccount() {
    return this._storageAccount;
  }
  public putStorageAccount(value: HdinsightKafkaClusterStorageAccount[] | cdktf.IResolvable) {
    this._storageAccount.internalValue = value;
  }
  public resetStorageAccount() {
    this._storageAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount.internalValue;
  }

  // storage_account_gen2 - computed: false, optional: true, required: false
  private _storageAccountGen2 = new HdinsightKafkaClusterStorageAccountGen2OutputReference(this, "storage_account_gen2");
  public get storageAccountGen2() {
    return this._storageAccountGen2;
  }
  public putStorageAccountGen2(value: HdinsightKafkaClusterStorageAccountGen2) {
    this._storageAccountGen2.internalValue = value;
  }
  public resetStorageAccountGen2() {
    this._storageAccountGen2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountGen2Input() {
    return this._storageAccountGen2.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HdinsightKafkaClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HdinsightKafkaClusterTimeouts) {
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
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      encryption_in_transit_enabled: cdktf.booleanToTerraform(this._encryptionInTransitEnabled),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tier: cdktf.stringToTerraform(this._tier),
      tls_min_version: cdktf.stringToTerraform(this._tlsMinVersion),
      component_version: hdinsightKafkaClusterComponentVersionToTerraform(this._componentVersion.internalValue),
      compute_isolation: hdinsightKafkaClusterComputeIsolationToTerraform(this._computeIsolation.internalValue),
      disk_encryption: cdktf.listMapper(hdinsightKafkaClusterDiskEncryptionToTerraform, true)(this._diskEncryption.internalValue),
      extension: hdinsightKafkaClusterExtensionToTerraform(this._extension.internalValue),
      gateway: hdinsightKafkaClusterGatewayToTerraform(this._gateway.internalValue),
      metastores: hdinsightKafkaClusterMetastoresToTerraform(this._metastores.internalValue),
      monitor: hdinsightKafkaClusterMonitorToTerraform(this._monitor.internalValue),
      network: hdinsightKafkaClusterNetworkToTerraform(this._network.internalValue),
      private_link_configuration: hdinsightKafkaClusterPrivateLinkConfigurationToTerraform(this._privateLinkConfiguration.internalValue),
      rest_proxy: hdinsightKafkaClusterRestProxyToTerraform(this._restProxy.internalValue),
      roles: hdinsightKafkaClusterRolesToTerraform(this._roles.internalValue),
      security_profile: hdinsightKafkaClusterSecurityProfileToTerraform(this._securityProfile.internalValue),
      storage_account: cdktf.listMapper(hdinsightKafkaClusterStorageAccountToTerraform, true)(this._storageAccount.internalValue),
      storage_account_gen2: hdinsightKafkaClusterStorageAccountGen2ToTerraform(this._storageAccountGen2.internalValue),
      timeouts: hdinsightKafkaClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_version: {
        value: cdktf.stringToHclTerraform(this._clusterVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_in_transit_enabled: {
        value: cdktf.booleanToHclTerraform(this._encryptionInTransitEnabled),
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
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
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_min_version: {
        value: cdktf.stringToHclTerraform(this._tlsMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component_version: {
        value: hdinsightKafkaClusterComponentVersionToHclTerraform(this._componentVersion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HdinsightKafkaClusterComponentVersionList",
      },
      compute_isolation: {
        value: hdinsightKafkaClusterComputeIsolationToHclTerraform(this._computeIsolation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HdinsightKafkaClusterComputeIsolationList",
      },
      disk_encryption: {
        value: cdktf.listMapperHcl(hdinsightKafkaClusterDiskEncryptionToHclTerraform, true)(this._diskEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HdinsightKafkaClusterDiskEncryptionList",
      },
      extension: {
        value: hdinsightKafkaClusterExtensionToHclTerraform(this._extension.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HdinsightKafkaClusterExtensionList",
      },
      gateway: {
        value: hdinsightKafkaClusterGatewayToHclTerraform(this._gateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HdinsightKafkaClusterGatewayList",
      },
      metastores: {
        value: hdinsightKafkaClusterMetastoresToHclTerraform(this._metastores.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HdinsightKafkaClusterMetastoresList",
      },
      monitor: {
        value: hdinsightKafkaClusterMonitorToHclTerraform(this._monitor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HdinsightKafkaClusterMonitorList",
      },
      network: {
        value: hdinsightKafkaClusterNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HdinsightKafkaClusterNetworkList",
      },
      private_link_configuration: {
        value: hdinsightKafkaClusterPrivateLinkConfigurationToHclTerraform(this._privateLinkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HdinsightKafkaClusterPrivateLinkConfigurationList",
      },
      rest_proxy: {
        value: hdinsightKafkaClusterRestProxyToHclTerraform(this._restProxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HdinsightKafkaClusterRestProxyList",
      },
      roles: {
        value: hdinsightKafkaClusterRolesToHclTerraform(this._roles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HdinsightKafkaClusterRolesList",
      },
      security_profile: {
        value: hdinsightKafkaClusterSecurityProfileToHclTerraform(this._securityProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HdinsightKafkaClusterSecurityProfileList",
      },
      storage_account: {
        value: cdktf.listMapperHcl(hdinsightKafkaClusterStorageAccountToHclTerraform, true)(this._storageAccount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HdinsightKafkaClusterStorageAccountList",
      },
      storage_account_gen2: {
        value: hdinsightKafkaClusterStorageAccountGen2ToHclTerraform(this._storageAccountGen2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HdinsightKafkaClusterStorageAccountGen2List",
      },
      timeouts: {
        value: hdinsightKafkaClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HdinsightKafkaClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
