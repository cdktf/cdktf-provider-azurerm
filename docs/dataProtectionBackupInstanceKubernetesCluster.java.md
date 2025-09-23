# `dataProtectionBackupInstanceKubernetesCluster` Submodule <a name="`dataProtectionBackupInstanceKubernetesCluster` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupInstanceKubernetesCluster <a name="DataProtectionBackupInstanceKubernetesCluster" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster azurerm_data_protection_backup_instance_kubernetes_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_instance_kubernetes_cluster.DataProtectionBackupInstanceKubernetesCluster;

DataProtectionBackupInstanceKubernetesCluster.Builder.create(Construct scope, java.lang.String id)
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
    .backupPolicyId(java.lang.String)
    .kubernetesClusterId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .snapshotResourceGroupName(java.lang.String)
    .vaultId(java.lang.String)
//  .backupDatasourceParameters(DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters)
//  .id(java.lang.String)
//  .timeouts(DataProtectionBackupInstanceKubernetesClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.backupPolicyId">backupPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#backup_policy_id DataProtectionBackupInstanceKubernetesCluster#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.kubernetesClusterId">kubernetesClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#kubernetes_cluster_id DataProtectionBackupInstanceKubernetesCluster#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#location DataProtectionBackupInstanceKubernetesCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#name DataProtectionBackupInstanceKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.snapshotResourceGroupName">snapshotResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#snapshot_resource_group_name DataProtectionBackupInstanceKubernetesCluster#snapshot_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#vault_id DataProtectionBackupInstanceKubernetesCluster#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.backupDatasourceParameters">backupDatasourceParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a></code> | backup_datasource_parameters block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#id DataProtectionBackupInstanceKubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.backupPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#backup_policy_id DataProtectionBackupInstanceKubernetesCluster#backup_policy_id}.

---

##### `kubernetesClusterId`<sup>Required</sup> <a name="kubernetesClusterId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.kubernetesClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#kubernetes_cluster_id DataProtectionBackupInstanceKubernetesCluster#kubernetes_cluster_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#location DataProtectionBackupInstanceKubernetesCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#name DataProtectionBackupInstanceKubernetesCluster#name}.

---

##### `snapshotResourceGroupName`<sup>Required</sup> <a name="snapshotResourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.snapshotResourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#snapshot_resource_group_name DataProtectionBackupInstanceKubernetesCluster#snapshot_resource_group_name}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.vaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#vault_id DataProtectionBackupInstanceKubernetesCluster#vault_id}.

---

##### `backupDatasourceParameters`<sup>Optional</sup> <a name="backupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.backupDatasourceParameters"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a>

backup_datasource_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#backup_datasource_parameters DataProtectionBackupInstanceKubernetesCluster#backup_datasource_parameters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#id DataProtectionBackupInstanceKubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#timeouts DataProtectionBackupInstanceKubernetesCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putBackupDatasourceParameters">putBackupDatasourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetBackupDatasourceParameters">resetBackupDatasourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupDatasourceParameters` <a name="putBackupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putBackupDatasourceParameters"></a>

