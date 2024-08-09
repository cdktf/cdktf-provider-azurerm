# `storageAccount` Submodule <a name="`storageAccount` Submodule" id="@cdktf/provider-azurerm.storageAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccount <a name="StorageAccount" id="@cdktf/provider-azurerm.storageAccount.StorageAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account azurerm_storage_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccount;

StorageAccount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountReplicationType(java.lang.String)
    .accountTier(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .accessTier(java.lang.String)
//  .accountKind(java.lang.String)
//  .allowedCopyScope(java.lang.String)
//  .allowNestedItemsToBePublic(java.lang.Boolean)
//  .allowNestedItemsToBePublic(IResolvable)
//  .azureFilesAuthentication(StorageAccountAzureFilesAuthentication)
//  .blobProperties(StorageAccountBlobProperties)
//  .crossTenantReplicationEnabled(java.lang.Boolean)
//  .crossTenantReplicationEnabled(IResolvable)
//  .customDomain(StorageAccountCustomDomain)
//  .customerManagedKey(StorageAccountCustomerManagedKey)
//  .defaultToOauthAuthentication(java.lang.Boolean)
//  .defaultToOauthAuthentication(IResolvable)
//  .dnsEndpointType(java.lang.String)
//  .edgeZone(java.lang.String)
//  .enableHttpsTrafficOnly(java.lang.Boolean)
//  .enableHttpsTrafficOnly(IResolvable)
//  .httpsTrafficOnlyEnabled(java.lang.Boolean)
//  .httpsTrafficOnlyEnabled(IResolvable)
//  .id(java.lang.String)
//  .identity(StorageAccountIdentity)
//  .immutabilityPolicy(StorageAccountImmutabilityPolicy)
//  .infrastructureEncryptionEnabled(java.lang.Boolean)
//  .infrastructureEncryptionEnabled(IResolvable)
//  .isHnsEnabled(java.lang.Boolean)
//  .isHnsEnabled(IResolvable)
//  .largeFileShareEnabled(java.lang.Boolean)
//  .largeFileShareEnabled(IResolvable)
//  .localUserEnabled(java.lang.Boolean)
//  .localUserEnabled(IResolvable)
//  .minTlsVersion(java.lang.String)
//  .networkRules(StorageAccountNetworkRules)
//  .nfsv3Enabled(java.lang.Boolean)
//  .nfsv3Enabled(IResolvable)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .queueEncryptionKeyType(java.lang.String)
//  .queueProperties(StorageAccountQueueProperties)
//  .routing(StorageAccountRouting)
//  .sasPolicy(StorageAccountSasPolicy)
//  .sftpEnabled(java.lang.Boolean)
//  .sftpEnabled(IResolvable)
//  .sharedAccessKeyEnabled(java.lang.Boolean)
//  .sharedAccessKeyEnabled(IResolvable)
//  .shareProperties(StorageAccountShareProperties)
//  .staticWebsite(StorageAccountStaticWebsite)
//  .tableEncryptionKeyType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StorageAccountTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accountReplicationType">accountReplicationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accountTier">accountTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#location StorageAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#name StorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accessTier">accessTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#access_tier StorageAccount#access_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accountKind">accountKind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.allowedCopyScope">allowedCopyScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_copy_scope StorageAccount#allowed_copy_scope}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.allowNestedItemsToBePublic">allowNestedItemsToBePublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allow_nested_items_to_be_public StorageAccount#allow_nested_items_to_be_public}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.azureFilesAuthentication">azureFilesAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | azure_files_authentication block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.blobProperties">blobProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | blob_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.crossTenantReplicationEnabled">crossTenantReplicationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#cross_tenant_replication_enabled StorageAccount#cross_tenant_replication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.customDomain">customDomain</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.defaultToOauthAuthentication">defaultToOauthAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#default_to_oauth_authentication StorageAccount#default_to_oauth_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.dnsEndpointType">dnsEndpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#dns_endpoint_type StorageAccount#dns_endpoint_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.edgeZone">edgeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#edge_zone StorageAccount#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.enableHttpsTrafficOnly">enableHttpsTrafficOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.httpsTrafficOnlyEnabled">httpsTrafficOnlyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#https_traffic_only_enabled StorageAccount#https_traffic_only_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#id StorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.immutabilityPolicy">immutabilityPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | immutability_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.isHnsEnabled">isHnsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#is_hns_enabled StorageAccount#is_hns_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.largeFileShareEnabled">largeFileShareEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#large_file_share_enabled StorageAccount#large_file_share_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.localUserEnabled">localUserEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#local_user_enabled StorageAccount#local_user_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#min_tls_version StorageAccount#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.networkRules">networkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | network_rules block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.nfsv3Enabled">nfsv3Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#nfsv3_enabled StorageAccount#nfsv3_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#public_network_access_enabled StorageAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.queueEncryptionKeyType">queueEncryptionKeyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#queue_encryption_key_type StorageAccount#queue_encryption_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.queueProperties">queueProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | queue_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.sasPolicy">sasPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | sas_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.sftpEnabled">sftpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#sftp_enabled StorageAccount#sftp_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.sharedAccessKeyEnabled">sharedAccessKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#shared_access_key_enabled StorageAccount#shared_access_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.shareProperties">shareProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | share_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.staticWebsite">staticWebsite</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | static_website block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.tableEncryptionKeyType">tableEncryptionKeyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#table_encryption_key_type StorageAccount#table_encryption_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#tags StorageAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountReplicationType`<sup>Required</sup> <a name="accountReplicationType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accountReplicationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}.

---

##### `accountTier`<sup>Required</sup> <a name="accountTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accountTier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#location StorageAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#name StorageAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}.

---

##### `accessTier`<sup>Optional</sup> <a name="accessTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accessTier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#access_tier StorageAccount#access_tier}.

---

##### `accountKind`<sup>Optional</sup> <a name="accountKind" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accountKind"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}.

---

##### `allowedCopyScope`<sup>Optional</sup> <a name="allowedCopyScope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.allowedCopyScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_copy_scope StorageAccount#allowed_copy_scope}.

---

##### `allowNestedItemsToBePublic`<sup>Optional</sup> <a name="allowNestedItemsToBePublic" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.allowNestedItemsToBePublic"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allow_nested_items_to_be_public StorageAccount#allow_nested_items_to_be_public}.

---

##### `azureFilesAuthentication`<sup>Optional</sup> <a name="azureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.azureFilesAuthentication"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

azure_files_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#azure_files_authentication StorageAccount#azure_files_authentication}

---

##### `blobProperties`<sup>Optional</sup> <a name="blobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.blobProperties"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

blob_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#blob_properties StorageAccount#blob_properties}

---

##### `crossTenantReplicationEnabled`<sup>Optional</sup> <a name="crossTenantReplicationEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.crossTenantReplicationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#cross_tenant_replication_enabled StorageAccount#cross_tenant_replication_enabled}.

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.customDomain"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#custom_domain StorageAccount#custom_domain}

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.customerManagedKey"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#customer_managed_key StorageAccount#customer_managed_key}

---

##### `defaultToOauthAuthentication`<sup>Optional</sup> <a name="defaultToOauthAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.defaultToOauthAuthentication"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#default_to_oauth_authentication StorageAccount#default_to_oauth_authentication}.

---

##### `dnsEndpointType`<sup>Optional</sup> <a name="dnsEndpointType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.dnsEndpointType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#dns_endpoint_type StorageAccount#dns_endpoint_type}.

---

##### `edgeZone`<sup>Optional</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.edgeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#edge_zone StorageAccount#edge_zone}.

---

##### `enableHttpsTrafficOnly`<sup>Optional</sup> <a name="enableHttpsTrafficOnly" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.enableHttpsTrafficOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}.

---

##### `httpsTrafficOnlyEnabled`<sup>Optional</sup> <a name="httpsTrafficOnlyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.httpsTrafficOnlyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#https_traffic_only_enabled StorageAccount#https_traffic_only_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#id StorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#identity StorageAccount#identity}

---

##### `immutabilityPolicy`<sup>Optional</sup> <a name="immutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.immutabilityPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

immutability_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#immutability_policy StorageAccount#immutability_policy}

---

##### `infrastructureEncryptionEnabled`<sup>Optional</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.infrastructureEncryptionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}.

---

##### `isHnsEnabled`<sup>Optional</sup> <a name="isHnsEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.isHnsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#is_hns_enabled StorageAccount#is_hns_enabled}.

---

##### `largeFileShareEnabled`<sup>Optional</sup> <a name="largeFileShareEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.largeFileShareEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#large_file_share_enabled StorageAccount#large_file_share_enabled}.

---

##### `localUserEnabled`<sup>Optional</sup> <a name="localUserEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.localUserEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#local_user_enabled StorageAccount#local_user_enabled}.

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.minTlsVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#min_tls_version StorageAccount#min_tls_version}.

---

##### `networkRules`<sup>Optional</sup> <a name="networkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.networkRules"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

network_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#network_rules StorageAccount#network_rules}

---

##### `nfsv3Enabled`<sup>Optional</sup> <a name="nfsv3Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.nfsv3Enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#nfsv3_enabled StorageAccount#nfsv3_enabled}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#public_network_access_enabled StorageAccount#public_network_access_enabled}.

---

##### `queueEncryptionKeyType`<sup>Optional</sup> <a name="queueEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.queueEncryptionKeyType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#queue_encryption_key_type StorageAccount#queue_encryption_key_type}.

---

##### `queueProperties`<sup>Optional</sup> <a name="queueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.queueProperties"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

queue_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#queue_properties StorageAccount#queue_properties}

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.routing"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#routing StorageAccount#routing}

---

##### `sasPolicy`<sup>Optional</sup> <a name="sasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.sasPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

sas_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#sas_policy StorageAccount#sas_policy}

---

##### `sftpEnabled`<sup>Optional</sup> <a name="sftpEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.sftpEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#sftp_enabled StorageAccount#sftp_enabled}.

---

##### `sharedAccessKeyEnabled`<sup>Optional</sup> <a name="sharedAccessKeyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.sharedAccessKeyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#shared_access_key_enabled StorageAccount#shared_access_key_enabled}.

---

##### `shareProperties`<sup>Optional</sup> <a name="shareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.shareProperties"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

share_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#share_properties StorageAccount#share_properties}

---

##### `staticWebsite`<sup>Optional</sup> <a name="staticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.staticWebsite"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

static_website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#static_website StorageAccount#static_website}

---

##### `tableEncryptionKeyType`<sup>Optional</sup> <a name="tableEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.tableEncryptionKeyType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#table_encryption_key_type StorageAccount#table_encryption_key_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#tags StorageAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#timeouts StorageAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putAzureFilesAuthentication">putAzureFilesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties">putBlobProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomDomain">putCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey">putCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy">putImmutabilityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules">putNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties">putQueueProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting">putRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putSasPolicy">putSasPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties">putShareProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putStaticWebsite">putStaticWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccessTier">resetAccessTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccountKind">resetAccountKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowedCopyScope">resetAllowedCopyScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowNestedItemsToBePublic">resetAllowNestedItemsToBePublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAzureFilesAuthentication">resetAzureFilesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetBlobProperties">resetBlobProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCrossTenantReplicationEnabled">resetCrossTenantReplicationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomDomain">resetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetDefaultToOauthAuthentication">resetDefaultToOauthAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetDnsEndpointType">resetDnsEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEdgeZone">resetEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEnableHttpsTrafficOnly">resetEnableHttpsTrafficOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetHttpsTrafficOnlyEnabled">resetHttpsTrafficOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetImmutabilityPolicy">resetImmutabilityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetInfrastructureEncryptionEnabled">resetInfrastructureEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIsHnsEnabled">resetIsHnsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetLargeFileShareEnabled">resetLargeFileShareEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetLocalUserEnabled">resetLocalUserEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNetworkRules">resetNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNfsv3Enabled">resetNfsv3Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueEncryptionKeyType">resetQueueEncryptionKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueProperties">resetQueueProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetRouting">resetRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSasPolicy">resetSasPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSftpEnabled">resetSftpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSharedAccessKeyEnabled">resetSharedAccessKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetShareProperties">resetShareProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetStaticWebsite">resetStaticWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTableEncryptionKeyType">resetTableEncryptionKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureFilesAuthentication` <a name="putAzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putAzureFilesAuthentication"></a>

```java
public void putAzureFilesAuthentication(StorageAccountAzureFilesAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putAzureFilesAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

---

##### `putBlobProperties` <a name="putBlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties"></a>

```java
public void putBlobProperties(StorageAccountBlobProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

---

##### `putCustomDomain` <a name="putCustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomDomain"></a>

```java
public void putCustomDomain(StorageAccountCustomDomain value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomDomain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---

##### `putCustomerManagedKey` <a name="putCustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey"></a>

```java
public void putCustomerManagedKey(StorageAccountCustomerManagedKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putIdentity"></a>

```java
public void putIdentity(StorageAccountIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

---

##### `putImmutabilityPolicy` <a name="putImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy"></a>

```java
public void putImmutabilityPolicy(StorageAccountImmutabilityPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

---

##### `putNetworkRules` <a name="putNetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules"></a>

```java
public void putNetworkRules(StorageAccountNetworkRules value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

---

##### `putQueueProperties` <a name="putQueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties"></a>

```java
public void putQueueProperties(StorageAccountQueueProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

---

##### `putRouting` <a name="putRouting" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting"></a>

```java
public void putRouting(StorageAccountRouting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

---

##### `putSasPolicy` <a name="putSasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putSasPolicy"></a>

```java
public void putSasPolicy(StorageAccountSasPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putSasPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

---

##### `putShareProperties` <a name="putShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties"></a>

```java
public void putShareProperties(StorageAccountShareProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

---

##### `putStaticWebsite` <a name="putStaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putStaticWebsite"></a>

```java
public void putStaticWebsite(StorageAccountStaticWebsite value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putStaticWebsite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts"></a>

```java
public void putTimeouts(StorageAccountTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

---

##### `resetAccessTier` <a name="resetAccessTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccessTier"></a>

```java
public void resetAccessTier()
```

##### `resetAccountKind` <a name="resetAccountKind" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccountKind"></a>

```java
public void resetAccountKind()
```

##### `resetAllowedCopyScope` <a name="resetAllowedCopyScope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowedCopyScope"></a>

```java
public void resetAllowedCopyScope()
```

##### `resetAllowNestedItemsToBePublic` <a name="resetAllowNestedItemsToBePublic" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowNestedItemsToBePublic"></a>

```java
public void resetAllowNestedItemsToBePublic()
```

##### `resetAzureFilesAuthentication` <a name="resetAzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAzureFilesAuthentication"></a>

```java
public void resetAzureFilesAuthentication()
```

##### `resetBlobProperties` <a name="resetBlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetBlobProperties"></a>

```java
public void resetBlobProperties()
```

##### `resetCrossTenantReplicationEnabled` <a name="resetCrossTenantReplicationEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCrossTenantReplicationEnabled"></a>

```java
public void resetCrossTenantReplicationEnabled()
```

##### `resetCustomDomain` <a name="resetCustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomDomain"></a>

```java
public void resetCustomDomain()
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomerManagedKey"></a>

```java
public void resetCustomerManagedKey()
```

##### `resetDefaultToOauthAuthentication` <a name="resetDefaultToOauthAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetDefaultToOauthAuthentication"></a>

```java
public void resetDefaultToOauthAuthentication()
```

##### `resetDnsEndpointType` <a name="resetDnsEndpointType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetDnsEndpointType"></a>

```java
public void resetDnsEndpointType()
```

##### `resetEdgeZone` <a name="resetEdgeZone" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEdgeZone"></a>

```java
public void resetEdgeZone()
```

##### `resetEnableHttpsTrafficOnly` <a name="resetEnableHttpsTrafficOnly" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEnableHttpsTrafficOnly"></a>

```java
public void resetEnableHttpsTrafficOnly()
```

##### `resetHttpsTrafficOnlyEnabled` <a name="resetHttpsTrafficOnlyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetHttpsTrafficOnlyEnabled"></a>

```java
public void resetHttpsTrafficOnlyEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetImmutabilityPolicy` <a name="resetImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetImmutabilityPolicy"></a>

```java
public void resetImmutabilityPolicy()
```

##### `resetInfrastructureEncryptionEnabled` <a name="resetInfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetInfrastructureEncryptionEnabled"></a>

```java
public void resetInfrastructureEncryptionEnabled()
```

##### `resetIsHnsEnabled` <a name="resetIsHnsEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIsHnsEnabled"></a>

```java
public void resetIsHnsEnabled()
```

##### `resetLargeFileShareEnabled` <a name="resetLargeFileShareEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetLargeFileShareEnabled"></a>

```java
public void resetLargeFileShareEnabled()
```

##### `resetLocalUserEnabled` <a name="resetLocalUserEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetLocalUserEnabled"></a>

```java
public void resetLocalUserEnabled()
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetMinTlsVersion"></a>

```java
public void resetMinTlsVersion()
```

##### `resetNetworkRules` <a name="resetNetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNetworkRules"></a>

```java
public void resetNetworkRules()
```

##### `resetNfsv3Enabled` <a name="resetNfsv3Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNfsv3Enabled"></a>

```java
public void resetNfsv3Enabled()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetQueueEncryptionKeyType` <a name="resetQueueEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueEncryptionKeyType"></a>

```java
public void resetQueueEncryptionKeyType()
```

##### `resetQueueProperties` <a name="resetQueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueProperties"></a>

```java
public void resetQueueProperties()
```

##### `resetRouting` <a name="resetRouting" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetRouting"></a>

```java
public void resetRouting()
```

##### `resetSasPolicy` <a name="resetSasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSasPolicy"></a>

```java
public void resetSasPolicy()
```

##### `resetSftpEnabled` <a name="resetSftpEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSftpEnabled"></a>

```java
public void resetSftpEnabled()
```

##### `resetSharedAccessKeyEnabled` <a name="resetSharedAccessKeyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSharedAccessKeyEnabled"></a>

```java
public void resetSharedAccessKeyEnabled()
```

##### `resetShareProperties` <a name="resetShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetShareProperties"></a>

```java
public void resetShareProperties()
```

##### `resetStaticWebsite` <a name="resetStaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetStaticWebsite"></a>

```java
public void resetStaticWebsite()
```

##### `resetTableEncryptionKeyType` <a name="resetTableEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTableEncryptionKeyType"></a>

```java
public void resetTableEncryptionKeyType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccount;

StorageAccount.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccount;

StorageAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccount;

StorageAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccount;

StorageAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StorageAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StorageAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthentication">azureFilesAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference">StorageAccountAzureFilesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobProperties">blobProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference">StorageAccountBlobPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomain">customDomain</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference">StorageAccountCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference">StorageAccountCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference">StorageAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicy">immutabilityPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference">StorageAccountImmutabilityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRules">networkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference">StorageAccountNetworkRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryAccessKey">primaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobConnectionString">primaryBlobConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobEndpoint">primaryBlobEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobHost">primaryBlobHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobInternetEndpoint">primaryBlobInternetEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobInternetHost">primaryBlobInternetHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobMicrosoftEndpoint">primaryBlobMicrosoftEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobMicrosoftHost">primaryBlobMicrosoftHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryConnectionString">primaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsEndpoint">primaryDfsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsHost">primaryDfsHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsInternetEndpoint">primaryDfsInternetEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsInternetHost">primaryDfsInternetHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsMicrosoftEndpoint">primaryDfsMicrosoftEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsMicrosoftHost">primaryDfsMicrosoftHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileEndpoint">primaryFileEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileHost">primaryFileHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileInternetEndpoint">primaryFileInternetEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileInternetHost">primaryFileInternetHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileMicrosoftEndpoint">primaryFileMicrosoftEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileMicrosoftHost">primaryFileMicrosoftHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryLocation">primaryLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueEndpoint">primaryQueueEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueHost">primaryQueueHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueMicrosoftEndpoint">primaryQueueMicrosoftEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueMicrosoftHost">primaryQueueMicrosoftHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableEndpoint">primaryTableEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableHost">primaryTableHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableMicrosoftEndpoint">primaryTableMicrosoftEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableMicrosoftHost">primaryTableMicrosoftHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebEndpoint">primaryWebEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebHost">primaryWebHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebInternetEndpoint">primaryWebInternetEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebInternetHost">primaryWebInternetHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebMicrosoftEndpoint">primaryWebMicrosoftEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebMicrosoftHost">primaryWebMicrosoftHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueProperties">queueProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference">StorageAccountQueuePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference">StorageAccountRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicy">sasPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference">StorageAccountSasPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobConnectionString">secondaryBlobConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobEndpoint">secondaryBlobEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobHost">secondaryBlobHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobInternetEndpoint">secondaryBlobInternetEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobInternetHost">secondaryBlobInternetHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobMicrosoftEndpoint">secondaryBlobMicrosoftEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobMicrosoftHost">secondaryBlobMicrosoftHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsEndpoint">secondaryDfsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsHost">secondaryDfsHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsInternetEndpoint">secondaryDfsInternetEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsInternetHost">secondaryDfsInternetHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsMicrosoftEndpoint">secondaryDfsMicrosoftEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsMicrosoftHost">secondaryDfsMicrosoftHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileEndpoint">secondaryFileEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileHost">secondaryFileHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileInternetEndpoint">secondaryFileInternetEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileInternetHost">secondaryFileInternetHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileMicrosoftEndpoint">secondaryFileMicrosoftEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileMicrosoftHost">secondaryFileMicrosoftHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryLocation">secondaryLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueEndpoint">secondaryQueueEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueHost">secondaryQueueHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueMicrosoftEndpoint">secondaryQueueMicrosoftEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueMicrosoftHost">secondaryQueueMicrosoftHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableEndpoint">secondaryTableEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableHost">secondaryTableHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableMicrosoftEndpoint">secondaryTableMicrosoftEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableMicrosoftHost">secondaryTableMicrosoftHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebEndpoint">secondaryWebEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebHost">secondaryWebHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebInternetEndpoint">secondaryWebInternetEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebInternetHost">secondaryWebInternetHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebMicrosoftEndpoint">secondaryWebMicrosoftEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebMicrosoftHost">secondaryWebMicrosoftHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.shareProperties">shareProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference">StorageAccountSharePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsite">staticWebsite</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference">StorageAccountStaticWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference">StorageAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTierInput">accessTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKindInput">accountKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationTypeInput">accountReplicationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTierInput">accountTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScopeInput">allowedCopyScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublicInput">allowNestedItemsToBePublicInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthenticationInput">azureFilesAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobPropertiesInput">blobPropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabledInput">crossTenantReplicationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomainInput">customDomainInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthenticationInput">defaultToOauthAuthenticationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dnsEndpointTypeInput">dnsEndpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZoneInput">edgeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnlyInput">enableHttpsTrafficOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.httpsTrafficOnlyEnabledInput">httpsTrafficOnlyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicyInput">immutabilityPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabledInput">infrastructureEncryptionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabledInput">isHnsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabledInput">largeFileShareEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.localUserEnabledInput">localUserEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRulesInput">networkRulesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3EnabledInput">nfsv3EnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyTypeInput">queueEncryptionKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queuePropertiesInput">queuePropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routingInput">routingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicyInput">sasPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabledInput">sftpEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabledInput">sharedAccessKeyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharePropertiesInput">sharePropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsiteInput">staticWebsiteInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyTypeInput">tableEncryptionKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTier">accessTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKind">accountKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationType">accountReplicationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTier">accountTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScope">allowedCopyScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublic">allowNestedItemsToBePublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabled">crossTenantReplicationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthentication">defaultToOauthAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dnsEndpointType">dnsEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZone">edgeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnly">enableHttpsTrafficOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.httpsTrafficOnlyEnabled">httpsTrafficOnlyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabled">isHnsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabled">largeFileShareEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.localUserEnabled">localUserEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3Enabled">nfsv3Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyType">queueEncryptionKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabled">sftpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabled">sharedAccessKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyType">tableEncryptionKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `azureFilesAuthentication`<sup>Required</sup> <a name="azureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthentication"></a>

```java
public StorageAccountAzureFilesAuthenticationOutputReference getAzureFilesAuthentication();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference">StorageAccountAzureFilesAuthenticationOutputReference</a>

---

##### `blobProperties`<sup>Required</sup> <a name="blobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobProperties"></a>

```java
public StorageAccountBlobPropertiesOutputReference getBlobProperties();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference">StorageAccountBlobPropertiesOutputReference</a>

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomain"></a>

```java
public StorageAccountCustomDomainOutputReference getCustomDomain();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference">StorageAccountCustomDomainOutputReference</a>

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKey"></a>

```java
public StorageAccountCustomerManagedKeyOutputReference getCustomerManagedKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference">StorageAccountCustomerManagedKeyOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identity"></a>

```java
public StorageAccountIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference">StorageAccountIdentityOutputReference</a>

---

##### `immutabilityPolicy`<sup>Required</sup> <a name="immutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicy"></a>

```java
public StorageAccountImmutabilityPolicyOutputReference getImmutabilityPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference">StorageAccountImmutabilityPolicyOutputReference</a>

---

##### `networkRules`<sup>Required</sup> <a name="networkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRules"></a>

```java
public StorageAccountNetworkRulesOutputReference getNetworkRules();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference">StorageAccountNetworkRulesOutputReference</a>

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryAccessKey"></a>

```java
public java.lang.String getPrimaryAccessKey();
```

- *Type:* java.lang.String

---

##### `primaryBlobConnectionString`<sup>Required</sup> <a name="primaryBlobConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobConnectionString"></a>

```java
public java.lang.String getPrimaryBlobConnectionString();
```

- *Type:* java.lang.String

---

##### `primaryBlobEndpoint`<sup>Required</sup> <a name="primaryBlobEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobEndpoint"></a>

```java
public java.lang.String getPrimaryBlobEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryBlobHost`<sup>Required</sup> <a name="primaryBlobHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobHost"></a>

```java
public java.lang.String getPrimaryBlobHost();
```

- *Type:* java.lang.String

---

##### `primaryBlobInternetEndpoint`<sup>Required</sup> <a name="primaryBlobInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobInternetEndpoint"></a>

```java
public java.lang.String getPrimaryBlobInternetEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryBlobInternetHost`<sup>Required</sup> <a name="primaryBlobInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobInternetHost"></a>

```java
public java.lang.String getPrimaryBlobInternetHost();
```

- *Type:* java.lang.String

---

##### `primaryBlobMicrosoftEndpoint`<sup>Required</sup> <a name="primaryBlobMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobMicrosoftEndpoint"></a>

```java
public java.lang.String getPrimaryBlobMicrosoftEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryBlobMicrosoftHost`<sup>Required</sup> <a name="primaryBlobMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobMicrosoftHost"></a>

```java
public java.lang.String getPrimaryBlobMicrosoftHost();
```

- *Type:* java.lang.String

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryConnectionString"></a>

```java
public java.lang.String getPrimaryConnectionString();
```

- *Type:* java.lang.String

---

##### `primaryDfsEndpoint`<sup>Required</sup> <a name="primaryDfsEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsEndpoint"></a>

```java
public java.lang.String getPrimaryDfsEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryDfsHost`<sup>Required</sup> <a name="primaryDfsHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsHost"></a>

```java
public java.lang.String getPrimaryDfsHost();
```

- *Type:* java.lang.String

---

##### `primaryDfsInternetEndpoint`<sup>Required</sup> <a name="primaryDfsInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsInternetEndpoint"></a>

```java
public java.lang.String getPrimaryDfsInternetEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryDfsInternetHost`<sup>Required</sup> <a name="primaryDfsInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsInternetHost"></a>

```java
public java.lang.String getPrimaryDfsInternetHost();
```

- *Type:* java.lang.String

---

##### `primaryDfsMicrosoftEndpoint`<sup>Required</sup> <a name="primaryDfsMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsMicrosoftEndpoint"></a>

```java
public java.lang.String getPrimaryDfsMicrosoftEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryDfsMicrosoftHost`<sup>Required</sup> <a name="primaryDfsMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsMicrosoftHost"></a>

```java
public java.lang.String getPrimaryDfsMicrosoftHost();
```

- *Type:* java.lang.String

---

##### `primaryFileEndpoint`<sup>Required</sup> <a name="primaryFileEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileEndpoint"></a>

```java
public java.lang.String getPrimaryFileEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryFileHost`<sup>Required</sup> <a name="primaryFileHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileHost"></a>

```java
public java.lang.String getPrimaryFileHost();
```

- *Type:* java.lang.String

---

##### `primaryFileInternetEndpoint`<sup>Required</sup> <a name="primaryFileInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileInternetEndpoint"></a>

```java
public java.lang.String getPrimaryFileInternetEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryFileInternetHost`<sup>Required</sup> <a name="primaryFileInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileInternetHost"></a>

```java
public java.lang.String getPrimaryFileInternetHost();
```

- *Type:* java.lang.String

---

##### `primaryFileMicrosoftEndpoint`<sup>Required</sup> <a name="primaryFileMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileMicrosoftEndpoint"></a>

```java
public java.lang.String getPrimaryFileMicrosoftEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryFileMicrosoftHost`<sup>Required</sup> <a name="primaryFileMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileMicrosoftHost"></a>

```java
public java.lang.String getPrimaryFileMicrosoftHost();
```

- *Type:* java.lang.String

---

##### `primaryLocation`<sup>Required</sup> <a name="primaryLocation" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryLocation"></a>

```java
public java.lang.String getPrimaryLocation();
```

- *Type:* java.lang.String

---

##### `primaryQueueEndpoint`<sup>Required</sup> <a name="primaryQueueEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueEndpoint"></a>

```java
public java.lang.String getPrimaryQueueEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryQueueHost`<sup>Required</sup> <a name="primaryQueueHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueHost"></a>

```java
public java.lang.String getPrimaryQueueHost();
```

- *Type:* java.lang.String

---

##### `primaryQueueMicrosoftEndpoint`<sup>Required</sup> <a name="primaryQueueMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueMicrosoftEndpoint"></a>

```java
public java.lang.String getPrimaryQueueMicrosoftEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryQueueMicrosoftHost`<sup>Required</sup> <a name="primaryQueueMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueMicrosoftHost"></a>

```java
public java.lang.String getPrimaryQueueMicrosoftHost();
```

- *Type:* java.lang.String

---

##### `primaryTableEndpoint`<sup>Required</sup> <a name="primaryTableEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableEndpoint"></a>

```java
public java.lang.String getPrimaryTableEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryTableHost`<sup>Required</sup> <a name="primaryTableHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableHost"></a>

```java
public java.lang.String getPrimaryTableHost();
```

- *Type:* java.lang.String

---

##### `primaryTableMicrosoftEndpoint`<sup>Required</sup> <a name="primaryTableMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableMicrosoftEndpoint"></a>

```java
public java.lang.String getPrimaryTableMicrosoftEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryTableMicrosoftHost`<sup>Required</sup> <a name="primaryTableMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableMicrosoftHost"></a>

```java
public java.lang.String getPrimaryTableMicrosoftHost();
```

- *Type:* java.lang.String

---

##### `primaryWebEndpoint`<sup>Required</sup> <a name="primaryWebEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebEndpoint"></a>

```java
public java.lang.String getPrimaryWebEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryWebHost`<sup>Required</sup> <a name="primaryWebHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebHost"></a>

```java
public java.lang.String getPrimaryWebHost();
```

- *Type:* java.lang.String

---

##### `primaryWebInternetEndpoint`<sup>Required</sup> <a name="primaryWebInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebInternetEndpoint"></a>

```java
public java.lang.String getPrimaryWebInternetEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryWebInternetHost`<sup>Required</sup> <a name="primaryWebInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebInternetHost"></a>

```java
public java.lang.String getPrimaryWebInternetHost();
```

- *Type:* java.lang.String

---

##### `primaryWebMicrosoftEndpoint`<sup>Required</sup> <a name="primaryWebMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebMicrosoftEndpoint"></a>

```java
public java.lang.String getPrimaryWebMicrosoftEndpoint();
```

- *Type:* java.lang.String

---

##### `primaryWebMicrosoftHost`<sup>Required</sup> <a name="primaryWebMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebMicrosoftHost"></a>

```java
public java.lang.String getPrimaryWebMicrosoftHost();
```

- *Type:* java.lang.String

---

##### `queueProperties`<sup>Required</sup> <a name="queueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueProperties"></a>

```java
public StorageAccountQueuePropertiesOutputReference getQueueProperties();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference">StorageAccountQueuePropertiesOutputReference</a>

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routing"></a>

```java
public StorageAccountRoutingOutputReference getRouting();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference">StorageAccountRoutingOutputReference</a>

---

##### `sasPolicy`<sup>Required</sup> <a name="sasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicy"></a>

```java
public StorageAccountSasPolicyOutputReference getSasPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference">StorageAccountSasPolicyOutputReference</a>

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryAccessKey"></a>

```java
public java.lang.String getSecondaryAccessKey();
```

- *Type:* java.lang.String

---

##### `secondaryBlobConnectionString`<sup>Required</sup> <a name="secondaryBlobConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobConnectionString"></a>

```java
public java.lang.String getSecondaryBlobConnectionString();
```

- *Type:* java.lang.String

---

##### `secondaryBlobEndpoint`<sup>Required</sup> <a name="secondaryBlobEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobEndpoint"></a>

```java
public java.lang.String getSecondaryBlobEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryBlobHost`<sup>Required</sup> <a name="secondaryBlobHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobHost"></a>

```java
public java.lang.String getSecondaryBlobHost();
```

- *Type:* java.lang.String

---

##### `secondaryBlobInternetEndpoint`<sup>Required</sup> <a name="secondaryBlobInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobInternetEndpoint"></a>

```java
public java.lang.String getSecondaryBlobInternetEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryBlobInternetHost`<sup>Required</sup> <a name="secondaryBlobInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobInternetHost"></a>

```java
public java.lang.String getSecondaryBlobInternetHost();
```

- *Type:* java.lang.String

---

##### `secondaryBlobMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryBlobMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobMicrosoftEndpoint"></a>

```java
public java.lang.String getSecondaryBlobMicrosoftEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryBlobMicrosoftHost`<sup>Required</sup> <a name="secondaryBlobMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobMicrosoftHost"></a>

```java
public java.lang.String getSecondaryBlobMicrosoftHost();
```

- *Type:* java.lang.String

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryConnectionString"></a>

```java
public java.lang.String getSecondaryConnectionString();
```

- *Type:* java.lang.String

---

##### `secondaryDfsEndpoint`<sup>Required</sup> <a name="secondaryDfsEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsEndpoint"></a>

```java
public java.lang.String getSecondaryDfsEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryDfsHost`<sup>Required</sup> <a name="secondaryDfsHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsHost"></a>

```java
public java.lang.String getSecondaryDfsHost();
```

- *Type:* java.lang.String

---

##### `secondaryDfsInternetEndpoint`<sup>Required</sup> <a name="secondaryDfsInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsInternetEndpoint"></a>

```java
public java.lang.String getSecondaryDfsInternetEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryDfsInternetHost`<sup>Required</sup> <a name="secondaryDfsInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsInternetHost"></a>

```java
public java.lang.String getSecondaryDfsInternetHost();
```

- *Type:* java.lang.String

---

##### `secondaryDfsMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryDfsMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsMicrosoftEndpoint"></a>

```java
public java.lang.String getSecondaryDfsMicrosoftEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryDfsMicrosoftHost`<sup>Required</sup> <a name="secondaryDfsMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsMicrosoftHost"></a>

```java
public java.lang.String getSecondaryDfsMicrosoftHost();
```

- *Type:* java.lang.String

---

##### `secondaryFileEndpoint`<sup>Required</sup> <a name="secondaryFileEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileEndpoint"></a>

```java
public java.lang.String getSecondaryFileEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryFileHost`<sup>Required</sup> <a name="secondaryFileHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileHost"></a>

```java
public java.lang.String getSecondaryFileHost();
```

- *Type:* java.lang.String

---

##### `secondaryFileInternetEndpoint`<sup>Required</sup> <a name="secondaryFileInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileInternetEndpoint"></a>

```java
public java.lang.String getSecondaryFileInternetEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryFileInternetHost`<sup>Required</sup> <a name="secondaryFileInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileInternetHost"></a>

```java
public java.lang.String getSecondaryFileInternetHost();
```

- *Type:* java.lang.String

---

##### `secondaryFileMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryFileMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileMicrosoftEndpoint"></a>

```java
public java.lang.String getSecondaryFileMicrosoftEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryFileMicrosoftHost`<sup>Required</sup> <a name="secondaryFileMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileMicrosoftHost"></a>

```java
public java.lang.String getSecondaryFileMicrosoftHost();
```

- *Type:* java.lang.String

---

##### `secondaryLocation`<sup>Required</sup> <a name="secondaryLocation" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryLocation"></a>

```java
public java.lang.String getSecondaryLocation();
```

- *Type:* java.lang.String

---

##### `secondaryQueueEndpoint`<sup>Required</sup> <a name="secondaryQueueEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueEndpoint"></a>

```java
public java.lang.String getSecondaryQueueEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryQueueHost`<sup>Required</sup> <a name="secondaryQueueHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueHost"></a>

```java
public java.lang.String getSecondaryQueueHost();
```

- *Type:* java.lang.String

---

##### `secondaryQueueMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryQueueMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueMicrosoftEndpoint"></a>

```java
public java.lang.String getSecondaryQueueMicrosoftEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryQueueMicrosoftHost`<sup>Required</sup> <a name="secondaryQueueMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueMicrosoftHost"></a>

```java
public java.lang.String getSecondaryQueueMicrosoftHost();
```

- *Type:* java.lang.String

---

##### `secondaryTableEndpoint`<sup>Required</sup> <a name="secondaryTableEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableEndpoint"></a>

```java
public java.lang.String getSecondaryTableEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryTableHost`<sup>Required</sup> <a name="secondaryTableHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableHost"></a>

```java
public java.lang.String getSecondaryTableHost();
```

- *Type:* java.lang.String

---

##### `secondaryTableMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryTableMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableMicrosoftEndpoint"></a>

```java
public java.lang.String getSecondaryTableMicrosoftEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryTableMicrosoftHost`<sup>Required</sup> <a name="secondaryTableMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableMicrosoftHost"></a>

```java
public java.lang.String getSecondaryTableMicrosoftHost();
```

- *Type:* java.lang.String

---

##### `secondaryWebEndpoint`<sup>Required</sup> <a name="secondaryWebEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebEndpoint"></a>

```java
public java.lang.String getSecondaryWebEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryWebHost`<sup>Required</sup> <a name="secondaryWebHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebHost"></a>

```java
public java.lang.String getSecondaryWebHost();
```

- *Type:* java.lang.String

---

##### `secondaryWebInternetEndpoint`<sup>Required</sup> <a name="secondaryWebInternetEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebInternetEndpoint"></a>

```java
public java.lang.String getSecondaryWebInternetEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryWebInternetHost`<sup>Required</sup> <a name="secondaryWebInternetHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebInternetHost"></a>

```java
public java.lang.String getSecondaryWebInternetHost();
```

- *Type:* java.lang.String

---

##### `secondaryWebMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryWebMicrosoftEndpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebMicrosoftEndpoint"></a>

```java
public java.lang.String getSecondaryWebMicrosoftEndpoint();
```

- *Type:* java.lang.String

---

##### `secondaryWebMicrosoftHost`<sup>Required</sup> <a name="secondaryWebMicrosoftHost" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebMicrosoftHost"></a>

```java
public java.lang.String getSecondaryWebMicrosoftHost();
```

- *Type:* java.lang.String

---

##### `shareProperties`<sup>Required</sup> <a name="shareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.shareProperties"></a>

```java
public StorageAccountSharePropertiesOutputReference getShareProperties();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference">StorageAccountSharePropertiesOutputReference</a>

---

##### `staticWebsite`<sup>Required</sup> <a name="staticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsite"></a>

```java
public StorageAccountStaticWebsiteOutputReference getStaticWebsite();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference">StorageAccountStaticWebsiteOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeouts"></a>

```java
public StorageAccountTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference">StorageAccountTimeoutsOutputReference</a>

---

##### `accessTierInput`<sup>Optional</sup> <a name="accessTierInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTierInput"></a>

```java
public java.lang.String getAccessTierInput();
```

- *Type:* java.lang.String

---

##### `accountKindInput`<sup>Optional</sup> <a name="accountKindInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKindInput"></a>

```java
public java.lang.String getAccountKindInput();
```

- *Type:* java.lang.String

---

##### `accountReplicationTypeInput`<sup>Optional</sup> <a name="accountReplicationTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationTypeInput"></a>

```java
public java.lang.String getAccountReplicationTypeInput();
```

- *Type:* java.lang.String

---

##### `accountTierInput`<sup>Optional</sup> <a name="accountTierInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTierInput"></a>

```java
public java.lang.String getAccountTierInput();
```

- *Type:* java.lang.String

---

##### `allowedCopyScopeInput`<sup>Optional</sup> <a name="allowedCopyScopeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScopeInput"></a>

```java
public java.lang.String getAllowedCopyScopeInput();
```

- *Type:* java.lang.String

---

##### `allowNestedItemsToBePublicInput`<sup>Optional</sup> <a name="allowNestedItemsToBePublicInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublicInput"></a>

```java
public java.lang.Object getAllowNestedItemsToBePublicInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `azureFilesAuthenticationInput`<sup>Optional</sup> <a name="azureFilesAuthenticationInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthenticationInput"></a>

```java
public StorageAccountAzureFilesAuthentication getAzureFilesAuthenticationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

---

##### `blobPropertiesInput`<sup>Optional</sup> <a name="blobPropertiesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobPropertiesInput"></a>

```java
public StorageAccountBlobProperties getBlobPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

---

##### `crossTenantReplicationEnabledInput`<sup>Optional</sup> <a name="crossTenantReplicationEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabledInput"></a>

```java
public java.lang.Object getCrossTenantReplicationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customDomainInput`<sup>Optional</sup> <a name="customDomainInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomainInput"></a>

```java
public StorageAccountCustomDomain getCustomDomainInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKeyInput"></a>

```java
public StorageAccountCustomerManagedKey getCustomerManagedKeyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

---

##### `defaultToOauthAuthenticationInput`<sup>Optional</sup> <a name="defaultToOauthAuthenticationInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthenticationInput"></a>

```java
public java.lang.Object getDefaultToOauthAuthenticationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dnsEndpointTypeInput`<sup>Optional</sup> <a name="dnsEndpointTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dnsEndpointTypeInput"></a>

```java
public java.lang.String getDnsEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `edgeZoneInput`<sup>Optional</sup> <a name="edgeZoneInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZoneInput"></a>

```java
public java.lang.String getEdgeZoneInput();
```

- *Type:* java.lang.String

---

##### `enableHttpsTrafficOnlyInput`<sup>Optional</sup> <a name="enableHttpsTrafficOnlyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnlyInput"></a>

```java
public java.lang.Object getEnableHttpsTrafficOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpsTrafficOnlyEnabledInput`<sup>Optional</sup> <a name="httpsTrafficOnlyEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.httpsTrafficOnlyEnabledInput"></a>

```java
public java.lang.Object getHttpsTrafficOnlyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identityInput"></a>

```java
public StorageAccountIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `immutabilityPolicyInput`<sup>Optional</sup> <a name="immutabilityPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicyInput"></a>

```java
public StorageAccountImmutabilityPolicy getImmutabilityPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

---

##### `infrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="infrastructureEncryptionEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabledInput"></a>

```java
public java.lang.Object getInfrastructureEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHnsEnabledInput`<sup>Optional</sup> <a name="isHnsEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabledInput"></a>

```java
public java.lang.Object getIsHnsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `largeFileShareEnabledInput`<sup>Optional</sup> <a name="largeFileShareEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabledInput"></a>

```java
public java.lang.Object getLargeFileShareEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localUserEnabledInput`<sup>Optional</sup> <a name="localUserEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.localUserEnabledInput"></a>

```java
public java.lang.Object getLocalUserEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersionInput"></a>

```java
public java.lang.String getMinTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkRulesInput`<sup>Optional</sup> <a name="networkRulesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRulesInput"></a>

```java
public StorageAccountNetworkRules getNetworkRulesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

---

##### `nfsv3EnabledInput`<sup>Optional</sup> <a name="nfsv3EnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3EnabledInput"></a>

```java
public java.lang.Object getNfsv3EnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queueEncryptionKeyTypeInput`<sup>Optional</sup> <a name="queueEncryptionKeyTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyTypeInput"></a>

```java
public java.lang.String getQueueEncryptionKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `queuePropertiesInput`<sup>Optional</sup> <a name="queuePropertiesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queuePropertiesInput"></a>

```java
public StorageAccountQueueProperties getQueuePropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `routingInput`<sup>Optional</sup> <a name="routingInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routingInput"></a>

```java
public StorageAccountRouting getRoutingInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

---

##### `sasPolicyInput`<sup>Optional</sup> <a name="sasPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicyInput"></a>

```java
public StorageAccountSasPolicy getSasPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

---

##### `sftpEnabledInput`<sup>Optional</sup> <a name="sftpEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabledInput"></a>

```java
public java.lang.Object getSftpEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sharedAccessKeyEnabledInput`<sup>Optional</sup> <a name="sharedAccessKeyEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabledInput"></a>

```java
public java.lang.Object getSharedAccessKeyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sharePropertiesInput`<sup>Optional</sup> <a name="sharePropertiesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharePropertiesInput"></a>

```java
public StorageAccountShareProperties getSharePropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

---

##### `staticWebsiteInput`<sup>Optional</sup> <a name="staticWebsiteInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsiteInput"></a>

```java
public StorageAccountStaticWebsite getStaticWebsiteInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

---

##### `tableEncryptionKeyTypeInput`<sup>Optional</sup> <a name="tableEncryptionKeyTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyTypeInput"></a>

```java
public java.lang.String getTableEncryptionKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

---

##### `accessTier`<sup>Required</sup> <a name="accessTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTier"></a>

```java
public java.lang.String getAccessTier();
```

- *Type:* java.lang.String

---

##### `accountKind`<sup>Required</sup> <a name="accountKind" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKind"></a>

```java
public java.lang.String getAccountKind();
```

- *Type:* java.lang.String

---

##### `accountReplicationType`<sup>Required</sup> <a name="accountReplicationType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationType"></a>

```java
public java.lang.String getAccountReplicationType();
```

- *Type:* java.lang.String

---

##### `accountTier`<sup>Required</sup> <a name="accountTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTier"></a>

```java
public java.lang.String getAccountTier();
```

- *Type:* java.lang.String

---

##### `allowedCopyScope`<sup>Required</sup> <a name="allowedCopyScope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScope"></a>

```java
public java.lang.String getAllowedCopyScope();
```

- *Type:* java.lang.String

---

##### `allowNestedItemsToBePublic`<sup>Required</sup> <a name="allowNestedItemsToBePublic" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublic"></a>

```java
public java.lang.Object getAllowNestedItemsToBePublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `crossTenantReplicationEnabled`<sup>Required</sup> <a name="crossTenantReplicationEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabled"></a>

```java
public java.lang.Object getCrossTenantReplicationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultToOauthAuthentication`<sup>Required</sup> <a name="defaultToOauthAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthentication"></a>

```java
public java.lang.Object getDefaultToOauthAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dnsEndpointType`<sup>Required</sup> <a name="dnsEndpointType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dnsEndpointType"></a>

```java
public java.lang.String getDnsEndpointType();
```

- *Type:* java.lang.String

---

##### `edgeZone`<sup>Required</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZone"></a>

```java
public java.lang.String getEdgeZone();
```

- *Type:* java.lang.String

---

##### `enableHttpsTrafficOnly`<sup>Required</sup> <a name="enableHttpsTrafficOnly" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnly"></a>

```java
public java.lang.Object getEnableHttpsTrafficOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpsTrafficOnlyEnabled`<sup>Required</sup> <a name="httpsTrafficOnlyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.httpsTrafficOnlyEnabled"></a>

```java
public java.lang.Object getHttpsTrafficOnlyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `infrastructureEncryptionEnabled`<sup>Required</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabled"></a>

```java
public java.lang.Object getInfrastructureEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHnsEnabled`<sup>Required</sup> <a name="isHnsEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabled"></a>

```java
public java.lang.Object getIsHnsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `largeFileShareEnabled`<sup>Required</sup> <a name="largeFileShareEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabled"></a>

```java
public java.lang.Object getLargeFileShareEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localUserEnabled`<sup>Required</sup> <a name="localUserEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.localUserEnabled"></a>

```java
public java.lang.Object getLocalUserEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersion"></a>

```java
public java.lang.String getMinTlsVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nfsv3Enabled`<sup>Required</sup> <a name="nfsv3Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3Enabled"></a>

```java
public java.lang.Object getNfsv3Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queueEncryptionKeyType`<sup>Required</sup> <a name="queueEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyType"></a>

```java
public java.lang.String getQueueEncryptionKeyType();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sftpEnabled`<sup>Required</sup> <a name="sftpEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabled"></a>

```java
public java.lang.Object getSftpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sharedAccessKeyEnabled`<sup>Required</sup> <a name="sharedAccessKeyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabled"></a>

```java
public java.lang.Object getSharedAccessKeyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tableEncryptionKeyType`<sup>Required</sup> <a name="tableEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyType"></a>

```java
public java.lang.String getTableEncryptionKeyType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountAzureFilesAuthentication <a name="StorageAccountAzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountAzureFilesAuthentication;

StorageAccountAzureFilesAuthentication.builder()
    .directoryType(java.lang.String)
//  .activeDirectory(StorageAccountAzureFilesAuthenticationActiveDirectory)
//  .defaultShareLevelPermission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.directoryType">directoryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#directory_type StorageAccount#directory_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.defaultShareLevelPermission">defaultShareLevelPermission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#default_share_level_permission StorageAccount#default_share_level_permission}. |

---

##### `directoryType`<sup>Required</sup> <a name="directoryType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.directoryType"></a>

```java
public java.lang.String getDirectoryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#directory_type StorageAccount#directory_type}.

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.activeDirectory"></a>

```java
public StorageAccountAzureFilesAuthenticationActiveDirectory getActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#active_directory StorageAccount#active_directory}

---

##### `defaultShareLevelPermission`<sup>Optional</sup> <a name="defaultShareLevelPermission" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.defaultShareLevelPermission"></a>

```java
public java.lang.String getDefaultShareLevelPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#default_share_level_permission StorageAccount#default_share_level_permission}.

---

### StorageAccountAzureFilesAuthenticationActiveDirectory <a name="StorageAccountAzureFilesAuthenticationActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountAzureFilesAuthenticationActiveDirectory;

StorageAccountAzureFilesAuthenticationActiveDirectory.builder()
    .domainGuid(java.lang.String)
    .domainName(java.lang.String)
//  .domainSid(java.lang.String)
//  .forestName(java.lang.String)
//  .netbiosDomainName(java.lang.String)
//  .storageSid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainGuid">domainGuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#domain_guid StorageAccount#domain_guid}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#domain_name StorageAccount#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainSid">domainSid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#domain_sid StorageAccount#domain_sid}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.forestName">forestName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#forest_name StorageAccount#forest_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.netbiosDomainName">netbiosDomainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#netbios_domain_name StorageAccount#netbios_domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.storageSid">storageSid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#storage_sid StorageAccount#storage_sid}. |

---

##### `domainGuid`<sup>Required</sup> <a name="domainGuid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainGuid"></a>

```java
public java.lang.String getDomainGuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#domain_guid StorageAccount#domain_guid}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#domain_name StorageAccount#domain_name}.

---

##### `domainSid`<sup>Optional</sup> <a name="domainSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainSid"></a>

```java
public java.lang.String getDomainSid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#domain_sid StorageAccount#domain_sid}.

---

##### `forestName`<sup>Optional</sup> <a name="forestName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.forestName"></a>

```java
public java.lang.String getForestName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#forest_name StorageAccount#forest_name}.

---

##### `netbiosDomainName`<sup>Optional</sup> <a name="netbiosDomainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.netbiosDomainName"></a>

```java
public java.lang.String getNetbiosDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#netbios_domain_name StorageAccount#netbios_domain_name}.

---

##### `storageSid`<sup>Optional</sup> <a name="storageSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.storageSid"></a>

```java
public java.lang.String getStorageSid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#storage_sid StorageAccount#storage_sid}.

---

### StorageAccountBlobProperties <a name="StorageAccountBlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountBlobProperties;

StorageAccountBlobProperties.builder()
//  .changeFeedEnabled(java.lang.Boolean)
//  .changeFeedEnabled(IResolvable)
//  .changeFeedRetentionInDays(java.lang.Number)
//  .containerDeleteRetentionPolicy(StorageAccountBlobPropertiesContainerDeleteRetentionPolicy)
//  .corsRule(IResolvable)
//  .corsRule(java.util.List<StorageAccountBlobPropertiesCorsRule>)
//  .defaultServiceVersion(java.lang.String)
//  .deleteRetentionPolicy(StorageAccountBlobPropertiesDeleteRetentionPolicy)
//  .lastAccessTimeEnabled(java.lang.Boolean)
//  .lastAccessTimeEnabled(IResolvable)
//  .restorePolicy(StorageAccountBlobPropertiesRestorePolicy)
//  .versioningEnabled(java.lang.Boolean)
//  .versioningEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedEnabled">changeFeedEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#change_feed_enabled StorageAccount#change_feed_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedRetentionInDays">changeFeedRetentionInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#change_feed_retention_in_days StorageAccount#change_feed_retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.containerDeleteRetentionPolicy">containerDeleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a></code> | container_delete_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.corsRule">corsRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>></code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.defaultServiceVersion">defaultServiceVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#default_service_version StorageAccount#default_service_version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.deleteRetentionPolicy">deleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a></code> | delete_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.lastAccessTimeEnabled">lastAccessTimeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#last_access_time_enabled StorageAccount#last_access_time_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.versioningEnabled">versioningEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#versioning_enabled StorageAccount#versioning_enabled}. |

---

##### `changeFeedEnabled`<sup>Optional</sup> <a name="changeFeedEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedEnabled"></a>

```java
public java.lang.Object getChangeFeedEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#change_feed_enabled StorageAccount#change_feed_enabled}.

---

##### `changeFeedRetentionInDays`<sup>Optional</sup> <a name="changeFeedRetentionInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedRetentionInDays"></a>

```java
public java.lang.Number getChangeFeedRetentionInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#change_feed_retention_in_days StorageAccount#change_feed_retention_in_days}.

---

##### `containerDeleteRetentionPolicy`<sup>Optional</sup> <a name="containerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.containerDeleteRetentionPolicy"></a>

```java
public StorageAccountBlobPropertiesContainerDeleteRetentionPolicy getContainerDeleteRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

container_delete_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#container_delete_retention_policy StorageAccount#container_delete_retention_policy}

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.corsRule"></a>

```java
public java.lang.Object getCorsRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>>

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

##### `defaultServiceVersion`<sup>Optional</sup> <a name="defaultServiceVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.defaultServiceVersion"></a>

```java
public java.lang.String getDefaultServiceVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#default_service_version StorageAccount#default_service_version}.

---

##### `deleteRetentionPolicy`<sup>Optional</sup> <a name="deleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.deleteRetentionPolicy"></a>

```java
public StorageAccountBlobPropertiesDeleteRetentionPolicy getDeleteRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

delete_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#delete_retention_policy StorageAccount#delete_retention_policy}

---

##### `lastAccessTimeEnabled`<sup>Optional</sup> <a name="lastAccessTimeEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.lastAccessTimeEnabled"></a>

```java
public java.lang.Object getLastAccessTimeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#last_access_time_enabled StorageAccount#last_access_time_enabled}.

---

##### `restorePolicy`<sup>Optional</sup> <a name="restorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.restorePolicy"></a>

```java
public StorageAccountBlobPropertiesRestorePolicy getRestorePolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#restore_policy StorageAccount#restore_policy}

---

##### `versioningEnabled`<sup>Optional</sup> <a name="versioningEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.versioningEnabled"></a>

```java
public java.lang.Object getVersioningEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#versioning_enabled StorageAccount#versioning_enabled}.

---

### StorageAccountBlobPropertiesContainerDeleteRetentionPolicy <a name="StorageAccountBlobPropertiesContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy;

StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.builder()
//  .days(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.property.days">days</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountBlobPropertiesCorsRule <a name="StorageAccountBlobPropertiesCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountBlobPropertiesCorsRule;

StorageAccountBlobPropertiesCorsRule.builder()
    .allowedHeaders(java.util.List<java.lang.String>)
    .allowedMethods(java.util.List<java.lang.String>)
    .allowedOrigins(java.util.List<java.lang.String>)
    .exposedHeaders(java.util.List<java.lang.String>)
    .maxAgeInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.exposedHeaders">exposedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}. |

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}.

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}.

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.exposedHeaders"></a>

```java
public java.util.List<java.lang.String> getExposedHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}.

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.maxAgeInSeconds"></a>

```java
public java.lang.Number getMaxAgeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}.

---

### StorageAccountBlobPropertiesDeleteRetentionPolicy <a name="StorageAccountBlobPropertiesDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountBlobPropertiesDeleteRetentionPolicy;

StorageAccountBlobPropertiesDeleteRetentionPolicy.builder()
//  .days(java.lang.Number)
//  .permanentDeleteEnabled(java.lang.Boolean)
//  .permanentDeleteEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.property.days">days</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#days StorageAccount#days}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.property.permanentDeleteEnabled">permanentDeleteEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#permanent_delete_enabled StorageAccount#permanent_delete_enabled}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#days StorageAccount#days}.

---

##### `permanentDeleteEnabled`<sup>Optional</sup> <a name="permanentDeleteEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.property.permanentDeleteEnabled"></a>

```java
public java.lang.Object getPermanentDeleteEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#permanent_delete_enabled StorageAccount#permanent_delete_enabled}.

---

### StorageAccountBlobPropertiesRestorePolicy <a name="StorageAccountBlobPropertiesRestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountBlobPropertiesRestorePolicy;

StorageAccountBlobPropertiesRestorePolicy.builder()
    .days(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy.property.days">days</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountConfig <a name="StorageAccountConfig" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountConfig;

StorageAccountConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountReplicationType(java.lang.String)
    .accountTier(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .accessTier(java.lang.String)
//  .accountKind(java.lang.String)
//  .allowedCopyScope(java.lang.String)
//  .allowNestedItemsToBePublic(java.lang.Boolean)
//  .allowNestedItemsToBePublic(IResolvable)
//  .azureFilesAuthentication(StorageAccountAzureFilesAuthentication)
//  .blobProperties(StorageAccountBlobProperties)
//  .crossTenantReplicationEnabled(java.lang.Boolean)
//  .crossTenantReplicationEnabled(IResolvable)
//  .customDomain(StorageAccountCustomDomain)
//  .customerManagedKey(StorageAccountCustomerManagedKey)
//  .defaultToOauthAuthentication(java.lang.Boolean)
//  .defaultToOauthAuthentication(IResolvable)
//  .dnsEndpointType(java.lang.String)
//  .edgeZone(java.lang.String)
//  .enableHttpsTrafficOnly(java.lang.Boolean)
//  .enableHttpsTrafficOnly(IResolvable)
//  .httpsTrafficOnlyEnabled(java.lang.Boolean)
//  .httpsTrafficOnlyEnabled(IResolvable)
//  .id(java.lang.String)
//  .identity(StorageAccountIdentity)
//  .immutabilityPolicy(StorageAccountImmutabilityPolicy)
//  .infrastructureEncryptionEnabled(java.lang.Boolean)
//  .infrastructureEncryptionEnabled(IResolvable)
//  .isHnsEnabled(java.lang.Boolean)
//  .isHnsEnabled(IResolvable)
//  .largeFileShareEnabled(java.lang.Boolean)
//  .largeFileShareEnabled(IResolvable)
//  .localUserEnabled(java.lang.Boolean)
//  .localUserEnabled(IResolvable)
//  .minTlsVersion(java.lang.String)
//  .networkRules(StorageAccountNetworkRules)
//  .nfsv3Enabled(java.lang.Boolean)
//  .nfsv3Enabled(IResolvable)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .queueEncryptionKeyType(java.lang.String)
//  .queueProperties(StorageAccountQueueProperties)
//  .routing(StorageAccountRouting)
//  .sasPolicy(StorageAccountSasPolicy)
//  .sftpEnabled(java.lang.Boolean)
//  .sftpEnabled(IResolvable)
//  .sharedAccessKeyEnabled(java.lang.Boolean)
//  .sharedAccessKeyEnabled(IResolvable)
//  .shareProperties(StorageAccountShareProperties)
//  .staticWebsite(StorageAccountStaticWebsite)
//  .tableEncryptionKeyType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StorageAccountTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountReplicationType">accountReplicationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountTier">accountTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#location StorageAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#name StorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accessTier">accessTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#access_tier StorageAccount#access_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountKind">accountKind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowedCopyScope">allowedCopyScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_copy_scope StorageAccount#allowed_copy_scope}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowNestedItemsToBePublic">allowNestedItemsToBePublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allow_nested_items_to_be_public StorageAccount#allow_nested_items_to_be_public}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.azureFilesAuthentication">azureFilesAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | azure_files_authentication block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.blobProperties">blobProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | blob_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.crossTenantReplicationEnabled">crossTenantReplicationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#cross_tenant_replication_enabled StorageAccount#cross_tenant_replication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customDomain">customDomain</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.defaultToOauthAuthentication">defaultToOauthAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#default_to_oauth_authentication StorageAccount#default_to_oauth_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.dnsEndpointType">dnsEndpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#dns_endpoint_type StorageAccount#dns_endpoint_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.edgeZone">edgeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#edge_zone StorageAccount#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.enableHttpsTrafficOnly">enableHttpsTrafficOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.httpsTrafficOnlyEnabled">httpsTrafficOnlyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#https_traffic_only_enabled StorageAccount#https_traffic_only_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#id StorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.immutabilityPolicy">immutabilityPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | immutability_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.isHnsEnabled">isHnsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#is_hns_enabled StorageAccount#is_hns_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.largeFileShareEnabled">largeFileShareEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#large_file_share_enabled StorageAccount#large_file_share_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.localUserEnabled">localUserEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#local_user_enabled StorageAccount#local_user_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#min_tls_version StorageAccount#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.networkRules">networkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | network_rules block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.nfsv3Enabled">nfsv3Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#nfsv3_enabled StorageAccount#nfsv3_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#public_network_access_enabled StorageAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueEncryptionKeyType">queueEncryptionKeyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#queue_encryption_key_type StorageAccount#queue_encryption_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueProperties">queueProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | queue_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sasPolicy">sasPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | sas_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sftpEnabled">sftpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#sftp_enabled StorageAccount#sftp_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sharedAccessKeyEnabled">sharedAccessKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#shared_access_key_enabled StorageAccount#shared_access_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.shareProperties">shareProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | share_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.staticWebsite">staticWebsite</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | static_website block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tableEncryptionKeyType">tableEncryptionKeyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#table_encryption_key_type StorageAccount#table_encryption_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#tags StorageAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountReplicationType`<sup>Required</sup> <a name="accountReplicationType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountReplicationType"></a>

```java
public java.lang.String getAccountReplicationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}.

---

##### `accountTier`<sup>Required</sup> <a name="accountTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountTier"></a>

```java
public java.lang.String getAccountTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#location StorageAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#name StorageAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}.

---

##### `accessTier`<sup>Optional</sup> <a name="accessTier" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accessTier"></a>

```java
public java.lang.String getAccessTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#access_tier StorageAccount#access_tier}.

---

##### `accountKind`<sup>Optional</sup> <a name="accountKind" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountKind"></a>

```java
public java.lang.String getAccountKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}.

---

##### `allowedCopyScope`<sup>Optional</sup> <a name="allowedCopyScope" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowedCopyScope"></a>

```java
public java.lang.String getAllowedCopyScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_copy_scope StorageAccount#allowed_copy_scope}.

---

##### `allowNestedItemsToBePublic`<sup>Optional</sup> <a name="allowNestedItemsToBePublic" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowNestedItemsToBePublic"></a>

```java
public java.lang.Object getAllowNestedItemsToBePublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allow_nested_items_to_be_public StorageAccount#allow_nested_items_to_be_public}.

---

##### `azureFilesAuthentication`<sup>Optional</sup> <a name="azureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.azureFilesAuthentication"></a>

```java
public StorageAccountAzureFilesAuthentication getAzureFilesAuthentication();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

azure_files_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#azure_files_authentication StorageAccount#azure_files_authentication}

---

##### `blobProperties`<sup>Optional</sup> <a name="blobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.blobProperties"></a>

```java
public StorageAccountBlobProperties getBlobProperties();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

blob_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#blob_properties StorageAccount#blob_properties}

---

##### `crossTenantReplicationEnabled`<sup>Optional</sup> <a name="crossTenantReplicationEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.crossTenantReplicationEnabled"></a>

```java
public java.lang.Object getCrossTenantReplicationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#cross_tenant_replication_enabled StorageAccount#cross_tenant_replication_enabled}.

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customDomain"></a>

```java
public StorageAccountCustomDomain getCustomDomain();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#custom_domain StorageAccount#custom_domain}

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customerManagedKey"></a>

```java
public StorageAccountCustomerManagedKey getCustomerManagedKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#customer_managed_key StorageAccount#customer_managed_key}

---

##### `defaultToOauthAuthentication`<sup>Optional</sup> <a name="defaultToOauthAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.defaultToOauthAuthentication"></a>

```java
public java.lang.Object getDefaultToOauthAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#default_to_oauth_authentication StorageAccount#default_to_oauth_authentication}.

---

##### `dnsEndpointType`<sup>Optional</sup> <a name="dnsEndpointType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.dnsEndpointType"></a>

```java
public java.lang.String getDnsEndpointType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#dns_endpoint_type StorageAccount#dns_endpoint_type}.

---

##### `edgeZone`<sup>Optional</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.edgeZone"></a>

```java
public java.lang.String getEdgeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#edge_zone StorageAccount#edge_zone}.

---

##### `enableHttpsTrafficOnly`<sup>Optional</sup> <a name="enableHttpsTrafficOnly" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.enableHttpsTrafficOnly"></a>

```java
public java.lang.Object getEnableHttpsTrafficOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}.

---

##### `httpsTrafficOnlyEnabled`<sup>Optional</sup> <a name="httpsTrafficOnlyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.httpsTrafficOnlyEnabled"></a>

```java
public java.lang.Object getHttpsTrafficOnlyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#https_traffic_only_enabled StorageAccount#https_traffic_only_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#id StorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.identity"></a>

```java
public StorageAccountIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#identity StorageAccount#identity}

---

##### `immutabilityPolicy`<sup>Optional</sup> <a name="immutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.immutabilityPolicy"></a>

```java
public StorageAccountImmutabilityPolicy getImmutabilityPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

immutability_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#immutability_policy StorageAccount#immutability_policy}

---

##### `infrastructureEncryptionEnabled`<sup>Optional</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.infrastructureEncryptionEnabled"></a>

```java
public java.lang.Object getInfrastructureEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}.

---

##### `isHnsEnabled`<sup>Optional</sup> <a name="isHnsEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.isHnsEnabled"></a>

```java
public java.lang.Object getIsHnsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#is_hns_enabled StorageAccount#is_hns_enabled}.

---

##### `largeFileShareEnabled`<sup>Optional</sup> <a name="largeFileShareEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.largeFileShareEnabled"></a>

```java
public java.lang.Object getLargeFileShareEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#large_file_share_enabled StorageAccount#large_file_share_enabled}.

---

##### `localUserEnabled`<sup>Optional</sup> <a name="localUserEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.localUserEnabled"></a>

```java
public java.lang.Object getLocalUserEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#local_user_enabled StorageAccount#local_user_enabled}.

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.minTlsVersion"></a>

```java
public java.lang.String getMinTlsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#min_tls_version StorageAccount#min_tls_version}.

---

##### `networkRules`<sup>Optional</sup> <a name="networkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.networkRules"></a>

```java
public StorageAccountNetworkRules getNetworkRules();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

network_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#network_rules StorageAccount#network_rules}

---

##### `nfsv3Enabled`<sup>Optional</sup> <a name="nfsv3Enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.nfsv3Enabled"></a>

```java
public java.lang.Object getNfsv3Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#nfsv3_enabled StorageAccount#nfsv3_enabled}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#public_network_access_enabled StorageAccount#public_network_access_enabled}.

---

##### `queueEncryptionKeyType`<sup>Optional</sup> <a name="queueEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueEncryptionKeyType"></a>

```java
public java.lang.String getQueueEncryptionKeyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#queue_encryption_key_type StorageAccount#queue_encryption_key_type}.

---

##### `queueProperties`<sup>Optional</sup> <a name="queueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueProperties"></a>

```java
public StorageAccountQueueProperties getQueueProperties();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

queue_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#queue_properties StorageAccount#queue_properties}

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.routing"></a>

```java
public StorageAccountRouting getRouting();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#routing StorageAccount#routing}

---

##### `sasPolicy`<sup>Optional</sup> <a name="sasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sasPolicy"></a>

```java
public StorageAccountSasPolicy getSasPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

sas_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#sas_policy StorageAccount#sas_policy}

---

##### `sftpEnabled`<sup>Optional</sup> <a name="sftpEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sftpEnabled"></a>

```java
public java.lang.Object getSftpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#sftp_enabled StorageAccount#sftp_enabled}.

---

##### `sharedAccessKeyEnabled`<sup>Optional</sup> <a name="sharedAccessKeyEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sharedAccessKeyEnabled"></a>

```java
public java.lang.Object getSharedAccessKeyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#shared_access_key_enabled StorageAccount#shared_access_key_enabled}.

---

##### `shareProperties`<sup>Optional</sup> <a name="shareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.shareProperties"></a>

```java
public StorageAccountShareProperties getShareProperties();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

share_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#share_properties StorageAccount#share_properties}

---

##### `staticWebsite`<sup>Optional</sup> <a name="staticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.staticWebsite"></a>

```java
public StorageAccountStaticWebsite getStaticWebsite();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

static_website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#static_website StorageAccount#static_website}

---

##### `tableEncryptionKeyType`<sup>Optional</sup> <a name="tableEncryptionKeyType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tableEncryptionKeyType"></a>

```java
public java.lang.String getTableEncryptionKeyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#table_encryption_key_type StorageAccount#table_encryption_key_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#tags StorageAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.timeouts"></a>

```java
public StorageAccountTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#timeouts StorageAccount#timeouts}

---

### StorageAccountCustomDomain <a name="StorageAccountCustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountCustomDomain;

StorageAccountCustomDomain.builder()
    .name(java.lang.String)
//  .useSubdomain(java.lang.Boolean)
//  .useSubdomain(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#name StorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.useSubdomain">useSubdomain</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#use_subdomain StorageAccount#use_subdomain}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#name StorageAccount#name}.

---

##### `useSubdomain`<sup>Optional</sup> <a name="useSubdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.useSubdomain"></a>

```java
public java.lang.Object getUseSubdomain();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#use_subdomain StorageAccount#use_subdomain}.

---

### StorageAccountCustomerManagedKey <a name="StorageAccountCustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountCustomerManagedKey;

StorageAccountCustomerManagedKey.builder()
    .userAssignedIdentityId(java.lang.String)
//  .keyVaultKeyId(java.lang.String)
//  .managedHsmKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#user_assigned_identity_id StorageAccount#user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#key_vault_key_id StorageAccount#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.managedHsmKeyId">managedHsmKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#managed_hsm_key_id StorageAccount#managed_hsm_key_id}. |

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#user_assigned_identity_id StorageAccount#user_assigned_identity_id}.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#key_vault_key_id StorageAccount#key_vault_key_id}.

---

##### `managedHsmKeyId`<sup>Optional</sup> <a name="managedHsmKeyId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.managedHsmKeyId"></a>

```java
public java.lang.String getManagedHsmKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#managed_hsm_key_id StorageAccount#managed_hsm_key_id}.

---

### StorageAccountIdentity <a name="StorageAccountIdentity" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountIdentity;

StorageAccountIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#type StorageAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#identity_ids StorageAccount#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#type StorageAccount#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#identity_ids StorageAccount#identity_ids}.

---

### StorageAccountImmutabilityPolicy <a name="StorageAccountImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountImmutabilityPolicy;

StorageAccountImmutabilityPolicy.builder()
    .allowProtectedAppendWrites(java.lang.Boolean)
    .allowProtectedAppendWrites(IResolvable)
    .periodSinceCreationInDays(java.lang.Number)
    .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.allowProtectedAppendWrites">allowProtectedAppendWrites</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allow_protected_append_writes StorageAccount#allow_protected_append_writes}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.periodSinceCreationInDays">periodSinceCreationInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#period_since_creation_in_days StorageAccount#period_since_creation_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#state StorageAccount#state}. |

---

##### `allowProtectedAppendWrites`<sup>Required</sup> <a name="allowProtectedAppendWrites" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.allowProtectedAppendWrites"></a>

```java
public java.lang.Object getAllowProtectedAppendWrites();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allow_protected_append_writes StorageAccount#allow_protected_append_writes}.

---

##### `periodSinceCreationInDays`<sup>Required</sup> <a name="periodSinceCreationInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.periodSinceCreationInDays"></a>

```java
public java.lang.Number getPeriodSinceCreationInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#period_since_creation_in_days StorageAccount#period_since_creation_in_days}.

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#state StorageAccount#state}.

---

### StorageAccountNetworkRules <a name="StorageAccountNetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountNetworkRules;

StorageAccountNetworkRules.builder()
    .defaultAction(java.lang.String)
//  .bypass(java.util.List<java.lang.String>)
//  .ipRules(java.util.List<java.lang.String>)
//  .privateLinkAccess(IResolvable)
//  .privateLinkAccess(java.util.List<StorageAccountNetworkRulesPrivateLinkAccess>)
//  .virtualNetworkSubnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#default_action StorageAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.bypass">bypass</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#bypass StorageAccount#bypass}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.ipRules">ipRules</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#ip_rules StorageAccount#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.privateLinkAccess">privateLinkAccess</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>></code> | private_link_access block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.virtualNetworkSubnetIds">virtualNetworkSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#virtual_network_subnet_ids StorageAccount#virtual_network_subnet_ids}. |

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#default_action StorageAccount#default_action}.

---

##### `bypass`<sup>Optional</sup> <a name="bypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.bypass"></a>

```java
public java.util.List<java.lang.String> getBypass();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#bypass StorageAccount#bypass}.

---

##### `ipRules`<sup>Optional</sup> <a name="ipRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.ipRules"></a>

```java
public java.util.List<java.lang.String> getIpRules();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#ip_rules StorageAccount#ip_rules}.

---

##### `privateLinkAccess`<sup>Optional</sup> <a name="privateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.privateLinkAccess"></a>

```java
public java.lang.Object getPrivateLinkAccess();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>>

private_link_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#private_link_access StorageAccount#private_link_access}

---

##### `virtualNetworkSubnetIds`<sup>Optional</sup> <a name="virtualNetworkSubnetIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.virtualNetworkSubnetIds"></a>

```java
public java.util.List<java.lang.String> getVirtualNetworkSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#virtual_network_subnet_ids StorageAccount#virtual_network_subnet_ids}.

---

### StorageAccountNetworkRulesPrivateLinkAccess <a name="StorageAccountNetworkRulesPrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountNetworkRulesPrivateLinkAccess;

StorageAccountNetworkRulesPrivateLinkAccess.builder()
    .endpointResourceId(java.lang.String)
//  .endpointTenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointResourceId">endpointResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#endpoint_resource_id StorageAccount#endpoint_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointTenantId">endpointTenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#endpoint_tenant_id StorageAccount#endpoint_tenant_id}. |

---

##### `endpointResourceId`<sup>Required</sup> <a name="endpointResourceId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointResourceId"></a>

```java
public java.lang.String getEndpointResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#endpoint_resource_id StorageAccount#endpoint_resource_id}.

---

##### `endpointTenantId`<sup>Optional</sup> <a name="endpointTenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointTenantId"></a>

```java
public java.lang.String getEndpointTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#endpoint_tenant_id StorageAccount#endpoint_tenant_id}.

---

### StorageAccountQueueProperties <a name="StorageAccountQueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountQueueProperties;

StorageAccountQueueProperties.builder()
//  .corsRule(IResolvable)
//  .corsRule(java.util.List<StorageAccountQueuePropertiesCorsRule>)
//  .hourMetrics(StorageAccountQueuePropertiesHourMetrics)
//  .logging(StorageAccountQueuePropertiesLogging)
//  .minuteMetrics(StorageAccountQueuePropertiesMinuteMetrics)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.corsRule">corsRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>></code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.hourMetrics">hourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | hour_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.minuteMetrics">minuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | minute_metrics block. |

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.corsRule"></a>

```java
public java.lang.Object getCorsRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>>

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

##### `hourMetrics`<sup>Optional</sup> <a name="hourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.hourMetrics"></a>

```java
public StorageAccountQueuePropertiesHourMetrics getHourMetrics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#hour_metrics StorageAccount#hour_metrics}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.logging"></a>

```java
public StorageAccountQueuePropertiesLogging getLogging();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#logging StorageAccount#logging}

---

##### `minuteMetrics`<sup>Optional</sup> <a name="minuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.minuteMetrics"></a>

```java
public StorageAccountQueuePropertiesMinuteMetrics getMinuteMetrics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#minute_metrics StorageAccount#minute_metrics}

---

### StorageAccountQueuePropertiesCorsRule <a name="StorageAccountQueuePropertiesCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountQueuePropertiesCorsRule;

StorageAccountQueuePropertiesCorsRule.builder()
    .allowedHeaders(java.util.List<java.lang.String>)
    .allowedMethods(java.util.List<java.lang.String>)
    .allowedOrigins(java.util.List<java.lang.String>)
    .exposedHeaders(java.util.List<java.lang.String>)
    .maxAgeInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.exposedHeaders">exposedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}. |

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}.

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}.

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.exposedHeaders"></a>

```java
public java.util.List<java.lang.String> getExposedHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}.

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.maxAgeInSeconds"></a>

```java
public java.lang.Number getMaxAgeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}.

---

### StorageAccountQueuePropertiesHourMetrics <a name="StorageAccountQueuePropertiesHourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountQueuePropertiesHourMetrics;

StorageAccountQueuePropertiesHourMetrics.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .version(java.lang.String)
//  .includeApis(java.lang.Boolean)
//  .includeApis(IResolvable)
//  .retentionPolicyDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#enabled StorageAccount#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#version StorageAccount#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.includeApis">includeApis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#enabled StorageAccount#enabled}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#version StorageAccount#version}.

---

##### `includeApis`<sup>Optional</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.includeApis"></a>

```java
public java.lang.Object getIncludeApis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}.

---

##### `retentionPolicyDays`<sup>Optional</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.retentionPolicyDays"></a>

```java
public java.lang.Number getRetentionPolicyDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

### StorageAccountQueuePropertiesLogging <a name="StorageAccountQueuePropertiesLogging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountQueuePropertiesLogging;

StorageAccountQueuePropertiesLogging.builder()
    .delete(java.lang.Boolean)
    .delete(IResolvable)
    .read(java.lang.Boolean)
    .read(IResolvable)
    .version(java.lang.String)
    .write(java.lang.Boolean)
    .write(IResolvable)
//  .retentionPolicyDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.delete">delete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#delete StorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.read">read</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#read StorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#version StorageAccount#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.write">write</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#write StorageAccount#write}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}. |

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.delete"></a>

```java
public java.lang.Object getDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#delete StorageAccount#delete}.

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.read"></a>

```java
public java.lang.Object getRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#read StorageAccount#read}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#version StorageAccount#version}.

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.write"></a>

```java
public java.lang.Object getWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#write StorageAccount#write}.

---

##### `retentionPolicyDays`<sup>Optional</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.retentionPolicyDays"></a>

```java
public java.lang.Number getRetentionPolicyDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

### StorageAccountQueuePropertiesMinuteMetrics <a name="StorageAccountQueuePropertiesMinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountQueuePropertiesMinuteMetrics;

StorageAccountQueuePropertiesMinuteMetrics.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .version(java.lang.String)
//  .includeApis(java.lang.Boolean)
//  .includeApis(IResolvable)
//  .retentionPolicyDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#enabled StorageAccount#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#version StorageAccount#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.includeApis">includeApis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#enabled StorageAccount#enabled}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#version StorageAccount#version}.

---

##### `includeApis`<sup>Optional</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.includeApis"></a>

```java
public java.lang.Object getIncludeApis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}.

