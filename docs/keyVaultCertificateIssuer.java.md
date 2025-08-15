# `keyVaultCertificateIssuer` Submodule <a name="`keyVaultCertificateIssuer` Submodule" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultCertificateIssuer <a name="KeyVaultCertificateIssuer" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer azurerm_key_vault_certificate_issuer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_certificate_issuer.KeyVaultCertificateIssuer;

KeyVaultCertificateIssuer.Builder.create(Construct scope, java.lang.String id)
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
    .keyVaultId(java.lang.String)
    .name(java.lang.String)
    .providerName(java.lang.String)
//  .accountId(java.lang.String)
//  .admin(IResolvable)
//  .admin(java.util.List<KeyVaultCertificateIssuerAdmin>)
//  .id(java.lang.String)
//  .orgId(java.lang.String)
//  .password(java.lang.String)
//  .timeouts(KeyVaultCertificateIssuerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#key_vault_id KeyVaultCertificateIssuer#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#name KeyVaultCertificateIssuer#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#provider_name KeyVaultCertificateIssuer#provider_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#account_id KeyVaultCertificateIssuer#account_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.admin">admin</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>></code> | admin block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#id KeyVaultCertificateIssuer#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#org_id KeyVaultCertificateIssuer#org_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#password KeyVaultCertificateIssuer#password}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.keyVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#key_vault_id KeyVaultCertificateIssuer#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#name KeyVaultCertificateIssuer#name}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.providerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#provider_name KeyVaultCertificateIssuer#provider_name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#account_id KeyVaultCertificateIssuer#account_id}.

---

##### `admin`<sup>Optional</sup> <a name="admin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.admin"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>>

admin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#admin KeyVaultCertificateIssuer#admin}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#id KeyVaultCertificateIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#org_id KeyVaultCertificateIssuer#org_id}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#password KeyVaultCertificateIssuer#password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#timeouts KeyVaultCertificateIssuer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putAdmin">putAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetAdmin">resetAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetOrgId">resetOrgId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdmin` <a name="putAdmin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putAdmin"></a>

