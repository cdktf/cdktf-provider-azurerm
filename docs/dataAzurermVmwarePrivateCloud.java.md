# `data_azurerm_vmware_private_cloud`

Refer to the Terraform Registory for docs: [`data_azurerm_vmware_private_cloud`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud).

# `dataAzurermVmwarePrivateCloud` Submodule <a name="`dataAzurermVmwarePrivateCloud` Submodule" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVmwarePrivateCloud <a name="DataAzurermVmwarePrivateCloud" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud azurerm_vmware_private_cloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vmware_private_cloud.DataAzurermVmwarePrivateCloud;

DataAzurermVmwarePrivateCloud.Builder.create(Construct scope, java.lang.String id)
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
//  .timeouts(DataAzurermVmwarePrivateCloudTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#name DataAzurermVmwarePrivateCloud#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#resource_group_name DataAzurermVmwarePrivateCloud#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#id DataAzurermVmwarePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#name DataAzurermVmwarePrivateCloud#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#resource_group_name DataAzurermVmwarePrivateCloud#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#id DataAzurermVmwarePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#timeouts DataAzurermVmwarePrivateCloud#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermVmwarePrivateCloudTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vmware_private_cloud.DataAzurermVmwarePrivateCloud;

DataAzurermVmwarePrivateCloud.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vmware_private_cloud.DataAzurermVmwarePrivateCloud;

DataAzurermVmwarePrivateCloud.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vmware_private_cloud.DataAzurermVmwarePrivateCloud;

DataAzurermVmwarePrivateCloud.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.circuit">circuit</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList">DataAzurermVmwarePrivateCloudCircuitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.hcxCloudManagerEndpoint">hcxCloudManagerEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.internetConnectionEnabled">internetConnectionEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.managementCluster">managementCluster</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList">DataAzurermVmwarePrivateCloudManagementClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.managementSubnetCidr">managementSubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.networkSubnetCidr">networkSubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.nsxtCertificateThumbprint">nsxtCertificateThumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.nsxtManagerEndpoint">nsxtManagerEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.provisioningSubnetCidr">provisioningSubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference">DataAzurermVmwarePrivateCloudTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.vcenterCertificateThumbprint">vcenterCertificateThumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.vcsaEndpoint">vcsaEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.vmotionSubnetCidr">vmotionSubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `circuit`<sup>Required</sup> <a name="circuit" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.circuit"></a>

```java
public DataAzurermVmwarePrivateCloudCircuitList getCircuit();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList">DataAzurermVmwarePrivateCloudCircuitList</a>

---

##### `hcxCloudManagerEndpoint`<sup>Required</sup> <a name="hcxCloudManagerEndpoint" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.hcxCloudManagerEndpoint"></a>

```java
public java.lang.String getHcxCloudManagerEndpoint();
```

- *Type:* java.lang.String

---

##### `internetConnectionEnabled`<sup>Required</sup> <a name="internetConnectionEnabled" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.internetConnectionEnabled"></a>

```java
public IResolvable getInternetConnectionEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managementCluster`<sup>Required</sup> <a name="managementCluster" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.managementCluster"></a>

```java
public DataAzurermVmwarePrivateCloudManagementClusterList getManagementCluster();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList">DataAzurermVmwarePrivateCloudManagementClusterList</a>

---

##### `managementSubnetCidr`<sup>Required</sup> <a name="managementSubnetCidr" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.managementSubnetCidr"></a>

```java
public java.lang.String getManagementSubnetCidr();
```

- *Type:* java.lang.String

---

##### `networkSubnetCidr`<sup>Required</sup> <a name="networkSubnetCidr" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.networkSubnetCidr"></a>

```java
public java.lang.String getNetworkSubnetCidr();
```

- *Type:* java.lang.String

---

##### `nsxtCertificateThumbprint`<sup>Required</sup> <a name="nsxtCertificateThumbprint" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.nsxtCertificateThumbprint"></a>

```java
public java.lang.String getNsxtCertificateThumbprint();
```

- *Type:* java.lang.String

---

##### `nsxtManagerEndpoint`<sup>Required</sup> <a name="nsxtManagerEndpoint" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.nsxtManagerEndpoint"></a>

```java
public java.lang.String getNsxtManagerEndpoint();
```

- *Type:* java.lang.String

---

##### `provisioningSubnetCidr`<sup>Required</sup> <a name="provisioningSubnetCidr" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.provisioningSubnetCidr"></a>

```java
public java.lang.String getProvisioningSubnetCidr();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.timeouts"></a>

```java
public DataAzurermVmwarePrivateCloudTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference">DataAzurermVmwarePrivateCloudTimeoutsOutputReference</a>

---

##### `vcenterCertificateThumbprint`<sup>Required</sup> <a name="vcenterCertificateThumbprint" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.vcenterCertificateThumbprint"></a>

```java
public java.lang.String getVcenterCertificateThumbprint();
```

- *Type:* java.lang.String

---

##### `vcsaEndpoint`<sup>Required</sup> <a name="vcsaEndpoint" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.vcsaEndpoint"></a>

```java
public java.lang.String getVcsaEndpoint();
```

- *Type:* java.lang.String

---