---

##### `retentionPolicyDays`<sup>Optional</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.retentionPolicyDays"></a>

```java
public java.lang.Number getRetentionPolicyDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

### StorageAccountRouting <a name="StorageAccountRouting" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountRouting;

StorageAccountRouting.builder()
//  .choice(java.lang.String)
//  .publishInternetEndpoints(java.lang.Boolean)
//  .publishInternetEndpoints(IResolvable)
//  .publishMicrosoftEndpoints(java.lang.Boolean)
//  .publishMicrosoftEndpoints(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.choice">choice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#choice StorageAccount#choice}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishInternetEndpoints">publishInternetEndpoints</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#publish_internet_endpoints StorageAccount#publish_internet_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishMicrosoftEndpoints">publishMicrosoftEndpoints</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#publish_microsoft_endpoints StorageAccount#publish_microsoft_endpoints}. |

---

##### `choice`<sup>Optional</sup> <a name="choice" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.choice"></a>

```java
public java.lang.String getChoice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#choice StorageAccount#choice}.

---

##### `publishInternetEndpoints`<sup>Optional</sup> <a name="publishInternetEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishInternetEndpoints"></a>

```java
public java.lang.Object getPublishInternetEndpoints();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#publish_internet_endpoints StorageAccount#publish_internet_endpoints}.

---

##### `publishMicrosoftEndpoints`<sup>Optional</sup> <a name="publishMicrosoftEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishMicrosoftEndpoints"></a>

```java
public java.lang.Object getPublishMicrosoftEndpoints();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#publish_microsoft_endpoints StorageAccount#publish_microsoft_endpoints}.

