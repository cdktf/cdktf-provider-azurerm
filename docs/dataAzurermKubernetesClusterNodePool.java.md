# `dataAzurermKubernetesClusterNodePool` Submodule <a name="`dataAzurermKubernetesClusterNodePool` Submodule" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKubernetesClusterNodePool <a name="DataAzurermKubernetesClusterNodePool" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool azurerm_kubernetes_cluster_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_kubernetes_cluster_node_pool.DataAzurermKubernetesClusterNodePool;

DataAzurermKubernetesClusterNodePool.Builder.create(Construct scope, java.lang.String id)
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
    .kubernetesClusterName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermKubernetesClusterNodePoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.kubernetesClusterName">kubernetesClusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#kubernetes_cluster_name DataAzurermKubernetesClusterNodePool#kubernetes_cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#name DataAzurermKubernetesClusterNodePool#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#resource_group_name DataAzurermKubernetesClusterNodePool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#id DataAzurermKubernetesClusterNodePool#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kubernetesClusterName`<sup>Required</sup> <a name="kubernetesClusterName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.kubernetesClusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#kubernetes_cluster_name DataAzurermKubernetesClusterNodePool#kubernetes_cluster_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#name DataAzurermKubernetesClusterNodePool#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#resource_group_name DataAzurermKubernetesClusterNodePool#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#id DataAzurermKubernetesClusterNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#timeouts DataAzurermKubernetesClusterNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermKubernetesClusterNodePoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermKubernetesClusterNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_kubernetes_cluster_node_pool.DataAzurermKubernetesClusterNodePool;

DataAzurermKubernetesClusterNodePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_kubernetes_cluster_node_pool.DataAzurermKubernetesClusterNodePool;

DataAzurermKubernetesClusterNodePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_kubernetes_cluster_node_pool.DataAzurermKubernetesClusterNodePool;

DataAzurermKubernetesClusterNodePool.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_kubernetes_cluster_node_pool.DataAzurermKubernetesClusterNodePool;

DataAzurermKubernetesClusterNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermKubernetesClusterNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermKubernetesClusterNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermKubernetesClusterNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermKubernetesClusterNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKubernetesClusterNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.gpuDriver">gpuDriver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.maxPods">maxPods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.minCount">minCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeLabels">nodeLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodePublicIpEnabled">nodePublicIpEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodePublicIpPrefixId">nodePublicIpPrefixId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeTaints">nodeTaints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.orchestratorVersion">orchestratorVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osDiskSizeGb">osDiskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osDiskType">osDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.proximityPlacementGroupId">proximityPlacementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.spotMaxPrice">spotMaxPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference">DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.upgradeSettings">upgradeSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList">DataAzurermKubernetesClusterNodePoolUpgradeSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.vnetSubnetId">vnetSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.kubernetesClusterNameInput">kubernetesClusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.kubernetesClusterName">kubernetesClusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.autoScalingEnabled"></a>

```java
public IResolvable getAutoScalingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.evictionPolicy"></a>

```java
public java.lang.String getEvictionPolicy();
```

- *Type:* java.lang.String

---

##### `gpuDriver`<sup>Required</sup> <a name="gpuDriver" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.gpuDriver"></a>

```java
public java.lang.String getGpuDriver();
```

- *Type:* java.lang.String

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.maxCount"></a>

```java
public java.lang.Number getMaxCount();
```

- *Type:* java.lang.Number

---

##### `maxPods`<sup>Required</sup> <a name="maxPods" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.maxPods"></a>

```java
public java.lang.Number getMaxPods();
```

- *Type:* java.lang.Number

---

##### `minCount`<sup>Required</sup> <a name="minCount" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.minCount"></a>

```java
public java.lang.Number getMinCount();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nodeLabels`<sup>Required</sup> <a name="nodeLabels" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeLabels"></a>

```java
public StringMap getNodeLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `nodePublicIpEnabled`<sup>Required</sup> <a name="nodePublicIpEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodePublicIpEnabled"></a>

```java
public IResolvable getNodePublicIpEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nodePublicIpPrefixId`<sup>Required</sup> <a name="nodePublicIpPrefixId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodePublicIpPrefixId"></a>

```java
public java.lang.String getNodePublicIpPrefixId();
```

- *Type:* java.lang.String

---

##### `nodeTaints`<sup>Required</sup> <a name="nodeTaints" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeTaints"></a>

```java
public java.util.List<java.lang.String> getNodeTaints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `orchestratorVersion`<sup>Required</sup> <a name="orchestratorVersion" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.orchestratorVersion"></a>

```java
public java.lang.String getOrchestratorVersion();
```

- *Type:* java.lang.String

---

##### `osDiskSizeGb`<sup>Required</sup> <a name="osDiskSizeGb" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osDiskSizeGb"></a>

```java
public java.lang.Number getOsDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `osDiskType`<sup>Required</sup> <a name="osDiskType" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osDiskType"></a>

