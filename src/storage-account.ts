// https://www.terraform.io/docs/providers/azurerm/r/storage_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#access_tier StorageAccount#access_tier}
  */
  readonly accessTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#account_kind StorageAccount#account_kind}
  */
  readonly accountKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#account_replication_type StorageAccount#account_replication_type}
  */
  readonly accountReplicationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#account_tier StorageAccount#account_tier}
  */
  readonly accountTier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allow_blob_public_access StorageAccount#allow_blob_public_access}
  */
  readonly allowBlobPublicAccess?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#enable_https_traffic_only StorageAccount#enable_https_traffic_only}
  */
  readonly enableHttpsTrafficOnly?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#is_hns_enabled StorageAccount#is_hns_enabled}
  */
  readonly isHnsEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#large_file_share_enabled StorageAccount#large_file_share_enabled}
  */
  readonly largeFileShareEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#location StorageAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#min_tls_version StorageAccount#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#name StorageAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#nfsv3_enabled StorageAccount#nfsv3_enabled}
  */
  readonly nfsv3Enabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#resource_group_name StorageAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#tags StorageAccount#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * azure_files_authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#azure_files_authentication StorageAccount#azure_files_authentication}
  */
  readonly azureFilesAuthentication?: StorageAccountAzureFilesAuthentication[];
  /**
  * blob_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#blob_properties StorageAccount#blob_properties}
  */
  readonly blobProperties?: StorageAccountBlobProperties[];
  /**
  * custom_domain block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#custom_domain StorageAccount#custom_domain}
  */
  readonly customDomain?: StorageAccountCustomDomain[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#identity StorageAccount#identity}
  */
  readonly identity?: StorageAccountIdentity[];
  /**
  * network_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#network_rules StorageAccount#network_rules}
  */
  readonly networkRules?: StorageAccountNetworkRules[];
  /**
  * queue_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#queue_properties StorageAccount#queue_properties}
  */
  readonly queueProperties?: StorageAccountQueueProperties[];
  /**
  * routing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#routing StorageAccount#routing}
  */
  readonly routing?: StorageAccountRouting[];
  /**
  * static_website block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#static_website StorageAccount#static_website}
  */
  readonly staticWebsite?: StorageAccountStaticWebsite[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#timeouts StorageAccount#timeouts}
  */
  readonly timeouts?: StorageAccountTimeouts;
}
export interface StorageAccountAzureFilesAuthenticationActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#domain_guid StorageAccount#domain_guid}
  */
  readonly domainGuid: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#domain_name StorageAccount#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#domain_sid StorageAccount#domain_sid}
  */
  readonly domainSid: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#forest_name StorageAccount#forest_name}
  */
  readonly forestName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#netbios_domain_name StorageAccount#netbios_domain_name}
  */
  readonly netbiosDomainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#storage_sid StorageAccount#storage_sid}
  */
  readonly storageSid: string;
}

function storageAccountAzureFilesAuthenticationActiveDirectoryToTerraform(struct?: StorageAccountAzureFilesAuthenticationActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain_guid: cdktf.stringToTerraform(struct!.domainGuid),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_sid: cdktf.stringToTerraform(struct!.domainSid),
    forest_name: cdktf.stringToTerraform(struct!.forestName),
    netbios_domain_name: cdktf.stringToTerraform(struct!.netbiosDomainName),
    storage_sid: cdktf.stringToTerraform(struct!.storageSid),
  }
}

export interface StorageAccountAzureFilesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#directory_type StorageAccount#directory_type}
  */
  readonly directoryType: string;
  /**
  * active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#active_directory StorageAccount#active_directory}
  */
  readonly activeDirectory?: StorageAccountAzureFilesAuthenticationActiveDirectory[];
}

function storageAccountAzureFilesAuthenticationToTerraform(struct?: StorageAccountAzureFilesAuthentication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    directory_type: cdktf.stringToTerraform(struct!.directoryType),
    active_directory: cdktf.listMapper(storageAccountAzureFilesAuthenticationActiveDirectoryToTerraform)(struct!.activeDirectory),
  }
}

export interface StorageAccountBlobPropertiesContainerDeleteRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#days StorageAccount#days}
  */
  readonly days?: number;
}

