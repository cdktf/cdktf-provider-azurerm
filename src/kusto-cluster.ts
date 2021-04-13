// https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoClusterConfig extends cdktf.TerraformMetaArguments {
  readonly doubleEncryptionEnabled?: boolean;
  readonly enableDiskEncryption?: boolean;
  readonly enablePurge?: boolean;
  readonly enableStreamingIngest?: boolean;
  readonly engine?: string;
  readonly languageExtensions?: string[];
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly trustedExternalTenants?: string[];
  readonly zones?: string[];
  /** identity block */
  readonly identity?: KustoClusterIdentity[];
  /** optimized_auto_scale block */
  readonly optimizedAutoScale?: KustoClusterOptimizedAutoScale[];
  /** sku block */
  readonly sku: KustoClusterSku[];
  /** timeouts block */
  readonly timeouts?: KustoClusterTimeouts;
  /** virtual_network_configuration block */
  readonly virtualNetworkConfiguration?: KustoClusterVirtualNetworkConfiguration[];
}
export interface KustoClusterIdentity {
  readonly identityIds?: string[];
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
  readonly maximumInstances: number;
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
  readonly capacity?: number;
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
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
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
  readonly dataManagementPublicIpId: string;
  readonly enginePublicIpId: string;
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


// Resource

export class KustoCluster extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
