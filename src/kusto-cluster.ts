// https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#double_encryption_enabled KustoCluster#double_encryption_enabled}
  */
  readonly doubleEncryptionEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#enable_disk_encryption KustoCluster#enable_disk_encryption}
  */
  readonly enableDiskEncryption?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#enable_purge KustoCluster#enable_purge}
  */
  readonly enablePurge?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#enable_streaming_ingest KustoCluster#enable_streaming_ingest}
  */
  readonly enableStreamingIngest?: boolean;
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
  readonly tags?: { [key: string]: string };
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
  readonly identity?: KustoClusterIdentity[];
  /**
  * optimized_auto_scale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#optimized_auto_scale KustoCluster#optimized_auto_scale}
  */
  readonly optimizedAutoScale?: KustoClusterOptimizedAutoScale[];
  /**
  * sku block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html#sku KustoCluster#sku}
  */
  readonly sku: KustoClusterSku[];
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
  readonly virtualNetworkConfiguration?: KustoClusterVirtualNetworkConfiguration[];
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

function kustoClusterIdentityToTerraform(struct?: KustoClusterIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
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

function kustoClusterOptimizedAutoScaleToTerraform(struct?: KustoClusterOptimizedAutoScale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    maximum_instances: cdktf.numberToTerraform(struct!.maximumInstances),
    minimum_instances: cdktf.numberToTerraform(struct!.minimumInstances),
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

function kustoClusterSkuToTerraform(struct?: KustoClusterSku): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
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

function kustoClusterTimeoutsToTerraform(struct?: KustoClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
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

function kustoClusterVirtualNetworkConfigurationToTerraform(struct?: KustoClusterVirtualNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_management_public_ip_id: cdktf.stringToTerraform(struct!.dataManagementPublicIpId),
    engine_public_ip_id: cdktf.stringToTerraform(struct!.enginePublicIpId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html azurerm_kusto_cluster}
*/
export class KustoCluster extends cdktf.TerraformResource {

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
  private _doubleEncryptionEnabled?: boolean;
  public get doubleEncryptionEnabled() {
    return this.getBooleanAttribute('double_encryption_enabled');
  }
  public set doubleEncryptionEnabled(value: boolean ) {
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
  private _enableDiskEncryption?: boolean;
  public get enableDiskEncryption() {
    return this.getBooleanAttribute('enable_disk_encryption');
  }
  public set enableDiskEncryption(value: boolean ) {
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
  private _enablePurge?: boolean;
  public get enablePurge() {
    return this.getBooleanAttribute('enable_purge');
  }
  public set enablePurge(value: boolean ) {
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
  private _enableStreamingIngest?: boolean;
  public get enableStreamingIngest() {
    return this.getBooleanAttribute('enable_streaming_ingest');
  }
  public set enableStreamingIngest(value: boolean ) {
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
  private _engine?: string;
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string ) {
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
  private _languageExtensions?: string[];
  public get languageExtensions() {
    return this.getListAttribute('language_extensions');
  }
  public set languageExtensions(value: string[] ) {
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
  private _location: string;
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
  private _name: string;
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
  private _resourceGroupName: string;
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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
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
    return this._trustedExternalTenants
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
  public set zones(value: string[] ) {
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
  private _identity?: KustoClusterIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: KustoClusterIdentity[] ) {
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
  private _optimizedAutoScale?: KustoClusterOptimizedAutoScale[];
  public get optimizedAutoScale() {
    return this.interpolationForAttribute('optimized_auto_scale') as any;
  }
  public set optimizedAutoScale(value: KustoClusterOptimizedAutoScale[] ) {
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
  private _sku: KustoClusterSku[];
  public get sku() {
    return this.interpolationForAttribute('sku') as any;
  }
  public set sku(value: KustoClusterSku[]) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KustoClusterTimeouts ) {
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
  private _virtualNetworkConfiguration?: KustoClusterVirtualNetworkConfiguration[];
  public get virtualNetworkConfiguration() {
    return this.interpolationForAttribute('virtual_network_configuration') as any;
  }
  public set virtualNetworkConfiguration(value: KustoClusterVirtualNetworkConfiguration[] ) {
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
      identity: cdktf.listMapper(kustoClusterIdentityToTerraform)(this._identity),
      optimized_auto_scale: cdktf.listMapper(kustoClusterOptimizedAutoScaleToTerraform)(this._optimizedAutoScale),
      sku: cdktf.listMapper(kustoClusterSkuToTerraform)(this._sku),
      timeouts: kustoClusterTimeoutsToTerraform(this._timeouts),
      virtual_network_configuration: cdktf.listMapper(kustoClusterVirtualNetworkConfigurationToTerraform)(this._virtualNetworkConfiguration),
    };
  }
}
