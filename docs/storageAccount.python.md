# `storageAccount` Submodule <a name="`storageAccount` Submodule" id="@cdktf/provider-azurerm.storageAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccount <a name="StorageAccount" id="@cdktf/provider-azurerm.storageAccount.StorageAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account azurerm_storage_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_replication_type: str,
  account_tier: str,
  location: str,
  name: str,
  resource_group_name: str,
  access_tier: str = None,
  account_kind: str = None,
  allowed_copy_scope: str = None,
  allow_nested_items_to_be_public: typing.Union[bool, IResolvable] = None,
  azure_files_authentication: StorageAccountAzureFilesAuthentication = None,
  blob_properties: StorageAccountBlobProperties = None,
  cross_tenant_replication_enabled: typing.Union[bool, IResolvable] = None,
  custom_domain: StorageAccountCustomDomain = None,
  customer_managed_key: StorageAccountCustomerManagedKey = None,
  default_to_oauth_authentication: typing.Union[bool, IResolvable] = None,
  dns_endpoint_type: str = None,
  edge_zone: str = None,
  enable_https_traffic_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: StorageAccountIdentity = None,
  immutability_policy: StorageAccountImmutabilityPolicy = None,
  infrastructure_encryption_enabled: typing.Union[bool, IResolvable] = None,
  is_hns_enabled: typing.Union[bool, IResolvable] = None,
  large_file_share_enabled: typing.Union[bool, IResolvable] = None,
  local_user_enabled: typing.Union[bool, IResolvable] = None,
  min_tls_version: str = None,
  network_rules: StorageAccountNetworkRules = None,
  nfsv3_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  queue_encryption_key_type: str = None,
  queue_properties: StorageAccountQueueProperties = None,
  routing: StorageAccountRouting = None,
  sas_policy: StorageAccountSasPolicy = None,
  sftp_enabled: typing.Union[bool, IResolvable] = None,
  shared_access_key_enabled: typing.Union[bool, IResolvable] = None,
  share_properties: StorageAccountShareProperties = None,
  static_website: StorageAccountStaticWebsite = None,
  table_encryption_key_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: StorageAccountTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accountReplicationType">account_replication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accountTier">account_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#location StorageAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#name StorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accessTier">access_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#access_tier StorageAccount#access_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accountKind">account_kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.allowedCopyScope">allowed_copy_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_copy_scope StorageAccount#allowed_copy_scope}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.allowNestedItemsToBePublic">allow_nested_items_to_be_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allow_nested_items_to_be_public StorageAccount#allow_nested_items_to_be_public}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.azureFilesAuthentication">azure_files_authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | azure_files_authentication block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.blobProperties">blob_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | blob_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.crossTenantReplicationEnabled">cross_tenant_replication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#cross_tenant_replication_enabled StorageAccount#cross_tenant_replication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.customDomain">custom_domain</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.customerManagedKey">customer_managed_key</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.defaultToOauthAuthentication">default_to_oauth_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#default_to_oauth_authentication StorageAccount#default_to_oauth_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.dnsEndpointType">dns_endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#dns_endpoint_type StorageAccount#dns_endpoint_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.edgeZone">edge_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#edge_zone StorageAccount#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.enableHttpsTrafficOnly">enable_https_traffic_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#id StorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.immutabilityPolicy">immutability_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | immutability_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.isHnsEnabled">is_hns_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#is_hns_enabled StorageAccount#is_hns_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.largeFileShareEnabled">large_file_share_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#large_file_share_enabled StorageAccount#large_file_share_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.localUserEnabled">local_user_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#local_user_enabled StorageAccount#local_user_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.minTlsVersion">min_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#min_tls_version StorageAccount#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.networkRules">network_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | network_rules block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.nfsv3Enabled">nfsv3_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#nfsv3_enabled StorageAccount#nfsv3_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#public_network_access_enabled StorageAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.queueEncryptionKeyType">queue_encryption_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#queue_encryption_key_type StorageAccount#queue_encryption_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.queueProperties">queue_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | queue_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.sasPolicy">sas_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | sas_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.sftpEnabled">sftp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#sftp_enabled StorageAccount#sftp_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.sharedAccessKeyEnabled">shared_access_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#shared_access_key_enabled StorageAccount#shared_access_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.shareProperties">share_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | share_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.staticWebsite">static_website</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | static_website block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.tableEncryptionKeyType">table_encryption_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#table_encryption_key_type StorageAccount#table_encryption_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#tags StorageAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_replication_type`<sup>Required</sup> <a name="account_replication_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accountReplicationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}.

---

##### `account_tier`<sup>Required</sup> <a name="account_tier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accountTier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#location StorageAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#name StorageAccount#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}.

---

##### `access_tier`<sup>Optional</sup> <a name="access_tier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accessTier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#access_tier StorageAccount#access_tier}.

---

##### `account_kind`<sup>Optional</sup> <a name="account_kind" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.accountKind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}.

---

##### `allowed_copy_scope`<sup>Optional</sup> <a name="allowed_copy_scope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.allowedCopyScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_copy_scope StorageAccount#allowed_copy_scope}.

---

##### `allow_nested_items_to_be_public`<sup>Optional</sup> <a name="allow_nested_items_to_be_public" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.allowNestedItemsToBePublic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allow_nested_items_to_be_public StorageAccount#allow_nested_items_to_be_public}.

---

##### `azure_files_authentication`<sup>Optional</sup> <a name="azure_files_authentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.azureFilesAuthentication"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

azure_files_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#azure_files_authentication StorageAccount#azure_files_authentication}

---

##### `blob_properties`<sup>Optional</sup> <a name="blob_properties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.blobProperties"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

blob_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#blob_properties StorageAccount#blob_properties}

---

##### `cross_tenant_replication_enabled`<sup>Optional</sup> <a name="cross_tenant_replication_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.crossTenantReplicationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#cross_tenant_replication_enabled StorageAccount#cross_tenant_replication_enabled}.

---

##### `custom_domain`<sup>Optional</sup> <a name="custom_domain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.customDomain"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#custom_domain StorageAccount#custom_domain}

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.customerManagedKey"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#customer_managed_key StorageAccount#customer_managed_key}

---

##### `default_to_oauth_authentication`<sup>Optional</sup> <a name="default_to_oauth_authentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.defaultToOauthAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#default_to_oauth_authentication StorageAccount#default_to_oauth_authentication}.

---

##### `dns_endpoint_type`<sup>Optional</sup> <a name="dns_endpoint_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.dnsEndpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#dns_endpoint_type StorageAccount#dns_endpoint_type}.

---

##### `edge_zone`<sup>Optional</sup> <a name="edge_zone" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.edgeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#edge_zone StorageAccount#edge_zone}.

---

##### `enable_https_traffic_only`<sup>Optional</sup> <a name="enable_https_traffic_only" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.enableHttpsTrafficOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#id StorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#identity StorageAccount#identity}

---

##### `immutability_policy`<sup>Optional</sup> <a name="immutability_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.immutabilityPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

immutability_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#immutability_policy StorageAccount#immutability_policy}

---

##### `infrastructure_encryption_enabled`<sup>Optional</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.infrastructureEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}.

---

##### `is_hns_enabled`<sup>Optional</sup> <a name="is_hns_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.isHnsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#is_hns_enabled StorageAccount#is_hns_enabled}.

---

##### `large_file_share_enabled`<sup>Optional</sup> <a name="large_file_share_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.largeFileShareEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#large_file_share_enabled StorageAccount#large_file_share_enabled}.

---

##### `local_user_enabled`<sup>Optional</sup> <a name="local_user_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.localUserEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#local_user_enabled StorageAccount#local_user_enabled}.

---

##### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.minTlsVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#min_tls_version StorageAccount#min_tls_version}.

---

##### `network_rules`<sup>Optional</sup> <a name="network_rules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.networkRules"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

network_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#network_rules StorageAccount#network_rules}

---

##### `nfsv3_enabled`<sup>Optional</sup> <a name="nfsv3_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.nfsv3Enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#nfsv3_enabled StorageAccount#nfsv3_enabled}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#public_network_access_enabled StorageAccount#public_network_access_enabled}.

---

##### `queue_encryption_key_type`<sup>Optional</sup> <a name="queue_encryption_key_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.queueEncryptionKeyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#queue_encryption_key_type StorageAccount#queue_encryption_key_type}.

---

##### `queue_properties`<sup>Optional</sup> <a name="queue_properties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.queueProperties"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

queue_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#queue_properties StorageAccount#queue_properties}

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.routing"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#routing StorageAccount#routing}

---

##### `sas_policy`<sup>Optional</sup> <a name="sas_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.sasPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

sas_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#sas_policy StorageAccount#sas_policy}

---

##### `sftp_enabled`<sup>Optional</sup> <a name="sftp_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.sftpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#sftp_enabled StorageAccount#sftp_enabled}.

---

##### `shared_access_key_enabled`<sup>Optional</sup> <a name="shared_access_key_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.sharedAccessKeyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#shared_access_key_enabled StorageAccount#shared_access_key_enabled}.

---

##### `share_properties`<sup>Optional</sup> <a name="share_properties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.shareProperties"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

share_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#share_properties StorageAccount#share_properties}

---

##### `static_website`<sup>Optional</sup> <a name="static_website" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.staticWebsite"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

static_website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#static_website StorageAccount#static_website}

---

##### `table_encryption_key_type`<sup>Optional</sup> <a name="table_encryption_key_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.tableEncryptionKeyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#table_encryption_key_type StorageAccount#table_encryption_key_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#tags StorageAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#timeouts StorageAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putAzureFilesAuthentication">put_azure_files_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties">put_blob_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomDomain">put_custom_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey">put_customer_managed_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy">put_immutability_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules">put_network_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties">put_queue_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting">put_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putSasPolicy">put_sas_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties">put_share_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putStaticWebsite">put_static_website</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccessTier">reset_access_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccountKind">reset_account_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowedCopyScope">reset_allowed_copy_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowNestedItemsToBePublic">reset_allow_nested_items_to_be_public</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAzureFilesAuthentication">reset_azure_files_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetBlobProperties">reset_blob_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCrossTenantReplicationEnabled">reset_cross_tenant_replication_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomDomain">reset_custom_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomerManagedKey">reset_customer_managed_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetDefaultToOauthAuthentication">reset_default_to_oauth_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetDnsEndpointType">reset_dns_endpoint_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEdgeZone">reset_edge_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEnableHttpsTrafficOnly">reset_enable_https_traffic_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetImmutabilityPolicy">reset_immutability_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetInfrastructureEncryptionEnabled">reset_infrastructure_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIsHnsEnabled">reset_is_hns_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetLargeFileShareEnabled">reset_large_file_share_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetLocalUserEnabled">reset_local_user_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetMinTlsVersion">reset_min_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNetworkRules">reset_network_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNfsv3Enabled">reset_nfsv3_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueEncryptionKeyType">reset_queue_encryption_key_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueProperties">reset_queue_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetRouting">reset_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSasPolicy">reset_sas_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSftpEnabled">reset_sftp_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSharedAccessKeyEnabled">reset_shared_access_key_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetShareProperties">reset_share_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetStaticWebsite">reset_static_website</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTableEncryptionKeyType">reset_table_encryption_key_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_azure_files_authentication` <a name="put_azure_files_authentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putAzureFilesAuthentication"></a>

```python
def put_azure_files_authentication(
  directory_type: str,
  active_directory: StorageAccountAzureFilesAuthenticationActiveDirectory = None
) -> None
```

###### `directory_type`<sup>Required</sup> <a name="directory_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putAzureFilesAuthentication.parameter.directoryType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#directory_type StorageAccount#directory_type}.

---

###### `active_directory`<sup>Optional</sup> <a name="active_directory" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putAzureFilesAuthentication.parameter.activeDirectory"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#active_directory StorageAccount#active_directory}

---

##### `put_blob_properties` <a name="put_blob_properties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties"></a>