function storageAccountBlobPropertiesContainerDeleteRetentionPolicyToTerraform(struct?: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}

export interface StorageAccountBlobPropertiesCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allowed_headers StorageAccount#allowed_headers}
  */
  readonly allowedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allowed_methods StorageAccount#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allowed_origins StorageAccount#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#exposed_headers StorageAccount#exposed_headers}
  */
  readonly exposedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#max_age_in_seconds StorageAccount#max_age_in_seconds}
  */
  readonly maxAgeInSeconds: number;
}

function storageAccountBlobPropertiesCorsRuleToTerraform(struct?: StorageAccountBlobPropertiesCorsRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposedHeaders),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
  }
}

export interface StorageAccountBlobPropertiesDeleteRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#days StorageAccount#days}
  */
  readonly days?: number;
}

function storageAccountBlobPropertiesDeleteRetentionPolicyToTerraform(struct?: StorageAccountBlobPropertiesDeleteRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}

export interface StorageAccountBlobProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#change_feed_enabled StorageAccount#change_feed_enabled}
  */
  readonly changeFeedEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#default_service_version StorageAccount#default_service_version}
  */
  readonly defaultServiceVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#last_access_time_enabled StorageAccount#last_access_time_enabled}
  */
  readonly lastAccessTimeEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#versioning_enabled StorageAccount#versioning_enabled}
  */
  readonly versioningEnabled?: boolean;
  /**
  * container_delete_retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#container_delete_retention_policy StorageAccount#container_delete_retention_policy}
  */
  readonly containerDeleteRetentionPolicy?: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy[];
  /**
  * cors_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#cors_rule StorageAccount#cors_rule}
  */
  readonly corsRule?: StorageAccountBlobPropertiesCorsRule[];
  /**
  * delete_retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#delete_retention_policy StorageAccount#delete_retention_policy}
  */
  readonly deleteRetentionPolicy?: StorageAccountBlobPropertiesDeleteRetentionPolicy[];
}

function storageAccountBlobPropertiesToTerraform(struct?: StorageAccountBlobProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    change_feed_enabled: cdktf.booleanToTerraform(struct!.changeFeedEnabled),
    default_service_version: cdktf.stringToTerraform(struct!.defaultServiceVersion),
    last_access_time_enabled: cdktf.booleanToTerraform(struct!.lastAccessTimeEnabled),
    versioning_enabled: cdktf.booleanToTerraform(struct!.versioningEnabled),
    container_delete_retention_policy: cdktf.listMapper(storageAccountBlobPropertiesContainerDeleteRetentionPolicyToTerraform)(struct!.containerDeleteRetentionPolicy),
    cors_rule: cdktf.listMapper(storageAccountBlobPropertiesCorsRuleToTerraform)(struct!.corsRule),
    delete_retention_policy: cdktf.listMapper(storageAccountBlobPropertiesDeleteRetentionPolicyToTerraform)(struct!.deleteRetentionPolicy),
  }
}

export interface StorageAccountCustomDomain {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#name StorageAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#use_subdomain StorageAccount#use_subdomain}
  */
  readonly useSubdomain?: boolean;
}

function storageAccountCustomDomainToTerraform(struct?: StorageAccountCustomDomain): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    use_subdomain: cdktf.booleanToTerraform(struct!.useSubdomain),
  }
}

export interface StorageAccountIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#type StorageAccount#type}
  */
  readonly type: string;
}

function storageAccountIdentityToTerraform(struct?: StorageAccountIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StorageAccountNetworkRulesPrivateLinkAccess {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#endpoint_resource_id StorageAccount#endpoint_resource_id}
  */
  readonly endpointResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#endpoint_tenant_id StorageAccount#endpoint_tenant_id}
  */
  readonly endpointTenantId?: string;
}

function storageAccountNetworkRulesPrivateLinkAccessToTerraform(struct?: StorageAccountNetworkRulesPrivateLinkAccess): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_resource_id: cdktf.stringToTerraform(struct!.endpointResourceId),
    endpoint_tenant_id: cdktf.stringToTerraform(struct!.endpointTenantId),
  }
}