```java
public void putAdmin(IResolvable OR java.util.List<KeyVaultCertificateIssuerAdmin> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putAdmin.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putTimeouts"></a>

```java
public void putTimeouts(KeyVaultCertificateIssuerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAdmin` <a name="resetAdmin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetAdmin"></a>

```java
public void resetAdmin()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetId"></a>

```java
public void resetId()
```

##### `resetOrgId` <a name="resetOrgId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetOrgId"></a>

```java
public void resetOrgId()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultCertificateIssuer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_certificate_issuer.KeyVaultCertificateIssuer;

KeyVaultCertificateIssuer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_certificate_issuer.KeyVaultCertificateIssuer;

KeyVaultCertificateIssuer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_certificate_issuer.KeyVaultCertificateIssuer;

KeyVaultCertificateIssuer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_certificate_issuer.KeyVaultCertificateIssuer;

KeyVaultCertificateIssuer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KeyVaultCertificateIssuer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KeyVaultCertificateIssuer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KeyVaultCertificateIssuer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KeyVaultCertificateIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultCertificateIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.admin">admin</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList">KeyVaultCertificateIssuerAdminList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference">KeyVaultCertificateIssuerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.adminInput">adminInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.admin"></a>

```java
public KeyVaultCertificateIssuerAdminList getAdmin();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList">KeyVaultCertificateIssuerAdminList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.timeouts"></a>

```java
public KeyVaultCertificateIssuerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference">KeyVaultCertificateIssuerTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `adminInput`<sup>Optional</sup> <a name="adminInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.adminInput"></a>

```java
public java.lang.Object getAdminInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultCertificateIssuerAdmin <a name="KeyVaultCertificateIssuerAdmin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_certificate_issuer.KeyVaultCertificateIssuerAdmin;

KeyVaultCertificateIssuerAdmin.builder()
    .emailAddress(java.lang.String)
//  .firstName(java.lang.String)
//  .lastName(java.lang.String)
//  .phone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#email_address KeyVaultCertificateIssuer#email_address}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#first_name KeyVaultCertificateIssuer#first_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#last_name KeyVaultCertificateIssuer#last_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.phone">phone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#phone KeyVaultCertificateIssuer#phone}. |

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#email_address KeyVaultCertificateIssuer#email_address}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#first_name KeyVaultCertificateIssuer#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#last_name KeyVaultCertificateIssuer#last_name}.

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.phone"></a>

```java
public java.lang.String getPhone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#phone KeyVaultCertificateIssuer#phone}.

---

### KeyVaultCertificateIssuerConfig <a name="KeyVaultCertificateIssuerConfig" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_certificate_issuer.KeyVaultCertificateIssuerConfig;

KeyVaultCertificateIssuerConfig.builder()
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
    .keyVaultId(java.lang.String)
    .name(java.lang.String)
    .providerName(java.lang.String)
//  .accountId(java.lang.String)
//  .admin(IResolvable)
//  .admin(java.util.List<KeyVaultCertificateIssuerAdmin>)
//  .id(java.lang.String)
//  .orgId(java.lang.String)
//  .password(java.lang.String)
//  .timeouts(KeyVaultCertificateIssuerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#key_vault_id KeyVaultCertificateIssuer#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#name KeyVaultCertificateIssuer#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#provider_name KeyVaultCertificateIssuer#provider_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#account_id KeyVaultCertificateIssuer#account_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.admin">admin</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>></code> | admin block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#id KeyVaultCertificateIssuer#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#org_id KeyVaultCertificateIssuer#org_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#password KeyVaultCertificateIssuer#password}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#key_vault_id KeyVaultCertificateIssuer#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#name KeyVaultCertificateIssuer#name}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#provider_name KeyVaultCertificateIssuer#provider_name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#account_id KeyVaultCertificateIssuer#account_id}.

---

##### `admin`<sup>Optional</sup> <a name="admin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.admin"></a>

```java
public java.lang.Object getAdmin();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>>

admin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#admin KeyVaultCertificateIssuer#admin}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#id KeyVaultCertificateIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#org_id KeyVaultCertificateIssuer#org_id}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#password KeyVaultCertificateIssuer#password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.timeouts"></a>

```java
public KeyVaultCertificateIssuerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#timeouts KeyVaultCertificateIssuer#timeouts}

---

### KeyVaultCertificateIssuerTimeouts <a name="KeyVaultCertificateIssuerTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_certificate_issuer.KeyVaultCertificateIssuerTimeouts;

KeyVaultCertificateIssuerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#create KeyVaultCertificateIssuer#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#delete KeyVaultCertificateIssuer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#read KeyVaultCertificateIssuer#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#update KeyVaultCertificateIssuer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#create KeyVaultCertificateIssuer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#delete KeyVaultCertificateIssuer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#read KeyVaultCertificateIssuer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/key_vault_certificate_issuer#update KeyVaultCertificateIssuer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultCertificateIssuerAdminList <a name="KeyVaultCertificateIssuerAdminList" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_certificate_issuer.KeyVaultCertificateIssuerAdminList;

new KeyVaultCertificateIssuerAdminList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.get"></a>

```java
public KeyVaultCertificateIssuerAdminOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>>

---


### KeyVaultCertificateIssuerAdminOutputReference <a name="KeyVaultCertificateIssuerAdminOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_certificate_issuer.KeyVaultCertificateIssuerAdminOutputReference;

new KeyVaultCertificateIssuerAdminOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetPhone">resetPhone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetPhone` <a name="resetPhone" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetPhone"></a>

```java
public void resetPhone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.phoneInput">phoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.phone">phone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.emailAddressInput"></a>

```java
public java.lang.String getEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `phoneInput`<sup>Optional</sup> <a name="phoneInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.phoneInput"></a>

```java
public java.lang.String getPhoneInput();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.phone"></a>

```java
public java.lang.String getPhone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>

---


### KeyVaultCertificateIssuerTimeoutsOutputReference <a name="KeyVaultCertificateIssuerTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_certificate_issuer.KeyVaultCertificateIssuerTimeoutsOutputReference;

new KeyVaultCertificateIssuerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a>

---



