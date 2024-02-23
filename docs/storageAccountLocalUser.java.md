# `storageAccountLocalUser` Submodule <a name="`storageAccountLocalUser` Submodule" id="@cdktf/provider-azurerm.storageAccountLocalUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountLocalUser <a name="StorageAccountLocalUser" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user azurerm_storage_account_local_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUser;

StorageAccountLocalUser.Builder.create(Construct scope, java.lang.String id)
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
    .storageAccountId(java.lang.String)
//  .homeDirectory(java.lang.String)
//  .id(java.lang.String)
//  .permissionScope(IResolvable)
//  .permissionScope(java.util.List<StorageAccountLocalUserPermissionScope>)
//  .sshAuthorizedKey(IResolvable)
//  .sshAuthorizedKey(java.util.List<StorageAccountLocalUserSshAuthorizedKey>)
//  .sshKeyEnabled(java.lang.Boolean)
//  .sshKeyEnabled(IResolvable)
//  .sshPasswordEnabled(java.lang.Boolean)
//  .sshPasswordEnabled(IResolvable)
//  .timeouts(StorageAccountLocalUserTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#name StorageAccountLocalUser#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#storage_account_id StorageAccountLocalUser#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.homeDirectory">homeDirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#home_directory StorageAccountLocalUser#home_directory}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#id StorageAccountLocalUser#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.permissionScope">permissionScope</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>></code> | permission_scope block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.sshAuthorizedKey">sshAuthorizedKey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>></code> | ssh_authorized_key block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.sshKeyEnabled">sshKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#ssh_key_enabled StorageAccountLocalUser#ssh_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.sshPasswordEnabled">sshPasswordEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#ssh_password_enabled StorageAccountLocalUser#ssh_password_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#name StorageAccountLocalUser#name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.storageAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#storage_account_id StorageAccountLocalUser#storage_account_id}.

---

##### `homeDirectory`<sup>Optional</sup> <a name="homeDirectory" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.homeDirectory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#home_directory StorageAccountLocalUser#home_directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#id StorageAccountLocalUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissionScope`<sup>Optional</sup> <a name="permissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.permissionScope"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>>

permission_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#permission_scope StorageAccountLocalUser#permission_scope}

---

##### `sshAuthorizedKey`<sup>Optional</sup> <a name="sshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.sshAuthorizedKey"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>>

ssh_authorized_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#ssh_authorized_key StorageAccountLocalUser#ssh_authorized_key}

---

##### `sshKeyEnabled`<sup>Optional</sup> <a name="sshKeyEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.sshKeyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#ssh_key_enabled StorageAccountLocalUser#ssh_key_enabled}.

---

##### `sshPasswordEnabled`<sup>Optional</sup> <a name="sshPasswordEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.sshPasswordEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#ssh_password_enabled StorageAccountLocalUser#ssh_password_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#timeouts StorageAccountLocalUser#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putPermissionScope">putPermissionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putSshAuthorizedKey">putSshAuthorizedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetHomeDirectory">resetHomeDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetPermissionScope">resetPermissionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshAuthorizedKey">resetSshAuthorizedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshKeyEnabled">resetSshKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshPasswordEnabled">resetSshPasswordEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPermissionScope` <a name="putPermissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putPermissionScope"></a>

