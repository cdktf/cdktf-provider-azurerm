# `keyVaultManagedHardwareSecurityModuleKeyRotationPolicy` Submodule <a name="`keyVaultManagedHardwareSecurityModuleKeyRotationPolicy` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy <a name="KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy azurerm_key_vault_managed_hardware_security_module_key_rotation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_key_rotation_policy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy;

KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .expireAfter(java.lang.String)
    .managedHsmKeyId(java.lang.String)
//  .id(java.lang.String)
//  .timeAfterCreation(java.lang.String)
//  .timeBeforeExpiry(java.lang.String)
//  .timeouts(KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.expireAfter">expireAfter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#expire_after KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#expire_after}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.managedHsmKeyId">managedHsmKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#managed_hsm_key_id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#managed_hsm_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.timeAfterCreation">timeAfterCreation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_after_creation KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_after_creation}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.timeBeforeExpiry">timeBeforeExpiry</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_before_expiry KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_before_expiry}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `expireAfter`<sup>Required</sup> <a name="expireAfter" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.expireAfter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#expire_after KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#expire_after}.

---

##### `managedHsmKeyId`<sup>Required</sup> <a name="managedHsmKeyId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.managedHsmKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#managed_hsm_key_id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#managed_hsm_key_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeAfterCreation`<sup>Optional</sup> <a name="timeAfterCreation" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.timeAfterCreation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_after_creation KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_after_creation}.

---

##### `timeBeforeExpiry`<sup>Optional</sup> <a name="timeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.timeBeforeExpiry"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_before_expiry KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_before_expiry}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#timeouts KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetTimeAfterCreation">resetTimeAfterCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetTimeBeforeExpiry">resetTimeBeforeExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.putTimeouts"></a>

```java
public void putTimeouts(KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeAfterCreation` <a name="resetTimeAfterCreation" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetTimeAfterCreation"></a>

```java
public void resetTimeAfterCreation()
```

##### `resetTimeBeforeExpiry` <a name="resetTimeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetTimeBeforeExpiry"></a>

```java
public void resetTimeBeforeExpiry()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_key_rotation_policy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy;

KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_key_rotation_policy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy;

KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_key_rotation_policy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy;

KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_key_rotation_policy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy;

KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.expireAfterInput">expireAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.managedHsmKeyIdInput">managedHsmKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeAfterCreationInput">timeAfterCreationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeBeforeExpiryInput">timeBeforeExpiryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.expireAfter">expireAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.managedHsmKeyId">managedHsmKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeAfterCreation">timeAfterCreation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeBeforeExpiry">timeBeforeExpiry</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeouts"></a>

```java
public KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference</a>

---

##### `expireAfterInput`<sup>Optional</sup> <a name="expireAfterInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.expireAfterInput"></a>

```java
public java.lang.String getExpireAfterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedHsmKeyIdInput`<sup>Optional</sup> <a name="managedHsmKeyIdInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.managedHsmKeyIdInput"></a>

```java
public java.lang.String getManagedHsmKeyIdInput();
```

- *Type:* java.lang.String

---

##### `timeAfterCreationInput`<sup>Optional</sup> <a name="timeAfterCreationInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeAfterCreationInput"></a>

```java
public java.lang.String getTimeAfterCreationInput();
```

- *Type:* java.lang.String

---

##### `timeBeforeExpiryInput`<sup>Optional</sup> <a name="timeBeforeExpiryInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeBeforeExpiryInput"></a>

```java
public java.lang.String getTimeBeforeExpiryInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a>

---

##### `expireAfter`<sup>Required</sup> <a name="expireAfter" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.expireAfter"></a>

```java
public java.lang.String getExpireAfter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedHsmKeyId`<sup>Required</sup> <a name="managedHsmKeyId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.managedHsmKeyId"></a>

```java
public java.lang.String getManagedHsmKeyId();
```

- *Type:* java.lang.String

---

##### `timeAfterCreation`<sup>Required</sup> <a name="timeAfterCreation" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeAfterCreation"></a>

```java
public java.lang.String getTimeAfterCreation();
```

- *Type:* java.lang.String

---

##### `timeBeforeExpiry`<sup>Required</sup> <a name="timeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.timeBeforeExpiry"></a>

```java
public java.lang.String getTimeBeforeExpiry();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig <a name="KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_key_rotation_policy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig;

KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.builder()
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
    .expireAfter(java.lang.String)
    .managedHsmKeyId(java.lang.String)
//  .id(java.lang.String)
//  .timeAfterCreation(java.lang.String)
//  .timeBeforeExpiry(java.lang.String)
//  .timeouts(KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.expireAfter">expireAfter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#expire_after KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#expire_after}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.managedHsmKeyId">managedHsmKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#managed_hsm_key_id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#managed_hsm_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.timeAfterCreation">timeAfterCreation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_after_creation KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_after_creation}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.timeBeforeExpiry">timeBeforeExpiry</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_before_expiry KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_before_expiry}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `expireAfter`<sup>Required</sup> <a name="expireAfter" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.expireAfter"></a>

```java
public java.lang.String getExpireAfter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#expire_after KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#expire_after}.

---

##### `managedHsmKeyId`<sup>Required</sup> <a name="managedHsmKeyId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.managedHsmKeyId"></a>

```java
public java.lang.String getManagedHsmKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#managed_hsm_key_id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#managed_hsm_key_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeAfterCreation`<sup>Optional</sup> <a name="timeAfterCreation" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.timeAfterCreation"></a>

```java
public java.lang.String getTimeAfterCreation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_after_creation KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_after_creation}.

---

##### `timeBeforeExpiry`<sup>Optional</sup> <a name="timeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.timeBeforeExpiry"></a>

```java
public java.lang.String getTimeBeforeExpiry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_before_expiry KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_before_expiry}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig.property.timeouts"></a>

```java
public KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#timeouts KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#timeouts}

---

### KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts <a name="KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_key_rotation_policy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts;

KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#create KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#delete KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#read KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#update KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#create KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#delete KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#read KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#update KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference <a name="KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_key_rotation_policy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference;

new KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKeyRotationPolicy.KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts</a>

---