##### `vmotionSubnetCidr`<sup>Required</sup> <a name="vmotionSubnetCidr" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.vmotionSubnetCidr"></a>

```java
public java.lang.String getVmotionSubnetCidr();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloud.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVmwarePrivateCloudCircuit <a name="DataAzurermVmwarePrivateCloudCircuit" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vmware_private_cloud.DataAzurermVmwarePrivateCloudCircuit;

DataAzurermVmwarePrivateCloudCircuit.builder()
    .build();
```


### DataAzurermVmwarePrivateCloudConfig <a name="DataAzurermVmwarePrivateCloudConfig" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vmware_private_cloud.DataAzurermVmwarePrivateCloudConfig;

DataAzurermVmwarePrivateCloudConfig.builder()
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
//  .timeouts(DataAzurermVmwarePrivateCloudTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#name DataAzurermVmwarePrivateCloud#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#resource_group_name DataAzurermVmwarePrivateCloud#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#id DataAzurermVmwarePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#name DataAzurermVmwarePrivateCloud#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#resource_group_name DataAzurermVmwarePrivateCloud#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#id DataAzurermVmwarePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudConfig.property.timeouts"></a>

```java
public DataAzurermVmwarePrivateCloudTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#timeouts DataAzurermVmwarePrivateCloud#timeouts}

---

### DataAzurermVmwarePrivateCloudManagementCluster <a name="DataAzurermVmwarePrivateCloudManagementCluster" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vmware_private_cloud.DataAzurermVmwarePrivateCloudManagementCluster;

DataAzurermVmwarePrivateCloudManagementCluster.builder()
    .build();
```


### DataAzurermVmwarePrivateCloudTimeouts <a name="DataAzurermVmwarePrivateCloudTimeouts" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vmware_private_cloud.DataAzurermVmwarePrivateCloudTimeouts;

DataAzurermVmwarePrivateCloudTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#read DataAzurermVmwarePrivateCloud#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/vmware_private_cloud#read DataAzurermVmwarePrivateCloud#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVmwarePrivateCloudCircuitList <a name="DataAzurermVmwarePrivateCloudCircuitList" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vmware_private_cloud.DataAzurermVmwarePrivateCloudCircuitList;

new DataAzurermVmwarePrivateCloudCircuitList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.get"></a>

```java
public DataAzurermVmwarePrivateCloudCircuitOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermVmwarePrivateCloudCircuitOutputReference <a name="DataAzurermVmwarePrivateCloudCircuitOutputReference" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vmware_private_cloud.DataAzurermVmwarePrivateCloudCircuitOutputReference;

new DataAzurermVmwarePrivateCloudCircuitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.expressRouteId">expressRouteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.expressRoutePrivatePeeringId">expressRoutePrivatePeeringId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.primarySubnetCidr">primarySubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.secondarySubnetCidr">secondarySubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuit">DataAzurermVmwarePrivateCloudCircuit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressRouteId`<sup>Required</sup> <a name="expressRouteId" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.expressRouteId"></a>

```java
public java.lang.String getExpressRouteId();
```

- *Type:* java.lang.String

---

##### `expressRoutePrivatePeeringId`<sup>Required</sup> <a name="expressRoutePrivatePeeringId" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.expressRoutePrivatePeeringId"></a>

```java
public java.lang.String getExpressRoutePrivatePeeringId();
```

- *Type:* java.lang.String

---

##### `primarySubnetCidr`<sup>Required</sup> <a name="primarySubnetCidr" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.primarySubnetCidr"></a>

```java
public java.lang.String getPrimarySubnetCidr();
```

- *Type:* java.lang.String

---

##### `secondarySubnetCidr`<sup>Required</sup> <a name="secondarySubnetCidr" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.secondarySubnetCidr"></a>

```java
public java.lang.String getSecondarySubnetCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuitOutputReference.property.internalValue"></a>

```java
public DataAzurermVmwarePrivateCloudCircuit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudCircuit">DataAzurermVmwarePrivateCloudCircuit</a>

---


### DataAzurermVmwarePrivateCloudManagementClusterList <a name="DataAzurermVmwarePrivateCloudManagementClusterList" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vmware_private_cloud.DataAzurermVmwarePrivateCloudManagementClusterList;

new DataAzurermVmwarePrivateCloudManagementClusterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.get"></a>

```java
public DataAzurermVmwarePrivateCloudManagementClusterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermVmwarePrivateCloudManagementClusterOutputReference <a name="DataAzurermVmwarePrivateCloudManagementClusterOutputReference" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vmware_private_cloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference;

new DataAzurermVmwarePrivateCloudManagementClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementCluster">DataAzurermVmwarePrivateCloudManagementCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementClusterOutputReference.property.internalValue"></a>

```java
public DataAzurermVmwarePrivateCloudManagementCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudManagementCluster">DataAzurermVmwarePrivateCloudManagementCluster</a>

---


### DataAzurermVmwarePrivateCloudTimeoutsOutputReference <a name="DataAzurermVmwarePrivateCloudTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vmware_private_cloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference;

new DataAzurermVmwarePrivateCloudTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVmwarePrivateCloud.DataAzurermVmwarePrivateCloudTimeouts">DataAzurermVmwarePrivateCloudTimeouts</a>

---



