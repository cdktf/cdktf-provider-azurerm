# `azurerm_mssql_managed_instance_transparent_data_encryption`

Refer to the Terraform Registory for docs: [`azurerm_mssql_managed_instance_transparent_data_encryption`](https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption).

# `mssqlManagedInstanceTransparentDataEncryption` Submodule <a name="`mssqlManagedInstanceTransparentDataEncryption` Submodule" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstanceTransparentDataEncryption <a name="MssqlManagedInstanceTransparentDataEncryption" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption azurerm_mssql_managed_instance_transparent_data_encryption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_transparent_data_encryption.MssqlManagedInstanceTransparentDataEncryption;

MssqlManagedInstanceTransparentDataEncryption.Builder.create(Construct scope, java.lang.String id)
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
    .managedInstanceId(java.lang.String)
//  .autoRotationEnabled(java.lang.Boolean)
//  .autoRotationEnabled(IResolvable)
//  .id(java.lang.String)
//  .keyVaultKeyId(java.lang.String)
//  .timeouts(MssqlManagedInstanceTransparentDataEncryptionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#managed_instance_id MssqlManagedInstanceTransparentDataEncryption#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.autoRotationEnabled">autoRotationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#auto_rotation_enabled MssqlManagedInstanceTransparentDataEncryption#auto_rotation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#id MssqlManagedInstanceTransparentDataEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#key_vault_key_id MssqlManagedInstanceTransparentDataEncryption#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts">MssqlManagedInstanceTransparentDataEncryptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.managedInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#managed_instance_id MssqlManagedInstanceTransparentDataEncryption#managed_instance_id}.

---

##### `autoRotationEnabled`<sup>Optional</sup> <a name="autoRotationEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.autoRotationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#auto_rotation_enabled MssqlManagedInstanceTransparentDataEncryption#auto_rotation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#id MssqlManagedInstanceTransparentDataEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.keyVaultKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#key_vault_key_id MssqlManagedInstanceTransparentDataEncryption#key_vault_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts">MssqlManagedInstanceTransparentDataEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#timeouts MssqlManagedInstanceTransparentDataEncryption#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetAutoRotationEnabled">resetAutoRotationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.putTimeouts"></a>

```java
public void putTimeouts(MssqlManagedInstanceTransparentDataEncryptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts">MssqlManagedInstanceTransparentDataEncryptionTimeouts</a>

---

##### `resetAutoRotationEnabled` <a name="resetAutoRotationEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetAutoRotationEnabled"></a>

```java
public void resetAutoRotationEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetId"></a>

```java
public void resetId()
```

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetKeyVaultKeyId"></a>

```java
public void resetKeyVaultKeyId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlManagedInstanceTransparentDataEncryption resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_transparent_data_encryption.MssqlManagedInstanceTransparentDataEncryption;

MssqlManagedInstanceTransparentDataEncryption.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_transparent_data_encryption.MssqlManagedInstanceTransparentDataEncryption;

MssqlManagedInstanceTransparentDataEncryption.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_transparent_data_encryption.MssqlManagedInstanceTransparentDataEncryption;

MssqlManagedInstanceTransparentDataEncryption.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_transparent_data_encryption.MssqlManagedInstanceTransparentDataEncryption;

MssqlManagedInstanceTransparentDataEncryption.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MssqlManagedInstanceTransparentDataEncryption.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MssqlManagedInstanceTransparentDataEncryption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MssqlManagedInstanceTransparentDataEncryption to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MssqlManagedInstanceTransparentDataEncryption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MssqlManagedInstanceTransparentDataEncryption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference">MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.autoRotationEnabledInput">autoRotationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts">MssqlManagedInstanceTransparentDataEncryptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.autoRotationEnabled">autoRotationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.timeouts"></a>

```java
public MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference">MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference</a>

---

##### `autoRotationEnabledInput`<sup>Optional</sup> <a name="autoRotationEnabledInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.autoRotationEnabledInput"></a>

```java
public java.lang.Object getAutoRotationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.keyVaultKeyIdInput"></a>

```java
public java.lang.String getKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.managedInstanceIdInput"></a>

```java
public java.lang.String getManagedInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts">MssqlManagedInstanceTransparentDataEncryptionTimeouts</a>

---

##### `autoRotationEnabled`<sup>Required</sup> <a name="autoRotationEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.autoRotationEnabled"></a>

```java
public java.lang.Object getAutoRotationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryption.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceTransparentDataEncryptionConfig <a name="MssqlManagedInstanceTransparentDataEncryptionConfig" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_transparent_data_encryption.MssqlManagedInstanceTransparentDataEncryptionConfig;

MssqlManagedInstanceTransparentDataEncryptionConfig.builder()
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
    .managedInstanceId(java.lang.String)
//  .autoRotationEnabled(java.lang.Boolean)
//  .autoRotationEnabled(IResolvable)
//  .id(java.lang.String)
//  .keyVaultKeyId(java.lang.String)
//  .timeouts(MssqlManagedInstanceTransparentDataEncryptionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#managed_instance_id MssqlManagedInstanceTransparentDataEncryption#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.autoRotationEnabled">autoRotationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#auto_rotation_enabled MssqlManagedInstanceTransparentDataEncryption#auto_rotation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#id MssqlManagedInstanceTransparentDataEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#key_vault_key_id MssqlManagedInstanceTransparentDataEncryption#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts">MssqlManagedInstanceTransparentDataEncryptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#managed_instance_id MssqlManagedInstanceTransparentDataEncryption#managed_instance_id}.

---

##### `autoRotationEnabled`<sup>Optional</sup> <a name="autoRotationEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.autoRotationEnabled"></a>

```java
public java.lang.Object getAutoRotationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#auto_rotation_enabled MssqlManagedInstanceTransparentDataEncryption#auto_rotation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#id MssqlManagedInstanceTransparentDataEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#key_vault_key_id MssqlManagedInstanceTransparentDataEncryption#key_vault_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionConfig.property.timeouts"></a>

```java
public MssqlManagedInstanceTransparentDataEncryptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts">MssqlManagedInstanceTransparentDataEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#timeouts MssqlManagedInstanceTransparentDataEncryption#timeouts}

---

### MssqlManagedInstanceTransparentDataEncryptionTimeouts <a name="MssqlManagedInstanceTransparentDataEncryptionTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_transparent_data_encryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts;

MssqlManagedInstanceTransparentDataEncryptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#create MssqlManagedInstanceTransparentDataEncryption#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#delete MssqlManagedInstanceTransparentDataEncryption#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#read MssqlManagedInstanceTransparentDataEncryption#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#update MssqlManagedInstanceTransparentDataEncryption#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#create MssqlManagedInstanceTransparentDataEncryption#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#delete MssqlManagedInstanceTransparentDataEncryption#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#read MssqlManagedInstanceTransparentDataEncryption#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/mssql_managed_instance_transparent_data_encryption#update MssqlManagedInstanceTransparentDataEncryption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference <a name="MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_transparent_data_encryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference;

new MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts">MssqlManagedInstanceTransparentDataEncryptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceTransparentDataEncryption.MssqlManagedInstanceTransparentDataEncryptionTimeouts">MssqlManagedInstanceTransparentDataEncryptionTimeouts</a>

---



