// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#access_tier StorageAccount#access_tier}
  */
  readonly accessTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}
  */
  readonly accountKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}
  */
  readonly accountReplicationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}
  */
  readonly accountTier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#allow_nested_items_to_be_public StorageAccount#allow_nested_items_to_be_public}
  */
  readonly allowNestedItemsToBePublic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#allowed_copy_scope StorageAccount#allowed_copy_scope}
  */
  readonly allowedCopyScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#cross_tenant_replication_enabled StorageAccount#cross_tenant_replication_enabled}
  */
  readonly crossTenantReplicationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#default_to_oauth_authentication StorageAccount#default_to_oauth_authentication}
  */
  readonly defaultToOauthAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#dns_endpoint_type StorageAccount#dns_endpoint_type}
  */
  readonly dnsEndpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#edge_zone StorageAccount#edge_zone}
  */
  readonly edgeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#https_traffic_only_enabled StorageAccount#https_traffic_only_enabled}
  */
  readonly httpsTrafficOnlyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#id StorageAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}
  */
  readonly infrastructureEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#is_hns_enabled StorageAccount#is_hns_enabled}
  */
  readonly isHnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#large_file_share_enabled StorageAccount#large_file_share_enabled}
  */
  readonly largeFileShareEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#local_user_enabled StorageAccount#local_user_enabled}
  */
  readonly localUserEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#location StorageAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#min_tls_version StorageAccount#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#name StorageAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#nfsv3_enabled StorageAccount#nfsv3_enabled}
  */
  readonly nfsv3Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#public_network_access_enabled StorageAccount#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#queue_encryption_key_type StorageAccount#queue_encryption_key_type}
  */
  readonly queueEncryptionKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#sftp_enabled StorageAccount#sftp_enabled}
  */
  readonly sftpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#shared_access_key_enabled StorageAccount#shared_access_key_enabled}
  */
  readonly sharedAccessKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#table_encryption_key_type StorageAccount#table_encryption_key_type}
  */
  readonly tableEncryptionKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#tags StorageAccount#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * azure_files_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#azure_files_authentication StorageAccount#azure_files_authentication}
  */
  readonly azureFilesAuthentication?: StorageAccountAzureFilesAuthentication;
  /**
  * blob_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#blob_properties StorageAccount#blob_properties}
  */
  readonly blobProperties?: StorageAccountBlobProperties;
  /**
  * custom_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#custom_domain StorageAccount#custom_domain}
  */
  readonly customDomain?: StorageAccountCustomDomain;
  /**
  * customer_managed_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#customer_managed_key StorageAccount#customer_managed_key}
  */
  readonly customerManagedKey?: StorageAccountCustomerManagedKey;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#identity StorageAccount#identity}
  */
  readonly identity?: StorageAccountIdentity;
  /**
  * immutability_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#immutability_policy StorageAccount#immutability_policy}
  */
  readonly immutabilityPolicy?: StorageAccountImmutabilityPolicy;
  /**
  * network_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#network_rules StorageAccount#network_rules}
  */
  readonly networkRules?: StorageAccountNetworkRules;
  /**
  * queue_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#queue_properties StorageAccount#queue_properties}
  */
  readonly queueProperties?: StorageAccountQueueProperties;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#routing StorageAccount#routing}
  */
  readonly routing?: StorageAccountRouting;
  /**
  * sas_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#sas_policy StorageAccount#sas_policy}
  */
  readonly sasPolicy?: StorageAccountSasPolicy;
  /**
  * share_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#share_properties StorageAccount#share_properties}
  */
  readonly shareProperties?: StorageAccountShareProperties;
  /**
  * static_website block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#static_website StorageAccount#static_website}
  */
  readonly staticWebsite?: StorageAccountStaticWebsite;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#timeouts StorageAccount#timeouts}
  */
  readonly timeouts?: StorageAccountTimeouts;
}
export interface StorageAccountAzureFilesAuthenticationActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#domain_guid StorageAccount#domain_guid}
  */
  readonly domainGuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#domain_name StorageAccount#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#domain_sid StorageAccount#domain_sid}
  */
  readonly domainSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#forest_name StorageAccount#forest_name}
  */
  readonly forestName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#netbios_domain_name StorageAccount#netbios_domain_name}
  */
  readonly netbiosDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#storage_sid StorageAccount#storage_sid}
  */
  readonly storageSid?: string;
}

export function storageAccountAzureFilesAuthenticationActiveDirectoryToTerraform(struct?: StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference | StorageAccountAzureFilesAuthenticationActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_guid: cdktf.stringToTerraform(struct!.domainGuid),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_sid: cdktf.stringToTerraform(struct!.domainSid),
    forest_name: cdktf.stringToTerraform(struct!.forestName),
    netbios_domain_name: cdktf.stringToTerraform(struct!.netbiosDomainName),
    storage_sid: cdktf.stringToTerraform(struct!.storageSid),
  }
}


