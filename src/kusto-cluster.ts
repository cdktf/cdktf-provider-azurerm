// https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KustoClusterConfig extends TerraformMetaArguments {
  readonly enableDiskEncryption?: boolean;
  readonly enablePurge?: boolean;
  readonly enableStreamingIngest?: boolean;
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
  readonly type: string;
}
export interface KustoClusterOptimizedAutoScale {
  readonly maximumInstances: number;
  readonly minimumInstances: number;
}
export interface KustoClusterSku {
  readonly capacity?: number;
  readonly name: string;
}
export interface KustoClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface KustoClusterVirtualNetworkConfiguration {
  readonly dataManagementPublicIpId: string;
  readonly enginePublicIpId: string;
  readonly subnetId: string;
}

// Resource

export class KustoCluster extends TerraformResource {

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
    this._enableDiskEncryption = config.enableDiskEncryption;
    this._enablePurge = config.enablePurge;
    this._enableStreamingIngest = config.enableStreamingIngest;
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
      enable_disk_encryption: this._enableDiskEncryption,
      enable_purge: this._enablePurge,
      enable_streaming_ingest: this._enableStreamingIngest,
      language_extensions: this._languageExtensions,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      trusted_external_tenants: this._trustedExternalTenants,
      zones: this._zones,
      identity: this._identity,
      optimized_auto_scale: this._optimizedAutoScale,
      sku: this._sku,
      timeouts: this._timeouts,
      virtual_network_configuration: this._virtualNetworkConfiguration,
    };
  }
}
