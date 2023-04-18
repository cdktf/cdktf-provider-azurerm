# `azurerm_backup_policy_vm_workload`

Refer to the Terraform Registory for docs: [`azurerm_backup_policy_vm_workload`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload).

# `backupPolicyVmWorkload` Submodule <a name="`backupPolicyVmWorkload` Submodule" id="@cdktf/provider-azurerm.backupPolicyVmWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupPolicyVmWorkload <a name="BackupPolicyVmWorkload" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload azurerm_backup_policy_vm_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkload;

BackupPolicyVmWorkload.Builder.create(Construct scope, java.lang.String id)
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
    .protectionPolicy(IResolvable)
    .protectionPolicy(java.util.List<BackupPolicyVmWorkloadProtectionPolicy>)
    .recoveryVaultName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .settings(BackupPolicyVmWorkloadSettings)
    .workloadType(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(BackupPolicyVmWorkloadTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#name BackupPolicyVmWorkload#name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.protectionPolicy">protectionPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>></code> | protection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.recoveryVaultName">recoveryVaultName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#recovery_vault_name BackupPolicyVmWorkload#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#resource_group_name BackupPolicyVmWorkload#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.workloadType">workloadType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#workload_type BackupPolicyVmWorkload#workload_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#id BackupPolicyVmWorkload#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#name BackupPolicyVmWorkload#name}.

---

##### `protectionPolicy`<sup>Required</sup> <a name="protectionPolicy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.protectionPolicy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>>

protection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#protection_policy BackupPolicyVmWorkload#protection_policy}

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.recoveryVaultName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#recovery_vault_name BackupPolicyVmWorkload#recovery_vault_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#resource_group_name BackupPolicyVmWorkload#resource_group_name}.

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#settings BackupPolicyVmWorkload#settings}

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.workloadType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#workload_type BackupPolicyVmWorkload#workload_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#id BackupPolicyVmWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#timeouts BackupPolicyVmWorkload#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putProtectionPolicy">putProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProtectionPolicy` <a name="putProtectionPolicy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putProtectionPolicy"></a>

```java
public void putProtectionPolicy(IResolvable OR java.util.List<BackupPolicyVmWorkloadProtectionPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putProtectionPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>>

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putSettings"></a>

```java
public void putSettings(BackupPolicyVmWorkloadSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putTimeouts"></a>

```java
public void putTimeouts(BackupPolicyVmWorkloadTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkload;

BackupPolicyVmWorkload.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkload;

BackupPolicyVmWorkload.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkload;

BackupPolicyVmWorkload.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicy">protectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList">BackupPolicyVmWorkloadProtectionPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference">BackupPolicyVmWorkloadSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference">BackupPolicyVmWorkloadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicyInput">protectionPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultNameInput">recoveryVaultNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadTypeInput">workloadTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultName">recoveryVaultName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `protectionPolicy`<sup>Required</sup> <a name="protectionPolicy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicy"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyList getProtectionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList">BackupPolicyVmWorkloadProtectionPolicyList</a>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settings"></a>

```java
public BackupPolicyVmWorkloadSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference">BackupPolicyVmWorkloadSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeouts"></a>

```java
public BackupPolicyVmWorkloadTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference">BackupPolicyVmWorkloadTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protectionPolicyInput`<sup>Optional</sup> <a name="protectionPolicyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicyInput"></a>

```java
public java.lang.Object getProtectionPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>>

---

##### `recoveryVaultNameInput`<sup>Optional</sup> <a name="recoveryVaultNameInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultNameInput"></a>

```java
public java.lang.String getRecoveryVaultNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settingsInput"></a>

```java
public BackupPolicyVmWorkloadSettings getSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadTypeInput"></a>

```java
public java.lang.String getWorkloadTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultName"></a>

```java
public java.lang.String getRecoveryVaultName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BackupPolicyVmWorkloadConfig <a name="BackupPolicyVmWorkloadConfig" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadConfig;

BackupPolicyVmWorkloadConfig.builder()
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
    .protectionPolicy(IResolvable)
    .protectionPolicy(java.util.List<BackupPolicyVmWorkloadProtectionPolicy>)
    .recoveryVaultName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .settings(BackupPolicyVmWorkloadSettings)
    .workloadType(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(BackupPolicyVmWorkloadTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#name BackupPolicyVmWorkload#name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.protectionPolicy">protectionPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>></code> | protection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.recoveryVaultName">recoveryVaultName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#recovery_vault_name BackupPolicyVmWorkload#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#resource_group_name BackupPolicyVmWorkload#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#workload_type BackupPolicyVmWorkload#workload_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#id BackupPolicyVmWorkload#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#name BackupPolicyVmWorkload#name}.

---

##### `protectionPolicy`<sup>Required</sup> <a name="protectionPolicy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.protectionPolicy"></a>

```java
public java.lang.Object getProtectionPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>>

protection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#protection_policy BackupPolicyVmWorkload#protection_policy}

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.recoveryVaultName"></a>

```java
public java.lang.String getRecoveryVaultName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#recovery_vault_name BackupPolicyVmWorkload#recovery_vault_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#resource_group_name BackupPolicyVmWorkload#resource_group_name}.

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.settings"></a>

```java
public BackupPolicyVmWorkloadSettings getSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#settings BackupPolicyVmWorkload#settings}

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#workload_type BackupPolicyVmWorkload#workload_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#id BackupPolicyVmWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.timeouts"></a>

```java
public BackupPolicyVmWorkloadTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#timeouts BackupPolicyVmWorkload#timeouts}

---

### BackupPolicyVmWorkloadProtectionPolicy <a name="BackupPolicyVmWorkloadProtectionPolicy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadProtectionPolicy;

BackupPolicyVmWorkloadProtectionPolicy.builder()
    .backup(BackupPolicyVmWorkloadProtectionPolicyBackup)
    .policyType(java.lang.String)
//  .retentionDaily(BackupPolicyVmWorkloadProtectionPolicyRetentionDaily)
//  .retentionMonthly(BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly)
//  .retentionWeekly(BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly)
//  .retentionYearly(BackupPolicyVmWorkloadProtectionPolicyRetentionYearly)
//  .simpleRetention(BackupPolicyVmWorkloadProtectionPolicySimpleRetention)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.policyType">policyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#policy_type BackupPolicyVmWorkload#policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionDaily">retentionDaily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a></code> | retention_daily block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionMonthly">retentionMonthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a></code> | retention_monthly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionWeekly">retentionWeekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a></code> | retention_weekly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionYearly">retentionYearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a></code> | retention_yearly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.simpleRetention">simpleRetention</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a></code> | simple_retention block. |

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.backup"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyBackup getBackup();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#backup BackupPolicyVmWorkload#backup}

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#policy_type BackupPolicyVmWorkload#policy_type}.

---

##### `retentionDaily`<sup>Optional</sup> <a name="retentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionDaily"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionDaily getRetentionDaily();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a>

retention_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#retention_daily BackupPolicyVmWorkload#retention_daily}

---

##### `retentionMonthly`<sup>Optional</sup> <a name="retentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionMonthly"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly getRetentionMonthly();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a>

retention_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#retention_monthly BackupPolicyVmWorkload#retention_monthly}

---

##### `retentionWeekly`<sup>Optional</sup> <a name="retentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionWeekly"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly getRetentionWeekly();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a>

retention_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#retention_weekly BackupPolicyVmWorkload#retention_weekly}

---

##### `retentionYearly`<sup>Optional</sup> <a name="retentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionYearly"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionYearly getRetentionYearly();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a>

retention_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#retention_yearly BackupPolicyVmWorkload#retention_yearly}

---

##### `simpleRetention`<sup>Optional</sup> <a name="simpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.simpleRetention"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicySimpleRetention getSimpleRetention();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a>

simple_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#simple_retention BackupPolicyVmWorkload#simple_retention}

---

### BackupPolicyVmWorkloadProtectionPolicyBackup <a name="BackupPolicyVmWorkloadProtectionPolicyBackup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadProtectionPolicyBackup;

BackupPolicyVmWorkloadProtectionPolicyBackup.builder()
//  .frequency(java.lang.String)
//  .frequencyInMinutes(java.lang.Number)
//  .time(java.lang.String)
//  .weekdays(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#frequency BackupPolicyVmWorkload#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequencyInMinutes">frequencyInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#frequency_in_minutes BackupPolicyVmWorkload#frequency_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.time">time</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#time BackupPolicyVmWorkload#time}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.weekdays">weekdays</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#frequency BackupPolicyVmWorkload#frequency}.

---

##### `frequencyInMinutes`<sup>Optional</sup> <a name="frequencyInMinutes" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequencyInMinutes"></a>

```java
public java.lang.Number getFrequencyInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#frequency_in_minutes BackupPolicyVmWorkload#frequency_in_minutes}.

---

##### `time`<sup>Optional</sup> <a name="time" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#time BackupPolicyVmWorkload#time}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.weekdays"></a>

```java
public java.util.List<java.lang.String> getWeekdays();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionDaily <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily;

BackupPolicyVmWorkloadProtectionPolicyRetentionDaily.builder()
    .count(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly;

BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.builder()
    .count(java.lang.Number)
    .formatType(java.lang.String)
//  .monthdays(java.util.List<java.lang.Number>)
//  .weekdays(java.util.List<java.lang.String>)
//  .weeks(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.formatType">formatType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.monthdays">monthdays</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weekdays">weekdays</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weeks">weeks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.formatType"></a>

```java
public java.lang.String getFormatType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}.

---

##### `monthdays`<sup>Optional</sup> <a name="monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.monthdays"></a>

```java
public java.util.List<java.lang.Number> getMonthdays();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weekdays"></a>

```java
public java.util.List<java.lang.String> getWeekdays();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

##### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weeks"></a>

```java
public java.util.List<java.lang.String> getWeeks();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly;

BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.builder()
    .count(java.lang.Number)
    .weekdays(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.weekdays">weekdays</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.weekdays"></a>

```java
public java.util.List<java.lang.String> getWeekdays();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionYearly <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly;

BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.builder()
    .count(java.lang.Number)
    .formatType(java.lang.String)
    .months(java.util.List<java.lang.String>)
//  .monthdays(java.util.List<java.lang.Number>)
//  .weekdays(java.util.List<java.lang.String>)
//  .weeks(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.formatType">formatType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.months">months</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#months BackupPolicyVmWorkload#months}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.monthdays">monthdays</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weekdays">weekdays</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weeks">weeks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.formatType"></a>

```java
public java.lang.String getFormatType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}.

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.months"></a>

```java
public java.util.List<java.lang.String> getMonths();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#months BackupPolicyVmWorkload#months}.

---

##### `monthdays`<sup>Optional</sup> <a name="monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.monthdays"></a>

```java
public java.util.List<java.lang.Number> getMonthdays();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weekdays"></a>

```java
public java.util.List<java.lang.String> getWeekdays();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

##### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weeks"></a>

```java
public java.util.List<java.lang.String> getWeeks();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}.

---

### BackupPolicyVmWorkloadProtectionPolicySimpleRetention <a name="BackupPolicyVmWorkloadProtectionPolicySimpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention;

BackupPolicyVmWorkloadProtectionPolicySimpleRetention.builder()
    .count(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

### BackupPolicyVmWorkloadSettings <a name="BackupPolicyVmWorkloadSettings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadSettings;

BackupPolicyVmWorkloadSettings.builder()
    .timeZone(java.lang.String)
//  .compressionEnabled(java.lang.Boolean)
//  .compressionEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#time_zone BackupPolicyVmWorkload#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.compressionEnabled">compressionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#compression_enabled BackupPolicyVmWorkload#compression_enabled}. |

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#time_zone BackupPolicyVmWorkload#time_zone}.

---

##### `compressionEnabled`<sup>Optional</sup> <a name="compressionEnabled" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.compressionEnabled"></a>

```java
public java.lang.Object getCompressionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#compression_enabled BackupPolicyVmWorkload#compression_enabled}.

---

### BackupPolicyVmWorkloadTimeouts <a name="BackupPolicyVmWorkloadTimeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadTimeouts;

BackupPolicyVmWorkloadTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#create BackupPolicyVmWorkload#create}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#delete BackupPolicyVmWorkload#delete}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#read BackupPolicyVmWorkload#read}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#update BackupPolicyVmWorkload#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#create BackupPolicyVmWorkload#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#delete BackupPolicyVmWorkload#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#read BackupPolicyVmWorkload#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/backup_policy_vm_workload#update BackupPolicyVmWorkload#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference;

new BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequencyInMinutes">resetFrequencyInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetTime">resetTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetWeekdays">resetWeekdays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetFrequencyInMinutes` <a name="resetFrequencyInMinutes" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequencyInMinutes"></a>

```java
public void resetFrequencyInMinutes()
```

##### `resetTime` <a name="resetTime" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetTime"></a>

```java
public void resetTime()
```

##### `resetWeekdays` <a name="resetWeekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetWeekdays"></a>

```java
public void resetWeekdays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutesInput">frequencyInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.timeInput">timeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutes">frequencyInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdays">weekdays</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyInMinutesInput`<sup>Optional</sup> <a name="frequencyInMinutesInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutesInput"></a>

```java
public java.lang.Number getFrequencyInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.timeInput"></a>

```java
public java.lang.String getTimeInput();
```

- *Type:* java.lang.String

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdaysInput"></a>

```java
public java.util.List<java.lang.String> getWeekdaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `frequencyInMinutes`<sup>Required</sup> <a name="frequencyInMinutes" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutes"></a>

```java
public java.lang.Number getFrequencyInMinutes();
```

- *Type:* java.lang.Number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdays"></a>

```java
public java.util.List<java.lang.String> getWeekdays();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.internalValue"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyBackup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a>

---


### BackupPolicyVmWorkloadProtectionPolicyList <a name="BackupPolicyVmWorkloadProtectionPolicyList" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadProtectionPolicyList;

new BackupPolicyVmWorkloadProtectionPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.get"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>>

---


### BackupPolicyVmWorkloadProtectionPolicyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadProtectionPolicyOutputReference;

new BackupPolicyVmWorkloadProtectionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putBackup">putBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionDaily">putRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly">putRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionWeekly">putRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly">putRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putSimpleRetention">putSimpleRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionDaily">resetRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionMonthly">resetRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionWeekly">resetRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionYearly">resetRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetSimpleRetention">resetSimpleRetention</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackup` <a name="putBackup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putBackup"></a>

```java
public void putBackup(BackupPolicyVmWorkloadProtectionPolicyBackup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a>

---

##### `putRetentionDaily` <a name="putRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionDaily"></a>

```java
public void putRetentionDaily(BackupPolicyVmWorkloadProtectionPolicyRetentionDaily value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a>

---

##### `putRetentionMonthly` <a name="putRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly"></a>

```java
public void putRetentionMonthly(BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a>

---

##### `putRetentionWeekly` <a name="putRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionWeekly"></a>

```java
public void putRetentionWeekly(BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a>

---

##### `putRetentionYearly` <a name="putRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly"></a>

```java
public void putRetentionYearly(BackupPolicyVmWorkloadProtectionPolicyRetentionYearly value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a>

---

##### `putSimpleRetention` <a name="putSimpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putSimpleRetention"></a>

```java
public void putSimpleRetention(BackupPolicyVmWorkloadProtectionPolicySimpleRetention value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putSimpleRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a>

---

##### `resetRetentionDaily` <a name="resetRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionDaily"></a>

```java
public void resetRetentionDaily()
```

##### `resetRetentionMonthly` <a name="resetRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionMonthly"></a>

```java
public void resetRetentionMonthly()
```

##### `resetRetentionWeekly` <a name="resetRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionWeekly"></a>

```java
public void resetRetentionWeekly()
```

##### `resetRetentionYearly` <a name="resetRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionYearly"></a>

```java
public void resetRetentionYearly()
```

##### `resetSimpleRetention` <a name="resetSimpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetSimpleRetention"></a>

```java
public void resetSimpleRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference">BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDaily">retentionDaily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthly">retentionMonthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeekly">retentionWeekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearly">retentionYearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetention">simpleRetention</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference">BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backupInput">backupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDailyInput">retentionDailyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthlyInput">retentionMonthlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeeklyInput">retentionWeeklyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearlyInput">retentionYearlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetentionInput">simpleRetentionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backup"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference getBackup();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference">BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference</a>

---

##### `retentionDaily`<sup>Required</sup> <a name="retentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDaily"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference getRetentionDaily();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference</a>

---

##### `retentionMonthly`<sup>Required</sup> <a name="retentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthly"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference getRetentionMonthly();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference</a>

---

##### `retentionWeekly`<sup>Required</sup> <a name="retentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeekly"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference getRetentionWeekly();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference</a>

---

##### `retentionYearly`<sup>Required</sup> <a name="retentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearly"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference getRetentionYearly();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference</a>

---

##### `simpleRetention`<sup>Required</sup> <a name="simpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetention"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference getSimpleRetention();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference">BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference</a>

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backupInput"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyBackup getBackupInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a>

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `retentionDailyInput`<sup>Optional</sup> <a name="retentionDailyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDailyInput"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionDaily getRetentionDailyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a>

---

##### `retentionMonthlyInput`<sup>Optional</sup> <a name="retentionMonthlyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthlyInput"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly getRetentionMonthlyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a>

---

##### `retentionWeeklyInput`<sup>Optional</sup> <a name="retentionWeeklyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeeklyInput"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly getRetentionWeeklyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a>

---

##### `retentionYearlyInput`<sup>Optional</sup> <a name="retentionYearlyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearlyInput"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionYearly getRetentionYearlyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a>

---

##### `simpleRetentionInput`<sup>Optional</sup> <a name="simpleRetentionInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetentionInput"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicySimpleRetention getSimpleRetentionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a>

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a> OR com.hashicorp.cdktf.IResolvable

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference;

new BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.internalValue"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionDaily getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a>

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference;

new BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetMonthdays">resetMonthdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeekdays">resetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeeks">resetWeeks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMonthdays` <a name="resetMonthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetMonthdays"></a>

```java
public void resetMonthdays()
```

##### `resetWeekdays` <a name="resetWeekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeekdays"></a>

```java
public void resetWeekdays()
```

##### `resetWeeks` <a name="resetWeeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeeks"></a>

```java
public void resetWeeks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatTypeInput">formatTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdaysInput">monthdaysInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeksInput">weeksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatType">formatType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdays">monthdays</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdays">weekdays</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeks">weeks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `formatTypeInput`<sup>Optional</sup> <a name="formatTypeInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatTypeInput"></a>

```java
public java.lang.String getFormatTypeInput();
```

- *Type:* java.lang.String

---

##### `monthdaysInput`<sup>Optional</sup> <a name="monthdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdaysInput"></a>

```java
public java.util.List<java.lang.Number> getMonthdaysInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdaysInput"></a>

```java
public java.util.List<java.lang.String> getWeekdaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weeksInput`<sup>Optional</sup> <a name="weeksInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeksInput"></a>

```java
public java.util.List<java.lang.String> getWeeksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatType"></a>

```java
public java.lang.String getFormatType();
```

- *Type:* java.lang.String

---

##### `monthdays`<sup>Required</sup> <a name="monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdays"></a>

```java
public java.util.List<java.lang.Number> getMonthdays();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdays"></a>

```java
public java.util.List<java.lang.String> getWeekdays();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weeks`<sup>Required</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeks"></a>

```java
public java.util.List<java.lang.String> getWeeks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.internalValue"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a>

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference;

new BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdays">weekdays</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdaysInput"></a>

```java
public java.util.List<java.lang.String> getWeekdaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdays"></a>

```java
public java.util.List<java.lang.String> getWeekdays();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.internalValue"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a>

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference;

new BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetMonthdays">resetMonthdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeekdays">resetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeeks">resetWeeks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMonthdays` <a name="resetMonthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetMonthdays"></a>

```java
public void resetMonthdays()
```

##### `resetWeekdays` <a name="resetWeekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeekdays"></a>

```java
public void resetWeekdays()
```

##### `resetWeeks` <a name="resetWeeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeeks"></a>

```java
public void resetWeeks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatTypeInput">formatTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdaysInput">monthdaysInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthsInput">monthsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeksInput">weeksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatType">formatType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdays">monthdays</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.months">months</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdays">weekdays</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeks">weeks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `formatTypeInput`<sup>Optional</sup> <a name="formatTypeInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatTypeInput"></a>

```java
public java.lang.String getFormatTypeInput();
```

- *Type:* java.lang.String

---

##### `monthdaysInput`<sup>Optional</sup> <a name="monthdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdaysInput"></a>

```java
public java.util.List<java.lang.Number> getMonthdaysInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthsInput"></a>

```java
public java.util.List<java.lang.String> getMonthsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdaysInput"></a>

```java
public java.util.List<java.lang.String> getWeekdaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weeksInput`<sup>Optional</sup> <a name="weeksInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeksInput"></a>

```java
public java.util.List<java.lang.String> getWeeksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatType"></a>

```java
public java.lang.String getFormatType();
```

- *Type:* java.lang.String

---

##### `monthdays`<sup>Required</sup> <a name="monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdays"></a>

```java
public java.util.List<java.lang.Number> getMonthdays();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.months"></a>

```java
public java.util.List<java.lang.String> getMonths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdays"></a>

```java
public java.util.List<java.lang.String> getWeekdays();
```

- *Type:* java.util.List<java.lang.String>

---

##### `weeks`<sup>Required</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeks"></a>

```java
public java.util.List<java.lang.String> getWeeks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.internalValue"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicyRetentionYearly getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a>

---


### BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference;

new BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.internalValue"></a>

```java
public BackupPolicyVmWorkloadProtectionPolicySimpleRetention getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a>

---


### BackupPolicyVmWorkloadSettingsOutputReference <a name="BackupPolicyVmWorkloadSettingsOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadSettingsOutputReference;

new BackupPolicyVmWorkloadSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resetCompressionEnabled">resetCompressionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompressionEnabled` <a name="resetCompressionEnabled" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resetCompressionEnabled"></a>

```java
public void resetCompressionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabledInput">compressionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabled">compressionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compressionEnabledInput`<sup>Optional</sup> <a name="compressionEnabledInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabledInput"></a>

```java
public java.lang.Object getCompressionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `compressionEnabled`<sup>Required</sup> <a name="compressionEnabled" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabled"></a>

```java
public java.lang.Object getCompressionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.internalValue"></a>

```java
public BackupPolicyVmWorkloadSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

---


### BackupPolicyVmWorkloadTimeoutsOutputReference <a name="BackupPolicyVmWorkloadTimeoutsOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.backup_policy_vm_workload.BackupPolicyVmWorkloadTimeoutsOutputReference;

new BackupPolicyVmWorkloadTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



