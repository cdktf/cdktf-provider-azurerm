# `managedRedis` Submodule <a name="`managedRedis` Submodule" id="@cdktf/provider-azurerm.managedRedis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedRedis <a name="ManagedRedis" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis azurerm_managed_redis}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedis;

ManagedRedis.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .customerManagedKey(ManagedRedisCustomerManagedKey)
//  .defaultDatabase(ManagedRedisDefaultDatabase)
//  .highAvailabilityEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identity(ManagedRedisIdentity)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ManagedRedisTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#location ManagedRedis#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#name ManagedRedis#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#resource_group_name ManagedRedis#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#sku_name ManagedRedis#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.defaultDatabase">defaultDatabase</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a></code> | default_database block. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.highAvailabilityEnabled">highAvailabilityEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#high_availability_enabled ManagedRedis#high_availability_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#id ManagedRedis#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#tags ManagedRedis#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#location ManagedRedis#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#name ManagedRedis#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#resource_group_name ManagedRedis#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#sku_name ManagedRedis#sku_name}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.customerManagedKey"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#customer_managed_key ManagedRedis#customer_managed_key}

---

##### `defaultDatabase`<sup>Optional</sup> <a name="defaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.defaultDatabase"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a>

default_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#default_database ManagedRedis#default_database}

---

##### `highAvailabilityEnabled`<sup>Optional</sup> <a name="highAvailabilityEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.highAvailabilityEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#high_availability_enabled ManagedRedis#high_availability_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#id ManagedRedis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#identity ManagedRedis#identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#tags ManagedRedis#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#timeouts ManagedRedis#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.putCustomerManagedKey">putCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.putDefaultDatabase">putDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetDefaultDatabase">resetDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetHighAvailabilityEnabled">resetHighAvailabilityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerManagedKey` <a name="putCustomerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putCustomerManagedKey"></a>

