# `redisCacheAccessPolicyAssignment` Submodule <a name="`redisCacheAccessPolicyAssignment` Submodule" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisCacheAccessPolicyAssignment <a name="RedisCacheAccessPolicyAssignment" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment azurerm_redis_cache_access_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache_access_policy_assignment.RedisCacheAccessPolicyAssignment;

RedisCacheAccessPolicyAssignment.Builder.create(Construct scope, java.lang.String id)
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
    .accessPolicyName(java.lang.String)
    .name(java.lang.String)
    .objectId(java.lang.String)
    .objectIdAlias(java.lang.String)
    .redisCacheId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(RedisCacheAccessPolicyAssignmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.accessPolicyName">accessPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#access_policy_name RedisCacheAccessPolicyAssignment#access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#name RedisCacheAccessPolicyAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#object_id RedisCacheAccessPolicyAssignment#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.objectIdAlias">objectIdAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#object_id_alias RedisCacheAccessPolicyAssignment#object_id_alias}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.redisCacheId">redisCacheId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#redis_cache_id RedisCacheAccessPolicyAssignment#redis_cache_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#id RedisCacheAccessPolicyAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts">RedisCacheAccessPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessPolicyName`<sup>Required</sup> <a name="accessPolicyName" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.accessPolicyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#access_policy_name RedisCacheAccessPolicyAssignment#access_policy_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#name RedisCacheAccessPolicyAssignment#name}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#object_id RedisCacheAccessPolicyAssignment#object_id}.

---

##### `objectIdAlias`<sup>Required</sup> <a name="objectIdAlias" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.objectIdAlias"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#object_id_alias RedisCacheAccessPolicyAssignment#object_id_alias}.

---

##### `redisCacheId`<sup>Required</sup> <a name="redisCacheId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.redisCacheId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#redis_cache_id RedisCacheAccessPolicyAssignment#redis_cache_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#id RedisCacheAccessPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts">RedisCacheAccessPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#timeouts RedisCacheAccessPolicyAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.putTimeouts"></a>

```java
public void putTimeouts(RedisCacheAccessPolicyAssignmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts">RedisCacheAccessPolicyAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RedisCacheAccessPolicyAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache_access_policy_assignment.RedisCacheAccessPolicyAssignment;

RedisCacheAccessPolicyAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache_access_policy_assignment.RedisCacheAccessPolicyAssignment;

RedisCacheAccessPolicyAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache_access_policy_assignment.RedisCacheAccessPolicyAssignment;

RedisCacheAccessPolicyAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache_access_policy_assignment.RedisCacheAccessPolicyAssignment;

RedisCacheAccessPolicyAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedisCacheAccessPolicyAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RedisCacheAccessPolicyAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedisCacheAccessPolicyAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedisCacheAccessPolicyAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RedisCacheAccessPolicyAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference">RedisCacheAccessPolicyAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.accessPolicyNameInput">accessPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectIdAliasInput">objectIdAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.redisCacheIdInput">redisCacheIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts">RedisCacheAccessPolicyAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.accessPolicyName">accessPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectIdAlias">objectIdAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.redisCacheId">redisCacheId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.timeouts"></a>

```java
public RedisCacheAccessPolicyAssignmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference">RedisCacheAccessPolicyAssignmentTimeoutsOutputReference</a>

---

##### `accessPolicyNameInput`<sup>Optional</sup> <a name="accessPolicyNameInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.accessPolicyNameInput"></a>

```java
public java.lang.String getAccessPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `objectIdAliasInput`<sup>Optional</sup> <a name="objectIdAliasInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectIdAliasInput"></a>

```java
public java.lang.String getObjectIdAliasInput();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `redisCacheIdInput`<sup>Optional</sup> <a name="redisCacheIdInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.redisCacheIdInput"></a>

```java
public java.lang.String getRedisCacheIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts">RedisCacheAccessPolicyAssignmentTimeouts</a>

---

##### `accessPolicyName`<sup>Required</sup> <a name="accessPolicyName" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.accessPolicyName"></a>

```java
public java.lang.String getAccessPolicyName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `objectIdAlias`<sup>Required</sup> <a name="objectIdAlias" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectIdAlias"></a>

```java
public java.lang.String getObjectIdAlias();
```

- *Type:* java.lang.String

---

##### `redisCacheId`<sup>Required</sup> <a name="redisCacheId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.redisCacheId"></a>

```java
public java.lang.String getRedisCacheId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedisCacheAccessPolicyAssignmentConfig <a name="RedisCacheAccessPolicyAssignmentConfig" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache_access_policy_assignment.RedisCacheAccessPolicyAssignmentConfig;

RedisCacheAccessPolicyAssignmentConfig.builder()
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
    .accessPolicyName(java.lang.String)
    .name(java.lang.String)
    .objectId(java.lang.String)
    .objectIdAlias(java.lang.String)
    .redisCacheId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(RedisCacheAccessPolicyAssignmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.accessPolicyName">accessPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#access_policy_name RedisCacheAccessPolicyAssignment#access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#name RedisCacheAccessPolicyAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#object_id RedisCacheAccessPolicyAssignment#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.objectIdAlias">objectIdAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#object_id_alias RedisCacheAccessPolicyAssignment#object_id_alias}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.redisCacheId">redisCacheId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#redis_cache_id RedisCacheAccessPolicyAssignment#redis_cache_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#id RedisCacheAccessPolicyAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts">RedisCacheAccessPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessPolicyName`<sup>Required</sup> <a name="accessPolicyName" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.accessPolicyName"></a>

```java
public java.lang.String getAccessPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#access_policy_name RedisCacheAccessPolicyAssignment#access_policy_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#name RedisCacheAccessPolicyAssignment#name}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#object_id RedisCacheAccessPolicyAssignment#object_id}.

---

##### `objectIdAlias`<sup>Required</sup> <a name="objectIdAlias" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.objectIdAlias"></a>

```java
public java.lang.String getObjectIdAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#object_id_alias RedisCacheAccessPolicyAssignment#object_id_alias}.

---

##### `redisCacheId`<sup>Required</sup> <a name="redisCacheId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.redisCacheId"></a>

```java
public java.lang.String getRedisCacheId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#redis_cache_id RedisCacheAccessPolicyAssignment#redis_cache_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#id RedisCacheAccessPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.timeouts"></a>

```java
public RedisCacheAccessPolicyAssignmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts">RedisCacheAccessPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#timeouts RedisCacheAccessPolicyAssignment#timeouts}

---

### RedisCacheAccessPolicyAssignmentTimeouts <a name="RedisCacheAccessPolicyAssignmentTimeouts" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache_access_policy_assignment.RedisCacheAccessPolicyAssignmentTimeouts;

RedisCacheAccessPolicyAssignmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#create RedisCacheAccessPolicyAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#delete RedisCacheAccessPolicyAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#read RedisCacheAccessPolicyAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#create RedisCacheAccessPolicyAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#delete RedisCacheAccessPolicyAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/redis_cache_access_policy_assignment#read RedisCacheAccessPolicyAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisCacheAccessPolicyAssignmentTimeoutsOutputReference <a name="RedisCacheAccessPolicyAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache_access_policy_assignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference;

new RedisCacheAccessPolicyAssignmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts">RedisCacheAccessPolicyAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts">RedisCacheAccessPolicyAssignmentTimeouts</a>

---



