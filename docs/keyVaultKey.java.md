# `azurerm_key_vault_key`

Refer to the Terraform Registory for docs: [`azurerm_key_vault_key`](https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key).

# `keyVaultKey` Submodule <a name="`keyVaultKey` Submodule" id="@cdktf/provider-azurerm.keyVaultKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultKey <a name="KeyVaultKey" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key azurerm_key_vault_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_key.KeyVaultKey;

KeyVaultKey.Builder.create(Construct scope, java.lang.String id)
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
    .keyOpts(java.util.List<java.lang.String>)
    .keyType(java.lang.String)
    .keyVaultId(java.lang.String)
    .name(java.lang.String)
//  .curve(java.lang.String)
//  .expirationDate(java.lang.String)
//  .id(java.lang.String)
//  .keySize(java.lang.Number)
//  .notBeforeDate(java.lang.String)
//  .rotationPolicy(KeyVaultKeyRotationPolicy)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KeyVaultKeyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.keyOpts">keyOpts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_opts KeyVaultKey#key_opts}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.keyType">keyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_type KeyVaultKey#key_type}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_vault_id KeyVaultKey#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#name KeyVaultKey#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.curve">curve</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#curve KeyVaultKey#curve}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#expiration_date KeyVaultKey#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#id KeyVaultKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.keySize">keySize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_size KeyVaultKey#key_size}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.notBeforeDate">notBeforeDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#not_before_date KeyVaultKey#not_before_date}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.rotationPolicy">rotationPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a></code> | rotation_policy block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#tags KeyVaultKey#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyOpts`<sup>Required</sup> <a name="keyOpts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.keyOpts"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_opts KeyVaultKey#key_opts}.

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.keyType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_type KeyVaultKey#key_type}.

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.keyVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_vault_id KeyVaultKey#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#name KeyVaultKey#name}.

---

##### `curve`<sup>Optional</sup> <a name="curve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.curve"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#curve KeyVaultKey#curve}.

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.expirationDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#expiration_date KeyVaultKey#expiration_date}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#id KeyVaultKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.keySize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_size KeyVaultKey#key_size}.

---

##### `notBeforeDate`<sup>Optional</sup> <a name="notBeforeDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.notBeforeDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#not_before_date KeyVaultKey#not_before_date}.

---

##### `rotationPolicy`<sup>Optional</sup> <a name="rotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.rotationPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

rotation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#rotation_policy KeyVaultKey#rotation_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#tags KeyVaultKey#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#timeouts KeyVaultKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putRotationPolicy">putRotationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetCurve">resetCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetExpirationDate">resetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetNotBeforeDate">resetNotBeforeDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetRotationPolicy">resetRotationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRotationPolicy` <a name="putRotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putRotationPolicy"></a>