```python
def put_blob_properties(
  change_feed_enabled: typing.Union[bool, IResolvable] = None,
  change_feed_retention_in_days: typing.Union[int, float] = None,
  container_delete_retention_policy: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy = None,
  cors_rule: typing.Union[IResolvable, typing.List[StorageAccountBlobPropertiesCorsRule]] = None,
  default_service_version: str = None,
  delete_retention_policy: StorageAccountBlobPropertiesDeleteRetentionPolicy = None,
  last_access_time_enabled: typing.Union[bool, IResolvable] = None,
  restore_policy: StorageAccountBlobPropertiesRestorePolicy = None,
  versioning_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `change_feed_enabled`<sup>Optional</sup> <a name="change_feed_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties.parameter.changeFeedEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#change_feed_enabled StorageAccount#change_feed_enabled}.

---

###### `change_feed_retention_in_days`<sup>Optional</sup> <a name="change_feed_retention_in_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties.parameter.changeFeedRetentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#change_feed_retention_in_days StorageAccount#change_feed_retention_in_days}.

---

###### `container_delete_retention_policy`<sup>Optional</sup> <a name="container_delete_retention_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties.parameter.containerDeleteRetentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

container_delete_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#container_delete_retention_policy StorageAccount#container_delete_retention_policy}

---

###### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties.parameter.corsRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

###### `default_service_version`<sup>Optional</sup> <a name="default_service_version" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties.parameter.defaultServiceVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#default_service_version StorageAccount#default_service_version}.

---

###### `delete_retention_policy`<sup>Optional</sup> <a name="delete_retention_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties.parameter.deleteRetentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

delete_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#delete_retention_policy StorageAccount#delete_retention_policy}

---

###### `last_access_time_enabled`<sup>Optional</sup> <a name="last_access_time_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties.parameter.lastAccessTimeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#last_access_time_enabled StorageAccount#last_access_time_enabled}.

---

###### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties.parameter.restorePolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#restore_policy StorageAccount#restore_policy}

---

###### `versioning_enabled`<sup>Optional</sup> <a name="versioning_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putBlobProperties.parameter.versioningEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#versioning_enabled StorageAccount#versioning_enabled}.

---

##### `put_custom_domain` <a name="put_custom_domain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomDomain"></a>

```python
def put_custom_domain(
  name: str,
  use_subdomain: typing.Union[bool, IResolvable] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomDomain.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#name StorageAccount#name}.

---

###### `use_subdomain`<sup>Optional</sup> <a name="use_subdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomDomain.parameter.useSubdomain"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#use_subdomain StorageAccount#use_subdomain}.

---

##### `put_customer_managed_key` <a name="put_customer_managed_key" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey"></a>

```python
def put_customer_managed_key(
  user_assigned_identity_id: str,
  key_vault_key_id: str = None,
  managed_hsm_key_id: str = None
) -> None
```

###### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey.parameter.userAssignedIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#user_assigned_identity_id StorageAccount#user_assigned_identity_id}.

---

###### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey.parameter.keyVaultKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#key_vault_key_id StorageAccount#key_vault_key_id}.

---

###### `managed_hsm_key_id`<sup>Optional</sup> <a name="managed_hsm_key_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putCustomerManagedKey.parameter.managedHsmKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#managed_hsm_key_id StorageAccount#managed_hsm_key_id}.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#type StorageAccount#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#identity_ids StorageAccount#identity_ids}.

---

##### `put_immutability_policy` <a name="put_immutability_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy"></a>

```python
def put_immutability_policy(
  allow_protected_append_writes: typing.Union[bool, IResolvable],
  period_since_creation_in_days: typing.Union[int, float],
  state: str
) -> None
```

###### `allow_protected_append_writes`<sup>Required</sup> <a name="allow_protected_append_writes" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy.parameter.allowProtectedAppendWrites"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allow_protected_append_writes StorageAccount#allow_protected_append_writes}.

---

###### `period_since_creation_in_days`<sup>Required</sup> <a name="period_since_creation_in_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy.parameter.periodSinceCreationInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#period_since_creation_in_days StorageAccount#period_since_creation_in_days}.

---

###### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putImmutabilityPolicy.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#state StorageAccount#state}.

---

##### `put_network_rules` <a name="put_network_rules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules"></a>

```python
def put_network_rules(
  default_action: str,
  bypass: typing.List[str] = None,
  ip_rules: typing.List[str] = None,
  private_link_access: typing.Union[IResolvable, typing.List[StorageAccountNetworkRulesPrivateLinkAccess]] = None,
  virtual_network_subnet_ids: typing.List[str] = None
) -> None
```

###### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules.parameter.defaultAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#default_action StorageAccount#default_action}.

---

###### `bypass`<sup>Optional</sup> <a name="bypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules.parameter.bypass"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#bypass StorageAccount#bypass}.

---

###### `ip_rules`<sup>Optional</sup> <a name="ip_rules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules.parameter.ipRules"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#ip_rules StorageAccount#ip_rules}.

---

###### `private_link_access`<sup>Optional</sup> <a name="private_link_access" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules.parameter.privateLinkAccess"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>]]

private_link_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#private_link_access StorageAccount#private_link_access}

---

###### `virtual_network_subnet_ids`<sup>Optional</sup> <a name="virtual_network_subnet_ids" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putNetworkRules.parameter.virtualNetworkSubnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#virtual_network_subnet_ids StorageAccount#virtual_network_subnet_ids}.

---

##### `put_queue_properties` <a name="put_queue_properties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties"></a>

```python
def put_queue_properties(
  cors_rule: typing.Union[IResolvable, typing.List[StorageAccountQueuePropertiesCorsRule]] = None,
  hour_metrics: StorageAccountQueuePropertiesHourMetrics = None,
  logging: StorageAccountQueuePropertiesLogging = None,
  minute_metrics: StorageAccountQueuePropertiesMinuteMetrics = None
) -> None
```

###### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties.parameter.corsRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

###### `hour_metrics`<sup>Optional</sup> <a name="hour_metrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties.parameter.hourMetrics"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#hour_metrics StorageAccount#hour_metrics}

---

###### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#logging StorageAccount#logging}

---

###### `minute_metrics`<sup>Optional</sup> <a name="minute_metrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putQueueProperties.parameter.minuteMetrics"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#minute_metrics StorageAccount#minute_metrics}

---

##### `put_routing` <a name="put_routing" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting"></a>

```python
def put_routing(
  choice: str = None,
  publish_internet_endpoints: typing.Union[bool, IResolvable] = None,
  publish_microsoft_endpoints: typing.Union[bool, IResolvable] = None
) -> None
```

###### `choice`<sup>Optional</sup> <a name="choice" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting.parameter.choice"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#choice StorageAccount#choice}.

---

###### `publish_internet_endpoints`<sup>Optional</sup> <a name="publish_internet_endpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting.parameter.publishInternetEndpoints"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#publish_internet_endpoints StorageAccount#publish_internet_endpoints}.

---

###### `publish_microsoft_endpoints`<sup>Optional</sup> <a name="publish_microsoft_endpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putRouting.parameter.publishMicrosoftEndpoints"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#publish_microsoft_endpoints StorageAccount#publish_microsoft_endpoints}.

---

##### `put_sas_policy` <a name="put_sas_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putSasPolicy"></a>

```python
def put_sas_policy(
  expiration_period: str,
  expiration_action: str = None
) -> None
```

###### `expiration_period`<sup>Required</sup> <a name="expiration_period" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putSasPolicy.parameter.expirationPeriod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#expiration_period StorageAccount#expiration_period}.

---

###### `expiration_action`<sup>Optional</sup> <a name="expiration_action" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putSasPolicy.parameter.expirationAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#expiration_action StorageAccount#expiration_action}.

---

##### `put_share_properties` <a name="put_share_properties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties"></a>

```python
def put_share_properties(
  cors_rule: typing.Union[IResolvable, typing.List[StorageAccountSharePropertiesCorsRule]] = None,
  retention_policy: StorageAccountSharePropertiesRetentionPolicy = None,
  smb: StorageAccountSharePropertiesSmb = None
) -> None
```

###### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties.parameter.corsRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

###### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties.parameter.retentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#retention_policy StorageAccount#retention_policy}

---

###### `smb`<sup>Optional</sup> <a name="smb" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putShareProperties.parameter.smb"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

smb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#smb StorageAccount#smb}

---

##### `put_static_website` <a name="put_static_website" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putStaticWebsite"></a>

```python
def put_static_website(
  error404_document: str = None,
  index_document: str = None
) -> None
```

###### `error404_document`<sup>Optional</sup> <a name="error404_document" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putStaticWebsite.parameter.error404Document"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#error_404_document StorageAccount#error_404_document}.

---

###### `index_document`<sup>Optional</sup> <a name="index_document" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putStaticWebsite.parameter.indexDocument"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#index_document StorageAccount#index_document}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#create StorageAccount#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#delete StorageAccount#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#read StorageAccount#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#update StorageAccount#update}.

---

##### `reset_access_tier` <a name="reset_access_tier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccessTier"></a>

```python
def reset_access_tier() -> None
```

##### `reset_account_kind` <a name="reset_account_kind" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAccountKind"></a>

```python
def reset_account_kind() -> None
```

##### `reset_allowed_copy_scope` <a name="reset_allowed_copy_scope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowedCopyScope"></a>

```python
def reset_allowed_copy_scope() -> None
```

##### `reset_allow_nested_items_to_be_public` <a name="reset_allow_nested_items_to_be_public" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAllowNestedItemsToBePublic"></a>

```python
def reset_allow_nested_items_to_be_public() -> None
```

##### `reset_azure_files_authentication` <a name="reset_azure_files_authentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetAzureFilesAuthentication"></a>

```python
def reset_azure_files_authentication() -> None
```

##### `reset_blob_properties` <a name="reset_blob_properties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetBlobProperties"></a>

```python
def reset_blob_properties() -> None
```

##### `reset_cross_tenant_replication_enabled` <a name="reset_cross_tenant_replication_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCrossTenantReplicationEnabled"></a>

```python
def reset_cross_tenant_replication_enabled() -> None
```

##### `reset_custom_domain` <a name="reset_custom_domain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomDomain"></a>

```python
def reset_custom_domain() -> None
```

##### `reset_customer_managed_key` <a name="reset_customer_managed_key" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetCustomerManagedKey"></a>

```python
def reset_customer_managed_key() -> None
```

##### `reset_default_to_oauth_authentication` <a name="reset_default_to_oauth_authentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetDefaultToOauthAuthentication"></a>

```python
def reset_default_to_oauth_authentication() -> None
```

##### `reset_dns_endpoint_type` <a name="reset_dns_endpoint_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetDnsEndpointType"></a>

```python
def reset_dns_endpoint_type() -> None
```

##### `reset_edge_zone` <a name="reset_edge_zone" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEdgeZone"></a>

```python
def reset_edge_zone() -> None
```

##### `reset_enable_https_traffic_only` <a name="reset_enable_https_traffic_only" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetEnableHttpsTrafficOnly"></a>

```python
def reset_enable_https_traffic_only() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_immutability_policy` <a name="reset_immutability_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetImmutabilityPolicy"></a>

```python
def reset_immutability_policy() -> None
```

##### `reset_infrastructure_encryption_enabled` <a name="reset_infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetInfrastructureEncryptionEnabled"></a>

```python
def reset_infrastructure_encryption_enabled() -> None
```

##### `reset_is_hns_enabled` <a name="reset_is_hns_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetIsHnsEnabled"></a>

```python
def reset_is_hns_enabled() -> None
```

##### `reset_large_file_share_enabled` <a name="reset_large_file_share_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetLargeFileShareEnabled"></a>

```python
def reset_large_file_share_enabled() -> None
```

##### `reset_local_user_enabled` <a name="reset_local_user_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetLocalUserEnabled"></a>

```python
def reset_local_user_enabled() -> None
```

##### `reset_min_tls_version` <a name="reset_min_tls_version" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetMinTlsVersion"></a>

```python
def reset_min_tls_version() -> None
```

##### `reset_network_rules` <a name="reset_network_rules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNetworkRules"></a>

```python
def reset_network_rules() -> None
```

##### `reset_nfsv3_enabled` <a name="reset_nfsv3_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetNfsv3Enabled"></a>

```python
def reset_nfsv3_enabled() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_queue_encryption_key_type` <a name="reset_queue_encryption_key_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueEncryptionKeyType"></a>

```python
def reset_queue_encryption_key_type() -> None
```

##### `reset_queue_properties` <a name="reset_queue_properties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetQueueProperties"></a>

```python
def reset_queue_properties() -> None
```

##### `reset_routing` <a name="reset_routing" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetRouting"></a>

```python
def reset_routing() -> None
```

##### `reset_sas_policy` <a name="reset_sas_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSasPolicy"></a>

```python
def reset_sas_policy() -> None
```

##### `reset_sftp_enabled` <a name="reset_sftp_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSftpEnabled"></a>

```python
def reset_sftp_enabled() -> None
```

##### `reset_shared_access_key_enabled` <a name="reset_shared_access_key_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetSharedAccessKeyEnabled"></a>

```python
def reset_shared_access_key_enabled() -> None
```

##### `reset_share_properties` <a name="reset_share_properties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetShareProperties"></a>

```python
def reset_share_properties() -> None
```

##### `reset_static_website` <a name="reset_static_website" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetStaticWebsite"></a>

```python
def reset_static_website() -> None
```

##### `reset_table_encryption_key_type` <a name="reset_table_encryption_key_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTableEncryptionKeyType"></a>

```python
def reset_table_encryption_key_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StorageAccount resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccount.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StorageAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthentication">azure_files_authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference">StorageAccountAzureFilesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobProperties">blob_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference">StorageAccountBlobPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomain">custom_domain</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference">StorageAccountCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKey">customer_managed_key</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference">StorageAccountCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference">StorageAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicy">immutability_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference">StorageAccountImmutabilityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRules">network_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference">StorageAccountNetworkRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryAccessKey">primary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobConnectionString">primary_blob_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobEndpoint">primary_blob_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobHost">primary_blob_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobInternetEndpoint">primary_blob_internet_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobInternetHost">primary_blob_internet_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobMicrosoftEndpoint">primary_blob_microsoft_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobMicrosoftHost">primary_blob_microsoft_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryConnectionString">primary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsEndpoint">primary_dfs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsHost">primary_dfs_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsInternetEndpoint">primary_dfs_internet_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsInternetHost">primary_dfs_internet_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsMicrosoftEndpoint">primary_dfs_microsoft_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsMicrosoftHost">primary_dfs_microsoft_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileEndpoint">primary_file_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileHost">primary_file_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileInternetEndpoint">primary_file_internet_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileInternetHost">primary_file_internet_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileMicrosoftEndpoint">primary_file_microsoft_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileMicrosoftHost">primary_file_microsoft_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryLocation">primary_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueEndpoint">primary_queue_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueHost">primary_queue_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueMicrosoftEndpoint">primary_queue_microsoft_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueMicrosoftHost">primary_queue_microsoft_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableEndpoint">primary_table_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableHost">primary_table_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableMicrosoftEndpoint">primary_table_microsoft_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableMicrosoftHost">primary_table_microsoft_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebEndpoint">primary_web_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebHost">primary_web_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebInternetEndpoint">primary_web_internet_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebInternetHost">primary_web_internet_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebMicrosoftEndpoint">primary_web_microsoft_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebMicrosoftHost">primary_web_microsoft_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueProperties">queue_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference">StorageAccountQueuePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference">StorageAccountRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicy">sas_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference">StorageAccountSasPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryAccessKey">secondary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobConnectionString">secondary_blob_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobEndpoint">secondary_blob_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobHost">secondary_blob_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobInternetEndpoint">secondary_blob_internet_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobInternetHost">secondary_blob_internet_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobMicrosoftEndpoint">secondary_blob_microsoft_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobMicrosoftHost">secondary_blob_microsoft_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryConnectionString">secondary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsEndpoint">secondary_dfs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsHost">secondary_dfs_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsInternetEndpoint">secondary_dfs_internet_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsInternetHost">secondary_dfs_internet_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsMicrosoftEndpoint">secondary_dfs_microsoft_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsMicrosoftHost">secondary_dfs_microsoft_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileEndpoint">secondary_file_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileHost">secondary_file_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileInternetEndpoint">secondary_file_internet_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileInternetHost">secondary_file_internet_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileMicrosoftEndpoint">secondary_file_microsoft_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileMicrosoftHost">secondary_file_microsoft_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryLocation">secondary_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueEndpoint">secondary_queue_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueHost">secondary_queue_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueMicrosoftEndpoint">secondary_queue_microsoft_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueMicrosoftHost">secondary_queue_microsoft_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableEndpoint">secondary_table_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableHost">secondary_table_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableMicrosoftEndpoint">secondary_table_microsoft_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableMicrosoftHost">secondary_table_microsoft_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebEndpoint">secondary_web_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebHost">secondary_web_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebInternetEndpoint">secondary_web_internet_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebInternetHost">secondary_web_internet_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebMicrosoftEndpoint">secondary_web_microsoft_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebMicrosoftHost">secondary_web_microsoft_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.shareProperties">share_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference">StorageAccountSharePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsite">static_website</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference">StorageAccountStaticWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference">StorageAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTierInput">access_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKindInput">account_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationTypeInput">account_replication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTierInput">account_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScopeInput">allowed_copy_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublicInput">allow_nested_items_to_be_public_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthenticationInput">azure_files_authentication_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobPropertiesInput">blob_properties_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabledInput">cross_tenant_replication_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomainInput">custom_domain_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKeyInput">customer_managed_key_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthenticationInput">default_to_oauth_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dnsEndpointTypeInput">dns_endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZoneInput">edge_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnlyInput">enable_https_traffic_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicyInput">immutability_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabledInput">infrastructure_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabledInput">is_hns_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabledInput">large_file_share_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.localUserEnabledInput">local_user_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersionInput">min_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRulesInput">network_rules_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3EnabledInput">nfsv3_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyTypeInput">queue_encryption_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queuePropertiesInput">queue_properties_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routingInput">routing_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicyInput">sas_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabledInput">sftp_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabledInput">shared_access_key_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharePropertiesInput">share_properties_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsiteInput">static_website_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyTypeInput">table_encryption_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTier">access_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKind">account_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationType">account_replication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTier">account_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScope">allowed_copy_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublic">allow_nested_items_to_be_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabled">cross_tenant_replication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthentication">default_to_oauth_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dnsEndpointType">dns_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZone">edge_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnly">enable_https_traffic_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabled">is_hns_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabled">large_file_share_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.localUserEnabled">local_user_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3Enabled">nfsv3_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyType">queue_encryption_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabled">sftp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabled">shared_access_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyType">table_encryption_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `azure_files_authentication`<sup>Required</sup> <a name="azure_files_authentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthentication"></a>

```python
azure_files_authentication: StorageAccountAzureFilesAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference">StorageAccountAzureFilesAuthenticationOutputReference</a>

---

##### `blob_properties`<sup>Required</sup> <a name="blob_properties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobProperties"></a>

```python
blob_properties: StorageAccountBlobPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference">StorageAccountBlobPropertiesOutputReference</a>

---

##### `custom_domain`<sup>Required</sup> <a name="custom_domain" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomain"></a>

```python
custom_domain: StorageAccountCustomDomainOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference">StorageAccountCustomDomainOutputReference</a>

---

##### `customer_managed_key`<sup>Required</sup> <a name="customer_managed_key" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKey"></a>

```python
customer_managed_key: StorageAccountCustomerManagedKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference">StorageAccountCustomerManagedKeyOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identity"></a>

```python
identity: StorageAccountIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference">StorageAccountIdentityOutputReference</a>

---

##### `immutability_policy`<sup>Required</sup> <a name="immutability_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicy"></a>

```python
immutability_policy: StorageAccountImmutabilityPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference">StorageAccountImmutabilityPolicyOutputReference</a>

---

##### `network_rules`<sup>Required</sup> <a name="network_rules" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRules"></a>

```python
network_rules: StorageAccountNetworkRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference">StorageAccountNetworkRulesOutputReference</a>

---

##### `primary_access_key`<sup>Required</sup> <a name="primary_access_key" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryAccessKey"></a>

```python
primary_access_key: str
```

- *Type:* str

---

##### `primary_blob_connection_string`<sup>Required</sup> <a name="primary_blob_connection_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobConnectionString"></a>

```python
primary_blob_connection_string: str
```

- *Type:* str

---

##### `primary_blob_endpoint`<sup>Required</sup> <a name="primary_blob_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobEndpoint"></a>

```python
primary_blob_endpoint: str
```

- *Type:* str

---

##### `primary_blob_host`<sup>Required</sup> <a name="primary_blob_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobHost"></a>

```python
primary_blob_host: str
```

- *Type:* str

---

##### `primary_blob_internet_endpoint`<sup>Required</sup> <a name="primary_blob_internet_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobInternetEndpoint"></a>

```python
primary_blob_internet_endpoint: str
```

- *Type:* str

---

##### `primary_blob_internet_host`<sup>Required</sup> <a name="primary_blob_internet_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobInternetHost"></a>

```python
primary_blob_internet_host: str
```

- *Type:* str

---

##### `primary_blob_microsoft_endpoint`<sup>Required</sup> <a name="primary_blob_microsoft_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobMicrosoftEndpoint"></a>

```python
primary_blob_microsoft_endpoint: str
```

- *Type:* str

---

##### `primary_blob_microsoft_host`<sup>Required</sup> <a name="primary_blob_microsoft_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryBlobMicrosoftHost"></a>

```python
primary_blob_microsoft_host: str
```

- *Type:* str

---

##### `primary_connection_string`<sup>Required</sup> <a name="primary_connection_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryConnectionString"></a>

```python
primary_connection_string: str
```

- *Type:* str

---

##### `primary_dfs_endpoint`<sup>Required</sup> <a name="primary_dfs_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsEndpoint"></a>

```python
primary_dfs_endpoint: str
```

- *Type:* str

---

##### `primary_dfs_host`<sup>Required</sup> <a name="primary_dfs_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsHost"></a>

```python
primary_dfs_host: str
```

- *Type:* str

---

##### `primary_dfs_internet_endpoint`<sup>Required</sup> <a name="primary_dfs_internet_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsInternetEndpoint"></a>

```python
primary_dfs_internet_endpoint: str
```

- *Type:* str

---

##### `primary_dfs_internet_host`<sup>Required</sup> <a name="primary_dfs_internet_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsInternetHost"></a>

```python
primary_dfs_internet_host: str
```

- *Type:* str

---

##### `primary_dfs_microsoft_endpoint`<sup>Required</sup> <a name="primary_dfs_microsoft_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsMicrosoftEndpoint"></a>

```python
primary_dfs_microsoft_endpoint: str
```

- *Type:* str

---

##### `primary_dfs_microsoft_host`<sup>Required</sup> <a name="primary_dfs_microsoft_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryDfsMicrosoftHost"></a>

```python
primary_dfs_microsoft_host: str
```

- *Type:* str

---

##### `primary_file_endpoint`<sup>Required</sup> <a name="primary_file_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileEndpoint"></a>

```python
primary_file_endpoint: str
```

- *Type:* str

---

##### `primary_file_host`<sup>Required</sup> <a name="primary_file_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileHost"></a>

```python
primary_file_host: str
```

- *Type:* str

---

##### `primary_file_internet_endpoint`<sup>Required</sup> <a name="primary_file_internet_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileInternetEndpoint"></a>

```python
primary_file_internet_endpoint: str
```

- *Type:* str

---

##### `primary_file_internet_host`<sup>Required</sup> <a name="primary_file_internet_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileInternetHost"></a>

```python
primary_file_internet_host: str
```

- *Type:* str

---

##### `primary_file_microsoft_endpoint`<sup>Required</sup> <a name="primary_file_microsoft_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileMicrosoftEndpoint"></a>

```python
primary_file_microsoft_endpoint: str
```

- *Type:* str

---

##### `primary_file_microsoft_host`<sup>Required</sup> <a name="primary_file_microsoft_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryFileMicrosoftHost"></a>

```python
primary_file_microsoft_host: str
```

- *Type:* str

---

##### `primary_location`<sup>Required</sup> <a name="primary_location" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryLocation"></a>

```python
primary_location: str
```

- *Type:* str

---

##### `primary_queue_endpoint`<sup>Required</sup> <a name="primary_queue_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueEndpoint"></a>

```python
primary_queue_endpoint: str
```

- *Type:* str

---

##### `primary_queue_host`<sup>Required</sup> <a name="primary_queue_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueHost"></a>

```python
primary_queue_host: str
```

- *Type:* str

---

##### `primary_queue_microsoft_endpoint`<sup>Required</sup> <a name="primary_queue_microsoft_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueMicrosoftEndpoint"></a>

```python
primary_queue_microsoft_endpoint: str
```

- *Type:* str

---

##### `primary_queue_microsoft_host`<sup>Required</sup> <a name="primary_queue_microsoft_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryQueueMicrosoftHost"></a>

```python
primary_queue_microsoft_host: str
```

- *Type:* str

---

##### `primary_table_endpoint`<sup>Required</sup> <a name="primary_table_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableEndpoint"></a>

```python
primary_table_endpoint: str
```

- *Type:* str

---

##### `primary_table_host`<sup>Required</sup> <a name="primary_table_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableHost"></a>

```python
primary_table_host: str
```

- *Type:* str

---

##### `primary_table_microsoft_endpoint`<sup>Required</sup> <a name="primary_table_microsoft_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableMicrosoftEndpoint"></a>

```python
primary_table_microsoft_endpoint: str
```

- *Type:* str

---

##### `primary_table_microsoft_host`<sup>Required</sup> <a name="primary_table_microsoft_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryTableMicrosoftHost"></a>

```python
primary_table_microsoft_host: str
```

- *Type:* str

---

##### `primary_web_endpoint`<sup>Required</sup> <a name="primary_web_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebEndpoint"></a>

```python
primary_web_endpoint: str
```

- *Type:* str

---

##### `primary_web_host`<sup>Required</sup> <a name="primary_web_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebHost"></a>

```python
primary_web_host: str
```

- *Type:* str

---

##### `primary_web_internet_endpoint`<sup>Required</sup> <a name="primary_web_internet_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebInternetEndpoint"></a>

```python
primary_web_internet_endpoint: str
```

- *Type:* str

---

##### `primary_web_internet_host`<sup>Required</sup> <a name="primary_web_internet_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebInternetHost"></a>

```python
primary_web_internet_host: str
```

- *Type:* str

---

##### `primary_web_microsoft_endpoint`<sup>Required</sup> <a name="primary_web_microsoft_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebMicrosoftEndpoint"></a>

```python
primary_web_microsoft_endpoint: str
```

- *Type:* str

---

##### `primary_web_microsoft_host`<sup>Required</sup> <a name="primary_web_microsoft_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.primaryWebMicrosoftHost"></a>

```python
primary_web_microsoft_host: str
```

- *Type:* str

---

##### `queue_properties`<sup>Required</sup> <a name="queue_properties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueProperties"></a>

```python
queue_properties: StorageAccountQueuePropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference">StorageAccountQueuePropertiesOutputReference</a>

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routing"></a>

```python
routing: StorageAccountRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference">StorageAccountRoutingOutputReference</a>

---

##### `sas_policy`<sup>Required</sup> <a name="sas_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicy"></a>

```python
sas_policy: StorageAccountSasPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference">StorageAccountSasPolicyOutputReference</a>

---

##### `secondary_access_key`<sup>Required</sup> <a name="secondary_access_key" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryAccessKey"></a>

```python
secondary_access_key: str
```

- *Type:* str

---

##### `secondary_blob_connection_string`<sup>Required</sup> <a name="secondary_blob_connection_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobConnectionString"></a>

```python
secondary_blob_connection_string: str
```

- *Type:* str

---

##### `secondary_blob_endpoint`<sup>Required</sup> <a name="secondary_blob_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobEndpoint"></a>

```python
secondary_blob_endpoint: str
```

- *Type:* str

---

##### `secondary_blob_host`<sup>Required</sup> <a name="secondary_blob_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobHost"></a>

```python
secondary_blob_host: str
```

- *Type:* str

---

##### `secondary_blob_internet_endpoint`<sup>Required</sup> <a name="secondary_blob_internet_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobInternetEndpoint"></a>

```python
secondary_blob_internet_endpoint: str
```

- *Type:* str

---

##### `secondary_blob_internet_host`<sup>Required</sup> <a name="secondary_blob_internet_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobInternetHost"></a>

```python
secondary_blob_internet_host: str
```

- *Type:* str

---

##### `secondary_blob_microsoft_endpoint`<sup>Required</sup> <a name="secondary_blob_microsoft_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobMicrosoftEndpoint"></a>

```python
secondary_blob_microsoft_endpoint: str
```

- *Type:* str

---

##### `secondary_blob_microsoft_host`<sup>Required</sup> <a name="secondary_blob_microsoft_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryBlobMicrosoftHost"></a>

```python
secondary_blob_microsoft_host: str
```

- *Type:* str

---

##### `secondary_connection_string`<sup>Required</sup> <a name="secondary_connection_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryConnectionString"></a>

```python
secondary_connection_string: str
```

- *Type:* str

---

##### `secondary_dfs_endpoint`<sup>Required</sup> <a name="secondary_dfs_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsEndpoint"></a>

```python
secondary_dfs_endpoint: str
```

- *Type:* str

---

##### `secondary_dfs_host`<sup>Required</sup> <a name="secondary_dfs_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsHost"></a>

```python
secondary_dfs_host: str
```

- *Type:* str

---

##### `secondary_dfs_internet_endpoint`<sup>Required</sup> <a name="secondary_dfs_internet_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsInternetEndpoint"></a>

```python
secondary_dfs_internet_endpoint: str
```

- *Type:* str

---

##### `secondary_dfs_internet_host`<sup>Required</sup> <a name="secondary_dfs_internet_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsInternetHost"></a>

```python
secondary_dfs_internet_host: str
```

- *Type:* str

---

##### `secondary_dfs_microsoft_endpoint`<sup>Required</sup> <a name="secondary_dfs_microsoft_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsMicrosoftEndpoint"></a>

```python
secondary_dfs_microsoft_endpoint: str
```

- *Type:* str

---

##### `secondary_dfs_microsoft_host`<sup>Required</sup> <a name="secondary_dfs_microsoft_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryDfsMicrosoftHost"></a>

```python
secondary_dfs_microsoft_host: str
```

- *Type:* str

---

##### `secondary_file_endpoint`<sup>Required</sup> <a name="secondary_file_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileEndpoint"></a>

```python
secondary_file_endpoint: str
```

- *Type:* str

---

##### `secondary_file_host`<sup>Required</sup> <a name="secondary_file_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileHost"></a>

```python
secondary_file_host: str
```

- *Type:* str

---

##### `secondary_file_internet_endpoint`<sup>Required</sup> <a name="secondary_file_internet_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileInternetEndpoint"></a>

```python
secondary_file_internet_endpoint: str
```

- *Type:* str

---

##### `secondary_file_internet_host`<sup>Required</sup> <a name="secondary_file_internet_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileInternetHost"></a>

```python
secondary_file_internet_host: str
```

- *Type:* str

---

##### `secondary_file_microsoft_endpoint`<sup>Required</sup> <a name="secondary_file_microsoft_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileMicrosoftEndpoint"></a>

```python
secondary_file_microsoft_endpoint: str
```

- *Type:* str

---

##### `secondary_file_microsoft_host`<sup>Required</sup> <a name="secondary_file_microsoft_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryFileMicrosoftHost"></a>

```python
secondary_file_microsoft_host: str
```

- *Type:* str

---

##### `secondary_location`<sup>Required</sup> <a name="secondary_location" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryLocation"></a>

```python
secondary_location: str
```

- *Type:* str

---

##### `secondary_queue_endpoint`<sup>Required</sup> <a name="secondary_queue_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueEndpoint"></a>

```python
secondary_queue_endpoint: str
```

- *Type:* str

---

##### `secondary_queue_host`<sup>Required</sup> <a name="secondary_queue_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueHost"></a>

```python
secondary_queue_host: str
```

- *Type:* str

---

##### `secondary_queue_microsoft_endpoint`<sup>Required</sup> <a name="secondary_queue_microsoft_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueMicrosoftEndpoint"></a>

```python
secondary_queue_microsoft_endpoint: str
```

- *Type:* str

---

##### `secondary_queue_microsoft_host`<sup>Required</sup> <a name="secondary_queue_microsoft_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryQueueMicrosoftHost"></a>

```python
secondary_queue_microsoft_host: str
```

- *Type:* str

---

##### `secondary_table_endpoint`<sup>Required</sup> <a name="secondary_table_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableEndpoint"></a>

```python
secondary_table_endpoint: str
```

- *Type:* str

---

##### `secondary_table_host`<sup>Required</sup> <a name="secondary_table_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableHost"></a>

```python
secondary_table_host: str
```

- *Type:* str

---

##### `secondary_table_microsoft_endpoint`<sup>Required</sup> <a name="secondary_table_microsoft_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableMicrosoftEndpoint"></a>

```python
secondary_table_microsoft_endpoint: str
```

- *Type:* str

---

##### `secondary_table_microsoft_host`<sup>Required</sup> <a name="secondary_table_microsoft_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryTableMicrosoftHost"></a>

```python
secondary_table_microsoft_host: str
```

- *Type:* str

---

##### `secondary_web_endpoint`<sup>Required</sup> <a name="secondary_web_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebEndpoint"></a>

```python
secondary_web_endpoint: str
```

- *Type:* str

---

##### `secondary_web_host`<sup>Required</sup> <a name="secondary_web_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebHost"></a>

```python
secondary_web_host: str
```

- *Type:* str

---

##### `secondary_web_internet_endpoint`<sup>Required</sup> <a name="secondary_web_internet_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebInternetEndpoint"></a>

```python
secondary_web_internet_endpoint: str
```

- *Type:* str

---

##### `secondary_web_internet_host`<sup>Required</sup> <a name="secondary_web_internet_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebInternetHost"></a>

```python
secondary_web_internet_host: str
```

- *Type:* str

---

##### `secondary_web_microsoft_endpoint`<sup>Required</sup> <a name="secondary_web_microsoft_endpoint" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebMicrosoftEndpoint"></a>

```python
secondary_web_microsoft_endpoint: str
```

- *Type:* str

---

##### `secondary_web_microsoft_host`<sup>Required</sup> <a name="secondary_web_microsoft_host" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.secondaryWebMicrosoftHost"></a>

```python
secondary_web_microsoft_host: str
```

- *Type:* str

---

##### `share_properties`<sup>Required</sup> <a name="share_properties" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.shareProperties"></a>

```python
share_properties: StorageAccountSharePropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference">StorageAccountSharePropertiesOutputReference</a>

---

##### `static_website`<sup>Required</sup> <a name="static_website" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsite"></a>

```python
static_website: StorageAccountStaticWebsiteOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference">StorageAccountStaticWebsiteOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeouts"></a>

```python
timeouts: StorageAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference">StorageAccountTimeoutsOutputReference</a>

---

##### `access_tier_input`<sup>Optional</sup> <a name="access_tier_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTierInput"></a>

```python
access_tier_input: str
```

- *Type:* str

---

##### `account_kind_input`<sup>Optional</sup> <a name="account_kind_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKindInput"></a>

```python
account_kind_input: str
```

- *Type:* str

---

##### `account_replication_type_input`<sup>Optional</sup> <a name="account_replication_type_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationTypeInput"></a>

```python
account_replication_type_input: str
```

- *Type:* str

---

##### `account_tier_input`<sup>Optional</sup> <a name="account_tier_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTierInput"></a>

```python
account_tier_input: str
```

- *Type:* str

---

##### `allowed_copy_scope_input`<sup>Optional</sup> <a name="allowed_copy_scope_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScopeInput"></a>

```python
allowed_copy_scope_input: str
```

- *Type:* str

---

##### `allow_nested_items_to_be_public_input`<sup>Optional</sup> <a name="allow_nested_items_to_be_public_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublicInput"></a>

```python
allow_nested_items_to_be_public_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `azure_files_authentication_input`<sup>Optional</sup> <a name="azure_files_authentication_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.azureFilesAuthenticationInput"></a>

```python
azure_files_authentication_input: StorageAccountAzureFilesAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

---

##### `blob_properties_input`<sup>Optional</sup> <a name="blob_properties_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.blobPropertiesInput"></a>

```python
blob_properties_input: StorageAccountBlobProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

---

##### `cross_tenant_replication_enabled_input`<sup>Optional</sup> <a name="cross_tenant_replication_enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabledInput"></a>

```python
cross_tenant_replication_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_domain_input`<sup>Optional</sup> <a name="custom_domain_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customDomainInput"></a>

```python
custom_domain_input: StorageAccountCustomDomain
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---

##### `customer_managed_key_input`<sup>Optional</sup> <a name="customer_managed_key_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.customerManagedKeyInput"></a>

```python
customer_managed_key_input: StorageAccountCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

---

##### `default_to_oauth_authentication_input`<sup>Optional</sup> <a name="default_to_oauth_authentication_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthenticationInput"></a>

```python
default_to_oauth_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dns_endpoint_type_input`<sup>Optional</sup> <a name="dns_endpoint_type_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dnsEndpointTypeInput"></a>

```python
dns_endpoint_type_input: str
```

- *Type:* str

---

##### `edge_zone_input`<sup>Optional</sup> <a name="edge_zone_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZoneInput"></a>

```python
edge_zone_input: str
```

- *Type:* str

---

##### `enable_https_traffic_only_input`<sup>Optional</sup> <a name="enable_https_traffic_only_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnlyInput"></a>

```python
enable_https_traffic_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.identityInput"></a>

```python
identity_input: StorageAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `immutability_policy_input`<sup>Optional</sup> <a name="immutability_policy_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.immutabilityPolicyInput"></a>

```python
immutability_policy_input: StorageAccountImmutabilityPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

---

##### `infrastructure_encryption_enabled_input`<sup>Optional</sup> <a name="infrastructure_encryption_enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabledInput"></a>

```python
infrastructure_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_hns_enabled_input`<sup>Optional</sup> <a name="is_hns_enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabledInput"></a>

```python
is_hns_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `large_file_share_enabled_input`<sup>Optional</sup> <a name="large_file_share_enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabledInput"></a>

```python
large_file_share_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `local_user_enabled_input`<sup>Optional</sup> <a name="local_user_enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.localUserEnabledInput"></a>

```python
local_user_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `min_tls_version_input`<sup>Optional</sup> <a name="min_tls_version_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersionInput"></a>

```python
min_tls_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_rules_input`<sup>Optional</sup> <a name="network_rules_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.networkRulesInput"></a>

```python
network_rules_input: StorageAccountNetworkRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

---

##### `nfsv3_enabled_input`<sup>Optional</sup> <a name="nfsv3_enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3EnabledInput"></a>

```python
nfsv3_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `queue_encryption_key_type_input`<sup>Optional</sup> <a name="queue_encryption_key_type_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyTypeInput"></a>

```python
queue_encryption_key_type_input: str
```

- *Type:* str

---

##### `queue_properties_input`<sup>Optional</sup> <a name="queue_properties_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queuePropertiesInput"></a>

```python
queue_properties_input: StorageAccountQueueProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `routing_input`<sup>Optional</sup> <a name="routing_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.routingInput"></a>

```python
routing_input: StorageAccountRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

---

##### `sas_policy_input`<sup>Optional</sup> <a name="sas_policy_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sasPolicyInput"></a>

```python
sas_policy_input: StorageAccountSasPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

---

##### `sftp_enabled_input`<sup>Optional</sup> <a name="sftp_enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabledInput"></a>

```python
sftp_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_access_key_enabled_input`<sup>Optional</sup> <a name="shared_access_key_enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabledInput"></a>

```python
shared_access_key_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `share_properties_input`<sup>Optional</sup> <a name="share_properties_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharePropertiesInput"></a>

```python
share_properties_input: StorageAccountShareProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

---

##### `static_website_input`<sup>Optional</sup> <a name="static_website_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.staticWebsiteInput"></a>

```python
static_website_input: StorageAccountStaticWebsite
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

---

##### `table_encryption_key_type_input`<sup>Optional</sup> <a name="table_encryption_key_type_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyTypeInput"></a>

```python
table_encryption_key_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StorageAccountTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>]

