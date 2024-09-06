# `keyVaultManagedStorageAccountSasTokenDefinition` Submodule <a name="`keyVaultManagedStorageAccountSasTokenDefinition` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedStorageAccountSasTokenDefinition <a name="KeyVaultManagedStorageAccountSasTokenDefinition" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition azurerm_key_vault_managed_storage_account_sas_token_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account_sas_token_definition.KeyVaultManagedStorageAccountSasTokenDefinition;

KeyVaultManagedStorageAccountSasTokenDefinition.Builder.create(Construct scope, java.lang.String id)
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
    .managedStorageAccountId(java.lang.String)
    .name(java.lang.String)
    .sasTemplateUri(java.lang.String)
    .sasType(java.lang.String)
    .validityPeriod(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.managedStorageAccountId">managedStorageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#managed_storage_account_id KeyVaultManagedStorageAccountSasTokenDefinition#managed_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#name KeyVaultManagedStorageAccountSasTokenDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.sasTemplateUri">sasTemplateUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_template_uri KeyVaultManagedStorageAccountSasTokenDefinition#sas_template_uri}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.sasType">sasType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_type KeyVaultManagedStorageAccountSasTokenDefinition#sas_type}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.validityPeriod">validityPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#validity_period KeyVaultManagedStorageAccountSasTokenDefinition#validity_period}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#id KeyVaultManagedStorageAccountSasTokenDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#tags KeyVaultManagedStorageAccountSasTokenDefinition#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedStorageAccountId`<sup>Required</sup> <a name="managedStorageAccountId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.managedStorageAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#managed_storage_account_id KeyVaultManagedStorageAccountSasTokenDefinition#managed_storage_account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#name KeyVaultManagedStorageAccountSasTokenDefinition#name}.

---

##### `sasTemplateUri`<sup>Required</sup> <a name="sasTemplateUri" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.sasTemplateUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_template_uri KeyVaultManagedStorageAccountSasTokenDefinition#sas_template_uri}.

---

##### `sasType`<sup>Required</sup> <a name="sasType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.sasType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_type KeyVaultManagedStorageAccountSasTokenDefinition#sas_type}.

---

##### `validityPeriod`<sup>Required</sup> <a name="validityPeriod" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.validityPeriod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#validity_period KeyVaultManagedStorageAccountSasTokenDefinition#validity_period}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#id KeyVaultManagedStorageAccountSasTokenDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#tags KeyVaultManagedStorageAccountSasTokenDefinition#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#timeouts KeyVaultManagedStorageAccountSasTokenDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.putTimeouts"></a>

```java
public void putTimeouts(KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultManagedStorageAccountSasTokenDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account_sas_token_definition.KeyVaultManagedStorageAccountSasTokenDefinition;

KeyVaultManagedStorageAccountSasTokenDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account_sas_token_definition.KeyVaultManagedStorageAccountSasTokenDefinition;

KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account_sas_token_definition.KeyVaultManagedStorageAccountSasTokenDefinition;

KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account_sas_token_definition.KeyVaultManagedStorageAccountSasTokenDefinition;

KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KeyVaultManagedStorageAccountSasTokenDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KeyVaultManagedStorageAccountSasTokenDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KeyVaultManagedStorageAccountSasTokenDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedStorageAccountSasTokenDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference">KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountIdInput">managedStorageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUriInput">sasTemplateUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTypeInput">sasTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriodInput">validityPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountId">managedStorageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUri">sasTemplateUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasType">sasType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriod">validityPeriod</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeouts"></a>

```java
public KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference">KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedStorageAccountIdInput`<sup>Optional</sup> <a name="managedStorageAccountIdInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountIdInput"></a>

```java
public java.lang.String getManagedStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sasTemplateUriInput`<sup>Optional</sup> <a name="sasTemplateUriInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUriInput"></a>

```java
public java.lang.String getSasTemplateUriInput();
```

- *Type:* java.lang.String

---

##### `sasTypeInput`<sup>Optional</sup> <a name="sasTypeInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTypeInput"></a>

```java
public java.lang.String getSasTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a>

---

##### `validityPeriodInput`<sup>Optional</sup> <a name="validityPeriodInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriodInput"></a>

```java
public java.lang.String getValidityPeriodInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedStorageAccountId`<sup>Required</sup> <a name="managedStorageAccountId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountId"></a>

```java
public java.lang.String getManagedStorageAccountId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sasTemplateUri`<sup>Required</sup> <a name="sasTemplateUri" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUri"></a>

```java
public java.lang.String getSasTemplateUri();
```

- *Type:* java.lang.String

---

##### `sasType`<sup>Required</sup> <a name="sasType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasType"></a>

```java
public java.lang.String getSasType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `validityPeriod`<sup>Required</sup> <a name="validityPeriod" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriod"></a>

```java
public java.lang.String getValidityPeriod();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedStorageAccountSasTokenDefinitionConfig <a name="KeyVaultManagedStorageAccountSasTokenDefinitionConfig" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account_sas_token_definition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig;

KeyVaultManagedStorageAccountSasTokenDefinitionConfig.builder()
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
    .managedStorageAccountId(java.lang.String)
    .name(java.lang.String)
    .sasTemplateUri(java.lang.String)
    .sasType(java.lang.String)
    .validityPeriod(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.managedStorageAccountId">managedStorageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#managed_storage_account_id KeyVaultManagedStorageAccountSasTokenDefinition#managed_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#name KeyVaultManagedStorageAccountSasTokenDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasTemplateUri">sasTemplateUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_template_uri KeyVaultManagedStorageAccountSasTokenDefinition#sas_template_uri}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasType">sasType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_type KeyVaultManagedStorageAccountSasTokenDefinition#sas_type}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.validityPeriod">validityPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#validity_period KeyVaultManagedStorageAccountSasTokenDefinition#validity_period}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#id KeyVaultManagedStorageAccountSasTokenDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#tags KeyVaultManagedStorageAccountSasTokenDefinition#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedStorageAccountId`<sup>Required</sup> <a name="managedStorageAccountId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.managedStorageAccountId"></a>

```java
public java.lang.String getManagedStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#managed_storage_account_id KeyVaultManagedStorageAccountSasTokenDefinition#managed_storage_account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#name KeyVaultManagedStorageAccountSasTokenDefinition#name}.

---

##### `sasTemplateUri`<sup>Required</sup> <a name="sasTemplateUri" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasTemplateUri"></a>

```java
public java.lang.String getSasTemplateUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_template_uri KeyVaultManagedStorageAccountSasTokenDefinition#sas_template_uri}.

---

##### `sasType`<sup>Required</sup> <a name="sasType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasType"></a>

```java
public java.lang.String getSasType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_type KeyVaultManagedStorageAccountSasTokenDefinition#sas_type}.

---

##### `validityPeriod`<sup>Required</sup> <a name="validityPeriod" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.validityPeriod"></a>

```java
public java.lang.String getValidityPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#validity_period KeyVaultManagedStorageAccountSasTokenDefinition#validity_period}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#id KeyVaultManagedStorageAccountSasTokenDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#tags KeyVaultManagedStorageAccountSasTokenDefinition#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.timeouts"></a>

```java
public KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#timeouts KeyVaultManagedStorageAccountSasTokenDefinition#timeouts}

---

### KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts <a name="KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account_sas_token_definition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts;

KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#create KeyVaultManagedStorageAccountSasTokenDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#delete KeyVaultManagedStorageAccountSasTokenDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#read KeyVaultManagedStorageAccountSasTokenDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#update KeyVaultManagedStorageAccountSasTokenDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#create KeyVaultManagedStorageAccountSasTokenDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#delete KeyVaultManagedStorageAccountSasTokenDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#read KeyVaultManagedStorageAccountSasTokenDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#update KeyVaultManagedStorageAccountSasTokenDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference <a name="KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_storage_account_sas_token_definition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference;

new KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a>

---



