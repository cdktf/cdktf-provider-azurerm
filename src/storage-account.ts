// https://www.terraform.io/docs/providers/azurerm/r/storage_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageAccountConfig extends TerraformMetaArguments {
  readonly accessTier?: string;
  readonly accountKind?: string;
  readonly accountReplicationType: string;
  readonly accountTier: string;
  readonly enableHttpsTrafficOnly?: boolean;
  readonly isHnsEnabled?: boolean;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** blob_properties block */
  readonly blobProperties?: StorageAccountBlobProperties[];
  /** custom_domain block */
  readonly customDomain?: StorageAccountCustomDomain[];
  /** identity block */
  readonly identity?: StorageAccountIdentity[];
  /** network_rules block */
  readonly networkRules?: StorageAccountNetworkRules[];
  /** queue_properties block */
  readonly queueProperties?: StorageAccountQueueProperties[];
  /** static_website block */
  readonly staticWebsite?: StorageAccountStaticWebsite[];
  /** timeouts block */
  readonly timeouts?: StorageAccountTimeouts;
}
export interface StorageAccountBlobPropertiesCorsRule {
  readonly allowedHeaders: string[];
  readonly allowedMethods: string[];
  readonly allowedOrigins: string[];
  readonly exposedHeaders: string[];
  readonly maxAgeInSeconds: number;
}
export interface StorageAccountBlobPropertiesDeleteRetentionPolicy {
  readonly days?: number;
}
export interface StorageAccountBlobProperties {
  /** cors_rule block */
  readonly corsRule?: StorageAccountBlobPropertiesCorsRule[];
  /** delete_retention_policy block */
  readonly deleteRetentionPolicy?: StorageAccountBlobPropertiesDeleteRetentionPolicy[];
}
export interface StorageAccountCustomDomain {
  readonly name: string;
  readonly useSubdomain?: boolean;
}
export interface StorageAccountIdentity {
  readonly type: string;
}
export interface StorageAccountNetworkRules {
  readonly bypass?: string[];
  readonly defaultAction: string;
  readonly ipRules?: string[];
  readonly virtualNetworkSubnetIds?: string[];
}
export interface StorageAccountQueuePropertiesCorsRule {
  readonly allowedHeaders: string[];
  readonly allowedMethods: string[];
  readonly allowedOrigins: string[];
  readonly exposedHeaders: string[];
  readonly maxAgeInSeconds: number;
}
export interface StorageAccountQueuePropertiesHourMetrics {
  readonly enabled: boolean;
  readonly includeApis?: boolean;
  readonly retentionPolicyDays?: number;
  readonly version: string;
}
export interface StorageAccountQueuePropertiesLogging {
  readonly delete: boolean;
  readonly read: boolean;
  readonly retentionPolicyDays?: number;
  readonly version: string;
  readonly write: boolean;
}
export interface StorageAccountQueuePropertiesMinuteMetrics {
  readonly enabled: boolean;
  readonly includeApis?: boolean;
  readonly retentionPolicyDays?: number;
  readonly version: string;
}
export interface StorageAccountQueueProperties {
  /** cors_rule block */
  readonly corsRule?: StorageAccountQueuePropertiesCorsRule[];
  /** hour_metrics block */
  readonly hourMetrics?: StorageAccountQueuePropertiesHourMetrics[];
  /** logging block */
  readonly logging?: StorageAccountQueuePropertiesLogging[];
  /** minute_metrics block */
  readonly minuteMetrics?: StorageAccountQueuePropertiesMinuteMetrics[];
}
export interface StorageAccountStaticWebsite {
  readonly error404Document?: string;
  readonly indexDocument?: string;
}
export interface StorageAccountTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class StorageAccount extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessTier = config.accessTier;
    this._accountKind = config.accountKind;
    this._accountReplicationType = config.accountReplicationType;
    this._accountTier = config.accountTier;
    this._enableHttpsTrafficOnly = config.enableHttpsTrafficOnly;
    this._isHnsEnabled = config.isHnsEnabled;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._blobProperties = config.blobProperties;
    this._customDomain = config.customDomain;
    this._identity = config.identity;
    this._networkRules = config.networkRules;
    this._queueProperties = config.queueProperties;
    this._staticWebsite = config.staticWebsite;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_tier - computed: true, optional: true, required: false
  private _accessTier?: string;
  public get accessTier() {
    return this._accessTier ?? this.getStringAttribute('access_tier');
  }
  public set accessTier(value: string | undefined) {
    this._accessTier = value;
  }

  // account_kind - computed: false, optional: true, required: false
  private _accountKind?: string;
  public get accountKind() {
    return this._accountKind;
  }
  public set accountKind(value: string | undefined) {
    this._accountKind = value;
  }

  // account_replication_type - computed: false, optional: false, required: true
  private _accountReplicationType: string;
  public get accountReplicationType() {
    return this._accountReplicationType;
  }
  public set accountReplicationType(value: string) {
    this._accountReplicationType = value;
  }

  // account_tier - computed: false, optional: false, required: true
  private _accountTier: string;
  public get accountTier() {
    return this._accountTier;
  }
  public set accountTier(value: string) {
    this._accountTier = value;
  }

  // enable_https_traffic_only - computed: false, optional: true, required: false
  private _enableHttpsTrafficOnly?: boolean;
  public get enableHttpsTrafficOnly() {
    return this._enableHttpsTrafficOnly;
  }
  public set enableHttpsTrafficOnly(value: boolean | undefined) {
    this._enableHttpsTrafficOnly = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_hns_enabled - computed: false, optional: true, required: false
  private _isHnsEnabled?: boolean;
  public get isHnsEnabled() {
    return this._isHnsEnabled;
  }
  public set isHnsEnabled(value: boolean | undefined) {
    this._isHnsEnabled = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // primary_access_key - computed: true, optional: false, required: true
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // primary_blob_connection_string - computed: true, optional: false, required: true
  public get primaryBlobConnectionString() {
    return this.getStringAttribute('primary_blob_connection_string');
  }

  // primary_blob_endpoint - computed: true, optional: false, required: true
  public get primaryBlobEndpoint() {
    return this.getStringAttribute('primary_blob_endpoint');
  }

  // primary_blob_host - computed: true, optional: false, required: true
  public get primaryBlobHost() {
    return this.getStringAttribute('primary_blob_host');
  }

  // primary_connection_string - computed: true, optional: false, required: true
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // primary_dfs_endpoint - computed: true, optional: false, required: true
  public get primaryDfsEndpoint() {
    return this.getStringAttribute('primary_dfs_endpoint');
  }

  // primary_dfs_host - computed: true, optional: false, required: true
  public get primaryDfsHost() {
    return this.getStringAttribute('primary_dfs_host');
  }

  // primary_file_endpoint - computed: true, optional: false, required: true
  public get primaryFileEndpoint() {
    return this.getStringAttribute('primary_file_endpoint');
  }

  // primary_file_host - computed: true, optional: false, required: true
  public get primaryFileHost() {
    return this.getStringAttribute('primary_file_host');
  }

  // primary_location - computed: true, optional: false, required: true
  public get primaryLocation() {
    return this.getStringAttribute('primary_location');
  }

  // primary_queue_endpoint - computed: true, optional: false, required: true
  public get primaryQueueEndpoint() {
    return this.getStringAttribute('primary_queue_endpoint');
  }

  // primary_queue_host - computed: true, optional: false, required: true
  public get primaryQueueHost() {
    return this.getStringAttribute('primary_queue_host');
  }

  // primary_table_endpoint - computed: true, optional: false, required: true
  public get primaryTableEndpoint() {
    return this.getStringAttribute('primary_table_endpoint');
  }

  // primary_table_host - computed: true, optional: false, required: true
  public get primaryTableHost() {
    return this.getStringAttribute('primary_table_host');
  }

  // primary_web_endpoint - computed: true, optional: false, required: true
  public get primaryWebEndpoint() {
    return this.getStringAttribute('primary_web_endpoint');
  }

  // primary_web_host - computed: true, optional: false, required: true
  public get primaryWebHost() {
    return this.getStringAttribute('primary_web_host');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // secondary_access_key - computed: true, optional: false, required: true
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // secondary_blob_connection_string - computed: true, optional: false, required: true
  public get secondaryBlobConnectionString() {
    return this.getStringAttribute('secondary_blob_connection_string');
  }

  // secondary_blob_endpoint - computed: true, optional: false, required: true
  public get secondaryBlobEndpoint() {
    return this.getStringAttribute('secondary_blob_endpoint');
  }

  // secondary_blob_host - computed: true, optional: false, required: true
  public get secondaryBlobHost() {
    return this.getStringAttribute('secondary_blob_host');
  }

  // secondary_connection_string - computed: true, optional: false, required: true
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // secondary_dfs_endpoint - computed: true, optional: false, required: true
  public get secondaryDfsEndpoint() {
    return this.getStringAttribute('secondary_dfs_endpoint');
  }

  // secondary_dfs_host - computed: true, optional: false, required: true
  public get secondaryDfsHost() {
    return this.getStringAttribute('secondary_dfs_host');
  }

  // secondary_file_endpoint - computed: true, optional: false, required: true
  public get secondaryFileEndpoint() {
    return this.getStringAttribute('secondary_file_endpoint');
  }

  // secondary_file_host - computed: true, optional: false, required: true
  public get secondaryFileHost() {
    return this.getStringAttribute('secondary_file_host');
  }

  // secondary_location - computed: true, optional: false, required: true
  public get secondaryLocation() {
    return this.getStringAttribute('secondary_location');
  }

  // secondary_queue_endpoint - computed: true, optional: false, required: true
  public get secondaryQueueEndpoint() {
    return this.getStringAttribute('secondary_queue_endpoint');
  }

  // secondary_queue_host - computed: true, optional: false, required: true
  public get secondaryQueueHost() {
    return this.getStringAttribute('secondary_queue_host');
  }

  // secondary_table_endpoint - computed: true, optional: false, required: true
  public get secondaryTableEndpoint() {
    return this.getStringAttribute('secondary_table_endpoint');
  }

  // secondary_table_host - computed: true, optional: false, required: true
  public get secondaryTableHost() {
    return this.getStringAttribute('secondary_table_host');
  }

  // secondary_web_endpoint - computed: true, optional: false, required: true
  public get secondaryWebEndpoint() {
    return this.getStringAttribute('secondary_web_endpoint');
  }

  // secondary_web_host - computed: true, optional: false, required: true
  public get secondaryWebHost() {
    return this.getStringAttribute('secondary_web_host');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // blob_properties - computed: false, optional: true, required: false
  private _blobProperties?: StorageAccountBlobProperties[];
  public get blobProperties() {
    return this._blobProperties;
  }
  public set blobProperties(value: StorageAccountBlobProperties[] | undefined) {
    this._blobProperties = value;
  }

  // custom_domain - computed: false, optional: true, required: false
  private _customDomain?: StorageAccountCustomDomain[];
  public get customDomain() {
    return this._customDomain;
  }
  public set customDomain(value: StorageAccountCustomDomain[] | undefined) {
    this._customDomain = value;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: StorageAccountIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: StorageAccountIdentity[] | undefined) {
    this._identity = value;
  }

  // network_rules - computed: false, optional: true, required: false
  private _networkRules?: StorageAccountNetworkRules[];
  public get networkRules() {
    return this._networkRules;
  }
  public set networkRules(value: StorageAccountNetworkRules[] | undefined) {
    this._networkRules = value;
  }

  // queue_properties - computed: false, optional: true, required: false
  private _queueProperties?: StorageAccountQueueProperties[];
  public get queueProperties() {
    return this._queueProperties;
  }
  public set queueProperties(value: StorageAccountQueueProperties[] | undefined) {
    this._queueProperties = value;
  }

  // static_website - computed: false, optional: true, required: false
  private _staticWebsite?: StorageAccountStaticWebsite[];
  public get staticWebsite() {
    return this._staticWebsite;
  }
  public set staticWebsite(value: StorageAccountStaticWebsite[] | undefined) {
    this._staticWebsite = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageAccountTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StorageAccountTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      access_tier: this._accessTier,
      account_kind: this._accountKind,
      account_replication_type: this._accountReplicationType,
      account_tier: this._accountTier,
      enable_https_traffic_only: this._enableHttpsTrafficOnly,
      is_hns_enabled: this._isHnsEnabled,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      blob_properties: this._blobProperties,
      custom_domain: this._customDomain,
      identity: this._identity,
      network_rules: this._networkRules,
      queue_properties: this._queueProperties,
      static_website: this._staticWebsite,
      timeouts: this._timeouts,
    };
  }
}