---

##### `access_tier`<sup>Required</sup> <a name="access_tier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accessTier"></a>

```python
access_tier: str
```

- *Type:* str

---

##### `account_kind`<sup>Required</sup> <a name="account_kind" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountKind"></a>

```python
account_kind: str
```

- *Type:* str

---

##### `account_replication_type`<sup>Required</sup> <a name="account_replication_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountReplicationType"></a>

```python
account_replication_type: str
```

- *Type:* str

---

##### `account_tier`<sup>Required</sup> <a name="account_tier" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.accountTier"></a>

```python
account_tier: str
```

- *Type:* str

---

##### `allowed_copy_scope`<sup>Required</sup> <a name="allowed_copy_scope" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowedCopyScope"></a>

```python
allowed_copy_scope: str
```

- *Type:* str

---

##### `allow_nested_items_to_be_public`<sup>Required</sup> <a name="allow_nested_items_to_be_public" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.allowNestedItemsToBePublic"></a>

```python
allow_nested_items_to_be_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cross_tenant_replication_enabled`<sup>Required</sup> <a name="cross_tenant_replication_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.crossTenantReplicationEnabled"></a>

```python
cross_tenant_replication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_to_oauth_authentication`<sup>Required</sup> <a name="default_to_oauth_authentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.defaultToOauthAuthentication"></a>

