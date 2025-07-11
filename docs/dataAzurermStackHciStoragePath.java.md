# `dataAzurermStackHciStoragePath` Submodule <a name="`dataAzurermStackHciStoragePath` Submodule" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStackHciStoragePath <a name="DataAzurermStackHciStoragePath" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path azurerm_stack_hci_storage_path}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_stack_hci_storage_path.DataAzurermStackHciStoragePath;

DataAzurermStackHciStoragePath.Builder.create(Construct scope, java.lang.String id)
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
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermStackHciStoragePathTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#name DataAzurermStackHciStoragePath#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#resource_group_name DataAzurermStackHciStoragePath#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#id DataAzurermStackHciStoragePath#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeouts">DataAzurermStackHciStoragePathTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#name DataAzurermStackHciStoragePath#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#resource_group_name DataAzurermStackHciStoragePath#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#id DataAzurermStackHciStoragePath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeouts">DataAzurermStackHciStoragePathTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#timeouts DataAzurermStackHciStoragePath#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermStackHciStoragePathTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeouts">DataAzurermStackHciStoragePathTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermStackHciStoragePath resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_stack_hci_storage_path.DataAzurermStackHciStoragePath;

DataAzurermStackHciStoragePath.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_stack_hci_storage_path.DataAzurermStackHciStoragePath;

DataAzurermStackHciStoragePath.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_stack_hci_storage_path.DataAzurermStackHciStoragePath;

DataAzurermStackHciStoragePath.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_stack_hci_storage_path.DataAzurermStackHciStoragePath;

DataAzurermStackHciStoragePath.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermStackHciStoragePath.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermStackHciStoragePath resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermStackHciStoragePath to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermStackHciStoragePath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermStackHciStoragePath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference">DataAzurermStackHciStoragePathTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeouts">DataAzurermStackHciStoragePathTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.customLocationId"></a>

```java
public java.lang.String getCustomLocationId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.timeouts"></a>

```java
public DataAzurermStackHciStoragePathTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference">DataAzurermStackHciStoragePathTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeouts">DataAzurermStackHciStoragePathTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePath.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStackHciStoragePathConfig <a name="DataAzurermStackHciStoragePathConfig" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_stack_hci_storage_path.DataAzurermStackHciStoragePathConfig;

DataAzurermStackHciStoragePathConfig.builder()
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
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermStackHciStoragePathTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#name DataAzurermStackHciStoragePath#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#resource_group_name DataAzurermStackHciStoragePath#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#id DataAzurermStackHciStoragePath#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeouts">DataAzurermStackHciStoragePathTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#name DataAzurermStackHciStoragePath#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#resource_group_name DataAzurermStackHciStoragePath#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#id DataAzurermStackHciStoragePath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathConfig.property.timeouts"></a>

```java
public DataAzurermStackHciStoragePathTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeouts">DataAzurermStackHciStoragePathTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#timeouts DataAzurermStackHciStoragePath#timeouts}

---

### DataAzurermStackHciStoragePathTimeouts <a name="DataAzurermStackHciStoragePathTimeouts" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_stack_hci_storage_path.DataAzurermStackHciStoragePathTimeouts;

DataAzurermStackHciStoragePathTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#read DataAzurermStackHciStoragePath#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/stack_hci_storage_path#read DataAzurermStackHciStoragePath#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStackHciStoragePathTimeoutsOutputReference <a name="DataAzurermStackHciStoragePathTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_stack_hci_storage_path.DataAzurermStackHciStoragePathTimeoutsOutputReference;

new DataAzurermStackHciStoragePathTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeouts">DataAzurermStackHciStoragePathTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermStackHciStoragePath.DataAzurermStackHciStoragePathTimeouts">DataAzurermStackHciStoragePathTimeouts</a>

---