```java
public void putPermissionScope(IResolvable OR java.util.List<StorageAccountLocalUserPermissionScope> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putPermissionScope.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>>

---

##### `putSshAuthorizedKey` <a name="putSshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putSshAuthorizedKey"></a>

```java
public void putSshAuthorizedKey(IResolvable OR java.util.List<StorageAccountLocalUserSshAuthorizedKey> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putSshAuthorizedKey.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putTimeouts"></a>

```java
public void putTimeouts(StorageAccountLocalUserTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>

---

##### `resetHomeDirectory` <a name="resetHomeDirectory" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetHomeDirectory"></a>

```java
public void resetHomeDirectory()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetId"></a>

```java
public void resetId()
```

##### `resetPermissionScope` <a name="resetPermissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetPermissionScope"></a>

```java
public void resetPermissionScope()
```

##### `resetSshAuthorizedKey` <a name="resetSshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshAuthorizedKey"></a>

```java
public void resetSshAuthorizedKey()
```

##### `resetSshKeyEnabled` <a name="resetSshKeyEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshKeyEnabled"></a>

```java
public void resetSshKeyEnabled()
```

##### `resetSshPasswordEnabled` <a name="resetSshPasswordEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetSshPasswordEnabled"></a>

```java
public void resetSshPasswordEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageAccountLocalUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUser;

StorageAccountLocalUser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUser;

StorageAccountLocalUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUser;

StorageAccountLocalUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUser;

StorageAccountLocalUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageAccountLocalUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StorageAccountLocalUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageAccountLocalUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageAccountLocalUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StorageAccountLocalUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScope">permissionScope</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList">StorageAccountLocalUserPermissionScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sid">sid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKey">sshAuthorizedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList">StorageAccountLocalUserSshAuthorizedKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference">StorageAccountLocalUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectoryInput">homeDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScopeInput">permissionScopeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKeyInput">sshAuthorizedKeyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabledInput">sshKeyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabledInput">sshPasswordEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectory">homeDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabled">sshKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabled">sshPasswordEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `permissionScope`<sup>Required</sup> <a name="permissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScope"></a>

```java
public StorageAccountLocalUserPermissionScopeList getPermissionScope();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList">StorageAccountLocalUserPermissionScopeList</a>

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sid"></a>

```java
public java.lang.String getSid();
```

- *Type:* java.lang.String

---

##### `sshAuthorizedKey`<sup>Required</sup> <a name="sshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKey"></a>

```java
public StorageAccountLocalUserSshAuthorizedKeyList getSshAuthorizedKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList">StorageAccountLocalUserSshAuthorizedKeyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeouts"></a>

```java
public StorageAccountLocalUserTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference">StorageAccountLocalUserTimeoutsOutputReference</a>

---

##### `homeDirectoryInput`<sup>Optional</sup> <a name="homeDirectoryInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectoryInput"></a>

```java
public java.lang.String getHomeDirectoryInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permissionScopeInput`<sup>Optional</sup> <a name="permissionScopeInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.permissionScopeInput"></a>

```java
public java.lang.Object getPermissionScopeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>>

---

##### `sshAuthorizedKeyInput`<sup>Optional</sup> <a name="sshAuthorizedKeyInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshAuthorizedKeyInput"></a>

```java
public java.lang.Object getSshAuthorizedKeyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>>

---

##### `sshKeyEnabledInput`<sup>Optional</sup> <a name="sshKeyEnabledInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabledInput"></a>

```java
public java.lang.Object getSshKeyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sshPasswordEnabledInput`<sup>Optional</sup> <a name="sshPasswordEnabledInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabledInput"></a>

```java
public java.lang.Object getSshPasswordEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>

---

##### `homeDirectory`<sup>Required</sup> <a name="homeDirectory" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.homeDirectory"></a>

```java
public java.lang.String getHomeDirectory();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sshKeyEnabled`<sup>Required</sup> <a name="sshKeyEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshKeyEnabled"></a>

```java
public java.lang.Object getSshKeyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sshPasswordEnabled`<sup>Required</sup> <a name="sshPasswordEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.sshPasswordEnabled"></a>

```java
public java.lang.Object getSshPasswordEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountLocalUserConfig <a name="StorageAccountLocalUserConfig" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUserConfig;

StorageAccountLocalUserConfig.builder()
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
    .storageAccountId(java.lang.String)
//  .homeDirectory(java.lang.String)
//  .id(java.lang.String)
//  .permissionScope(IResolvable)
//  .permissionScope(java.util.List<StorageAccountLocalUserPermissionScope>)
//  .sshAuthorizedKey(IResolvable)
//  .sshAuthorizedKey(java.util.List<StorageAccountLocalUserSshAuthorizedKey>)
//  .sshKeyEnabled(java.lang.Boolean)
//  .sshKeyEnabled(IResolvable)
//  .sshPasswordEnabled(java.lang.Boolean)
//  .sshPasswordEnabled(IResolvable)
//  .timeouts(StorageAccountLocalUserTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#name StorageAccountLocalUser#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#storage_account_id StorageAccountLocalUser#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.homeDirectory">homeDirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#home_directory StorageAccountLocalUser#home_directory}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#id StorageAccountLocalUser#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.permissionScope">permissionScope</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>></code> | permission_scope block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshAuthorizedKey">sshAuthorizedKey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>></code> | ssh_authorized_key block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshKeyEnabled">sshKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#ssh_key_enabled StorageAccountLocalUser#ssh_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshPasswordEnabled">sshPasswordEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#ssh_password_enabled StorageAccountLocalUser#ssh_password_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#name StorageAccountLocalUser#name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#storage_account_id StorageAccountLocalUser#storage_account_id}.

---

##### `homeDirectory`<sup>Optional</sup> <a name="homeDirectory" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.homeDirectory"></a>

```java
public java.lang.String getHomeDirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#home_directory StorageAccountLocalUser#home_directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#id StorageAccountLocalUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissionScope`<sup>Optional</sup> <a name="permissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.permissionScope"></a>

```java
public java.lang.Object getPermissionScope();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>>

permission_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#permission_scope StorageAccountLocalUser#permission_scope}

---

##### `sshAuthorizedKey`<sup>Optional</sup> <a name="sshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshAuthorizedKey"></a>

```java
public java.lang.Object getSshAuthorizedKey();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>>

ssh_authorized_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#ssh_authorized_key StorageAccountLocalUser#ssh_authorized_key}

---

##### `sshKeyEnabled`<sup>Optional</sup> <a name="sshKeyEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshKeyEnabled"></a>

```java
public java.lang.Object getSshKeyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#ssh_key_enabled StorageAccountLocalUser#ssh_key_enabled}.

---

##### `sshPasswordEnabled`<sup>Optional</sup> <a name="sshPasswordEnabled" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.sshPasswordEnabled"></a>

```java
public java.lang.Object getSshPasswordEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#ssh_password_enabled StorageAccountLocalUser#ssh_password_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserConfig.property.timeouts"></a>

```java
public StorageAccountLocalUserTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#timeouts StorageAccountLocalUser#timeouts}

---

### StorageAccountLocalUserPermissionScope <a name="StorageAccountLocalUserPermissionScope" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUserPermissionScope;

StorageAccountLocalUserPermissionScope.builder()
    .permissions(StorageAccountLocalUserPermissionScopePermissions)
    .resourceName(java.lang.String)
    .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a></code> | permissions block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#resource_name StorageAccountLocalUser#resource_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#service StorageAccountLocalUser#service}. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.permissions"></a>

```java
public StorageAccountLocalUserPermissionScopePermissions getPermissions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#permissions StorageAccountLocalUser#permissions}

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#resource_name StorageAccountLocalUser#resource_name}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#service StorageAccountLocalUser#service}.

---

### StorageAccountLocalUserPermissionScopePermissions <a name="StorageAccountLocalUserPermissionScopePermissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUserPermissionScopePermissions;

StorageAccountLocalUserPermissionScopePermissions.builder()
//  .create(java.lang.Boolean)
//  .create(IResolvable)
//  .delete(java.lang.Boolean)
//  .delete(IResolvable)
//  .list(java.lang.Boolean)
//  .list(IResolvable)
//  .read(java.lang.Boolean)
//  .read(IResolvable)
//  .write(java.lang.Boolean)
//  .write(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.create">create</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.delete">delete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.list">list</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#list StorageAccountLocalUser#list}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.read">read</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.write">write</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#write StorageAccountLocalUser#write}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.create"></a>

```java
public java.lang.Object getCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.delete"></a>

```java
public java.lang.Object getDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}.

