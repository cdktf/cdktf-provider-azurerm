# `azurerm_storage_data_lake_gen2_filesystem`

Refer to the Terraform Registory for docs: [`azurerm_storage_data_lake_gen2_filesystem`](https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem).

# `storageDataLakeGen2Filesystem` Submodule <a name="`storageDataLakeGen2Filesystem` Submodule" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDataLakeGen2Filesystem <a name="StorageDataLakeGen2Filesystem" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem azurerm_storage_data_lake_gen2_filesystem}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_data_lake_gen2_filesystem.StorageDataLakeGen2Filesystem;

StorageDataLakeGen2Filesystem.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .storageAccountId(java.lang.String)
//  .ace(IResolvable)
//  .ace(java.util.List<StorageDataLakeGen2FilesystemAce>)
//  .group(java.lang.String)
//  .id(java.lang.String)
//  .owner(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StorageDataLakeGen2FilesystemTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#name StorageDataLakeGen2Filesystem#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#storage_account_id StorageDataLakeGen2Filesystem#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.ace">ace</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>></code> | ace block. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.group">group</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#group StorageDataLakeGen2Filesystem#group}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#id StorageDataLakeGen2Filesystem#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#owner StorageDataLakeGen2Filesystem#owner}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#properties StorageDataLakeGen2Filesystem#properties}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#name StorageDataLakeGen2Filesystem#name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.storageAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#storage_account_id StorageDataLakeGen2Filesystem#storage_account_id}.

---

##### `ace`<sup>Optional</sup> <a name="ace" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.ace"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>>

ace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#ace StorageDataLakeGen2Filesystem#ace}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.group"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#group StorageDataLakeGen2Filesystem#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#id StorageDataLakeGen2Filesystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#owner StorageDataLakeGen2Filesystem#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.properties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#properties StorageDataLakeGen2Filesystem#properties}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#timeouts StorageDataLakeGen2Filesystem#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.putAce">putAce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetAce">resetAce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAce` <a name="putAce" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.putAce"></a>

