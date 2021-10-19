// https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#double_encryption_enabled KustoCluster#double_encryption_enabled}
  */
  readonly doubleEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#enable_disk_encryption KustoCluster#enable_disk_encryption}
  */
  readonly enableDiskEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#enable_purge KustoCluster#enable_purge}
  */
  readonly enablePurge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#enable_streaming_ingest KustoCluster#enable_streaming_ingest}
  */
  readonly enableStreamingIngest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#engine KustoCluster#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#language_extensions KustoCluster#language_extensions}
  */
  readonly languageExtensions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#location KustoCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#name KustoCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#resource_group_name KustoCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#tags KustoCluster#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#trusted_external_tenants KustoCluster#trusted_external_tenants}
  */
  readonly trustedExternalTenants?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#zones KustoCluster#zones}
  */
  readonly zones?: string[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#identity KustoCluster#identity}
  */
  readonly identity?: KustoClusterIdentity;
  /**
  * optimized_auto_scale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#optimized_auto_scale KustoCluster#optimized_auto_scale}
  */
  readonly optimizedAutoScale?: KustoClusterOptimizedAutoScale;
  /**
  * sku block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#sku KustoCluster#sku}
  */
  readonly sku: KustoClusterSku;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#timeouts KustoCluster#timeouts}
  */
  readonly timeouts?: KustoClusterTimeouts;
  /**
  * virtual_network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#virtual_network_configuration KustoCluster#virtual_network_configuration}
  */
  readonly virtualNetworkConfiguration?: KustoClusterVirtualNetworkConfiguration;
}
export interface KustoClusterIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#identity_ids KustoCluster#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#type KustoCluster#type}
  */
  readonly type: string;
}

function kustoClusterIdentityToTerraform(struct?: KustoClusterIdentityOutputReference | KustoClusterIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class KustoClusterIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[] | undefined; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[] | undefined) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds
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
    return this._type
  }
}
export interface KustoClusterOptimizedAutoScale {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#maximum_instances KustoCluster#maximum_instances}
  */
  readonly maximumInstances: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#minimum_instances KustoCluster#minimum_instances}
  */
  readonly minimumInstances: number;
}

function kustoClusterOptimizedAutoScaleToTerraform(struct?: KustoClusterOptimizedAutoScaleOutputReference | KustoClusterOptimizedAutoScale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_instances: cdktf.numberToTerraform(struct!.maximumInstances),
    minimum_instances: cdktf.numberToTerraform(struct!.minimumInstances),
  }
}

export class KustoClusterOptimizedAutoScaleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._maximumInstances
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
    return this._minimumInstances
  }
}
export interface KustoClusterSku {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#capacity KustoCluster#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#name KustoCluster#name}
  */
  readonly name: string;
}

function kustoClusterSkuToTerraform(struct?: KustoClusterSkuOutputReference | KustoClusterSku): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class KustoClusterSkuOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // capacity - computed: true, optional: true, required: false
  private _capacity?: number | undefined; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number | undefined) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity
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
    return this._name
  }
}
export interface KustoClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#create KustoCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#delete KustoCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#read KustoCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#update KustoCluster#update}
  */
  readonly update?: string;
}

function kustoClusterTimeoutsToTerraform(struct?: KustoClusterTimeoutsOutputReference | KustoClusterTimeouts): any {
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

export class KustoClusterTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface KustoClusterVirtualNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#data_management_public_ip_id KustoCluster#data_management_public_ip_id}
  */
  readonly dataManagementPublicIpId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#engine_public_ip_id KustoCluster#engine_public_ip_id}
  */
  readonly enginePublicIpId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#subnet_id KustoCluster#subnet_id}
  */
  readonly subnetId: string;
}

