# `azurerm_key_vault_managed_storage_account`

Refer to the Terraform Registory for docs: [`azurerm_key_vault_managed_storage_account`](https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account).

# `keyVaultManagedStorageAccount` Submodule <a name="`keyVaultManagedStorageAccount` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedStorageAccount <a name="KeyVaultManagedStorageAccount" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account azurerm_key_vault_managed_storage_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account.KeyVaultManagedStorageAccount;

KeyVaultManagedStorageAccount.Builder.create(Construct scope, java.lang.String id)
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
    .keyVaultId(java.lang.String)
    .name(java.lang.String)
    .storageAccountId(java.lang.String)
    .storageAccountKey(java.lang.String)
//  .id(java.lang.String)
//  .regenerateKeyAutomatically(java.lang.Boolean)
//  .regenerateKeyAutomatically(IResolvable)
//  .regenerationPeriod(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KeyVaultManagedStorageAccountTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#key_vault_id KeyVaultManagedStorageAccount#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#name KeyVaultManagedStorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#storage_account_id KeyVaultManagedStorageAccount#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#storage_account_key KeyVaultManagedStorageAccount#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#id KeyVaultManagedStorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.regenerateKeyAutomatically">regenerateKeyAutomatically</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#regenerate_key_automatically KeyVaultManagedStorageAccount#regenerate_key_automatically}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.regenerationPeriod">regenerationPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#regeneration_period KeyVaultManagedStorageAccount#regeneration_period}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#tags KeyVaultManagedStorageAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts">KeyVaultManagedStorageAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.keyVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#key_vault_id KeyVaultManagedStorageAccount#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#name KeyVaultManagedStorageAccount#name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.storageAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#storage_account_id KeyVaultManagedStorageAccount#storage_account_id}.

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.storageAccountKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#storage_account_key KeyVaultManagedStorageAccount#storage_account_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#id KeyVaultManagedStorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regenerateKeyAutomatically`<sup>Optional</sup> <a name="regenerateKeyAutomatically" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.regenerateKeyAutomatically"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#regenerate_key_automatically KeyVaultManagedStorageAccount#regenerate_key_automatically}.

---

##### `regenerationPeriod`<sup>Optional</sup> <a name="regenerationPeriod" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.regenerationPeriod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#regeneration_period KeyVaultManagedStorageAccount#regeneration_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#tags KeyVaultManagedStorageAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts">KeyVaultManagedStorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#timeouts KeyVaultManagedStorageAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.resetRegenerateKeyAutomatically">resetRegenerateKeyAutomatically</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.resetRegenerationPeriod">resetRegenerationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.putTimeouts"></a>

```java
public void putTimeouts(KeyVaultManagedStorageAccountTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts">KeyVaultManagedStorageAccountTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.resetId"></a>

```java
public void resetId()
```

##### `resetRegenerateKeyAutomatically` <a name="resetRegenerateKeyAutomatically" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.resetRegenerateKeyAutomatically"></a>

```java
public void resetRegenerateKeyAutomatically()
```

##### `resetRegenerationPeriod` <a name="resetRegenerationPeriod" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.resetRegenerationPeriod"></a>

```java
public void resetRegenerationPeriod()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultManagedStorageAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account.KeyVaultManagedStorageAccount;

KeyVaultManagedStorageAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account.KeyVaultManagedStorageAccount;

KeyVaultManagedStorageAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account.KeyVaultManagedStorageAccount;

KeyVaultManagedStorageAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account.KeyVaultManagedStorageAccount;

KeyVaultManagedStorageAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KeyVaultManagedStorageAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KeyVaultManagedStorageAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KeyVaultManagedStorageAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KeyVaultManagedStorageAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedStorageAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference">KeyVaultManagedStorageAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.regenerateKeyAutomaticallyInput">regenerateKeyAutomaticallyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.regenerationPeriodInput">regenerationPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts">KeyVaultManagedStorageAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.regenerateKeyAutomatically">regenerateKeyAutomatically</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.regenerationPeriod">regenerationPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.timeouts"></a>

```java
public KeyVaultManagedStorageAccountTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference">KeyVaultManagedStorageAccountTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regenerateKeyAutomaticallyInput`<sup>Optional</sup> <a name="regenerateKeyAutomaticallyInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.regenerateKeyAutomaticallyInput"></a>