export interface StorageAccountNetworkRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#bypass StorageAccount#bypass}
  */
  readonly bypass?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#default_action StorageAccount#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#ip_rules StorageAccount#ip_rules}
  */
  readonly ipRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#virtual_network_subnet_ids StorageAccount#virtual_network_subnet_ids}
  */
  readonly virtualNetworkSubnetIds?: string[];
  /**
  * private_link_access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#private_link_access StorageAccount#private_link_access}
  */
  readonly privateLinkAccess?: StorageAccountNetworkRulesPrivateLinkAccess[];
}

function storageAccountNetworkRulesToTerraform(struct?: StorageAccountNetworkRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bypass: cdktf.listMapper(cdktf.stringToTerraform)(struct!.bypass),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rules: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipRules),
    virtual_network_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.virtualNetworkSubnetIds),
    private_link_access: cdktf.listMapper(storageAccountNetworkRulesPrivateLinkAccessToTerraform)(struct!.privateLinkAccess),
  }
}

export interface StorageAccountQueuePropertiesCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allowed_headers StorageAccount#allowed_headers}
  */
  readonly allowedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allowed_methods StorageAccount#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#allowed_origins StorageAccount#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#exposed_headers StorageAccount#exposed_headers}
  */
  readonly exposedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#max_age_in_seconds StorageAccount#max_age_in_seconds}
  */
  readonly maxAgeInSeconds: number;
}

function storageAccountQueuePropertiesCorsRuleToTerraform(struct?: StorageAccountQueuePropertiesCorsRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposedHeaders),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
  }
}

export interface StorageAccountQueuePropertiesHourMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#enabled StorageAccount#enabled}
  */
  readonly enabled: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#include_apis StorageAccount#include_apis}
  */
  readonly includeApis?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#retention_policy_days StorageAccount#retention_policy_days}
  */
  readonly retentionPolicyDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#version StorageAccount#version}
  */
  readonly version: string;
}

function storageAccountQueuePropertiesHourMetricsToTerraform(struct?: StorageAccountQueuePropertiesHourMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    include_apis: cdktf.booleanToTerraform(struct!.includeApis),
    retention_policy_days: cdktf.numberToTerraform(struct!.retentionPolicyDays),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface StorageAccountQueuePropertiesLogging {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#delete StorageAccount#delete}
  */
  readonly delete: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#read StorageAccount#read}
  */
  readonly read: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#retention_policy_days StorageAccount#retention_policy_days}
  */
  readonly retentionPolicyDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#version StorageAccount#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#write StorageAccount#write}
  */
  readonly write: boolean;
}

function storageAccountQueuePropertiesLoggingToTerraform(struct?: StorageAccountQueuePropertiesLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete: cdktf.booleanToTerraform(struct!.delete),
    read: cdktf.booleanToTerraform(struct!.read),
    retention_policy_days: cdktf.numberToTerraform(struct!.retentionPolicyDays),
    version: cdktf.stringToTerraform(struct!.version),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}

export interface StorageAccountQueuePropertiesMinuteMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#enabled StorageAccount#enabled}
  */
  readonly enabled: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#include_apis StorageAccount#include_apis}
  */
  readonly includeApis?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#retention_policy_days StorageAccount#retention_policy_days}
  */
  readonly retentionPolicyDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#version StorageAccount#version}
  */
  readonly version: string;
}