```python
default_to_oauth_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dns_endpoint_type`<sup>Required</sup> <a name="dns_endpoint_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.dnsEndpointType"></a>

```python
dns_endpoint_type: str
```

- *Type:* str

---

##### `edge_zone`<sup>Required</sup> <a name="edge_zone" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.edgeZone"></a>

```python
edge_zone: str
```

- *Type:* str

---

##### `enable_https_traffic_only`<sup>Required</sup> <a name="enable_https_traffic_only" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.enableHttpsTrafficOnly"></a>

```python
enable_https_traffic_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_encryption_enabled`<sup>Required</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.infrastructureEncryptionEnabled"></a>

```python
infrastructure_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_hns_enabled`<sup>Required</sup> <a name="is_hns_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.isHnsEnabled"></a>

```python
is_hns_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `large_file_share_enabled`<sup>Required</sup> <a name="large_file_share_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.largeFileShareEnabled"></a>

```python
large_file_share_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `local_user_enabled`<sup>Required</sup> <a name="local_user_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.localUserEnabled"></a>

```python
local_user_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `min_tls_version`<sup>Required</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nfsv3_enabled`<sup>Required</sup> <a name="nfsv3_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.nfsv3Enabled"></a>

```python
nfsv3_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `queue_encryption_key_type`<sup>Required</sup> <a name="queue_encryption_key_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.queueEncryptionKeyType"></a>

```python
queue_encryption_key_type: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sftp_enabled`<sup>Required</sup> <a name="sftp_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sftpEnabled"></a>

```python
sftp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_access_key_enabled`<sup>Required</sup> <a name="shared_access_key_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.sharedAccessKeyEnabled"></a>

```python
shared_access_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `table_encryption_key_type`<sup>Required</sup> <a name="table_encryption_key_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tableEncryptionKeyType"></a>

```python
table_encryption_key_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageAccount.StorageAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountAzureFilesAuthentication <a name="StorageAccountAzureFilesAuthentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountAzureFilesAuthentication(
  directory_type: str,
  active_directory: StorageAccountAzureFilesAuthenticationActiveDirectory = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.directoryType">directory_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#directory_type StorageAccount#directory_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | active_directory block. |

---

##### `directory_type`<sup>Required</sup> <a name="directory_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.directoryType"></a>

```python
directory_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#directory_type StorageAccount#directory_type}.

---

##### `active_directory`<sup>Optional</sup> <a name="active_directory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication.property.activeDirectory"></a>

```python
active_directory: StorageAccountAzureFilesAuthenticationActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#active_directory StorageAccount#active_directory}

---

### StorageAccountAzureFilesAuthenticationActiveDirectory <a name="StorageAccountAzureFilesAuthenticationActiveDirectory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory(
  domain_guid: str,
  domain_name: str,
  domain_sid: str = None,
  forest_name: str = None,
  netbios_domain_name: str = None,
  storage_sid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainGuid">domain_guid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#domain_guid StorageAccount#domain_guid}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#domain_name StorageAccount#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainSid">domain_sid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#domain_sid StorageAccount#domain_sid}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.forestName">forest_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#forest_name StorageAccount#forest_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.netbiosDomainName">netbios_domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#netbios_domain_name StorageAccount#netbios_domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.storageSid">storage_sid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#storage_sid StorageAccount#storage_sid}. |

---

##### `domain_guid`<sup>Required</sup> <a name="domain_guid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainGuid"></a>

```python
domain_guid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#domain_guid StorageAccount#domain_guid}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#domain_name StorageAccount#domain_name}.

---

##### `domain_sid`<sup>Optional</sup> <a name="domain_sid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.domainSid"></a>

```python
domain_sid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#domain_sid StorageAccount#domain_sid}.

---

##### `forest_name`<sup>Optional</sup> <a name="forest_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.forestName"></a>

```python
forest_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#forest_name StorageAccount#forest_name}.

---

##### `netbios_domain_name`<sup>Optional</sup> <a name="netbios_domain_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.netbiosDomainName"></a>

```python
netbios_domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#netbios_domain_name StorageAccount#netbios_domain_name}.

---

##### `storage_sid`<sup>Optional</sup> <a name="storage_sid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory.property.storageSid"></a>

```python
storage_sid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#storage_sid StorageAccount#storage_sid}.

---

### StorageAccountBlobProperties <a name="StorageAccountBlobProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountBlobProperties(
  change_feed_enabled: typing.Union[bool, IResolvable] = None,
  change_feed_retention_in_days: typing.Union[int, float] = None,
  container_delete_retention_policy: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy = None,
  cors_rule: typing.Union[IResolvable, typing.List[StorageAccountBlobPropertiesCorsRule]] = None,
  default_service_version: str = None,
  delete_retention_policy: StorageAccountBlobPropertiesDeleteRetentionPolicy = None,
  last_access_time_enabled: typing.Union[bool, IResolvable] = None,
  restore_policy: StorageAccountBlobPropertiesRestorePolicy = None,
  versioning_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedEnabled">change_feed_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#change_feed_enabled StorageAccount#change_feed_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedRetentionInDays">change_feed_retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#change_feed_retention_in_days StorageAccount#change_feed_retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.containerDeleteRetentionPolicy">container_delete_retention_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a></code> | container_delete_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.corsRule">cors_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>]]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.defaultServiceVersion">default_service_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#default_service_version StorageAccount#default_service_version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.deleteRetentionPolicy">delete_retention_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a></code> | delete_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.lastAccessTimeEnabled">last_access_time_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#last_access_time_enabled StorageAccount#last_access_time_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.versioningEnabled">versioning_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#versioning_enabled StorageAccount#versioning_enabled}. |

---

##### `change_feed_enabled`<sup>Optional</sup> <a name="change_feed_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedEnabled"></a>

```python
change_feed_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#change_feed_enabled StorageAccount#change_feed_enabled}.

---

##### `change_feed_retention_in_days`<sup>Optional</sup> <a name="change_feed_retention_in_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.changeFeedRetentionInDays"></a>

```python
change_feed_retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#change_feed_retention_in_days StorageAccount#change_feed_retention_in_days}.

---

##### `container_delete_retention_policy`<sup>Optional</sup> <a name="container_delete_retention_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.containerDeleteRetentionPolicy"></a>

