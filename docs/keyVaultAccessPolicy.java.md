# `keyVaultAccessPolicy` Submodule <a name="`keyVaultAccessPolicy` Submodule" id="@cdktf/provider-azurerm.keyVaultAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultAccessPolicyA <a name="KeyVaultAccessPolicyA" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy azurerm_key_vault_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_access_policy.KeyVaultAccessPolicyA;

KeyVaultAccessPolicyA.Builder.create(Construct scope, java.lang.String id)
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
    .objectId(java.lang.String)
    .tenantId(java.lang.String)
//  .applicationId(java.lang.String)
//  .certificatePermissions(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .keyPermissions(java.util.List<java.lang.String>)
//  .secretPermissions(java.util.List<java.lang.String>)
//  .storagePermissions(java.util.List<java.lang.String>)
//  .timeouts(KeyVaultAccessPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#key_vault_id KeyVaultAccessPolicyA#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#object_id KeyVaultAccessPolicyA#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#tenant_id KeyVaultAccessPolicyA#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#application_id KeyVaultAccessPolicyA#application_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.certificatePermissions">certificatePermissions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#certificate_permissions KeyVaultAccessPolicyA#certificate_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#id KeyVaultAccessPolicyA#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.keyPermissions">keyPermissions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#key_permissions KeyVaultAccessPolicyA#key_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.secretPermissions">secretPermissions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#secret_permissions KeyVaultAccessPolicyA#secret_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.storagePermissions">storagePermissions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#storage_permissions KeyVaultAccessPolicyA#storage_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.keyVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#key_vault_id KeyVaultAccessPolicyA#key_vault_id}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#object_id KeyVaultAccessPolicyA#object_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#tenant_id KeyVaultAccessPolicyA#tenant_id}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#application_id KeyVaultAccessPolicyA#application_id}.

---

##### `certificatePermissions`<sup>Optional</sup> <a name="certificatePermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.certificatePermissions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#certificate_permissions KeyVaultAccessPolicyA#certificate_permissions}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#id KeyVaultAccessPolicyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyPermissions`<sup>Optional</sup> <a name="keyPermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.keyPermissions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#key_permissions KeyVaultAccessPolicyA#key_permissions}.

---

##### `secretPermissions`<sup>Optional</sup> <a name="secretPermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.secretPermissions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#secret_permissions KeyVaultAccessPolicyA#secret_permissions}.

---

##### `storagePermissions`<sup>Optional</sup> <a name="storagePermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.storagePermissions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#storage_permissions KeyVaultAccessPolicyA#storage_permissions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#timeouts KeyVaultAccessPolicyA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetCertificatePermissions">resetCertificatePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetKeyPermissions">resetKeyPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetSecretPermissions">resetSecretPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetStoragePermissions">resetStoragePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.putTimeouts"></a>

```java
public void putTimeouts(KeyVaultAccessPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a>

---

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetApplicationId"></a>

```java
public void resetApplicationId()
```

##### `resetCertificatePermissions` <a name="resetCertificatePermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetCertificatePermissions"></a>

```java
public void resetCertificatePermissions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetId"></a>

```java
public void resetId()
```

##### `resetKeyPermissions` <a name="resetKeyPermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetKeyPermissions"></a>

```java
public void resetKeyPermissions()
```

##### `resetSecretPermissions` <a name="resetSecretPermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetSecretPermissions"></a>

```java
public void resetSecretPermissions()
```

##### `resetStoragePermissions` <a name="resetStoragePermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetStoragePermissions"></a>

```java
public void resetStoragePermissions()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultAccessPolicyA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_access_policy.KeyVaultAccessPolicyA;

KeyVaultAccessPolicyA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_access_policy.KeyVaultAccessPolicyA;

KeyVaultAccessPolicyA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_access_policy.KeyVaultAccessPolicyA;

KeyVaultAccessPolicyA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_access_policy.KeyVaultAccessPolicyA;

KeyVaultAccessPolicyA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KeyVaultAccessPolicyA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KeyVaultAccessPolicyA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KeyVaultAccessPolicyA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KeyVaultAccessPolicyA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultAccessPolicyA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference">KeyVaultAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.certificatePermissionsInput">certificatePermissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyPermissionsInput">keyPermissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.secretPermissionsInput">secretPermissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.storagePermissionsInput">storagePermissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.certificatePermissions">certificatePermissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyPermissions">keyPermissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.secretPermissions">secretPermissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.storagePermissions">storagePermissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.timeouts"></a>

```java
public KeyVaultAccessPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference">KeyVaultAccessPolicyTimeoutsOutputReference</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `certificatePermissionsInput`<sup>Optional</sup> <a name="certificatePermissionsInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.certificatePermissionsInput"></a>