export function storageAccountAzureFilesAuthenticationActiveDirectoryToHclTerraform(struct?: StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference | StorageAccountAzureFilesAuthenticationActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_guid: {
      value: cdktf.stringToHclTerraform(struct!.domainGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_sid: {
      value: cdktf.stringToHclTerraform(struct!.domainSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forest_name: {
      value: cdktf.stringToHclTerraform(struct!.forestName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netbios_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.netbiosDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_sid: {
      value: cdktf.stringToHclTerraform(struct!.storageSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountAzureFilesAuthenticationActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainGuid = this._domainGuid;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._domainSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainSid = this._domainSid;
    }
    if (this._forestName !== undefined) {
      hasAnyValues = true;
      internalValueResult.forestName = this._forestName;
    }
    if (this._netbiosDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.netbiosDomainName = this._netbiosDomainName;
    }
    if (this._storageSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSid = this._storageSid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountAzureFilesAuthenticationActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainGuid = undefined;
      this._domainName = undefined;
      this._domainSid = undefined;
      this._forestName = undefined;
      this._netbiosDomainName = undefined;
      this._storageSid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainGuid = value.domainGuid;
      this._domainName = value.domainName;
      this._domainSid = value.domainSid;
      this._forestName = value.forestName;
      this._netbiosDomainName = value.netbiosDomainName;
      this._storageSid = value.storageSid;
    }
  }

  // domain_guid - computed: false, optional: false, required: true
  private _domainGuid?: string; 
  public get domainGuid() {
    return this.getStringAttribute('domain_guid');
  }
  public set domainGuid(value: string) {
    this._domainGuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGuidInput() {
    return this._domainGuid;
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

  // domain_sid - computed: false, optional: true, required: false
  private _domainSid?: string; 
  public get domainSid() {
    return this.getStringAttribute('domain_sid');
  }
  public set domainSid(value: string) {
    this._domainSid = value;
  }
  public resetDomainSid() {
    this._domainSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSidInput() {
    return this._domainSid;
  }

  // forest_name - computed: false, optional: true, required: false
  private _forestName?: string; 
  public get forestName() {
    return this.getStringAttribute('forest_name');
  }
  public set forestName(value: string) {
    this._forestName = value;
  }
  public resetForestName() {
    this._forestName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forestNameInput() {
    return this._forestName;
  }

  // netbios_domain_name - computed: false, optional: true, required: false
  private _netbiosDomainName?: string; 
  public get netbiosDomainName() {
    return this.getStringAttribute('netbios_domain_name');
  }
  public set netbiosDomainName(value: string) {
    this._netbiosDomainName = value;
  }
  public resetNetbiosDomainName() {
    this._netbiosDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosDomainNameInput() {
    return this._netbiosDomainName;
  }

  // storage_sid - computed: false, optional: true, required: false
  private _storageSid?: string; 
  public get storageSid() {
    return this.getStringAttribute('storage_sid');
  }
  public set storageSid(value: string) {
    this._storageSid = value;
  }
  public resetStorageSid() {
    this._storageSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSidInput() {
    return this._storageSid;
  }
}
export interface StorageAccountAzureFilesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#default_share_level_permission StorageAccount#default_share_level_permission}
  */
  readonly defaultShareLevelPermission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#directory_type StorageAccount#directory_type}
  */
  readonly directoryType: string;
  /**
  * active_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#active_directory StorageAccount#active_directory}
  */
  readonly activeDirectory?: StorageAccountAzureFilesAuthenticationActiveDirectory;
}

export function storageAccountAzureFilesAuthenticationToTerraform(struct?: StorageAccountAzureFilesAuthenticationOutputReference | StorageAccountAzureFilesAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_share_level_permission: cdktf.stringToTerraform(struct!.defaultShareLevelPermission),
    directory_type: cdktf.stringToTerraform(struct!.directoryType),
    active_directory: storageAccountAzureFilesAuthenticationActiveDirectoryToTerraform(struct!.activeDirectory),
  }
}


export function storageAccountAzureFilesAuthenticationToHclTerraform(struct?: StorageAccountAzureFilesAuthenticationOutputReference | StorageAccountAzureFilesAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_share_level_permission: {
      value: cdktf.stringToHclTerraform(struct!.defaultShareLevelPermission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory_type: {
      value: cdktf.stringToHclTerraform(struct!.directoryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_directory: {
      value: storageAccountAzureFilesAuthenticationActiveDirectoryToHclTerraform(struct!.activeDirectory),
      isBlock: true,
      type: "list",
      storageClassType: "StorageAccountAzureFilesAuthenticationActiveDirectoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountAzureFilesAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountAzureFilesAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultShareLevelPermission !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultShareLevelPermission = this._defaultShareLevelPermission;
    }
    if (this._directoryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryType = this._directoryType;
    }
    if (this._activeDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectory = this._activeDirectory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountAzureFilesAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultShareLevelPermission = undefined;
      this._directoryType = undefined;
      this._activeDirectory.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultShareLevelPermission = value.defaultShareLevelPermission;
      this._directoryType = value.directoryType;
      this._activeDirectory.internalValue = value.activeDirectory;
    }
  }

  // default_share_level_permission - computed: false, optional: true, required: false
  private _defaultShareLevelPermission?: string; 
  public get defaultShareLevelPermission() {
    return this.getStringAttribute('default_share_level_permission');
  }
  public set defaultShareLevelPermission(value: string) {
    this._defaultShareLevelPermission = value;
  }
  public resetDefaultShareLevelPermission() {
    this._defaultShareLevelPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultShareLevelPermissionInput() {
    return this._defaultShareLevelPermission;
  }

  // directory_type - computed: false, optional: false, required: true
  private _directoryType?: string; 
  public get directoryType() {
    return this.getStringAttribute('directory_type');
  }
  public set directoryType(value: string) {
    this._directoryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryTypeInput() {
    return this._directoryType;
  }

  // active_directory - computed: false, optional: true, required: false
  private _activeDirectory = new StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference(this, "active_directory");
  public get activeDirectory() {
    return this._activeDirectory;
  }
  public putActiveDirectory(value: StorageAccountAzureFilesAuthenticationActiveDirectory) {
    this._activeDirectory.internalValue = value;
  }
  public resetActiveDirectory() {
    this._activeDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryInput() {
    return this._activeDirectory.internalValue;
  }
}
export interface StorageAccountBlobPropertiesContainerDeleteRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#days StorageAccount#days}
  */
  readonly days?: number;
}

export function storageAccountBlobPropertiesContainerDeleteRetentionPolicyToTerraform(struct?: StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference | StorageAccountBlobPropertiesContainerDeleteRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function storageAccountBlobPropertiesContainerDeleteRetentionPolicyToHclTerraform(struct?: StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference | StorageAccountBlobPropertiesContainerDeleteRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountBlobPropertiesContainerDeleteRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface StorageAccountBlobPropertiesCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}
  */
  readonly allowedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}
  */
  readonly exposedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}
  */
  readonly maxAgeInSeconds: number;
}

export function storageAccountBlobPropertiesCorsRuleToTerraform(struct?: StorageAccountBlobPropertiesCorsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposedHeaders),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
  }
}


export function storageAccountBlobPropertiesCorsRuleToHclTerraform(struct?: StorageAccountBlobPropertiesCorsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exposed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountBlobPropertiesCorsRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageAccountBlobPropertiesCorsRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._exposedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedHeaders = this._exposedHeaders;
    }
    if (this._maxAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeInSeconds = this._maxAgeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountBlobPropertiesCorsRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._exposedHeaders = undefined;
      this._maxAgeInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._exposedHeaders = value.exposedHeaders;
      this._maxAgeInSeconds = value.maxAgeInSeconds;
    }
  }

  // allowed_headers - computed: false, optional: false, required: true
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: false, optional: false, required: true
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // exposed_headers - computed: false, optional: false, required: true
  private _exposedHeaders?: string[]; 
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }
  public set exposedHeaders(value: string[]) {
    this._exposedHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedHeadersInput() {
    return this._exposedHeaders;
  }

  // max_age_in_seconds - computed: false, optional: false, required: true
  private _maxAgeInSeconds?: number; 
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
  public set maxAgeInSeconds(value: number) {
    this._maxAgeInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInSecondsInput() {
    return this._maxAgeInSeconds;
  }
}

export class StorageAccountBlobPropertiesCorsRuleList extends cdktf.ComplexList {
  public internalValue? : StorageAccountBlobPropertiesCorsRule[] | cdktf.IResolvable

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
  public get(index: number): StorageAccountBlobPropertiesCorsRuleOutputReference {
    return new StorageAccountBlobPropertiesCorsRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageAccountBlobPropertiesDeleteRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#days StorageAccount#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#permanent_delete_enabled StorageAccount#permanent_delete_enabled}
  */
  readonly permanentDeleteEnabled?: boolean | cdktf.IResolvable;
}

export function storageAccountBlobPropertiesDeleteRetentionPolicyToTerraform(struct?: StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference | StorageAccountBlobPropertiesDeleteRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    permanent_delete_enabled: cdktf.booleanToTerraform(struct!.permanentDeleteEnabled),
  }
}


export function storageAccountBlobPropertiesDeleteRetentionPolicyToHclTerraform(struct?: StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference | StorageAccountBlobPropertiesDeleteRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permanent_delete_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.permanentDeleteEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountBlobPropertiesDeleteRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._permanentDeleteEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanentDeleteEnabled = this._permanentDeleteEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountBlobPropertiesDeleteRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._permanentDeleteEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._permanentDeleteEnabled = value.permanentDeleteEnabled;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // permanent_delete_enabled - computed: false, optional: true, required: false
  private _permanentDeleteEnabled?: boolean | cdktf.IResolvable; 
  public get permanentDeleteEnabled() {
    return this.getBooleanAttribute('permanent_delete_enabled');
  }
  public set permanentDeleteEnabled(value: boolean | cdktf.IResolvable) {
    this._permanentDeleteEnabled = value;
  }
  public resetPermanentDeleteEnabled() {
    this._permanentDeleteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentDeleteEnabledInput() {
    return this._permanentDeleteEnabled;
  }
}
export interface StorageAccountBlobPropertiesRestorePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#days StorageAccount#days}
  */
  readonly days: number;
}

export function storageAccountBlobPropertiesRestorePolicyToTerraform(struct?: StorageAccountBlobPropertiesRestorePolicyOutputReference | StorageAccountBlobPropertiesRestorePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function storageAccountBlobPropertiesRestorePolicyToHclTerraform(struct?: StorageAccountBlobPropertiesRestorePolicyOutputReference | StorageAccountBlobPropertiesRestorePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountBlobPropertiesRestorePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountBlobPropertiesRestorePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountBlobPropertiesRestorePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: false, required: true
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface StorageAccountBlobProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#change_feed_enabled StorageAccount#change_feed_enabled}
  */
  readonly changeFeedEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#change_feed_retention_in_days StorageAccount#change_feed_retention_in_days}
  */
  readonly changeFeedRetentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#default_service_version StorageAccount#default_service_version}
  */
  readonly defaultServiceVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#last_access_time_enabled StorageAccount#last_access_time_enabled}
  */
  readonly lastAccessTimeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#versioning_enabled StorageAccount#versioning_enabled}
  */
  readonly versioningEnabled?: boolean | cdktf.IResolvable;
  /**
  * container_delete_retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#container_delete_retention_policy StorageAccount#container_delete_retention_policy}
  */
  readonly containerDeleteRetentionPolicy?: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy;
  /**
  * cors_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}
  */
  readonly corsRule?: StorageAccountBlobPropertiesCorsRule[] | cdktf.IResolvable;
  /**
  * delete_retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#delete_retention_policy StorageAccount#delete_retention_policy}
  */
  readonly deleteRetentionPolicy?: StorageAccountBlobPropertiesDeleteRetentionPolicy;
  /**
  * restore_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#restore_policy StorageAccount#restore_policy}
  */
  readonly restorePolicy?: StorageAccountBlobPropertiesRestorePolicy;
}

export function storageAccountBlobPropertiesToTerraform(struct?: StorageAccountBlobPropertiesOutputReference | StorageAccountBlobProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_feed_enabled: cdktf.booleanToTerraform(struct!.changeFeedEnabled),
    change_feed_retention_in_days: cdktf.numberToTerraform(struct!.changeFeedRetentionInDays),
    default_service_version: cdktf.stringToTerraform(struct!.defaultServiceVersion),
    last_access_time_enabled: cdktf.booleanToTerraform(struct!.lastAccessTimeEnabled),
    versioning_enabled: cdktf.booleanToTerraform(struct!.versioningEnabled),
    container_delete_retention_policy: storageAccountBlobPropertiesContainerDeleteRetentionPolicyToTerraform(struct!.containerDeleteRetentionPolicy),
    cors_rule: cdktf.listMapper(storageAccountBlobPropertiesCorsRuleToTerraform, true)(struct!.corsRule),
    delete_retention_policy: storageAccountBlobPropertiesDeleteRetentionPolicyToTerraform(struct!.deleteRetentionPolicy),
    restore_policy: storageAccountBlobPropertiesRestorePolicyToTerraform(struct!.restorePolicy),
  }
}


export function storageAccountBlobPropertiesToHclTerraform(struct?: StorageAccountBlobPropertiesOutputReference | StorageAccountBlobProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    change_feed_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.changeFeedEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    change_feed_retention_in_days: {
      value: cdktf.numberToHclTerraform(struct!.changeFeedRetentionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_service_version: {
      value: cdktf.stringToHclTerraform(struct!.defaultServiceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_access_time_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.lastAccessTimeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    versioning_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.versioningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    container_delete_retention_policy: {
      value: storageAccountBlobPropertiesContainerDeleteRetentionPolicyToHclTerraform(struct!.containerDeleteRetentionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "StorageAccountBlobPropertiesContainerDeleteRetentionPolicyList",
    },
    cors_rule: {
      value: cdktf.listMapperHcl(storageAccountBlobPropertiesCorsRuleToHclTerraform, true)(struct!.corsRule),
      isBlock: true,
      type: "list",
      storageClassType: "StorageAccountBlobPropertiesCorsRuleList",
    },
    delete_retention_policy: {
      value: storageAccountBlobPropertiesDeleteRetentionPolicyToHclTerraform(struct!.deleteRetentionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "StorageAccountBlobPropertiesDeleteRetentionPolicyList",
    },
    restore_policy: {
      value: storageAccountBlobPropertiesRestorePolicyToHclTerraform(struct!.restorePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "StorageAccountBlobPropertiesRestorePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountBlobPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountBlobProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeFeedEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeFeedEnabled = this._changeFeedEnabled;
    }
    if (this._changeFeedRetentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeFeedRetentionInDays = this._changeFeedRetentionInDays;
    }
    if (this._defaultServiceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultServiceVersion = this._defaultServiceVersion;
    }
    if (this._lastAccessTimeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAccessTimeEnabled = this._lastAccessTimeEnabled;
    }
    if (this._versioningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.versioningEnabled = this._versioningEnabled;
    }
    if (this._containerDeleteRetentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerDeleteRetentionPolicy = this._containerDeleteRetentionPolicy?.internalValue;
    }
    if (this._corsRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsRule = this._corsRule?.internalValue;
    }
    if (this._deleteRetentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetentionPolicy = this._deleteRetentionPolicy?.internalValue;
    }
    if (this._restorePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restorePolicy = this._restorePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountBlobProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changeFeedEnabled = undefined;
      this._changeFeedRetentionInDays = undefined;
      this._defaultServiceVersion = undefined;
      this._lastAccessTimeEnabled = undefined;
      this._versioningEnabled = undefined;
      this._containerDeleteRetentionPolicy.internalValue = undefined;
      this._corsRule.internalValue = undefined;
      this._deleteRetentionPolicy.internalValue = undefined;
      this._restorePolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changeFeedEnabled = value.changeFeedEnabled;
      this._changeFeedRetentionInDays = value.changeFeedRetentionInDays;
      this._defaultServiceVersion = value.defaultServiceVersion;
      this._lastAccessTimeEnabled = value.lastAccessTimeEnabled;
      this._versioningEnabled = value.versioningEnabled;
      this._containerDeleteRetentionPolicy.internalValue = value.containerDeleteRetentionPolicy;
      this._corsRule.internalValue = value.corsRule;
      this._deleteRetentionPolicy.internalValue = value.deleteRetentionPolicy;
      this._restorePolicy.internalValue = value.restorePolicy;
    }
  }

  // change_feed_enabled - computed: false, optional: true, required: false
  private _changeFeedEnabled?: boolean | cdktf.IResolvable; 
  public get changeFeedEnabled() {
    return this.getBooleanAttribute('change_feed_enabled');
  }
  public set changeFeedEnabled(value: boolean | cdktf.IResolvable) {
    this._changeFeedEnabled = value;
  }
  public resetChangeFeedEnabled() {
    this._changeFeedEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeFeedEnabledInput() {
    return this._changeFeedEnabled;
  }

  // change_feed_retention_in_days - computed: false, optional: true, required: false
  private _changeFeedRetentionInDays?: number; 
  public get changeFeedRetentionInDays() {
    return this.getNumberAttribute('change_feed_retention_in_days');
  }
  public set changeFeedRetentionInDays(value: number) {
    this._changeFeedRetentionInDays = value;
  }
  public resetChangeFeedRetentionInDays() {
    this._changeFeedRetentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeFeedRetentionInDaysInput() {
    return this._changeFeedRetentionInDays;
  }

  // default_service_version - computed: true, optional: true, required: false
  private _defaultServiceVersion?: string; 
  public get defaultServiceVersion() {
    return this.getStringAttribute('default_service_version');
  }
  public set defaultServiceVersion(value: string) {
    this._defaultServiceVersion = value;
  }
  public resetDefaultServiceVersion() {
    this._defaultServiceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceVersionInput() {
    return this._defaultServiceVersion;
  }

  // last_access_time_enabled - computed: false, optional: true, required: false
  private _lastAccessTimeEnabled?: boolean | cdktf.IResolvable; 
  public get lastAccessTimeEnabled() {
    return this.getBooleanAttribute('last_access_time_enabled');
  }
  public set lastAccessTimeEnabled(value: boolean | cdktf.IResolvable) {
    this._lastAccessTimeEnabled = value;
  }
  public resetLastAccessTimeEnabled() {
    this._lastAccessTimeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAccessTimeEnabledInput() {
    return this._lastAccessTimeEnabled;
  }

  // versioning_enabled - computed: false, optional: true, required: false
  private _versioningEnabled?: boolean | cdktf.IResolvable; 
  public get versioningEnabled() {
    return this.getBooleanAttribute('versioning_enabled');
  }
  public set versioningEnabled(value: boolean | cdktf.IResolvable) {
    this._versioningEnabled = value;
  }
  public resetVersioningEnabled() {
    this._versioningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningEnabledInput() {
    return this._versioningEnabled;
  }

  // container_delete_retention_policy - computed: false, optional: true, required: false
  private _containerDeleteRetentionPolicy = new StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference(this, "container_delete_retention_policy");
  public get containerDeleteRetentionPolicy() {
    return this._containerDeleteRetentionPolicy;
  }
  public putContainerDeleteRetentionPolicy(value: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy) {
    this._containerDeleteRetentionPolicy.internalValue = value;
  }
  public resetContainerDeleteRetentionPolicy() {
    this._containerDeleteRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDeleteRetentionPolicyInput() {
    return this._containerDeleteRetentionPolicy.internalValue;
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule = new StorageAccountBlobPropertiesCorsRuleList(this, "cors_rule", false);
  public get corsRule() {
    return this._corsRule;
  }
  public putCorsRule(value: StorageAccountBlobPropertiesCorsRule[] | cdktf.IResolvable) {
    this._corsRule.internalValue = value;
  }
  public resetCorsRule() {
    this._corsRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule.internalValue;
  }

  // delete_retention_policy - computed: false, optional: true, required: false
  private _deleteRetentionPolicy = new StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference(this, "delete_retention_policy");
  public get deleteRetentionPolicy() {
    return this._deleteRetentionPolicy;
  }
  public putDeleteRetentionPolicy(value: StorageAccountBlobPropertiesDeleteRetentionPolicy) {
    this._deleteRetentionPolicy.internalValue = value;
  }
  public resetDeleteRetentionPolicy() {
    this._deleteRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionPolicyInput() {
    return this._deleteRetentionPolicy.internalValue;
  }

  // restore_policy - computed: false, optional: true, required: false
  private _restorePolicy = new StorageAccountBlobPropertiesRestorePolicyOutputReference(this, "restore_policy");
  public get restorePolicy() {
    return this._restorePolicy;
  }
  public putRestorePolicy(value: StorageAccountBlobPropertiesRestorePolicy) {
    this._restorePolicy.internalValue = value;
  }
  public resetRestorePolicy() {
    this._restorePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorePolicyInput() {
    return this._restorePolicy.internalValue;
  }
}
export interface StorageAccountCustomDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#name StorageAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#use_subdomain StorageAccount#use_subdomain}
  */
  readonly useSubdomain?: boolean | cdktf.IResolvable;
}

export function storageAccountCustomDomainToTerraform(struct?: StorageAccountCustomDomainOutputReference | StorageAccountCustomDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    use_subdomain: cdktf.booleanToTerraform(struct!.useSubdomain),
  }
}


export function storageAccountCustomDomainToHclTerraform(struct?: StorageAccountCustomDomainOutputReference | StorageAccountCustomDomain): any {
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
    use_subdomain: {
      value: cdktf.booleanToHclTerraform(struct!.useSubdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountCustomDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountCustomDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useSubdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSubdomain = this._useSubdomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountCustomDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._useSubdomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._useSubdomain = value.useSubdomain;
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

  // use_subdomain - computed: false, optional: true, required: false
  private _useSubdomain?: boolean | cdktf.IResolvable; 
  public get useSubdomain() {
    return this.getBooleanAttribute('use_subdomain');
  }
  public set useSubdomain(value: boolean | cdktf.IResolvable) {
    this._useSubdomain = value;
  }
  public resetUseSubdomain() {
    this._useSubdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSubdomainInput() {
    return this._useSubdomain;
  }
}
export interface StorageAccountCustomerManagedKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#key_vault_key_id StorageAccount#key_vault_key_id}
  */
  readonly keyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#managed_hsm_key_id StorageAccount#managed_hsm_key_id}
  */
  readonly managedHsmKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#user_assigned_identity_id StorageAccount#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId: string;
}

export function storageAccountCustomerManagedKeyToTerraform(struct?: StorageAccountCustomerManagedKeyOutputReference | StorageAccountCustomerManagedKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_key_id: cdktf.stringToTerraform(struct!.keyVaultKeyId),
    managed_hsm_key_id: cdktf.stringToTerraform(struct!.managedHsmKeyId),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
  }
}


export function storageAccountCustomerManagedKeyToHclTerraform(struct?: StorageAccountCustomerManagedKeyOutputReference | StorageAccountCustomerManagedKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_vault_key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_hsm_key_id: {
      value: cdktf.stringToHclTerraform(struct!.managedHsmKeyId),
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

export class StorageAccountCustomerManagedKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountCustomerManagedKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyVaultKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultKeyId = this._keyVaultKeyId;
    }
    if (this._managedHsmKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedHsmKeyId = this._managedHsmKeyId;
    }
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountCustomerManagedKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyVaultKeyId = undefined;
      this._managedHsmKeyId = undefined;
      this._userAssignedIdentityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyVaultKeyId = value.keyVaultKeyId;
      this._managedHsmKeyId = value.managedHsmKeyId;
      this._userAssignedIdentityId = value.userAssignedIdentityId;
    }
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

  // managed_hsm_key_id - computed: false, optional: true, required: false
  private _managedHsmKeyId?: string; 
  public get managedHsmKeyId() {
    return this.getStringAttribute('managed_hsm_key_id');
  }
  public set managedHsmKeyId(value: string) {
    this._managedHsmKeyId = value;
  }
  public resetManagedHsmKeyId() {
    this._managedHsmKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedHsmKeyIdInput() {
    return this._managedHsmKeyId;
  }

  // user_assigned_identity_id - computed: false, optional: false, required: true
  private _userAssignedIdentityId?: string; 
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string) {
    this._userAssignedIdentityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId;
  }
}
export interface StorageAccountIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#identity_ids StorageAccount#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#type StorageAccount#type}
  */
  readonly type: string;
}

export function storageAccountIdentityToTerraform(struct?: StorageAccountIdentityOutputReference | StorageAccountIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function storageAccountIdentityToHclTerraform(struct?: StorageAccountIdentityOutputReference | StorageAccountIdentity): any {
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

export class StorageAccountIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountIdentity | undefined {
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

  public set internalValue(value: StorageAccountIdentity | undefined) {
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
export interface StorageAccountImmutabilityPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#allow_protected_append_writes StorageAccount#allow_protected_append_writes}
  */
  readonly allowProtectedAppendWrites: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#period_since_creation_in_days StorageAccount#period_since_creation_in_days}
  */
  readonly periodSinceCreationInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#state StorageAccount#state}
  */
  readonly state: string;
}

export function storageAccountImmutabilityPolicyToTerraform(struct?: StorageAccountImmutabilityPolicyOutputReference | StorageAccountImmutabilityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_protected_append_writes: cdktf.booleanToTerraform(struct!.allowProtectedAppendWrites),
    period_since_creation_in_days: cdktf.numberToTerraform(struct!.periodSinceCreationInDays),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function storageAccountImmutabilityPolicyToHclTerraform(struct?: StorageAccountImmutabilityPolicyOutputReference | StorageAccountImmutabilityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_protected_append_writes: {
      value: cdktf.booleanToHclTerraform(struct!.allowProtectedAppendWrites),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    period_since_creation_in_days: {
      value: cdktf.numberToHclTerraform(struct!.periodSinceCreationInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountImmutabilityPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountImmutabilityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowProtectedAppendWrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowProtectedAppendWrites = this._allowProtectedAppendWrites;
    }
    if (this._periodSinceCreationInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSinceCreationInDays = this._periodSinceCreationInDays;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountImmutabilityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowProtectedAppendWrites = undefined;
      this._periodSinceCreationInDays = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowProtectedAppendWrites = value.allowProtectedAppendWrites;
      this._periodSinceCreationInDays = value.periodSinceCreationInDays;
      this._state = value.state;
    }
  }

  // allow_protected_append_writes - computed: false, optional: false, required: true
  private _allowProtectedAppendWrites?: boolean | cdktf.IResolvable; 
  public get allowProtectedAppendWrites() {
    return this.getBooleanAttribute('allow_protected_append_writes');
  }
  public set allowProtectedAppendWrites(value: boolean | cdktf.IResolvable) {
    this._allowProtectedAppendWrites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowProtectedAppendWritesInput() {
    return this._allowProtectedAppendWrites;
  }

  // period_since_creation_in_days - computed: false, optional: false, required: true
  private _periodSinceCreationInDays?: number; 
  public get periodSinceCreationInDays() {
    return this.getNumberAttribute('period_since_creation_in_days');
  }
  public set periodSinceCreationInDays(value: number) {
    this._periodSinceCreationInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSinceCreationInDaysInput() {
    return this._periodSinceCreationInDays;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface StorageAccountNetworkRulesPrivateLinkAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#endpoint_resource_id StorageAccount#endpoint_resource_id}
  */
  readonly endpointResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#endpoint_tenant_id StorageAccount#endpoint_tenant_id}
  */
  readonly endpointTenantId?: string;
}

export function storageAccountNetworkRulesPrivateLinkAccessToTerraform(struct?: StorageAccountNetworkRulesPrivateLinkAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_resource_id: cdktf.stringToTerraform(struct!.endpointResourceId),
    endpoint_tenant_id: cdktf.stringToTerraform(struct!.endpointTenantId),
  }
}


export function storageAccountNetworkRulesPrivateLinkAccessToHclTerraform(struct?: StorageAccountNetworkRulesPrivateLinkAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.endpointResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.endpointTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountNetworkRulesPrivateLinkAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageAccountNetworkRulesPrivateLinkAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointResourceId = this._endpointResourceId;
    }
    if (this._endpointTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointTenantId = this._endpointTenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountNetworkRulesPrivateLinkAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointResourceId = undefined;
      this._endpointTenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointResourceId = value.endpointResourceId;
      this._endpointTenantId = value.endpointTenantId;
    }
  }

  // endpoint_resource_id - computed: false, optional: false, required: true
  private _endpointResourceId?: string; 
  public get endpointResourceId() {
    return this.getStringAttribute('endpoint_resource_id');
  }
  public set endpointResourceId(value: string) {
    this._endpointResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointResourceIdInput() {
    return this._endpointResourceId;
  }

  // endpoint_tenant_id - computed: true, optional: true, required: false
  private _endpointTenantId?: string; 
  public get endpointTenantId() {
    return this.getStringAttribute('endpoint_tenant_id');
  }
  public set endpointTenantId(value: string) {
    this._endpointTenantId = value;
  }
  public resetEndpointTenantId() {
    this._endpointTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTenantIdInput() {
    return this._endpointTenantId;
  }
}

export class StorageAccountNetworkRulesPrivateLinkAccessList extends cdktf.ComplexList {
  public internalValue? : StorageAccountNetworkRulesPrivateLinkAccess[] | cdktf.IResolvable

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
  public get(index: number): StorageAccountNetworkRulesPrivateLinkAccessOutputReference {
    return new StorageAccountNetworkRulesPrivateLinkAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageAccountNetworkRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#bypass StorageAccount#bypass}
  */
  readonly bypass?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#default_action StorageAccount#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#ip_rules StorageAccount#ip_rules}
  */
  readonly ipRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#virtual_network_subnet_ids StorageAccount#virtual_network_subnet_ids}
  */
  readonly virtualNetworkSubnetIds?: string[];
  /**
  * private_link_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#private_link_access StorageAccount#private_link_access}
  */
  readonly privateLinkAccess?: StorageAccountNetworkRulesPrivateLinkAccess[] | cdktf.IResolvable;
}

export function storageAccountNetworkRulesToTerraform(struct?: StorageAccountNetworkRulesOutputReference | StorageAccountNetworkRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bypass),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRules),
    virtual_network_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.virtualNetworkSubnetIds),
    private_link_access: cdktf.listMapper(storageAccountNetworkRulesPrivateLinkAccessToTerraform, true)(struct!.privateLinkAccess),
  }
}


export function storageAccountNetworkRulesToHclTerraform(struct?: StorageAccountNetworkRulesOutputReference | StorageAccountNetworkRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bypass),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRules),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    virtual_network_subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.virtualNetworkSubnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    private_link_access: {
      value: cdktf.listMapperHcl(storageAccountNetworkRulesPrivateLinkAccessToHclTerraform, true)(struct!.privateLinkAccess),
      isBlock: true,
      type: "list",
      storageClassType: "StorageAccountNetworkRulesPrivateLinkAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountNetworkRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountNetworkRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypass = this._bypass;
    }
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._ipRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRules = this._ipRules;
    }
    if (this._virtualNetworkSubnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkSubnetIds = this._virtualNetworkSubnetIds;
    }
    if (this._privateLinkAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkAccess = this._privateLinkAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountNetworkRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypass = undefined;
      this._defaultAction = undefined;
      this._ipRules = undefined;
      this._virtualNetworkSubnetIds = undefined;
      this._privateLinkAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypass = value.bypass;
      this._defaultAction = value.defaultAction;
      this._ipRules = value.ipRules;
      this._virtualNetworkSubnetIds = value.virtualNetworkSubnetIds;
      this._privateLinkAccess.internalValue = value.privateLinkAccess;
    }
  }

  // bypass - computed: true, optional: true, required: false
  private _bypass?: string[]; 
  public get bypass() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass'));
  }
  public set bypass(value: string[]) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // ip_rules - computed: true, optional: true, required: false
  private _ipRules?: string[]; 
  public get ipRules() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_rules'));
  }
  public set ipRules(value: string[]) {
    this._ipRules = value;
  }
  public resetIpRules() {
    this._ipRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules;
  }

  // virtual_network_subnet_ids - computed: true, optional: true, required: false
  private _virtualNetworkSubnetIds?: string[]; 
  public get virtualNetworkSubnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('virtual_network_subnet_ids'));
  }
  public set virtualNetworkSubnetIds(value: string[]) {
    this._virtualNetworkSubnetIds = value;
  }
  public resetVirtualNetworkSubnetIds() {
    this._virtualNetworkSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSubnetIdsInput() {
    return this._virtualNetworkSubnetIds;
  }

  // private_link_access - computed: false, optional: true, required: false
  private _privateLinkAccess = new StorageAccountNetworkRulesPrivateLinkAccessList(this, "private_link_access", false);
  public get privateLinkAccess() {
    return this._privateLinkAccess;
  }
  public putPrivateLinkAccess(value: StorageAccountNetworkRulesPrivateLinkAccess[] | cdktf.IResolvable) {
    this._privateLinkAccess.internalValue = value;
  }
  public resetPrivateLinkAccess() {
    this._privateLinkAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkAccessInput() {
    return this._privateLinkAccess.internalValue;
  }
}
export interface StorageAccountQueuePropertiesCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}
  */
  readonly allowedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}
  */
  readonly exposedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}
  */
  readonly maxAgeInSeconds: number;
}

export function storageAccountQueuePropertiesCorsRuleToTerraform(struct?: StorageAccountQueuePropertiesCorsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposedHeaders),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
  }
}


export function storageAccountQueuePropertiesCorsRuleToHclTerraform(struct?: StorageAccountQueuePropertiesCorsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exposed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountQueuePropertiesCorsRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageAccountQueuePropertiesCorsRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._exposedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedHeaders = this._exposedHeaders;
    }
    if (this._maxAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeInSeconds = this._maxAgeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueuePropertiesCorsRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._exposedHeaders = undefined;
      this._maxAgeInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._exposedHeaders = value.exposedHeaders;
      this._maxAgeInSeconds = value.maxAgeInSeconds;
    }
  }

  // allowed_headers - computed: false, optional: false, required: true
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: false, optional: false, required: true
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // exposed_headers - computed: false, optional: false, required: true
  private _exposedHeaders?: string[]; 
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }
  public set exposedHeaders(value: string[]) {
    this._exposedHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedHeadersInput() {
    return this._exposedHeaders;
  }

  // max_age_in_seconds - computed: false, optional: false, required: true
  private _maxAgeInSeconds?: number; 
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
  public set maxAgeInSeconds(value: number) {
    this._maxAgeInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInSecondsInput() {
    return this._maxAgeInSeconds;
  }
}

export class StorageAccountQueuePropertiesCorsRuleList extends cdktf.ComplexList {
  public internalValue? : StorageAccountQueuePropertiesCorsRule[] | cdktf.IResolvable

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
  public get(index: number): StorageAccountQueuePropertiesCorsRuleOutputReference {
    return new StorageAccountQueuePropertiesCorsRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageAccountQueuePropertiesHourMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#enabled StorageAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}
  */
  readonly includeApis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}
  */
  readonly retentionPolicyDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#version StorageAccount#version}
  */
  readonly version: string;
}

export function storageAccountQueuePropertiesHourMetricsToTerraform(struct?: StorageAccountQueuePropertiesHourMetricsOutputReference | StorageAccountQueuePropertiesHourMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    include_apis: cdktf.booleanToTerraform(struct!.includeApis),
    retention_policy_days: cdktf.numberToTerraform(struct!.retentionPolicyDays),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function storageAccountQueuePropertiesHourMetricsToHclTerraform(struct?: StorageAccountQueuePropertiesHourMetricsOutputReference | StorageAccountQueuePropertiesHourMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_apis: {
      value: cdktf.booleanToHclTerraform(struct!.includeApis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_policy_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionPolicyDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountQueuePropertiesHourMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountQueuePropertiesHourMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._includeApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeApis = this._includeApis;
    }
    if (this._retentionPolicyDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicyDays = this._retentionPolicyDays;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueuePropertiesHourMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._includeApis = undefined;
      this._retentionPolicyDays = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._includeApis = value.includeApis;
      this._retentionPolicyDays = value.retentionPolicyDays;
      this._version = value.version;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // include_apis - computed: false, optional: true, required: false
  private _includeApis?: boolean | cdktf.IResolvable; 
  public get includeApis() {
    return this.getBooleanAttribute('include_apis');
  }
  public set includeApis(value: boolean | cdktf.IResolvable) {
    this._includeApis = value;
  }
  public resetIncludeApis() {
    this._includeApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeApisInput() {
    return this._includeApis;
  }

  // retention_policy_days - computed: false, optional: true, required: false
  private _retentionPolicyDays?: number; 
  public get retentionPolicyDays() {
    return this.getNumberAttribute('retention_policy_days');
  }
  public set retentionPolicyDays(value: number) {
    this._retentionPolicyDays = value;
  }
  public resetRetentionPolicyDays() {
    this._retentionPolicyDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyDaysInput() {
    return this._retentionPolicyDays;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface StorageAccountQueuePropertiesLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#delete StorageAccount#delete}
  */
  readonly delete: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#read StorageAccount#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}
  */
  readonly retentionPolicyDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#version StorageAccount#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#write StorageAccount#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function storageAccountQueuePropertiesLoggingToTerraform(struct?: StorageAccountQueuePropertiesLoggingOutputReference | StorageAccountQueuePropertiesLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.booleanToTerraform(struct!.delete),
    read: cdktf.booleanToTerraform(struct!.read),
    retention_policy_days: cdktf.numberToTerraform(struct!.retentionPolicyDays),
    version: cdktf.stringToTerraform(struct!.version),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function storageAccountQueuePropertiesLoggingToHclTerraform(struct?: StorageAccountQueuePropertiesLoggingOutputReference | StorageAccountQueuePropertiesLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.booleanToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_policy_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionPolicyDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountQueuePropertiesLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountQueuePropertiesLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._retentionPolicyDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicyDays = this._retentionPolicyDays;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueuePropertiesLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delete = undefined;
      this._read = undefined;
      this._retentionPolicyDays = undefined;
      this._version = undefined;
      this._write = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delete = value.delete;
      this._read = value.read;
      this._retentionPolicyDays = value.retentionPolicyDays;
      this._version = value.version;
      this._write = value.write;
    }
  }

  // delete - computed: false, optional: false, required: true
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // retention_policy_days - computed: false, optional: true, required: false
  private _retentionPolicyDays?: number; 
  public get retentionPolicyDays() {
    return this.getNumberAttribute('retention_policy_days');
  }
  public set retentionPolicyDays(value: number) {
    this._retentionPolicyDays = value;
  }
  public resetRetentionPolicyDays() {
    this._retentionPolicyDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyDaysInput() {
    return this._retentionPolicyDays;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface StorageAccountQueuePropertiesMinuteMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#enabled StorageAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}
  */
  readonly includeApis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}
  */
  readonly retentionPolicyDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#version StorageAccount#version}
  */
  readonly version: string;
}

export function storageAccountQueuePropertiesMinuteMetricsToTerraform(struct?: StorageAccountQueuePropertiesMinuteMetricsOutputReference | StorageAccountQueuePropertiesMinuteMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    include_apis: cdktf.booleanToTerraform(struct!.includeApis),
    retention_policy_days: cdktf.numberToTerraform(struct!.retentionPolicyDays),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function storageAccountQueuePropertiesMinuteMetricsToHclTerraform(struct?: StorageAccountQueuePropertiesMinuteMetricsOutputReference | StorageAccountQueuePropertiesMinuteMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_apis: {
      value: cdktf.booleanToHclTerraform(struct!.includeApis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_policy_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionPolicyDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountQueuePropertiesMinuteMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountQueuePropertiesMinuteMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._includeApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeApis = this._includeApis;
    }
    if (this._retentionPolicyDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicyDays = this._retentionPolicyDays;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueuePropertiesMinuteMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._includeApis = undefined;
      this._retentionPolicyDays = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._includeApis = value.includeApis;
      this._retentionPolicyDays = value.retentionPolicyDays;
      this._version = value.version;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // include_apis - computed: false, optional: true, required: false
  private _includeApis?: boolean | cdktf.IResolvable; 
  public get includeApis() {
    return this.getBooleanAttribute('include_apis');
  }
  public set includeApis(value: boolean | cdktf.IResolvable) {
    this._includeApis = value;
  }
  public resetIncludeApis() {
    this._includeApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeApisInput() {
    return this._includeApis;
  }

  // retention_policy_days - computed: false, optional: true, required: false
  private _retentionPolicyDays?: number; 
  public get retentionPolicyDays() {
    return this.getNumberAttribute('retention_policy_days');
  }
  public set retentionPolicyDays(value: number) {
    this._retentionPolicyDays = value;
  }
  public resetRetentionPolicyDays() {
    this._retentionPolicyDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyDaysInput() {
    return this._retentionPolicyDays;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface StorageAccountQueueProperties {
  /**
  * cors_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}
  */
  readonly corsRule?: StorageAccountQueuePropertiesCorsRule[] | cdktf.IResolvable;
  /**
  * hour_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#hour_metrics StorageAccount#hour_metrics}
  */
  readonly hourMetrics?: StorageAccountQueuePropertiesHourMetrics;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#logging StorageAccount#logging}
  */
  readonly logging?: StorageAccountQueuePropertiesLogging;
  /**
  * minute_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#minute_metrics StorageAccount#minute_metrics}
  */
  readonly minuteMetrics?: StorageAccountQueuePropertiesMinuteMetrics;
}

export function storageAccountQueuePropertiesToTerraform(struct?: StorageAccountQueuePropertiesOutputReference | StorageAccountQueueProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cors_rule: cdktf.listMapper(storageAccountQueuePropertiesCorsRuleToTerraform, true)(struct!.corsRule),
    hour_metrics: storageAccountQueuePropertiesHourMetricsToTerraform(struct!.hourMetrics),
    logging: storageAccountQueuePropertiesLoggingToTerraform(struct!.logging),
    minute_metrics: storageAccountQueuePropertiesMinuteMetricsToTerraform(struct!.minuteMetrics),
  }
}


export function storageAccountQueuePropertiesToHclTerraform(struct?: StorageAccountQueuePropertiesOutputReference | StorageAccountQueueProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cors_rule: {
      value: cdktf.listMapperHcl(storageAccountQueuePropertiesCorsRuleToHclTerraform, true)(struct!.corsRule),
      isBlock: true,
      type: "list",
      storageClassType: "StorageAccountQueuePropertiesCorsRuleList",
    },
    hour_metrics: {
      value: storageAccountQueuePropertiesHourMetricsToHclTerraform(struct!.hourMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "StorageAccountQueuePropertiesHourMetricsList",
    },
    logging: {
      value: storageAccountQueuePropertiesLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "list",
      storageClassType: "StorageAccountQueuePropertiesLoggingList",
    },
    minute_metrics: {
      value: storageAccountQueuePropertiesMinuteMetricsToHclTerraform(struct!.minuteMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "StorageAccountQueuePropertiesMinuteMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountQueuePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountQueueProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._corsRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsRule = this._corsRule?.internalValue;
    }
    if (this._hourMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourMetrics = this._hourMetrics?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._minuteMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteMetrics = this._minuteMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueueProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._corsRule.internalValue = undefined;
      this._hourMetrics.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._minuteMetrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._corsRule.internalValue = value.corsRule;
      this._hourMetrics.internalValue = value.hourMetrics;
      this._logging.internalValue = value.logging;
      this._minuteMetrics.internalValue = value.minuteMetrics;
    }
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule = new StorageAccountQueuePropertiesCorsRuleList(this, "cors_rule", false);
  public get corsRule() {
    return this._corsRule;
  }
  public putCorsRule(value: StorageAccountQueuePropertiesCorsRule[] | cdktf.IResolvable) {
    this._corsRule.internalValue = value;
  }
  public resetCorsRule() {
    this._corsRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule.internalValue;
  }

  // hour_metrics - computed: false, optional: true, required: false
  private _hourMetrics = new StorageAccountQueuePropertiesHourMetricsOutputReference(this, "hour_metrics");
  public get hourMetrics() {
    return this._hourMetrics;
  }
  public putHourMetrics(value: StorageAccountQueuePropertiesHourMetrics) {
    this._hourMetrics.internalValue = value;
  }
  public resetHourMetrics() {
    this._hourMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourMetricsInput() {
    return this._hourMetrics.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new StorageAccountQueuePropertiesLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: StorageAccountQueuePropertiesLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // minute_metrics - computed: false, optional: true, required: false
  private _minuteMetrics = new StorageAccountQueuePropertiesMinuteMetricsOutputReference(this, "minute_metrics");
  public get minuteMetrics() {
    return this._minuteMetrics;
  }
  public putMinuteMetrics(value: StorageAccountQueuePropertiesMinuteMetrics) {
    this._minuteMetrics.internalValue = value;
  }
  public resetMinuteMetrics() {
    this._minuteMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteMetricsInput() {
    return this._minuteMetrics.internalValue;
  }
}
export interface StorageAccountRouting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#choice StorageAccount#choice}
  */
  readonly choice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#publish_internet_endpoints StorageAccount#publish_internet_endpoints}
  */
  readonly publishInternetEndpoints?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#publish_microsoft_endpoints StorageAccount#publish_microsoft_endpoints}
  */
  readonly publishMicrosoftEndpoints?: boolean | cdktf.IResolvable;
}

export function storageAccountRoutingToTerraform(struct?: StorageAccountRoutingOutputReference | StorageAccountRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    choice: cdktf.stringToTerraform(struct!.choice),
    publish_internet_endpoints: cdktf.booleanToTerraform(struct!.publishInternetEndpoints),
    publish_microsoft_endpoints: cdktf.booleanToTerraform(struct!.publishMicrosoftEndpoints),
  }
}


export function storageAccountRoutingToHclTerraform(struct?: StorageAccountRoutingOutputReference | StorageAccountRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    choice: {
      value: cdktf.stringToHclTerraform(struct!.choice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publish_internet_endpoints: {
      value: cdktf.booleanToHclTerraform(struct!.publishInternetEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    publish_microsoft_endpoints: {
      value: cdktf.booleanToHclTerraform(struct!.publishMicrosoftEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._choice !== undefined) {
      hasAnyValues = true;
      internalValueResult.choice = this._choice;
    }
    if (this._publishInternetEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishInternetEndpoints = this._publishInternetEndpoints;
    }
    if (this._publishMicrosoftEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishMicrosoftEndpoints = this._publishMicrosoftEndpoints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._choice = undefined;
      this._publishInternetEndpoints = undefined;
      this._publishMicrosoftEndpoints = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._choice = value.choice;
      this._publishInternetEndpoints = value.publishInternetEndpoints;
      this._publishMicrosoftEndpoints = value.publishMicrosoftEndpoints;
    }
  }

  // choice - computed: false, optional: true, required: false
  private _choice?: string; 
  public get choice() {
    return this.getStringAttribute('choice');
  }
  public set choice(value: string) {
    this._choice = value;
  }
  public resetChoice() {
    this._choice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get choiceInput() {
    return this._choice;
  }

  // publish_internet_endpoints - computed: false, optional: true, required: false
  private _publishInternetEndpoints?: boolean | cdktf.IResolvable; 
  public get publishInternetEndpoints() {
    return this.getBooleanAttribute('publish_internet_endpoints');
  }
  public set publishInternetEndpoints(value: boolean | cdktf.IResolvable) {
    this._publishInternetEndpoints = value;
  }
  public resetPublishInternetEndpoints() {
    this._publishInternetEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInternetEndpointsInput() {
    return this._publishInternetEndpoints;
  }

  // publish_microsoft_endpoints - computed: false, optional: true, required: false
  private _publishMicrosoftEndpoints?: boolean | cdktf.IResolvable; 
  public get publishMicrosoftEndpoints() {
    return this.getBooleanAttribute('publish_microsoft_endpoints');
  }
  public set publishMicrosoftEndpoints(value: boolean | cdktf.IResolvable) {
    this._publishMicrosoftEndpoints = value;
  }
  public resetPublishMicrosoftEndpoints() {
    this._publishMicrosoftEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishMicrosoftEndpointsInput() {
    return this._publishMicrosoftEndpoints;
  }
}
export interface StorageAccountSasPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#expiration_action StorageAccount#expiration_action}
  */
  readonly expirationAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#expiration_period StorageAccount#expiration_period}
  */
  readonly expirationPeriod: string;
}

export function storageAccountSasPolicyToTerraform(struct?: StorageAccountSasPolicyOutputReference | StorageAccountSasPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_action: cdktf.stringToTerraform(struct!.expirationAction),
    expiration_period: cdktf.stringToTerraform(struct!.expirationPeriod),
  }
}


export function storageAccountSasPolicyToHclTerraform(struct?: StorageAccountSasPolicyOutputReference | StorageAccountSasPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_action: {
      value: cdktf.stringToHclTerraform(struct!.expirationAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_period: {
      value: cdktf.stringToHclTerraform(struct!.expirationPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountSasPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountSasPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationAction = this._expirationAction;
    }
    if (this._expirationPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationPeriod = this._expirationPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountSasPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationAction = undefined;
      this._expirationPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationAction = value.expirationAction;
      this._expirationPeriod = value.expirationPeriod;
    }
  }

  // expiration_action - computed: false, optional: true, required: false
  private _expirationAction?: string; 
  public get expirationAction() {
    return this.getStringAttribute('expiration_action');
  }
  public set expirationAction(value: string) {
    this._expirationAction = value;
  }
  public resetExpirationAction() {
    this._expirationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationActionInput() {
    return this._expirationAction;
  }

  // expiration_period - computed: false, optional: false, required: true
  private _expirationPeriod?: string; 
  public get expirationPeriod() {
    return this.getStringAttribute('expiration_period');
  }
  public set expirationPeriod(value: string) {
    this._expirationPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationPeriodInput() {
    return this._expirationPeriod;
  }
}
export interface StorageAccountSharePropertiesCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}
  */
  readonly allowedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}
  */
  readonly exposedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}
  */
  readonly maxAgeInSeconds: number;
}

export function storageAccountSharePropertiesCorsRuleToTerraform(struct?: StorageAccountSharePropertiesCorsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposedHeaders),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
  }
}


export function storageAccountSharePropertiesCorsRuleToHclTerraform(struct?: StorageAccountSharePropertiesCorsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exposed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountSharePropertiesCorsRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageAccountSharePropertiesCorsRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._exposedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedHeaders = this._exposedHeaders;
    }
    if (this._maxAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeInSeconds = this._maxAgeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountSharePropertiesCorsRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._exposedHeaders = undefined;
      this._maxAgeInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._exposedHeaders = value.exposedHeaders;
      this._maxAgeInSeconds = value.maxAgeInSeconds;
    }
  }

  // allowed_headers - computed: false, optional: false, required: true
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: false, optional: false, required: true
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // exposed_headers - computed: false, optional: false, required: true
  private _exposedHeaders?: string[]; 
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }
  public set exposedHeaders(value: string[]) {
    this._exposedHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedHeadersInput() {
    return this._exposedHeaders;
  }

  // max_age_in_seconds - computed: false, optional: false, required: true
  private _maxAgeInSeconds?: number; 
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
  public set maxAgeInSeconds(value: number) {
    this._maxAgeInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInSecondsInput() {
    return this._maxAgeInSeconds;
  }
}

export class StorageAccountSharePropertiesCorsRuleList extends cdktf.ComplexList {
  public internalValue? : StorageAccountSharePropertiesCorsRule[] | cdktf.IResolvable

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
  public get(index: number): StorageAccountSharePropertiesCorsRuleOutputReference {
    return new StorageAccountSharePropertiesCorsRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageAccountSharePropertiesRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#days StorageAccount#days}
  */
  readonly days?: number;
}

export function storageAccountSharePropertiesRetentionPolicyToTerraform(struct?: StorageAccountSharePropertiesRetentionPolicyOutputReference | StorageAccountSharePropertiesRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function storageAccountSharePropertiesRetentionPolicyToHclTerraform(struct?: StorageAccountSharePropertiesRetentionPolicyOutputReference | StorageAccountSharePropertiesRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountSharePropertiesRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountSharePropertiesRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountSharePropertiesRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface StorageAccountSharePropertiesSmb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#authentication_types StorageAccount#authentication_types}
  */
  readonly authenticationTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#channel_encryption_type StorageAccount#channel_encryption_type}
  */
  readonly channelEncryptionType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#kerberos_ticket_encryption_type StorageAccount#kerberos_ticket_encryption_type}
  */
  readonly kerberosTicketEncryptionType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#multichannel_enabled StorageAccount#multichannel_enabled}
  */
  readonly multichannelEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#versions StorageAccount#versions}
  */
  readonly versions?: string[];
}

export function storageAccountSharePropertiesSmbToTerraform(struct?: StorageAccountSharePropertiesSmbOutputReference | StorageAccountSharePropertiesSmb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authenticationTypes),
    channel_encryption_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelEncryptionType),
    kerberos_ticket_encryption_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kerberosTicketEncryptionType),
    multichannel_enabled: cdktf.booleanToTerraform(struct!.multichannelEnabled),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
  }
}


export function storageAccountSharePropertiesSmbToHclTerraform(struct?: StorageAccountSharePropertiesSmbOutputReference | StorageAccountSharePropertiesSmb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authenticationTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    channel_encryption_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelEncryptionType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kerberos_ticket_encryption_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kerberosTicketEncryptionType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    multichannel_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.multichannelEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountSharePropertiesSmbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountSharePropertiesSmb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTypes = this._authenticationTypes;
    }
    if (this._channelEncryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelEncryptionType = this._channelEncryptionType;
    }
    if (this._kerberosTicketEncryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosTicketEncryptionType = this._kerberosTicketEncryptionType;
    }
    if (this._multichannelEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.multichannelEnabled = this._multichannelEnabled;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountSharePropertiesSmb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationTypes = undefined;
      this._channelEncryptionType = undefined;
      this._kerberosTicketEncryptionType = undefined;
      this._multichannelEnabled = undefined;
      this._versions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationTypes = value.authenticationTypes;
      this._channelEncryptionType = value.channelEncryptionType;
      this._kerberosTicketEncryptionType = value.kerberosTicketEncryptionType;
      this._multichannelEnabled = value.multichannelEnabled;
      this._versions = value.versions;
    }
  }

  // authentication_types - computed: false, optional: true, required: false
  private _authenticationTypes?: string[]; 
  public get authenticationTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_types'));
  }
  public set authenticationTypes(value: string[]) {
    this._authenticationTypes = value;
  }
  public resetAuthenticationTypes() {
    this._authenticationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypesInput() {
    return this._authenticationTypes;
  }

  // channel_encryption_type - computed: false, optional: true, required: false
  private _channelEncryptionType?: string[]; 
  public get channelEncryptionType() {
    return cdktf.Fn.tolist(this.getListAttribute('channel_encryption_type'));
  }
  public set channelEncryptionType(value: string[]) {
    this._channelEncryptionType = value;
  }
  public resetChannelEncryptionType() {
    this._channelEncryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelEncryptionTypeInput() {
    return this._channelEncryptionType;
  }

  // kerberos_ticket_encryption_type - computed: false, optional: true, required: false
  private _kerberosTicketEncryptionType?: string[]; 
  public get kerberosTicketEncryptionType() {
    return cdktf.Fn.tolist(this.getListAttribute('kerberos_ticket_encryption_type'));
  }
  public set kerberosTicketEncryptionType(value: string[]) {
    this._kerberosTicketEncryptionType = value;
  }
  public resetKerberosTicketEncryptionType() {
    this._kerberosTicketEncryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosTicketEncryptionTypeInput() {
    return this._kerberosTicketEncryptionType;
  }

  // multichannel_enabled - computed: false, optional: true, required: false
  private _multichannelEnabled?: boolean | cdktf.IResolvable; 
  public get multichannelEnabled() {
    return this.getBooleanAttribute('multichannel_enabled');
  }
  public set multichannelEnabled(value: boolean | cdktf.IResolvable) {
    this._multichannelEnabled = value;
  }
  public resetMultichannelEnabled() {
    this._multichannelEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multichannelEnabledInput() {
    return this._multichannelEnabled;
  }

  // versions - computed: false, optional: true, required: false
  private _versions?: string[]; 
  public get versions() {
    return cdktf.Fn.tolist(this.getListAttribute('versions'));
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  public resetVersions() {
    this._versions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}
export interface StorageAccountShareProperties {
  /**
  * cors_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}
  */
  readonly corsRule?: StorageAccountSharePropertiesCorsRule[] | cdktf.IResolvable;
  /**
  * retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#retention_policy StorageAccount#retention_policy}
  */
  readonly retentionPolicy?: StorageAccountSharePropertiesRetentionPolicy;
  /**
  * smb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#smb StorageAccount#smb}
  */
  readonly smb?: StorageAccountSharePropertiesSmb;
}

export function storageAccountSharePropertiesToTerraform(struct?: StorageAccountSharePropertiesOutputReference | StorageAccountShareProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cors_rule: cdktf.listMapper(storageAccountSharePropertiesCorsRuleToTerraform, true)(struct!.corsRule),
    retention_policy: storageAccountSharePropertiesRetentionPolicyToTerraform(struct!.retentionPolicy),
    smb: storageAccountSharePropertiesSmbToTerraform(struct!.smb),
  }
}


export function storageAccountSharePropertiesToHclTerraform(struct?: StorageAccountSharePropertiesOutputReference | StorageAccountShareProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cors_rule: {
      value: cdktf.listMapperHcl(storageAccountSharePropertiesCorsRuleToHclTerraform, true)(struct!.corsRule),
      isBlock: true,
      type: "list",
      storageClassType: "StorageAccountSharePropertiesCorsRuleList",
    },
    retention_policy: {
      value: storageAccountSharePropertiesRetentionPolicyToHclTerraform(struct!.retentionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "StorageAccountSharePropertiesRetentionPolicyList",
    },
    smb: {
      value: storageAccountSharePropertiesSmbToHclTerraform(struct!.smb),
      isBlock: true,
      type: "list",
      storageClassType: "StorageAccountSharePropertiesSmbList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountSharePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountShareProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._corsRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsRule = this._corsRule?.internalValue;
    }
    if (this._retentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicy = this._retentionPolicy?.internalValue;
    }
    if (this._smb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smb = this._smb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountShareProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._corsRule.internalValue = undefined;
      this._retentionPolicy.internalValue = undefined;
      this._smb.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._corsRule.internalValue = value.corsRule;
      this._retentionPolicy.internalValue = value.retentionPolicy;
      this._smb.internalValue = value.smb;
    }
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule = new StorageAccountSharePropertiesCorsRuleList(this, "cors_rule", false);
  public get corsRule() {
    return this._corsRule;
  }
  public putCorsRule(value: StorageAccountSharePropertiesCorsRule[] | cdktf.IResolvable) {
    this._corsRule.internalValue = value;
  }
  public resetCorsRule() {
    this._corsRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule.internalValue;
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy = new StorageAccountSharePropertiesRetentionPolicyOutputReference(this, "retention_policy");
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: StorageAccountSharePropertiesRetentionPolicy) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }

  // smb - computed: false, optional: true, required: false
  private _smb = new StorageAccountSharePropertiesSmbOutputReference(this, "smb");
  public get smb() {
    return this._smb;
  }
  public putSmb(value: StorageAccountSharePropertiesSmb) {
    this._smb.internalValue = value;
  }
  public resetSmb() {
    this._smb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbInput() {
    return this._smb.internalValue;
  }
}
export interface StorageAccountStaticWebsite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#error_404_document StorageAccount#error_404_document}
  */
  readonly error404Document?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#index_document StorageAccount#index_document}
  */
  readonly indexDocument?: string;
}

export function storageAccountStaticWebsiteToTerraform(struct?: StorageAccountStaticWebsiteOutputReference | StorageAccountStaticWebsite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_404_document: cdktf.stringToTerraform(struct!.error404Document),
    index_document: cdktf.stringToTerraform(struct!.indexDocument),
  }
}


export function storageAccountStaticWebsiteToHclTerraform(struct?: StorageAccountStaticWebsiteOutputReference | StorageAccountStaticWebsite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_404_document: {
      value: cdktf.stringToHclTerraform(struct!.error404Document),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_document: {
      value: cdktf.stringToHclTerraform(struct!.indexDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountStaticWebsiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountStaticWebsite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._error404Document !== undefined) {
      hasAnyValues = true;
      internalValueResult.error404Document = this._error404Document;
    }
    if (this._indexDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexDocument = this._indexDocument;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountStaticWebsite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._error404Document = undefined;
      this._indexDocument = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._error404Document = value.error404Document;
      this._indexDocument = value.indexDocument;
    }
  }

  // error_404_document - computed: false, optional: true, required: false
  private _error404Document?: string; 
  public get error404Document() {
    return this.getStringAttribute('error_404_document');
  }
  public set error404Document(value: string) {
    this._error404Document = value;
  }
  public resetError404Document() {
    this._error404Document = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get error404DocumentInput() {
    return this._error404Document;
  }

  // index_document - computed: false, optional: true, required: false
  private _indexDocument?: string; 
  public get indexDocument() {
    return this.getStringAttribute('index_document');
  }
  public set indexDocument(value: string) {
    this._indexDocument = value;
  }
  public resetIndexDocument() {
    this._indexDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDocumentInput() {
    return this._indexDocument;
  }
}
export interface StorageAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#create StorageAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#delete StorageAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#read StorageAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#update StorageAccount#update}
  */
  readonly update?: string;
}

export function storageAccountTimeoutsToTerraform(struct?: StorageAccountTimeouts | cdktf.IResolvable): any {
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


export function storageAccountTimeoutsToHclTerraform(struct?: StorageAccountTimeouts | cdktf.IResolvable): any {
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

export class StorageAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageAccountTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageAccountTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account azurerm_storage_account}
*/
export class StorageAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_storage_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageAccount to import
  * @param importFromId The id of the existing StorageAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_storage_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account azurerm_storage_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageAccountConfig
  */
  public constructor(scope: Construct, id: string, config: StorageAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account',
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
    this._accessTier = config.accessTier;
    this._accountKind = config.accountKind;
    this._accountReplicationType = config.accountReplicationType;
    this._accountTier = config.accountTier;
    this._allowNestedItemsToBePublic = config.allowNestedItemsToBePublic;
    this._allowedCopyScope = config.allowedCopyScope;
    this._crossTenantReplicationEnabled = config.crossTenantReplicationEnabled;
    this._defaultToOauthAuthentication = config.defaultToOauthAuthentication;
    this._dnsEndpointType = config.dnsEndpointType;
    this._edgeZone = config.edgeZone;
    this._httpsTrafficOnlyEnabled = config.httpsTrafficOnlyEnabled;
    this._id = config.id;
    this._infrastructureEncryptionEnabled = config.infrastructureEncryptionEnabled;
    this._isHnsEnabled = config.isHnsEnabled;
    this._largeFileShareEnabled = config.largeFileShareEnabled;
    this._localUserEnabled = config.localUserEnabled;
    this._location = config.location;
    this._minTlsVersion = config.minTlsVersion;
    this._name = config.name;
    this._nfsv3Enabled = config.nfsv3Enabled;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._queueEncryptionKeyType = config.queueEncryptionKeyType;
    this._resourceGroupName = config.resourceGroupName;
    this._sftpEnabled = config.sftpEnabled;
    this._sharedAccessKeyEnabled = config.sharedAccessKeyEnabled;
    this._tableEncryptionKeyType = config.tableEncryptionKeyType;
    this._tags = config.tags;
    this._azureFilesAuthentication.internalValue = config.azureFilesAuthentication;
    this._blobProperties.internalValue = config.blobProperties;
    this._customDomain.internalValue = config.customDomain;
    this._customerManagedKey.internalValue = config.customerManagedKey;
    this._identity.internalValue = config.identity;
    this._immutabilityPolicy.internalValue = config.immutabilityPolicy;
    this._networkRules.internalValue = config.networkRules;
    this._queueProperties.internalValue = config.queueProperties;
    this._routing.internalValue = config.routing;
    this._sasPolicy.internalValue = config.sasPolicy;
    this._shareProperties.internalValue = config.shareProperties;
    this._staticWebsite.internalValue = config.staticWebsite;
    this._timeouts.internalValue = config.timeouts;
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
    return this._accessTier;
  }

  // account_kind - computed: false, optional: true, required: false
  private _accountKind?: string; 
  public get accountKind() {
    return this.getStringAttribute('account_kind');
  }
  public set accountKind(value: string) {
    this._accountKind = value;
  }
  public resetAccountKind() {
    this._accountKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKindInput() {
    return this._accountKind;
  }

  // account_replication_type - computed: false, optional: false, required: true
  private _accountReplicationType?: string; 
  public get accountReplicationType() {
    return this.getStringAttribute('account_replication_type');
  }
  public set accountReplicationType(value: string) {
    this._accountReplicationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountReplicationTypeInput() {
    return this._accountReplicationType;
  }

  // account_tier - computed: false, optional: false, required: true
  private _accountTier?: string; 
  public get accountTier() {
    return this.getStringAttribute('account_tier');
  }
  public set accountTier(value: string) {
    this._accountTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTierInput() {
    return this._accountTier;
  }

  // allow_nested_items_to_be_public - computed: false, optional: true, required: false
  private _allowNestedItemsToBePublic?: boolean | cdktf.IResolvable; 
  public get allowNestedItemsToBePublic() {
    return this.getBooleanAttribute('allow_nested_items_to_be_public');
  }
  public set allowNestedItemsToBePublic(value: boolean | cdktf.IResolvable) {
    this._allowNestedItemsToBePublic = value;
  }
  public resetAllowNestedItemsToBePublic() {
    this._allowNestedItemsToBePublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNestedItemsToBePublicInput() {
    return this._allowNestedItemsToBePublic;
  }

  // allowed_copy_scope - computed: false, optional: true, required: false
  private _allowedCopyScope?: string; 
  public get allowedCopyScope() {
    return this.getStringAttribute('allowed_copy_scope');
  }
  public set allowedCopyScope(value: string) {
    this._allowedCopyScope = value;
  }
  public resetAllowedCopyScope() {
    this._allowedCopyScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCopyScopeInput() {
    return this._allowedCopyScope;
  }

  // cross_tenant_replication_enabled - computed: false, optional: true, required: false
  private _crossTenantReplicationEnabled?: boolean | cdktf.IResolvable; 
  public get crossTenantReplicationEnabled() {
    return this.getBooleanAttribute('cross_tenant_replication_enabled');
  }
  public set crossTenantReplicationEnabled(value: boolean | cdktf.IResolvable) {
    this._crossTenantReplicationEnabled = value;
  }
  public resetCrossTenantReplicationEnabled() {
    this._crossTenantReplicationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossTenantReplicationEnabledInput() {
    return this._crossTenantReplicationEnabled;
  }

  // default_to_oauth_authentication - computed: false, optional: true, required: false
  private _defaultToOauthAuthentication?: boolean | cdktf.IResolvable; 
  public get defaultToOauthAuthentication() {
    return this.getBooleanAttribute('default_to_oauth_authentication');
  }
  public set defaultToOauthAuthentication(value: boolean | cdktf.IResolvable) {
    this._defaultToOauthAuthentication = value;
  }
  public resetDefaultToOauthAuthentication() {
    this._defaultToOauthAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultToOauthAuthenticationInput() {
    return this._defaultToOauthAuthentication;
  }

  // dns_endpoint_type - computed: false, optional: true, required: false
  private _dnsEndpointType?: string; 
  public get dnsEndpointType() {
    return this.getStringAttribute('dns_endpoint_type');
  }
  public set dnsEndpointType(value: string) {
    this._dnsEndpointType = value;
  }
  public resetDnsEndpointType() {
    this._dnsEndpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsEndpointTypeInput() {
    return this._dnsEndpointType;
  }

  // edge_zone - computed: false, optional: true, required: false
  private _edgeZone?: string; 
  public get edgeZone() {
    return this.getStringAttribute('edge_zone');
  }
  public set edgeZone(value: string) {
    this._edgeZone = value;
  }
  public resetEdgeZone() {
    this._edgeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeZoneInput() {
    return this._edgeZone;
  }

  // https_traffic_only_enabled - computed: false, optional: true, required: false
  private _httpsTrafficOnlyEnabled?: boolean | cdktf.IResolvable; 
  public get httpsTrafficOnlyEnabled() {
    return this.getBooleanAttribute('https_traffic_only_enabled');
  }
  public set httpsTrafficOnlyEnabled(value: boolean | cdktf.IResolvable) {
    this._httpsTrafficOnlyEnabled = value;
  }
  public resetHttpsTrafficOnlyEnabled() {
    this._httpsTrafficOnlyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsTrafficOnlyEnabledInput() {
    return this._httpsTrafficOnlyEnabled;
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

  // infrastructure_encryption_enabled - computed: false, optional: true, required: false
  private _infrastructureEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get infrastructureEncryptionEnabled() {
    return this.getBooleanAttribute('infrastructure_encryption_enabled');
  }
  public set infrastructureEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._infrastructureEncryptionEnabled = value;
  }
  public resetInfrastructureEncryptionEnabled() {
    this._infrastructureEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureEncryptionEnabledInput() {
    return this._infrastructureEncryptionEnabled;
  }

  // is_hns_enabled - computed: false, optional: true, required: false
  private _isHnsEnabled?: boolean | cdktf.IResolvable; 
  public get isHnsEnabled() {
    return this.getBooleanAttribute('is_hns_enabled');
  }
  public set isHnsEnabled(value: boolean | cdktf.IResolvable) {
    this._isHnsEnabled = value;
  }
  public resetIsHnsEnabled() {
    this._isHnsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHnsEnabledInput() {
    return this._isHnsEnabled;
  }

  // large_file_share_enabled - computed: true, optional: true, required: false
  private _largeFileShareEnabled?: boolean | cdktf.IResolvable; 
  public get largeFileShareEnabled() {
    return this.getBooleanAttribute('large_file_share_enabled');
  }
  public set largeFileShareEnabled(value: boolean | cdktf.IResolvable) {
    this._largeFileShareEnabled = value;
  }
  public resetLargeFileShareEnabled() {
    this._largeFileShareEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeFileShareEnabledInput() {
    return this._largeFileShareEnabled;
  }

  // local_user_enabled - computed: false, optional: true, required: false
  private _localUserEnabled?: boolean | cdktf.IResolvable; 
  public get localUserEnabled() {
    return this.getBooleanAttribute('local_user_enabled');
  }
  public set localUserEnabled(value: boolean | cdktf.IResolvable) {
    this._localUserEnabled = value;
  }
  public resetLocalUserEnabled() {
    this._localUserEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUserEnabledInput() {
    return this._localUserEnabled;
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

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
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

  // nfsv3_enabled - computed: false, optional: true, required: false
  private _nfsv3Enabled?: boolean | cdktf.IResolvable; 
  public get nfsv3Enabled() {
    return this.getBooleanAttribute('nfsv3_enabled');
  }
  public set nfsv3Enabled(value: boolean | cdktf.IResolvable) {
    this._nfsv3Enabled = value;
  }
  public resetNfsv3Enabled() {
    this._nfsv3Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv3EnabledInput() {
    return this._nfsv3Enabled;
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

  // primary_blob_internet_endpoint - computed: true, optional: false, required: false
  public get primaryBlobInternetEndpoint() {
    return this.getStringAttribute('primary_blob_internet_endpoint');
  }

  // primary_blob_internet_host - computed: true, optional: false, required: false
  public get primaryBlobInternetHost() {
    return this.getStringAttribute('primary_blob_internet_host');
  }

  // primary_blob_microsoft_endpoint - computed: true, optional: false, required: false
  public get primaryBlobMicrosoftEndpoint() {
    return this.getStringAttribute('primary_blob_microsoft_endpoint');
  }

  // primary_blob_microsoft_host - computed: true, optional: false, required: false
  public get primaryBlobMicrosoftHost() {
    return this.getStringAttribute('primary_blob_microsoft_host');
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

  // primary_dfs_internet_endpoint - computed: true, optional: false, required: false
  public get primaryDfsInternetEndpoint() {
    return this.getStringAttribute('primary_dfs_internet_endpoint');
  }

  // primary_dfs_internet_host - computed: true, optional: false, required: false
  public get primaryDfsInternetHost() {
    return this.getStringAttribute('primary_dfs_internet_host');
  }

  // primary_dfs_microsoft_endpoint - computed: true, optional: false, required: false
  public get primaryDfsMicrosoftEndpoint() {
    return this.getStringAttribute('primary_dfs_microsoft_endpoint');
  }

  // primary_dfs_microsoft_host - computed: true, optional: false, required: false
  public get primaryDfsMicrosoftHost() {
    return this.getStringAttribute('primary_dfs_microsoft_host');
  }

  // primary_file_endpoint - computed: true, optional: false, required: false
  public get primaryFileEndpoint() {
    return this.getStringAttribute('primary_file_endpoint');
  }

  // primary_file_host - computed: true, optional: false, required: false
  public get primaryFileHost() {
    return this.getStringAttribute('primary_file_host');
  }

  // primary_file_internet_endpoint - computed: true, optional: false, required: false
  public get primaryFileInternetEndpoint() {
    return this.getStringAttribute('primary_file_internet_endpoint');
  }

  // primary_file_internet_host - computed: true, optional: false, required: false
  public get primaryFileInternetHost() {
    return this.getStringAttribute('primary_file_internet_host');
  }

  // primary_file_microsoft_endpoint - computed: true, optional: false, required: false
  public get primaryFileMicrosoftEndpoint() {
    return this.getStringAttribute('primary_file_microsoft_endpoint');
  }

  // primary_file_microsoft_host - computed: true, optional: false, required: false
  public get primaryFileMicrosoftHost() {
    return this.getStringAttribute('primary_file_microsoft_host');
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

  // primary_queue_microsoft_endpoint - computed: true, optional: false, required: false
  public get primaryQueueMicrosoftEndpoint() {
    return this.getStringAttribute('primary_queue_microsoft_endpoint');
  }

  // primary_queue_microsoft_host - computed: true, optional: false, required: false
  public get primaryQueueMicrosoftHost() {
    return this.getStringAttribute('primary_queue_microsoft_host');
  }

  // primary_table_endpoint - computed: true, optional: false, required: false
  public get primaryTableEndpoint() {
    return this.getStringAttribute('primary_table_endpoint');
  }

  // primary_table_host - computed: true, optional: false, required: false
  public get primaryTableHost() {
    return this.getStringAttribute('primary_table_host');
  }

  // primary_table_microsoft_endpoint - computed: true, optional: false, required: false
  public get primaryTableMicrosoftEndpoint() {
    return this.getStringAttribute('primary_table_microsoft_endpoint');
  }

  // primary_table_microsoft_host - computed: true, optional: false, required: false
  public get primaryTableMicrosoftHost() {
    return this.getStringAttribute('primary_table_microsoft_host');
  }

  // primary_web_endpoint - computed: true, optional: false, required: false
  public get primaryWebEndpoint() {
    return this.getStringAttribute('primary_web_endpoint');
  }

  // primary_web_host - computed: true, optional: false, required: false
  public get primaryWebHost() {
    return this.getStringAttribute('primary_web_host');
  }

  // primary_web_internet_endpoint - computed: true, optional: false, required: false
  public get primaryWebInternetEndpoint() {
    return this.getStringAttribute('primary_web_internet_endpoint');
  }

  // primary_web_internet_host - computed: true, optional: false, required: false
  public get primaryWebInternetHost() {
    return this.getStringAttribute('primary_web_internet_host');
  }

  // primary_web_microsoft_endpoint - computed: true, optional: false, required: false
  public get primaryWebMicrosoftEndpoint() {
    return this.getStringAttribute('primary_web_microsoft_endpoint');
  }

  // primary_web_microsoft_host - computed: true, optional: false, required: false
  public get primaryWebMicrosoftHost() {
    return this.getStringAttribute('primary_web_microsoft_host');
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

  // queue_encryption_key_type - computed: false, optional: true, required: false
  private _queueEncryptionKeyType?: string; 
  public get queueEncryptionKeyType() {
    return this.getStringAttribute('queue_encryption_key_type');
  }
  public set queueEncryptionKeyType(value: string) {
    this._queueEncryptionKeyType = value;
  }
  public resetQueueEncryptionKeyType() {
    this._queueEncryptionKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueEncryptionKeyTypeInput() {
    return this._queueEncryptionKeyType;
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

  // secondary_blob_internet_endpoint - computed: true, optional: false, required: false
  public get secondaryBlobInternetEndpoint() {
    return this.getStringAttribute('secondary_blob_internet_endpoint');
  }

  // secondary_blob_internet_host - computed: true, optional: false, required: false
  public get secondaryBlobInternetHost() {
    return this.getStringAttribute('secondary_blob_internet_host');
  }

  // secondary_blob_microsoft_endpoint - computed: true, optional: false, required: false
  public get secondaryBlobMicrosoftEndpoint() {
    return this.getStringAttribute('secondary_blob_microsoft_endpoint');
  }

  // secondary_blob_microsoft_host - computed: true, optional: false, required: false
  public get secondaryBlobMicrosoftHost() {
    return this.getStringAttribute('secondary_blob_microsoft_host');
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

  // secondary_dfs_internet_endpoint - computed: true, optional: false, required: false
  public get secondaryDfsInternetEndpoint() {
    return this.getStringAttribute('secondary_dfs_internet_endpoint');
  }

  // secondary_dfs_internet_host - computed: true, optional: false, required: false
  public get secondaryDfsInternetHost() {
    return this.getStringAttribute('secondary_dfs_internet_host');
  }

  // secondary_dfs_microsoft_endpoint - computed: true, optional: false, required: false
  public get secondaryDfsMicrosoftEndpoint() {
    return this.getStringAttribute('secondary_dfs_microsoft_endpoint');
  }

  // secondary_dfs_microsoft_host - computed: true, optional: false, required: false
  public get secondaryDfsMicrosoftHost() {
    return this.getStringAttribute('secondary_dfs_microsoft_host');
  }

  // secondary_file_endpoint - computed: true, optional: false, required: false
  public get secondaryFileEndpoint() {
    return this.getStringAttribute('secondary_file_endpoint');
  }

  // secondary_file_host - computed: true, optional: false, required: false
  public get secondaryFileHost() {
    return this.getStringAttribute('secondary_file_host');
  }

  // secondary_file_internet_endpoint - computed: true, optional: false, required: false
  public get secondaryFileInternetEndpoint() {
    return this.getStringAttribute('secondary_file_internet_endpoint');
  }

  // secondary_file_internet_host - computed: true, optional: false, required: false
  public get secondaryFileInternetHost() {
    return this.getStringAttribute('secondary_file_internet_host');
  }

  // secondary_file_microsoft_endpoint - computed: true, optional: false, required: false
  public get secondaryFileMicrosoftEndpoint() {
    return this.getStringAttribute('secondary_file_microsoft_endpoint');
  }

  // secondary_file_microsoft_host - computed: true, optional: false, required: false
  public get secondaryFileMicrosoftHost() {
    return this.getStringAttribute('secondary_file_microsoft_host');
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

  // secondary_queue_microsoft_endpoint - computed: true, optional: false, required: false
  public get secondaryQueueMicrosoftEndpoint() {
    return this.getStringAttribute('secondary_queue_microsoft_endpoint');
  }

  // secondary_queue_microsoft_host - computed: true, optional: false, required: false
  public get secondaryQueueMicrosoftHost() {
    return this.getStringAttribute('secondary_queue_microsoft_host');
  }

  // secondary_table_endpoint - computed: true, optional: false, required: false
  public get secondaryTableEndpoint() {
    return this.getStringAttribute('secondary_table_endpoint');
  }

  // secondary_table_host - computed: true, optional: false, required: false
  public get secondaryTableHost() {
    return this.getStringAttribute('secondary_table_host');
  }

  // secondary_table_microsoft_endpoint - computed: true, optional: false, required: false
  public get secondaryTableMicrosoftEndpoint() {
    return this.getStringAttribute('secondary_table_microsoft_endpoint');
  }

  // secondary_table_microsoft_host - computed: true, optional: false, required: false
  public get secondaryTableMicrosoftHost() {
    return this.getStringAttribute('secondary_table_microsoft_host');
  }

  // secondary_web_endpoint - computed: true, optional: false, required: false
  public get secondaryWebEndpoint() {
    return this.getStringAttribute('secondary_web_endpoint');
  }

  // secondary_web_host - computed: true, optional: false, required: false
  public get secondaryWebHost() {
    return this.getStringAttribute('secondary_web_host');
  }

  // secondary_web_internet_endpoint - computed: true, optional: false, required: false
  public get secondaryWebInternetEndpoint() {
    return this.getStringAttribute('secondary_web_internet_endpoint');
  }

  // secondary_web_internet_host - computed: true, optional: false, required: false
  public get secondaryWebInternetHost() {
    return this.getStringAttribute('secondary_web_internet_host');
  }

  // secondary_web_microsoft_endpoint - computed: true, optional: false, required: false
  public get secondaryWebMicrosoftEndpoint() {
    return this.getStringAttribute('secondary_web_microsoft_endpoint');
  }

  // secondary_web_microsoft_host - computed: true, optional: false, required: false
  public get secondaryWebMicrosoftHost() {
    return this.getStringAttribute('secondary_web_microsoft_host');
  }

  // sftp_enabled - computed: false, optional: true, required: false
  private _sftpEnabled?: boolean | cdktf.IResolvable; 
  public get sftpEnabled() {
    return this.getBooleanAttribute('sftp_enabled');
  }
  public set sftpEnabled(value: boolean | cdktf.IResolvable) {
    this._sftpEnabled = value;
  }
  public resetSftpEnabled() {
    this._sftpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpEnabledInput() {
    return this._sftpEnabled;
  }

  // shared_access_key_enabled - computed: false, optional: true, required: false
  private _sharedAccessKeyEnabled?: boolean | cdktf.IResolvable; 
  public get sharedAccessKeyEnabled() {
    return this.getBooleanAttribute('shared_access_key_enabled');
  }
  public set sharedAccessKeyEnabled(value: boolean | cdktf.IResolvable) {
    this._sharedAccessKeyEnabled = value;
  }
  public resetSharedAccessKeyEnabled() {
    this._sharedAccessKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessKeyEnabledInput() {
    return this._sharedAccessKeyEnabled;
  }

  // table_encryption_key_type - computed: false, optional: true, required: false
  private _tableEncryptionKeyType?: string; 
  public get tableEncryptionKeyType() {
    return this.getStringAttribute('table_encryption_key_type');
  }
  public set tableEncryptionKeyType(value: string) {
    this._tableEncryptionKeyType = value;
  }
  public resetTableEncryptionKeyType() {
    this._tableEncryptionKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableEncryptionKeyTypeInput() {
    return this._tableEncryptionKeyType;
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

  // azure_files_authentication - computed: false, optional: true, required: false
  private _azureFilesAuthentication = new StorageAccountAzureFilesAuthenticationOutputReference(this, "azure_files_authentication");
  public get azureFilesAuthentication() {
    return this._azureFilesAuthentication;
  }
  public putAzureFilesAuthentication(value: StorageAccountAzureFilesAuthentication) {
    this._azureFilesAuthentication.internalValue = value;
  }
  public resetAzureFilesAuthentication() {
    this._azureFilesAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFilesAuthenticationInput() {
    return this._azureFilesAuthentication.internalValue;
  }

  // blob_properties - computed: false, optional: true, required: false
  private _blobProperties = new StorageAccountBlobPropertiesOutputReference(this, "blob_properties");
  public get blobProperties() {
    return this._blobProperties;
  }
  public putBlobProperties(value: StorageAccountBlobProperties) {
    this._blobProperties.internalValue = value;
  }
  public resetBlobProperties() {
    this._blobProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobPropertiesInput() {
    return this._blobProperties.internalValue;
  }

  // custom_domain - computed: false, optional: true, required: false
  private _customDomain = new StorageAccountCustomDomainOutputReference(this, "custom_domain");
  public get customDomain() {
    return this._customDomain;
  }
  public putCustomDomain(value: StorageAccountCustomDomain) {
    this._customDomain.internalValue = value;
  }
  public resetCustomDomain() {
    this._customDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain.internalValue;
  }

  // customer_managed_key - computed: false, optional: true, required: false
  private _customerManagedKey = new StorageAccountCustomerManagedKeyOutputReference(this, "customer_managed_key");
  public get customerManagedKey() {
    return this._customerManagedKey;
  }
  public putCustomerManagedKey(value: StorageAccountCustomerManagedKey) {
    this._customerManagedKey.internalValue = value;
  }
  public resetCustomerManagedKey() {
    this._customerManagedKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyInput() {
    return this._customerManagedKey.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new StorageAccountIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: StorageAccountIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // immutability_policy - computed: false, optional: true, required: false
  private _immutabilityPolicy = new StorageAccountImmutabilityPolicyOutputReference(this, "immutability_policy");
  public get immutabilityPolicy() {
    return this._immutabilityPolicy;
  }
  public putImmutabilityPolicy(value: StorageAccountImmutabilityPolicy) {
    this._immutabilityPolicy.internalValue = value;
  }
  public resetImmutabilityPolicy() {
    this._immutabilityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutabilityPolicyInput() {
    return this._immutabilityPolicy.internalValue;
  }

  // network_rules - computed: false, optional: true, required: false
  private _networkRules = new StorageAccountNetworkRulesOutputReference(this, "network_rules");
  public get networkRules() {
    return this._networkRules;
  }
  public putNetworkRules(value: StorageAccountNetworkRules) {
    this._networkRules.internalValue = value;
  }
  public resetNetworkRules() {
    this._networkRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRulesInput() {
    return this._networkRules.internalValue;
  }

  // queue_properties - computed: false, optional: true, required: false
  private _queueProperties = new StorageAccountQueuePropertiesOutputReference(this, "queue_properties");
  public get queueProperties() {
    return this._queueProperties;
  }
  public putQueueProperties(value: StorageAccountQueueProperties) {
    this._queueProperties.internalValue = value;
  }
  public resetQueueProperties() {
    this._queueProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuePropertiesInput() {
    return this._queueProperties.internalValue;
  }

  // routing - computed: false, optional: true, required: false
  private _routing = new StorageAccountRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: StorageAccountRouting) {
    this._routing.internalValue = value;
  }
  public resetRouting() {
    this._routing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }

  // sas_policy - computed: false, optional: true, required: false
  private _sasPolicy = new StorageAccountSasPolicyOutputReference(this, "sas_policy");
  public get sasPolicy() {
    return this._sasPolicy;
  }
  public putSasPolicy(value: StorageAccountSasPolicy) {
    this._sasPolicy.internalValue = value;
  }
  public resetSasPolicy() {
    this._sasPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasPolicyInput() {
    return this._sasPolicy.internalValue;
  }

  // share_properties - computed: false, optional: true, required: false
  private _shareProperties = new StorageAccountSharePropertiesOutputReference(this, "share_properties");
  public get shareProperties() {
    return this._shareProperties;
  }
  public putShareProperties(value: StorageAccountShareProperties) {
    this._shareProperties.internalValue = value;
  }
  public resetShareProperties() {
    this._shareProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharePropertiesInput() {
    return this._shareProperties.internalValue;
  }

  // static_website - computed: false, optional: true, required: false
  private _staticWebsite = new StorageAccountStaticWebsiteOutputReference(this, "static_website");
  public get staticWebsite() {
    return this._staticWebsite;
  }
  public putStaticWebsite(value: StorageAccountStaticWebsite) {
    this._staticWebsite.internalValue = value;
  }
  public resetStaticWebsite() {
    this._staticWebsite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticWebsiteInput() {
    return this._staticWebsite.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageAccountTimeouts) {
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
      access_tier: cdktf.stringToTerraform(this._accessTier),
      account_kind: cdktf.stringToTerraform(this._accountKind),
      account_replication_type: cdktf.stringToTerraform(this._accountReplicationType),
      account_tier: cdktf.stringToTerraform(this._accountTier),
      allow_nested_items_to_be_public: cdktf.booleanToTerraform(this._allowNestedItemsToBePublic),
      allowed_copy_scope: cdktf.stringToTerraform(this._allowedCopyScope),
      cross_tenant_replication_enabled: cdktf.booleanToTerraform(this._crossTenantReplicationEnabled),
      default_to_oauth_authentication: cdktf.booleanToTerraform(this._defaultToOauthAuthentication),
      dns_endpoint_type: cdktf.stringToTerraform(this._dnsEndpointType),
      edge_zone: cdktf.stringToTerraform(this._edgeZone),
      https_traffic_only_enabled: cdktf.booleanToTerraform(this._httpsTrafficOnlyEnabled),
      id: cdktf.stringToTerraform(this._id),
      infrastructure_encryption_enabled: cdktf.booleanToTerraform(this._infrastructureEncryptionEnabled),
      is_hns_enabled: cdktf.booleanToTerraform(this._isHnsEnabled),
      large_file_share_enabled: cdktf.booleanToTerraform(this._largeFileShareEnabled),
      local_user_enabled: cdktf.booleanToTerraform(this._localUserEnabled),
      location: cdktf.stringToTerraform(this._location),
      min_tls_version: cdktf.stringToTerraform(this._minTlsVersion),
      name: cdktf.stringToTerraform(this._name),
      nfsv3_enabled: cdktf.booleanToTerraform(this._nfsv3Enabled),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      queue_encryption_key_type: cdktf.stringToTerraform(this._queueEncryptionKeyType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sftp_enabled: cdktf.booleanToTerraform(this._sftpEnabled),
      shared_access_key_enabled: cdktf.booleanToTerraform(this._sharedAccessKeyEnabled),
      table_encryption_key_type: cdktf.stringToTerraform(this._tableEncryptionKeyType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      azure_files_authentication: storageAccountAzureFilesAuthenticationToTerraform(this._azureFilesAuthentication.internalValue),
      blob_properties: storageAccountBlobPropertiesToTerraform(this._blobProperties.internalValue),
      custom_domain: storageAccountCustomDomainToTerraform(this._customDomain.internalValue),
      customer_managed_key: storageAccountCustomerManagedKeyToTerraform(this._customerManagedKey.internalValue),
      identity: storageAccountIdentityToTerraform(this._identity.internalValue),
      immutability_policy: storageAccountImmutabilityPolicyToTerraform(this._immutabilityPolicy.internalValue),
      network_rules: storageAccountNetworkRulesToTerraform(this._networkRules.internalValue),
      queue_properties: storageAccountQueuePropertiesToTerraform(this._queueProperties.internalValue),
      routing: storageAccountRoutingToTerraform(this._routing.internalValue),
      sas_policy: storageAccountSasPolicyToTerraform(this._sasPolicy.internalValue),
      share_properties: storageAccountSharePropertiesToTerraform(this._shareProperties.internalValue),
      static_website: storageAccountStaticWebsiteToTerraform(this._staticWebsite.internalValue),
      timeouts: storageAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_tier: {
        value: cdktf.stringToHclTerraform(this._accessTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_kind: {
        value: cdktf.stringToHclTerraform(this._accountKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_replication_type: {
        value: cdktf.stringToHclTerraform(this._accountReplicationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_tier: {
        value: cdktf.stringToHclTerraform(this._accountTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_nested_items_to_be_public: {
        value: cdktf.booleanToHclTerraform(this._allowNestedItemsToBePublic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_copy_scope: {
        value: cdktf.stringToHclTerraform(this._allowedCopyScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_tenant_replication_enabled: {
        value: cdktf.booleanToHclTerraform(this._crossTenantReplicationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_to_oauth_authentication: {
        value: cdktf.booleanToHclTerraform(this._defaultToOauthAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_endpoint_type: {
        value: cdktf.stringToHclTerraform(this._dnsEndpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_zone: {
        value: cdktf.stringToHclTerraform(this._edgeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_traffic_only_enabled: {
        value: cdktf.booleanToHclTerraform(this._httpsTrafficOnlyEnabled),
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
      infrastructure_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._infrastructureEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_hns_enabled: {
        value: cdktf.booleanToHclTerraform(this._isHnsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      large_file_share_enabled: {
        value: cdktf.booleanToHclTerraform(this._largeFileShareEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_user_enabled: {
        value: cdktf.booleanToHclTerraform(this._localUserEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_tls_version: {
        value: cdktf.stringToHclTerraform(this._minTlsVersion),
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
      nfsv3_enabled: {
        value: cdktf.booleanToHclTerraform(this._nfsv3Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      public_network_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      queue_encryption_key_type: {
        value: cdktf.stringToHclTerraform(this._queueEncryptionKeyType),
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
      sftp_enabled: {
        value: cdktf.booleanToHclTerraform(this._sftpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shared_access_key_enabled: {
        value: cdktf.booleanToHclTerraform(this._sharedAccessKeyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      table_encryption_key_type: {
        value: cdktf.stringToHclTerraform(this._tableEncryptionKeyType),
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
      azure_files_authentication: {
        value: storageAccountAzureFilesAuthenticationToHclTerraform(this._azureFilesAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountAzureFilesAuthenticationList",
      },
      blob_properties: {
        value: storageAccountBlobPropertiesToHclTerraform(this._blobProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountBlobPropertiesList",
      },
      custom_domain: {
        value: storageAccountCustomDomainToHclTerraform(this._customDomain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountCustomDomainList",
      },
      customer_managed_key: {
        value: storageAccountCustomerManagedKeyToHclTerraform(this._customerManagedKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountCustomerManagedKeyList",
      },
      identity: {
        value: storageAccountIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountIdentityList",
      },
      immutability_policy: {
        value: storageAccountImmutabilityPolicyToHclTerraform(this._immutabilityPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountImmutabilityPolicyList",
      },
      network_rules: {
        value: storageAccountNetworkRulesToHclTerraform(this._networkRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountNetworkRulesList",
      },
      queue_properties: {
        value: storageAccountQueuePropertiesToHclTerraform(this._queueProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountQueuePropertiesList",
      },
      routing: {
        value: storageAccountRoutingToHclTerraform(this._routing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountRoutingList",
      },
      sas_policy: {
        value: storageAccountSasPolicyToHclTerraform(this._sasPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountSasPolicyList",
      },
      share_properties: {
        value: storageAccountSharePropertiesToHclTerraform(this._shareProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountSharePropertiesList",
      },
      static_website: {
        value: storageAccountStaticWebsiteToHclTerraform(this._staticWebsite.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountStaticWebsiteList",
      },
      timeouts: {
        value: storageAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