```python
container_delete_retention_policy: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

container_delete_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#container_delete_retention_policy StorageAccount#container_delete_retention_policy}

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.corsRule"></a>

```python
cors_rule: typing.Union[IResolvable, typing.List[StorageAccountBlobPropertiesCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

##### `default_service_version`<sup>Optional</sup> <a name="default_service_version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.defaultServiceVersion"></a>

```python
default_service_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#default_service_version StorageAccount#default_service_version}.

---

##### `delete_retention_policy`<sup>Optional</sup> <a name="delete_retention_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.deleteRetentionPolicy"></a>

```python
delete_retention_policy: StorageAccountBlobPropertiesDeleteRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

delete_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#delete_retention_policy StorageAccount#delete_retention_policy}

---

##### `last_access_time_enabled`<sup>Optional</sup> <a name="last_access_time_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.lastAccessTimeEnabled"></a>

```python
last_access_time_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#last_access_time_enabled StorageAccount#last_access_time_enabled}.

---

##### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.restorePolicy"></a>

```python
restore_policy: StorageAccountBlobPropertiesRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#restore_policy StorageAccount#restore_policy}

---

##### `versioning_enabled`<sup>Optional</sup> <a name="versioning_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties.property.versioningEnabled"></a>

```python
versioning_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#versioning_enabled StorageAccount#versioning_enabled}.

---

### StorageAccountBlobPropertiesContainerDeleteRetentionPolicy <a name="StorageAccountBlobPropertiesContainerDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy(
  days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountBlobPropertiesCorsRule <a name="StorageAccountBlobPropertiesCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountBlobPropertiesCorsRule(
  allowed_headers: typing.List[str],
  allowed_methods: typing.List[str],
  allowed_origins: typing.List[str],
  exposed_headers: typing.List[str],
  max_age_in_seconds: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}. |

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}.

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}.

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}.

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}.

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}.

---

### StorageAccountBlobPropertiesDeleteRetentionPolicy <a name="StorageAccountBlobPropertiesDeleteRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy(
  days: typing.Union[int, float] = None,
  permanent_delete_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#days StorageAccount#days}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.property.permanentDeleteEnabled">permanent_delete_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#permanent_delete_enabled StorageAccount#permanent_delete_enabled}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#days StorageAccount#days}.

---

##### `permanent_delete_enabled`<sup>Optional</sup> <a name="permanent_delete_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy.property.permanentDeleteEnabled"></a>

```python
permanent_delete_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#permanent_delete_enabled StorageAccount#permanent_delete_enabled}.

---

### StorageAccountBlobPropertiesRestorePolicy <a name="StorageAccountBlobPropertiesRestorePolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountBlobPropertiesRestorePolicy(
  days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountConfig <a name="StorageAccountConfig" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_replication_type: str,
  account_tier: str,
  location: str,
  name: str,
  resource_group_name: str,
  access_tier: str = None,
  account_kind: str = None,
  allowed_copy_scope: str = None,
  allow_nested_items_to_be_public: typing.Union[bool, IResolvable] = None,
  azure_files_authentication: StorageAccountAzureFilesAuthentication = None,
  blob_properties: StorageAccountBlobProperties = None,
  cross_tenant_replication_enabled: typing.Union[bool, IResolvable] = None,
  custom_domain: StorageAccountCustomDomain = None,
  customer_managed_key: StorageAccountCustomerManagedKey = None,
  default_to_oauth_authentication: typing.Union[bool, IResolvable] = None,
  dns_endpoint_type: str = None,
  edge_zone: str = None,
  enable_https_traffic_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: StorageAccountIdentity = None,
  immutability_policy: StorageAccountImmutabilityPolicy = None,
  infrastructure_encryption_enabled: typing.Union[bool, IResolvable] = None,
  is_hns_enabled: typing.Union[bool, IResolvable] = None,
  large_file_share_enabled: typing.Union[bool, IResolvable] = None,
  local_user_enabled: typing.Union[bool, IResolvable] = None,
  min_tls_version: str = None,
  network_rules: StorageAccountNetworkRules = None,
  nfsv3_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  queue_encryption_key_type: str = None,
  queue_properties: StorageAccountQueueProperties = None,
  routing: StorageAccountRouting = None,
  sas_policy: StorageAccountSasPolicy = None,
  sftp_enabled: typing.Union[bool, IResolvable] = None,
  shared_access_key_enabled: typing.Union[bool, IResolvable] = None,
  share_properties: StorageAccountShareProperties = None,
  static_website: StorageAccountStaticWebsite = None,
  table_encryption_key_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: StorageAccountTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountReplicationType">account_replication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountTier">account_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#location StorageAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#name StorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accessTier">access_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#access_tier StorageAccount#access_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountKind">account_kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowedCopyScope">allowed_copy_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_copy_scope StorageAccount#allowed_copy_scope}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowNestedItemsToBePublic">allow_nested_items_to_be_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allow_nested_items_to_be_public StorageAccount#allow_nested_items_to_be_public}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.azureFilesAuthentication">azure_files_authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | azure_files_authentication block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.blobProperties">blob_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | blob_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.crossTenantReplicationEnabled">cross_tenant_replication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#cross_tenant_replication_enabled StorageAccount#cross_tenant_replication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customDomain">custom_domain</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customerManagedKey">customer_managed_key</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.defaultToOauthAuthentication">default_to_oauth_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#default_to_oauth_authentication StorageAccount#default_to_oauth_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.dnsEndpointType">dns_endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#dns_endpoint_type StorageAccount#dns_endpoint_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.edgeZone">edge_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#edge_zone StorageAccount#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.enableHttpsTrafficOnly">enable_https_traffic_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#id StorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.immutabilityPolicy">immutability_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | immutability_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.isHnsEnabled">is_hns_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#is_hns_enabled StorageAccount#is_hns_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.largeFileShareEnabled">large_file_share_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#large_file_share_enabled StorageAccount#large_file_share_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.localUserEnabled">local_user_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#local_user_enabled StorageAccount#local_user_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#min_tls_version StorageAccount#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.networkRules">network_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | network_rules block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.nfsv3Enabled">nfsv3_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#nfsv3_enabled StorageAccount#nfsv3_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#public_network_access_enabled StorageAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueEncryptionKeyType">queue_encryption_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#queue_encryption_key_type StorageAccount#queue_encryption_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueProperties">queue_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | queue_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sasPolicy">sas_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | sas_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sftpEnabled">sftp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#sftp_enabled StorageAccount#sftp_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sharedAccessKeyEnabled">shared_access_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#shared_access_key_enabled StorageAccount#shared_access_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.shareProperties">share_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | share_properties block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.staticWebsite">static_website</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | static_website block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tableEncryptionKeyType">table_encryption_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#table_encryption_key_type StorageAccount#table_encryption_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#tags StorageAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_replication_type`<sup>Required</sup> <a name="account_replication_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountReplicationType"></a>

```python
account_replication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#account_replication_type StorageAccount#account_replication_type}.

---

##### `account_tier`<sup>Required</sup> <a name="account_tier" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountTier"></a>

```python
account_tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#account_tier StorageAccount#account_tier}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#location StorageAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#name StorageAccount#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#resource_group_name StorageAccount#resource_group_name}.

---

##### `access_tier`<sup>Optional</sup> <a name="access_tier" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accessTier"></a>

```python
access_tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#access_tier StorageAccount#access_tier}.

---

##### `account_kind`<sup>Optional</sup> <a name="account_kind" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.accountKind"></a>

```python
account_kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#account_kind StorageAccount#account_kind}.

---

##### `allowed_copy_scope`<sup>Optional</sup> <a name="allowed_copy_scope" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowedCopyScope"></a>

```python
allowed_copy_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_copy_scope StorageAccount#allowed_copy_scope}.

---

##### `allow_nested_items_to_be_public`<sup>Optional</sup> <a name="allow_nested_items_to_be_public" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.allowNestedItemsToBePublic"></a>

```python
allow_nested_items_to_be_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allow_nested_items_to_be_public StorageAccount#allow_nested_items_to_be_public}.

---

##### `azure_files_authentication`<sup>Optional</sup> <a name="azure_files_authentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.azureFilesAuthentication"></a>

```python
azure_files_authentication: StorageAccountAzureFilesAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

azure_files_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#azure_files_authentication StorageAccount#azure_files_authentication}

---

##### `blob_properties`<sup>Optional</sup> <a name="blob_properties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.blobProperties"></a>

```python
blob_properties: StorageAccountBlobProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

blob_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#blob_properties StorageAccount#blob_properties}

---

##### `cross_tenant_replication_enabled`<sup>Optional</sup> <a name="cross_tenant_replication_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.crossTenantReplicationEnabled"></a>

```python
cross_tenant_replication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#cross_tenant_replication_enabled StorageAccount#cross_tenant_replication_enabled}.

---

##### `custom_domain`<sup>Optional</sup> <a name="custom_domain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customDomain"></a>

```python
custom_domain: StorageAccountCustomDomain
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#custom_domain StorageAccount#custom_domain}

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.customerManagedKey"></a>

```python
customer_managed_key: StorageAccountCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#customer_managed_key StorageAccount#customer_managed_key}

---

##### `default_to_oauth_authentication`<sup>Optional</sup> <a name="default_to_oauth_authentication" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.defaultToOauthAuthentication"></a>

```python
default_to_oauth_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#default_to_oauth_authentication StorageAccount#default_to_oauth_authentication}.

---

##### `dns_endpoint_type`<sup>Optional</sup> <a name="dns_endpoint_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.dnsEndpointType"></a>

```python
dns_endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#dns_endpoint_type StorageAccount#dns_endpoint_type}.

---

##### `edge_zone`<sup>Optional</sup> <a name="edge_zone" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.edgeZone"></a>

```python
edge_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#edge_zone StorageAccount#edge_zone}.

---

##### `enable_https_traffic_only`<sup>Optional</sup> <a name="enable_https_traffic_only" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.enableHttpsTrafficOnly"></a>

```python
enable_https_traffic_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#enable_https_traffic_only StorageAccount#enable_https_traffic_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#id StorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.identity"></a>

```python
identity: StorageAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#identity StorageAccount#identity}

---

##### `immutability_policy`<sup>Optional</sup> <a name="immutability_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.immutabilityPolicy"></a>

```python
immutability_policy: StorageAccountImmutabilityPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

immutability_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#immutability_policy StorageAccount#immutability_policy}

---

##### `infrastructure_encryption_enabled`<sup>Optional</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.infrastructureEncryptionEnabled"></a>

```python
infrastructure_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#infrastructure_encryption_enabled StorageAccount#infrastructure_encryption_enabled}.

---

##### `is_hns_enabled`<sup>Optional</sup> <a name="is_hns_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.isHnsEnabled"></a>

```python
is_hns_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#is_hns_enabled StorageAccount#is_hns_enabled}.

---

##### `large_file_share_enabled`<sup>Optional</sup> <a name="large_file_share_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.largeFileShareEnabled"></a>

```python
large_file_share_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#large_file_share_enabled StorageAccount#large_file_share_enabled}.

---

##### `local_user_enabled`<sup>Optional</sup> <a name="local_user_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.localUserEnabled"></a>

```python
local_user_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#local_user_enabled StorageAccount#local_user_enabled}.

---

##### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#min_tls_version StorageAccount#min_tls_version}.

---

##### `network_rules`<sup>Optional</sup> <a name="network_rules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.networkRules"></a>

```python
network_rules: StorageAccountNetworkRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

network_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#network_rules StorageAccount#network_rules}

---

##### `nfsv3_enabled`<sup>Optional</sup> <a name="nfsv3_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.nfsv3Enabled"></a>

```python
nfsv3_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#nfsv3_enabled StorageAccount#nfsv3_enabled}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#public_network_access_enabled StorageAccount#public_network_access_enabled}.

---

##### `queue_encryption_key_type`<sup>Optional</sup> <a name="queue_encryption_key_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueEncryptionKeyType"></a>

```python
queue_encryption_key_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#queue_encryption_key_type StorageAccount#queue_encryption_key_type}.

---

##### `queue_properties`<sup>Optional</sup> <a name="queue_properties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.queueProperties"></a>

```python
queue_properties: StorageAccountQueueProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

queue_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#queue_properties StorageAccount#queue_properties}

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.routing"></a>

```python
routing: StorageAccountRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#routing StorageAccount#routing}

---

##### `sas_policy`<sup>Optional</sup> <a name="sas_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sasPolicy"></a>

```python
sas_policy: StorageAccountSasPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

sas_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#sas_policy StorageAccount#sas_policy}

---

##### `sftp_enabled`<sup>Optional</sup> <a name="sftp_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sftpEnabled"></a>

```python
sftp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#sftp_enabled StorageAccount#sftp_enabled}.

---

##### `shared_access_key_enabled`<sup>Optional</sup> <a name="shared_access_key_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.sharedAccessKeyEnabled"></a>

```python
shared_access_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#shared_access_key_enabled StorageAccount#shared_access_key_enabled}.

---

##### `share_properties`<sup>Optional</sup> <a name="share_properties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.shareProperties"></a>

```python
share_properties: StorageAccountShareProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

share_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#share_properties StorageAccount#share_properties}

---

##### `static_website`<sup>Optional</sup> <a name="static_website" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.staticWebsite"></a>

```python
static_website: StorageAccountStaticWebsite
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

static_website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#static_website StorageAccount#static_website}

---

##### `table_encryption_key_type`<sup>Optional</sup> <a name="table_encryption_key_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tableEncryptionKeyType"></a>

```python
table_encryption_key_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#table_encryption_key_type StorageAccount#table_encryption_key_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#tags StorageAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccountConfig.property.timeouts"></a>

```python
timeouts: StorageAccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#timeouts StorageAccount#timeouts}

---

### StorageAccountCustomDomain <a name="StorageAccountCustomDomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountCustomDomain(
  name: str,
  use_subdomain: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#name StorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.useSubdomain">use_subdomain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#use_subdomain StorageAccount#use_subdomain}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#name StorageAccount#name}.

---

##### `use_subdomain`<sup>Optional</sup> <a name="use_subdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain.property.useSubdomain"></a>

```python
use_subdomain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#use_subdomain StorageAccount#use_subdomain}.

---

### StorageAccountCustomerManagedKey <a name="StorageAccountCustomerManagedKey" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountCustomerManagedKey(
  user_assigned_identity_id: str,
  key_vault_key_id: str = None,
  managed_hsm_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#user_assigned_identity_id StorageAccount#user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#key_vault_key_id StorageAccount#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.managedHsmKeyId">managed_hsm_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#managed_hsm_key_id StorageAccount#managed_hsm_key_id}. |

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#user_assigned_identity_id StorageAccount#user_assigned_identity_id}.

---

##### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#key_vault_key_id StorageAccount#key_vault_key_id}.

---

##### `managed_hsm_key_id`<sup>Optional</sup> <a name="managed_hsm_key_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey.property.managedHsmKeyId"></a>

```python
managed_hsm_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#managed_hsm_key_id StorageAccount#managed_hsm_key_id}.

---

### StorageAccountIdentity <a name="StorageAccountIdentity" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#type StorageAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#identity_ids StorageAccount#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#type StorageAccount#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#identity_ids StorageAccount#identity_ids}.

---

### StorageAccountImmutabilityPolicy <a name="StorageAccountImmutabilityPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountImmutabilityPolicy(
  allow_protected_append_writes: typing.Union[bool, IResolvable],
  period_since_creation_in_days: typing.Union[int, float],
  state: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.allowProtectedAppendWrites">allow_protected_append_writes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allow_protected_append_writes StorageAccount#allow_protected_append_writes}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.periodSinceCreationInDays">period_since_creation_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#period_since_creation_in_days StorageAccount#period_since_creation_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#state StorageAccount#state}. |

---

##### `allow_protected_append_writes`<sup>Required</sup> <a name="allow_protected_append_writes" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.allowProtectedAppendWrites"></a>

```python
allow_protected_append_writes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allow_protected_append_writes StorageAccount#allow_protected_append_writes}.

---

##### `period_since_creation_in_days`<sup>Required</sup> <a name="period_since_creation_in_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.periodSinceCreationInDays"></a>

```python
period_since_creation_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#period_since_creation_in_days StorageAccount#period_since_creation_in_days}.

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#state StorageAccount#state}.

---

### StorageAccountNetworkRules <a name="StorageAccountNetworkRules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountNetworkRules(
  default_action: str,
  bypass: typing.List[str] = None,
  ip_rules: typing.List[str] = None,
  private_link_access: typing.Union[IResolvable, typing.List[StorageAccountNetworkRulesPrivateLinkAccess]] = None,
  virtual_network_subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#default_action StorageAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.bypass">bypass</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#bypass StorageAccount#bypass}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.ipRules">ip_rules</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#ip_rules StorageAccount#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.privateLinkAccess">private_link_access</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>]]</code> | private_link_access block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.virtualNetworkSubnetIds">virtual_network_subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#virtual_network_subnet_ids StorageAccount#virtual_network_subnet_ids}. |

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#default_action StorageAccount#default_action}.

---

##### `bypass`<sup>Optional</sup> <a name="bypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.bypass"></a>

```python
bypass: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#bypass StorageAccount#bypass}.

---

##### `ip_rules`<sup>Optional</sup> <a name="ip_rules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.ipRules"></a>

```python
ip_rules: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#ip_rules StorageAccount#ip_rules}.

---

##### `private_link_access`<sup>Optional</sup> <a name="private_link_access" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.privateLinkAccess"></a>

```python
private_link_access: typing.Union[IResolvable, typing.List[StorageAccountNetworkRulesPrivateLinkAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>]]

private_link_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#private_link_access StorageAccount#private_link_access}

---

##### `virtual_network_subnet_ids`<sup>Optional</sup> <a name="virtual_network_subnet_ids" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules.property.virtualNetworkSubnetIds"></a>

```python
virtual_network_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#virtual_network_subnet_ids StorageAccount#virtual_network_subnet_ids}.

---

### StorageAccountNetworkRulesPrivateLinkAccess <a name="StorageAccountNetworkRulesPrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountNetworkRulesPrivateLinkAccess(
  endpoint_resource_id: str,
  endpoint_tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointResourceId">endpoint_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#endpoint_resource_id StorageAccount#endpoint_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointTenantId">endpoint_tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#endpoint_tenant_id StorageAccount#endpoint_tenant_id}. |

---

##### `endpoint_resource_id`<sup>Required</sup> <a name="endpoint_resource_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointResourceId"></a>

```python
endpoint_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#endpoint_resource_id StorageAccount#endpoint_resource_id}.

---

##### `endpoint_tenant_id`<sup>Optional</sup> <a name="endpoint_tenant_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess.property.endpointTenantId"></a>

```python
endpoint_tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#endpoint_tenant_id StorageAccount#endpoint_tenant_id}.

---

### StorageAccountQueueProperties <a name="StorageAccountQueueProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountQueueProperties(
  cors_rule: typing.Union[IResolvable, typing.List[StorageAccountQueuePropertiesCorsRule]] = None,
  hour_metrics: StorageAccountQueuePropertiesHourMetrics = None,
  logging: StorageAccountQueuePropertiesLogging = None,
  minute_metrics: StorageAccountQueuePropertiesMinuteMetrics = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.corsRule">cors_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.hourMetrics">hour_metrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | hour_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.minuteMetrics">minute_metrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | minute_metrics block. |

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.corsRule"></a>

```python
cors_rule: typing.Union[IResolvable, typing.List[StorageAccountQueuePropertiesCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

##### `hour_metrics`<sup>Optional</sup> <a name="hour_metrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.hourMetrics"></a>

```python
hour_metrics: StorageAccountQueuePropertiesHourMetrics
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#hour_metrics StorageAccount#hour_metrics}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.logging"></a>

```python
logging: StorageAccountQueuePropertiesLogging
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#logging StorageAccount#logging}

---

##### `minute_metrics`<sup>Optional</sup> <a name="minute_metrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties.property.minuteMetrics"></a>

```python
minute_metrics: StorageAccountQueuePropertiesMinuteMetrics
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#minute_metrics StorageAccount#minute_metrics}

---

### StorageAccountQueuePropertiesCorsRule <a name="StorageAccountQueuePropertiesCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountQueuePropertiesCorsRule(
  allowed_headers: typing.List[str],
  allowed_methods: typing.List[str],
  allowed_origins: typing.List[str],
  exposed_headers: typing.List[str],
  max_age_in_seconds: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}. |

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}.

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}.

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}.

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}.

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}.

---

### StorageAccountQueuePropertiesHourMetrics <a name="StorageAccountQueuePropertiesHourMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountQueuePropertiesHourMetrics(
  enabled: typing.Union[bool, IResolvable],
  version: str,
  include_apis: typing.Union[bool, IResolvable] = None,
  retention_policy_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#enabled StorageAccount#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#version StorageAccount#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.includeApis">include_apis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#enabled StorageAccount#enabled}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#version StorageAccount#version}.

---

##### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.includeApis"></a>

```python
include_apis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}.

---

##### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

### StorageAccountQueuePropertiesLogging <a name="StorageAccountQueuePropertiesLogging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountQueuePropertiesLogging(
  delete: typing.Union[bool, IResolvable],
  read: typing.Union[bool, IResolvable],
  version: str,
  write: typing.Union[bool, IResolvable],
  retention_policy_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.delete">delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#delete StorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.read">read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#read StorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#version StorageAccount#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.write">write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#write StorageAccount#write}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}. |

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.delete"></a>

```python
delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#delete StorageAccount#delete}.

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.read"></a>

```python
read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#read StorageAccount#read}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#version StorageAccount#version}.

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.write"></a>

```python
write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#write StorageAccount#write}.

---

##### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

### StorageAccountQueuePropertiesMinuteMetrics <a name="StorageAccountQueuePropertiesMinuteMetrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountQueuePropertiesMinuteMetrics(
  enabled: typing.Union[bool, IResolvable],
  version: str,
  include_apis: typing.Union[bool, IResolvable] = None,
  retention_policy_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#enabled StorageAccount#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#version StorageAccount#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.includeApis">include_apis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#enabled StorageAccount#enabled}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#version StorageAccount#version}.

---

##### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.includeApis"></a>

```python
include_apis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}.

---

##### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

### StorageAccountRouting <a name="StorageAccountRouting" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountRouting(
  choice: str = None,
  publish_internet_endpoints: typing.Union[bool, IResolvable] = None,
  publish_microsoft_endpoints: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.choice">choice</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#choice StorageAccount#choice}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishInternetEndpoints">publish_internet_endpoints</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#publish_internet_endpoints StorageAccount#publish_internet_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishMicrosoftEndpoints">publish_microsoft_endpoints</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#publish_microsoft_endpoints StorageAccount#publish_microsoft_endpoints}. |

---

##### `choice`<sup>Optional</sup> <a name="choice" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.choice"></a>

```python
choice: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#choice StorageAccount#choice}.

---

##### `publish_internet_endpoints`<sup>Optional</sup> <a name="publish_internet_endpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishInternetEndpoints"></a>

```python
publish_internet_endpoints: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#publish_internet_endpoints StorageAccount#publish_internet_endpoints}.

---

##### `publish_microsoft_endpoints`<sup>Optional</sup> <a name="publish_microsoft_endpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRouting.property.publishMicrosoftEndpoints"></a>

```python
publish_microsoft_endpoints: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#publish_microsoft_endpoints StorageAccount#publish_microsoft_endpoints}.

---

### StorageAccountSasPolicy <a name="StorageAccountSasPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountSasPolicy(
  expiration_period: str,
  expiration_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationPeriod">expiration_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#expiration_period StorageAccount#expiration_period}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationAction">expiration_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#expiration_action StorageAccount#expiration_action}. |

---

##### `expiration_period`<sup>Required</sup> <a name="expiration_period" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationPeriod"></a>

```python
expiration_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#expiration_period StorageAccount#expiration_period}.

---

##### `expiration_action`<sup>Optional</sup> <a name="expiration_action" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy.property.expirationAction"></a>

```python
expiration_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#expiration_action StorageAccount#expiration_action}.

---

### StorageAccountShareProperties <a name="StorageAccountShareProperties" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountShareProperties(
  cors_rule: typing.Union[IResolvable, typing.List[StorageAccountSharePropertiesCorsRule]] = None,
  retention_policy: StorageAccountSharePropertiesRetentionPolicy = None,
  smb: StorageAccountSharePropertiesSmb = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.corsRule">cors_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>]]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.smb">smb</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a></code> | smb block. |

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.corsRule"></a>

```python
cors_rule: typing.Union[IResolvable, typing.List[StorageAccountSharePropertiesCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#cors_rule StorageAccount#cors_rule}

---

##### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.retentionPolicy"></a>

```python
retention_policy: StorageAccountSharePropertiesRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#retention_policy StorageAccount#retention_policy}

---

##### `smb`<sup>Optional</sup> <a name="smb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties.property.smb"></a>

```python
smb: StorageAccountSharePropertiesSmb
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

smb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#smb StorageAccount#smb}

---

### StorageAccountSharePropertiesCorsRule <a name="StorageAccountSharePropertiesCorsRule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountSharePropertiesCorsRule(
  allowed_headers: typing.List[str],
  allowed_methods: typing.List[str],
  allowed_origins: typing.List[str],
  exposed_headers: typing.List[str],
  max_age_in_seconds: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}. |

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_headers StorageAccount#allowed_headers}.

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_methods StorageAccount#allowed_methods}.

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#allowed_origins StorageAccount#allowed_origins}.

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#exposed_headers StorageAccount#exposed_headers}.

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#max_age_in_seconds StorageAccount#max_age_in_seconds}.

---

### StorageAccountSharePropertiesRetentionPolicy <a name="StorageAccountSharePropertiesRetentionPolicy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountSharePropertiesRetentionPolicy(
  days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#days StorageAccount#days}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#days StorageAccount#days}.

---

### StorageAccountSharePropertiesSmb <a name="StorageAccountSharePropertiesSmb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountSharePropertiesSmb(
  authentication_types: typing.List[str] = None,
  channel_encryption_type: typing.List[str] = None,
  kerberos_ticket_encryption_type: typing.List[str] = None,
  multichannel_enabled: typing.Union[bool, IResolvable] = None,
  versions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.authenticationTypes">authentication_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#authentication_types StorageAccount#authentication_types}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.channelEncryptionType">channel_encryption_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#channel_encryption_type StorageAccount#channel_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.kerberosTicketEncryptionType">kerberos_ticket_encryption_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#kerberos_ticket_encryption_type StorageAccount#kerberos_ticket_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.multichannelEnabled">multichannel_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#multichannel_enabled StorageAccount#multichannel_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.versions">versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#versions StorageAccount#versions}. |

---

##### `authentication_types`<sup>Optional</sup> <a name="authentication_types" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.authenticationTypes"></a>

```python
authentication_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#authentication_types StorageAccount#authentication_types}.

---

##### `channel_encryption_type`<sup>Optional</sup> <a name="channel_encryption_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.channelEncryptionType"></a>

```python
channel_encryption_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#channel_encryption_type StorageAccount#channel_encryption_type}.

---

##### `kerberos_ticket_encryption_type`<sup>Optional</sup> <a name="kerberos_ticket_encryption_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.kerberosTicketEncryptionType"></a>

```python
kerberos_ticket_encryption_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#kerberos_ticket_encryption_type StorageAccount#kerberos_ticket_encryption_type}.

---

##### `multichannel_enabled`<sup>Optional</sup> <a name="multichannel_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.multichannelEnabled"></a>

```python
multichannel_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#multichannel_enabled StorageAccount#multichannel_enabled}.

---

##### `versions`<sup>Optional</sup> <a name="versions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb.property.versions"></a>

```python
versions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#versions StorageAccount#versions}.

---

### StorageAccountStaticWebsite <a name="StorageAccountStaticWebsite" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountStaticWebsite(
  error404_document: str = None,
  index_document: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.error404Document">error404_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#error_404_document StorageAccount#error_404_document}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.indexDocument">index_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#index_document StorageAccount#index_document}. |

---

##### `error404_document`<sup>Optional</sup> <a name="error404_document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.error404Document"></a>

```python
error404_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#error_404_document StorageAccount#error_404_document}.

---

##### `index_document`<sup>Optional</sup> <a name="index_document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite.property.indexDocument"></a>

```python
index_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#index_document StorageAccount#index_document}.

---

### StorageAccountTimeouts <a name="StorageAccountTimeouts" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#create StorageAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#delete StorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#read StorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#update StorageAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#create StorageAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#delete StorageAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#read StorageAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#update StorageAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference <a name="StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetDomainSid">reset_domain_sid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetForestName">reset_forest_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetNetbiosDomainName">reset_netbios_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetStorageSid">reset_storage_sid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain_sid` <a name="reset_domain_sid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetDomainSid"></a>

```python
def reset_domain_sid() -> None
```

##### `reset_forest_name` <a name="reset_forest_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetForestName"></a>

```python
def reset_forest_name() -> None
```

##### `reset_netbios_domain_name` <a name="reset_netbios_domain_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetNetbiosDomainName"></a>

```python
def reset_netbios_domain_name() -> None
```

##### `reset_storage_sid` <a name="reset_storage_sid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resetStorageSid"></a>

```python
def reset_storage_sid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuidInput">domain_guid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSidInput">domain_sid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestNameInput">forest_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainNameInput">netbios_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSidInput">storage_sid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuid">domain_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSid">domain_sid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestName">forest_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainName">netbios_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSid">storage_sid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_guid_input`<sup>Optional</sup> <a name="domain_guid_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuidInput"></a>

```python
domain_guid_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `domain_sid_input`<sup>Optional</sup> <a name="domain_sid_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSidInput"></a>

```python
domain_sid_input: str
```

- *Type:* str

---

##### `forest_name_input`<sup>Optional</sup> <a name="forest_name_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestNameInput"></a>

```python
forest_name_input: str
```

- *Type:* str

---

##### `netbios_domain_name_input`<sup>Optional</sup> <a name="netbios_domain_name_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainNameInput"></a>

```python
netbios_domain_name_input: str
```

- *Type:* str

---

##### `storage_sid_input`<sup>Optional</sup> <a name="storage_sid_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSidInput"></a>

```python
storage_sid_input: str
```

- *Type:* str

---

##### `domain_guid`<sup>Required</sup> <a name="domain_guid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuid"></a>

```python
domain_guid: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `domain_sid`<sup>Required</sup> <a name="domain_sid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSid"></a>

```python
domain_sid: str
```

- *Type:* str

---

##### `forest_name`<sup>Required</sup> <a name="forest_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestName"></a>

```python
forest_name: str
```

- *Type:* str

---

##### `netbios_domain_name`<sup>Required</sup> <a name="netbios_domain_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainName"></a>

```python
netbios_domain_name: str
```

- *Type:* str

---

##### `storage_sid`<sup>Required</sup> <a name="storage_sid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSid"></a>

```python
storage_sid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountAzureFilesAuthenticationActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

---


### StorageAccountAzureFilesAuthenticationOutputReference <a name="StorageAccountAzureFilesAuthenticationOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountAzureFilesAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory">put_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resetActiveDirectory">reset_active_directory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_active_directory` <a name="put_active_directory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory"></a>

```python
def put_active_directory(
  domain_guid: str,
  domain_name: str,
  domain_sid: str = None,
  forest_name: str = None,
  netbios_domain_name: str = None,
  storage_sid: str = None
) -> None
```

###### `domain_guid`<sup>Required</sup> <a name="domain_guid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory.parameter.domainGuid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#domain_guid StorageAccount#domain_guid}.

---

###### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#domain_name StorageAccount#domain_name}.

---

###### `domain_sid`<sup>Optional</sup> <a name="domain_sid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory.parameter.domainSid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#domain_sid StorageAccount#domain_sid}.

---

###### `forest_name`<sup>Optional</sup> <a name="forest_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory.parameter.forestName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#forest_name StorageAccount#forest_name}.

---

###### `netbios_domain_name`<sup>Optional</sup> <a name="netbios_domain_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory.parameter.netbiosDomainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#netbios_domain_name StorageAccount#netbios_domain_name}.

---

###### `storage_sid`<sup>Optional</sup> <a name="storage_sid" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.putActiveDirectory.parameter.storageSid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#storage_sid StorageAccount#storage_sid}.

---

##### `reset_active_directory` <a name="reset_active_directory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.resetActiveDirectory"></a>

```python
def reset_active_directory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference">StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectoryInput">active_directory_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryTypeInput">directory_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryType">directory_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory`<sup>Required</sup> <a name="active_directory" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectory"></a>

```python
active_directory: StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference">StorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference</a>

---

##### `active_directory_input`<sup>Optional</sup> <a name="active_directory_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectoryInput"></a>

```python
active_directory_input: StorageAccountAzureFilesAuthenticationActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationActiveDirectory">StorageAccountAzureFilesAuthenticationActiveDirectory</a>

---

##### `directory_type_input`<sup>Optional</sup> <a name="directory_type_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryTypeInput"></a>

```python
directory_type_input: str
```

- *Type:* str

---

##### `directory_type`<sup>Required</sup> <a name="directory_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.directoryType"></a>

```python
directory_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountAzureFilesAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication">StorageAccountAzureFilesAuthentication</a>

---


### StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference <a name="StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resetDays">reset_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.resetDays"></a>

```python
def reset_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

---


### StorageAccountBlobPropertiesCorsRuleList <a name="StorageAccountBlobPropertiesCorsRuleList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountBlobPropertiesCorsRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageAccountBlobPropertiesCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageAccountBlobPropertiesCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>]]

---


### StorageAccountBlobPropertiesCorsRuleOutputReference <a name="StorageAccountBlobPropertiesCorsRuleOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeadersInput">allowed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeadersInput">exposed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">max_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_headers_input`<sup>Optional</sup> <a name="allowed_headers_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```python
allowed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers_input`<sup>Optional</sup> <a name="exposed_headers_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```python
exposed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_in_seconds_input`<sup>Optional</sup> <a name="max_age_in_seconds_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```python
max_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageAccountBlobPropertiesCorsRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>]

---


### StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference <a name="StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resetPermanentDeleteEnabled">reset_permanent_delete_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_permanent_delete_enabled` <a name="reset_permanent_delete_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.resetPermanentDeleteEnabled"></a>

```python
def reset_permanent_delete_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.permanentDeleteEnabledInput">permanent_delete_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.permanentDeleteEnabled">permanent_delete_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permanent_delete_enabled_input`<sup>Optional</sup> <a name="permanent_delete_enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.permanentDeleteEnabledInput"></a>

```python
permanent_delete_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permanent_delete_enabled`<sup>Required</sup> <a name="permanent_delete_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.permanentDeleteEnabled"></a>

```python
permanent_delete_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountBlobPropertiesDeleteRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

---


### StorageAccountBlobPropertiesOutputReference <a name="StorageAccountBlobPropertiesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountBlobPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putContainerDeleteRetentionPolicy">put_container_delete_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putCorsRule">put_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putDeleteRetentionPolicy">put_delete_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putRestorePolicy">put_restore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedEnabled">reset_change_feed_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedRetentionInDays">reset_change_feed_retention_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetContainerDeleteRetentionPolicy">reset_container_delete_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetCorsRule">reset_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDefaultServiceVersion">reset_default_service_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDeleteRetentionPolicy">reset_delete_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetLastAccessTimeEnabled">reset_last_access_time_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetRestorePolicy">reset_restore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetVersioningEnabled">reset_versioning_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container_delete_retention_policy` <a name="put_container_delete_retention_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putContainerDeleteRetentionPolicy"></a>

```python
def put_container_delete_retention_policy(
  days: typing.Union[int, float] = None
) -> None
```

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putContainerDeleteRetentionPolicy.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#days StorageAccount#days}.

---

##### `put_cors_rule` <a name="put_cors_rule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putCorsRule"></a>

```python
def put_cors_rule(
  value: typing.Union[IResolvable, typing.List[StorageAccountBlobPropertiesCorsRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putCorsRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>]]

---

##### `put_delete_retention_policy` <a name="put_delete_retention_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putDeleteRetentionPolicy"></a>

```python
def put_delete_retention_policy(
  days: typing.Union[int, float] = None,
  permanent_delete_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putDeleteRetentionPolicy.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#days StorageAccount#days}.

---

###### `permanent_delete_enabled`<sup>Optional</sup> <a name="permanent_delete_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putDeleteRetentionPolicy.parameter.permanentDeleteEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#permanent_delete_enabled StorageAccount#permanent_delete_enabled}.

---

##### `put_restore_policy` <a name="put_restore_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putRestorePolicy"></a>

```python
def put_restore_policy(
  days: typing.Union[int, float]
) -> None
```

###### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.putRestorePolicy.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#days StorageAccount#days}.

---

##### `reset_change_feed_enabled` <a name="reset_change_feed_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedEnabled"></a>

```python
def reset_change_feed_enabled() -> None
```

##### `reset_change_feed_retention_in_days` <a name="reset_change_feed_retention_in_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetChangeFeedRetentionInDays"></a>

```python
def reset_change_feed_retention_in_days() -> None
```

##### `reset_container_delete_retention_policy` <a name="reset_container_delete_retention_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetContainerDeleteRetentionPolicy"></a>

```python
def reset_container_delete_retention_policy() -> None
```

##### `reset_cors_rule` <a name="reset_cors_rule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetCorsRule"></a>

```python
def reset_cors_rule() -> None
```

##### `reset_default_service_version` <a name="reset_default_service_version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDefaultServiceVersion"></a>

```python
def reset_default_service_version() -> None
```

##### `reset_delete_retention_policy` <a name="reset_delete_retention_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetDeleteRetentionPolicy"></a>

```python
def reset_delete_retention_policy() -> None
```

##### `reset_last_access_time_enabled` <a name="reset_last_access_time_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetLastAccessTimeEnabled"></a>

```python
def reset_last_access_time_enabled() -> None
```

##### `reset_restore_policy` <a name="reset_restore_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetRestorePolicy"></a>

```python
def reset_restore_policy() -> None
```

##### `reset_versioning_enabled` <a name="reset_versioning_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.resetVersioningEnabled"></a>

```python
def reset_versioning_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicy">container_delete_retention_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRule">cors_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList">StorageAccountBlobPropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicy">delete_retention_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference">StorageAccountBlobPropertiesRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabledInput">change_feed_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDaysInput">change_feed_retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicyInput">container_delete_retention_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRuleInput">cors_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersionInput">default_service_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicyInput">delete_retention_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabledInput">last_access_time_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicyInput">restore_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabledInput">versioning_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabled">change_feed_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDays">change_feed_retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersion">default_service_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabled">last_access_time_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabled">versioning_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_delete_retention_policy`<sup>Required</sup> <a name="container_delete_retention_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicy"></a>

```python
container_delete_retention_policy: StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesContainerDeleteRetentionPolicyOutputReference</a>

---

##### `cors_rule`<sup>Required</sup> <a name="cors_rule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRule"></a>

```python
cors_rule: StorageAccountBlobPropertiesCorsRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRuleList">StorageAccountBlobPropertiesCorsRuleList</a>

---

##### `delete_retention_policy`<sup>Required</sup> <a name="delete_retention_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicy"></a>

```python
delete_retention_policy: StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference">StorageAccountBlobPropertiesDeleteRetentionPolicyOutputReference</a>

---

##### `restore_policy`<sup>Required</sup> <a name="restore_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicy"></a>

```python
restore_policy: StorageAccountBlobPropertiesRestorePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference">StorageAccountBlobPropertiesRestorePolicyOutputReference</a>

---

##### `change_feed_enabled_input`<sup>Optional</sup> <a name="change_feed_enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabledInput"></a>

```python
change_feed_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `change_feed_retention_in_days_input`<sup>Optional</sup> <a name="change_feed_retention_in_days_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDaysInput"></a>

```python
change_feed_retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_delete_retention_policy_input`<sup>Optional</sup> <a name="container_delete_retention_policy_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.containerDeleteRetentionPolicyInput"></a>

```python
container_delete_retention_policy_input: StorageAccountBlobPropertiesContainerDeleteRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesContainerDeleteRetentionPolicy">StorageAccountBlobPropertiesContainerDeleteRetentionPolicy</a>

---

##### `cors_rule_input`<sup>Optional</sup> <a name="cors_rule_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.corsRuleInput"></a>

```python
cors_rule_input: typing.Union[IResolvable, typing.List[StorageAccountBlobPropertiesCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesCorsRule">StorageAccountBlobPropertiesCorsRule</a>]]

---

##### `default_service_version_input`<sup>Optional</sup> <a name="default_service_version_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersionInput"></a>

```python
default_service_version_input: str
```

- *Type:* str

---

##### `delete_retention_policy_input`<sup>Optional</sup> <a name="delete_retention_policy_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.deleteRetentionPolicyInput"></a>

```python
delete_retention_policy_input: StorageAccountBlobPropertiesDeleteRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesDeleteRetentionPolicy">StorageAccountBlobPropertiesDeleteRetentionPolicy</a>

---

##### `last_access_time_enabled_input`<sup>Optional</sup> <a name="last_access_time_enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabledInput"></a>

```python
last_access_time_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restore_policy_input`<sup>Optional</sup> <a name="restore_policy_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.restorePolicyInput"></a>

```python
restore_policy_input: StorageAccountBlobPropertiesRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

---

##### `versioning_enabled_input`<sup>Optional</sup> <a name="versioning_enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabledInput"></a>

```python
versioning_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `change_feed_enabled`<sup>Required</sup> <a name="change_feed_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedEnabled"></a>

```python
change_feed_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `change_feed_retention_in_days`<sup>Required</sup> <a name="change_feed_retention_in_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.changeFeedRetentionInDays"></a>

```python
change_feed_retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_service_version`<sup>Required</sup> <a name="default_service_version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.defaultServiceVersion"></a>

```python
default_service_version: str
```

- *Type:* str

---

##### `last_access_time_enabled`<sup>Required</sup> <a name="last_access_time_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.lastAccessTimeEnabled"></a>

```python
last_access_time_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `versioning_enabled`<sup>Required</sup> <a name="versioning_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.versioningEnabled"></a>

```python
versioning_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountBlobProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties">StorageAccountBlobProperties</a>

---


### StorageAccountBlobPropertiesRestorePolicyOutputReference <a name="StorageAccountBlobPropertiesRestorePolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicyOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountBlobPropertiesRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesRestorePolicy">StorageAccountBlobPropertiesRestorePolicy</a>

---


### StorageAccountCustomDomainOutputReference <a name="StorageAccountCustomDomainOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountCustomDomainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resetUseSubdomain">reset_use_subdomain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_subdomain` <a name="reset_use_subdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.resetUseSubdomain"></a>

```python
def reset_use_subdomain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomainInput">use_subdomain_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomain">use_subdomain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `use_subdomain_input`<sup>Optional</sup> <a name="use_subdomain_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomainInput"></a>

```python
use_subdomain_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `use_subdomain`<sup>Required</sup> <a name="use_subdomain" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.useSubdomain"></a>

```python
use_subdomain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountCustomDomain
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain">StorageAccountCustomDomain</a>

---


### StorageAccountCustomerManagedKeyOutputReference <a name="StorageAccountCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountCustomerManagedKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resetKeyVaultKeyId">reset_key_vault_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resetManagedHsmKeyId">reset_managed_hsm_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_vault_key_id` <a name="reset_key_vault_key_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resetKeyVaultKeyId"></a>

```python
def reset_key_vault_key_id() -> None
```

##### `reset_managed_hsm_key_id` <a name="reset_managed_hsm_key_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.resetManagedHsmKeyId"></a>

```python
def reset_managed_hsm_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.managedHsmKeyIdInput">managed_hsm_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput">user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.managedHsmKeyId">managed_hsm_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `managed_hsm_key_id_input`<sup>Optional</sup> <a name="managed_hsm_key_id_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.managedHsmKeyIdInput"></a>

```python
managed_hsm_key_id_input: str
```

- *Type:* str

---

##### `user_assigned_identity_id_input`<sup>Optional</sup> <a name="user_assigned_identity_id_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput"></a>

```python
user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `managed_hsm_key_id`<sup>Required</sup> <a name="managed_hsm_key_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.managedHsmKeyId"></a>

```python
managed_hsm_key_id: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey">StorageAccountCustomerManagedKey</a>

---


### StorageAccountIdentityOutputReference <a name="StorageAccountIdentityOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity">StorageAccountIdentity</a>

---


### StorageAccountImmutabilityPolicyOutputReference <a name="StorageAccountImmutabilityPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountImmutabilityPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWritesInput">allow_protected_append_writes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDaysInput">period_since_creation_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWrites">allow_protected_append_writes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDays">period_since_creation_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_protected_append_writes_input`<sup>Optional</sup> <a name="allow_protected_append_writes_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWritesInput"></a>

```python
allow_protected_append_writes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `period_since_creation_in_days_input`<sup>Optional</sup> <a name="period_since_creation_in_days_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDaysInput"></a>

```python
period_since_creation_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `allow_protected_append_writes`<sup>Required</sup> <a name="allow_protected_append_writes" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.allowProtectedAppendWrites"></a>

```python
allow_protected_append_writes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `period_since_creation_in_days`<sup>Required</sup> <a name="period_since_creation_in_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.periodSinceCreationInDays"></a>

```python
period_since_creation_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountImmutabilityPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy">StorageAccountImmutabilityPolicy</a>

---


### StorageAccountNetworkRulesOutputReference <a name="StorageAccountNetworkRulesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountNetworkRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.putPrivateLinkAccess">put_private_link_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetBypass">reset_bypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetIpRules">reset_ip_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetPrivateLinkAccess">reset_private_link_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetVirtualNetworkSubnetIds">reset_virtual_network_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_private_link_access` <a name="put_private_link_access" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.putPrivateLinkAccess"></a>

```python
def put_private_link_access(
  value: typing.Union[IResolvable, typing.List[StorageAccountNetworkRulesPrivateLinkAccess]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.putPrivateLinkAccess.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>]]

---

##### `reset_bypass` <a name="reset_bypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetBypass"></a>

```python
def reset_bypass() -> None
```

##### `reset_ip_rules` <a name="reset_ip_rules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetIpRules"></a>

```python
def reset_ip_rules() -> None
```

##### `reset_private_link_access` <a name="reset_private_link_access" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetPrivateLinkAccess"></a>

```python
def reset_private_link_access() -> None
```

##### `reset_virtual_network_subnet_ids` <a name="reset_virtual_network_subnet_ids" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.resetVirtualNetworkSubnetIds"></a>

```python
def reset_virtual_network_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccess">private_link_access</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList">StorageAccountNetworkRulesPrivateLinkAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypassInput">bypass_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultActionInput">default_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRulesInput">ip_rules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccessInput">private_link_access_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIdsInput">virtual_network_subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypass">bypass</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRules">ip_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIds">virtual_network_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_link_access`<sup>Required</sup> <a name="private_link_access" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccess"></a>

```python
private_link_access: StorageAccountNetworkRulesPrivateLinkAccessList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList">StorageAccountNetworkRulesPrivateLinkAccessList</a>

---

##### `bypass_input`<sup>Optional</sup> <a name="bypass_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypassInput"></a>

```python
bypass_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultActionInput"></a>

```python
default_action_input: str
```

- *Type:* str

---

##### `ip_rules_input`<sup>Optional</sup> <a name="ip_rules_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRulesInput"></a>

```python
ip_rules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_link_access_input`<sup>Optional</sup> <a name="private_link_access_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.privateLinkAccessInput"></a>

```python
private_link_access_input: typing.Union[IResolvable, typing.List[StorageAccountNetworkRulesPrivateLinkAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>]]

---

##### `virtual_network_subnet_ids_input`<sup>Optional</sup> <a name="virtual_network_subnet_ids_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIdsInput"></a>

```python
virtual_network_subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.bypass"></a>

```python
bypass: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `ip_rules`<sup>Required</sup> <a name="ip_rules" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.ipRules"></a>

```python
ip_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_network_subnet_ids`<sup>Required</sup> <a name="virtual_network_subnet_ids" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.virtualNetworkSubnetIds"></a>

```python
virtual_network_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountNetworkRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules">StorageAccountNetworkRules</a>

---


### StorageAccountNetworkRulesPrivateLinkAccessList <a name="StorageAccountNetworkRulesPrivateLinkAccessList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageAccountNetworkRulesPrivateLinkAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageAccountNetworkRulesPrivateLinkAccess]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>]]

---


### StorageAccountNetworkRulesPrivateLinkAccessOutputReference <a name="StorageAccountNetworkRulesPrivateLinkAccessOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resetEndpointTenantId">reset_endpoint_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpoint_tenant_id` <a name="reset_endpoint_tenant_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.resetEndpointTenantId"></a>

```python
def reset_endpoint_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceIdInput">endpoint_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantIdInput">endpoint_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceId">endpoint_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantId">endpoint_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_resource_id_input`<sup>Optional</sup> <a name="endpoint_resource_id_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceIdInput"></a>

```python
endpoint_resource_id_input: str
```

- *Type:* str

---

##### `endpoint_tenant_id_input`<sup>Optional</sup> <a name="endpoint_tenant_id_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantIdInput"></a>

```python
endpoint_tenant_id_input: str
```

- *Type:* str

---

##### `endpoint_resource_id`<sup>Required</sup> <a name="endpoint_resource_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointResourceId"></a>

```python
endpoint_resource_id: str
```

- *Type:* str

---

##### `endpoint_tenant_id`<sup>Required</sup> <a name="endpoint_tenant_id" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.endpointTenantId"></a>

```python
endpoint_tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccessOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageAccountNetworkRulesPrivateLinkAccess]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesPrivateLinkAccess">StorageAccountNetworkRulesPrivateLinkAccess</a>]

---


### StorageAccountQueuePropertiesCorsRuleList <a name="StorageAccountQueuePropertiesCorsRuleList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountQueuePropertiesCorsRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageAccountQueuePropertiesCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageAccountQueuePropertiesCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]]

---


### StorageAccountQueuePropertiesCorsRuleOutputReference <a name="StorageAccountQueuePropertiesCorsRuleOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeadersInput">allowed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeadersInput">exposed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">max_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_headers_input`<sup>Optional</sup> <a name="allowed_headers_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```python
allowed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers_input`<sup>Optional</sup> <a name="exposed_headers_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```python
exposed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_in_seconds_input`<sup>Optional</sup> <a name="max_age_in_seconds_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```python
max_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageAccountQueuePropertiesCorsRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]

---


### StorageAccountQueuePropertiesHourMetricsOutputReference <a name="StorageAccountQueuePropertiesHourMetricsOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetIncludeApis">reset_include_apis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetRetentionPolicyDays">reset_retention_policy_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_apis` <a name="reset_include_apis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetIncludeApis"></a>

```python
def reset_include_apis() -> None
```

##### `reset_retention_policy_days` <a name="reset_retention_policy_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.resetRetentionPolicyDays"></a>

```python
def reset_retention_policy_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApisInput">include_apis_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput">retention_policy_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApis">include_apis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_apis_input`<sup>Optional</sup> <a name="include_apis_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApisInput"></a>

```python
include_apis_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_policy_days_input`<sup>Optional</sup> <a name="retention_policy_days_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```python
retention_policy_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_apis`<sup>Required</sup> <a name="include_apis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApis"></a>

```python
include_apis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_policy_days`<sup>Required</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountQueuePropertiesHourMetrics
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---


### StorageAccountQueuePropertiesLoggingOutputReference <a name="StorageAccountQueuePropertiesLoggingOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountQueuePropertiesLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resetRetentionPolicyDays">reset_retention_policy_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retention_policy_days` <a name="reset_retention_policy_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.resetRetentionPolicyDays"></a>

```python
def reset_retention_policy_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.deleteInput">delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.readInput">read_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDaysInput">retention_policy_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.writeInput">write_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.delete">delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.read">read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.write">write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.deleteInput"></a>

```python
delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.readInput"></a>

```python
read_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_policy_days_input`<sup>Optional</sup> <a name="retention_policy_days_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDaysInput"></a>

```python
retention_policy_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `write_input`<sup>Optional</sup> <a name="write_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.writeInput"></a>

```python
write_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.delete"></a>

```python
delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.read"></a>

```python
read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_policy_days`<sup>Required</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.write"></a>

```python
write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountQueuePropertiesLogging
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---


### StorageAccountQueuePropertiesMinuteMetricsOutputReference <a name="StorageAccountQueuePropertiesMinuteMetricsOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetIncludeApis">reset_include_apis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays">reset_retention_policy_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_apis` <a name="reset_include_apis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetIncludeApis"></a>

```python
def reset_include_apis() -> None
```

##### `reset_retention_policy_days` <a name="reset_retention_policy_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays"></a>

```python
def reset_retention_policy_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApisInput">include_apis_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput">retention_policy_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApis">include_apis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_apis_input`<sup>Optional</sup> <a name="include_apis_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApisInput"></a>

```python
include_apis_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_policy_days_input`<sup>Optional</sup> <a name="retention_policy_days_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```python
retention_policy_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_apis`<sup>Required</sup> <a name="include_apis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApis"></a>

```python
include_apis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_policy_days`<sup>Required</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountQueuePropertiesMinuteMetrics
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---


### StorageAccountQueuePropertiesOutputReference <a name="StorageAccountQueuePropertiesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountQueuePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putCorsRule">put_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics">put_hour_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics">put_minute_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetCorsRule">reset_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetHourMetrics">reset_hour_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetMinuteMetrics">reset_minute_metrics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cors_rule` <a name="put_cors_rule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putCorsRule"></a>

```python
def put_cors_rule(
  value: typing.Union[IResolvable, typing.List[StorageAccountQueuePropertiesCorsRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putCorsRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]]

---

##### `put_hour_metrics` <a name="put_hour_metrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics"></a>

```python
def put_hour_metrics(
  enabled: typing.Union[bool, IResolvable],
  version: str,
  include_apis: typing.Union[bool, IResolvable] = None,
  retention_policy_days: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#enabled StorageAccount#enabled}.

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#version StorageAccount#version}.

---

###### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics.parameter.includeApis"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}.

---

###### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putHourMetrics.parameter.retentionPolicyDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

##### `put_logging` <a name="put_logging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging"></a>

```python
def put_logging(
  delete: typing.Union[bool, IResolvable],
  read: typing.Union[bool, IResolvable],
  version: str,
  write: typing.Union[bool, IResolvable],
  retention_policy_days: typing.Union[int, float] = None
) -> None
```

###### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging.parameter.delete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#delete StorageAccount#delete}.

---

###### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging.parameter.read"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#read StorageAccount#read}.

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#version StorageAccount#version}.

---

###### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging.parameter.write"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#write StorageAccount#write}.

---

###### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putLogging.parameter.retentionPolicyDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

##### `put_minute_metrics` <a name="put_minute_metrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics"></a>

```python
def put_minute_metrics(
  enabled: typing.Union[bool, IResolvable],
  version: str,
  include_apis: typing.Union[bool, IResolvable] = None,
  retention_policy_days: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#enabled StorageAccount#enabled}.

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#version StorageAccount#version}.

---

###### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics.parameter.includeApis"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#include_apis StorageAccount#include_apis}.

---

###### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.putMinuteMetrics.parameter.retentionPolicyDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#retention_policy_days StorageAccount#retention_policy_days}.

---

##### `reset_cors_rule` <a name="reset_cors_rule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetCorsRule"></a>

```python
def reset_cors_rule() -> None
```

##### `reset_hour_metrics` <a name="reset_hour_metrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetHourMetrics"></a>

```python
def reset_hour_metrics() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_minute_metrics` <a name="reset_minute_metrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.resetMinuteMetrics"></a>

```python
def reset_minute_metrics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRule">cors_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList">StorageAccountQueuePropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetrics">hour_metrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference">StorageAccountQueuePropertiesHourMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference">StorageAccountQueuePropertiesLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetrics">minute_metrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference">StorageAccountQueuePropertiesMinuteMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRuleInput">cors_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetricsInput">hour_metrics_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetricsInput">minute_metrics_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cors_rule`<sup>Required</sup> <a name="cors_rule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRule"></a>

```python
cors_rule: StorageAccountQueuePropertiesCorsRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRuleList">StorageAccountQueuePropertiesCorsRuleList</a>

---

##### `hour_metrics`<sup>Required</sup> <a name="hour_metrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetrics"></a>

```python
hour_metrics: StorageAccountQueuePropertiesHourMetricsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetricsOutputReference">StorageAccountQueuePropertiesHourMetricsOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.logging"></a>

```python
logging: StorageAccountQueuePropertiesLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLoggingOutputReference">StorageAccountQueuePropertiesLoggingOutputReference</a>

---

##### `minute_metrics`<sup>Required</sup> <a name="minute_metrics" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetrics"></a>

```python
minute_metrics: StorageAccountQueuePropertiesMinuteMetricsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetricsOutputReference">StorageAccountQueuePropertiesMinuteMetricsOutputReference</a>

---

##### `cors_rule_input`<sup>Optional</sup> <a name="cors_rule_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.corsRuleInput"></a>

```python
cors_rule_input: typing.Union[IResolvable, typing.List[StorageAccountQueuePropertiesCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesCorsRule">StorageAccountQueuePropertiesCorsRule</a>]]

---

##### `hour_metrics_input`<sup>Optional</sup> <a name="hour_metrics_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.hourMetricsInput"></a>

```python
hour_metrics_input: StorageAccountQueuePropertiesHourMetrics
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.loggingInput"></a>

```python
logging_input: StorageAccountQueuePropertiesLogging
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---

##### `minute_metrics_input`<sup>Optional</sup> <a name="minute_metrics_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.minuteMetricsInput"></a>

```python
minute_metrics_input: StorageAccountQueuePropertiesMinuteMetrics
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountQueueProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties">StorageAccountQueueProperties</a>

---


### StorageAccountRoutingOutputReference <a name="StorageAccountRoutingOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountRoutingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetChoice">reset_choice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishInternetEndpoints">reset_publish_internet_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishMicrosoftEndpoints">reset_publish_microsoft_endpoints</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_choice` <a name="reset_choice" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetChoice"></a>

```python
def reset_choice() -> None
```

##### `reset_publish_internet_endpoints` <a name="reset_publish_internet_endpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishInternetEndpoints"></a>

```python
def reset_publish_internet_endpoints() -> None
```

##### `reset_publish_microsoft_endpoints` <a name="reset_publish_microsoft_endpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.resetPublishMicrosoftEndpoints"></a>

```python
def reset_publish_microsoft_endpoints() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choiceInput">choice_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpointsInput">publish_internet_endpoints_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpointsInput">publish_microsoft_endpoints_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choice">choice</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpoints">publish_internet_endpoints</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpoints">publish_microsoft_endpoints</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `choice_input`<sup>Optional</sup> <a name="choice_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choiceInput"></a>

```python
choice_input: str
```

- *Type:* str

---

##### `publish_internet_endpoints_input`<sup>Optional</sup> <a name="publish_internet_endpoints_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpointsInput"></a>

```python
publish_internet_endpoints_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `publish_microsoft_endpoints_input`<sup>Optional</sup> <a name="publish_microsoft_endpoints_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpointsInput"></a>

```python
publish_microsoft_endpoints_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `choice`<sup>Required</sup> <a name="choice" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.choice"></a>

```python
choice: str
```

- *Type:* str

---

##### `publish_internet_endpoints`<sup>Required</sup> <a name="publish_internet_endpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishInternetEndpoints"></a>

```python
publish_internet_endpoints: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `publish_microsoft_endpoints`<sup>Required</sup> <a name="publish_microsoft_endpoints" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.publishMicrosoftEndpoints"></a>

```python
publish_microsoft_endpoints: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountRouting">StorageAccountRouting</a>

---


### StorageAccountSasPolicyOutputReference <a name="StorageAccountSasPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountSasPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resetExpirationAction">reset_expiration_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_action` <a name="reset_expiration_action" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.resetExpirationAction"></a>

```python
def reset_expiration_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationActionInput">expiration_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriodInput">expiration_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationAction">expiration_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriod">expiration_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_action_input`<sup>Optional</sup> <a name="expiration_action_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationActionInput"></a>

```python
expiration_action_input: str
```

- *Type:* str

---

##### `expiration_period_input`<sup>Optional</sup> <a name="expiration_period_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriodInput"></a>

```python
expiration_period_input: str
```

- *Type:* str

---

##### `expiration_action`<sup>Required</sup> <a name="expiration_action" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationAction"></a>

```python
expiration_action: str
```

- *Type:* str

---

##### `expiration_period`<sup>Required</sup> <a name="expiration_period" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.expirationPeriod"></a>

```python
expiration_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountSasPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy">StorageAccountSasPolicy</a>

---


### StorageAccountSharePropertiesCorsRuleList <a name="StorageAccountSharePropertiesCorsRuleList" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountSharePropertiesCorsRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageAccountSharePropertiesCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageAccountSharePropertiesCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>]]

---


### StorageAccountSharePropertiesCorsRuleOutputReference <a name="StorageAccountSharePropertiesCorsRuleOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeadersInput">allowed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeadersInput">exposed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">max_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_headers_input`<sup>Optional</sup> <a name="allowed_headers_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```python
allowed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers_input`<sup>Optional</sup> <a name="exposed_headers_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```python
exposed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_in_seconds_input`<sup>Optional</sup> <a name="max_age_in_seconds_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```python
max_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageAccountSharePropertiesCorsRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>]

---


### StorageAccountSharePropertiesOutputReference <a name="StorageAccountSharePropertiesOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountSharePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putCorsRule">put_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putRetentionPolicy">put_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb">put_smb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetCorsRule">reset_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetRetentionPolicy">reset_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetSmb">reset_smb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cors_rule` <a name="put_cors_rule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putCorsRule"></a>

```python
def put_cors_rule(
  value: typing.Union[IResolvable, typing.List[StorageAccountSharePropertiesCorsRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putCorsRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>]]

---

##### `put_retention_policy` <a name="put_retention_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putRetentionPolicy"></a>

```python
def put_retention_policy(
  days: typing.Union[int, float] = None
) -> None
```

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putRetentionPolicy.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#days StorageAccount#days}.

---

##### `put_smb` <a name="put_smb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb"></a>

```python
def put_smb(
  authentication_types: typing.List[str] = None,
  channel_encryption_type: typing.List[str] = None,
  kerberos_ticket_encryption_type: typing.List[str] = None,
  multichannel_enabled: typing.Union[bool, IResolvable] = None,
  versions: typing.List[str] = None
) -> None
```

###### `authentication_types`<sup>Optional</sup> <a name="authentication_types" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb.parameter.authenticationTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#authentication_types StorageAccount#authentication_types}.

---

###### `channel_encryption_type`<sup>Optional</sup> <a name="channel_encryption_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb.parameter.channelEncryptionType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#channel_encryption_type StorageAccount#channel_encryption_type}.

---

###### `kerberos_ticket_encryption_type`<sup>Optional</sup> <a name="kerberos_ticket_encryption_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb.parameter.kerberosTicketEncryptionType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#kerberos_ticket_encryption_type StorageAccount#kerberos_ticket_encryption_type}.

---

###### `multichannel_enabled`<sup>Optional</sup> <a name="multichannel_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb.parameter.multichannelEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#multichannel_enabled StorageAccount#multichannel_enabled}.

---

###### `versions`<sup>Optional</sup> <a name="versions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.putSmb.parameter.versions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/storage_account#versions StorageAccount#versions}.

---

##### `reset_cors_rule` <a name="reset_cors_rule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetCorsRule"></a>

```python
def reset_cors_rule() -> None
```

##### `reset_retention_policy` <a name="reset_retention_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetRetentionPolicy"></a>

```python
def reset_retention_policy() -> None
```

##### `reset_smb` <a name="reset_smb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.resetSmb"></a>

```python
def reset_smb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRule">cors_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList">StorageAccountSharePropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference">StorageAccountSharePropertiesRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smb">smb</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference">StorageAccountSharePropertiesSmbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRuleInput">cors_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicyInput">retention_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smbInput">smb_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cors_rule`<sup>Required</sup> <a name="cors_rule" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRule"></a>

```python
cors_rule: StorageAccountSharePropertiesCorsRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRuleList">StorageAccountSharePropertiesCorsRuleList</a>

---

##### `retention_policy`<sup>Required</sup> <a name="retention_policy" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicy"></a>

```python
retention_policy: StorageAccountSharePropertiesRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference">StorageAccountSharePropertiesRetentionPolicyOutputReference</a>

---

##### `smb`<sup>Required</sup> <a name="smb" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smb"></a>

```python
smb: StorageAccountSharePropertiesSmbOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference">StorageAccountSharePropertiesSmbOutputReference</a>

---

##### `cors_rule_input`<sup>Optional</sup> <a name="cors_rule_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.corsRuleInput"></a>

```python
cors_rule_input: typing.Union[IResolvable, typing.List[StorageAccountSharePropertiesCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesCorsRule">StorageAccountSharePropertiesCorsRule</a>]]

---

##### `retention_policy_input`<sup>Optional</sup> <a name="retention_policy_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.retentionPolicyInput"></a>

```python
retention_policy_input: StorageAccountSharePropertiesRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

---

##### `smb_input`<sup>Optional</sup> <a name="smb_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.smbInput"></a>

```python
smb_input: StorageAccountSharePropertiesSmb
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountShareProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties">StorageAccountShareProperties</a>

---


### StorageAccountSharePropertiesRetentionPolicyOutputReference <a name="StorageAccountSharePropertiesRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resetDays">reset_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.resetDays"></a>

```python
def reset_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountSharePropertiesRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesRetentionPolicy">StorageAccountSharePropertiesRetentionPolicy</a>

---


### StorageAccountSharePropertiesSmbOutputReference <a name="StorageAccountSharePropertiesSmbOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountSharePropertiesSmbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetAuthenticationTypes">reset_authentication_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetChannelEncryptionType">reset_channel_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetKerberosTicketEncryptionType">reset_kerberos_ticket_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetMultichannelEnabled">reset_multichannel_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetVersions">reset_versions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_types` <a name="reset_authentication_types" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetAuthenticationTypes"></a>

```python
def reset_authentication_types() -> None
```

##### `reset_channel_encryption_type` <a name="reset_channel_encryption_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetChannelEncryptionType"></a>

```python
def reset_channel_encryption_type() -> None
```

##### `reset_kerberos_ticket_encryption_type` <a name="reset_kerberos_ticket_encryption_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetKerberosTicketEncryptionType"></a>

```python
def reset_kerberos_ticket_encryption_type() -> None
```

##### `reset_multichannel_enabled` <a name="reset_multichannel_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetMultichannelEnabled"></a>

```python
def reset_multichannel_enabled() -> None
```

##### `reset_versions` <a name="reset_versions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.resetVersions"></a>

```python
def reset_versions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypesInput">authentication_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionTypeInput">channel_encryption_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionTypeInput">kerberos_ticket_encryption_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabledInput">multichannel_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versionsInput">versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypes">authentication_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionType">channel_encryption_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionType">kerberos_ticket_encryption_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabled">multichannel_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versions">versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_types_input`<sup>Optional</sup> <a name="authentication_types_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypesInput"></a>

```python
authentication_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `channel_encryption_type_input`<sup>Optional</sup> <a name="channel_encryption_type_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionTypeInput"></a>

```python
channel_encryption_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kerberos_ticket_encryption_type_input`<sup>Optional</sup> <a name="kerberos_ticket_encryption_type_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionTypeInput"></a>

```python
kerberos_ticket_encryption_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `multichannel_enabled_input`<sup>Optional</sup> <a name="multichannel_enabled_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabledInput"></a>

```python
multichannel_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `versions_input`<sup>Optional</sup> <a name="versions_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versionsInput"></a>

```python
versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authentication_types`<sup>Required</sup> <a name="authentication_types" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.authenticationTypes"></a>

```python
authentication_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `channel_encryption_type`<sup>Required</sup> <a name="channel_encryption_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.channelEncryptionType"></a>

```python
channel_encryption_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kerberos_ticket_encryption_type`<sup>Required</sup> <a name="kerberos_ticket_encryption_type" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.kerberosTicketEncryptionType"></a>

```python
kerberos_ticket_encryption_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `multichannel_enabled`<sup>Required</sup> <a name="multichannel_enabled" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.multichannelEnabled"></a>

```python
multichannel_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.versions"></a>

```python
versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmbOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountSharePropertiesSmb
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesSmb">StorageAccountSharePropertiesSmb</a>

---


### StorageAccountStaticWebsiteOutputReference <a name="StorageAccountStaticWebsiteOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountStaticWebsiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetError404Document">reset_error404_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetIndexDocument">reset_index_document</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_error404_document` <a name="reset_error404_document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetError404Document"></a>

```python
def reset_error404_document() -> None
```

##### `reset_index_document` <a name="reset_index_document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.resetIndexDocument"></a>

```python
def reset_index_document() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404DocumentInput">error404_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocumentInput">index_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404Document">error404_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocument">index_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error404_document_input`<sup>Optional</sup> <a name="error404_document_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404DocumentInput"></a>

```python
error404_document_input: str
```

- *Type:* str

---

##### `index_document_input`<sup>Optional</sup> <a name="index_document_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocumentInput"></a>

```python
index_document_input: str
```

- *Type:* str

---

##### `error404_document`<sup>Required</sup> <a name="error404_document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.error404Document"></a>

```python
error404_document: str
```

- *Type:* str

---

##### `index_document`<sup>Required</sup> <a name="index_document" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.indexDocument"></a>

```python
index_document: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountStaticWebsite
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite">StorageAccountStaticWebsite</a>

---


### StorageAccountTimeoutsOutputReference <a name="StorageAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account

storageAccount.StorageAccountTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageAccountTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts">StorageAccountTimeouts</a>]

---



