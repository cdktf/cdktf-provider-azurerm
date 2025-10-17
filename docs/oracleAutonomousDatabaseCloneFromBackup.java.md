# `oracleAutonomousDatabaseCloneFromBackup` Submodule <a name="`oracleAutonomousDatabaseCloneFromBackup` Submodule" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleAutonomousDatabaseCloneFromBackup <a name="OracleAutonomousDatabaseCloneFromBackup" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup azurerm_oracle_autonomous_database_clone_from_backup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_backup.OracleAutonomousDatabaseCloneFromBackup;

OracleAutonomousDatabaseCloneFromBackup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .adminPassword(java.lang.String)
    .autoScalingEnabled(java.lang.Boolean|IResolvable)
    .autoScalingForStorageEnabled(java.lang.Boolean|IResolvable)
    .backupRetentionPeriodInDays(java.lang.Number)
    .characterSet(java.lang.String)
    .cloneType(java.lang.String)
    .computeCount(java.lang.Number)
    .computeModel(java.lang.String)
    .databaseVersion(java.lang.String)
    .databaseWorkload(java.lang.String)
    .dataStorageSizeInTb(java.lang.Number)
    .displayName(java.lang.String)
    .licenseModel(java.lang.String)
    .location(java.lang.String)
    .mtlsConnectionRequired(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
    .nationalCharacterSet(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sourceAutonomousDatabaseId(java.lang.String)
//  .allowedIpAddresses(java.util.List<java.lang.String>)
//  .backupTimestamp(java.lang.String)
//  .customerContacts(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OracleAutonomousDatabaseCloneFromBackupTimeouts)
//  .virtualNetworkId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#admin_password OracleAutonomousDatabaseCloneFromBackup#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.autoScalingEnabled">autoScalingEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#auto_scaling_enabled OracleAutonomousDatabaseCloneFromBackup#auto_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.autoScalingForStorageEnabled">autoScalingForStorageEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromBackup#auto_scaling_for_storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromBackup#backup_retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.characterSet">characterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#character_set OracleAutonomousDatabaseCloneFromBackup#character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.cloneType">cloneType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#clone_type OracleAutonomousDatabaseCloneFromBackup#clone_type}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#compute_count OracleAutonomousDatabaseCloneFromBackup#compute_count}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.computeModel">computeModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#compute_model OracleAutonomousDatabaseCloneFromBackup#compute_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#database_version OracleAutonomousDatabaseCloneFromBackup#database_version}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.databaseWorkload">databaseWorkload</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#database_workload OracleAutonomousDatabaseCloneFromBackup#database_workload}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.dataStorageSizeInTb">dataStorageSizeInTb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromBackup#data_storage_size_in_tb}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#display_name OracleAutonomousDatabaseCloneFromBackup#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#license_model OracleAutonomousDatabaseCloneFromBackup#license_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#location OracleAutonomousDatabaseCloneFromBackup#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#mtls_connection_required OracleAutonomousDatabaseCloneFromBackup#mtls_connection_required}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#name OracleAutonomousDatabaseCloneFromBackup#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.nationalCharacterSet">nationalCharacterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#national_character_set OracleAutonomousDatabaseCloneFromBackup#national_character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#resource_group_name OracleAutonomousDatabaseCloneFromBackup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#source_autonomous_database_id OracleAutonomousDatabaseCloneFromBackup#source_autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.allowedIpAddresses">allowedIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#allowed_ip_addresses OracleAutonomousDatabaseCloneFromBackup#allowed_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.backupTimestamp">backupTimestamp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#backup_timestamp OracleAutonomousDatabaseCloneFromBackup#backup_timestamp}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.customerContacts">customerContacts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#customer_contacts OracleAutonomousDatabaseCloneFromBackup#customer_contacts}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#id OracleAutonomousDatabaseCloneFromBackup#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#subnet_id OracleAutonomousDatabaseCloneFromBackup#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#tags OracleAutonomousDatabaseCloneFromBackup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts">OracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#virtual_network_id OracleAutonomousDatabaseCloneFromBackup#virtual_network_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.adminPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#admin_password OracleAutonomousDatabaseCloneFromBackup#admin_password}.

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.autoScalingEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#auto_scaling_enabled OracleAutonomousDatabaseCloneFromBackup#auto_scaling_enabled}.

---

##### `autoScalingForStorageEnabled`<sup>Required</sup> <a name="autoScalingForStorageEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.autoScalingForStorageEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromBackup#auto_scaling_for_storage_enabled}.

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.backupRetentionPeriodInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromBackup#backup_retention_period_in_days}.

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.characterSet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#character_set OracleAutonomousDatabaseCloneFromBackup#character_set}.

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.cloneType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#clone_type OracleAutonomousDatabaseCloneFromBackup#clone_type}.

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.computeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#compute_count OracleAutonomousDatabaseCloneFromBackup#compute_count}.

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.computeModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#compute_model OracleAutonomousDatabaseCloneFromBackup#compute_model}.

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.databaseVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#database_version OracleAutonomousDatabaseCloneFromBackup#database_version}.

---

##### `databaseWorkload`<sup>Required</sup> <a name="databaseWorkload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.databaseWorkload"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#database_workload OracleAutonomousDatabaseCloneFromBackup#database_workload}.

---

##### `dataStorageSizeInTb`<sup>Required</sup> <a name="dataStorageSizeInTb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.dataStorageSizeInTb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromBackup#data_storage_size_in_tb}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#display_name OracleAutonomousDatabaseCloneFromBackup#display_name}.

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#license_model OracleAutonomousDatabaseCloneFromBackup#license_model}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#location OracleAutonomousDatabaseCloneFromBackup#location}.

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.mtlsConnectionRequired"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#mtls_connection_required OracleAutonomousDatabaseCloneFromBackup#mtls_connection_required}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#name OracleAutonomousDatabaseCloneFromBackup#name}.

---

##### `nationalCharacterSet`<sup>Required</sup> <a name="nationalCharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.nationalCharacterSet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#national_character_set OracleAutonomousDatabaseCloneFromBackup#national_character_set}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#resource_group_name OracleAutonomousDatabaseCloneFromBackup#resource_group_name}.

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.sourceAutonomousDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#source_autonomous_database_id OracleAutonomousDatabaseCloneFromBackup#source_autonomous_database_id}.

---

##### `allowedIpAddresses`<sup>Optional</sup> <a name="allowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.allowedIpAddresses"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#allowed_ip_addresses OracleAutonomousDatabaseCloneFromBackup#allowed_ip_addresses}.

---

##### `backupTimestamp`<sup>Optional</sup> <a name="backupTimestamp" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.backupTimestamp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#backup_timestamp OracleAutonomousDatabaseCloneFromBackup#backup_timestamp}.

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.customerContacts"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#customer_contacts OracleAutonomousDatabaseCloneFromBackup#customer_contacts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#id OracleAutonomousDatabaseCloneFromBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#subnet_id OracleAutonomousDatabaseCloneFromBackup#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#tags OracleAutonomousDatabaseCloneFromBackup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts">OracleAutonomousDatabaseCloneFromBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#timeouts OracleAutonomousDatabaseCloneFromBackup#timeouts}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.virtualNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#virtual_network_id OracleAutonomousDatabaseCloneFromBackup#virtual_network_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetAllowedIpAddresses">resetAllowedIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetBackupTimestamp">resetBackupTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetCustomerContacts">resetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.putTimeouts"></a>

```java
public void putTimeouts(OracleAutonomousDatabaseCloneFromBackupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts">OracleAutonomousDatabaseCloneFromBackupTimeouts</a>

---

##### `resetAllowedIpAddresses` <a name="resetAllowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetAllowedIpAddresses"></a>

```java
public void resetAllowedIpAddresses()
```

##### `resetBackupTimestamp` <a name="resetBackupTimestamp" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetBackupTimestamp"></a>

```java
public void resetBackupTimestamp()
```

##### `resetCustomerContacts` <a name="resetCustomerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetCustomerContacts"></a>

```java
public void resetCustomerContacts()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetId"></a>

```java
public void resetId()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OracleAutonomousDatabaseCloneFromBackup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_backup.OracleAutonomousDatabaseCloneFromBackup;

OracleAutonomousDatabaseCloneFromBackup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_backup.OracleAutonomousDatabaseCloneFromBackup;

OracleAutonomousDatabaseCloneFromBackup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_backup.OracleAutonomousDatabaseCloneFromBackup;

OracleAutonomousDatabaseCloneFromBackup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_backup.OracleAutonomousDatabaseCloneFromBackup;

OracleAutonomousDatabaseCloneFromBackup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OracleAutonomousDatabaseCloneFromBackup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OracleAutonomousDatabaseCloneFromBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OracleAutonomousDatabaseCloneFromBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OracleAutonomousDatabaseCloneFromBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OracleAutonomousDatabaseCloneFromBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference">OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddressesInput">allowedIpAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabledInput">autoScalingEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabledInput">autoScalingForStorageEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDaysInput">backupRetentionPeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupTimestampInput">backupTimestampInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.characterSetInput">characterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.cloneTypeInput">cloneTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeCountInput">computeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeModelInput">computeModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.customerContactsInput">customerContactsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseVersionInput">databaseVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseWorkloadInput">databaseWorkloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTbInput">dataStorageSizeInTbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequiredInput">mtlsConnectionRequiredInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSetInput">nationalCharacterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseIdInput">sourceAutonomousDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts">OracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddresses">allowedIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabled">autoScalingForStorageEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupTimestamp">backupTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.cloneType">cloneType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.customerContacts">customerContacts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseWorkload">databaseWorkload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTb">dataStorageSizeInTb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSet">nationalCharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.timeouts"></a>

```java
public OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference">OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `allowedIpAddressesInput`<sup>Optional</sup> <a name="allowedIpAddressesInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddressesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoScalingEnabledInput`<sup>Optional</sup> <a name="autoScalingEnabledInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoScalingEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `autoScalingForStorageEnabledInput`<sup>Optional</sup> <a name="autoScalingForStorageEnabledInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoScalingForStorageEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `backupRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="backupRetentionPeriodInDaysInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDaysInput"></a>

```java
public java.lang.Number getBackupRetentionPeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `backupTimestampInput`<sup>Optional</sup> <a name="backupTimestampInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupTimestampInput"></a>

```java
public java.lang.String getBackupTimestampInput();
```

- *Type:* java.lang.String

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.characterSetInput"></a>

```java
public java.lang.String getCharacterSetInput();
```

- *Type:* java.lang.String

---

##### `cloneTypeInput`<sup>Optional</sup> <a name="cloneTypeInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.cloneTypeInput"></a>

```java
public java.lang.String getCloneTypeInput();
```

- *Type:* java.lang.String

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeCountInput"></a>

```java
public java.lang.Number getComputeCountInput();
```

- *Type:* java.lang.Number

---

##### `computeModelInput`<sup>Optional</sup> <a name="computeModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeModelInput"></a>

```java
public java.lang.String getComputeModelInput();
```

- *Type:* java.lang.String

---

##### `customerContactsInput`<sup>Optional</sup> <a name="customerContactsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.customerContactsInput"></a>

```java
public java.util.List<java.lang.String> getCustomerContactsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseVersionInput`<sup>Optional</sup> <a name="databaseVersionInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseVersionInput"></a>

```java
public java.lang.String getDatabaseVersionInput();
```

- *Type:* java.lang.String

---

##### `databaseWorkloadInput`<sup>Optional</sup> <a name="databaseWorkloadInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseWorkloadInput"></a>

```java
public java.lang.String getDatabaseWorkloadInput();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeInTbInput`<sup>Optional</sup> <a name="dataStorageSizeInTbInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTbInput"></a>

```java
public java.lang.Number getDataStorageSizeInTbInput();
```

- *Type:* java.lang.Number

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mtlsConnectionRequiredInput`<sup>Optional</sup> <a name="mtlsConnectionRequiredInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getMtlsConnectionRequiredInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nationalCharacterSetInput`<sup>Optional</sup> <a name="nationalCharacterSetInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSetInput"></a>

```java
public java.lang.String getNationalCharacterSetInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="sourceAutonomousDatabaseIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseIdInput"></a>

```java
public java.lang.String getSourceAutonomousDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.timeoutsInput"></a>

```java
public IResolvable|OracleAutonomousDatabaseCloneFromBackupTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts">OracleAutonomousDatabaseCloneFromBackupTimeouts</a>

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `allowedIpAddresses`<sup>Required</sup> <a name="allowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoScalingEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `autoScalingForStorageEnabled`<sup>Required</sup> <a name="autoScalingForStorageEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoScalingForStorageEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDays"></a>

```java
public java.lang.Number getBackupRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `backupTimestamp`<sup>Required</sup> <a name="backupTimestamp" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupTimestamp"></a>

```java
public java.lang.String getBackupTimestamp();
```

- *Type:* java.lang.String

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.cloneType"></a>

```java
public java.lang.String getCloneType();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.customerContacts"></a>

```java
public java.util.List<java.lang.String> getCustomerContacts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

---

##### `databaseWorkload`<sup>Required</sup> <a name="databaseWorkload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseWorkload"></a>

```java
public java.lang.String getDatabaseWorkload();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeInTb`<sup>Required</sup> <a name="dataStorageSizeInTb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTb"></a>

```java
public java.lang.Number getDataStorageSizeInTb();
```

- *Type:* java.lang.Number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequired"></a>

```java
public java.lang.Boolean|IResolvable getMtlsConnectionRequired();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nationalCharacterSet`<sup>Required</sup> <a name="nationalCharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSet"></a>

```java
public java.lang.String getNationalCharacterSet();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseId"></a>

```java
public java.lang.String getSourceAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OracleAutonomousDatabaseCloneFromBackupConfig <a name="OracleAutonomousDatabaseCloneFromBackupConfig" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_backup.OracleAutonomousDatabaseCloneFromBackupConfig;

OracleAutonomousDatabaseCloneFromBackupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .adminPassword(java.lang.String)
    .autoScalingEnabled(java.lang.Boolean|IResolvable)
    .autoScalingForStorageEnabled(java.lang.Boolean|IResolvable)
    .backupRetentionPeriodInDays(java.lang.Number)
    .characterSet(java.lang.String)
    .cloneType(java.lang.String)
    .computeCount(java.lang.Number)
    .computeModel(java.lang.String)
    .databaseVersion(java.lang.String)
    .databaseWorkload(java.lang.String)
    .dataStorageSizeInTb(java.lang.Number)
    .displayName(java.lang.String)
    .licenseModel(java.lang.String)
    .location(java.lang.String)
    .mtlsConnectionRequired(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
    .nationalCharacterSet(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sourceAutonomousDatabaseId(java.lang.String)
//  .allowedIpAddresses(java.util.List<java.lang.String>)
//  .backupTimestamp(java.lang.String)
//  .customerContacts(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OracleAutonomousDatabaseCloneFromBackupTimeouts)
//  .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#admin_password OracleAutonomousDatabaseCloneFromBackup#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#auto_scaling_enabled OracleAutonomousDatabaseCloneFromBackup#auto_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.autoScalingForStorageEnabled">autoScalingForStorageEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromBackup#auto_scaling_for_storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromBackup#backup_retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#character_set OracleAutonomousDatabaseCloneFromBackup#character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.cloneType">cloneType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#clone_type OracleAutonomousDatabaseCloneFromBackup#clone_type}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#compute_count OracleAutonomousDatabaseCloneFromBackup#compute_count}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#compute_model OracleAutonomousDatabaseCloneFromBackup#compute_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#database_version OracleAutonomousDatabaseCloneFromBackup#database_version}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.databaseWorkload">databaseWorkload</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#database_workload OracleAutonomousDatabaseCloneFromBackup#database_workload}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.dataStorageSizeInTb">dataStorageSizeInTb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromBackup#data_storage_size_in_tb}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#display_name OracleAutonomousDatabaseCloneFromBackup#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#license_model OracleAutonomousDatabaseCloneFromBackup#license_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#location OracleAutonomousDatabaseCloneFromBackup#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#mtls_connection_required OracleAutonomousDatabaseCloneFromBackup#mtls_connection_required}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#name OracleAutonomousDatabaseCloneFromBackup#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.nationalCharacterSet">nationalCharacterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#national_character_set OracleAutonomousDatabaseCloneFromBackup#national_character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#resource_group_name OracleAutonomousDatabaseCloneFromBackup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#source_autonomous_database_id OracleAutonomousDatabaseCloneFromBackup#source_autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.allowedIpAddresses">allowedIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#allowed_ip_addresses OracleAutonomousDatabaseCloneFromBackup#allowed_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.backupTimestamp">backupTimestamp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#backup_timestamp OracleAutonomousDatabaseCloneFromBackup#backup_timestamp}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.customerContacts">customerContacts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#customer_contacts OracleAutonomousDatabaseCloneFromBackup#customer_contacts}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#id OracleAutonomousDatabaseCloneFromBackup#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#subnet_id OracleAutonomousDatabaseCloneFromBackup#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#tags OracleAutonomousDatabaseCloneFromBackup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts">OracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#virtual_network_id OracleAutonomousDatabaseCloneFromBackup#virtual_network_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#admin_password OracleAutonomousDatabaseCloneFromBackup#admin_password}.

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.autoScalingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoScalingEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#auto_scaling_enabled OracleAutonomousDatabaseCloneFromBackup#auto_scaling_enabled}.

---

##### `autoScalingForStorageEnabled`<sup>Required</sup> <a name="autoScalingForStorageEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.autoScalingForStorageEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoScalingForStorageEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromBackup#auto_scaling_for_storage_enabled}.

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.backupRetentionPeriodInDays"></a>

```java
public java.lang.Number getBackupRetentionPeriodInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromBackup#backup_retention_period_in_days}.

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#character_set OracleAutonomousDatabaseCloneFromBackup#character_set}.

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.cloneType"></a>

```java
public java.lang.String getCloneType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#clone_type OracleAutonomousDatabaseCloneFromBackup#clone_type}.

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#compute_count OracleAutonomousDatabaseCloneFromBackup#compute_count}.

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#compute_model OracleAutonomousDatabaseCloneFromBackup#compute_model}.

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#database_version OracleAutonomousDatabaseCloneFromBackup#database_version}.

---

##### `databaseWorkload`<sup>Required</sup> <a name="databaseWorkload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.databaseWorkload"></a>

```java
public java.lang.String getDatabaseWorkload();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#database_workload OracleAutonomousDatabaseCloneFromBackup#database_workload}.

---

##### `dataStorageSizeInTb`<sup>Required</sup> <a name="dataStorageSizeInTb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.dataStorageSizeInTb"></a>

```java
public java.lang.Number getDataStorageSizeInTb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromBackup#data_storage_size_in_tb}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#display_name OracleAutonomousDatabaseCloneFromBackup#display_name}.

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#license_model OracleAutonomousDatabaseCloneFromBackup#license_model}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#location OracleAutonomousDatabaseCloneFromBackup#location}.

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.mtlsConnectionRequired"></a>

```java
public java.lang.Boolean|IResolvable getMtlsConnectionRequired();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#mtls_connection_required OracleAutonomousDatabaseCloneFromBackup#mtls_connection_required}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#name OracleAutonomousDatabaseCloneFromBackup#name}.

---

##### `nationalCharacterSet`<sup>Required</sup> <a name="nationalCharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.nationalCharacterSet"></a>

```java
public java.lang.String getNationalCharacterSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#national_character_set OracleAutonomousDatabaseCloneFromBackup#national_character_set}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#resource_group_name OracleAutonomousDatabaseCloneFromBackup#resource_group_name}.

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.sourceAutonomousDatabaseId"></a>

```java
public java.lang.String getSourceAutonomousDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#source_autonomous_database_id OracleAutonomousDatabaseCloneFromBackup#source_autonomous_database_id}.

---

##### `allowedIpAddresses`<sup>Optional</sup> <a name="allowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.allowedIpAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#allowed_ip_addresses OracleAutonomousDatabaseCloneFromBackup#allowed_ip_addresses}.

---

##### `backupTimestamp`<sup>Optional</sup> <a name="backupTimestamp" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.backupTimestamp"></a>

```java
public java.lang.String getBackupTimestamp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#backup_timestamp OracleAutonomousDatabaseCloneFromBackup#backup_timestamp}.

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.customerContacts"></a>

```java
public java.util.List<java.lang.String> getCustomerContacts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#customer_contacts OracleAutonomousDatabaseCloneFromBackup#customer_contacts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#id OracleAutonomousDatabaseCloneFromBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#subnet_id OracleAutonomousDatabaseCloneFromBackup#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#tags OracleAutonomousDatabaseCloneFromBackup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.timeouts"></a>

```java
public OracleAutonomousDatabaseCloneFromBackupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts">OracleAutonomousDatabaseCloneFromBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#timeouts OracleAutonomousDatabaseCloneFromBackup#timeouts}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#virtual_network_id OracleAutonomousDatabaseCloneFromBackup#virtual_network_id}.

---

### OracleAutonomousDatabaseCloneFromBackupTimeouts <a name="OracleAutonomousDatabaseCloneFromBackupTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_backup.OracleAutonomousDatabaseCloneFromBackupTimeouts;

OracleAutonomousDatabaseCloneFromBackupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#create OracleAutonomousDatabaseCloneFromBackup#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#delete OracleAutonomousDatabaseCloneFromBackup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#read OracleAutonomousDatabaseCloneFromBackup#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#create OracleAutonomousDatabaseCloneFromBackup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#delete OracleAutonomousDatabaseCloneFromBackup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#read OracleAutonomousDatabaseCloneFromBackup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference <a name="OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_backup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference;

new OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts">OracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OracleAutonomousDatabaseCloneFromBackupTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts">OracleAutonomousDatabaseCloneFromBackupTimeouts</a>

---