---

### StorageAccountSasPolicy <a name="StorageAccountSasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountSasPolicy;

StorageAccountSasPolicy.builder()
    .expirationPeriod(java.lang.String)
//  .expirationAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationPeriod">expirationPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#expiration_period StorageAccount#expiration_period}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationAction">expirationAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#expiration_action StorageAccount#expiration_action}. |

---

##### `expirationPeriod`<sup>Required</sup> <a name="expirationPeriod" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationPeriod"></a>

```java
public java.lang.String getExpirationPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#expiration_period StorageAccount#expiration_period}.

---

##### `expirationAction`<sup>Optional</sup> <a name="expirationAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationAction"></a>

```java
public java.lang.String getExpirationAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#expiration_action StorageAccount#expiration_action}.

---

### StorageAccountShareProperties <a name="StorageAccountShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountShareProperties;

StorageAccountShareProperties.builder()
//  .corsRule(IResolvable)
//  .corsRule(java.util.List<StorageAccountSharePropertiesCorsRule>)
//  .retentionPolicy(StorageAccountSharePropertiesRetentionPolicy)
//  .smb(StorageAccountSharePropertiesSmb)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.corsRule">corsRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>></code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.smb">smb</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a></code> | smb block. |

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.corsRule"></a>