```java
public void putCustomerManagedKey(ManagedRedisCustomerManagedKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a>

---

##### `putDefaultDatabase` <a name="putDefaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putDefaultDatabase"></a>

```java
public void putDefaultDatabase(ManagedRedisDefaultDatabase value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putDefaultDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putIdentity"></a>

```java
public void putIdentity(ManagedRedisIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putTimeouts"></a>

```java
public void putTimeouts(ManagedRedisTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a>

---

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetCustomerManagedKey"></a>

```java
public void resetCustomerManagedKey()
```

##### `resetDefaultDatabase` <a name="resetDefaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetDefaultDatabase"></a>

```java
public void resetDefaultDatabase()
```

##### `resetHighAvailabilityEnabled` <a name="resetHighAvailabilityEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetHighAvailabilityEnabled"></a>

```java
public void resetHighAvailabilityEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedRedis resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedis;

ManagedRedis.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedis;

ManagedRedis.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedis;

ManagedRedis.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedis;

ManagedRedis.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagedRedis.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ManagedRedis resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagedRedis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagedRedis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ManagedRedis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference">ManagedRedisCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.defaultDatabase">defaultDatabase</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference">ManagedRedisDefaultDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference">ManagedRedisIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference">ManagedRedisTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.defaultDatabaseInput">defaultDatabaseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.highAvailabilityEnabledInput">highAvailabilityEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.highAvailabilityEnabled">highAvailabilityEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.customerManagedKey"></a>

```java
public ManagedRedisCustomerManagedKeyOutputReference getCustomerManagedKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference">ManagedRedisCustomerManagedKeyOutputReference</a>

---

##### `defaultDatabase`<sup>Required</sup> <a name="defaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.defaultDatabase"></a>

```java
public ManagedRedisDefaultDatabaseOutputReference getDefaultDatabase();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference">ManagedRedisDefaultDatabaseOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.identity"></a>

```java
public ManagedRedisIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference">ManagedRedisIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.timeouts"></a>

```java
public ManagedRedisTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference">ManagedRedisTimeoutsOutputReference</a>

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.customerManagedKeyInput"></a>

```java
public ManagedRedisCustomerManagedKey getCustomerManagedKeyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a>

---

##### `defaultDatabaseInput`<sup>Optional</sup> <a name="defaultDatabaseInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.defaultDatabaseInput"></a>

```java
public ManagedRedisDefaultDatabase getDefaultDatabaseInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a>

---

##### `highAvailabilityEnabledInput`<sup>Optional</sup> <a name="highAvailabilityEnabledInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.highAvailabilityEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getHighAvailabilityEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.identityInput"></a>

```java
public ManagedRedisIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.timeoutsInput"></a>

```java
public IResolvable|ManagedRedisTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a>

---

##### `highAvailabilityEnabled`<sup>Required</sup> <a name="highAvailabilityEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.highAvailabilityEnabled"></a>

```java
public java.lang.Boolean|IResolvable getHighAvailabilityEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedRedisConfig <a name="ManagedRedisConfig" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedisConfig;

ManagedRedisConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .customerManagedKey(ManagedRedisCustomerManagedKey)
//  .defaultDatabase(ManagedRedisDefaultDatabase)
//  .highAvailabilityEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identity(ManagedRedisIdentity)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ManagedRedisTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#location ManagedRedis#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#name ManagedRedis#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#resource_group_name ManagedRedis#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#sku_name ManagedRedis#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.defaultDatabase">defaultDatabase</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a></code> | default_database block. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.highAvailabilityEnabled">highAvailabilityEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#high_availability_enabled ManagedRedis#high_availability_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#id ManagedRedis#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#tags ManagedRedis#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#location ManagedRedis#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#name ManagedRedis#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#resource_group_name ManagedRedis#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#sku_name ManagedRedis#sku_name}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.customerManagedKey"></a>

```java
public ManagedRedisCustomerManagedKey getCustomerManagedKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#customer_managed_key ManagedRedis#customer_managed_key}

---

##### `defaultDatabase`<sup>Optional</sup> <a name="defaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.defaultDatabase"></a>

```java
public ManagedRedisDefaultDatabase getDefaultDatabase();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a>

default_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#default_database ManagedRedis#default_database}

---

##### `highAvailabilityEnabled`<sup>Optional</sup> <a name="highAvailabilityEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.highAvailabilityEnabled"></a>

```java
public java.lang.Boolean|IResolvable getHighAvailabilityEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#high_availability_enabled ManagedRedis#high_availability_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#id ManagedRedis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.identity"></a>

```java
public ManagedRedisIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#identity ManagedRedis#identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#tags ManagedRedis#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.timeouts"></a>

```java
public ManagedRedisTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#timeouts ManagedRedis#timeouts}

---

### ManagedRedisCustomerManagedKey <a name="ManagedRedisCustomerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedisCustomerManagedKey;

ManagedRedisCustomerManagedKey.builder()
    .keyVaultKeyId(java.lang.String)
    .userAssignedIdentityId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#key_vault_key_id ManagedRedis#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#user_assigned_identity_id ManagedRedis#user_assigned_identity_id}. |

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#key_vault_key_id ManagedRedis#key_vault_key_id}.

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#user_assigned_identity_id ManagedRedis#user_assigned_identity_id}.

---

### ManagedRedisDefaultDatabase <a name="ManagedRedisDefaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedisDefaultDatabase;

ManagedRedisDefaultDatabase.builder()
//  .accessKeysAuthenticationEnabled(java.lang.Boolean|IResolvable)
//  .clientProtocol(java.lang.String)
//  .clusteringPolicy(java.lang.String)
//  .evictionPolicy(java.lang.String)
//  .geoReplicationGroupName(java.lang.String)
//  .module(IResolvable|java.util.List<ManagedRedisDefaultDatabaseModule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.accessKeysAuthenticationEnabled">accessKeysAuthenticationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#access_keys_authentication_enabled ManagedRedis#access_keys_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.clientProtocol">clientProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#client_protocol ManagedRedis#client_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.clusteringPolicy">clusteringPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#clustering_policy ManagedRedis#clustering_policy}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#eviction_policy ManagedRedis#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.geoReplicationGroupName">geoReplicationGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#geo_replication_group_name ManagedRedis#geo_replication_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.module">module</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>></code> | module block. |

---

##### `accessKeysAuthenticationEnabled`<sup>Optional</sup> <a name="accessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.accessKeysAuthenticationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAccessKeysAuthenticationEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#access_keys_authentication_enabled ManagedRedis#access_keys_authentication_enabled}.

---

##### `clientProtocol`<sup>Optional</sup> <a name="clientProtocol" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.clientProtocol"></a>

```java
public java.lang.String getClientProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#client_protocol ManagedRedis#client_protocol}.

---

##### `clusteringPolicy`<sup>Optional</sup> <a name="clusteringPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.clusteringPolicy"></a>

```java
public java.lang.String getClusteringPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#clustering_policy ManagedRedis#clustering_policy}.

---

##### `evictionPolicy`<sup>Optional</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.evictionPolicy"></a>

```java
public java.lang.String getEvictionPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#eviction_policy ManagedRedis#eviction_policy}.

---

##### `geoReplicationGroupName`<sup>Optional</sup> <a name="geoReplicationGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.geoReplicationGroupName"></a>

```java
public java.lang.String getGeoReplicationGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#geo_replication_group_name ManagedRedis#geo_replication_group_name}.

---

##### `module`<sup>Optional</sup> <a name="module" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.module"></a>

```java
public IResolvable|java.util.List<ManagedRedisDefaultDatabaseModule> getModule();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>>

module block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#module ManagedRedis#module}

---

### ManagedRedisDefaultDatabaseModule <a name="ManagedRedisDefaultDatabaseModule" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedisDefaultDatabaseModule;

ManagedRedisDefaultDatabaseModule.builder()
    .name(java.lang.String)
//  .args(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#name ManagedRedis#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule.property.args">args</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#args ManagedRedis#args}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#name ManagedRedis#name}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule.property.args"></a>

```java
public java.lang.String getArgs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#args ManagedRedis#args}.

---

### ManagedRedisIdentity <a name="ManagedRedisIdentity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedisIdentity;

ManagedRedisIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#type ManagedRedis#type}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#identity_ids ManagedRedis#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#type ManagedRedis#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#identity_ids ManagedRedis#identity_ids}.

---

### ManagedRedisTimeouts <a name="ManagedRedisTimeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedisTimeouts;

ManagedRedisTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#create ManagedRedis#create}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#delete ManagedRedis#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#read ManagedRedis#read}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#update ManagedRedis#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#create ManagedRedis#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#delete ManagedRedis#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#read ManagedRedis#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.52.0/docs/resources/managed_redis#update ManagedRedis#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedRedisCustomerManagedKeyOutputReference <a name="ManagedRedisCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedisCustomerManagedKeyOutputReference;

new ManagedRedisCustomerManagedKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```java
public java.lang.String getKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput"></a>

```java
public java.lang.String getUserAssignedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.internalValue"></a>

```java
public ManagedRedisCustomerManagedKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a>

---


### ManagedRedisDefaultDatabaseModuleList <a name="ManagedRedisDefaultDatabaseModuleList" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedisDefaultDatabaseModuleList;

new ManagedRedisDefaultDatabaseModuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.get"></a>

```java
public ManagedRedisDefaultDatabaseModuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ManagedRedisDefaultDatabaseModule> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>>

---


### ManagedRedisDefaultDatabaseModuleOutputReference <a name="ManagedRedisDefaultDatabaseModuleOutputReference" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedisDefaultDatabaseModuleOutputReference;

new ManagedRedisDefaultDatabaseModuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.resetArgs">resetArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.resetArgs"></a>

```java
public void resetArgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.argsInput">argsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.args">args</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.argsInput"></a>

```java
public java.lang.String getArgsInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.args"></a>

```java
public java.lang.String getArgs();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.internalValue"></a>

```java
public IResolvable|ManagedRedisDefaultDatabaseModule getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>

---


### ManagedRedisDefaultDatabaseOutputReference <a name="ManagedRedisDefaultDatabaseOutputReference" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedisDefaultDatabaseOutputReference;

new ManagedRedisDefaultDatabaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.putModule">putModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetAccessKeysAuthenticationEnabled">resetAccessKeysAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetClientProtocol">resetClientProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetClusteringPolicy">resetClusteringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetEvictionPolicy">resetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetGeoReplicationGroupName">resetGeoReplicationGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetModule">resetModule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModule` <a name="putModule" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.putModule"></a>

```java
public void putModule(IResolvable|java.util.List<ManagedRedisDefaultDatabaseModule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.putModule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>>

---

##### `resetAccessKeysAuthenticationEnabled` <a name="resetAccessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetAccessKeysAuthenticationEnabled"></a>

```java
public void resetAccessKeysAuthenticationEnabled()
```

##### `resetClientProtocol` <a name="resetClientProtocol" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetClientProtocol"></a>

```java
public void resetClientProtocol()
```

##### `resetClusteringPolicy` <a name="resetClusteringPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetClusteringPolicy"></a>

```java
public void resetClusteringPolicy()
```

##### `resetEvictionPolicy` <a name="resetEvictionPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetEvictionPolicy"></a>

```java
public void resetEvictionPolicy()
```

##### `resetGeoReplicationGroupName` <a name="resetGeoReplicationGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetGeoReplicationGroupName"></a>

```java
public void resetGeoReplicationGroupName()
```

##### `resetModule` <a name="resetModule" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetModule"></a>

```java
public void resetModule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.module">module</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList">ManagedRedisDefaultDatabaseModuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.primaryAccessKey">primaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.accessKeysAuthenticationEnabledInput">accessKeysAuthenticationEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clientProtocolInput">clientProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clusteringPolicyInput">clusteringPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.evictionPolicyInput">evictionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.geoReplicationGroupNameInput">geoReplicationGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.moduleInput">moduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.accessKeysAuthenticationEnabled">accessKeysAuthenticationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clientProtocol">clientProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clusteringPolicy">clusteringPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.geoReplicationGroupName">geoReplicationGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.module"></a>

```java
public ManagedRedisDefaultDatabaseModuleList getModule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList">ManagedRedisDefaultDatabaseModuleList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.primaryAccessKey"></a>

```java
public java.lang.String getPrimaryAccessKey();
```

- *Type:* java.lang.String

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.secondaryAccessKey"></a>

```java
public java.lang.String getSecondaryAccessKey();
```

- *Type:* java.lang.String

---

##### `accessKeysAuthenticationEnabledInput`<sup>Optional</sup> <a name="accessKeysAuthenticationEnabledInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.accessKeysAuthenticationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAccessKeysAuthenticationEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clientProtocolInput`<sup>Optional</sup> <a name="clientProtocolInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clientProtocolInput"></a>

```java
public java.lang.String getClientProtocolInput();
```

- *Type:* java.lang.String

---

##### `clusteringPolicyInput`<sup>Optional</sup> <a name="clusteringPolicyInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clusteringPolicyInput"></a>

```java
public java.lang.String getClusteringPolicyInput();
```

- *Type:* java.lang.String

---

##### `evictionPolicyInput`<sup>Optional</sup> <a name="evictionPolicyInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.evictionPolicyInput"></a>

```java
public java.lang.String getEvictionPolicyInput();
```

- *Type:* java.lang.String

---

##### `geoReplicationGroupNameInput`<sup>Optional</sup> <a name="geoReplicationGroupNameInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.geoReplicationGroupNameInput"></a>

```java
public java.lang.String getGeoReplicationGroupNameInput();
```

- *Type:* java.lang.String

---

##### `moduleInput`<sup>Optional</sup> <a name="moduleInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.moduleInput"></a>

```java
public IResolvable|java.util.List<ManagedRedisDefaultDatabaseModule> getModuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule">ManagedRedisDefaultDatabaseModule</a>>

---

##### `accessKeysAuthenticationEnabled`<sup>Required</sup> <a name="accessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.accessKeysAuthenticationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAccessKeysAuthenticationEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clientProtocol`<sup>Required</sup> <a name="clientProtocol" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clientProtocol"></a>

```java
public java.lang.String getClientProtocol();
```

- *Type:* java.lang.String

---

##### `clusteringPolicy`<sup>Required</sup> <a name="clusteringPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clusteringPolicy"></a>

```java
public java.lang.String getClusteringPolicy();
```

- *Type:* java.lang.String

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.evictionPolicy"></a>

```java
public java.lang.String getEvictionPolicy();
```

- *Type:* java.lang.String

---

##### `geoReplicationGroupName`<sup>Required</sup> <a name="geoReplicationGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.geoReplicationGroupName"></a>

```java
public java.lang.String getGeoReplicationGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.internalValue"></a>

```java
public ManagedRedisDefaultDatabase getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a>

---


### ManagedRedisIdentityOutputReference <a name="ManagedRedisIdentityOutputReference" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedisIdentityOutputReference;

new ManagedRedisIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.internalValue"></a>

```java
public ManagedRedisIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a>

---


### ManagedRedisTimeoutsOutputReference <a name="ManagedRedisTimeoutsOutputReference" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_redis.ManagedRedisTimeoutsOutputReference;

new ManagedRedisTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ManagedRedisTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a>

---