```java
public void putBackupDatasourceParameters(DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putBackupDatasourceParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putTimeouts"></a>

```java
public void putTimeouts(DataProtectionBackupInstanceKubernetesClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a>

---

##### `resetBackupDatasourceParameters` <a name="resetBackupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetBackupDatasourceParameters"></a>

```java
public void resetBackupDatasourceParameters()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataProtectionBackupInstanceKubernetesCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_instance_kubernetes_cluster.DataProtectionBackupInstanceKubernetesCluster;

DataProtectionBackupInstanceKubernetesCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_instance_kubernetes_cluster.DataProtectionBackupInstanceKubernetesCluster;

DataProtectionBackupInstanceKubernetesCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_instance_kubernetes_cluster.DataProtectionBackupInstanceKubernetesCluster;

DataProtectionBackupInstanceKubernetesCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_instance_kubernetes_cluster.DataProtectionBackupInstanceKubernetesCluster;

DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataProtectionBackupInstanceKubernetesCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataProtectionBackupInstanceKubernetesCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataProtectionBackupInstanceKubernetesCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupInstanceKubernetesCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupDatasourceParameters">backupDatasourceParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference">DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupDatasourceParametersInput">backupDatasourceParametersInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupPolicyIdInput">backupPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.kubernetesClusterIdInput">kubernetesClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.snapshotResourceGroupNameInput">snapshotResourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupPolicyId">backupPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.kubernetesClusterId">kubernetesClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.snapshotResourceGroupName">snapshotResourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupDatasourceParameters`<sup>Required</sup> <a name="backupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupDatasourceParameters"></a>

```java
public DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference getBackupDatasourceParameters();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.timeouts"></a>

```java
public DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference">DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference</a>

---

##### `backupDatasourceParametersInput`<sup>Optional</sup> <a name="backupDatasourceParametersInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupDatasourceParametersInput"></a>

```java
public DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters getBackupDatasourceParametersInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a>

---

##### `backupPolicyIdInput`<sup>Optional</sup> <a name="backupPolicyIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupPolicyIdInput"></a>

```java
public java.lang.String getBackupPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kubernetesClusterIdInput`<sup>Optional</sup> <a name="kubernetesClusterIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.kubernetesClusterIdInput"></a>

```java
public java.lang.String getKubernetesClusterIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `snapshotResourceGroupNameInput`<sup>Optional</sup> <a name="snapshotResourceGroupNameInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.snapshotResourceGroupNameInput"></a>

```java
public java.lang.String getSnapshotResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a>

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupPolicyId"></a>

```java
public java.lang.String getBackupPolicyId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubernetesClusterId`<sup>Required</sup> <a name="kubernetesClusterId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.kubernetesClusterId"></a>

```java
public java.lang.String getKubernetesClusterId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `snapshotResourceGroupName`<sup>Required</sup> <a name="snapshotResourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.snapshotResourceGroupName"></a>

```java
public java.lang.String getSnapshotResourceGroupName();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters <a name="DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_instance_kubernetes_cluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters;

DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.builder()
//  .clusterScopedResourcesEnabled(java.lang.Boolean)
//  .clusterScopedResourcesEnabled(IResolvable)
//  .excludedNamespaces(java.util.List<java.lang.String>)
//  .excludedResourceTypes(java.util.List<java.lang.String>)
//  .includedNamespaces(java.util.List<java.lang.String>)
//  .includedResourceTypes(java.util.List<java.lang.String>)
//  .labelSelectors(java.util.List<java.lang.String>)
//  .volumeSnapshotEnabled(java.lang.Boolean)
//  .volumeSnapshotEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.clusterScopedResourcesEnabled">clusterScopedResourcesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#cluster_scoped_resources_enabled DataProtectionBackupInstanceKubernetesCluster#cluster_scoped_resources_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.excludedNamespaces">excludedNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#excluded_namespaces DataProtectionBackupInstanceKubernetesCluster#excluded_namespaces}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.excludedResourceTypes">excludedResourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#excluded_resource_types DataProtectionBackupInstanceKubernetesCluster#excluded_resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.includedNamespaces">includedNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#included_namespaces DataProtectionBackupInstanceKubernetesCluster#included_namespaces}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.includedResourceTypes">includedResourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#included_resource_types DataProtectionBackupInstanceKubernetesCluster#included_resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.labelSelectors">labelSelectors</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#label_selectors DataProtectionBackupInstanceKubernetesCluster#label_selectors}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.volumeSnapshotEnabled">volumeSnapshotEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#volume_snapshot_enabled DataProtectionBackupInstanceKubernetesCluster#volume_snapshot_enabled}. |

---

##### `clusterScopedResourcesEnabled`<sup>Optional</sup> <a name="clusterScopedResourcesEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.clusterScopedResourcesEnabled"></a>

```java
public java.lang.Object getClusterScopedResourcesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#cluster_scoped_resources_enabled DataProtectionBackupInstanceKubernetesCluster#cluster_scoped_resources_enabled}.

---

##### `excludedNamespaces`<sup>Optional</sup> <a name="excludedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.excludedNamespaces"></a>

```java
public java.util.List<java.lang.String> getExcludedNamespaces();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#excluded_namespaces DataProtectionBackupInstanceKubernetesCluster#excluded_namespaces}.

---

##### `excludedResourceTypes`<sup>Optional</sup> <a name="excludedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.excludedResourceTypes"></a>

```java
public java.util.List<java.lang.String> getExcludedResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#excluded_resource_types DataProtectionBackupInstanceKubernetesCluster#excluded_resource_types}.

---

##### `includedNamespaces`<sup>Optional</sup> <a name="includedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.includedNamespaces"></a>

```java
public java.util.List<java.lang.String> getIncludedNamespaces();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#included_namespaces DataProtectionBackupInstanceKubernetesCluster#included_namespaces}.

---

##### `includedResourceTypes`<sup>Optional</sup> <a name="includedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.includedResourceTypes"></a>

```java
public java.util.List<java.lang.String> getIncludedResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#included_resource_types DataProtectionBackupInstanceKubernetesCluster#included_resource_types}.

---

##### `labelSelectors`<sup>Optional</sup> <a name="labelSelectors" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.labelSelectors"></a>

```java
public java.util.List<java.lang.String> getLabelSelectors();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#label_selectors DataProtectionBackupInstanceKubernetesCluster#label_selectors}.

---

##### `volumeSnapshotEnabled`<sup>Optional</sup> <a name="volumeSnapshotEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.volumeSnapshotEnabled"></a>

```java
public java.lang.Object getVolumeSnapshotEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#volume_snapshot_enabled DataProtectionBackupInstanceKubernetesCluster#volume_snapshot_enabled}.

---

### DataProtectionBackupInstanceKubernetesClusterConfig <a name="DataProtectionBackupInstanceKubernetesClusterConfig" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_instance_kubernetes_cluster.DataProtectionBackupInstanceKubernetesClusterConfig;

DataProtectionBackupInstanceKubernetesClusterConfig.builder()
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
    .backupPolicyId(java.lang.String)
    .kubernetesClusterId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .snapshotResourceGroupName(java.lang.String)
    .vaultId(java.lang.String)
//  .backupDatasourceParameters(DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters)
//  .id(java.lang.String)
//  .timeouts(DataProtectionBackupInstanceKubernetesClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.backupPolicyId">backupPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#backup_policy_id DataProtectionBackupInstanceKubernetesCluster#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.kubernetesClusterId">kubernetesClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#kubernetes_cluster_id DataProtectionBackupInstanceKubernetesCluster#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#location DataProtectionBackupInstanceKubernetesCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#name DataProtectionBackupInstanceKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.snapshotResourceGroupName">snapshotResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#snapshot_resource_group_name DataProtectionBackupInstanceKubernetesCluster#snapshot_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#vault_id DataProtectionBackupInstanceKubernetesCluster#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.backupDatasourceParameters">backupDatasourceParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a></code> | backup_datasource_parameters block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#id DataProtectionBackupInstanceKubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.backupPolicyId"></a>

```java
public java.lang.String getBackupPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#backup_policy_id DataProtectionBackupInstanceKubernetesCluster#backup_policy_id}.

---

##### `kubernetesClusterId`<sup>Required</sup> <a name="kubernetesClusterId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.kubernetesClusterId"></a>

```java
public java.lang.String getKubernetesClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#kubernetes_cluster_id DataProtectionBackupInstanceKubernetesCluster#kubernetes_cluster_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#location DataProtectionBackupInstanceKubernetesCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#name DataProtectionBackupInstanceKubernetesCluster#name}.

---

##### `snapshotResourceGroupName`<sup>Required</sup> <a name="snapshotResourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.snapshotResourceGroupName"></a>

```java
public java.lang.String getSnapshotResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#snapshot_resource_group_name DataProtectionBackupInstanceKubernetesCluster#snapshot_resource_group_name}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#vault_id DataProtectionBackupInstanceKubernetesCluster#vault_id}.

---

##### `backupDatasourceParameters`<sup>Optional</sup> <a name="backupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.backupDatasourceParameters"></a>

```java
public DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters getBackupDatasourceParameters();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a>

backup_datasource_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#backup_datasource_parameters DataProtectionBackupInstanceKubernetesCluster#backup_datasource_parameters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#id DataProtectionBackupInstanceKubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.timeouts"></a>

```java
public DataProtectionBackupInstanceKubernetesClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#timeouts DataProtectionBackupInstanceKubernetesCluster#timeouts}

---

### DataProtectionBackupInstanceKubernetesClusterTimeouts <a name="DataProtectionBackupInstanceKubernetesClusterTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_instance_kubernetes_cluster.DataProtectionBackupInstanceKubernetesClusterTimeouts;

DataProtectionBackupInstanceKubernetesClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#create DataProtectionBackupInstanceKubernetesCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#delete DataProtectionBackupInstanceKubernetesCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#read DataProtectionBackupInstanceKubernetesCluster#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#create DataProtectionBackupInstanceKubernetesCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#delete DataProtectionBackupInstanceKubernetesCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#read DataProtectionBackupInstanceKubernetesCluster#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference <a name="DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_instance_kubernetes_cluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference;

new DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetClusterScopedResourcesEnabled">resetClusterScopedResourcesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetExcludedNamespaces">resetExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetExcludedResourceTypes">resetExcludedResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetIncludedNamespaces">resetIncludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetIncludedResourceTypes">resetIncludedResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetLabelSelectors">resetLabelSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetVolumeSnapshotEnabled">resetVolumeSnapshotEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterScopedResourcesEnabled` <a name="resetClusterScopedResourcesEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetClusterScopedResourcesEnabled"></a>

```java
public void resetClusterScopedResourcesEnabled()
```

##### `resetExcludedNamespaces` <a name="resetExcludedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetExcludedNamespaces"></a>

```java
public void resetExcludedNamespaces()
```

##### `resetExcludedResourceTypes` <a name="resetExcludedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetExcludedResourceTypes"></a>

```java
public void resetExcludedResourceTypes()
```

##### `resetIncludedNamespaces` <a name="resetIncludedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetIncludedNamespaces"></a>

```java
public void resetIncludedNamespaces()
```

##### `resetIncludedResourceTypes` <a name="resetIncludedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetIncludedResourceTypes"></a>

```java
public void resetIncludedResourceTypes()
```

##### `resetLabelSelectors` <a name="resetLabelSelectors" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetLabelSelectors"></a>

```java
public void resetLabelSelectors()
```

##### `resetVolumeSnapshotEnabled` <a name="resetVolumeSnapshotEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetVolumeSnapshotEnabled"></a>

```java
public void resetVolumeSnapshotEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.clusterScopedResourcesEnabledInput">clusterScopedResourcesEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedNamespacesInput">excludedNamespacesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedResourceTypesInput">excludedResourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedNamespacesInput">includedNamespacesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedResourceTypesInput">includedResourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.labelSelectorsInput">labelSelectorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.volumeSnapshotEnabledInput">volumeSnapshotEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.clusterScopedResourcesEnabled">clusterScopedResourcesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedNamespaces">excludedNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedResourceTypes">excludedResourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedNamespaces">includedNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedResourceTypes">includedResourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.labelSelectors">labelSelectors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.volumeSnapshotEnabled">volumeSnapshotEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterScopedResourcesEnabledInput`<sup>Optional</sup> <a name="clusterScopedResourcesEnabledInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.clusterScopedResourcesEnabledInput"></a>

```java
public java.lang.Object getClusterScopedResourcesEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludedNamespacesInput`<sup>Optional</sup> <a name="excludedNamespacesInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedNamespacesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedNamespacesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedResourceTypesInput`<sup>Optional</sup> <a name="excludedResourceTypesInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedResourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedNamespacesInput`<sup>Optional</sup> <a name="includedNamespacesInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedNamespacesInput"></a>

```java
public java.util.List<java.lang.String> getIncludedNamespacesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedResourceTypesInput`<sup>Optional</sup> <a name="includedResourceTypesInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedResourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getIncludedResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelSelectorsInput`<sup>Optional</sup> <a name="labelSelectorsInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.labelSelectorsInput"></a>

```java
public java.util.List<java.lang.String> getLabelSelectorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `volumeSnapshotEnabledInput`<sup>Optional</sup> <a name="volumeSnapshotEnabledInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.volumeSnapshotEnabledInput"></a>

```java
public java.lang.Object getVolumeSnapshotEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterScopedResourcesEnabled`<sup>Required</sup> <a name="clusterScopedResourcesEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.clusterScopedResourcesEnabled"></a>

```java
public java.lang.Object getClusterScopedResourcesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludedNamespaces`<sup>Required</sup> <a name="excludedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedNamespaces"></a>

```java
public java.util.List<java.lang.String> getExcludedNamespaces();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedResourceTypes`<sup>Required</sup> <a name="excludedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedResourceTypes"></a>

```java
public java.util.List<java.lang.String> getExcludedResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedNamespaces`<sup>Required</sup> <a name="includedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedNamespaces"></a>

```java
public java.util.List<java.lang.String> getIncludedNamespaces();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedResourceTypes`<sup>Required</sup> <a name="includedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedResourceTypes"></a>

```java
public java.util.List<java.lang.String> getIncludedResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelSelectors`<sup>Required</sup> <a name="labelSelectors" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.labelSelectors"></a>

```java
public java.util.List<java.lang.String> getLabelSelectors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `volumeSnapshotEnabled`<sup>Required</sup> <a name="volumeSnapshotEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.volumeSnapshotEnabled"></a>

```java
public java.lang.Object getVolumeSnapshotEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.internalValue"></a>

```java
public DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a>

---


### DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference <a name="DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_protection_backup_instance_kubernetes_cluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference;

new DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a>

---