function kustoClusterVirtualNetworkConfigurationToTerraform(struct?: KustoClusterVirtualNetworkConfigurationOutputReference | KustoClusterVirtualNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._dataManagementPublicIpId
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
    return this._enginePublicIpId
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
    return this._subnetId
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html azurerm_kusto_cluster}
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
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html azurerm_kusto_cluster} Resource
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
    this._doubleEncryptionEnabled = config.doubleEncryptionEnabled;
    this._enableDiskEncryption = config.enableDiskEncryption;
    this._enablePurge = config.enablePurge;
    this._enableStreamingIngest = config.enableStreamingIngest;
    this._engine = config.engine;
    this._languageExtensions = config.languageExtensions;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._trustedExternalTenants = config.trustedExternalTenants;
    this._zones = config.zones;
    this._identity = config.identity;
    this._optimizedAutoScale = config.optimizedAutoScale;
    this._sku = config.sku;
    this._timeouts = config.timeouts;
    this._virtualNetworkConfiguration = config.virtualNetworkConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_ingestion_uri - computed: true, optional: false, required: false
  public get dataIngestionUri() {
    return this.getStringAttribute('data_ingestion_uri');
  }

  // double_encryption_enabled - computed: false, optional: true, required: false
  private _doubleEncryptionEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get doubleEncryptionEnabled() {
    return this.getBooleanAttribute('double_encryption_enabled') as any;
  }
  public set doubleEncryptionEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._doubleEncryptionEnabled = value;
  }
  public resetDoubleEncryptionEnabled() {
    this._doubleEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleEncryptionEnabledInput() {
    return this._doubleEncryptionEnabled
  }

  // enable_disk_encryption - computed: false, optional: true, required: false
  private _enableDiskEncryption?: boolean | cdktf.IResolvable | undefined; 
  public get enableDiskEncryption() {
    return this.getBooleanAttribute('enable_disk_encryption') as any;
  }
  public set enableDiskEncryption(value: boolean | cdktf.IResolvable | undefined) {
    this._enableDiskEncryption = value;
  }
  public resetEnableDiskEncryption() {
    this._enableDiskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDiskEncryptionInput() {
    return this._enableDiskEncryption
  }

  // enable_purge - computed: false, optional: true, required: false
  private _enablePurge?: boolean | cdktf.IResolvable | undefined; 
  public get enablePurge() {
    return this.getBooleanAttribute('enable_purge') as any;
  }
  public set enablePurge(value: boolean | cdktf.IResolvable | undefined) {
    this._enablePurge = value;
  }
  public resetEnablePurge() {
    this._enablePurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePurgeInput() {
    return this._enablePurge
  }

  // enable_streaming_ingest - computed: false, optional: true, required: false
  private _enableStreamingIngest?: boolean | cdktf.IResolvable | undefined; 
  public get enableStreamingIngest() {
    return this.getBooleanAttribute('enable_streaming_ingest') as any;
  }
  public set enableStreamingIngest(value: boolean | cdktf.IResolvable | undefined) {
    this._enableStreamingIngest = value;
  }
  public resetEnableStreamingIngest() {
    this._enableStreamingIngest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStreamingIngestInput() {
    return this._enableStreamingIngest
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string | undefined; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string | undefined) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language_extensions - computed: false, optional: true, required: false
  private _languageExtensions?: string[] | undefined; 
  public get languageExtensions() {
    return this.getListAttribute('language_extensions');
  }
  public set languageExtensions(value: string[] | undefined) {
    this._languageExtensions = value;
  }
  public resetLanguageExtensions() {
    this._languageExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageExtensionsInput() {
    return this._languageExtensions
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
    return this._location
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
    return this._name
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // trusted_external_tenants - computed: true, optional: true, required: false
  private _trustedExternalTenants?: string[] | undefined; 
  public get trustedExternalTenants() {
    return this.getListAttribute('trusted_external_tenants');
  }
  public set trustedExternalTenants(value: string[] | undefined) {
    this._trustedExternalTenants = value;
  }
  public resetTrustedExternalTenants() {
    this._trustedExternalTenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedExternalTenantsInput() {
    return this._trustedExternalTenants
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[] | undefined; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: KustoClusterIdentity | undefined; 
  private __identityOutput = new KustoClusterIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: KustoClusterIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // optimized_auto_scale - computed: false, optional: true, required: false
  private _optimizedAutoScale?: KustoClusterOptimizedAutoScale | undefined; 
  private __optimizedAutoScaleOutput = new KustoClusterOptimizedAutoScaleOutputReference(this as any, "optimized_auto_scale", true);
  public get optimizedAutoScale() {
    return this.__optimizedAutoScaleOutput;
  }
  public putOptimizedAutoScale(value: KustoClusterOptimizedAutoScale | undefined) {
    this._optimizedAutoScale = value;
  }
  public resetOptimizedAutoScale() {
    this._optimizedAutoScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedAutoScaleInput() {
    return this._optimizedAutoScale
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: KustoClusterSku; 
  private __skuOutput = new KustoClusterSkuOutputReference(this as any, "sku", true);
  public get sku() {
    return this.__skuOutput;
  }
  public putSku(value: KustoClusterSku) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoClusterTimeouts | undefined; 
  private __timeoutsOutput = new KustoClusterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KustoClusterTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // virtual_network_configuration - computed: false, optional: true, required: false
  private _virtualNetworkConfiguration?: KustoClusterVirtualNetworkConfiguration | undefined; 
  private __virtualNetworkConfigurationOutput = new KustoClusterVirtualNetworkConfigurationOutputReference(this as any, "virtual_network_configuration", true);
  public get virtualNetworkConfiguration() {
    return this.__virtualNetworkConfigurationOutput;
  }
  public putVirtualNetworkConfiguration(value: KustoClusterVirtualNetworkConfiguration | undefined) {
    this._virtualNetworkConfiguration = value;
  }
  public resetVirtualNetworkConfiguration() {
    this._virtualNetworkConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkConfigurationInput() {
    return this._virtualNetworkConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      double_encryption_enabled: cdktf.booleanToTerraform(this._doubleEncryptionEnabled),
      enable_disk_encryption: cdktf.booleanToTerraform(this._enableDiskEncryption),
      enable_purge: cdktf.booleanToTerraform(this._enablePurge),
      enable_streaming_ingest: cdktf.booleanToTerraform(this._enableStreamingIngest),
      engine: cdktf.stringToTerraform(this._engine),
      language_extensions: cdktf.listMapper(cdktf.stringToTerraform)(this._languageExtensions),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      trusted_external_tenants: cdktf.listMapper(cdktf.stringToTerraform)(this._trustedExternalTenants),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      identity: kustoClusterIdentityToTerraform(this._identity),
      optimized_auto_scale: kustoClusterOptimizedAutoScaleToTerraform(this._optimizedAutoScale),
      sku: kustoClusterSkuToTerraform(this._sku),
      timeouts: kustoClusterTimeoutsToTerraform(this._timeouts),
      virtual_network_configuration: kustoClusterVirtualNetworkConfigurationToTerraform(this._virtualNetworkConfiguration),
    };
  }
}
