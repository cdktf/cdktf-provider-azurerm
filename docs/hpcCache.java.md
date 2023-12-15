# `hpcCache` Submodule <a name="`hpcCache` Submodule" id="@cdktf/provider-azurerm.hpcCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HpcCache <a name="HpcCache" id="@cdktf/provider-azurerm.hpcCache.HpcCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache azurerm_hpc_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCache;

HpcCache.Builder.create(Construct scope, java.lang.String id)
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
    .cacheSizeInGb(java.lang.Number)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
    .subnetId(java.lang.String)
//  .automaticallyRotateKeyToLatestEnabled(java.lang.Boolean)
//  .automaticallyRotateKeyToLatestEnabled(IResolvable)
//  .defaultAccessPolicy(HpcCacheDefaultAccessPolicy)
//  .directoryActiveDirectory(HpcCacheDirectoryActiveDirectory)
//  .directoryFlatFile(HpcCacheDirectoryFlatFile)
//  .directoryLdap(HpcCacheDirectoryLdap)
//  .dns(HpcCacheDns)
//  .id(java.lang.String)
//  .identity(HpcCacheIdentity)
//  .keyVaultKeyId(java.lang.String)
//  .mtu(java.lang.Number)
//  .ntpServer(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(HpcCacheTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.cacheSizeInGb">cacheSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#location HpcCache#location}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#name HpcCache#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#resource_group_name HpcCache#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#sku_name HpcCache#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#subnet_id HpcCache#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.automaticallyRotateKeyToLatestEnabled">automaticallyRotateKeyToLatestEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#automatically_rotate_key_to_latest_enabled HpcCache#automatically_rotate_key_to_latest_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.defaultAccessPolicy">defaultAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | default_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.directoryActiveDirectory">directoryActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | directory_active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.directoryFlatFile">directoryFlatFile</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | directory_flat_file block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.directoryLdap">directoryLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | directory_ldap block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.dns">dns</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#id HpcCache#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#key_vault_key_id HpcCache#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.mtu">mtu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#mtu HpcCache#mtu}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.ntpServer">ntpServer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#ntp_server HpcCache#ntp_server}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#tags HpcCache#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cacheSizeInGb`<sup>Required</sup> <a name="cacheSizeInGb" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.cacheSizeInGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#location HpcCache#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#name HpcCache#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#resource_group_name HpcCache#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#sku_name HpcCache#sku_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#subnet_id HpcCache#subnet_id}.

---

##### `automaticallyRotateKeyToLatestEnabled`<sup>Optional</sup> <a name="automaticallyRotateKeyToLatestEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.automaticallyRotateKeyToLatestEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#automatically_rotate_key_to_latest_enabled HpcCache#automatically_rotate_key_to_latest_enabled}.

---

##### `defaultAccessPolicy`<sup>Optional</sup> <a name="defaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.defaultAccessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

default_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#default_access_policy HpcCache#default_access_policy}

---

##### `directoryActiveDirectory`<sup>Optional</sup> <a name="directoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.directoryActiveDirectory"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

directory_active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#directory_active_directory HpcCache#directory_active_directory}

---

##### `directoryFlatFile`<sup>Optional</sup> <a name="directoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.directoryFlatFile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

directory_flat_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#directory_flat_file HpcCache#directory_flat_file}

---

##### `directoryLdap`<sup>Optional</sup> <a name="directoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.directoryLdap"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

directory_ldap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#directory_ldap HpcCache#directory_ldap}

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.dns"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#dns HpcCache#dns}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#id HpcCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#identity HpcCache#identity}

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.keyVaultKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#key_vault_key_id HpcCache#key_vault_key_id}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.mtu"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#mtu HpcCache#mtu}.

---

##### `ntpServer`<sup>Optional</sup> <a name="ntpServer" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.ntpServer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#ntp_server HpcCache#ntp_server}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#tags HpcCache#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#timeouts HpcCache#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDefaultAccessPolicy">putDefaultAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory">putDirectoryActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile">putDirectoryFlatFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap">putDirectoryLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDns">putDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetAutomaticallyRotateKeyToLatestEnabled">resetAutomaticallyRotateKeyToLatestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDefaultAccessPolicy">resetDefaultAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryActiveDirectory">resetDirectoryActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryFlatFile">resetDirectoryFlatFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryLdap">resetDirectoryLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetNtpServer">resetNtpServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.hpcCache.HpcCache.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCache.HpcCache.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultAccessPolicy` <a name="putDefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDefaultAccessPolicy"></a>

