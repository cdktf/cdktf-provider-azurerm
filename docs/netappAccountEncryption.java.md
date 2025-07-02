# `netappAccountEncryption` Submodule <a name="`netappAccountEncryption` Submodule" id="@cdktf/provider-azurerm.netappAccountEncryption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappAccountEncryption <a name="NetappAccountEncryption" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption azurerm_netapp_account_encryption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_account_encryption.NetappAccountEncryption;

NetappAccountEncryption.Builder.create(Construct scope, java.lang.String id)
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
    .encryptionKey(java.lang.String)
    .netappAccountId(java.lang.String)
//  .id(java.lang.String)
//  .systemAssignedIdentityPrincipalId(java.lang.String)
//  .timeouts(NetappAccountEncryptionTimeouts)
//  .userAssignedIdentityId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | The versionless encryption key url. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.netappAccountId">netappAccountId</a></code> | <code>java.lang.String</code> | The ID of the NetApp Account where encryption will be set. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#id NetappAccountEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.systemAssignedIdentityPrincipalId">systemAssignedIdentityPrincipalId</a></code> | <code>java.lang.String</code> | The Principal ID of the System Assigned Identity to use for encryption. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | The resource ID of the User Assigned Identity to use for encryption. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.encryptionKey"></a>

- *Type:* java.lang.String

The versionless encryption key url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#encryption_key NetappAccountEncryption#encryption_key}

---

##### `netappAccountId`<sup>Required</sup> <a name="netappAccountId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.netappAccountId"></a>

- *Type:* java.lang.String

The ID of the NetApp Account where encryption will be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#netapp_account_id NetappAccountEncryption#netapp_account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#id NetappAccountEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `systemAssignedIdentityPrincipalId`<sup>Optional</sup> <a name="systemAssignedIdentityPrincipalId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.systemAssignedIdentityPrincipalId"></a>

- *Type:* java.lang.String

The Principal ID of the System Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#system_assigned_identity_principal_id NetappAccountEncryption#system_assigned_identity_principal_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#timeouts NetappAccountEncryption#timeouts}

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.userAssignedIdentityId"></a>

- *Type:* java.lang.String

The resource ID of the User Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#user_assigned_identity_id NetappAccountEncryption#user_assigned_identity_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetSystemAssignedIdentityPrincipalId">resetSystemAssignedIdentityPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.putTimeouts"></a>

```java
public void putTimeouts(NetappAccountEncryptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetId"></a>

```java
public void resetId()
```

##### `resetSystemAssignedIdentityPrincipalId` <a name="resetSystemAssignedIdentityPrincipalId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetSystemAssignedIdentityPrincipalId"></a>

```java
public void resetSystemAssignedIdentityPrincipalId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetUserAssignedIdentityId"></a>

```java
public void resetUserAssignedIdentityId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetappAccountEncryption resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_account_encryption.NetappAccountEncryption;

NetappAccountEncryption.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_account_encryption.NetappAccountEncryption;

NetappAccountEncryption.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_account_encryption.NetappAccountEncryption;

NetappAccountEncryption.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_account_encryption.NetappAccountEncryption;

NetappAccountEncryption.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetappAccountEncryption.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetappAccountEncryption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetappAccountEncryption to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetappAccountEncryption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetappAccountEncryption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference">NetappAccountEncryptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.netappAccountIdInput">netappAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.systemAssignedIdentityPrincipalIdInput">systemAssignedIdentityPrincipalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.netappAccountId">netappAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.systemAssignedIdentityPrincipalId">systemAssignedIdentityPrincipalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.timeouts"></a>

```java
public NetappAccountEncryptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference">NetappAccountEncryptionTimeoutsOutputReference</a>

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.encryptionKeyInput"></a>

```java
public java.lang.String getEncryptionKeyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `netappAccountIdInput`<sup>Optional</sup> <a name="netappAccountIdInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.netappAccountIdInput"></a>

```java
public java.lang.String getNetappAccountIdInput();
```

- *Type:* java.lang.String

---

##### `systemAssignedIdentityPrincipalIdInput`<sup>Optional</sup> <a name="systemAssignedIdentityPrincipalIdInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.systemAssignedIdentityPrincipalIdInput"></a>

```java
public java.lang.String getSystemAssignedIdentityPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a>

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.userAssignedIdentityIdInput"></a>

```java
public java.lang.String getUserAssignedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `netappAccountId`<sup>Required</sup> <a name="netappAccountId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.netappAccountId"></a>

```java
public java.lang.String getNetappAccountId();
```

- *Type:* java.lang.String

---

##### `systemAssignedIdentityPrincipalId`<sup>Required</sup> <a name="systemAssignedIdentityPrincipalId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.systemAssignedIdentityPrincipalId"></a>

```java
public java.lang.String getSystemAssignedIdentityPrincipalId();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetappAccountEncryptionConfig <a name="NetappAccountEncryptionConfig" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_account_encryption.NetappAccountEncryptionConfig;

NetappAccountEncryptionConfig.builder()
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
    .encryptionKey(java.lang.String)
    .netappAccountId(java.lang.String)
//  .id(java.lang.String)
//  .systemAssignedIdentityPrincipalId(java.lang.String)
//  .timeouts(NetappAccountEncryptionTimeouts)
//  .userAssignedIdentityId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | The versionless encryption key url. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.netappAccountId">netappAccountId</a></code> | <code>java.lang.String</code> | The ID of the NetApp Account where encryption will be set. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#id NetappAccountEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.systemAssignedIdentityPrincipalId">systemAssignedIdentityPrincipalId</a></code> | <code>java.lang.String</code> | The Principal ID of the System Assigned Identity to use for encryption. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | The resource ID of the User Assigned Identity to use for encryption. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

The versionless encryption key url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#encryption_key NetappAccountEncryption#encryption_key}

---

##### `netappAccountId`<sup>Required</sup> <a name="netappAccountId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.netappAccountId"></a>

```java
public java.lang.String getNetappAccountId();
```

- *Type:* java.lang.String

The ID of the NetApp Account where encryption will be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#netapp_account_id NetappAccountEncryption#netapp_account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#id NetappAccountEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `systemAssignedIdentityPrincipalId`<sup>Optional</sup> <a name="systemAssignedIdentityPrincipalId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.systemAssignedIdentityPrincipalId"></a>

```java
public java.lang.String getSystemAssignedIdentityPrincipalId();
```

- *Type:* java.lang.String

The Principal ID of the System Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#system_assigned_identity_principal_id NetappAccountEncryption#system_assigned_identity_principal_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.timeouts"></a>

```java
public NetappAccountEncryptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#timeouts NetappAccountEncryption#timeouts}

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

The resource ID of the User Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#user_assigned_identity_id NetappAccountEncryption#user_assigned_identity_id}

---

### NetappAccountEncryptionTimeouts <a name="NetappAccountEncryptionTimeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_account_encryption.NetappAccountEncryptionTimeouts;

NetappAccountEncryptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#create NetappAccountEncryption#create}. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#delete NetappAccountEncryption#delete}. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#read NetappAccountEncryption#read}. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#update NetappAccountEncryption#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#create NetappAccountEncryption#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#delete NetappAccountEncryption#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#read NetappAccountEncryption#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_account_encryption#update NetappAccountEncryption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappAccountEncryptionTimeoutsOutputReference <a name="NetappAccountEncryptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.netapp_account_encryption.NetappAccountEncryptionTimeoutsOutputReference;

new NetappAccountEncryptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a>

---



