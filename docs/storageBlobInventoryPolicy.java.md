# `storageBlobInventoryPolicy` Submodule <a name="`storageBlobInventoryPolicy` Submodule" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBlobInventoryPolicy <a name="StorageBlobInventoryPolicy" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy azurerm_storage_blob_inventory_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_blob_inventory_policy.StorageBlobInventoryPolicy;

StorageBlobInventoryPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .rules(IResolvable)
    .rules(java.util.List<StorageBlobInventoryPolicyRules>)
    .storageAccountId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StorageBlobInventoryPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules">StorageBlobInventoryPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#storage_account_id StorageBlobInventoryPolicy#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#id StorageBlobInventoryPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts">StorageBlobInventoryPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules">StorageBlobInventoryPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#rules StorageBlobInventoryPolicy#rules}

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.storageAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#storage_account_id StorageBlobInventoryPolicy#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#id StorageBlobInventoryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts">StorageBlobInventoryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#timeouts StorageBlobInventoryPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<StorageBlobInventoryPolicyRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules">StorageBlobInventoryPolicyRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.putTimeouts"></a>

```java
public void putTimeouts(StorageBlobInventoryPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts">StorageBlobInventoryPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageBlobInventoryPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_blob_inventory_policy.StorageBlobInventoryPolicy;

StorageBlobInventoryPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_blob_inventory_policy.StorageBlobInventoryPolicy;

StorageBlobInventoryPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_blob_inventory_policy.StorageBlobInventoryPolicy;

StorageBlobInventoryPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_blob_inventory_policy.StorageBlobInventoryPolicy;

StorageBlobInventoryPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageBlobInventoryPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StorageBlobInventoryPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageBlobInventoryPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageBlobInventoryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StorageBlobInventoryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList">StorageBlobInventoryPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference">StorageBlobInventoryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules">StorageBlobInventoryPolicyRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts">StorageBlobInventoryPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.rules"></a>

```java
public StorageBlobInventoryPolicyRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList">StorageBlobInventoryPolicyRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.timeouts"></a>

```java
public StorageBlobInventoryPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference">StorageBlobInventoryPolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules">StorageBlobInventoryPolicyRules</a>>

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts">StorageBlobInventoryPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBlobInventoryPolicyConfig <a name="StorageBlobInventoryPolicyConfig" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_blob_inventory_policy.StorageBlobInventoryPolicyConfig;

StorageBlobInventoryPolicyConfig.builder()
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
    .rules(IResolvable)
    .rules(java.util.List<StorageBlobInventoryPolicyRules>)
    .storageAccountId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StorageBlobInventoryPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules">StorageBlobInventoryPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#storage_account_id StorageBlobInventoryPolicy#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#id StorageBlobInventoryPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts">StorageBlobInventoryPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules">StorageBlobInventoryPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#rules StorageBlobInventoryPolicy#rules}

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#storage_account_id StorageBlobInventoryPolicy#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#id StorageBlobInventoryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyConfig.property.timeouts"></a>

```java
public StorageBlobInventoryPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts">StorageBlobInventoryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#timeouts StorageBlobInventoryPolicy#timeouts}

---

### StorageBlobInventoryPolicyRules <a name="StorageBlobInventoryPolicyRules" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_blob_inventory_policy.StorageBlobInventoryPolicyRules;

StorageBlobInventoryPolicyRules.builder()
    .format(java.lang.String)
    .name(java.lang.String)
    .schedule(java.lang.String)
    .schemaFields(java.util.List<java.lang.String>)
    .scope(java.lang.String)
    .storageContainerName(java.lang.String)
//  .filter(StorageBlobInventoryPolicyRulesFilter)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#format StorageBlobInventoryPolicy#format}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#name StorageBlobInventoryPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#schedule StorageBlobInventoryPolicy#schedule}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.schemaFields">schemaFields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#schema_fields StorageBlobInventoryPolicy#schema_fields}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#scope StorageBlobInventoryPolicy#scope}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.storageContainerName">storageContainerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#storage_container_name StorageBlobInventoryPolicy#storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter">StorageBlobInventoryPolicyRulesFilter</a></code> | filter block. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#format StorageBlobInventoryPolicy#format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#name StorageBlobInventoryPolicy#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#schedule StorageBlobInventoryPolicy#schedule}.

---

##### `schemaFields`<sup>Required</sup> <a name="schemaFields" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.schemaFields"></a>

```java
public java.util.List<java.lang.String> getSchemaFields();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#schema_fields StorageBlobInventoryPolicy#schema_fields}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#scope StorageBlobInventoryPolicy#scope}.

---

##### `storageContainerName`<sup>Required</sup> <a name="storageContainerName" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.storageContainerName"></a>

```java
public java.lang.String getStorageContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#storage_container_name StorageBlobInventoryPolicy#storage_container_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules.property.filter"></a>

