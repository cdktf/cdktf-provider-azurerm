# `azurerm_batch_account`

Refer to the Terraform Registory for docs: [`azurerm_batch_account`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account).

# `batchAccount` Submodule <a name="`batchAccount` Submodule" id="@cdktf/provider-azurerm.batchAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchAccount <a name="BatchAccount" id="@cdktf/provider-azurerm.batchAccount.BatchAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account azurerm_batch_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccount;

BatchAccount.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .allowedAuthenticationModes(java.util.List<java.lang.String>)
//  .encryption(IResolvable)
//  .encryption(java.util.List<BatchAccountEncryption>)
//  .id(java.lang.String)
//  .identity(BatchAccountIdentity)
//  .keyVaultReference(BatchAccountKeyVaultReference)
//  .networkProfile(BatchAccountNetworkProfile)
//  .poolAllocationMode(java.lang.String)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .storageAccountAuthenticationMode(java.lang.String)
//  .storageAccountId(java.lang.String)
//  .storageAccountNodeIdentity(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BatchAccountTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#location BatchAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#name BatchAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#resource_group_name BatchAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.allowedAuthenticationModes">allowedAuthenticationModes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#allowed_authentication_modes BatchAccount#allowed_authentication_modes}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.encryption">encryption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#encryption BatchAccount#encryption}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#id BatchAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.keyVaultReference">keyVaultReference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a></code> | key_vault_reference block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.poolAllocationMode">poolAllocationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#pool_allocation_mode BatchAccount#pool_allocation_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#public_network_access_enabled BatchAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.storageAccountAuthenticationMode">storageAccountAuthenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#storage_account_authentication_mode BatchAccount#storage_account_authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#storage_account_id BatchAccount#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.storageAccountNodeIdentity">storageAccountNodeIdentity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#storage_account_node_identity BatchAccount#storage_account_node_identity}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#tags BatchAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#location BatchAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#name BatchAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#resource_group_name BatchAccount#resource_group_name}.

---

##### `allowedAuthenticationModes`<sup>Optional</sup> <a name="allowedAuthenticationModes" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.allowedAuthenticationModes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#allowed_authentication_modes BatchAccount#allowed_authentication_modes}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.encryption"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#encryption BatchAccount#encryption}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#id BatchAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#identity BatchAccount#identity}

---

##### `keyVaultReference`<sup>Optional</sup> <a name="keyVaultReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.keyVaultReference"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a>

key_vault_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#key_vault_reference BatchAccount#key_vault_reference}

---

##### `networkProfile`<sup>Optional</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.networkProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#network_profile BatchAccount#network_profile}

---

##### `poolAllocationMode`<sup>Optional</sup> <a name="poolAllocationMode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.poolAllocationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#pool_allocation_mode BatchAccount#pool_allocation_mode}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#public_network_access_enabled BatchAccount#public_network_access_enabled}.

---

##### `storageAccountAuthenticationMode`<sup>Optional</sup> <a name="storageAccountAuthenticationMode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.storageAccountAuthenticationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#storage_account_authentication_mode BatchAccount#storage_account_authentication_mode}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.storageAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#storage_account_id BatchAccount#storage_account_id}.

---

##### `storageAccountNodeIdentity`<sup>Optional</sup> <a name="storageAccountNodeIdentity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.storageAccountNodeIdentity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#storage_account_node_identity BatchAccount#storage_account_node_identity}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#tags BatchAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#timeouts BatchAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.putKeyVaultReference">putKeyVaultReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.putNetworkProfile">putNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetAllowedAuthenticationModes">resetAllowedAuthenticationModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetKeyVaultReference">resetKeyVaultReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetNetworkProfile">resetNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetPoolAllocationMode">resetPoolAllocationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountAuthenticationMode">resetStorageAccountAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountId">resetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountNodeIdentity">resetStorageAccountNodeIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEncryption` <a name="putEncryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putEncryption"></a>