```java
public java.util.List<java.lang.String> getCertificatePermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyPermissionsInput`<sup>Optional</sup> <a name="keyPermissionsInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyPermissionsInput"></a>

```java
public java.util.List<java.lang.String> getKeyPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `secretPermissionsInput`<sup>Optional</sup> <a name="secretPermissionsInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.secretPermissionsInput"></a>

```java
public java.util.List<java.lang.String> getSecretPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storagePermissionsInput`<sup>Optional</sup> <a name="storagePermissionsInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.storagePermissionsInput"></a>

```java
public java.util.List<java.lang.String> getStoragePermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `certificatePermissions`<sup>Required</sup> <a name="certificatePermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.certificatePermissions"></a>

```java
public java.util.List<java.lang.String> getCertificatePermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyPermissions`<sup>Required</sup> <a name="keyPermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyPermissions"></a>

```java
public java.util.List<java.lang.String> getKeyPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `secretPermissions`<sup>Required</sup> <a name="secretPermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.secretPermissions"></a>

```java
public java.util.List<java.lang.String> getSecretPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storagePermissions`<sup>Required</sup> <a name="storagePermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.storagePermissions"></a>

```java
public java.util.List<java.lang.String> getStoragePermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultAccessPolicyAConfig <a name="KeyVaultAccessPolicyAConfig" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_access_policy.KeyVaultAccessPolicyAConfig;

KeyVaultAccessPolicyAConfig.builder()
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
    .objectId(java.lang.String)
    .tenantId(java.lang.String)
//  .applicationId(java.lang.String)
//  .certificatePermissions(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .keyPermissions(java.util.List<java.lang.String>)
//  .secretPermissions(java.util.List<java.lang.String>)
//  .storagePermissions(java.util.List<java.lang.String>)
//  .timeouts(KeyVaultAccessPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#key_vault_id KeyVaultAccessPolicyA#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#object_id KeyVaultAccessPolicyA#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#tenant_id KeyVaultAccessPolicyA#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#application_id KeyVaultAccessPolicyA#application_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.certificatePermissions">certificatePermissions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#certificate_permissions KeyVaultAccessPolicyA#certificate_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#id KeyVaultAccessPolicyA#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.keyPermissions">keyPermissions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#key_permissions KeyVaultAccessPolicyA#key_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.secretPermissions">secretPermissions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#secret_permissions KeyVaultAccessPolicyA#secret_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.storagePermissions">storagePermissions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#storage_permissions KeyVaultAccessPolicyA#storage_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#key_vault_id KeyVaultAccessPolicyA#key_vault_id}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#object_id KeyVaultAccessPolicyA#object_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#tenant_id KeyVaultAccessPolicyA#tenant_id}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#application_id KeyVaultAccessPolicyA#application_id}.

---

##### `certificatePermissions`<sup>Optional</sup> <a name="certificatePermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.certificatePermissions"></a>

```java
public java.util.List<java.lang.String> getCertificatePermissions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#certificate_permissions KeyVaultAccessPolicyA#certificate_permissions}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#id KeyVaultAccessPolicyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyPermissions`<sup>Optional</sup> <a name="keyPermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.keyPermissions"></a>

```java
public java.util.List<java.lang.String> getKeyPermissions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#key_permissions KeyVaultAccessPolicyA#key_permissions}.

---

##### `secretPermissions`<sup>Optional</sup> <a name="secretPermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.secretPermissions"></a>

```java
public java.util.List<java.lang.String> getSecretPermissions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#secret_permissions KeyVaultAccessPolicyA#secret_permissions}.

---

##### `storagePermissions`<sup>Optional</sup> <a name="storagePermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.storagePermissions"></a>

```java
public java.util.List<java.lang.String> getStoragePermissions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#storage_permissions KeyVaultAccessPolicyA#storage_permissions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.timeouts"></a>

```java
public KeyVaultAccessPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#timeouts KeyVaultAccessPolicyA#timeouts}

---

### KeyVaultAccessPolicyTimeouts <a name="KeyVaultAccessPolicyTimeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_access_policy.KeyVaultAccessPolicyTimeouts;

KeyVaultAccessPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#create KeyVaultAccessPolicyA#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#delete KeyVaultAccessPolicyA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#read KeyVaultAccessPolicyA#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#update KeyVaultAccessPolicyA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#create KeyVaultAccessPolicyA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#delete KeyVaultAccessPolicyA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#read KeyVaultAccessPolicyA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/key_vault_access_policy#update KeyVaultAccessPolicyA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultAccessPolicyTimeoutsOutputReference <a name="KeyVaultAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_access_policy.KeyVaultAccessPolicyTimeoutsOutputReference;

new KeyVaultAccessPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a>

---



