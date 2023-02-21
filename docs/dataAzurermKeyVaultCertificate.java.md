# `dataAzurermKeyVaultCertificate` Submodule <a name="`dataAzurermKeyVaultCertificate` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultCertificate <a name="DataAzurermKeyVaultCertificate" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate azurerm_key_vault_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificate;

DataAzurermKeyVaultCertificate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .keyVaultId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermKeyVaultCertificateTimeouts)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#key_vault_id DataAzurermKeyVaultCertificate#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#name DataAzurermKeyVaultCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#id DataAzurermKeyVaultCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#version DataAzurermKeyVaultCertificate#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.keyVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#key_vault_id DataAzurermKeyVaultCertificate#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#name DataAzurermKeyVaultCertificate#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#id DataAzurermKeyVaultCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#timeouts DataAzurermKeyVaultCertificate#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#version DataAzurermKeyVaultCertificate#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermKeyVaultCertificateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificate;

DataAzurermKeyVaultCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificate;

DataAzurermKeyVaultCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificate;

DataAzurermKeyVaultCertificate.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificateData">certificateData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificateDataBase64">certificateDataBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificatePolicy">certificatePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList">DataAzurermKeyVaultCertificateCertificatePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.expires">expires</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.notBefore">notBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference">DataAzurermKeyVaultCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionlessId">versionlessId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionlessSecretId">versionlessSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `certificateData`<sup>Required</sup> <a name="certificateData" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificateData"></a>

```java
public java.lang.String getCertificateData();
```

- *Type:* java.lang.String

---

##### `certificateDataBase64`<sup>Required</sup> <a name="certificateDataBase64" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificateDataBase64"></a>

```java
public java.lang.String getCertificateDataBase64();
```

- *Type:* java.lang.String

---

##### `certificatePolicy`<sup>Required</sup> <a name="certificatePolicy" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificatePolicy"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyList getCertificatePolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList">DataAzurermKeyVaultCertificateCertificatePolicyList</a>

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.expires"></a>

```java
public java.lang.String getExpires();
```

- *Type:* java.lang.String

---

##### `notBefore`<sup>Required</sup> <a name="notBefore" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.notBefore"></a>

```java
public java.lang.String getNotBefore();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.timeouts"></a>

```java
public DataAzurermKeyVaultCertificateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference">DataAzurermKeyVaultCertificateTimeoutsOutputReference</a>

---

##### `versionlessId`<sup>Required</sup> <a name="versionlessId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionlessId"></a>

```java
public java.lang.String getVersionlessId();
```

- *Type:* java.lang.String

---

##### `versionlessSecretId`<sup>Required</sup> <a name="versionlessSecretId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionlessSecretId"></a>

```java
public java.lang.String getVersionlessSecretId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultCertificateCertificatePolicy <a name="DataAzurermKeyVaultCertificateCertificatePolicy" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicy;

DataAzurermKeyVaultCertificateCertificatePolicy.builder()
    .build();
```


### DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters <a name="DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters;

DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters.builder()
    .build();
```


### DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties <a name="DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties;

DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties.builder()
    .build();
```


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction;

DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction.builder()
    .build();
```


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction;

DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction.builder()
    .build();
```


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger;

DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger.builder()
    .build();
```


### DataAzurermKeyVaultCertificateCertificatePolicySecretProperties <a name="DataAzurermKeyVaultCertificateCertificatePolicySecretProperties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicySecretProperties;

DataAzurermKeyVaultCertificateCertificatePolicySecretProperties.builder()
    .build();
```


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties;

DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties.builder()
    .build();
```


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames;

DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.builder()
    .build();
```


### DataAzurermKeyVaultCertificateConfig <a name="DataAzurermKeyVaultCertificateConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateConfig;

DataAzurermKeyVaultCertificateConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .keyVaultId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermKeyVaultCertificateTimeouts)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#key_vault_id DataAzurermKeyVaultCertificate#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#name DataAzurermKeyVaultCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#id DataAzurermKeyVaultCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#version DataAzurermKeyVaultCertificate#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#key_vault_id DataAzurermKeyVaultCertificate#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#name DataAzurermKeyVaultCertificate#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#id DataAzurermKeyVaultCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.timeouts"></a>