```java
public void putAce(IResolvable OR java.util.List<StorageDataLakeGen2FilesystemAce> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.putAce.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.putTimeouts"></a>

```java
public void putTimeouts(StorageDataLakeGen2FilesystemTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a>

---

##### `resetAce` <a name="resetAce" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetAce"></a>

```java
public void resetAce()
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetId"></a>

```java
public void resetId()
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_data_lake_gen2_filesystem.StorageDataLakeGen2Filesystem;

StorageDataLakeGen2Filesystem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_data_lake_gen2_filesystem.StorageDataLakeGen2Filesystem;

StorageDataLakeGen2Filesystem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_data_lake_gen2_filesystem.StorageDataLakeGen2Filesystem;

StorageDataLakeGen2Filesystem.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.ace">ace</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList">StorageDataLakeGen2FilesystemAceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference">StorageDataLakeGen2FilesystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.aceInput">aceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ace`<sup>Required</sup> <a name="ace" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.ace"></a>

```java
public StorageDataLakeGen2FilesystemAceList getAce();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList">StorageDataLakeGen2FilesystemAceList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.timeouts"></a>

```java
public StorageDataLakeGen2FilesystemTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference">StorageDataLakeGen2FilesystemTimeoutsOutputReference</a>

---

##### `aceInput`<sup>Optional</sup> <a name="aceInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.aceInput"></a>

```java
public java.lang.Object getAceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2Filesystem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDataLakeGen2FilesystemAce <a name="StorageDataLakeGen2FilesystemAce" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_data_lake_gen2_filesystem.StorageDataLakeGen2FilesystemAce;

StorageDataLakeGen2FilesystemAce.builder()
    .permissions(java.lang.String)
    .type(java.lang.String)
//  .id(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.permissions">permissions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#permissions StorageDataLakeGen2Filesystem#permissions}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#type StorageDataLakeGen2Filesystem#type}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#id StorageDataLakeGen2Filesystem#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#scope StorageDataLakeGen2Filesystem#scope}. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#permissions StorageDataLakeGen2Filesystem#permissions}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#type StorageDataLakeGen2Filesystem#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#id StorageDataLakeGen2Filesystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#scope StorageDataLakeGen2Filesystem#scope}.

---

### StorageDataLakeGen2FilesystemConfig <a name="StorageDataLakeGen2FilesystemConfig" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_data_lake_gen2_filesystem.StorageDataLakeGen2FilesystemConfig;

StorageDataLakeGen2FilesystemConfig.builder()
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
    .name(java.lang.String)
    .storageAccountId(java.lang.String)
//  .ace(IResolvable)
//  .ace(java.util.List<StorageDataLakeGen2FilesystemAce>)
//  .group(java.lang.String)
//  .id(java.lang.String)
//  .owner(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StorageDataLakeGen2FilesystemTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#name StorageDataLakeGen2Filesystem#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#storage_account_id StorageDataLakeGen2Filesystem#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.ace">ace</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>></code> | ace block. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.group">group</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#group StorageDataLakeGen2Filesystem#group}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#id StorageDataLakeGen2Filesystem#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#owner StorageDataLakeGen2Filesystem#owner}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#properties StorageDataLakeGen2Filesystem#properties}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#name StorageDataLakeGen2Filesystem#name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#storage_account_id StorageDataLakeGen2Filesystem#storage_account_id}.

---

##### `ace`<sup>Optional</sup> <a name="ace" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.ace"></a>

```java
public java.lang.Object getAce();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>>

ace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#ace StorageDataLakeGen2Filesystem#ace}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#group StorageDataLakeGen2Filesystem#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#id StorageDataLakeGen2Filesystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#owner StorageDataLakeGen2Filesystem#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#properties StorageDataLakeGen2Filesystem#properties}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemConfig.property.timeouts"></a>

```java
public StorageDataLakeGen2FilesystemTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#timeouts StorageDataLakeGen2Filesystem#timeouts}

---

### StorageDataLakeGen2FilesystemTimeouts <a name="StorageDataLakeGen2FilesystemTimeouts" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_data_lake_gen2_filesystem.StorageDataLakeGen2FilesystemTimeouts;

StorageDataLakeGen2FilesystemTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#create StorageDataLakeGen2Filesystem#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#delete StorageDataLakeGen2Filesystem#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#read StorageDataLakeGen2Filesystem#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#update StorageDataLakeGen2Filesystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#create StorageDataLakeGen2Filesystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#delete StorageDataLakeGen2Filesystem#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#read StorageDataLakeGen2Filesystem#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/storage_data_lake_gen2_filesystem#update StorageDataLakeGen2Filesystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageDataLakeGen2FilesystemAceList <a name="StorageDataLakeGen2FilesystemAceList" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_data_lake_gen2_filesystem.StorageDataLakeGen2FilesystemAceList;

new StorageDataLakeGen2FilesystemAceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.get"></a>

```java
public StorageDataLakeGen2FilesystemAceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a>>

---


### StorageDataLakeGen2FilesystemAceOutputReference <a name="StorageDataLakeGen2FilesystemAceOutputReference" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_data_lake_gen2_filesystem.StorageDataLakeGen2FilesystemAceOutputReference;

new StorageDataLakeGen2FilesystemAceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.resetScope"></a>

```java
public void resetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.permissions">permissions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.permissionsInput"></a>

```java
public java.lang.String getPermissionsInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemAce">StorageDataLakeGen2FilesystemAce</a> OR com.hashicorp.cdktf.IResolvable

---


### StorageDataLakeGen2FilesystemTimeoutsOutputReference <a name="StorageDataLakeGen2FilesystemTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_data_lake_gen2_filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference;

new StorageDataLakeGen2FilesystemTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageDataLakeGen2Filesystem.StorageDataLakeGen2FilesystemTimeouts">StorageDataLakeGen2FilesystemTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