```java
public java.lang.Object getCorsRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>>

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.retentionPolicy"></a>

```java
public StorageAccountSharePropertiesRetentionPolicy getRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#retention_policy StorageAccount#retention_policy}

---

##### `smb`<sup>Optional</sup> <a name="smb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.smb"></a>

```java
public StorageAccountSharePropertiesSmb getSmb();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

smb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#smb StorageAccount#smb}

---

### StorageAccountSharePropertiesCorsRule <a name="StorageAccountSharePropertiesCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountSharePropertiesCorsRule;

StorageAccountSharePropertiesCorsRule.builder()
    .allowedHeaders(java.util.List<java.lang.String>)
    .allowedMethods(java.util.List<java.lang.String>)
    .allowedOrigins(java.util.List<java.lang.String>)
    .exposedHeaders(java.util.List<java.lang.String>)
    .maxAgeInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.exposedHeaders">exposedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}. |

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}.

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}.

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.exposedHeaders"></a>

```java
public java.util.List<java.lang.String> getExposedHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}.

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.maxAgeInSeconds"></a>

```java
public java.lang.Number getMaxAgeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}.

---

### StorageAccountSharePropertiesRetentionPolicy <a name="StorageAccountSharePropertiesRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountSharePropertiesRetentionPolicy;

StorageAccountSharePropertiesRetentionPolicy.builder()
//  .days(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy.property.days">days</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountSharePropertiesSmb <a name="StorageAccountSharePropertiesSmb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountSharePropertiesSmb;

StorageAccountSharePropertiesSmb.builder()
//  .authenticationTypes(java.util.List<java.lang.String>)
//  .channelEncryptionType(java.util.List<java.lang.String>)
//  .kerberosTicketEncryptionType(java.util.List<java.lang.String>)
//  .multichannelEnabled(java.lang.Boolean)
//  .multichannelEnabled(IResolvable)
//  .versions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.authenticationTypes">authenticationTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#authentication_types StorageAccount#authentication_types}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.channelEncryptionType">channelEncryptionType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#channel_encryption_type StorageAccount#channel_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.kerberosTicketEncryptionType">kerberosTicketEncryptionType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#kerberos_ticket_encryption_type StorageAccount#kerberos_ticket_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.multichannelEnabled">multichannelEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#multichannel_enabled StorageAccount#multichannel_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.versions">versions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#versions StorageAccount#versions}. |

---

##### `authenticationTypes`<sup>Optional</sup> <a name="authenticationTypes" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.authenticationTypes"></a>

```java
public java.util.List<java.lang.String> getAuthenticationTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#authentication_types StorageAccount#authentication_types}.