```java
public DataAzurermKeyVaultCertificateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#timeouts DataAzurermKeyVaultCertificate#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#version DataAzurermKeyVaultCertificate#version}.

---

### DataAzurermKeyVaultCertificateTimeouts <a name="DataAzurermKeyVaultCertificateTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateTimeouts;

DataAzurermKeyVaultCertificateTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#read DataAzurermKeyVaultCertificate#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate#read DataAzurermKeyVaultCertificate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList <a name="DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList;

new DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.get"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference;

new DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters">DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.internalValue"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters">DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList <a name="DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList;

new DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.get"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference;

new DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curve">curve</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportable">exportable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySize">keySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKey">reuseKey</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties">DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `curve`<sup>Required</sup> <a name="curve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curve"></a>

```java
public java.lang.String getCurve();
```

- *Type:* java.lang.String

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportable"></a>

```java
public IResolvable getExportable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySize"></a>

```java
public java.lang.Number getKeySize();
```

- *Type:* java.lang.Number

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `reuseKey`<sup>Required</sup> <a name="reuseKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKey"></a>

```java
public IResolvable getReuseKey();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.internalValue"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties">DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList;

new DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.get"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference;

new DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.internalValue"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList;

new DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.get"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference;

new DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.action"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList getAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.trigger"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList getTrigger();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.internalValue"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList;

new DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.get"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference;

new DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiry">daysBeforeExpiry</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentage">lifetimePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysBeforeExpiry`<sup>Required</sup> <a name="daysBeforeExpiry" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiry"></a>

```java
public java.lang.Number getDaysBeforeExpiry();
```

- *Type:* java.lang.Number

---

##### `lifetimePercentage`<sup>Required</sup> <a name="lifetimePercentage" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentage"></a>

```java
public java.lang.Number getLifetimePercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.internalValue"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyList <a name="DataAzurermKeyVaultCertificateCertificatePolicyList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyList;

new DataAzurermKeyVaultCertificateCertificatePolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.get"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKeyVaultCertificateCertificatePolicyOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference;

new DataAzurermKeyVaultCertificateCertificatePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.issuerParameters">issuerParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList">DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.keyProperties">keyProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList">DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeAction">lifetimeAction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.secretProperties">secretProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList">DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificateProperties">x509CertificateProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicy">DataAzurermKeyVaultCertificateCertificatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `issuerParameters`<sup>Required</sup> <a name="issuerParameters" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.issuerParameters"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList getIssuerParameters();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList">DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList</a>

---

##### `keyProperties`<sup>Required</sup> <a name="keyProperties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.keyProperties"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList getKeyProperties();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList">DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList</a>

---

##### `lifetimeAction`<sup>Required</sup> <a name="lifetimeAction" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeAction"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList getLifetimeAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList</a>

---

##### `secretProperties`<sup>Required</sup> <a name="secretProperties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.secretProperties"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList getSecretProperties();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList">DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList</a>

---

##### `x509CertificateProperties`<sup>Required</sup> <a name="x509CertificateProperties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificateProperties"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList getX509CertificateProperties();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.internalValue"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicy">DataAzurermKeyVaultCertificateCertificatePolicy</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList <a name="DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList;

new DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.get"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference;

new DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretProperties">DataAzurermKeyVaultCertificateCertificatePolicySecretProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.internalValue"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicySecretProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretProperties">DataAzurermKeyVaultCertificateCertificatePolicySecretProperties</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList;

new DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.get"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference;

new DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsage">extendedKeyUsage</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsage">keyUsage</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonths">validityInMonths</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extendedKeyUsage`<sup>Required</sup> <a name="extendedKeyUsage" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsage"></a>

```java
public java.util.List<java.lang.String> getExtendedKeyUsage();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsage"></a>

```java
public java.util.List<java.lang.String> getKeyUsage();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNames"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList getSubjectAlternativeNames();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList</a>

---

##### `validityInMonths`<sup>Required</sup> <a name="validityInMonths" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonths"></a>

```java
public java.lang.Number getValidityInMonths();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.internalValue"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList;

new DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.get"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference;

new DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNames">dnsNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emails">emails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upns">upns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsNames`<sup>Required</sup> <a name="dnsNames" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNames"></a>

```java
public java.util.List<java.lang.String> getDnsNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emails"></a>

```java
public java.util.List<java.lang.String> getEmails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `upns`<sup>Required</sup> <a name="upns" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upns"></a>

```java
public java.util.List<java.lang.String> getUpns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```java
public DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a>

---


### DataAzurermKeyVaultCertificateTimeoutsOutputReference <a name="DataAzurermKeyVaultCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_key_vault_certificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference;

new DataAzurermKeyVaultCertificateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



