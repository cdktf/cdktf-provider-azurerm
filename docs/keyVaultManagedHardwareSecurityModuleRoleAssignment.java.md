# `keyVaultManagedHardwareSecurityModuleRoleAssignment` Submodule <a name="`keyVaultManagedHardwareSecurityModuleRoleAssignment` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedHardwareSecurityModuleRoleAssignment <a name="KeyVaultManagedHardwareSecurityModuleRoleAssignment" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment azurerm_key_vault_managed_hardware_security_module_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment;

KeyVaultManagedHardwareSecurityModuleRoleAssignment.Builder.create(Construct scope, java.lang.String id)
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
    .managedHsmId(java.lang.String)
    .name(java.lang.String)
    .principalId(java.lang.String)
    .roleDefinitionId(java.lang.String)
    .scope(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.managedHsmId">managedHsmId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#managed_hsm_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#name KeyVaultManagedHardwareSecurityModuleRoleAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.principalId">principalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#principal_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.roleDefinitionId">roleDefinitionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#role_definition_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#scope KeyVaultManagedHardwareSecurityModuleRoleAssignment#scope}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#id KeyVaultManagedHardwareSecurityModuleRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedHsmId`<sup>Required</sup> <a name="managedHsmId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.managedHsmId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#managed_hsm_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#name KeyVaultManagedHardwareSecurityModuleRoleAssignment#name}.

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.principalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#principal_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#principal_id}.

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.roleDefinitionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#role_definition_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#role_definition_id}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#scope KeyVaultManagedHardwareSecurityModuleRoleAssignment#scope}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#id KeyVaultManagedHardwareSecurityModuleRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#timeouts KeyVaultManagedHardwareSecurityModuleRoleAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.putTimeouts"></a>

```java
public void putTimeouts(KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleRoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment;

KeyVaultManagedHardwareSecurityModuleRoleAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment;

KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment;

KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment;

KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleRoleAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KeyVaultManagedHardwareSecurityModuleRoleAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KeyVaultManagedHardwareSecurityModuleRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedHardwareSecurityModuleRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.managedHsmIdInput">managedHsmIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.principalIdInput">principalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.roleDefinitionIdInput">roleDefinitionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.managedHsmId">managedHsmId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.roleDefinitionId">roleDefinitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.timeouts"></a>

```java
public KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedHsmIdInput`<sup>Optional</sup> <a name="managedHsmIdInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.managedHsmIdInput"></a>

```java
public java.lang.String getManagedHsmIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.principalIdInput"></a>

```java
public java.lang.String getPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `roleDefinitionIdInput`<sup>Optional</sup> <a name="roleDefinitionIdInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.roleDefinitionIdInput"></a>

```java
public java.lang.String getRoleDefinitionIdInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedHsmId`<sup>Required</sup> <a name="managedHsmId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.managedHsmId"></a>

```java
public java.lang.String getManagedHsmId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.roleDefinitionId"></a>

```java
public java.lang.String getRoleDefinitionId();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig <a name="KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig;

KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.builder()
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
    .managedHsmId(java.lang.String)
    .name(java.lang.String)
    .principalId(java.lang.String)
    .roleDefinitionId(java.lang.String)
    .scope(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.managedHsmId">managedHsmId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#managed_hsm_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#name KeyVaultManagedHardwareSecurityModuleRoleAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.principalId">principalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#principal_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.roleDefinitionId">roleDefinitionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#role_definition_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#scope KeyVaultManagedHardwareSecurityModuleRoleAssignment#scope}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#id KeyVaultManagedHardwareSecurityModuleRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedHsmId`<sup>Required</sup> <a name="managedHsmId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.managedHsmId"></a>

```java
public java.lang.String getManagedHsmId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#managed_hsm_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#name KeyVaultManagedHardwareSecurityModuleRoleAssignment#name}.

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#principal_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#principal_id}.

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.roleDefinitionId"></a>

```java
public java.lang.String getRoleDefinitionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#role_definition_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#role_definition_id}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#scope KeyVaultManagedHardwareSecurityModuleRoleAssignment#scope}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#id KeyVaultManagedHardwareSecurityModuleRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.timeouts"></a>

```java
public KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#timeouts KeyVaultManagedHardwareSecurityModuleRoleAssignment#timeouts}

---

### KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts <a name="KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts;

KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#create KeyVaultManagedHardwareSecurityModuleRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#delete KeyVaultManagedHardwareSecurityModuleRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#read KeyVaultManagedHardwareSecurityModuleRoleAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#create KeyVaultManagedHardwareSecurityModuleRoleAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#delete KeyVaultManagedHardwareSecurityModuleRoleAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#read KeyVaultManagedHardwareSecurityModuleRoleAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference <a name="KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference;

new KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a>

---