---

##### `channelEncryptionType`<sup>Optional</sup> <a name="channelEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.channelEncryptionType"></a>

```java
public java.util.List<java.lang.String> getChannelEncryptionType();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#channel_encryption_type StorageAccount#channel_encryption_type}.

---

##### `kerberosTicketEncryptionType`<sup>Optional</sup> <a name="kerberosTicketEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.kerberosTicketEncryptionType"></a>

```java
public java.util.List<java.lang.String> getKerberosTicketEncryptionType();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#kerberos_ticket_encryption_type StorageAccount#kerberos_ticket_encryption_type}.

---

##### `multichannelEnabled`<sup>Optional</sup> <a name="multichannelEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.multichannelEnabled"></a>

```java
public java.lang.Object getMultichannelEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#multichannel_enabled StorageAccount#multichannel_enabled}.

---

##### `versions`<sup>Optional</sup> <a name="versions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.versions"></a>

```java
public java.util.List<java.lang.String> getVersions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#versions StorageAccount#versions}.

---

### StorageAccountStaticWebsite <a name="StorageAccountStaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountStaticWebsite;

StorageAccountStaticWebsite.builder()
//  .error404Document(java.lang.String)
//  .indexDocument(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.error404Document">error404Document</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#error_404_document StorageAccount#error_404_document}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.indexDocument">indexDocument</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#index_document StorageAccount#index_document}. |