```java
public void putRotationPolicy(KeyVaultKeyRotationPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putRotationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putTimeouts"></a>

```java
public void putTimeouts(KeyVaultKeyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a>

---

##### `resetCurve` <a name="resetCurve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetCurve"></a>

```java
public void resetCurve()
```

##### `resetExpirationDate` <a name="resetExpirationDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetExpirationDate"></a>

```java
public void resetExpirationDate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetId"></a>

```java
public void resetId()
```

##### `resetKeySize` <a name="resetKeySize" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetKeySize"></a>

```java
public void resetKeySize()
```

##### `resetNotBeforeDate` <a name="resetNotBeforeDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetNotBeforeDate"></a>

```java
public void resetNotBeforeDate()
```

##### `resetRotationPolicy` <a name="resetRotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetRotationPolicy"></a>

```java
public void resetRotationPolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_key.KeyVaultKey;

KeyVaultKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_key.KeyVaultKey;

KeyVaultKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_key.KeyVaultKey;

KeyVaultKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.e">e</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.n">n</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyOpenssh">publicKeyOpenssh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyPem">publicKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceVersionlessId">resourceVersionlessId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicy">rotationPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference">KeyVaultKeyRotationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference">KeyVaultKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.versionlessId">versionlessId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.x">x</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.y">y</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curveInput">curveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDateInput">expirationDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOptsInput">keyOptsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySizeInput">keySizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDateInput">notBeforeDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicyInput">rotationPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curve">curve</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOpts">keyOpts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySize">keySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDate">notBeforeDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.e"></a>

```java
public java.lang.String getE();
```

- *Type:* java.lang.String

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.n"></a>

```java
public java.lang.String getN();
```

- *Type:* java.lang.String

---

##### `publicKeyOpenssh`<sup>Required</sup> <a name="publicKeyOpenssh" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyOpenssh"></a>

```java
public java.lang.String getPublicKeyOpenssh();
```

- *Type:* java.lang.String

---

##### `publicKeyPem`<sup>Required</sup> <a name="publicKeyPem" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyPem"></a>

```java
public java.lang.String getPublicKeyPem();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceVersionlessId`<sup>Required</sup> <a name="resourceVersionlessId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceVersionlessId"></a>

```java
public java.lang.String getResourceVersionlessId();
```

- *Type:* java.lang.String

---

##### `rotationPolicy`<sup>Required</sup> <a name="rotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicy"></a>

```java
public KeyVaultKeyRotationPolicyOutputReference getRotationPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference">KeyVaultKeyRotationPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeouts"></a>

```java
public KeyVaultKeyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference">KeyVaultKeyTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `versionlessId`<sup>Required</sup> <a name="versionlessId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.versionlessId"></a>

```java
public java.lang.String getVersionlessId();
```

- *Type:* java.lang.String

---

##### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.x"></a>

```java
public java.lang.String getX();
```

- *Type:* java.lang.String

---

##### `y`<sup>Required</sup> <a name="y" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.y"></a>

```java
public java.lang.String getY();
```

- *Type:* java.lang.String

---

##### `curveInput`<sup>Optional</sup> <a name="curveInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curveInput"></a>

```java
public java.lang.String getCurveInput();
```

- *Type:* java.lang.String

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDateInput"></a>

```java
public java.lang.String getExpirationDateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyOptsInput`<sup>Optional</sup> <a name="keyOptsInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOptsInput"></a>

```java
public java.util.List<java.lang.String> getKeyOptsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySizeInput"></a>

```java
public java.lang.Number getKeySizeInput();
```

- *Type:* java.lang.Number

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notBeforeDateInput`<sup>Optional</sup> <a name="notBeforeDateInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDateInput"></a>

```java
public java.lang.String getNotBeforeDateInput();
```

- *Type:* java.lang.String

---

##### `rotationPolicyInput`<sup>Optional</sup> <a name="rotationPolicyInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicyInput"></a>

```java
public KeyVaultKeyRotationPolicy getRotationPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a>

---

##### `curve`<sup>Required</sup> <a name="curve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curve"></a>

```java
public java.lang.String getCurve();
```

- *Type:* java.lang.String

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyOpts`<sup>Required</sup> <a name="keyOpts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOpts"></a>

```java
public java.util.List<java.lang.String> getKeyOpts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySize"></a>

```java
public java.lang.Number getKeySize();
```

- *Type:* java.lang.Number

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notBeforeDate`<sup>Required</sup> <a name="notBeforeDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDate"></a>

```java
public java.lang.String getNotBeforeDate();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultKeyConfig <a name="KeyVaultKeyConfig" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_key.KeyVaultKeyConfig;

KeyVaultKeyConfig.builder()
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
    .keyOpts(java.util.List<java.lang.String>)
    .keyType(java.lang.String)
    .keyVaultId(java.lang.String)
    .name(java.lang.String)
//  .curve(java.lang.String)
//  .expirationDate(java.lang.String)
//  .id(java.lang.String)
//  .keySize(java.lang.Number)
//  .notBeforeDate(java.lang.String)
//  .rotationPolicy(KeyVaultKeyRotationPolicy)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KeyVaultKeyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyOpts">keyOpts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_opts KeyVaultKey#key_opts}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyType">keyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_type KeyVaultKey#key_type}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_vault_id KeyVaultKey#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#name KeyVaultKey#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.curve">curve</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#curve KeyVaultKey#curve}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#expiration_date KeyVaultKey#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#id KeyVaultKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keySize">keySize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_size KeyVaultKey#key_size}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.notBeforeDate">notBeforeDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#not_before_date KeyVaultKey#not_before_date}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.rotationPolicy">rotationPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a></code> | rotation_policy block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#tags KeyVaultKey#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyOpts`<sup>Required</sup> <a name="keyOpts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyOpts"></a>

```java
public java.util.List<java.lang.String> getKeyOpts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_opts KeyVaultKey#key_opts}.

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_type KeyVaultKey#key_type}.

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_vault_id KeyVaultKey#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#name KeyVaultKey#name}.

---

##### `curve`<sup>Optional</sup> <a name="curve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.curve"></a>

```java
public java.lang.String getCurve();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#curve KeyVaultKey#curve}.

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#expiration_date KeyVaultKey#expiration_date}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#id KeyVaultKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keySize"></a>

```java
public java.lang.Number getKeySize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#key_size KeyVaultKey#key_size}.

---

##### `notBeforeDate`<sup>Optional</sup> <a name="notBeforeDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.notBeforeDate"></a>

```java
public java.lang.String getNotBeforeDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#not_before_date KeyVaultKey#not_before_date}.

---

##### `rotationPolicy`<sup>Optional</sup> <a name="rotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.rotationPolicy"></a>

```java
public KeyVaultKeyRotationPolicy getRotationPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

rotation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#rotation_policy KeyVaultKey#rotation_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#tags KeyVaultKey#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.timeouts"></a>

```java
public KeyVaultKeyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#timeouts KeyVaultKey#timeouts}

---

### KeyVaultKeyRotationPolicy <a name="KeyVaultKeyRotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_key.KeyVaultKeyRotationPolicy;

KeyVaultKeyRotationPolicy.builder()
//  .automatic(KeyVaultKeyRotationPolicyAutomatic)
//  .expireAfter(java.lang.String)
//  .notifyBeforeExpiry(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.automatic">automatic</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a></code> | automatic block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.expireAfter">expireAfter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#expire_after KeyVaultKey#expire_after}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.notifyBeforeExpiry">notifyBeforeExpiry</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#notify_before_expiry KeyVaultKey#notify_before_expiry}. |

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.automatic"></a>

```java
public KeyVaultKeyRotationPolicyAutomatic getAutomatic();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#automatic KeyVaultKey#automatic}

---

##### `expireAfter`<sup>Optional</sup> <a name="expireAfter" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.expireAfter"></a>

```java
public java.lang.String getExpireAfter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#expire_after KeyVaultKey#expire_after}.

---

##### `notifyBeforeExpiry`<sup>Optional</sup> <a name="notifyBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.notifyBeforeExpiry"></a>

```java
public java.lang.String getNotifyBeforeExpiry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#notify_before_expiry KeyVaultKey#notify_before_expiry}.

---

### KeyVaultKeyRotationPolicyAutomatic <a name="KeyVaultKeyRotationPolicyAutomatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_key.KeyVaultKeyRotationPolicyAutomatic;

KeyVaultKeyRotationPolicyAutomatic.builder()
//  .timeAfterCreation(java.lang.String)
//  .timeBeforeExpiry(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeAfterCreation">timeAfterCreation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#time_after_creation KeyVaultKey#time_after_creation}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeBeforeExpiry">timeBeforeExpiry</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#time_before_expiry KeyVaultKey#time_before_expiry}. |

---

##### `timeAfterCreation`<sup>Optional</sup> <a name="timeAfterCreation" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeAfterCreation"></a>

```java
public java.lang.String getTimeAfterCreation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#time_after_creation KeyVaultKey#time_after_creation}.

---

##### `timeBeforeExpiry`<sup>Optional</sup> <a name="timeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeBeforeExpiry"></a>

```java
public java.lang.String getTimeBeforeExpiry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#time_before_expiry KeyVaultKey#time_before_expiry}.

---

### KeyVaultKeyTimeouts <a name="KeyVaultKeyTimeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_key.KeyVaultKeyTimeouts;

KeyVaultKeyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#create KeyVaultKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#delete KeyVaultKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#read KeyVaultKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#update KeyVaultKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#create KeyVaultKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#delete KeyVaultKey#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#read KeyVaultKey#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/key_vault_key#update KeyVaultKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultKeyRotationPolicyAutomaticOutputReference <a name="KeyVaultKeyRotationPolicyAutomaticOutputReference" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_key.KeyVaultKeyRotationPolicyAutomaticOutputReference;

new KeyVaultKeyRotationPolicyAutomaticOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resetTimeAfterCreation">resetTimeAfterCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resetTimeBeforeExpiry">resetTimeBeforeExpiry</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeAfterCreation` <a name="resetTimeAfterCreation" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resetTimeAfterCreation"></a>

```java
public void resetTimeAfterCreation()
```

##### `resetTimeBeforeExpiry` <a name="resetTimeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resetTimeBeforeExpiry"></a>

```java
public void resetTimeBeforeExpiry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreationInput">timeAfterCreationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiryInput">timeBeforeExpiryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreation">timeAfterCreation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiry">timeBeforeExpiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeAfterCreationInput`<sup>Optional</sup> <a name="timeAfterCreationInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreationInput"></a>

```java
public java.lang.String getTimeAfterCreationInput();
```

- *Type:* java.lang.String

---

##### `timeBeforeExpiryInput`<sup>Optional</sup> <a name="timeBeforeExpiryInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiryInput"></a>

```java
public java.lang.String getTimeBeforeExpiryInput();
```

- *Type:* java.lang.String

---

##### `timeAfterCreation`<sup>Required</sup> <a name="timeAfterCreation" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreation"></a>

```java
public java.lang.String getTimeAfterCreation();
```

- *Type:* java.lang.String

---

##### `timeBeforeExpiry`<sup>Required</sup> <a name="timeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiry"></a>

```java
public java.lang.String getTimeBeforeExpiry();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.internalValue"></a>

```java
public KeyVaultKeyRotationPolicyAutomatic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

---


### KeyVaultKeyRotationPolicyOutputReference <a name="KeyVaultKeyRotationPolicyOutputReference" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_key.KeyVaultKeyRotationPolicyOutputReference;

new KeyVaultKeyRotationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.putAutomatic">putAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetAutomatic">resetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetExpireAfter">resetExpireAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetNotifyBeforeExpiry">resetNotifyBeforeExpiry</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutomatic` <a name="putAutomatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.putAutomatic"></a>

```java
public void putAutomatic(KeyVaultKeyRotationPolicyAutomatic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.putAutomatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

---

##### `resetAutomatic` <a name="resetAutomatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetAutomatic"></a>

```java
public void resetAutomatic()
```

##### `resetExpireAfter` <a name="resetExpireAfter" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetExpireAfter"></a>

```java
public void resetExpireAfter()
```

##### `resetNotifyBeforeExpiry` <a name="resetNotifyBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetNotifyBeforeExpiry"></a>

```java
public void resetNotifyBeforeExpiry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automatic">automatic</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference">KeyVaultKeyRotationPolicyAutomaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automaticInput">automaticInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfterInput">expireAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiryInput">notifyBeforeExpiryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfter">expireAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiry">notifyBeforeExpiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automatic"></a>

```java
public KeyVaultKeyRotationPolicyAutomaticOutputReference getAutomatic();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference">KeyVaultKeyRotationPolicyAutomaticOutputReference</a>

---

##### `automaticInput`<sup>Optional</sup> <a name="automaticInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automaticInput"></a>

```java
public KeyVaultKeyRotationPolicyAutomatic getAutomaticInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

---

##### `expireAfterInput`<sup>Optional</sup> <a name="expireAfterInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfterInput"></a>

```java
public java.lang.String getExpireAfterInput();
```

- *Type:* java.lang.String

---

##### `notifyBeforeExpiryInput`<sup>Optional</sup> <a name="notifyBeforeExpiryInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiryInput"></a>

```java
public java.lang.String getNotifyBeforeExpiryInput();
```

- *Type:* java.lang.String

---

##### `expireAfter`<sup>Required</sup> <a name="expireAfter" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfter"></a>

```java
public java.lang.String getExpireAfter();
```

- *Type:* java.lang.String

---

##### `notifyBeforeExpiry`<sup>Required</sup> <a name="notifyBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiry"></a>

```java
public java.lang.String getNotifyBeforeExpiry();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.internalValue"></a>

```java
public KeyVaultKeyRotationPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

---


### KeyVaultKeyTimeoutsOutputReference <a name="KeyVaultKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_key.KeyVaultKeyTimeoutsOutputReference;

new KeyVaultKeyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a>

---



