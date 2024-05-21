# `mssqlServerTransparentDataEncryption` Submodule <a name="`mssqlServerTransparentDataEncryption` Submodule" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlServerTransparentDataEncryption <a name="MssqlServerTransparentDataEncryption" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption azurerm_mssql_server_transparent_data_encryption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_server_transparent_data_encryption.MssqlServerTransparentDataEncryption;

MssqlServerTransparentDataEncryption.Builder.create(Construct scope, java.lang.String id)
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
    .serverId(java.lang.String)
//  .autoRotationEnabled(java.lang.Boolean)
//  .autoRotationEnabled(IResolvable)
//  .id(java.lang.String)
//  .keyVaultKeyId(java.lang.String)
//  .timeouts(MssqlServerTransparentDataEncryptionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.serverId">serverId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#server_id MssqlServerTransparentDataEncryption#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.autoRotationEnabled">autoRotationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#auto_rotation_enabled MssqlServerTransparentDataEncryption#auto_rotation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#id MssqlServerTransparentDataEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#key_vault_key_id MssqlServerTransparentDataEncryption#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.serverId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#server_id MssqlServerTransparentDataEncryption#server_id}.

---

##### `autoRotationEnabled`<sup>Optional</sup> <a name="autoRotationEnabled" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.autoRotationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#auto_rotation_enabled MssqlServerTransparentDataEncryption#auto_rotation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#id MssqlServerTransparentDataEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.keyVaultKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#key_vault_key_id MssqlServerTransparentDataEncryption#key_vault_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#timeouts MssqlServerTransparentDataEncryption#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetAutoRotationEnabled">resetAutoRotationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.putTimeouts"></a>

```java
public void putTimeouts(MssqlServerTransparentDataEncryptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>

---

##### `resetAutoRotationEnabled` <a name="resetAutoRotationEnabled" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetAutoRotationEnabled"></a>

```java
public void resetAutoRotationEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetId"></a>

```java
public void resetId()
```

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetKeyVaultKeyId"></a>

```java
public void resetKeyVaultKeyId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlServerTransparentDataEncryption resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_server_transparent_data_encryption.MssqlServerTransparentDataEncryption;

MssqlServerTransparentDataEncryption.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_server_transparent_data_encryption.MssqlServerTransparentDataEncryption;

MssqlServerTransparentDataEncryption.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_server_transparent_data_encryption.MssqlServerTransparentDataEncryption;

MssqlServerTransparentDataEncryption.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_server_transparent_data_encryption.MssqlServerTransparentDataEncryption;

MssqlServerTransparentDataEncryption.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MssqlServerTransparentDataEncryption.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MssqlServerTransparentDataEncryption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MssqlServerTransparentDataEncryption to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MssqlServerTransparentDataEncryption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MssqlServerTransparentDataEncryption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference">MssqlServerTransparentDataEncryptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabledInput">autoRotationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverIdInput">serverIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabled">autoRotationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverId">serverId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeouts"></a>

```java
public MssqlServerTransparentDataEncryptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference">MssqlServerTransparentDataEncryptionTimeoutsOutputReference</a>

---

##### `autoRotationEnabledInput`<sup>Optional</sup> <a name="autoRotationEnabledInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabledInput"></a>

```java
public java.lang.Object getAutoRotationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyIdInput"></a>

```java
public java.lang.String getKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverIdInput"></a>

```java
public java.lang.String getServerIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>

---

##### `autoRotationEnabled`<sup>Required</sup> <a name="autoRotationEnabled" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabled"></a>

```java
public java.lang.Object getAutoRotationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlServerTransparentDataEncryptionConfig <a name="MssqlServerTransparentDataEncryptionConfig" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_server_transparent_data_encryption.MssqlServerTransparentDataEncryptionConfig;

MssqlServerTransparentDataEncryptionConfig.builder()
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
    .serverId(java.lang.String)
//  .autoRotationEnabled(java.lang.Boolean)
//  .autoRotationEnabled(IResolvable)
//  .id(java.lang.String)
//  .keyVaultKeyId(java.lang.String)
//  .timeouts(MssqlServerTransparentDataEncryptionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.serverId">serverId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#server_id MssqlServerTransparentDataEncryption#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.autoRotationEnabled">autoRotationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#auto_rotation_enabled MssqlServerTransparentDataEncryption#auto_rotation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#id MssqlServerTransparentDataEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#key_vault_key_id MssqlServerTransparentDataEncryption#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#server_id MssqlServerTransparentDataEncryption#server_id}.

---

##### `autoRotationEnabled`<sup>Optional</sup> <a name="autoRotationEnabled" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.autoRotationEnabled"></a>

```java
public java.lang.Object getAutoRotationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#auto_rotation_enabled MssqlServerTransparentDataEncryption#auto_rotation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#id MssqlServerTransparentDataEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#key_vault_key_id MssqlServerTransparentDataEncryption#key_vault_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.timeouts"></a>

```java
public MssqlServerTransparentDataEncryptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#timeouts MssqlServerTransparentDataEncryption#timeouts}

---

### MssqlServerTransparentDataEncryptionTimeouts <a name="MssqlServerTransparentDataEncryptionTimeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_server_transparent_data_encryption.MssqlServerTransparentDataEncryptionTimeouts;

MssqlServerTransparentDataEncryptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#create MssqlServerTransparentDataEncryption#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#delete MssqlServerTransparentDataEncryption#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#read MssqlServerTransparentDataEncryption#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#update MssqlServerTransparentDataEncryption#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#create MssqlServerTransparentDataEncryption#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#delete MssqlServerTransparentDataEncryption#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#read MssqlServerTransparentDataEncryption#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mssql_server_transparent_data_encryption#update MssqlServerTransparentDataEncryption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlServerTransparentDataEncryptionTimeoutsOutputReference <a name="MssqlServerTransparentDataEncryptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_server_transparent_data_encryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference;

new MssqlServerTransparentDataEncryptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>

---