function storageAccountQueuePropertiesMinuteMetricsToTerraform(struct?: StorageAccountQueuePropertiesMinuteMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    include_apis: cdktf.booleanToTerraform(struct!.includeApis),
    retention_policy_days: cdktf.numberToTerraform(struct!.retentionPolicyDays),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface StorageAccountQueueProperties {
  /**
  * cors_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#cors_rule StorageAccount#cors_rule}
  */
  readonly corsRule?: StorageAccountQueuePropertiesCorsRule[];
  /**
  * hour_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#hour_metrics StorageAccount#hour_metrics}
  */
  readonly hourMetrics?: StorageAccountQueuePropertiesHourMetrics[];
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#logging StorageAccount#logging}
  */
  readonly logging?: StorageAccountQueuePropertiesLogging[];
  /**
  * minute_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#minute_metrics StorageAccount#minute_metrics}
  */
  readonly minuteMetrics?: StorageAccountQueuePropertiesMinuteMetrics[];
}

function storageAccountQueuePropertiesToTerraform(struct?: StorageAccountQueueProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cors_rule: cdktf.listMapper(storageAccountQueuePropertiesCorsRuleToTerraform)(struct!.corsRule),
    hour_metrics: cdktf.listMapper(storageAccountQueuePropertiesHourMetricsToTerraform)(struct!.hourMetrics),
    logging: cdktf.listMapper(storageAccountQueuePropertiesLoggingToTerraform)(struct!.logging),
    minute_metrics: cdktf.listMapper(storageAccountQueuePropertiesMinuteMetricsToTerraform)(struct!.minuteMetrics),
  }
}

export interface StorageAccountRouting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#choice StorageAccount#choice}
  */
  readonly choice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#publish_internet_endpoints StorageAccount#publish_internet_endpoints}
  */
  readonly publishInternetEndpoints?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#publish_microsoft_endpoints StorageAccount#publish_microsoft_endpoints}
  */
  readonly publishMicrosoftEndpoints?: boolean;
}

function storageAccountRoutingToTerraform(struct?: StorageAccountRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    choice: cdktf.stringToTerraform(struct!.choice),
    publish_internet_endpoints: cdktf.booleanToTerraform(struct!.publishInternetEndpoints),
    publish_microsoft_endpoints: cdktf.booleanToTerraform(struct!.publishMicrosoftEndpoints),
  }
}

export interface StorageAccountStaticWebsite {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#error_404_document StorageAccount#error_404_document}
  */
  readonly error404Document?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#index_document StorageAccount#index_document}
  */
  readonly indexDocument?: string;
}

function storageAccountStaticWebsiteToTerraform(struct?: StorageAccountStaticWebsite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    error_404_document: cdktf.stringToTerraform(struct!.error404Document),
    index_document: cdktf.stringToTerraform(struct!.indexDocument),
  }
}

export interface StorageAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#create StorageAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#delete StorageAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#read StorageAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html#update StorageAccount#update}
  */
  readonly update?: string;
}