```java
public java.lang.String getOsDiskType();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `proximityPlacementGroupId`<sup>Required</sup> <a name="proximityPlacementGroupId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.proximityPlacementGroupId"></a>

```java
public java.lang.String getProximityPlacementGroupId();
```

- *Type:* java.lang.String

---

##### `spotMaxPrice`<sup>Required</sup> <a name="spotMaxPrice" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.spotMaxPrice"></a>

```java
public java.lang.Number getSpotMaxPrice();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.timeouts"></a>

```java
public DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference">DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference</a>

---

##### `upgradeSettings`<sup>Required</sup> <a name="upgradeSettings" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.upgradeSettings"></a>

```java
public DataAzurermKubernetesClusterNodePoolUpgradeSettingsList getUpgradeSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList">DataAzurermKubernetesClusterNodePoolUpgradeSettingsList</a>

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `vnetSubnetId`<sup>Required</sup> <a name="vnetSubnetId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.vnetSubnetId"></a>

```java
public java.lang.String getVnetSubnetId();
```

- *Type:* java.lang.String

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kubernetesClusterNameInput`<sup>Optional</sup> <a name="kubernetesClusterNameInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.kubernetesClusterNameInput"></a>

```java
public java.lang.String getKubernetesClusterNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubernetesClusterName`<sup>Required</sup> <a name="kubernetesClusterName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.kubernetesClusterName"></a>

```java
public java.lang.String getKubernetesClusterName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKubernetesClusterNodePoolConfig <a name="DataAzurermKubernetesClusterNodePoolConfig" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_kubernetes_cluster_node_pool.DataAzurermKubernetesClusterNodePoolConfig;

DataAzurermKubernetesClusterNodePoolConfig.builder()
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
    .kubernetesClusterName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermKubernetesClusterNodePoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.kubernetesClusterName">kubernetesClusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#kubernetes_cluster_name DataAzurermKubernetesClusterNodePool#kubernetes_cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#name DataAzurermKubernetesClusterNodePool#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#resource_group_name DataAzurermKubernetesClusterNodePool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#id DataAzurermKubernetesClusterNodePool#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kubernetesClusterName`<sup>Required</sup> <a name="kubernetesClusterName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.kubernetesClusterName"></a>

```java
public java.lang.String getKubernetesClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#kubernetes_cluster_name DataAzurermKubernetesClusterNodePool#kubernetes_cluster_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#name DataAzurermKubernetesClusterNodePool#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#resource_group_name DataAzurermKubernetesClusterNodePool#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#id DataAzurermKubernetesClusterNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.timeouts"></a>

```java
public DataAzurermKubernetesClusterNodePoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#timeouts DataAzurermKubernetesClusterNodePool#timeouts}

---

### DataAzurermKubernetesClusterNodePoolTimeouts <a name="DataAzurermKubernetesClusterNodePoolTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_kubernetes_cluster_node_pool.DataAzurermKubernetesClusterNodePoolTimeouts;

DataAzurermKubernetesClusterNodePoolTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#read DataAzurermKubernetesClusterNodePool#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/kubernetes_cluster_node_pool#read DataAzurermKubernetesClusterNodePool#read}.

---

### DataAzurermKubernetesClusterNodePoolUpgradeSettings <a name="DataAzurermKubernetesClusterNodePoolUpgradeSettings" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_kubernetes_cluster_node_pool.DataAzurermKubernetesClusterNodePoolUpgradeSettings;

DataAzurermKubernetesClusterNodePoolUpgradeSettings.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference <a name="DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_kubernetes_cluster_node_pool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference;

new DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a>

---


### DataAzurermKubernetesClusterNodePoolUpgradeSettingsList <a name="DataAzurermKubernetesClusterNodePoolUpgradeSettingsList" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_kubernetes_cluster_node_pool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList;

new DataAzurermKubernetesClusterNodePoolUpgradeSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.get"></a>

```java
public DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference <a name="DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_kubernetes_cluster_node_pool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference;

new DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutes">drainTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurge">maxSurge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutes">nodeSoakDurationInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettings">DataAzurermKubernetesClusterNodePoolUpgradeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `drainTimeoutInMinutes`<sup>Required</sup> <a name="drainTimeoutInMinutes" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.drainTimeoutInMinutes"></a>

```java
public java.lang.Number getDrainTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `maxSurge`<sup>Required</sup> <a name="maxSurge" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurge"></a>

```java
public java.lang.String getMaxSurge();
```

- *Type:* java.lang.String

---

##### `nodeSoakDurationInMinutes`<sup>Required</sup> <a name="nodeSoakDurationInMinutes" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.nodeSoakDurationInMinutes"></a>

```java
public java.lang.Number getNodeSoakDurationInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.internalValue"></a>

```java
public DataAzurermKubernetesClusterNodePoolUpgradeSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettings">DataAzurermKubernetesClusterNodePoolUpgradeSettings</a>

---