```java
public java.lang.Object getRegenerateKeyAutomaticallyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regenerationPeriodInput`<sup>Optional</sup> <a name="regenerationPeriodInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.regenerationPeriodInput"></a>

```java
public java.lang.String getRegenerationPeriodInput();
```

- *Type:* java.lang.String

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.storageAccountKeyInput"></a>

```java
public java.lang.String getStorageAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts">KeyVaultManagedStorageAccountTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regenerateKeyAutomatically`<sup>Required</sup> <a name="regenerateKeyAutomatically" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.regenerateKeyAutomatically"></a>

```java
public java.lang.Object getRegenerateKeyAutomatically();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regenerationPeriod`<sup>Required</sup> <a name="regenerationPeriod" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.regenerationPeriod"></a>

```java
public java.lang.String getRegenerationPeriod();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedStorageAccountConfig <a name="KeyVaultManagedStorageAccountConfig" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account.KeyVaultManagedStorageAccountConfig;

KeyVaultManagedStorageAccountConfig.builder()
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
    .keyVaultId(java.lang.String)
    .name(java.lang.String)
    .storageAccountId(java.lang.String)
    .storageAccountKey(java.lang.String)
//  .id(java.lang.String)
//  .regenerateKeyAutomatically(java.lang.Boolean)
//  .regenerateKeyAutomatically(IResolvable)
//  .regenerationPeriod(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KeyVaultManagedStorageAccountTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#key_vault_id KeyVaultManagedStorageAccount#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#name KeyVaultManagedStorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#storage_account_id KeyVaultManagedStorageAccount#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#storage_account_key KeyVaultManagedStorageAccount#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#id KeyVaultManagedStorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.regenerateKeyAutomatically">regenerateKeyAutomatically</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#regenerate_key_automatically KeyVaultManagedStorageAccount#regenerate_key_automatically}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.regenerationPeriod">regenerationPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#regeneration_period KeyVaultManagedStorageAccount#regeneration_period}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#tags KeyVaultManagedStorageAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts">KeyVaultManagedStorageAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#key_vault_id KeyVaultManagedStorageAccount#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#name KeyVaultManagedStorageAccount#name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#storage_account_id KeyVaultManagedStorageAccount#storage_account_id}.

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#storage_account_key KeyVaultManagedStorageAccount#storage_account_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#id KeyVaultManagedStorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regenerateKeyAutomatically`<sup>Optional</sup> <a name="regenerateKeyAutomatically" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.regenerateKeyAutomatically"></a>

```java
public java.lang.Object getRegenerateKeyAutomatically();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#regenerate_key_automatically KeyVaultManagedStorageAccount#regenerate_key_automatically}.

---

##### `regenerationPeriod`<sup>Optional</sup> <a name="regenerationPeriod" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.regenerationPeriod"></a>

```java
public java.lang.String getRegenerationPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#regeneration_period KeyVaultManagedStorageAccount#regeneration_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#tags KeyVaultManagedStorageAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountConfig.property.timeouts"></a>

```java
public KeyVaultManagedStorageAccountTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts">KeyVaultManagedStorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#timeouts KeyVaultManagedStorageAccount#timeouts}

---

### KeyVaultManagedStorageAccountTimeouts <a name="KeyVaultManagedStorageAccountTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account.KeyVaultManagedStorageAccountTimeouts;

KeyVaultManagedStorageAccountTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#create KeyVaultManagedStorageAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#delete KeyVaultManagedStorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#read KeyVaultManagedStorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#update KeyVaultManagedStorageAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#create KeyVaultManagedStorageAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#delete KeyVaultManagedStorageAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#read KeyVaultManagedStorageAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/key_vault_managed_storage_account#update KeyVaultManagedStorageAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedStorageAccountTimeoutsOutputReference <a name="KeyVaultManagedStorageAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account.KeyVaultManagedStorageAccountTimeoutsOutputReference;

new KeyVaultManagedStorageAccountTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts">KeyVaultManagedStorageAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccount.KeyVaultManagedStorageAccountTimeouts">KeyVaultManagedStorageAccountTimeouts</a>

---



