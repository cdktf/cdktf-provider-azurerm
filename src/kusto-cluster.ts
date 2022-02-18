// https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#auto_stop_enabled KustoCluster#auto_stop_enabled}
  */
  readonly autoStopEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#disk_encryption_enabled KustoCluster#disk_encryption_enabled}
  */
  readonly diskEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#double_encryption_enabled KustoCluster#double_encryption_enabled}
  */
  readonly doubleEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#enable_auto_stop KustoCluster#enable_auto_stop}
  */
  readonly enableAutoStop?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#enable_disk_encryption KustoCluster#enable_disk_encryption}
  */
  readonly enableDiskEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#enable_purge KustoCluster#enable_purge}
  */
  readonly enablePurge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#enable_streaming_ingest KustoCluster#enable_streaming_ingest}
  */
  readonly enableStreamingIngest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#engine KustoCluster#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#language_extensions KustoCluster#language_extensions}
  */
  readonly languageExtensions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#location KustoCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#name KustoCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#public_network_access_enabled KustoCluster#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#purge_enabled KustoCluster#purge_enabled}
  */
  readonly purgeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#resource_group_name KustoCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#streaming_ingestion_enabled KustoCluster#streaming_ingestion_enabled}
  */
  readonly streamingIngestionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#tags KustoCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#trusted_external_tenants KustoCluster#trusted_external_tenants}
  */
  readonly trustedExternalTenants?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#zones KustoCluster#zones}
  */
  readonly zones?: string[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#identity KustoCluster#identity}
  */
  readonly identity?: KustoClusterIdentity;
  /**
  * optimized_auto_scale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#optimized_auto_scale KustoCluster#optimized_auto_scale}
  */
  readonly optimizedAutoScale?: KustoClusterOptimizedAutoScale;
  /**
  * sku block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#sku KustoCluster#sku}
  */
  readonly sku: KustoClusterSku;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#timeouts KustoCluster#timeouts}
  */
  readonly timeouts?: KustoClusterTimeouts;
  /**
  * virtual_network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#virtual_network_configuration KustoCluster#virtual_network_configuration}
  */
  readonly virtualNetworkConfiguration?: KustoClusterVirtualNetworkConfiguration;
}
export interface KustoClusterIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#identity_ids KustoCluster#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#type KustoCluster#type}
  */
  readonly type: string;
}

export function kustoClusterIdentityToTerraform(struct?: KustoClusterIdentityOutputReference | KustoClusterIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class KustoClusterIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KustoClusterIdentity | undefined {
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

  public set internalValue(value: KustoClusterIdentity | undefined) {
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
export interface KustoClusterOptimizedAutoScale {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#maximum_instances KustoCluster#maximum_instances}
  */
  readonly maximumInstances: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#minimum_instances KustoCluster#minimum_instances}
  */
  readonly minimumInstances: number;
}

export function kustoClusterOptimizedAutoScaleToTerraform(struct?: KustoClusterOptimizedAutoScaleOutputReference | KustoClusterOptimizedAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_instances: cdktf.numberToTerraform(struct!.maximumInstances),
    minimum_instances: cdktf.numberToTerraform(struct!.minimumInstances),
  }
}

export class KustoClusterOptimizedAutoScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KustoClusterOptimizedAutoScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumInstances = this._maximumInstances;
    }
    if (this._minimumInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumInstances = this._minimumInstances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KustoClusterOptimizedAutoScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumInstances = undefined;
      this._minimumInstances = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumInstances = value.maximumInstances;
      this._minimumInstances = value.minimumInstances;
    }
  }

  // maximum_instances - computed: false, optional: false, required: true
  private _maximumInstances?: number; 
  public get maximumInstances() {
    return this.getNumberAttribute('maximum_instances');
  }
  public set maximumInstances(value: number) {
    this._maximumInstances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInstancesInput() {
    return this._maximumInstances;
  }

  // minimum_instances - computed: false, optional: false, required: true
  private _minimumInstances?: number; 
  public get minimumInstances() {
    return this.getNumberAttribute('minimum_instances');
  }
  public set minimumInstances(value: number) {
    this._minimumInstances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInstancesInput() {
    return this._minimumInstances;
  }
}
export interface KustoClusterSku {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#capacity KustoCluster#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#name KustoCluster#name}
  */
  readonly name: string;
}

export function kustoClusterSkuToTerraform(struct?: KustoClusterSkuOutputReference | KustoClusterSku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class KustoClusterSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KustoClusterSku | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KustoClusterSku | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacity = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacity = value.capacity;
      this._name = value.name;
    }
  }

  // capacity - computed: true, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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
}
export interface KustoClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#create KustoCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#delete KustoCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#read KustoCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#update KustoCluster#update}
  */
  readonly update?: string;
}

