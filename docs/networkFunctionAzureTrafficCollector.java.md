# `networkFunctionAzureTrafficCollector` Submodule <a name="`networkFunctionAzureTrafficCollector` Submodule" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFunctionAzureTrafficCollector <a name="NetworkFunctionAzureTrafficCollector" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector azurerm_network_function_azure_traffic_collector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_function_azure_traffic_collector.NetworkFunctionAzureTrafficCollector;

NetworkFunctionAzureTrafficCollector.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NetworkFunctionAzureTrafficCollectorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#location NetworkFunctionAzureTrafficCollector#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#name NetworkFunctionAzureTrafficCollector#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#resource_group_name NetworkFunctionAzureTrafficCollector#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#id NetworkFunctionAzureTrafficCollector#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#tags NetworkFunctionAzureTrafficCollector#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#location NetworkFunctionAzureTrafficCollector#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#name NetworkFunctionAzureTrafficCollector#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#resource_group_name NetworkFunctionAzureTrafficCollector#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#id NetworkFunctionAzureTrafficCollector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#tags NetworkFunctionAzureTrafficCollector#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#timeouts NetworkFunctionAzureTrafficCollector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.putTimeouts"></a>

```java
public void putTimeouts(NetworkFunctionAzureTrafficCollectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkFunctionAzureTrafficCollector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_function_azure_traffic_collector.NetworkFunctionAzureTrafficCollector;

NetworkFunctionAzureTrafficCollector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_function_azure_traffic_collector.NetworkFunctionAzureTrafficCollector;

NetworkFunctionAzureTrafficCollector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_function_azure_traffic_collector.NetworkFunctionAzureTrafficCollector;

NetworkFunctionAzureTrafficCollector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_function_azure_traffic_collector.NetworkFunctionAzureTrafficCollector;

NetworkFunctionAzureTrafficCollector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkFunctionAzureTrafficCollector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkFunctionAzureTrafficCollector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkFunctionAzureTrafficCollector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkFunctionAzureTrafficCollector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFunctionAzureTrafficCollector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.collectorPolicyIds">collectorPolicyIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference">NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.virtualHubId">virtualHubId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `collectorPolicyIds`<sup>Required</sup> <a name="collectorPolicyIds" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.collectorPolicyIds"></a>

```java
public java.util.List<java.lang.String> getCollectorPolicyIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.timeouts"></a>

```java
public NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference">NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference</a>

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.virtualHubId"></a>

```java
public java.util.List<java.lang.String> getVirtualHubId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFunctionAzureTrafficCollectorConfig <a name="NetworkFunctionAzureTrafficCollectorConfig" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_function_azure_traffic_collector.NetworkFunctionAzureTrafficCollectorConfig;

NetworkFunctionAzureTrafficCollectorConfig.builder()
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
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NetworkFunctionAzureTrafficCollectorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#location NetworkFunctionAzureTrafficCollector#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#name NetworkFunctionAzureTrafficCollector#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#resource_group_name NetworkFunctionAzureTrafficCollector#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#id NetworkFunctionAzureTrafficCollector#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#tags NetworkFunctionAzureTrafficCollector#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#location NetworkFunctionAzureTrafficCollector#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#name NetworkFunctionAzureTrafficCollector#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#resource_group_name NetworkFunctionAzureTrafficCollector#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#id NetworkFunctionAzureTrafficCollector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#tags NetworkFunctionAzureTrafficCollector#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorConfig.property.timeouts"></a>

```java
public NetworkFunctionAzureTrafficCollectorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#timeouts NetworkFunctionAzureTrafficCollector#timeouts}

---

### NetworkFunctionAzureTrafficCollectorTimeouts <a name="NetworkFunctionAzureTrafficCollectorTimeouts" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_function_azure_traffic_collector.NetworkFunctionAzureTrafficCollectorTimeouts;

NetworkFunctionAzureTrafficCollectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#create NetworkFunctionAzureTrafficCollector#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#delete NetworkFunctionAzureTrafficCollector#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#read NetworkFunctionAzureTrafficCollector#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#update NetworkFunctionAzureTrafficCollector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#create NetworkFunctionAzureTrafficCollector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#delete NetworkFunctionAzureTrafficCollector#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#read NetworkFunctionAzureTrafficCollector#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/network_function_azure_traffic_collector#update NetworkFunctionAzureTrafficCollector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference <a name="NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_function_azure_traffic_collector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference;

new NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.networkFunctionAzureTrafficCollector.NetworkFunctionAzureTrafficCollectorTimeouts">NetworkFunctionAzureTrafficCollectorTimeouts</a>

---