function storageAccountTimeoutsToTerraform(struct?: StorageAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html azurerm_storage_account}
*/
export class StorageAccount extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account.html azurerm_storage_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageAccountConfig
  */
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
    this._allowBlobPublicAccess = config.allowBlobPublicAccess;
    this._enableHttpsTrafficOnly = config.enableHttpsTrafficOnly;
    this._isHnsEnabled = config.isHnsEnabled;
    this._largeFileShareEnabled = config.largeFileShareEnabled;
    this._location = config.location;
    this._minTlsVersion = config.minTlsVersion;
    this._name = config.name;
    this._nfsv3Enabled = config.nfsv3Enabled;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._azureFilesAuthentication = config.azureFilesAuthentication;
    this._blobProperties = config.blobProperties;
    this._customDomain = config.customDomain;
    this._identity = config.identity;
    this._networkRules = config.networkRules;
    this._queueProperties = config.queueProperties;
    this._routing = config.routing;
    this._staticWebsite = config.staticWebsite;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_tier - computed: true, optional: true, required: false
  private _accessTier?: string;
  public get accessTier() {
    return this.getStringAttribute('access_tier');
  }
  public set accessTier(value: string) {
    this._accessTier = value;
  }
  public resetAccessTier() {
    this._accessTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTierInput() {
    return this._accessTier
  }

  // account_kind - computed: false, optional: true, required: false
  private _accountKind?: string;
  public get accountKind() {
    return this.getStringAttribute('account_kind');
  }
  public set accountKind(value: string ) {
    this._accountKind = value;
  }
  public resetAccountKind() {
    this._accountKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKindInput() {
    return this._accountKind
  }

  // account_replication_type - computed: false, optional: false, required: true
  private _accountReplicationType: string;
  public get accountReplicationType() {
    return this.getStringAttribute('account_replication_type');
  }
  public set accountReplicationType(value: string) {
    this._accountReplicationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountReplicationTypeInput() {
    return this._accountReplicationType
  }

  // account_tier - computed: false, optional: false, required: true
  private _accountTier: string;
  public get accountTier() {
    return this.getStringAttribute('account_tier');
  }
  public set accountTier(value: string) {
    this._accountTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTierInput() {
    return this._accountTier
  }

  // allow_blob_public_access - computed: false, optional: true, required: false
  private _allowBlobPublicAccess?: boolean;
  public get allowBlobPublicAccess() {
    return this.getBooleanAttribute('allow_blob_public_access');
  }
  public set allowBlobPublicAccess(value: boolean ) {
    this._allowBlobPublicAccess = value;
  }
  public resetAllowBlobPublicAccess() {
    this._allowBlobPublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBlobPublicAccessInput() {
    return this._allowBlobPublicAccess
  }

  // enable_https_traffic_only - computed: false, optional: true, required: false
  private _enableHttpsTrafficOnly?: boolean;
  public get enableHttpsTrafficOnly() {
    return this.getBooleanAttribute('enable_https_traffic_only');
  }
  public set enableHttpsTrafficOnly(value: boolean ) {
    this._enableHttpsTrafficOnly = value;
  }
  public resetEnableHttpsTrafficOnly() {
    this._enableHttpsTrafficOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpsTrafficOnlyInput() {
    return this._enableHttpsTrafficOnly
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_hns_enabled - computed: false, optional: true, required: false
  private _isHnsEnabled?: boolean;
  public get isHnsEnabled() {
    return this.getBooleanAttribute('is_hns_enabled');
  }
  public set isHnsEnabled(value: boolean ) {
    this._isHnsEnabled = value;
  }
  public resetIsHnsEnabled() {
    this._isHnsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHnsEnabledInput() {
    return this._isHnsEnabled
  }

  // large_file_share_enabled - computed: true, optional: true, required: false
  private _largeFileShareEnabled?: boolean;
  public get largeFileShareEnabled() {
    return this.getBooleanAttribute('large_file_share_enabled');
  }
  public set largeFileShareEnabled(value: boolean) {
    this._largeFileShareEnabled = value;
  }
  public resetLargeFileShareEnabled() {
    this._largeFileShareEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeFileShareEnabledInput() {
    return this._largeFileShareEnabled
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

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string;
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string ) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion
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

  // nfsv3_enabled - computed: false, optional: true, required: false
  private _nfsv3Enabled?: boolean;
  public get nfsv3Enabled() {
    return this.getBooleanAttribute('nfsv3_enabled');
  }
  public set nfsv3Enabled(value: boolean ) {
    this._nfsv3Enabled = value;
  }
  public resetNfsv3Enabled() {
    this._nfsv3Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv3EnabledInput() {
    return this._nfsv3Enabled
  }

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // primary_blob_connection_string - computed: true, optional: false, required: false
  public get primaryBlobConnectionString() {
    return this.getStringAttribute('primary_blob_connection_string');
  }

  // primary_blob_endpoint - computed: true, optional: false, required: false
  public get primaryBlobEndpoint() {
    return this.getStringAttribute('primary_blob_endpoint');
  }

  // primary_blob_host - computed: true, optional: false, required: false
  public get primaryBlobHost() {
    return this.getStringAttribute('primary_blob_host');
  }

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // primary_dfs_endpoint - computed: true, optional: false, required: false
  public get primaryDfsEndpoint() {
    return this.getStringAttribute('primary_dfs_endpoint');
  }

  // primary_dfs_host - computed: true, optional: false, required: false
  public get primaryDfsHost() {
    return this.getStringAttribute('primary_dfs_host');
  }

  // primary_file_endpoint - computed: true, optional: false, required: false
  public get primaryFileEndpoint() {
    return this.getStringAttribute('primary_file_endpoint');
  }

  // primary_file_host - computed: true, optional: false, required: false
  public get primaryFileHost() {
    return this.getStringAttribute('primary_file_host');
  }

  // primary_location - computed: true, optional: false, required: false
  public get primaryLocation() {
    return this.getStringAttribute('primary_location');
  }

  // primary_queue_endpoint - computed: true, optional: false, required: false
  public get primaryQueueEndpoint() {
    return this.getStringAttribute('primary_queue_endpoint');
  }

  // primary_queue_host - computed: true, optional: false, required: false
  public get primaryQueueHost() {
    return this.getStringAttribute('primary_queue_host');
  }

  // primary_table_endpoint - computed: true, optional: false, required: false
  public get primaryTableEndpoint() {
    return this.getStringAttribute('primary_table_endpoint');
  }

  // primary_table_host - computed: true, optional: false, required: false
  public get primaryTableHost() {
    return this.getStringAttribute('primary_table_host');
  }

  // primary_web_endpoint - computed: true, optional: false, required: false
  public get primaryWebEndpoint() {
    return this.getStringAttribute('primary_web_endpoint');
  }

  // primary_web_host - computed: true, optional: false, required: false
  public get primaryWebHost() {
    return this.getStringAttribute('primary_web_host');
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // secondary_blob_connection_string - computed: true, optional: false, required: false
  public get secondaryBlobConnectionString() {
    return this.getStringAttribute('secondary_blob_connection_string');
  }

  // secondary_blob_endpoint - computed: true, optional: false, required: false
  public get secondaryBlobEndpoint() {
    return this.getStringAttribute('secondary_blob_endpoint');
  }

  // secondary_blob_host - computed: true, optional: false, required: false
  public get secondaryBlobHost() {
    return this.getStringAttribute('secondary_blob_host');
  }

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // secondary_dfs_endpoint - computed: true, optional: false, required: false
  public get secondaryDfsEndpoint() {
    return this.getStringAttribute('secondary_dfs_endpoint');
  }

  // secondary_dfs_host - computed: true, optional: false, required: false
  public get secondaryDfsHost() {
    return this.getStringAttribute('secondary_dfs_host');
  }

  // secondary_file_endpoint - computed: true, optional: false, required: false
  public get secondaryFileEndpoint() {
    return this.getStringAttribute('secondary_file_endpoint');
  }

  // secondary_file_host - computed: true, optional: false, required: false
  public get secondaryFileHost() {
    return this.getStringAttribute('secondary_file_host');
  }

  // secondary_location - computed: true, optional: false, required: false
  public get secondaryLocation() {
    return this.getStringAttribute('secondary_location');
  }

  // secondary_queue_endpoint - computed: true, optional: false, required: false
  public get secondaryQueueEndpoint() {
    return this.getStringAttribute('secondary_queue_endpoint');
  }

  // secondary_queue_host - computed: true, optional: false, required: false
  public get secondaryQueueHost() {
    return this.getStringAttribute('secondary_queue_host');
  }

  // secondary_table_endpoint - computed: true, optional: false, required: false
  public get secondaryTableEndpoint() {
    return this.getStringAttribute('secondary_table_endpoint');
  }

  // secondary_table_host - computed: true, optional: false, required: false
  public get secondaryTableHost() {
    return this.getStringAttribute('secondary_table_host');
  }

  // secondary_web_endpoint - computed: true, optional: false, required: false
  public get secondaryWebEndpoint() {
    return this.getStringAttribute('secondary_web_endpoint');
  }

  // secondary_web_host - computed: true, optional: false, required: false
  public get secondaryWebHost() {
    return this.getStringAttribute('secondary_web_host');
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

  // azure_files_authentication - computed: false, optional: true, required: false
  private _azureFilesAuthentication?: StorageAccountAzureFilesAuthentication[];
  public get azureFilesAuthentication() {
    return this.interpolationForAttribute('azure_files_authentication') as any;
  }
  public set azureFilesAuthentication(value: StorageAccountAzureFilesAuthentication[] ) {
    this._azureFilesAuthentication = value;
  }
  public resetAzureFilesAuthentication() {
    this._azureFilesAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFilesAuthenticationInput() {
    return this._azureFilesAuthentication
  }

  // blob_properties - computed: false, optional: true, required: false
  private _blobProperties?: StorageAccountBlobProperties[];
  public get blobProperties() {
    return this.interpolationForAttribute('blob_properties') as any;
  }
  public set blobProperties(value: StorageAccountBlobProperties[] ) {
    this._blobProperties = value;
  }
  public resetBlobProperties() {
    this._blobProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobPropertiesInput() {
    return this._blobProperties
  }

  // custom_domain - computed: false, optional: true, required: false
  private _customDomain?: StorageAccountCustomDomain[];
  public get customDomain() {
    return this.interpolationForAttribute('custom_domain') as any;
  }
  public set customDomain(value: StorageAccountCustomDomain[] ) {
    this._customDomain = value;
  }
  public resetCustomDomain() {
    this._customDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: StorageAccountIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: StorageAccountIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // network_rules - computed: false, optional: true, required: false
  private _networkRules?: StorageAccountNetworkRules[];
  public get networkRules() {
    return this.interpolationForAttribute('network_rules') as any;
  }
  public set networkRules(value: StorageAccountNetworkRules[] ) {
    this._networkRules = value;
  }
  public resetNetworkRules() {
    this._networkRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRulesInput() {
    return this._networkRules
  }

  // queue_properties - computed: false, optional: true, required: false
  private _queueProperties?: StorageAccountQueueProperties[];
  public get queueProperties() {
    return this.interpolationForAttribute('queue_properties') as any;
  }
  public set queueProperties(value: StorageAccountQueueProperties[] ) {
    this._queueProperties = value;
  }
  public resetQueueProperties() {
    this._queueProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuePropertiesInput() {
    return this._queueProperties
  }

  // routing - computed: false, optional: true, required: false
  private _routing?: StorageAccountRouting[];
  public get routing() {
    return this.interpolationForAttribute('routing') as any;
  }
  public set routing(value: StorageAccountRouting[] ) {
    this._routing = value;
  }
  public resetRouting() {
    this._routing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing
  }

  // static_website - computed: false, optional: true, required: false
  private _staticWebsite?: StorageAccountStaticWebsite[];
  public get staticWebsite() {
    return this.interpolationForAttribute('static_website') as any;
  }
  public set staticWebsite(value: StorageAccountStaticWebsite[] ) {
    this._staticWebsite = value;
  }
  public resetStaticWebsite() {
    this._staticWebsite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticWebsiteInput() {
    return this._staticWebsite
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageAccountTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageAccountTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_tier: cdktf.stringToTerraform(this._accessTier),
      account_kind: cdktf.stringToTerraform(this._accountKind),
      account_replication_type: cdktf.stringToTerraform(this._accountReplicationType),
      account_tier: cdktf.stringToTerraform(this._accountTier),
      allow_blob_public_access: cdktf.booleanToTerraform(this._allowBlobPublicAccess),
      enable_https_traffic_only: cdktf.booleanToTerraform(this._enableHttpsTrafficOnly),
      is_hns_enabled: cdktf.booleanToTerraform(this._isHnsEnabled),
      large_file_share_enabled: cdktf.booleanToTerraform(this._largeFileShareEnabled),
      location: cdktf.stringToTerraform(this._location),
      min_tls_version: cdktf.stringToTerraform(this._minTlsVersion),
      name: cdktf.stringToTerraform(this._name),
      nfsv3_enabled: cdktf.booleanToTerraform(this._nfsv3Enabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      azure_files_authentication: cdktf.listMapper(storageAccountAzureFilesAuthenticationToTerraform)(this._azureFilesAuthentication),
      blob_properties: cdktf.listMapper(storageAccountBlobPropertiesToTerraform)(this._blobProperties),
      custom_domain: cdktf.listMapper(storageAccountCustomDomainToTerraform)(this._customDomain),
      identity: cdktf.listMapper(storageAccountIdentityToTerraform)(this._identity),
      network_rules: cdktf.listMapper(storageAccountNetworkRulesToTerraform)(this._networkRules),
      queue_properties: cdktf.listMapper(storageAccountQueuePropertiesToTerraform)(this._queueProperties),
      routing: cdktf.listMapper(storageAccountRoutingToTerraform)(this._routing),
      static_website: cdktf.listMapper(storageAccountStaticWebsiteToTerraform)(this._staticWebsite),
      timeouts: storageAccountTimeoutsToTerraform(this._timeouts),
    };
  }
}