export function kustoClusterTimeoutsToTerraform(struct?: KustoClusterTimeoutsOutputReference | KustoClusterTimeouts | cdktf.IResolvable): any {
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

export class KustoClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KustoClusterTimeouts | undefined {
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

  public set internalValue(value: KustoClusterTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface KustoClusterVirtualNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#data_management_public_ip_id KustoCluster#data_management_public_ip_id}
  */
  readonly dataManagementPublicIpId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#engine_public_ip_id KustoCluster#engine_public_ip_id}
  */
  readonly enginePublicIpId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#subnet_id KustoCluster#subnet_id}
  */
  readonly subnetId: string;
}

export function kustoClusterVirtualNetworkConfigurationToTerraform(struct?: KustoClusterVirtualNetworkConfigurationOutputReference | KustoClusterVirtualNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_management_public_ip_id: cdktf.stringToTerraform(struct!.dataManagementPublicIpId),
    engine_public_ip_id: cdktf.stringToTerraform(struct!.enginePublicIpId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export class KustoClusterVirtualNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KustoClusterVirtualNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataManagementPublicIpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataManagementPublicIpId = this._dataManagementPublicIpId;
    }
    if (this._enginePublicIpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.enginePublicIpId = this._enginePublicIpId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KustoClusterVirtualNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataManagementPublicIpId = undefined;
      this._enginePublicIpId = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataManagementPublicIpId = value.dataManagementPublicIpId;
      this._enginePublicIpId = value.enginePublicIpId;
      this._subnetId = value.subnetId;
    }
  }

  // data_management_public_ip_id - computed: false, optional: false, required: true
  private _dataManagementPublicIpId?: string; 
  public get dataManagementPublicIpId() {
    return this.getStringAttribute('data_management_public_ip_id');
  }
  public set dataManagementPublicIpId(value: string) {
    this._dataManagementPublicIpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataManagementPublicIpIdInput() {
    return this._dataManagementPublicIpId;
  }

  // engine_public_ip_id - computed: false, optional: false, required: true
  private _enginePublicIpId?: string; 
  public get enginePublicIpId() {
    return this.getStringAttribute('engine_public_ip_id');
  }
  public set enginePublicIpId(value: string) {
    this._enginePublicIpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enginePublicIpIdInput() {
    return this._enginePublicIpId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster azurerm_kusto_cluster}
*/
export class KustoCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_kusto_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster azurerm_kusto_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KustoClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KustoClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoStopEnabled = config.autoStopEnabled;
    this._diskEncryptionEnabled = config.diskEncryptionEnabled;
    this._doubleEncryptionEnabled = config.doubleEncryptionEnabled;
    this._enableAutoStop = config.enableAutoStop;
    this._enableDiskEncryption = config.enableDiskEncryption;
    this._enablePurge = config.enablePurge;
    this._enableStreamingIngest = config.enableStreamingIngest;
    this._engine = config.engine;
    this._languageExtensions = config.languageExtensions;
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._purgeEnabled = config.purgeEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._streamingIngestionEnabled = config.streamingIngestionEnabled;
    this._tags = config.tags;
    this._trustedExternalTenants = config.trustedExternalTenants;
    this._zones = config.zones;
    this._identity.internalValue = config.identity;
    this._optimizedAutoScale.internalValue = config.optimizedAutoScale;
    this._sku.internalValue = config.sku;
    this._timeouts.internalValue = config.timeouts;
    this._virtualNetworkConfiguration.internalValue = config.virtualNetworkConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_stop_enabled - computed: true, optional: true, required: false
  private _autoStopEnabled?: boolean | cdktf.IResolvable; 
  public get autoStopEnabled() {
    return this.getBooleanAttribute('auto_stop_enabled');
  }
  public set autoStopEnabled(value: boolean | cdktf.IResolvable) {
    this._autoStopEnabled = value;
  }
  public resetAutoStopEnabled() {
    this._autoStopEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStopEnabledInput() {
    return this._autoStopEnabled;
  }

  // data_ingestion_uri - computed: true, optional: false, required: false
  public get dataIngestionUri() {
    return this.getStringAttribute('data_ingestion_uri');
  }

  // disk_encryption_enabled - computed: true, optional: true, required: false
  private _diskEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get diskEncryptionEnabled() {
    return this.getBooleanAttribute('disk_encryption_enabled');
  }
  public set diskEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._diskEncryptionEnabled = value;
  }
  public resetDiskEncryptionEnabled() {
    this._diskEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionEnabledInput() {
    return this._diskEncryptionEnabled;
  }

  // double_encryption_enabled - computed: false, optional: true, required: false
  private _doubleEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get doubleEncryptionEnabled() {
    return this.getBooleanAttribute('double_encryption_enabled');
  }
  public set doubleEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._doubleEncryptionEnabled = value;
  }
  public resetDoubleEncryptionEnabled() {
    this._doubleEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleEncryptionEnabledInput() {
    return this._doubleEncryptionEnabled;
  }

  // enable_auto_stop - computed: true, optional: true, required: false
  private _enableAutoStop?: boolean | cdktf.IResolvable; 
  public get enableAutoStop() {
    return this.getBooleanAttribute('enable_auto_stop');
  }
  public set enableAutoStop(value: boolean | cdktf.IResolvable) {
    this._enableAutoStop = value;
  }
  public resetEnableAutoStop() {
    this._enableAutoStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoStopInput() {
    return this._enableAutoStop;
  }

  // enable_disk_encryption - computed: true, optional: true, required: false
  private _enableDiskEncryption?: boolean | cdktf.IResolvable; 
  public get enableDiskEncryption() {
    return this.getBooleanAttribute('enable_disk_encryption');
  }
  public set enableDiskEncryption(value: boolean | cdktf.IResolvable) {
    this._enableDiskEncryption = value;
  }
  public resetEnableDiskEncryption() {
    this._enableDiskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDiskEncryptionInput() {
    return this._enableDiskEncryption;
  }

  // enable_purge - computed: true, optional: true, required: false
  private _enablePurge?: boolean | cdktf.IResolvable; 
  public get enablePurge() {
    return this.getBooleanAttribute('enable_purge');
  }
  public set enablePurge(value: boolean | cdktf.IResolvable) {
    this._enablePurge = value;
  }
  public resetEnablePurge() {
    this._enablePurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePurgeInput() {
    return this._enablePurge;
  }

  // enable_streaming_ingest - computed: true, optional: true, required: false
  private _enableStreamingIngest?: boolean | cdktf.IResolvable; 
  public get enableStreamingIngest() {
    return this.getBooleanAttribute('enable_streaming_ingest');
  }
  public set enableStreamingIngest(value: boolean | cdktf.IResolvable) {
    this._enableStreamingIngest = value;
  }
  public resetEnableStreamingIngest() {
    this._enableStreamingIngest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStreamingIngestInput() {
    return this._enableStreamingIngest;
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language_extensions - computed: false, optional: true, required: false
  private _languageExtensions?: string[]; 
  public get languageExtensions() {
    return this.getListAttribute('language_extensions');
  }
  public set languageExtensions(value: string[]) {
    this._languageExtensions = value;
  }
  public resetLanguageExtensions() {
    this._languageExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageExtensionsInput() {
    return this._languageExtensions;
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

  // purge_enabled - computed: true, optional: true, required: false
  private _purgeEnabled?: boolean | cdktf.IResolvable; 
  public get purgeEnabled() {
    return this.getBooleanAttribute('purge_enabled');
  }
  public set purgeEnabled(value: boolean | cdktf.IResolvable) {
    this._purgeEnabled = value;
  }
  public resetPurgeEnabled() {
    this._purgeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeEnabledInput() {
    return this._purgeEnabled;
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

  // streaming_ingestion_enabled - computed: true, optional: true, required: false
  private _streamingIngestionEnabled?: boolean | cdktf.IResolvable; 
  public get streamingIngestionEnabled() {
    return this.getBooleanAttribute('streaming_ingestion_enabled');
  }
  public set streamingIngestionEnabled(value: boolean | cdktf.IResolvable) {
    this._streamingIngestionEnabled = value;
  }
  public resetStreamingIngestionEnabled() {
    this._streamingIngestionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingIngestionEnabledInput() {
    return this._streamingIngestionEnabled;
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

  // trusted_external_tenants - computed: true, optional: true, required: false
  private _trustedExternalTenants?: string[]; 
  public get trustedExternalTenants() {
    return this.getListAttribute('trusted_external_tenants');
  }
  public set trustedExternalTenants(value: string[]) {
    this._trustedExternalTenants = value;
  }
  public resetTrustedExternalTenants() {
    this._trustedExternalTenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedExternalTenantsInput() {
    return this._trustedExternalTenants;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new KustoClusterIdentityOutputReference(this, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: KustoClusterIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // optimized_auto_scale - computed: false, optional: true, required: false
  private _optimizedAutoScale = new KustoClusterOptimizedAutoScaleOutputReference(this, "optimized_auto_scale", true);
  public get optimizedAutoScale() {
    return this._optimizedAutoScale;
  }
  public putOptimizedAutoScale(value: KustoClusterOptimizedAutoScale) {
    this._optimizedAutoScale.internalValue = value;
  }
  public resetOptimizedAutoScale() {
    this._optimizedAutoScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedAutoScaleInput() {
    return this._optimizedAutoScale.internalValue;
  }

  // sku - computed: false, optional: false, required: true
  private _sku = new KustoClusterSkuOutputReference(this, "sku", true);
  public get sku() {
    return this._sku;
  }
  public putSku(value: KustoClusterSku) {
    this._sku.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KustoClusterTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KustoClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_network_configuration - computed: false, optional: true, required: false
  private _virtualNetworkConfiguration = new KustoClusterVirtualNetworkConfigurationOutputReference(this, "virtual_network_configuration", true);
  public get virtualNetworkConfiguration() {
    return this._virtualNetworkConfiguration;
  }
  public putVirtualNetworkConfiguration(value: KustoClusterVirtualNetworkConfiguration) {
    this._virtualNetworkConfiguration.internalValue = value;
  }
  public resetVirtualNetworkConfiguration() {
    this._virtualNetworkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkConfigurationInput() {
    return this._virtualNetworkConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_stop_enabled: cdktf.booleanToTerraform(this._autoStopEnabled),
      disk_encryption_enabled: cdktf.booleanToTerraform(this._diskEncryptionEnabled),
      double_encryption_enabled: cdktf.booleanToTerraform(this._doubleEncryptionEnabled),
      enable_auto_stop: cdktf.booleanToTerraform(this._enableAutoStop),
      enable_disk_encryption: cdktf.booleanToTerraform(this._enableDiskEncryption),
      enable_purge: cdktf.booleanToTerraform(this._enablePurge),
      enable_streaming_ingest: cdktf.booleanToTerraform(this._enableStreamingIngest),
      engine: cdktf.stringToTerraform(this._engine),
      language_extensions: cdktf.listMapper(cdktf.stringToTerraform)(this._languageExtensions),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      purge_enabled: cdktf.booleanToTerraform(this._purgeEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      streaming_ingestion_enabled: cdktf.booleanToTerraform(this._streamingIngestionEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      trusted_external_tenants: cdktf.listMapper(cdktf.stringToTerraform)(this._trustedExternalTenants),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      identity: kustoClusterIdentityToTerraform(this._identity.internalValue),
      optimized_auto_scale: kustoClusterOptimizedAutoScaleToTerraform(this._optimizedAutoScale.internalValue),
      sku: kustoClusterSkuToTerraform(this._sku.internalValue),
      timeouts: kustoClusterTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_network_configuration: kustoClusterVirtualNetworkConfigurationToTerraform(this._virtualNetworkConfiguration.internalValue),
    };
  }
}