---

##### `list`<sup>Optional</sup> <a name="list" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.list"></a>

```java
public java.lang.Object getList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#list StorageAccountLocalUser#list}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.read"></a>

```java
public java.lang.Object getRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}.

---

##### `write`<sup>Optional</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions.property.write"></a>

```java
public java.lang.Object getWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#write StorageAccountLocalUser#write}.

---

### StorageAccountLocalUserSshAuthorizedKey <a name="StorageAccountLocalUserSshAuthorizedKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUserSshAuthorizedKey;

StorageAccountLocalUserSshAuthorizedKey.builder()
    .key(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#key StorageAccountLocalUser#key}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#description StorageAccountLocalUser#description}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#key StorageAccountLocalUser#key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#description StorageAccountLocalUser#description}.

---

### StorageAccountLocalUserTimeouts <a name="StorageAccountLocalUserTimeouts" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUserTimeouts;

StorageAccountLocalUserTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#update StorageAccountLocalUser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#create StorageAccountLocalUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#delete StorageAccountLocalUser#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#read StorageAccountLocalUser#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/storage_account_local_user#update StorageAccountLocalUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountLocalUserPermissionScopeList <a name="StorageAccountLocalUserPermissionScopeList" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUserPermissionScopeList;

new StorageAccountLocalUserPermissionScopeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.get"></a>

```java
public StorageAccountLocalUserPermissionScopeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>>

