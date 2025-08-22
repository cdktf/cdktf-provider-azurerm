# `containerRegistryAgentPool` Submodule <a name="`containerRegistryAgentPool` Submodule" id="@cdktf/provider-azurerm.containerRegistryAgentPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryAgentPool <a name="ContainerRegistryAgentPool" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool azurerm_container_registry_agent_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_agent_pool.ContainerRegistryAgentPool;

ContainerRegistryAgentPool.Builder.create(Construct scope, java.lang.String id)
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
    .containerRegistryName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .instanceCount(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tier(java.lang.String)
//  .timeouts(ContainerRegistryAgentPoolTimeouts)
//  .virtualNetworkSubnetId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.containerRegistryName">containerRegistryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#container_registry_name ContainerRegistryAgentPool#container_registry_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#location ContainerRegistryAgentPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#name ContainerRegistryAgentPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#resource_group_name ContainerRegistryAgentPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#id ContainerRegistryAgentPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#instance_count ContainerRegistryAgentPool#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#tags ContainerRegistryAgentPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#tier ContainerRegistryAgentPool#tier}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#virtual_network_subnet_id ContainerRegistryAgentPool#virtual_network_subnet_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerRegistryName`<sup>Required</sup> <a name="containerRegistryName" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.containerRegistryName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#container_registry_name ContainerRegistryAgentPool#container_registry_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#location ContainerRegistryAgentPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#name ContainerRegistryAgentPool#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#resource_group_name ContainerRegistryAgentPool#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#id ContainerRegistryAgentPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.instanceCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#instance_count ContainerRegistryAgentPool#instance_count}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#tags ContainerRegistryAgentPool#tags}.

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#tier ContainerRegistryAgentPool#tier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#timeouts ContainerRegistryAgentPool#timeouts}

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.Initializer.parameter.virtualNetworkSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#virtual_network_subnet_id ContainerRegistryAgentPool#virtual_network_subnet_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetVirtualNetworkSubnetId">resetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.putTimeouts"></a>

```java
public void putTimeouts(ContainerRegistryAgentPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetTier"></a>

```java
public void resetTier()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirtualNetworkSubnetId` <a name="resetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.resetVirtualNetworkSubnetId"></a>

```java
public void resetVirtualNetworkSubnetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerRegistryAgentPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_agent_pool.ContainerRegistryAgentPool;

ContainerRegistryAgentPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_agent_pool.ContainerRegistryAgentPool;

ContainerRegistryAgentPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_agent_pool.ContainerRegistryAgentPool;

ContainerRegistryAgentPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_agent_pool.ContainerRegistryAgentPool;

ContainerRegistryAgentPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContainerRegistryAgentPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ContainerRegistryAgentPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContainerRegistryAgentPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContainerRegistryAgentPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistryAgentPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference">ContainerRegistryAgentPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.containerRegistryNameInput">containerRegistryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.virtualNetworkSubnetIdInput">virtualNetworkSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.containerRegistryName">containerRegistryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.timeouts"></a>

```java
public ContainerRegistryAgentPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference">ContainerRegistryAgentPoolTimeoutsOutputReference</a>

---

##### `containerRegistryNameInput`<sup>Optional</sup> <a name="containerRegistryNameInput" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.containerRegistryNameInput"></a>

```java
public java.lang.String getContainerRegistryNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a>

---

##### `virtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="virtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.virtualNetworkSubnetIdInput"></a>

```java
public java.lang.String getVirtualNetworkSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `containerRegistryName`<sup>Required</sup> <a name="containerRegistryName" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.containerRegistryName"></a>

```java
public java.lang.String getContainerRegistryName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryAgentPoolConfig <a name="ContainerRegistryAgentPoolConfig" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_agent_pool.ContainerRegistryAgentPoolConfig;

ContainerRegistryAgentPoolConfig.builder()
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
    .containerRegistryName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .instanceCount(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tier(java.lang.String)
//  .timeouts(ContainerRegistryAgentPoolTimeouts)
//  .virtualNetworkSubnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.containerRegistryName">containerRegistryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#container_registry_name ContainerRegistryAgentPool#container_registry_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#location ContainerRegistryAgentPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#name ContainerRegistryAgentPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#resource_group_name ContainerRegistryAgentPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#id ContainerRegistryAgentPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#instance_count ContainerRegistryAgentPool#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#tags ContainerRegistryAgentPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#tier ContainerRegistryAgentPool#tier}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#virtual_network_subnet_id ContainerRegistryAgentPool#virtual_network_subnet_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerRegistryName`<sup>Required</sup> <a name="containerRegistryName" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.containerRegistryName"></a>

```java
public java.lang.String getContainerRegistryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#container_registry_name ContainerRegistryAgentPool#container_registry_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#location ContainerRegistryAgentPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#name ContainerRegistryAgentPool#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#resource_group_name ContainerRegistryAgentPool#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#id ContainerRegistryAgentPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#instance_count ContainerRegistryAgentPool#instance_count}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#tags ContainerRegistryAgentPool#tags}.

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#tier ContainerRegistryAgentPool#tier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.timeouts"></a>

```java
public ContainerRegistryAgentPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#timeouts ContainerRegistryAgentPool#timeouts}

---

##### `virtualNetworkSubnetId`<sup>Optional</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolConfig.property.virtualNetworkSubnetId"></a>

```java
public java.lang.String getVirtualNetworkSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#virtual_network_subnet_id ContainerRegistryAgentPool#virtual_network_subnet_id}.

---

### ContainerRegistryAgentPoolTimeouts <a name="ContainerRegistryAgentPoolTimeouts" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_agent_pool.ContainerRegistryAgentPoolTimeouts;

ContainerRegistryAgentPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#create ContainerRegistryAgentPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#delete ContainerRegistryAgentPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#read ContainerRegistryAgentPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#update ContainerRegistryAgentPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#create ContainerRegistryAgentPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#delete ContainerRegistryAgentPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#read ContainerRegistryAgentPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/container_registry_agent_pool#update ContainerRegistryAgentPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryAgentPoolTimeoutsOutputReference <a name="ContainerRegistryAgentPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry_agent_pool.ContainerRegistryAgentPoolTimeoutsOutputReference;

new ContainerRegistryAgentPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistryAgentPool.ContainerRegistryAgentPoolTimeouts">ContainerRegistryAgentPoolTimeouts</a>

---