```java
public void putDefaultAccessPolicy(HpcCacheDefaultAccessPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDefaultAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

---

##### `putDirectoryActiveDirectory` <a name="putDirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory"></a>

```java
public void putDirectoryActiveDirectory(HpcCacheDirectoryActiveDirectory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

---

##### `putDirectoryFlatFile` <a name="putDirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile"></a>

```java
public void putDirectoryFlatFile(HpcCacheDirectoryFlatFile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

---

##### `putDirectoryLdap` <a name="putDirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap"></a>

```java
public void putDirectoryLdap(HpcCacheDirectoryLdap value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

---

##### `putDns` <a name="putDns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDns"></a>

```java
public void putDns(HpcCacheDns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity"></a>

```java
public void putIdentity(HpcCacheIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts"></a>

```java
public void putTimeouts(HpcCacheTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>

---

##### `resetAutomaticallyRotateKeyToLatestEnabled` <a name="resetAutomaticallyRotateKeyToLatestEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetAutomaticallyRotateKeyToLatestEnabled"></a>

```java
public void resetAutomaticallyRotateKeyToLatestEnabled()
```

##### `resetDefaultAccessPolicy` <a name="resetDefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDefaultAccessPolicy"></a>

```java
public void resetDefaultAccessPolicy()
```

##### `resetDirectoryActiveDirectory` <a name="resetDirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryActiveDirectory"></a>

```java
public void resetDirectoryActiveDirectory()
```

##### `resetDirectoryFlatFile` <a name="resetDirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryFlatFile"></a>

```java
public void resetDirectoryFlatFile()
```

##### `resetDirectoryLdap` <a name="resetDirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryLdap"></a>

```java
public void resetDirectoryLdap()
```

##### `resetDns` <a name="resetDns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDns"></a>

```java
public void resetDns()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetKeyVaultKeyId"></a>

```java
public void resetKeyVaultKeyId()
```

##### `resetMtu` <a name="resetMtu" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetMtu"></a>

```java
public void resetMtu()
```

##### `resetNtpServer` <a name="resetNtpServer" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetNtpServer"></a>

```java
public void resetNtpServer()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HpcCache resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCache;

HpcCache.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCache;

HpcCache.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCache;

HpcCache.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCache;

HpcCache.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HpcCache.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HpcCache resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HpcCache to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HpcCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCache.HpcCache.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HpcCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicy">defaultAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference">HpcCacheDefaultAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectory">directoryActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference">HpcCacheDirectoryActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFile">directoryFlatFile</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference">HpcCacheDirectoryFlatFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdap">directoryLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference">HpcCacheDirectoryLdapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference">HpcCacheDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference">HpcCacheIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.mountAddresses">mountAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference">HpcCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabledInput">automaticallyRotateKeyToLatestEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGbInput">cacheSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicyInput">defaultAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectoryInput">directoryActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFileInput">directoryFlatFileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdapInput">directoryLdapInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.dnsInput">dnsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtuInput">mtuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServerInput">ntpServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabled">automaticallyRotateKeyToLatestEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGb">cacheSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServer">ntpServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultAccessPolicy`<sup>Required</sup> <a name="defaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicy"></a>

```java
public HpcCacheDefaultAccessPolicyOutputReference getDefaultAccessPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference">HpcCacheDefaultAccessPolicyOutputReference</a>

---

##### `directoryActiveDirectory`<sup>Required</sup> <a name="directoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectory"></a>

```java
public HpcCacheDirectoryActiveDirectoryOutputReference getDirectoryActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference">HpcCacheDirectoryActiveDirectoryOutputReference</a>

---

##### `directoryFlatFile`<sup>Required</sup> <a name="directoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFile"></a>

```java
public HpcCacheDirectoryFlatFileOutputReference getDirectoryFlatFile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference">HpcCacheDirectoryFlatFileOutputReference</a>

---

##### `directoryLdap`<sup>Required</sup> <a name="directoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdap"></a>

```java
public HpcCacheDirectoryLdapOutputReference getDirectoryLdap();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference">HpcCacheDirectoryLdapOutputReference</a>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.dns"></a>

```java
public HpcCacheDnsOutputReference getDns();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference">HpcCacheDnsOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.identity"></a>

```java
public HpcCacheIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference">HpcCacheIdentityOutputReference</a>

---

##### `mountAddresses`<sup>Required</sup> <a name="mountAddresses" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.mountAddresses"></a>

```java
public java.util.List<java.lang.String> getMountAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeouts"></a>

```java
public HpcCacheTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference">HpcCacheTimeoutsOutputReference</a>

---

##### `automaticallyRotateKeyToLatestEnabledInput`<sup>Optional</sup> <a name="automaticallyRotateKeyToLatestEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabledInput"></a>

```java
public java.lang.Object getAutomaticallyRotateKeyToLatestEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheSizeInGbInput`<sup>Optional</sup> <a name="cacheSizeInGbInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGbInput"></a>

```java
public java.lang.Number getCacheSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `defaultAccessPolicyInput`<sup>Optional</sup> <a name="defaultAccessPolicyInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicyInput"></a>

```java
public HpcCacheDefaultAccessPolicy getDefaultAccessPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

---

##### `directoryActiveDirectoryInput`<sup>Optional</sup> <a name="directoryActiveDirectoryInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectoryInput"></a>

```java
public HpcCacheDirectoryActiveDirectory getDirectoryActiveDirectoryInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

---

##### `directoryFlatFileInput`<sup>Optional</sup> <a name="directoryFlatFileInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFileInput"></a>

```java
public HpcCacheDirectoryFlatFile getDirectoryFlatFileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

---

##### `directoryLdapInput`<sup>Optional</sup> <a name="directoryLdapInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdapInput"></a>

```java
public HpcCacheDirectoryLdap getDirectoryLdapInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.dnsInput"></a>

```java
public HpcCacheDns getDnsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.identityInput"></a>

```java
public HpcCacheIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyIdInput"></a>

```java
public java.lang.String getKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtuInput"></a>

```java
public java.lang.Number getMtuInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ntpServerInput`<sup>Optional</sup> <a name="ntpServerInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServerInput"></a>

```java
public java.lang.String getNtpServerInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>

---

##### `automaticallyRotateKeyToLatestEnabled`<sup>Required</sup> <a name="automaticallyRotateKeyToLatestEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabled"></a>

```java
public java.lang.Object getAutomaticallyRotateKeyToLatestEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheSizeInGb`<sup>Required</sup> <a name="cacheSizeInGb" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGb"></a>

```java
public java.lang.Number getCacheSizeInGb();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ntpServer`<sup>Required</sup> <a name="ntpServer" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServer"></a>

```java
public java.lang.String getNtpServer();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HpcCacheConfig <a name="HpcCacheConfig" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheConfig;

HpcCacheConfig.builder()
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
    .cacheSizeInGb(java.lang.Number)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
    .subnetId(java.lang.String)
//  .automaticallyRotateKeyToLatestEnabled(java.lang.Boolean)
//  .automaticallyRotateKeyToLatestEnabled(IResolvable)
//  .defaultAccessPolicy(HpcCacheDefaultAccessPolicy)
//  .directoryActiveDirectory(HpcCacheDirectoryActiveDirectory)
//  .directoryFlatFile(HpcCacheDirectoryFlatFile)
//  .directoryLdap(HpcCacheDirectoryLdap)
//  .dns(HpcCacheDns)
//  .id(java.lang.String)
//  .identity(HpcCacheIdentity)
//  .keyVaultKeyId(java.lang.String)
//  .mtu(java.lang.Number)
//  .ntpServer(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(HpcCacheTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.cacheSizeInGb">cacheSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#location HpcCache#location}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#name HpcCache#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#resource_group_name HpcCache#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#sku_name HpcCache#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#subnet_id HpcCache#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.automaticallyRotateKeyToLatestEnabled">automaticallyRotateKeyToLatestEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#automatically_rotate_key_to_latest_enabled HpcCache#automatically_rotate_key_to_latest_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.defaultAccessPolicy">defaultAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | default_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryActiveDirectory">directoryActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | directory_active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryFlatFile">directoryFlatFile</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | directory_flat_file block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryLdap">directoryLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | directory_ldap block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#id HpcCache#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#key_vault_key_id HpcCache#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#mtu HpcCache#mtu}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.ntpServer">ntpServer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#ntp_server HpcCache#ntp_server}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#tags HpcCache#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cacheSizeInGb`<sup>Required</sup> <a name="cacheSizeInGb" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.cacheSizeInGb"></a>

```java
public java.lang.Number getCacheSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#location HpcCache#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#name HpcCache#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#resource_group_name HpcCache#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#sku_name HpcCache#sku_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#subnet_id HpcCache#subnet_id}.

---

##### `automaticallyRotateKeyToLatestEnabled`<sup>Optional</sup> <a name="automaticallyRotateKeyToLatestEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.automaticallyRotateKeyToLatestEnabled"></a>

```java
public java.lang.Object getAutomaticallyRotateKeyToLatestEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#automatically_rotate_key_to_latest_enabled HpcCache#automatically_rotate_key_to_latest_enabled}.

---

##### `defaultAccessPolicy`<sup>Optional</sup> <a name="defaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.defaultAccessPolicy"></a>

```java
public HpcCacheDefaultAccessPolicy getDefaultAccessPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

default_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#default_access_policy HpcCache#default_access_policy}

---

##### `directoryActiveDirectory`<sup>Optional</sup> <a name="directoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryActiveDirectory"></a>

```java
public HpcCacheDirectoryActiveDirectory getDirectoryActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

directory_active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#directory_active_directory HpcCache#directory_active_directory}

---

##### `directoryFlatFile`<sup>Optional</sup> <a name="directoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryFlatFile"></a>

```java
public HpcCacheDirectoryFlatFile getDirectoryFlatFile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

directory_flat_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#directory_flat_file HpcCache#directory_flat_file}

---

##### `directoryLdap`<sup>Optional</sup> <a name="directoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryLdap"></a>

```java
public HpcCacheDirectoryLdap getDirectoryLdap();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

directory_ldap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#directory_ldap HpcCache#directory_ldap}

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dns"></a>

```java
public HpcCacheDns getDns();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#dns HpcCache#dns}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#id HpcCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.identity"></a>

```java
public HpcCacheIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#identity HpcCache#identity}

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#key_vault_key_id HpcCache#key_vault_key_id}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#mtu HpcCache#mtu}.

---

##### `ntpServer`<sup>Optional</sup> <a name="ntpServer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.ntpServer"></a>

```java
public java.lang.String getNtpServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#ntp_server HpcCache#ntp_server}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#tags HpcCache#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.timeouts"></a>

```java
public HpcCacheTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#timeouts HpcCache#timeouts}

---

### HpcCacheDefaultAccessPolicy <a name="HpcCacheDefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheDefaultAccessPolicy;

HpcCacheDefaultAccessPolicy.builder()
    .accessRule(IResolvable)
    .accessRule(java.util.List<HpcCacheDefaultAccessPolicyAccessRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy.property.accessRule">accessRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>></code> | access_rule block. |

---

##### `accessRule`<sup>Required</sup> <a name="accessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy.property.accessRule"></a>

```java
public java.lang.Object getAccessRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>>

access_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#access_rule HpcCache#access_rule}

---

### HpcCacheDefaultAccessPolicyAccessRule <a name="HpcCacheDefaultAccessPolicyAccessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheDefaultAccessPolicyAccessRule;

HpcCacheDefaultAccessPolicyAccessRule.builder()
    .access(java.lang.String)
    .scope(java.lang.String)
//  .anonymousGid(java.lang.Number)
//  .anonymousUid(java.lang.Number)
//  .filter(java.lang.String)
//  .rootSquashEnabled(java.lang.Boolean)
//  .rootSquashEnabled(IResolvable)
//  .submountAccessEnabled(java.lang.Boolean)
//  .submountAccessEnabled(IResolvable)
//  .suidEnabled(java.lang.Boolean)
//  .suidEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.access">access</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#access HpcCache#access}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#scope HpcCache#scope}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousGid">anonymousGid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#anonymous_gid HpcCache#anonymous_gid}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousUid">anonymousUid</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#anonymous_uid HpcCache#anonymous_uid}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#filter HpcCache#filter}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.rootSquashEnabled">rootSquashEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#root_squash_enabled HpcCache#root_squash_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.submountAccessEnabled">submountAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#submount_access_enabled HpcCache#submount_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.suidEnabled">suidEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#suid_enabled HpcCache#suid_enabled}. |

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#access HpcCache#access}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#scope HpcCache#scope}.

---

##### `anonymousGid`<sup>Optional</sup> <a name="anonymousGid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousGid"></a>

```java
public java.lang.Number getAnonymousGid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#anonymous_gid HpcCache#anonymous_gid}.

---

##### `anonymousUid`<sup>Optional</sup> <a name="anonymousUid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousUid"></a>

```java
public java.lang.Number getAnonymousUid();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#anonymous_uid HpcCache#anonymous_uid}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#filter HpcCache#filter}.

---

##### `rootSquashEnabled`<sup>Optional</sup> <a name="rootSquashEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.rootSquashEnabled"></a>

```java
public java.lang.Object getRootSquashEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#root_squash_enabled HpcCache#root_squash_enabled}.

---

##### `submountAccessEnabled`<sup>Optional</sup> <a name="submountAccessEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.submountAccessEnabled"></a>

```java
public java.lang.Object getSubmountAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#submount_access_enabled HpcCache#submount_access_enabled}.

---

##### `suidEnabled`<sup>Optional</sup> <a name="suidEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.suidEnabled"></a>

```java
public java.lang.Object getSuidEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#suid_enabled HpcCache#suid_enabled}.

---

### HpcCacheDirectoryActiveDirectory <a name="HpcCacheDirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheDirectoryActiveDirectory;

HpcCacheDirectoryActiveDirectory.builder()
    .cacheNetbiosName(java.lang.String)
    .dnsPrimaryIp(java.lang.String)
    .domainName(java.lang.String)
    .domainNetbiosName(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .dnsSecondaryIp(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.cacheNetbiosName">cacheNetbiosName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#cache_netbios_name HpcCache#cache_netbios_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsPrimaryIp">dnsPrimaryIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#dns_primary_ip HpcCache#dns_primary_ip}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#domain_name HpcCache#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainNetbiosName">domainNetbiosName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#domain_netbios_name HpcCache#domain_netbios_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#password HpcCache#password}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#username HpcCache#username}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsSecondaryIp">dnsSecondaryIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#dns_secondary_ip HpcCache#dns_secondary_ip}. |

---

##### `cacheNetbiosName`<sup>Required</sup> <a name="cacheNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.cacheNetbiosName"></a>

```java
public java.lang.String getCacheNetbiosName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#cache_netbios_name HpcCache#cache_netbios_name}.

---

##### `dnsPrimaryIp`<sup>Required</sup> <a name="dnsPrimaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsPrimaryIp"></a>

```java
public java.lang.String getDnsPrimaryIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#dns_primary_ip HpcCache#dns_primary_ip}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#domain_name HpcCache#domain_name}.

---

##### `domainNetbiosName`<sup>Required</sup> <a name="domainNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainNetbiosName"></a>

```java
public java.lang.String getDomainNetbiosName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#domain_netbios_name HpcCache#domain_netbios_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#password HpcCache#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#username HpcCache#username}.

---

##### `dnsSecondaryIp`<sup>Optional</sup> <a name="dnsSecondaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsSecondaryIp"></a>

```java
public java.lang.String getDnsSecondaryIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#dns_secondary_ip HpcCache#dns_secondary_ip}.

---

### HpcCacheDirectoryFlatFile <a name="HpcCacheDirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheDirectoryFlatFile;

HpcCacheDirectoryFlatFile.builder()
    .groupFileUri(java.lang.String)
    .passwordFileUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.groupFileUri">groupFileUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#group_file_uri HpcCache#group_file_uri}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.passwordFileUri">passwordFileUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#password_file_uri HpcCache#password_file_uri}. |

---

##### `groupFileUri`<sup>Required</sup> <a name="groupFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.groupFileUri"></a>

```java
public java.lang.String getGroupFileUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#group_file_uri HpcCache#group_file_uri}.

---

##### `passwordFileUri`<sup>Required</sup> <a name="passwordFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.passwordFileUri"></a>

```java
public java.lang.String getPasswordFileUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#password_file_uri HpcCache#password_file_uri}.

---

### HpcCacheDirectoryLdap <a name="HpcCacheDirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheDirectoryLdap;

HpcCacheDirectoryLdap.builder()
    .baseDn(java.lang.String)
    .server(java.lang.String)
//  .bind(HpcCacheDirectoryLdapBind)
//  .certificateValidationUri(java.lang.String)
//  .downloadCertificateAutomatically(java.lang.Boolean)
//  .downloadCertificateAutomatically(IResolvable)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.baseDn">baseDn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#base_dn HpcCache#base_dn}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.server">server</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#server HpcCache#server}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.bind">bind</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a></code> | bind block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.certificateValidationUri">certificateValidationUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#certificate_validation_uri HpcCache#certificate_validation_uri}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.downloadCertificateAutomatically">downloadCertificateAutomatically</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#download_certificate_automatically HpcCache#download_certificate_automatically}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#encrypted HpcCache#encrypted}. |

---

##### `baseDn`<sup>Required</sup> <a name="baseDn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.baseDn"></a>

```java
public java.lang.String getBaseDn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#base_dn HpcCache#base_dn}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#server HpcCache#server}.

---

##### `bind`<sup>Optional</sup> <a name="bind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.bind"></a>

```java
public HpcCacheDirectoryLdapBind getBind();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

bind block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#bind HpcCache#bind}

---

##### `certificateValidationUri`<sup>Optional</sup> <a name="certificateValidationUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.certificateValidationUri"></a>

```java
public java.lang.String getCertificateValidationUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#certificate_validation_uri HpcCache#certificate_validation_uri}.

---

##### `downloadCertificateAutomatically`<sup>Optional</sup> <a name="downloadCertificateAutomatically" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.downloadCertificateAutomatically"></a>

```java
public java.lang.Object getDownloadCertificateAutomatically();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#download_certificate_automatically HpcCache#download_certificate_automatically}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#encrypted HpcCache#encrypted}.

---

### HpcCacheDirectoryLdapBind <a name="HpcCacheDirectoryLdapBind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheDirectoryLdapBind;

HpcCacheDirectoryLdapBind.builder()
    .dn(java.lang.String)
    .password(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.dn">dn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#dn HpcCache#dn}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#password HpcCache#password}. |

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.dn"></a>

```java
public java.lang.String getDn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#dn HpcCache#dn}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#password HpcCache#password}.

---

### HpcCacheDns <a name="HpcCacheDns" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheDns;

HpcCacheDns.builder()
    .servers(java.util.List<java.lang.String>)
//  .searchDomain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.servers">servers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#servers HpcCache#servers}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.searchDomain">searchDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#search_domain HpcCache#search_domain}. |

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.servers"></a>

```java
public java.util.List<java.lang.String> getServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#servers HpcCache#servers}.

---

##### `searchDomain`<sup>Optional</sup> <a name="searchDomain" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.searchDomain"></a>

```java
public java.lang.String getSearchDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#search_domain HpcCache#search_domain}.

---

### HpcCacheIdentity <a name="HpcCacheIdentity" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheIdentity;

HpcCacheIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#type HpcCache#type}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#identity_ids HpcCache#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#type HpcCache#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#identity_ids HpcCache#identity_ids}.

---

### HpcCacheTimeouts <a name="HpcCacheTimeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheTimeouts;

HpcCacheTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#create HpcCache#create}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#delete HpcCache#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#read HpcCache#read}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#update HpcCache#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#create HpcCache#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#delete HpcCache#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#read HpcCache#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/hpc_cache#update HpcCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HpcCacheDefaultAccessPolicyAccessRuleList <a name="HpcCacheDefaultAccessPolicyAccessRuleList" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheDefaultAccessPolicyAccessRuleList;

new HpcCacheDefaultAccessPolicyAccessRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.get"></a>

```java
public HpcCacheDefaultAccessPolicyAccessRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>>

---


### HpcCacheDefaultAccessPolicyAccessRuleOutputReference <a name="HpcCacheDefaultAccessPolicyAccessRuleOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference;

new HpcCacheDefaultAccessPolicyAccessRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousGid">resetAnonymousGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousUid">resetAnonymousUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetRootSquashEnabled">resetRootSquashEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSubmountAccessEnabled">resetSubmountAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSuidEnabled">resetSuidEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnonymousGid` <a name="resetAnonymousGid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousGid"></a>

```java
public void resetAnonymousGid()
```

##### `resetAnonymousUid` <a name="resetAnonymousUid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousUid"></a>

```java
public void resetAnonymousUid()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetRootSquashEnabled` <a name="resetRootSquashEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetRootSquashEnabled"></a>

```java
public void resetRootSquashEnabled()
```

##### `resetSubmountAccessEnabled` <a name="resetSubmountAccessEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSubmountAccessEnabled"></a>

```java
public void resetSubmountAccessEnabled()
```

##### `resetSuidEnabled` <a name="resetSuidEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSuidEnabled"></a>

```java
public void resetSuidEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.accessInput">accessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGidInput">anonymousGidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUidInput">anonymousUidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabledInput">rootSquashEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabledInput">submountAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabledInput">suidEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.access">access</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGid">anonymousGid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUid">anonymousUid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabled">rootSquashEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabled">submountAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabled">suidEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.accessInput"></a>

```java
public java.lang.String getAccessInput();
```

- *Type:* java.lang.String

---

##### `anonymousGidInput`<sup>Optional</sup> <a name="anonymousGidInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGidInput"></a>

```java
public java.lang.Number getAnonymousGidInput();
```

- *Type:* java.lang.Number

---

##### `anonymousUidInput`<sup>Optional</sup> <a name="anonymousUidInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUidInput"></a>

```java
public java.lang.Number getAnonymousUidInput();
```

- *Type:* java.lang.Number

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `rootSquashEnabledInput`<sup>Optional</sup> <a name="rootSquashEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabledInput"></a>

```java
public java.lang.Object getRootSquashEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `submountAccessEnabledInput`<sup>Optional</sup> <a name="submountAccessEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabledInput"></a>

```java
public java.lang.Object getSubmountAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suidEnabledInput`<sup>Optional</sup> <a name="suidEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabledInput"></a>

```java
public java.lang.Object getSuidEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

---

##### `anonymousGid`<sup>Required</sup> <a name="anonymousGid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGid"></a>

```java
public java.lang.Number getAnonymousGid();
```

- *Type:* java.lang.Number

---

##### `anonymousUid`<sup>Required</sup> <a name="anonymousUid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUid"></a>

```java
public java.lang.Number getAnonymousUid();
```

- *Type:* java.lang.Number

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `rootSquashEnabled`<sup>Required</sup> <a name="rootSquashEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabled"></a>

```java
public java.lang.Object getRootSquashEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `submountAccessEnabled`<sup>Required</sup> <a name="submountAccessEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabled"></a>

```java
public java.lang.Object getSubmountAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suidEnabled`<sup>Required</sup> <a name="suidEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabled"></a>

```java
public java.lang.Object getSuidEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>

---


### HpcCacheDefaultAccessPolicyOutputReference <a name="HpcCacheDefaultAccessPolicyOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheDefaultAccessPolicyOutputReference;

new HpcCacheDefaultAccessPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.putAccessRule">putAccessRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessRule` <a name="putAccessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.putAccessRule"></a>

```java
public void putAccessRule(IResolvable OR java.util.List<HpcCacheDefaultAccessPolicyAccessRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.putAccessRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRule">accessRule</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList">HpcCacheDefaultAccessPolicyAccessRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRuleInput">accessRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessRule`<sup>Required</sup> <a name="accessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRule"></a>

```java
public HpcCacheDefaultAccessPolicyAccessRuleList getAccessRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList">HpcCacheDefaultAccessPolicyAccessRuleList</a>

---

##### `accessRuleInput`<sup>Optional</sup> <a name="accessRuleInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRuleInput"></a>

```java
public java.lang.Object getAccessRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule">HpcCacheDefaultAccessPolicyAccessRule</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.internalValue"></a>

```java
public HpcCacheDefaultAccessPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

---


### HpcCacheDirectoryActiveDirectoryOutputReference <a name="HpcCacheDirectoryActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheDirectoryActiveDirectoryOutputReference;

new HpcCacheDirectoryActiveDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resetDnsSecondaryIp">resetDnsSecondaryIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsSecondaryIp` <a name="resetDnsSecondaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resetDnsSecondaryIp"></a>

```java
public void resetDnsSecondaryIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosNameInput">cacheNetbiosNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIpInput">dnsPrimaryIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIpInput">dnsSecondaryIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosNameInput">domainNetbiosNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosName">cacheNetbiosName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIp">dnsPrimaryIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIp">dnsSecondaryIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosName">domainNetbiosName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheNetbiosNameInput`<sup>Optional</sup> <a name="cacheNetbiosNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosNameInput"></a>

```java
public java.lang.String getCacheNetbiosNameInput();
```

- *Type:* java.lang.String

---

##### `dnsPrimaryIpInput`<sup>Optional</sup> <a name="dnsPrimaryIpInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIpInput"></a>

```java
public java.lang.String getDnsPrimaryIpInput();
```

- *Type:* java.lang.String

---

##### `dnsSecondaryIpInput`<sup>Optional</sup> <a name="dnsSecondaryIpInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIpInput"></a>

```java
public java.lang.String getDnsSecondaryIpInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `domainNetbiosNameInput`<sup>Optional</sup> <a name="domainNetbiosNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosNameInput"></a>

```java
public java.lang.String getDomainNetbiosNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `cacheNetbiosName`<sup>Required</sup> <a name="cacheNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosName"></a>

```java
public java.lang.String getCacheNetbiosName();
```

- *Type:* java.lang.String

---

##### `dnsPrimaryIp`<sup>Required</sup> <a name="dnsPrimaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIp"></a>

```java
public java.lang.String getDnsPrimaryIp();
```

- *Type:* java.lang.String

---

##### `dnsSecondaryIp`<sup>Required</sup> <a name="dnsSecondaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIp"></a>

```java
public java.lang.String getDnsSecondaryIp();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `domainNetbiosName`<sup>Required</sup> <a name="domainNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosName"></a>

```java
public java.lang.String getDomainNetbiosName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.internalValue"></a>

```java
public HpcCacheDirectoryActiveDirectory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

---


### HpcCacheDirectoryFlatFileOutputReference <a name="HpcCacheDirectoryFlatFileOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheDirectoryFlatFileOutputReference;

new HpcCacheDirectoryFlatFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUriInput">groupFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUriInput">passwordFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUri">groupFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUri">passwordFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupFileUriInput`<sup>Optional</sup> <a name="groupFileUriInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUriInput"></a>

```java
public java.lang.String getGroupFileUriInput();
```

- *Type:* java.lang.String

---

##### `passwordFileUriInput`<sup>Optional</sup> <a name="passwordFileUriInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUriInput"></a>

```java
public java.lang.String getPasswordFileUriInput();
```

- *Type:* java.lang.String

---

##### `groupFileUri`<sup>Required</sup> <a name="groupFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUri"></a>

```java
public java.lang.String getGroupFileUri();
```

- *Type:* java.lang.String

---

##### `passwordFileUri`<sup>Required</sup> <a name="passwordFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUri"></a>

```java
public java.lang.String getPasswordFileUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.internalValue"></a>

```java
public HpcCacheDirectoryFlatFile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

---


### HpcCacheDirectoryLdapBindOutputReference <a name="HpcCacheDirectoryLdapBindOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheDirectoryLdapBindOutputReference;

new HpcCacheDirectoryLdapBindOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dnInput">dnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dn">dn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnInput`<sup>Optional</sup> <a name="dnInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dnInput"></a>

```java
public java.lang.String getDnInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dn"></a>

```java
public java.lang.String getDn();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.internalValue"></a>

```java
public HpcCacheDirectoryLdapBind getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

---


### HpcCacheDirectoryLdapOutputReference <a name="HpcCacheDirectoryLdapOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheDirectoryLdapOutputReference;

new HpcCacheDirectoryLdapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind">putBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetBind">resetBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetCertificateValidationUri">resetCertificateValidationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetDownloadCertificateAutomatically">resetDownloadCertificateAutomatically</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBind` <a name="putBind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind"></a>

```java
public void putBind(HpcCacheDirectoryLdapBind value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

---

##### `resetBind` <a name="resetBind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetBind"></a>

```java
public void resetBind()
```

##### `resetCertificateValidationUri` <a name="resetCertificateValidationUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetCertificateValidationUri"></a>

```java
public void resetCertificateValidationUri()
```

##### `resetDownloadCertificateAutomatically` <a name="resetDownloadCertificateAutomatically" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetDownloadCertificateAutomatically"></a>

```java
public void resetDownloadCertificateAutomatically()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetEncrypted"></a>

```java
public void resetEncrypted()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bind">bind</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference">HpcCacheDirectoryLdapBindOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDnInput">baseDnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bindInput">bindInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUriInput">certificateValidationUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomaticallyInput">downloadCertificateAutomaticallyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDn">baseDn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUri">certificateValidationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomatically">downloadCertificateAutomatically</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bind`<sup>Required</sup> <a name="bind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bind"></a>

```java
public HpcCacheDirectoryLdapBindOutputReference getBind();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference">HpcCacheDirectoryLdapBindOutputReference</a>

---

##### `baseDnInput`<sup>Optional</sup> <a name="baseDnInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDnInput"></a>

```java
public java.lang.String getBaseDnInput();
```

- *Type:* java.lang.String

---

##### `bindInput`<sup>Optional</sup> <a name="bindInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bindInput"></a>

```java
public HpcCacheDirectoryLdapBind getBindInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

---

##### `certificateValidationUriInput`<sup>Optional</sup> <a name="certificateValidationUriInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUriInput"></a>

```java
public java.lang.String getCertificateValidationUriInput();
```

- *Type:* java.lang.String

---

##### `downloadCertificateAutomaticallyInput`<sup>Optional</sup> <a name="downloadCertificateAutomaticallyInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomaticallyInput"></a>

```java
public java.lang.Object getDownloadCertificateAutomaticallyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `baseDn`<sup>Required</sup> <a name="baseDn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDn"></a>

```java
public java.lang.String getBaseDn();
```

- *Type:* java.lang.String

---

##### `certificateValidationUri`<sup>Required</sup> <a name="certificateValidationUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUri"></a>

```java
public java.lang.String getCertificateValidationUri();
```

- *Type:* java.lang.String

---

##### `downloadCertificateAutomatically`<sup>Required</sup> <a name="downloadCertificateAutomatically" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomatically"></a>

```java
public java.lang.Object getDownloadCertificateAutomatically();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.internalValue"></a>

```java
public HpcCacheDirectoryLdap getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

---


### HpcCacheDnsOutputReference <a name="HpcCacheDnsOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheDnsOutputReference;

new HpcCacheDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resetSearchDomain">resetSearchDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSearchDomain` <a name="resetSearchDomain" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resetSearchDomain"></a>

```java
public void resetSearchDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomainInput">searchDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.serversInput">serversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomain">searchDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.servers">servers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `searchDomainInput`<sup>Optional</sup> <a name="searchDomainInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomainInput"></a>

```java
public java.lang.String getSearchDomainInput();
```

- *Type:* java.lang.String

---

##### `serversInput`<sup>Optional</sup> <a name="serversInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.serversInput"></a>

```java
public java.util.List<java.lang.String> getServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchDomain`<sup>Required</sup> <a name="searchDomain" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomain"></a>

```java
public java.lang.String getSearchDomain();
```

- *Type:* java.lang.String

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.servers"></a>

```java
public java.util.List<java.lang.String> getServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.internalValue"></a>

```java
public HpcCacheDns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

---


### HpcCacheIdentityOutputReference <a name="HpcCacheIdentityOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheIdentityOutputReference;

new HpcCacheIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.internalValue"></a>

```java
public HpcCacheIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

---


### HpcCacheTimeoutsOutputReference <a name="HpcCacheTimeoutsOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.hpc_cache.HpcCacheTimeoutsOutputReference;

new HpcCacheTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>

---