```java
public StorageBlobInventoryPolicyRulesFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter">StorageBlobInventoryPolicyRulesFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#filter StorageBlobInventoryPolicy#filter}

---

### StorageBlobInventoryPolicyRulesFilter <a name="StorageBlobInventoryPolicyRulesFilter" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_blob_inventory_policy.StorageBlobInventoryPolicyRulesFilter;

StorageBlobInventoryPolicyRulesFilter.builder()
    .blobTypes(java.util.List<java.lang.String>)
//  .excludePrefixes(java.util.List<java.lang.String>)
//  .includeBlobVersions(java.lang.Boolean)
//  .includeBlobVersions(IResolvable)
//  .includeDeleted(java.lang.Boolean)
//  .includeDeleted(IResolvable)
//  .includeSnapshots(java.lang.Boolean)
//  .includeSnapshots(IResolvable)
//  .prefixMatch(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.blobTypes">blobTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#blob_types StorageBlobInventoryPolicy#blob_types}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.excludePrefixes">excludePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#exclude_prefixes StorageBlobInventoryPolicy#exclude_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.includeBlobVersions">includeBlobVersions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#include_blob_versions StorageBlobInventoryPolicy#include_blob_versions}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.includeDeleted">includeDeleted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#include_deleted StorageBlobInventoryPolicy#include_deleted}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.includeSnapshots">includeSnapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#include_snapshots StorageBlobInventoryPolicy#include_snapshots}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.prefixMatch">prefixMatch</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#prefix_match StorageBlobInventoryPolicy#prefix_match}. |

---

##### `blobTypes`<sup>Required</sup> <a name="blobTypes" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.blobTypes"></a>

```java
public java.util.List<java.lang.String> getBlobTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#blob_types StorageBlobInventoryPolicy#blob_types}.

---

##### `excludePrefixes`<sup>Optional</sup> <a name="excludePrefixes" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.excludePrefixes"></a>

```java
public java.util.List<java.lang.String> getExcludePrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#exclude_prefixes StorageBlobInventoryPolicy#exclude_prefixes}.

---

##### `includeBlobVersions`<sup>Optional</sup> <a name="includeBlobVersions" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.includeBlobVersions"></a>

```java
public java.lang.Object getIncludeBlobVersions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#include_blob_versions StorageBlobInventoryPolicy#include_blob_versions}.

---

##### `includeDeleted`<sup>Optional</sup> <a name="includeDeleted" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.includeDeleted"></a>

```java
public java.lang.Object getIncludeDeleted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#include_deleted StorageBlobInventoryPolicy#include_deleted}.

---

##### `includeSnapshots`<sup>Optional</sup> <a name="includeSnapshots" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.includeSnapshots"></a>

```java
public java.lang.Object getIncludeSnapshots();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#include_snapshots StorageBlobInventoryPolicy#include_snapshots}.

---

##### `prefixMatch`<sup>Optional</sup> <a name="prefixMatch" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter.property.prefixMatch"></a>

```java
public java.util.List<java.lang.String> getPrefixMatch();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#prefix_match StorageBlobInventoryPolicy#prefix_match}.

---

### StorageBlobInventoryPolicyTimeouts <a name="StorageBlobInventoryPolicyTimeouts" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_blob_inventory_policy.StorageBlobInventoryPolicyTimeouts;

StorageBlobInventoryPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#create StorageBlobInventoryPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#delete StorageBlobInventoryPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#read StorageBlobInventoryPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#update StorageBlobInventoryPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#create StorageBlobInventoryPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#delete StorageBlobInventoryPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#read StorageBlobInventoryPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/storage_blob_inventory_policy#update StorageBlobInventoryPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBlobInventoryPolicyRulesFilterOutputReference <a name="StorageBlobInventoryPolicyRulesFilterOutputReference" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_blob_inventory_policy.StorageBlobInventoryPolicyRulesFilterOutputReference;

new StorageBlobInventoryPolicyRulesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetExcludePrefixes">resetExcludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetIncludeBlobVersions">resetIncludeBlobVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetIncludeDeleted">resetIncludeDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetIncludeSnapshots">resetIncludeSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetPrefixMatch">resetPrefixMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludePrefixes` <a name="resetExcludePrefixes" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetExcludePrefixes"></a>

```java
public void resetExcludePrefixes()
```

##### `resetIncludeBlobVersions` <a name="resetIncludeBlobVersions" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetIncludeBlobVersions"></a>

```java
public void resetIncludeBlobVersions()
```

##### `resetIncludeDeleted` <a name="resetIncludeDeleted" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetIncludeDeleted"></a>

```java
public void resetIncludeDeleted()
```

##### `resetIncludeSnapshots` <a name="resetIncludeSnapshots" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetIncludeSnapshots"></a>

```java
public void resetIncludeSnapshots()
```

##### `resetPrefixMatch` <a name="resetPrefixMatch" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.resetPrefixMatch"></a>