---

##### `error404Document`<sup>Optional</sup> <a name="error404Document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.error404Document"></a>

```java
public java.lang.String getError404Document();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#error_404_document StorageAccount#error_404_document}.

---

##### `indexDocument`<sup>Optional</sup> <a name="indexDocument" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.indexDocument"></a>

```java
public java.lang.String getIndexDocument();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#index_document StorageAccount#index_document}.

---

### StorageAccountTimeouts <a name="StorageAccountTimeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountTimeouts;

StorageAccountTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#create StorageAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#delete StorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#read StorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#update StorageAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#create StorageAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#delete StorageAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#read StorageAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/storage_account#update StorageAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference <a name="StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference;

new StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetDomainSid">resetDomainSid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetForestName">resetForestName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetNetbiosDomainName">resetNetbiosDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetStorageSid">resetStorageSid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainSid` <a name="resetDomainSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetDomainSid"></a>

```java
public void resetDomainSid()
```

##### `resetForestName` <a name="resetForestName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetForestName"></a>

```java
public void resetForestName()
```

##### `resetNetbiosDomainName` <a name="resetNetbiosDomainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetNetbiosDomainName"></a>

```java
public void resetNetbiosDomainName()
```

##### `resetStorageSid` <a name="resetStorageSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetStorageSid"></a>

```java
public void resetStorageSid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuidInput">domainGuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSidInput">domainSidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestNameInput">forestNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainNameInput">netbiosDomainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSidInput">storageSidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuid">domainGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSid">domainSid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestName">forestName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainName">netbiosDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSid">storageSid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainGuidInput`<sup>Optional</sup> <a name="domainGuidInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuidInput"></a>

```java
public java.lang.String getDomainGuidInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `domainSidInput`<sup>Optional</sup> <a name="domainSidInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSidInput"></a>

```java
public java.lang.String getDomainSidInput();
```

- *Type:* java.lang.String

---

##### `forestNameInput`<sup>Optional</sup> <a name="forestNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestNameInput"></a>

```java
public java.lang.String getForestNameInput();
```

- *Type:* java.lang.String

---

##### `netbiosDomainNameInput`<sup>Optional</sup> <a name="netbiosDomainNameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainNameInput"></a>

```java
public java.lang.String getNetbiosDomainNameInput();
```

- *Type:* java.lang.String

---

##### `storageSidInput`<sup>Optional</sup> <a name="storageSidInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSidInput"></a>

```java
public java.lang.String getStorageSidInput();
```

- *Type:* java.lang.String

---

##### `domainGuid`<sup>Required</sup> <a name="domainGuid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuid"></a>

```java
public java.lang.String getDomainGuid();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `domainSid`<sup>Required</sup> <a name="domainSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSid"></a>

```java
public java.lang.String getDomainSid();
```

- *Type:* java.lang.String

---

##### `forestName`<sup>Required</sup> <a name="forestName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestName"></a>

```java
public java.lang.String getForestName();
```

- *Type:* java.lang.String

---

##### `netbiosDomainName`<sup>Required</sup> <a name="netbiosDomainName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainName"></a>

```java
public java.lang.String getNetbiosDomainName();
```

- *Type:* java.lang.String

---

##### `storageSid`<sup>Required</sup> <a name="storageSid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSid"></a>

```java
public java.lang.String getStorageSid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.internalValue"></a>

```java
public StorageAccountAzureFilesAuthenticationActiveDirectory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

---


### StorageAccountAzureFilesAuthenticationOutputReference <a name="StorageAccountAzureFilesAuthenticationOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountAzureFilesAuthenticationOutputReference;

new StorageAccountAzureFilesAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory">putActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resetDefaultShareLevelPermission">resetDefaultShareLevelPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectory` <a name="putActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory"></a>

```java
public void putActiveDirectory(StorageAccountAzureFilesAuthenticationActiveDirectory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resetActiveDirectory"></a>

```java
public void resetActiveDirectory()
```

##### `resetDefaultShareLevelPermission` <a name="resetDefaultShareLevelPermission" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resetDefaultShareLevelPermission"></a>

```java
public void resetDefaultShareLevelPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference">StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.defaultShareLevelPermissionInput">defaultShareLevelPermissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryTypeInput">directoryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.defaultShareLevelPermission">defaultShareLevelPermission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryType">directoryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectory"></a>

```java
public StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference getActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference">StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference</a>

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectoryInput"></a>

```java
public StorageAccountAzureFilesAuthenticationActiveDirectory getActiveDirectoryInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

---

##### `defaultShareLevelPermissionInput`<sup>Optional</sup> <a name="defaultShareLevelPermissionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.defaultShareLevelPermissionInput"></a>

```java
public java.lang.String getDefaultShareLevelPermissionInput();
```

- *Type:* java.lang.String

---

##### `directoryTypeInput`<sup>Optional</sup> <a name="directoryTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryTypeInput"></a>

```java
public java.lang.String getDirectoryTypeInput();
```

- *Type:* java.lang.String

---

##### `defaultShareLevelPermission`<sup>Required</sup> <a name="defaultShareLevelPermission" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.defaultShareLevelPermission"></a>

```java
public java.lang.String getDefaultShareLevelPermission();
```

- *Type:* java.lang.String

---

##### `directoryType`<sup>Required</sup> <a name="directoryType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryType"></a>

```java
public java.lang.String getDirectoryType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.internalValue"></a>

```java
public StorageAccountAzureFilesAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

---


### StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference <a name="StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference;

new StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resetDays">resetDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resetDays"></a>

```java
public void resetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.daysInput">daysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.days">days</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.daysInput"></a>

```java
public java.lang.Number getDaysInput();
```

- *Type:* java.lang.Number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.internalValue"></a>

```java
public StorageAccountBlobPropertiesContainerDeleteRetentionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

---


### StorageAccountBlobPropertiesCorsRuleList <a name="StorageAccountBlobPropertiesCorsRuleList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountBlobPropertiesCorsRuleList;

new StorageAccountBlobPropertiesCorsRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.get"></a>

```java
public StorageAccountBlobPropertiesCorsRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>>

---


### StorageAccountBlobPropertiesCorsRuleOutputReference <a name="StorageAccountBlobPropertiesCorsRuleOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountBlobPropertiesCorsRuleOutputReference;

new StorageAccountBlobPropertiesCorsRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeadersInput">exposedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeaders">exposedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposedHeadersInput`<sup>Optional</sup> <a name="exposedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getExposedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```java
public java.lang.Number getMaxAgeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```java
public java.util.List<java.lang.String> getExposedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```java
public java.lang.Number getMaxAgeInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>

---


### StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference <a name="StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference;

new StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resetPermanentDeleteEnabled">resetPermanentDeleteEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resetDays"></a>

```java
public void resetDays()
```

##### `resetPermanentDeleteEnabled` <a name="resetPermanentDeleteEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resetPermanentDeleteEnabled"></a>

```java
public void resetPermanentDeleteEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.daysInput">daysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.permanentDeleteEnabledInput">permanentDeleteEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.days">days</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.permanentDeleteEnabled">permanentDeleteEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.daysInput"></a>

```java
public java.lang.Number getDaysInput();
```

- *Type:* java.lang.Number

---

##### `permanentDeleteEnabledInput`<sup>Optional</sup> <a name="permanentDeleteEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.permanentDeleteEnabledInput"></a>

```java
public java.lang.Object getPermanentDeleteEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

---

##### `permanentDeleteEnabled`<sup>Required</sup> <a name="permanentDeleteEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.permanentDeleteEnabled"></a>

```java
public java.lang.Object getPermanentDeleteEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.internalValue"></a>

```java
public StorageAccountBlobPropertiesDeleteRetentionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

---


### StorageAccountBlobPropertiesOutputReference <a name="StorageAccountBlobPropertiesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountBlobPropertiesOutputReference;

new StorageAccountBlobPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putContainerDeleteRetentionPolicy">putContainerDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putDeleteRetentionPolicy">putDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putRestorePolicy">putRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedEnabled">resetChangeFeedEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedRetentionInDays">resetChangeFeedRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetContainerDeleteRetentionPolicy">resetContainerDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDefaultServiceVersion">resetDefaultServiceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDeleteRetentionPolicy">resetDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetLastAccessTimeEnabled">resetLastAccessTimeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetRestorePolicy">resetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetVersioningEnabled">resetVersioningEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerDeleteRetentionPolicy` <a name="putContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putContainerDeleteRetentionPolicy"></a>

