# `data_azurerm_key_vault_encrypted_value`

Refer to the Terraform Registory for docs: [`data_azurerm_key_vault_encrypted_value`](https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value).

# `dataAzurermKeyVaultEncryptedValue` Submodule <a name="`dataAzurermKeyVaultEncryptedValue` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultEncryptedValue <a name="DataAzurermKeyVaultEncryptedValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value azurerm_key_vault_encrypted_value}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_encrypted_value.DataAzurermKeyVaultEncryptedValue;

DataAzurermKeyVaultEncryptedValue.Builder.create(Construct scope, java.lang.String id)
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
    .algorithm(java.lang.String)
    .keyVaultKeyId(java.lang.String)
//  .encryptedData(java.lang.String)
//  .id(java.lang.String)
//  .plainTextValue(java.lang.String)
//  .timeouts(DataAzurermKeyVaultEncryptedValueTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#algorithm DataAzurermKeyVaultEncryptedValue#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#key_vault_key_id DataAzurermKeyVaultEncryptedValue#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.encryptedData">encryptedData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#encrypted_data DataAzurermKeyVaultEncryptedValue#encrypted_data}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#id DataAzurermKeyVaultEncryptedValue#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.plainTextValue">plainTextValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#plain_text_value DataAzurermKeyVaultEncryptedValue#plain_text_value}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.algorithm"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#algorithm DataAzurermKeyVaultEncryptedValue#algorithm}.

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.keyVaultKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#key_vault_key_id DataAzurermKeyVaultEncryptedValue#key_vault_key_id}.

---

##### `encryptedData`<sup>Optional</sup> <a name="encryptedData" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.encryptedData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#encrypted_data DataAzurermKeyVaultEncryptedValue#encrypted_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#id DataAzurermKeyVaultEncryptedValue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plainTextValue`<sup>Optional</sup> <a name="plainTextValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.plainTextValue"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#plain_text_value DataAzurermKeyVaultEncryptedValue#plain_text_value}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#timeouts DataAzurermKeyVaultEncryptedValue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetEncryptedData">resetEncryptedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetPlainTextValue">resetPlainTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermKeyVaultEncryptedValueTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a>

---

##### `resetEncryptedData` <a name="resetEncryptedData" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetEncryptedData"></a>

```java
public void resetEncryptedData()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetId"></a>

```java
public void resetId()
```

##### `resetPlainTextValue` <a name="resetPlainTextValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetPlainTextValue"></a>

```java
public void resetPlainTextValue()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_encrypted_value.DataAzurermKeyVaultEncryptedValue;

DataAzurermKeyVaultEncryptedValue.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_encrypted_value.DataAzurermKeyVaultEncryptedValue;

DataAzurermKeyVaultEncryptedValue.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_encrypted_value.DataAzurermKeyVaultEncryptedValue;

DataAzurermKeyVaultEncryptedValue.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference">DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedDataInput">encryptedDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValueInput">plainTextValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedData">encryptedData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValue">plainTextValue</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeouts"></a>

```java
public DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference">DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference</a>

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `encryptedDataInput`<sup>Optional</sup> <a name="encryptedDataInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedDataInput"></a>

```java
public java.lang.String getEncryptedDataInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyIdInput"></a>

```java
public java.lang.String getKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `plainTextValueInput`<sup>Optional</sup> <a name="plainTextValueInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValueInput"></a>

```java
public java.lang.String getPlainTextValueInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `encryptedData`<sup>Required</sup> <a name="encryptedData" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedData"></a>

```java
public java.lang.String getEncryptedData();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `plainTextValue`<sup>Required</sup> <a name="plainTextValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValue"></a>

```java
public java.lang.String getPlainTextValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultEncryptedValueConfig <a name="DataAzurermKeyVaultEncryptedValueConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_encrypted_value.DataAzurermKeyVaultEncryptedValueConfig;

DataAzurermKeyVaultEncryptedValueConfig.builder()
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
    .algorithm(java.lang.String)
    .keyVaultKeyId(java.lang.String)
//  .encryptedData(java.lang.String)
//  .id(java.lang.String)
//  .plainTextValue(java.lang.String)
//  .timeouts(DataAzurermKeyVaultEncryptedValueTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#algorithm DataAzurermKeyVaultEncryptedValue#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#key_vault_key_id DataAzurermKeyVaultEncryptedValue#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.encryptedData">encryptedData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#encrypted_data DataAzurermKeyVaultEncryptedValue#encrypted_data}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#id DataAzurermKeyVaultEncryptedValue#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.plainTextValue">plainTextValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#plain_text_value DataAzurermKeyVaultEncryptedValue#plain_text_value}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#algorithm DataAzurermKeyVaultEncryptedValue#algorithm}.

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#key_vault_key_id DataAzurermKeyVaultEncryptedValue#key_vault_key_id}.

---

##### `encryptedData`<sup>Optional</sup> <a name="encryptedData" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.encryptedData"></a>

```java
public java.lang.String getEncryptedData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#encrypted_data DataAzurermKeyVaultEncryptedValue#encrypted_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#id DataAzurermKeyVaultEncryptedValue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plainTextValue`<sup>Optional</sup> <a name="plainTextValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.plainTextValue"></a>

```java
public java.lang.String getPlainTextValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#plain_text_value DataAzurermKeyVaultEncryptedValue#plain_text_value}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.timeouts"></a>

```java
public DataAzurermKeyVaultEncryptedValueTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#timeouts DataAzurermKeyVaultEncryptedValue#timeouts}

---

### DataAzurermKeyVaultEncryptedValueTimeouts <a name="DataAzurermKeyVaultEncryptedValueTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_encrypted_value.DataAzurermKeyVaultEncryptedValueTimeouts;

DataAzurermKeyVaultEncryptedValueTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#read DataAzurermKeyVaultEncryptedValue#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/data-sources/key_vault_encrypted_value#read DataAzurermKeyVaultEncryptedValue#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference <a name="DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_encrypted_value.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference;

new DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