---


### StorageAccountLocalUserPermissionScopeOutputReference <a name="StorageAccountLocalUserPermissionScopeOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUserPermissionScopeOutputReference;

new StorageAccountLocalUserPermissionScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions">putPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions"></a>

```java
public void putPermissions(StorageAccountLocalUserPermissionScopePermissions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.putPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference">StorageAccountLocalUserPermissionScopePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissionsInput">permissionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceNameInput">resourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissions"></a>

```java
public StorageAccountLocalUserPermissionScopePermissionsOutputReference getPermissions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference">StorageAccountLocalUserPermissionScopePermissionsOutputReference</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.permissionsInput"></a>

```java
public StorageAccountLocalUserPermissionScopePermissions getPermissionsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a>

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceNameInput"></a>

```java
public java.lang.String getResourceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScope">StorageAccountLocalUserPermissionScope</a>

---


### StorageAccountLocalUserPermissionScopePermissionsOutputReference <a name="StorageAccountLocalUserPermissionScopePermissionsOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUserPermissionScopePermissionsOutputReference;

new StorageAccountLocalUserPermissionScopePermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetList">resetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetWrite">resetWrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetList` <a name="resetList" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetList"></a>

```java
public void resetList()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetWrite` <a name="resetWrite" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.resetWrite"></a>

```java
public void resetWrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.listInput">listInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.writeInput">writeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.create">create</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.delete">delete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.list">list</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.read">read</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.write">write</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.createInput"></a>

```java
public java.lang.Object getCreateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.deleteInput"></a>

```java
public java.lang.Object getDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `listInput`<sup>Optional</sup> <a name="listInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.listInput"></a>

```java
public java.lang.Object getListInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.readInput"></a>

```java
public java.lang.Object getReadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `writeInput`<sup>Optional</sup> <a name="writeInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.writeInput"></a>

```java
public java.lang.Object getWriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.create"></a>

```java
public java.lang.Object getCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.delete"></a>

```java
public java.lang.Object getDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `list`<sup>Required</sup> <a name="list" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.list"></a>

```java
public java.lang.Object getList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.read"></a>

```java
public java.lang.Object getRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.write"></a>

```java
public java.lang.Object getWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissionsOutputReference.property.internalValue"></a>

```java
public StorageAccountLocalUserPermissionScopePermissions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserPermissionScopePermissions">StorageAccountLocalUserPermissionScopePermissions</a>

---


### StorageAccountLocalUserSshAuthorizedKeyList <a name="StorageAccountLocalUserSshAuthorizedKeyList" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUserSshAuthorizedKeyList;

new StorageAccountLocalUserSshAuthorizedKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.get"></a>

```java
public StorageAccountLocalUserSshAuthorizedKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>>

---


### StorageAccountLocalUserSshAuthorizedKeyOutputReference <a name="StorageAccountLocalUserSshAuthorizedKeyOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUserSshAuthorizedKeyOutputReference;

new StorageAccountLocalUserSshAuthorizedKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKeyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserSshAuthorizedKey">StorageAccountLocalUserSshAuthorizedKey</a>

---


### StorageAccountLocalUserTimeoutsOutputReference <a name="StorageAccountLocalUserTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_account_local_user.StorageAccountLocalUserTimeoutsOutputReference;

new StorageAccountLocalUserTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageAccountLocalUser.StorageAccountLocalUserTimeouts">StorageAccountLocalUserTimeouts</a>

---