```java
public void putContainerDeleteRetentionPolicy(StorageAccountBlobPropertiesContainerDeleteRetentionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putContainerDeleteRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

---

##### `putCorsRule` <a name="putCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putCorsRule"></a>

```java
public void putCorsRule(IResolvable OR java.util.List<StorageAccountBlobPropertiesCorsRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putCorsRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>>

---

##### `putDeleteRetentionPolicy` <a name="putDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putDeleteRetentionPolicy"></a>

```java
public void putDeleteRetentionPolicy(StorageAccountBlobPropertiesDeleteRetentionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putDeleteRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

---

##### `putRestorePolicy` <a name="putRestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putRestorePolicy"></a>

```java
public void putRestorePolicy(StorageAccountBlobPropertiesRestorePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

---

##### `resetChangeFeedEnabled` <a name="resetChangeFeedEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedEnabled"></a>

```java
public void resetChangeFeedEnabled()
```

##### `resetChangeFeedRetentionInDays` <a name="resetChangeFeedRetentionInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedRetentionInDays"></a>

```java
public void resetChangeFeedRetentionInDays()
```

##### `resetContainerDeleteRetentionPolicy` <a name="resetContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetContainerDeleteRetentionPolicy"></a>

```java
public void resetContainerDeleteRetentionPolicy()
```

##### `resetCorsRule` <a name="resetCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetCorsRule"></a>

```java
public void resetCorsRule()
```

##### `resetDefaultServiceVersion` <a name="resetDefaultServiceVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDefaultServiceVersion"></a>

```java
public void resetDefaultServiceVersion()
```

##### `resetDeleteRetentionPolicy` <a name="resetDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDeleteRetentionPolicy"></a>

```java
public void resetDeleteRetentionPolicy()
```

##### `resetLastAccessTimeEnabled` <a name="resetLastAccessTimeEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetLastAccessTimeEnabled"></a>

```java
public void resetLastAccessTimeEnabled()
```

##### `resetRestorePolicy` <a name="resetRestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetRestorePolicy"></a>

```java
public void resetRestorePolicy()
```

##### `resetVersioningEnabled` <a name="resetVersioningEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetVersioningEnabled"></a>

```java
public void resetVersioningEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicy">containerDeleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRule">corsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList">StorageAccountBlobPropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicy">deleteRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference">StorageAccountBlobPropertiesRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabledInput">changeFeedEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDaysInput">changeFeedRetentionInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicyInput">containerDeleteRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRuleInput">corsRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersionInput">defaultServiceVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicyInput">deleteRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabledInput">lastAccessTimeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicyInput">restorePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabledInput">versioningEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabled">changeFeedEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDays">changeFeedRetentionInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersion">defaultServiceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabled">lastAccessTimeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabled">versioningEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerDeleteRetentionPolicy`<sup>Required</sup> <a name="containerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicy"></a>

```java
public StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference getContainerDeleteRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference</a>

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRule"></a>

```java
public StorageAccountBlobPropertiesCorsRuleList getCorsRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList">StorageAccountBlobPropertiesCorsRuleList</a>

---

##### `deleteRetentionPolicy`<sup>Required</sup> <a name="deleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicy"></a>

```java
public StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference getDeleteRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference</a>

---

##### `restorePolicy`<sup>Required</sup> <a name="restorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicy"></a>

```java
public StorageAccountBlobPropertiesRestorePolicyOutputReference getRestorePolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference">StorageAccountBlobPropertiesRestorePolicyOutputReference</a>

---

##### `changeFeedEnabledInput`<sup>Optional</sup> <a name="changeFeedEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabledInput"></a>

```java
public java.lang.Object getChangeFeedEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `changeFeedRetentionInDaysInput`<sup>Optional</sup> <a name="changeFeedRetentionInDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDaysInput"></a>

```java
public java.lang.Number getChangeFeedRetentionInDaysInput();
```

- *Type:* java.lang.Number

---

##### `containerDeleteRetentionPolicyInput`<sup>Optional</sup> <a name="containerDeleteRetentionPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicyInput"></a>

```java
public StorageAccountBlobPropertiesContainerDeleteRetentionPolicy getContainerDeleteRetentionPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRuleInput"></a>

```java
public java.lang.Object getCorsRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>>

---

##### `defaultServiceVersionInput`<sup>Optional</sup> <a name="defaultServiceVersionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersionInput"></a>

```java
public java.lang.String getDefaultServiceVersionInput();
```

- *Type:* java.lang.String

---

##### `deleteRetentionPolicyInput`<sup>Optional</sup> <a name="deleteRetentionPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicyInput"></a>

```java
public StorageAccountBlobPropertiesDeleteRetentionPolicy getDeleteRetentionPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

---

##### `lastAccessTimeEnabledInput`<sup>Optional</sup> <a name="lastAccessTimeEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabledInput"></a>

```java
public java.lang.Object getLastAccessTimeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restorePolicyInput`<sup>Optional</sup> <a name="restorePolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicyInput"></a>

```java
public StorageAccountBlobPropertiesRestorePolicy getRestorePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

---

##### `versioningEnabledInput`<sup>Optional</sup> <a name="versioningEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabledInput"></a>

```java
public java.lang.Object getVersioningEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `changeFeedEnabled`<sup>Required</sup> <a name="changeFeedEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabled"></a>

```java
public java.lang.Object getChangeFeedEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `changeFeedRetentionInDays`<sup>Required</sup> <a name="changeFeedRetentionInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDays"></a>

```java
public java.lang.Number getChangeFeedRetentionInDays();
```

- *Type:* java.lang.Number

---

##### `defaultServiceVersion`<sup>Required</sup> <a name="defaultServiceVersion" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersion"></a>

```java
public java.lang.String getDefaultServiceVersion();
```

- *Type:* java.lang.String

---

##### `lastAccessTimeEnabled`<sup>Required</sup> <a name="lastAccessTimeEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabled"></a>

```java
public java.lang.Object getLastAccessTimeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `versioningEnabled`<sup>Required</sup> <a name="versioningEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabled"></a>

```java
public java.lang.Object getVersioningEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.internalValue"></a>

```java
public StorageAccountBlobProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

---


### StorageAccountBlobPropertiesRestorePolicyOutputReference <a name="StorageAccountBlobPropertiesRestorePolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountBlobPropertiesRestorePolicyOutputReference;

new StorageAccountBlobPropertiesRestorePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.daysInput">daysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.days">days</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.daysInput"></a>

```java
public java.lang.Number getDaysInput();
```

- *Type:* java.lang.Number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.internalValue"></a>

```java
public StorageAccountBlobPropertiesRestorePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

---


### StorageAccountCustomDomainOutputReference <a name="StorageAccountCustomDomainOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountCustomDomainOutputReference;

new StorageAccountCustomDomainOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resetUseSubdomain">resetUseSubdomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseSubdomain` <a name="resetUseSubdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resetUseSubdomain"></a>

```java
public void resetUseSubdomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomainInput">useSubdomainInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomain">useSubdomain</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `useSubdomainInput`<sup>Optional</sup> <a name="useSubdomainInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomainInput"></a>

```java
public java.lang.Object getUseSubdomainInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `useSubdomain`<sup>Required</sup> <a name="useSubdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomain"></a>

```java
public java.lang.Object getUseSubdomain();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.internalValue"></a>

```java
public StorageAccountCustomDomain getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---


### StorageAccountCustomerManagedKeyOutputReference <a name="StorageAccountCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountCustomerManagedKeyOutputReference;

new StorageAccountCustomerManagedKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resetManagedHsmKeyId">resetManagedHsmKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resetKeyVaultKeyId"></a>

```java
public void resetKeyVaultKeyId()
```

##### `resetManagedHsmKeyId` <a name="resetManagedHsmKeyId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resetManagedHsmKeyId"></a>

```java
public void resetManagedHsmKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.managedHsmKeyIdInput">managedHsmKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.managedHsmKeyId">managedHsmKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```java
public java.lang.String getKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `managedHsmKeyIdInput`<sup>Optional</sup> <a name="managedHsmKeyIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.managedHsmKeyIdInput"></a>

```java
public java.lang.String getManagedHsmKeyIdInput();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput"></a>

```java
public java.lang.String getUserAssignedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `managedHsmKeyId`<sup>Required</sup> <a name="managedHsmKeyId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.managedHsmKeyId"></a>

```java
public java.lang.String getManagedHsmKeyId();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.internalValue"></a>

```java
public StorageAccountCustomerManagedKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

---


### StorageAccountIdentityOutputReference <a name="StorageAccountIdentityOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountIdentityOutputReference;

new StorageAccountIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.internalValue"></a>

```java
public StorageAccountIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

---


### StorageAccountImmutabilityPolicyOutputReference <a name="StorageAccountImmutabilityPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountImmutabilityPolicyOutputReference;

new StorageAccountImmutabilityPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWritesInput">allowProtectedAppendWritesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDaysInput">periodSinceCreationInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWrites">allowProtectedAppendWrites</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDays">periodSinceCreationInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowProtectedAppendWritesInput`<sup>Optional</sup> <a name="allowProtectedAppendWritesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWritesInput"></a>

```java
public java.lang.Object getAllowProtectedAppendWritesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `periodSinceCreationInDaysInput`<sup>Optional</sup> <a name="periodSinceCreationInDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDaysInput"></a>

```java
public java.lang.Number getPeriodSinceCreationInDaysInput();
```

- *Type:* java.lang.Number

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `allowProtectedAppendWrites`<sup>Required</sup> <a name="allowProtectedAppendWrites" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWrites"></a>

```java
public java.lang.Object getAllowProtectedAppendWrites();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `periodSinceCreationInDays`<sup>Required</sup> <a name="periodSinceCreationInDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDays"></a>

```java
public java.lang.Number getPeriodSinceCreationInDays();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.internalValue"></a>

```java
public StorageAccountImmutabilityPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

---


### StorageAccountNetworkRulesOutputReference <a name="StorageAccountNetworkRulesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountNetworkRulesOutputReference;

new StorageAccountNetworkRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.putPrivateLinkAccess">putPrivateLinkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetBypass">resetBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetIpRules">resetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetPrivateLinkAccess">resetPrivateLinkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetVirtualNetworkSubnetIds">resetVirtualNetworkSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrivateLinkAccess` <a name="putPrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.putPrivateLinkAccess"></a>

```java
public void putPrivateLinkAccess(IResolvable OR java.util.List<StorageAccountNetworkRulesPrivateLinkAccess> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.putPrivateLinkAccess.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>>

---

##### `resetBypass` <a name="resetBypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetBypass"></a>

```java
public void resetBypass()
```

##### `resetIpRules` <a name="resetIpRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetIpRules"></a>

```java
public void resetIpRules()
```

##### `resetPrivateLinkAccess` <a name="resetPrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetPrivateLinkAccess"></a>

```java
public void resetPrivateLinkAccess()
```

##### `resetVirtualNetworkSubnetIds` <a name="resetVirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetVirtualNetworkSubnetIds"></a>

```java
public void resetVirtualNetworkSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccess">privateLinkAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList">StorageAccountNetworkRulesPrivateLinkAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypassInput">bypassInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRulesInput">ipRulesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccessInput">privateLinkAccessInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIdsInput">virtualNetworkSubnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypass">bypass</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRules">ipRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIds">virtualNetworkSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateLinkAccess`<sup>Required</sup> <a name="privateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccess"></a>

```java
public StorageAccountNetworkRulesPrivateLinkAccessList getPrivateLinkAccess();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList">StorageAccountNetworkRulesPrivateLinkAccessList</a>

---

##### `bypassInput`<sup>Optional</sup> <a name="bypassInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypassInput"></a>

```java
public java.util.List<java.lang.String> getBypassInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultActionInput"></a>

```java
public java.lang.String getDefaultActionInput();
```

- *Type:* java.lang.String

---

##### `ipRulesInput`<sup>Optional</sup> <a name="ipRulesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRulesInput"></a>

```java
public java.util.List<java.lang.String> getIpRulesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateLinkAccessInput`<sup>Optional</sup> <a name="privateLinkAccessInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccessInput"></a>

```java
public java.lang.Object getPrivateLinkAccessInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>>

---

##### `virtualNetworkSubnetIdsInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getVirtualNetworkSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypass"></a>

```java
public java.util.List<java.lang.String> getBypass();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

---

##### `ipRules`<sup>Required</sup> <a name="ipRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRules"></a>

```java
public java.util.List<java.lang.String> getIpRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `virtualNetworkSubnetIds`<sup>Required</sup> <a name="virtualNetworkSubnetIds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIds"></a>

```java
public java.util.List<java.lang.String> getVirtualNetworkSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.internalValue"></a>

```java
public StorageAccountNetworkRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

---


### StorageAccountNetworkRulesPrivateLinkAccessList <a name="StorageAccountNetworkRulesPrivateLinkAccessList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountNetworkRulesPrivateLinkAccessList;

new StorageAccountNetworkRulesPrivateLinkAccessList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.get"></a>

```java
public StorageAccountNetworkRulesPrivateLinkAccessOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>>

---


### StorageAccountNetworkRulesPrivateLinkAccessOutputReference <a name="StorageAccountNetworkRulesPrivateLinkAccessOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountNetworkRulesPrivateLinkAccessOutputReference;

new StorageAccountNetworkRulesPrivateLinkAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resetEndpointTenantId">resetEndpointTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointTenantId` <a name="resetEndpointTenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resetEndpointTenantId"></a>

```java
public void resetEndpointTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceIdInput">endpointResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantIdInput">endpointTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceId">endpointResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantId">endpointTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointResourceIdInput`<sup>Optional</sup> <a name="endpointResourceIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceIdInput"></a>

```java
public java.lang.String getEndpointResourceIdInput();
```

- *Type:* java.lang.String

---

##### `endpointTenantIdInput`<sup>Optional</sup> <a name="endpointTenantIdInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantIdInput"></a>

```java
public java.lang.String getEndpointTenantIdInput();
```

- *Type:* java.lang.String

---

##### `endpointResourceId`<sup>Required</sup> <a name="endpointResourceId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceId"></a>

```java
public java.lang.String getEndpointResourceId();
```

- *Type:* java.lang.String

---

##### `endpointTenantId`<sup>Required</sup> <a name="endpointTenantId" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantId"></a>

```java
public java.lang.String getEndpointTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>

---


### StorageAccountQueuePropertiesCorsRuleList <a name="StorageAccountQueuePropertiesCorsRuleList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountQueuePropertiesCorsRuleList;

new StorageAccountQueuePropertiesCorsRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.get"></a>

```java
public StorageAccountQueuePropertiesCorsRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>>

---


### StorageAccountQueuePropertiesCorsRuleOutputReference <a name="StorageAccountQueuePropertiesCorsRuleOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountQueuePropertiesCorsRuleOutputReference;

new StorageAccountQueuePropertiesCorsRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeadersInput">exposedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeaders">exposedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposedHeadersInput`<sup>Optional</sup> <a name="exposedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getExposedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```java
public java.lang.Number getMaxAgeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```java
public java.util.List<java.lang.String> getExposedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```java
public java.lang.Number getMaxAgeInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>

---


### StorageAccountQueuePropertiesHourMetricsOutputReference <a name="StorageAccountQueuePropertiesHourMetricsOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountQueuePropertiesHourMetricsOutputReference;

new StorageAccountQueuePropertiesHourMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetIncludeApis">resetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetRetentionPolicyDays">resetRetentionPolicyDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeApis` <a name="resetIncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetIncludeApis"></a>

```java
public void resetIncludeApis()
```

##### `resetRetentionPolicyDays` <a name="resetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetRetentionPolicyDays"></a>

```java
public void resetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApisInput">includeApisInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput">retentionPolicyDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApis">includeApis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeApisInput`<sup>Optional</sup> <a name="includeApisInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApisInput"></a>

```java
public java.lang.Object getIncludeApisInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPolicyDaysInput`<sup>Optional</sup> <a name="retentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```java
public java.lang.Number getRetentionPolicyDaysInput();
```

- *Type:* java.lang.Number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeApis`<sup>Required</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApis"></a>

```java
public java.lang.Object getIncludeApis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPolicyDays`<sup>Required</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDays"></a>

```java
public java.lang.Number getRetentionPolicyDays();
```

- *Type:* java.lang.Number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.internalValue"></a>

```java
public StorageAccountQueuePropertiesHourMetrics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---


### StorageAccountQueuePropertiesLoggingOutputReference <a name="StorageAccountQueuePropertiesLoggingOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountQueuePropertiesLoggingOutputReference;

new StorageAccountQueuePropertiesLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resetRetentionPolicyDays">resetRetentionPolicyDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionPolicyDays` <a name="resetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resetRetentionPolicyDays"></a>

```java
public void resetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.readInput">readInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDaysInput">retentionPolicyDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.writeInput">writeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.delete">delete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.read">read</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.write">write</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.deleteInput"></a>

```java
public java.lang.Object getDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.readInput"></a>

```java
public java.lang.Object getReadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPolicyDaysInput`<sup>Optional</sup> <a name="retentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDaysInput"></a>

```java
public java.lang.Number getRetentionPolicyDaysInput();
```

- *Type:* java.lang.Number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `writeInput`<sup>Optional</sup> <a name="writeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.writeInput"></a>

```java
public java.lang.Object getWriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.delete"></a>

```java
public java.lang.Object getDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.read"></a>

```java
public java.lang.Object getRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPolicyDays`<sup>Required</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDays"></a>

```java
public java.lang.Number getRetentionPolicyDays();
```

- *Type:* java.lang.Number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.write"></a>

```java
public java.lang.Object getWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.internalValue"></a>

```java
public StorageAccountQueuePropertiesLogging getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---


### StorageAccountQueuePropertiesMinuteMetricsOutputReference <a name="StorageAccountQueuePropertiesMinuteMetricsOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountQueuePropertiesMinuteMetricsOutputReference;

new StorageAccountQueuePropertiesMinuteMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetIncludeApis">resetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays">resetRetentionPolicyDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeApis` <a name="resetIncludeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetIncludeApis"></a>

```java
public void resetIncludeApis()
```

##### `resetRetentionPolicyDays` <a name="resetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays"></a>

```java
public void resetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApisInput">includeApisInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput">retentionPolicyDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApis">includeApis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeApisInput`<sup>Optional</sup> <a name="includeApisInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApisInput"></a>

```java
public java.lang.Object getIncludeApisInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPolicyDaysInput`<sup>Optional</sup> <a name="retentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```java
public java.lang.Number getRetentionPolicyDaysInput();
```

- *Type:* java.lang.Number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeApis`<sup>Required</sup> <a name="includeApis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApis"></a>

```java
public java.lang.Object getIncludeApis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionPolicyDays`<sup>Required</sup> <a name="retentionPolicyDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays"></a>

```java
public java.lang.Number getRetentionPolicyDays();
```

- *Type:* java.lang.Number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.internalValue"></a>

```java
public StorageAccountQueuePropertiesMinuteMetrics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---


### StorageAccountQueuePropertiesOutputReference <a name="StorageAccountQueuePropertiesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountQueuePropertiesOutputReference;

new StorageAccountQueuePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics">putHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics">putMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetHourMetrics">resetHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetMinuteMetrics">resetMinuteMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCorsRule` <a name="putCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putCorsRule"></a>

```java
public void putCorsRule(IResolvable OR java.util.List<StorageAccountQueuePropertiesCorsRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putCorsRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>>

---

##### `putHourMetrics` <a name="putHourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics"></a>

```java
public void putHourMetrics(StorageAccountQueuePropertiesHourMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging"></a>

```java
public void putLogging(StorageAccountQueuePropertiesLogging value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---

##### `putMinuteMetrics` <a name="putMinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics"></a>

```java
public void putMinuteMetrics(StorageAccountQueuePropertiesMinuteMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---

##### `resetCorsRule` <a name="resetCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetCorsRule"></a>

```java
public void resetCorsRule()
```

##### `resetHourMetrics` <a name="resetHourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetHourMetrics"></a>

```java
public void resetHourMetrics()
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetLogging"></a>

```java
public void resetLogging()
```

##### `resetMinuteMetrics` <a name="resetMinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetMinuteMetrics"></a>

```java
public void resetMinuteMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRule">corsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList">StorageAccountQueuePropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetrics">hourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference">StorageAccountQueuePropertiesHourMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference">StorageAccountQueuePropertiesLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetrics">minuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference">StorageAccountQueuePropertiesMinuteMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRuleInput">corsRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetricsInput">hourMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetricsInput">minuteMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRule"></a>

```java
public StorageAccountQueuePropertiesCorsRuleList getCorsRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList">StorageAccountQueuePropertiesCorsRuleList</a>

---

##### `hourMetrics`<sup>Required</sup> <a name="hourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetrics"></a>

```java
public StorageAccountQueuePropertiesHourMetricsOutputReference getHourMetrics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference">StorageAccountQueuePropertiesHourMetricsOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.logging"></a>

```java
public StorageAccountQueuePropertiesLoggingOutputReference getLogging();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference">StorageAccountQueuePropertiesLoggingOutputReference</a>

---

##### `minuteMetrics`<sup>Required</sup> <a name="minuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetrics"></a>

```java
public StorageAccountQueuePropertiesMinuteMetricsOutputReference getMinuteMetrics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference">StorageAccountQueuePropertiesMinuteMetricsOutputReference</a>

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRuleInput"></a>

```java
public java.lang.Object getCorsRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>>

---

##### `hourMetricsInput`<sup>Optional</sup> <a name="hourMetricsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetricsInput"></a>

```java
public StorageAccountQueuePropertiesHourMetrics getHourMetricsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.loggingInput"></a>

```java
public StorageAccountQueuePropertiesLogging getLoggingInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---

##### `minuteMetricsInput`<sup>Optional</sup> <a name="minuteMetricsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetricsInput"></a>

```java
public StorageAccountQueuePropertiesMinuteMetrics getMinuteMetricsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.internalValue"></a>

```java
public StorageAccountQueueProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

---


### StorageAccountRoutingOutputReference <a name="StorageAccountRoutingOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountRoutingOutputReference;

new StorageAccountRoutingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetChoice">resetChoice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishInternetEndpoints">resetPublishInternetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishMicrosoftEndpoints">resetPublishMicrosoftEndpoints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChoice` <a name="resetChoice" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetChoice"></a>

```java
public void resetChoice()
```

##### `resetPublishInternetEndpoints` <a name="resetPublishInternetEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishInternetEndpoints"></a>

```java
public void resetPublishInternetEndpoints()
```

##### `resetPublishMicrosoftEndpoints` <a name="resetPublishMicrosoftEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishMicrosoftEndpoints"></a>

```java
public void resetPublishMicrosoftEndpoints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choiceInput">choiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpointsInput">publishInternetEndpointsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpointsInput">publishMicrosoftEndpointsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choice">choice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpoints">publishInternetEndpoints</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpoints">publishMicrosoftEndpoints</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `choiceInput`<sup>Optional</sup> <a name="choiceInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choiceInput"></a>

```java
public java.lang.String getChoiceInput();
```

- *Type:* java.lang.String

---

##### `publishInternetEndpointsInput`<sup>Optional</sup> <a name="publishInternetEndpointsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpointsInput"></a>

```java
public java.lang.Object getPublishInternetEndpointsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publishMicrosoftEndpointsInput`<sup>Optional</sup> <a name="publishMicrosoftEndpointsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpointsInput"></a>

```java
public java.lang.Object getPublishMicrosoftEndpointsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `choice`<sup>Required</sup> <a name="choice" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choice"></a>

```java
public java.lang.String getChoice();
```

- *Type:* java.lang.String

---

##### `publishInternetEndpoints`<sup>Required</sup> <a name="publishInternetEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpoints"></a>

```java
public java.lang.Object getPublishInternetEndpoints();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publishMicrosoftEndpoints`<sup>Required</sup> <a name="publishMicrosoftEndpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpoints"></a>

```java
public java.lang.Object getPublishMicrosoftEndpoints();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.internalValue"></a>

```java
public StorageAccountRouting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

---


### StorageAccountSasPolicyOutputReference <a name="StorageAccountSasPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountSasPolicyOutputReference;

new StorageAccountSasPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resetExpirationAction">resetExpirationAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationAction` <a name="resetExpirationAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resetExpirationAction"></a>

```java
public void resetExpirationAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationActionInput">expirationActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriodInput">expirationPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationAction">expirationAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriod">expirationPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expirationActionInput`<sup>Optional</sup> <a name="expirationActionInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationActionInput"></a>

```java
public java.lang.String getExpirationActionInput();
```

- *Type:* java.lang.String

---

##### `expirationPeriodInput`<sup>Optional</sup> <a name="expirationPeriodInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriodInput"></a>

```java
public java.lang.String getExpirationPeriodInput();
```

- *Type:* java.lang.String

---

##### `expirationAction`<sup>Required</sup> <a name="expirationAction" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationAction"></a>

```java
public java.lang.String getExpirationAction();
```

- *Type:* java.lang.String

---

##### `expirationPeriod`<sup>Required</sup> <a name="expirationPeriod" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriod"></a>

```java
public java.lang.String getExpirationPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.internalValue"></a>

```java
public StorageAccountSasPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

---


### StorageAccountSharePropertiesCorsRuleList <a name="StorageAccountSharePropertiesCorsRuleList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountSharePropertiesCorsRuleList;

new StorageAccountSharePropertiesCorsRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.get"></a>

```java
public StorageAccountSharePropertiesCorsRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>>

---


### StorageAccountSharePropertiesCorsRuleOutputReference <a name="StorageAccountSharePropertiesCorsRuleOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountSharePropertiesCorsRuleOutputReference;

new StorageAccountSharePropertiesCorsRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeadersInput">exposedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeaders">exposedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposedHeadersInput`<sup>Optional</sup> <a name="exposedHeadersInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getExposedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```java
public java.lang.Number getMaxAgeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```java
public java.util.List<java.lang.String> getExposedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```java
public java.lang.Number getMaxAgeInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>

---


### StorageAccountSharePropertiesOutputReference <a name="StorageAccountSharePropertiesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountSharePropertiesOutputReference;

new StorageAccountSharePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putRetentionPolicy">putRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb">putSmb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetRetentionPolicy">resetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetSmb">resetSmb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCorsRule` <a name="putCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putCorsRule"></a>

```java
public void putCorsRule(IResolvable OR java.util.List<StorageAccountSharePropertiesCorsRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putCorsRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>>

---

##### `putRetentionPolicy` <a name="putRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putRetentionPolicy"></a>

```java
public void putRetentionPolicy(StorageAccountSharePropertiesRetentionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

---

##### `putSmb` <a name="putSmb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb"></a>

```java
public void putSmb(StorageAccountSharePropertiesSmb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

---

##### `resetCorsRule` <a name="resetCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetCorsRule"></a>

```java
public void resetCorsRule()
```

##### `resetRetentionPolicy` <a name="resetRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetRetentionPolicy"></a>

```java
public void resetRetentionPolicy()
```

##### `resetSmb` <a name="resetSmb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetSmb"></a>

```java
public void resetSmb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRule">corsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList">StorageAccountSharePropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference">StorageAccountSharePropertiesRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smb">smb</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference">StorageAccountSharePropertiesSmbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRuleInput">corsRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smbInput">smbInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRule"></a>

```java
public StorageAccountSharePropertiesCorsRuleList getCorsRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList">StorageAccountSharePropertiesCorsRuleList</a>

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicy"></a>

```java
public StorageAccountSharePropertiesRetentionPolicyOutputReference getRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference">StorageAccountSharePropertiesRetentionPolicyOutputReference</a>

---

##### `smb`<sup>Required</sup> <a name="smb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smb"></a>

```java
public StorageAccountSharePropertiesSmbOutputReference getSmb();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference">StorageAccountSharePropertiesSmbOutputReference</a>

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRuleInput"></a>

```java
public java.lang.Object getCorsRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>>

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicyInput"></a>

```java
public StorageAccountSharePropertiesRetentionPolicy getRetentionPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

---

##### `smbInput`<sup>Optional</sup> <a name="smbInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smbInput"></a>

```java
public StorageAccountSharePropertiesSmb getSmbInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.internalValue"></a>

```java
public StorageAccountShareProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

---


### StorageAccountSharePropertiesRetentionPolicyOutputReference <a name="StorageAccountSharePropertiesRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountSharePropertiesRetentionPolicyOutputReference;

new StorageAccountSharePropertiesRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resetDays">resetDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resetDays"></a>

```java
public void resetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.daysInput">daysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.days">days</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.daysInput"></a>

```java
public java.lang.Number getDaysInput();
```

- *Type:* java.lang.Number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.internalValue"></a>

```java
public StorageAccountSharePropertiesRetentionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

---


### StorageAccountSharePropertiesSmbOutputReference <a name="StorageAccountSharePropertiesSmbOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountSharePropertiesSmbOutputReference;

new StorageAccountSharePropertiesSmbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetAuthenticationTypes">resetAuthenticationTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetChannelEncryptionType">resetChannelEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetKerberosTicketEncryptionType">resetKerberosTicketEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetMultichannelEnabled">resetMultichannelEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetVersions">resetVersions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationTypes` <a name="resetAuthenticationTypes" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetAuthenticationTypes"></a>

```java
public void resetAuthenticationTypes()
```

##### `resetChannelEncryptionType` <a name="resetChannelEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetChannelEncryptionType"></a>

```java
public void resetChannelEncryptionType()
```

##### `resetKerberosTicketEncryptionType` <a name="resetKerberosTicketEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetKerberosTicketEncryptionType"></a>

```java
public void resetKerberosTicketEncryptionType()
```

##### `resetMultichannelEnabled` <a name="resetMultichannelEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetMultichannelEnabled"></a>

```java
public void resetMultichannelEnabled()
```

##### `resetVersions` <a name="resetVersions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetVersions"></a>

```java
public void resetVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypesInput">authenticationTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionTypeInput">channelEncryptionTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionTypeInput">kerberosTicketEncryptionTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabledInput">multichannelEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versionsInput">versionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypes">authenticationTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionType">channelEncryptionType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionType">kerberosTicketEncryptionType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabled">multichannelEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versions">versions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationTypesInput`<sup>Optional</sup> <a name="authenticationTypesInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypesInput"></a>

```java
public java.util.List<java.lang.String> getAuthenticationTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `channelEncryptionTypeInput`<sup>Optional</sup> <a name="channelEncryptionTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionTypeInput"></a>

```java
public java.util.List<java.lang.String> getChannelEncryptionTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kerberosTicketEncryptionTypeInput`<sup>Optional</sup> <a name="kerberosTicketEncryptionTypeInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionTypeInput"></a>

```java
public java.util.List<java.lang.String> getKerberosTicketEncryptionTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `multichannelEnabledInput`<sup>Optional</sup> <a name="multichannelEnabledInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabledInput"></a>

```java
public java.lang.Object getMultichannelEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `versionsInput`<sup>Optional</sup> <a name="versionsInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versionsInput"></a>

```java
public java.util.List<java.lang.String> getVersionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationTypes`<sup>Required</sup> <a name="authenticationTypes" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypes"></a>

```java
public java.util.List<java.lang.String> getAuthenticationTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `channelEncryptionType`<sup>Required</sup> <a name="channelEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionType"></a>

```java
public java.util.List<java.lang.String> getChannelEncryptionType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kerberosTicketEncryptionType`<sup>Required</sup> <a name="kerberosTicketEncryptionType" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionType"></a>

```java
public java.util.List<java.lang.String> getKerberosTicketEncryptionType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `multichannelEnabled`<sup>Required</sup> <a name="multichannelEnabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabled"></a>

```java
public java.lang.Object getMultichannelEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versions"></a>

```java
public java.util.List<java.lang.String> getVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.internalValue"></a>

```java
public StorageAccountSharePropertiesSmb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

---


### StorageAccountStaticWebsiteOutputReference <a name="StorageAccountStaticWebsiteOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountStaticWebsiteOutputReference;

new StorageAccountStaticWebsiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetError404Document">resetError404Document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetIndexDocument">resetIndexDocument</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetError404Document` <a name="resetError404Document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetError404Document"></a>

```java
public void resetError404Document()
```

##### `resetIndexDocument` <a name="resetIndexDocument" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetIndexDocument"></a>

```java
public void resetIndexDocument()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404DocumentInput">error404DocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocumentInput">indexDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404Document">error404Document</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocument">indexDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `error404DocumentInput`<sup>Optional</sup> <a name="error404DocumentInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404DocumentInput"></a>

```java
public java.lang.String getError404DocumentInput();
```

- *Type:* java.lang.String

---

##### `indexDocumentInput`<sup>Optional</sup> <a name="indexDocumentInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocumentInput"></a>

```java
public java.lang.String getIndexDocumentInput();
```

- *Type:* java.lang.String

---

##### `error404Document`<sup>Required</sup> <a name="error404Document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404Document"></a>

```java
public java.lang.String getError404Document();
```

- *Type:* java.lang.String

---

##### `indexDocument`<sup>Required</sup> <a name="indexDocument" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocument"></a>

```java
public java.lang.String getIndexDocument();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.internalValue"></a>

```java
public StorageAccountStaticWebsite getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

---


### StorageAccountTimeoutsOutputReference <a name="StorageAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account.StorageAccountTimeoutsOutputReference;

new StorageAccountTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

---