```java
public void putEncryption(IResolvable OR java.util.List<BatchAccountEncryption> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putEncryption.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putIdentity"></a>

```java
public void putIdentity(BatchAccountIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a>

---

##### `putKeyVaultReference` <a name="putKeyVaultReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putKeyVaultReference"></a>

```java
public void putKeyVaultReference(BatchAccountKeyVaultReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putKeyVaultReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a>

---

##### `putNetworkProfile` <a name="putNetworkProfile" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putNetworkProfile"></a>

```java
public void putNetworkProfile(BatchAccountNetworkProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putNetworkProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putTimeouts"></a>

```java
public void putTimeouts(BatchAccountTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a>

---

##### `resetAllowedAuthenticationModes` <a name="resetAllowedAuthenticationModes" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetAllowedAuthenticationModes"></a>

```java
public void resetAllowedAuthenticationModes()
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetKeyVaultReference` <a name="resetKeyVaultReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetKeyVaultReference"></a>

```java
public void resetKeyVaultReference()
```

##### `resetNetworkProfile` <a name="resetNetworkProfile" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetNetworkProfile"></a>

```java
public void resetNetworkProfile()
```

##### `resetPoolAllocationMode` <a name="resetPoolAllocationMode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetPoolAllocationMode"></a>

```java
public void resetPoolAllocationMode()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetStorageAccountAuthenticationMode` <a name="resetStorageAccountAuthenticationMode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountAuthenticationMode"></a>

```java
public void resetStorageAccountAuthenticationMode()
```

##### `resetStorageAccountId` <a name="resetStorageAccountId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountId"></a>

```java
public void resetStorageAccountId()
```

##### `resetStorageAccountNodeIdentity` <a name="resetStorageAccountNodeIdentity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountNodeIdentity"></a>

```java
public void resetStorageAccountNodeIdentity()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccount;

BatchAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccount;

BatchAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccount;

BatchAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.accountEndpoint">accountEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList">BatchAccountEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference">BatchAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.keyVaultReference">keyVaultReference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference">BatchAccountKeyVaultReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference">BatchAccountNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.primaryAccessKey">primaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference">BatchAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.allowedAuthenticationModesInput">allowedAuthenticationModesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.encryptionInput">encryptionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.keyVaultReferenceInput">keyVaultReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.networkProfileInput">networkProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.poolAllocationModeInput">poolAllocationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountAuthenticationModeInput">storageAccountAuthenticationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountNodeIdentityInput">storageAccountNodeIdentityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.allowedAuthenticationModes">allowedAuthenticationModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.poolAllocationMode">poolAllocationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountAuthenticationMode">storageAccountAuthenticationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountNodeIdentity">storageAccountNodeIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountEndpoint`<sup>Required</sup> <a name="accountEndpoint" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.accountEndpoint"></a>

```java
public java.lang.String getAccountEndpoint();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.encryption"></a>

```java
public BatchAccountEncryptionList getEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList">BatchAccountEncryptionList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.identity"></a>

```java
public BatchAccountIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference">BatchAccountIdentityOutputReference</a>

---

##### `keyVaultReference`<sup>Required</sup> <a name="keyVaultReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.keyVaultReference"></a>

```java
public BatchAccountKeyVaultReferenceOutputReference getKeyVaultReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference">BatchAccountKeyVaultReferenceOutputReference</a>

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.networkProfile"></a>

```java
public BatchAccountNetworkProfileOutputReference getNetworkProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference">BatchAccountNetworkProfileOutputReference</a>

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.primaryAccessKey"></a>

```java
public java.lang.String getPrimaryAccessKey();
```

- *Type:* java.lang.String

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.secondaryAccessKey"></a>

```java
public java.lang.String getSecondaryAccessKey();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.timeouts"></a>

```java
public BatchAccountTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference">BatchAccountTimeoutsOutputReference</a>

---

##### `allowedAuthenticationModesInput`<sup>Optional</sup> <a name="allowedAuthenticationModesInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.allowedAuthenticationModesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAuthenticationModesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.encryptionInput"></a>

```java
public java.lang.Object getEncryptionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.identityInput"></a>

```java
public BatchAccountIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultReferenceInput`<sup>Optional</sup> <a name="keyVaultReferenceInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.keyVaultReferenceInput"></a>

```java
public BatchAccountKeyVaultReference getKeyVaultReferenceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkProfileInput`<sup>Optional</sup> <a name="networkProfileInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.networkProfileInput"></a>

```java
public BatchAccountNetworkProfile getNetworkProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a>

---

##### `poolAllocationModeInput`<sup>Optional</sup> <a name="poolAllocationModeInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.poolAllocationModeInput"></a>

```java
public java.lang.String getPoolAllocationModeInput();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountAuthenticationModeInput`<sup>Optional</sup> <a name="storageAccountAuthenticationModeInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountAuthenticationModeInput"></a>

```java
public java.lang.String getStorageAccountAuthenticationModeInput();
```

- *Type:* java.lang.String

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `storageAccountNodeIdentityInput`<sup>Optional</sup> <a name="storageAccountNodeIdentityInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountNodeIdentityInput"></a>

```java
public java.lang.String getStorageAccountNodeIdentityInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a>

---

##### `allowedAuthenticationModes`<sup>Required</sup> <a name="allowedAuthenticationModes" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.allowedAuthenticationModes"></a>

```java
public java.util.List<java.lang.String> getAllowedAuthenticationModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `poolAllocationMode`<sup>Required</sup> <a name="poolAllocationMode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.poolAllocationMode"></a>

```java
public java.lang.String getPoolAllocationMode();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `storageAccountAuthenticationMode`<sup>Required</sup> <a name="storageAccountAuthenticationMode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountAuthenticationMode"></a>

```java
public java.lang.String getStorageAccountAuthenticationMode();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

##### `storageAccountNodeIdentity`<sup>Required</sup> <a name="storageAccountNodeIdentity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountNodeIdentity"></a>

```java
public java.lang.String getStorageAccountNodeIdentity();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BatchAccountConfig <a name="BatchAccountConfig" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountConfig;

BatchAccountConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .allowedAuthenticationModes(java.util.List<java.lang.String>)
//  .encryption(IResolvable)
//  .encryption(java.util.List<BatchAccountEncryption>)
//  .id(java.lang.String)
//  .identity(BatchAccountIdentity)
//  .keyVaultReference(BatchAccountKeyVaultReference)
//  .networkProfile(BatchAccountNetworkProfile)
//  .poolAllocationMode(java.lang.String)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .storageAccountAuthenticationMode(java.lang.String)
//  .storageAccountId(java.lang.String)
//  .storageAccountNodeIdentity(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BatchAccountTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#location BatchAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#name BatchAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#resource_group_name BatchAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.allowedAuthenticationModes">allowedAuthenticationModes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#allowed_authentication_modes BatchAccount#allowed_authentication_modes}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.encryption">encryption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#encryption BatchAccount#encryption}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#id BatchAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.keyVaultReference">keyVaultReference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a></code> | key_vault_reference block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.poolAllocationMode">poolAllocationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#pool_allocation_mode BatchAccount#pool_allocation_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#public_network_access_enabled BatchAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountAuthenticationMode">storageAccountAuthenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#storage_account_authentication_mode BatchAccount#storage_account_authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#storage_account_id BatchAccount#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountNodeIdentity">storageAccountNodeIdentity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#storage_account_node_identity BatchAccount#storage_account_node_identity}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#tags BatchAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#location BatchAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#name BatchAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#resource_group_name BatchAccount#resource_group_name}.

---

##### `allowedAuthenticationModes`<sup>Optional</sup> <a name="allowedAuthenticationModes" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.allowedAuthenticationModes"></a>

```java
public java.util.List<java.lang.String> getAllowedAuthenticationModes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#allowed_authentication_modes BatchAccount#allowed_authentication_modes}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.encryption"></a>

```java
public java.lang.Object getEncryption();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#encryption BatchAccount#encryption}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#id BatchAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.identity"></a>

```java
public BatchAccountIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#identity BatchAccount#identity}

---

##### `keyVaultReference`<sup>Optional</sup> <a name="keyVaultReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.keyVaultReference"></a>

```java
public BatchAccountKeyVaultReference getKeyVaultReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a>

key_vault_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#key_vault_reference BatchAccount#key_vault_reference}

---

##### `networkProfile`<sup>Optional</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.networkProfile"></a>

```java
public BatchAccountNetworkProfile getNetworkProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#network_profile BatchAccount#network_profile}

---

##### `poolAllocationMode`<sup>Optional</sup> <a name="poolAllocationMode" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.poolAllocationMode"></a>

```java
public java.lang.String getPoolAllocationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#pool_allocation_mode BatchAccount#pool_allocation_mode}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#public_network_access_enabled BatchAccount#public_network_access_enabled}.

---

##### `storageAccountAuthenticationMode`<sup>Optional</sup> <a name="storageAccountAuthenticationMode" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountAuthenticationMode"></a>

```java
public java.lang.String getStorageAccountAuthenticationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#storage_account_authentication_mode BatchAccount#storage_account_authentication_mode}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#storage_account_id BatchAccount#storage_account_id}.

---

##### `storageAccountNodeIdentity`<sup>Optional</sup> <a name="storageAccountNodeIdentity" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountNodeIdentity"></a>

```java
public java.lang.String getStorageAccountNodeIdentity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#storage_account_node_identity BatchAccount#storage_account_node_identity}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#tags BatchAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.timeouts"></a>

```java
public BatchAccountTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#timeouts BatchAccount#timeouts}

---

### BatchAccountEncryption <a name="BatchAccountEncryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountEncryption;

BatchAccountEncryption.builder()
//  .keyVaultKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#key_vault_key_id BatchAccount#key_vault_key_id}. |

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#key_vault_key_id BatchAccount#key_vault_key_id}.

---

### BatchAccountIdentity <a name="BatchAccountIdentity" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountIdentity;

BatchAccountIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#type BatchAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#identity_ids BatchAccount#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#type BatchAccount#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#identity_ids BatchAccount#identity_ids}.

---

### BatchAccountKeyVaultReference <a name="BatchAccountKeyVaultReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountKeyVaultReference;

BatchAccountKeyVaultReference.builder()
    .id(java.lang.String)
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#id BatchAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#url BatchAccount#url}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#id BatchAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#url BatchAccount#url}.

---

### BatchAccountNetworkProfile <a name="BatchAccountNetworkProfile" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountNetworkProfile;

BatchAccountNetworkProfile.builder()
//  .accountAccess(BatchAccountNetworkProfileAccountAccess)
//  .nodeManagementAccess(BatchAccountNetworkProfileNodeManagementAccess)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile.property.accountAccess">accountAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a></code> | account_access block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile.property.nodeManagementAccess">nodeManagementAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a></code> | node_management_access block. |

---

##### `accountAccess`<sup>Optional</sup> <a name="accountAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile.property.accountAccess"></a>

```java
public BatchAccountNetworkProfileAccountAccess getAccountAccess();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a>

account_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#account_access BatchAccount#account_access}

---

##### `nodeManagementAccess`<sup>Optional</sup> <a name="nodeManagementAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile.property.nodeManagementAccess"></a>

```java
public BatchAccountNetworkProfileNodeManagementAccess getNodeManagementAccess();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a>

node_management_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#node_management_access BatchAccount#node_management_access}

---

### BatchAccountNetworkProfileAccountAccess <a name="BatchAccountNetworkProfileAccountAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountNetworkProfileAccountAccess;

BatchAccountNetworkProfileAccountAccess.builder()
//  .defaultAction(java.lang.String)
//  .ipRule(IResolvable)
//  .ipRule(java.util.List<BatchAccountNetworkProfileAccountAccessIpRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#default_action BatchAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess.property.ipRule">ipRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>></code> | ip_rule block. |

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#default_action BatchAccount#default_action}.

---

##### `ipRule`<sup>Optional</sup> <a name="ipRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess.property.ipRule"></a>

```java
public java.lang.Object getIpRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>>

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#ip_rule BatchAccount#ip_rule}

---

### BatchAccountNetworkProfileAccountAccessIpRule <a name="BatchAccountNetworkProfileAccountAccessIpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountNetworkProfileAccountAccessIpRule;

BatchAccountNetworkProfileAccountAccessIpRule.builder()
    .ipRange(java.lang.String)
//  .action(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#ip_range BatchAccount#ip_range}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#action BatchAccount#action}. |

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#ip_range BatchAccount#ip_range}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#action BatchAccount#action}.

---

### BatchAccountNetworkProfileNodeManagementAccess <a name="BatchAccountNetworkProfileNodeManagementAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountNetworkProfileNodeManagementAccess;

BatchAccountNetworkProfileNodeManagementAccess.builder()
//  .defaultAction(java.lang.String)
//  .ipRule(IResolvable)
//  .ipRule(java.util.List<BatchAccountNetworkProfileNodeManagementAccessIpRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#default_action BatchAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess.property.ipRule">ipRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>></code> | ip_rule block. |

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#default_action BatchAccount#default_action}.

---

##### `ipRule`<sup>Optional</sup> <a name="ipRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess.property.ipRule"></a>

```java
public java.lang.Object getIpRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>>

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#ip_rule BatchAccount#ip_rule}

---

### BatchAccountNetworkProfileNodeManagementAccessIpRule <a name="BatchAccountNetworkProfileNodeManagementAccessIpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountNetworkProfileNodeManagementAccessIpRule;

BatchAccountNetworkProfileNodeManagementAccessIpRule.builder()
    .ipRange(java.lang.String)
//  .action(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#ip_range BatchAccount#ip_range}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#action BatchAccount#action}. |

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#ip_range BatchAccount#ip_range}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#action BatchAccount#action}.

---

### BatchAccountTimeouts <a name="BatchAccountTimeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountTimeouts;

BatchAccountTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#create BatchAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#delete BatchAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#read BatchAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#update BatchAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#create BatchAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#delete BatchAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#read BatchAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/batch_account#update BatchAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchAccountEncryptionList <a name="BatchAccountEncryptionList" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountEncryptionList;

new BatchAccountEncryptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.get"></a>

```java
public BatchAccountEncryptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>>

---


### BatchAccountEncryptionOutputReference <a name="BatchAccountEncryptionOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountEncryptionOutputReference;

new BatchAccountEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.resetKeyVaultKeyId"></a>

```java
public void resetKeyVaultKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```java
public java.lang.String getKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption">BatchAccountEncryption</a>

---


### BatchAccountIdentityOutputReference <a name="BatchAccountIdentityOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountIdentityOutputReference;

new BatchAccountIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.internalValue"></a>

```java
public BatchAccountIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a>

---


### BatchAccountKeyVaultReferenceOutputReference <a name="BatchAccountKeyVaultReferenceOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountKeyVaultReferenceOutputReference;

new BatchAccountKeyVaultReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.internalValue"></a>

```java
public BatchAccountKeyVaultReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a>

---


### BatchAccountNetworkProfileAccountAccessIpRuleList <a name="BatchAccountNetworkProfileAccountAccessIpRuleList" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountNetworkProfileAccountAccessIpRuleList;

new BatchAccountNetworkProfileAccountAccessIpRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.get"></a>

```java
public BatchAccountNetworkProfileAccountAccessIpRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>>

---


### BatchAccountNetworkProfileAccountAccessIpRuleOutputReference <a name="BatchAccountNetworkProfileAccountAccessIpRuleOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference;

new BatchAccountNetworkProfileAccountAccessIpRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.resetAction">resetAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.resetAction"></a>

```java
public void resetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.ipRangeInput">ipRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.ipRangeInput"></a>

```java
public java.lang.String getIpRangeInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>

---


### BatchAccountNetworkProfileAccountAccessOutputReference <a name="BatchAccountNetworkProfileAccountAccessOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountNetworkProfileAccountAccessOutputReference;

new BatchAccountNetworkProfileAccountAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.putIpRule">putIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resetDefaultAction">resetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resetIpRule">resetIpRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpRule` <a name="putIpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.putIpRule"></a>

```java
public void putIpRule(IResolvable OR java.util.List<BatchAccountNetworkProfileAccountAccessIpRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.putIpRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>>

---

##### `resetDefaultAction` <a name="resetDefaultAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resetDefaultAction"></a>

```java
public void resetDefaultAction()
```

##### `resetIpRule` <a name="resetIpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resetIpRule"></a>

```java
public void resetIpRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.ipRule">ipRule</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList">BatchAccountNetworkProfileAccountAccessIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.ipRuleInput">ipRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipRule`<sup>Required</sup> <a name="ipRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.ipRule"></a>

```java
public BatchAccountNetworkProfileAccountAccessIpRuleList getIpRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList">BatchAccountNetworkProfileAccountAccessIpRuleList</a>

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.defaultActionInput"></a>

```java
public java.lang.String getDefaultActionInput();
```

- *Type:* java.lang.String

---

##### `ipRuleInput`<sup>Optional</sup> <a name="ipRuleInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.ipRuleInput"></a>

```java
public java.lang.Object getIpRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule">BatchAccountNetworkProfileAccountAccessIpRule</a>>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.internalValue"></a>

```java
public BatchAccountNetworkProfileAccountAccess getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a>

---


### BatchAccountNetworkProfileNodeManagementAccessIpRuleList <a name="BatchAccountNetworkProfileNodeManagementAccessIpRuleList" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountNetworkProfileNodeManagementAccessIpRuleList;

new BatchAccountNetworkProfileNodeManagementAccessIpRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.get"></a>

```java
public BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>>

---


### BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference <a name="BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference;

new BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.resetAction">resetAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.resetAction"></a>

```java
public void resetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.ipRangeInput">ipRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.ipRangeInput"></a>

```java
public java.lang.String getIpRangeInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>

---


### BatchAccountNetworkProfileNodeManagementAccessOutputReference <a name="BatchAccountNetworkProfileNodeManagementAccessOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountNetworkProfileNodeManagementAccessOutputReference;

new BatchAccountNetworkProfileNodeManagementAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.putIpRule">putIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resetDefaultAction">resetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resetIpRule">resetIpRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpRule` <a name="putIpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.putIpRule"></a>

```java
public void putIpRule(IResolvable OR java.util.List<BatchAccountNetworkProfileNodeManagementAccessIpRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.putIpRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>>

---

##### `resetDefaultAction` <a name="resetDefaultAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resetDefaultAction"></a>

```java
public void resetDefaultAction()
```

##### `resetIpRule` <a name="resetIpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resetIpRule"></a>

```java
public void resetIpRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.ipRule">ipRule</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList">BatchAccountNetworkProfileNodeManagementAccessIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.ipRuleInput">ipRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipRule`<sup>Required</sup> <a name="ipRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.ipRule"></a>

```java
public BatchAccountNetworkProfileNodeManagementAccessIpRuleList getIpRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList">BatchAccountNetworkProfileNodeManagementAccessIpRuleList</a>

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.defaultActionInput"></a>

```java
public java.lang.String getDefaultActionInput();
```

- *Type:* java.lang.String

---

##### `ipRuleInput`<sup>Optional</sup> <a name="ipRuleInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.ipRuleInput"></a>

```java
public java.lang.Object getIpRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule">BatchAccountNetworkProfileNodeManagementAccessIpRule</a>>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.internalValue"></a>

```java
public BatchAccountNetworkProfileNodeManagementAccess getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a>

---


### BatchAccountNetworkProfileOutputReference <a name="BatchAccountNetworkProfileOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountNetworkProfileOutputReference;

new BatchAccountNetworkProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putAccountAccess">putAccountAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putNodeManagementAccess">putNodeManagementAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resetAccountAccess">resetAccountAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resetNodeManagementAccess">resetNodeManagementAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccountAccess` <a name="putAccountAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putAccountAccess"></a>

```java
public void putAccountAccess(BatchAccountNetworkProfileAccountAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putAccountAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a>

---

##### `putNodeManagementAccess` <a name="putNodeManagementAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putNodeManagementAccess"></a>

```java
public void putNodeManagementAccess(BatchAccountNetworkProfileNodeManagementAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putNodeManagementAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a>

---

##### `resetAccountAccess` <a name="resetAccountAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resetAccountAccess"></a>

```java
public void resetAccountAccess()
```

##### `resetNodeManagementAccess` <a name="resetNodeManagementAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resetNodeManagementAccess"></a>

```java
public void resetNodeManagementAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.accountAccess">accountAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference">BatchAccountNetworkProfileAccountAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.nodeManagementAccess">nodeManagementAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference">BatchAccountNetworkProfileNodeManagementAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.accountAccessInput">accountAccessInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.nodeManagementAccessInput">nodeManagementAccessInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountAccess`<sup>Required</sup> <a name="accountAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.accountAccess"></a>

```java
public BatchAccountNetworkProfileAccountAccessOutputReference getAccountAccess();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference">BatchAccountNetworkProfileAccountAccessOutputReference</a>

---

##### `nodeManagementAccess`<sup>Required</sup> <a name="nodeManagementAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.nodeManagementAccess"></a>

```java
public BatchAccountNetworkProfileNodeManagementAccessOutputReference getNodeManagementAccess();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference">BatchAccountNetworkProfileNodeManagementAccessOutputReference</a>

---

##### `accountAccessInput`<sup>Optional</sup> <a name="accountAccessInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.accountAccessInput"></a>

```java
public BatchAccountNetworkProfileAccountAccess getAccountAccessInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a>

---

##### `nodeManagementAccessInput`<sup>Optional</sup> <a name="nodeManagementAccessInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.nodeManagementAccessInput"></a>

```java
public BatchAccountNetworkProfileNodeManagementAccess getNodeManagementAccessInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.internalValue"></a>

```java
public BatchAccountNetworkProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a>

---


### BatchAccountTimeoutsOutputReference <a name="BatchAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.batch_account.BatchAccountTimeoutsOutputReference;

new BatchAccountTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a>

---