```java
public void resetPrefixMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.blobTypesInput">blobTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.excludePrefixesInput">excludePrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeBlobVersionsInput">includeBlobVersionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeDeletedInput">includeDeletedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeSnapshotsInput">includeSnapshotsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.prefixMatchInput">prefixMatchInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.blobTypes">blobTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.excludePrefixes">excludePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeBlobVersions">includeBlobVersions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeDeleted">includeDeleted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeSnapshots">includeSnapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.prefixMatch">prefixMatch</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter">StorageBlobInventoryPolicyRulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blobTypesInput`<sup>Optional</sup> <a name="blobTypesInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.blobTypesInput"></a>

```java
public java.util.List<java.lang.String> getBlobTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludePrefixesInput`<sup>Optional</sup> <a name="excludePrefixesInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.excludePrefixesInput"></a>

```java
public java.util.List<java.lang.String> getExcludePrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeBlobVersionsInput`<sup>Optional</sup> <a name="includeBlobVersionsInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeBlobVersionsInput"></a>

```java
public java.lang.Object getIncludeBlobVersionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeDeletedInput`<sup>Optional</sup> <a name="includeDeletedInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeDeletedInput"></a>

```java
public java.lang.Object getIncludeDeletedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeSnapshotsInput`<sup>Optional</sup> <a name="includeSnapshotsInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeSnapshotsInput"></a>

```java
public java.lang.Object getIncludeSnapshotsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixMatchInput`<sup>Optional</sup> <a name="prefixMatchInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.prefixMatchInput"></a>

```java
public java.util.List<java.lang.String> getPrefixMatchInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `blobTypes`<sup>Required</sup> <a name="blobTypes" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.blobTypes"></a>

```java
public java.util.List<java.lang.String> getBlobTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludePrefixes`<sup>Required</sup> <a name="excludePrefixes" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.excludePrefixes"></a>

```java
public java.util.List<java.lang.String> getExcludePrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeBlobVersions`<sup>Required</sup> <a name="includeBlobVersions" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeBlobVersions"></a>

```java
public java.lang.Object getIncludeBlobVersions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeDeleted`<sup>Required</sup> <a name="includeDeleted" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeDeleted"></a>

```java
public java.lang.Object getIncludeDeleted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeSnapshots`<sup>Required</sup> <a name="includeSnapshots" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.includeSnapshots"></a>

```java
public java.lang.Object getIncludeSnapshots();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.prefixMatch"></a>

```java
public java.util.List<java.lang.String> getPrefixMatch();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference.property.internalValue"></a>

```java
public StorageBlobInventoryPolicyRulesFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter">StorageBlobInventoryPolicyRulesFilter</a>

---


### StorageBlobInventoryPolicyRulesList <a name="StorageBlobInventoryPolicyRulesList" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_blob_inventory_policy.StorageBlobInventoryPolicyRulesList;

new StorageBlobInventoryPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.get"></a>

```java
public StorageBlobInventoryPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules">StorageBlobInventoryPolicyRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules">StorageBlobInventoryPolicyRules</a>>

---


### StorageBlobInventoryPolicyRulesOutputReference <a name="StorageBlobInventoryPolicyRulesOutputReference" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_blob_inventory_policy.StorageBlobInventoryPolicyRulesOutputReference;

new StorageBlobInventoryPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.putFilter"></a>

```java
public void putFilter(StorageBlobInventoryPolicyRulesFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter">StorageBlobInventoryPolicyRulesFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.resetFilter"></a>

```java
public void resetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference">StorageBlobInventoryPolicyRulesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter">StorageBlobInventoryPolicyRulesFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.schemaFieldsInput">schemaFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.storageContainerNameInput">storageContainerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.schemaFields">schemaFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.storageContainerName">storageContainerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules">StorageBlobInventoryPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.filter"></a>

```java
public StorageBlobInventoryPolicyRulesFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilterOutputReference">StorageBlobInventoryPolicyRulesFilterOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.filterInput"></a>

```java
public StorageBlobInventoryPolicyRulesFilter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesFilter">StorageBlobInventoryPolicyRulesFilter</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `schemaFieldsInput`<sup>Optional</sup> <a name="schemaFieldsInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.schemaFieldsInput"></a>

```java
public java.util.List<java.lang.String> getSchemaFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `storageContainerNameInput`<sup>Optional</sup> <a name="storageContainerNameInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.storageContainerNameInput"></a>

```java
public java.lang.String getStorageContainerNameInput();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `schemaFields`<sup>Required</sup> <a name="schemaFields" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.schemaFields"></a>

```java
public java.util.List<java.lang.String> getSchemaFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `storageContainerName`<sup>Required</sup> <a name="storageContainerName" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.storageContainerName"></a>

```java
public java.lang.String getStorageContainerName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyRules">StorageBlobInventoryPolicyRules</a>

---


### StorageBlobInventoryPolicyTimeoutsOutputReference <a name="StorageBlobInventoryPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_blob_inventory_policy.StorageBlobInventoryPolicyTimeoutsOutputReference;

new StorageBlobInventoryPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts">StorageBlobInventoryPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageBlobInventoryPolicy.StorageBlobInventoryPolicyTimeouts">StorageBlobInventoryPolicyTimeouts</a>

---



