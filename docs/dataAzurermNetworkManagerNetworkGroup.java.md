# `dataAzurermNetworkManagerNetworkGroup` Submodule <a name="`dataAzurermNetworkManagerNetworkGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetworkManagerNetworkGroup <a name="DataAzurermNetworkManagerNetworkGroup" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group azurerm_network_manager_network_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_network_manager_network_group.DataAzurermNetworkManagerNetworkGroup;

DataAzurermNetworkManagerNetworkGroup.Builder.create(Construct scope, java.lang.String id)
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
    .networkManagerId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermNetworkManagerNetworkGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#name DataAzurermNetworkManagerNetworkGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.networkManagerId">networkManagerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#network_manager_id DataAzurermNetworkManagerNetworkGroup#network_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#id DataAzurermNetworkManagerNetworkGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#name DataAzurermNetworkManagerNetworkGroup#name}.

---

##### `networkManagerId`<sup>Required</sup> <a name="networkManagerId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.networkManagerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#network_manager_id DataAzurermNetworkManagerNetworkGroup#network_manager_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#id DataAzurermNetworkManagerNetworkGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#timeouts DataAzurermNetworkManagerNetworkGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermNetworkManagerNetworkGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermNetworkManagerNetworkGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_network_manager_network_group.DataAzurermNetworkManagerNetworkGroup;

DataAzurermNetworkManagerNetworkGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_network_manager_network_group.DataAzurermNetworkManagerNetworkGroup;

DataAzurermNetworkManagerNetworkGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_network_manager_network_group.DataAzurermNetworkManagerNetworkGroup;

DataAzurermNetworkManagerNetworkGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_network_manager_network_group.DataAzurermNetworkManagerNetworkGroup;

DataAzurermNetworkManagerNetworkGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermNetworkManagerNetworkGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermNetworkManagerNetworkGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermNetworkManagerNetworkGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermNetworkManagerNetworkGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermNetworkManagerNetworkGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference">DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.networkManagerIdInput">networkManagerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.networkManagerId">networkManagerId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.timeouts"></a>

```java
public DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference">DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkManagerIdInput`<sup>Optional</sup> <a name="networkManagerIdInput" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.networkManagerIdInput"></a>

```java
public java.lang.String getNetworkManagerIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkManagerId`<sup>Required</sup> <a name="networkManagerId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.networkManagerId"></a>

```java
public java.lang.String getNetworkManagerId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetworkManagerNetworkGroupConfig <a name="DataAzurermNetworkManagerNetworkGroupConfig" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_network_manager_network_group.DataAzurermNetworkManagerNetworkGroupConfig;

DataAzurermNetworkManagerNetworkGroupConfig.builder()
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
    .networkManagerId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermNetworkManagerNetworkGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#name DataAzurermNetworkManagerNetworkGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.networkManagerId">networkManagerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#network_manager_id DataAzurermNetworkManagerNetworkGroup#network_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#id DataAzurermNetworkManagerNetworkGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#name DataAzurermNetworkManagerNetworkGroup#name}.

---

##### `networkManagerId`<sup>Required</sup> <a name="networkManagerId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.networkManagerId"></a>

```java
public java.lang.String getNetworkManagerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#network_manager_id DataAzurermNetworkManagerNetworkGroup#network_manager_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#id DataAzurermNetworkManagerNetworkGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.timeouts"></a>

```java
public DataAzurermNetworkManagerNetworkGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#timeouts DataAzurermNetworkManagerNetworkGroup#timeouts}

---

### DataAzurermNetworkManagerNetworkGroupTimeouts <a name="DataAzurermNetworkManagerNetworkGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_network_manager_network_group.DataAzurermNetworkManagerNetworkGroupTimeouts;

DataAzurermNetworkManagerNetworkGroupTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#read DataAzurermNetworkManagerNetworkGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/data-sources/network_manager_network_group#read DataAzurermNetworkManagerNetworkGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference <a name="DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_network_manager_network_group.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference;

new DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a>

---



