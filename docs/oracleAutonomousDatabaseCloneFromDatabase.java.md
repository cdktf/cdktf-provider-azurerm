# `oracleAutonomousDatabaseCloneFromDatabase` Submodule <a name="`oracleAutonomousDatabaseCloneFromDatabase` Submodule" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleAutonomousDatabaseCloneFromDatabase <a name="OracleAutonomousDatabaseCloneFromDatabase" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database azurerm_oracle_autonomous_database_clone_from_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_database.OracleAutonomousDatabaseCloneFromDatabase;

OracleAutonomousDatabaseCloneFromDatabase.Builder.create(Construct scope, java.lang.String id)
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
//  .customerContacts(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .refreshableModel(java.lang.String)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OracleAutonomousDatabaseCloneFromDatabaseTimeouts)
//  .virtualNetworkId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#admin_password OracleAutonomousDatabaseCloneFromDatabase#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.autoScalingEnabled">autoScalingEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.autoScalingForStorageEnabled">autoScalingForStorageEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_for_storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromDatabase#backup_retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.characterSet">characterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#character_set OracleAutonomousDatabaseCloneFromDatabase#character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.cloneType">cloneType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#clone_type OracleAutonomousDatabaseCloneFromDatabase#clone_type}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_count OracleAutonomousDatabaseCloneFromDatabase#compute_count}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.computeModel">computeModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_model OracleAutonomousDatabaseCloneFromDatabase#compute_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#database_version OracleAutonomousDatabaseCloneFromDatabase#database_version}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.databaseWorkload">databaseWorkload</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#database_workload OracleAutonomousDatabaseCloneFromDatabase#database_workload}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.dataStorageSizeInTb">dataStorageSizeInTb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromDatabase#data_storage_size_in_tb}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#display_name OracleAutonomousDatabaseCloneFromDatabase#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#license_model OracleAutonomousDatabaseCloneFromDatabase#license_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#location OracleAutonomousDatabaseCloneFromDatabase#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#mtls_connection_required OracleAutonomousDatabaseCloneFromDatabase#mtls_connection_required}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#name OracleAutonomousDatabaseCloneFromDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.nationalCharacterSet">nationalCharacterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#national_character_set OracleAutonomousDatabaseCloneFromDatabase#national_character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#resource_group_name OracleAutonomousDatabaseCloneFromDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#source_autonomous_database_id OracleAutonomousDatabaseCloneFromDatabase#source_autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.allowedIpAddresses">allowedIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#allowed_ip_addresses OracleAutonomousDatabaseCloneFromDatabase#allowed_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.customerContacts">customerContacts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#customer_contacts OracleAutonomousDatabaseCloneFromDatabase#customer_contacts}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#id OracleAutonomousDatabaseCloneFromDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.refreshableModel">refreshableModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#refreshable_model OracleAutonomousDatabaseCloneFromDatabase#refreshable_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#subnet_id OracleAutonomousDatabaseCloneFromDatabase#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#tags OracleAutonomousDatabaseCloneFromDatabase#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#virtual_network_id OracleAutonomousDatabaseCloneFromDatabase#virtual_network_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.adminPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#admin_password OracleAutonomousDatabaseCloneFromDatabase#admin_password}.

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.autoScalingEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_enabled}.

---

##### `autoScalingForStorageEnabled`<sup>Required</sup> <a name="autoScalingForStorageEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.autoScalingForStorageEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_for_storage_enabled}.

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.backupRetentionPeriodInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromDatabase#backup_retention_period_in_days}.

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.characterSet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#character_set OracleAutonomousDatabaseCloneFromDatabase#character_set}.

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.cloneType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#clone_type OracleAutonomousDatabaseCloneFromDatabase#clone_type}.

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.computeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_count OracleAutonomousDatabaseCloneFromDatabase#compute_count}.

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.computeModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_model OracleAutonomousDatabaseCloneFromDatabase#compute_model}.

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.databaseVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#database_version OracleAutonomousDatabaseCloneFromDatabase#database_version}.

---

##### `databaseWorkload`<sup>Required</sup> <a name="databaseWorkload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.databaseWorkload"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#database_workload OracleAutonomousDatabaseCloneFromDatabase#database_workload}.

---

##### `dataStorageSizeInTb`<sup>Required</sup> <a name="dataStorageSizeInTb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.dataStorageSizeInTb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromDatabase#data_storage_size_in_tb}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#display_name OracleAutonomousDatabaseCloneFromDatabase#display_name}.

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#license_model OracleAutonomousDatabaseCloneFromDatabase#license_model}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#location OracleAutonomousDatabaseCloneFromDatabase#location}.

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.mtlsConnectionRequired"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#mtls_connection_required OracleAutonomousDatabaseCloneFromDatabase#mtls_connection_required}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#name OracleAutonomousDatabaseCloneFromDatabase#name}.

---

##### `nationalCharacterSet`<sup>Required</sup> <a name="nationalCharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.nationalCharacterSet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#national_character_set OracleAutonomousDatabaseCloneFromDatabase#national_character_set}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#resource_group_name OracleAutonomousDatabaseCloneFromDatabase#resource_group_name}.

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.sourceAutonomousDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#source_autonomous_database_id OracleAutonomousDatabaseCloneFromDatabase#source_autonomous_database_id}.

---

##### `allowedIpAddresses`<sup>Optional</sup> <a name="allowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.allowedIpAddresses"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#allowed_ip_addresses OracleAutonomousDatabaseCloneFromDatabase#allowed_ip_addresses}.

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.customerContacts"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#customer_contacts OracleAutonomousDatabaseCloneFromDatabase#customer_contacts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#id OracleAutonomousDatabaseCloneFromDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshableModel`<sup>Optional</sup> <a name="refreshableModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.refreshableModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#refreshable_model OracleAutonomousDatabaseCloneFromDatabase#refreshable_model}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#subnet_id OracleAutonomousDatabaseCloneFromDatabase#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#tags OracleAutonomousDatabaseCloneFromDatabase#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#timeouts OracleAutonomousDatabaseCloneFromDatabase#timeouts}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.virtualNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#virtual_network_id OracleAutonomousDatabaseCloneFromDatabase#virtual_network_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetAllowedIpAddresses">resetAllowedIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetCustomerContacts">resetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetRefreshableModel">resetRefreshableModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts"></a>

```java
public void putTimeouts(OracleAutonomousDatabaseCloneFromDatabaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---

##### `resetAllowedIpAddresses` <a name="resetAllowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetAllowedIpAddresses"></a>

```java
public void resetAllowedIpAddresses()
```

##### `resetCustomerContacts` <a name="resetCustomerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetCustomerContacts"></a>

```java
public void resetCustomerContacts()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetRefreshableModel` <a name="resetRefreshableModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetRefreshableModel"></a>

```java
public void resetRefreshableModel()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_database.OracleAutonomousDatabaseCloneFromDatabase;

OracleAutonomousDatabaseCloneFromDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_database.OracleAutonomousDatabaseCloneFromDatabase;

OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_database.OracleAutonomousDatabaseCloneFromDatabase;

OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_database.OracleAutonomousDatabaseCloneFromDatabase;

OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OracleAutonomousDatabaseCloneFromDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OracleAutonomousDatabaseCloneFromDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OracleAutonomousDatabaseCloneFromDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference">OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddressesInput">allowedIpAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabledInput">autoScalingEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabledInput">autoScalingForStorageEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDaysInput">backupRetentionPeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSetInput">characterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneTypeInput">cloneTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCountInput">computeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModelInput">computeModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContactsInput">customerContactsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersionInput">databaseVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkloadInput">databaseWorkloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTbInput">dataStorageSizeInTbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequiredInput">mtlsConnectionRequiredInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSetInput">nationalCharacterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModelInput">refreshableModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseIdInput">sourceAutonomousDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddresses">allowedIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabled">autoScalingForStorageEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneType">cloneType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContacts">customerContacts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkload">databaseWorkload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTb">dataStorageSizeInTb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSet">nationalCharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModel">refreshableModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeouts"></a>

```java
public OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference">OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `allowedIpAddressesInput`<sup>Optional</sup> <a name="allowedIpAddressesInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddressesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoScalingEnabledInput`<sup>Optional</sup> <a name="autoScalingEnabledInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoScalingEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `autoScalingForStorageEnabledInput`<sup>Optional</sup> <a name="autoScalingForStorageEnabledInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoScalingForStorageEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `backupRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="backupRetentionPeriodInDaysInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDaysInput"></a>

```java
public java.lang.Number getBackupRetentionPeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSetInput"></a>

```java
public java.lang.String getCharacterSetInput();
```

- *Type:* java.lang.String

---

##### `cloneTypeInput`<sup>Optional</sup> <a name="cloneTypeInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneTypeInput"></a>

```java
public java.lang.String getCloneTypeInput();
```

- *Type:* java.lang.String

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCountInput"></a>

```java
public java.lang.Number getComputeCountInput();
```

- *Type:* java.lang.Number

---

##### `computeModelInput`<sup>Optional</sup> <a name="computeModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModelInput"></a>

```java
public java.lang.String getComputeModelInput();
```

- *Type:* java.lang.String

---

##### `customerContactsInput`<sup>Optional</sup> <a name="customerContactsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContactsInput"></a>

```java
public java.util.List<java.lang.String> getCustomerContactsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseVersionInput`<sup>Optional</sup> <a name="databaseVersionInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersionInput"></a>

```java
public java.lang.String getDatabaseVersionInput();
```

- *Type:* java.lang.String

---

##### `databaseWorkloadInput`<sup>Optional</sup> <a name="databaseWorkloadInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkloadInput"></a>

```java
public java.lang.String getDatabaseWorkloadInput();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeInTbInput`<sup>Optional</sup> <a name="dataStorageSizeInTbInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTbInput"></a>

```java
public java.lang.Number getDataStorageSizeInTbInput();
```

- *Type:* java.lang.Number

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mtlsConnectionRequiredInput`<sup>Optional</sup> <a name="mtlsConnectionRequiredInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getMtlsConnectionRequiredInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nationalCharacterSetInput`<sup>Optional</sup> <a name="nationalCharacterSetInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSetInput"></a>

```java
public java.lang.String getNationalCharacterSetInput();
```

- *Type:* java.lang.String

---

##### `refreshableModelInput`<sup>Optional</sup> <a name="refreshableModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModelInput"></a>

```java
public java.lang.String getRefreshableModelInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="sourceAutonomousDatabaseIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseIdInput"></a>

```java
public java.lang.String getSourceAutonomousDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeoutsInput"></a>

```java
public IResolvable|OracleAutonomousDatabaseCloneFromDatabaseTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `allowedIpAddresses`<sup>Required</sup> <a name="allowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoScalingEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `autoScalingForStorageEnabled`<sup>Required</sup> <a name="autoScalingForStorageEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoScalingForStorageEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDays"></a>

```java
public java.lang.Number getBackupRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneType"></a>

```java
public java.lang.String getCloneType();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContacts"></a>

```java
public java.util.List<java.lang.String> getCustomerContacts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

---

##### `databaseWorkload`<sup>Required</sup> <a name="databaseWorkload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkload"></a>

```java
public java.lang.String getDatabaseWorkload();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeInTb`<sup>Required</sup> <a name="dataStorageSizeInTb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTb"></a>

```java
public java.lang.Number getDataStorageSizeInTb();
```

- *Type:* java.lang.Number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequired"></a>

```java
public java.lang.Boolean|IResolvable getMtlsConnectionRequired();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nationalCharacterSet`<sup>Required</sup> <a name="nationalCharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSet"></a>

```java
public java.lang.String getNationalCharacterSet();
```

- *Type:* java.lang.String

---

##### `refreshableModel`<sup>Required</sup> <a name="refreshableModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModel"></a>

```java
public java.lang.String getRefreshableModel();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseId"></a>

```java
public java.lang.String getSourceAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OracleAutonomousDatabaseCloneFromDatabaseConfig <a name="OracleAutonomousDatabaseCloneFromDatabaseConfig" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_database.OracleAutonomousDatabaseCloneFromDatabaseConfig;

OracleAutonomousDatabaseCloneFromDatabaseConfig.builder()
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
//  .customerContacts(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .refreshableModel(java.lang.String)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OracleAutonomousDatabaseCloneFromDatabaseTimeouts)
//  .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#admin_password OracleAutonomousDatabaseCloneFromDatabase#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingForStorageEnabled">autoScalingForStorageEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_for_storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromDatabase#backup_retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#character_set OracleAutonomousDatabaseCloneFromDatabase#character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.cloneType">cloneType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#clone_type OracleAutonomousDatabaseCloneFromDatabase#clone_type}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_count OracleAutonomousDatabaseCloneFromDatabase#compute_count}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_model OracleAutonomousDatabaseCloneFromDatabase#compute_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#database_version OracleAutonomousDatabaseCloneFromDatabase#database_version}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseWorkload">databaseWorkload</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#database_workload OracleAutonomousDatabaseCloneFromDatabase#database_workload}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dataStorageSizeInTb">dataStorageSizeInTb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromDatabase#data_storage_size_in_tb}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#display_name OracleAutonomousDatabaseCloneFromDatabase#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#license_model OracleAutonomousDatabaseCloneFromDatabase#license_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#location OracleAutonomousDatabaseCloneFromDatabase#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#mtls_connection_required OracleAutonomousDatabaseCloneFromDatabase#mtls_connection_required}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#name OracleAutonomousDatabaseCloneFromDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.nationalCharacterSet">nationalCharacterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#national_character_set OracleAutonomousDatabaseCloneFromDatabase#national_character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#resource_group_name OracleAutonomousDatabaseCloneFromDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#source_autonomous_database_id OracleAutonomousDatabaseCloneFromDatabase#source_autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.allowedIpAddresses">allowedIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#allowed_ip_addresses OracleAutonomousDatabaseCloneFromDatabase#allowed_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.customerContacts">customerContacts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#customer_contacts OracleAutonomousDatabaseCloneFromDatabase#customer_contacts}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#id OracleAutonomousDatabaseCloneFromDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.refreshableModel">refreshableModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#refreshable_model OracleAutonomousDatabaseCloneFromDatabase#refreshable_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#subnet_id OracleAutonomousDatabaseCloneFromDatabase#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#tags OracleAutonomousDatabaseCloneFromDatabase#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#virtual_network_id OracleAutonomousDatabaseCloneFromDatabase#virtual_network_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#admin_password OracleAutonomousDatabaseCloneFromDatabase#admin_password}.

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoScalingEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_enabled}.

---

##### `autoScalingForStorageEnabled`<sup>Required</sup> <a name="autoScalingForStorageEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingForStorageEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoScalingForStorageEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_for_storage_enabled}.

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.backupRetentionPeriodInDays"></a>

```java
public java.lang.Number getBackupRetentionPeriodInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromDatabase#backup_retention_period_in_days}.

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#character_set OracleAutonomousDatabaseCloneFromDatabase#character_set}.

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.cloneType"></a>

```java
public java.lang.String getCloneType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#clone_type OracleAutonomousDatabaseCloneFromDatabase#clone_type}.

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_count OracleAutonomousDatabaseCloneFromDatabase#compute_count}.

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_model OracleAutonomousDatabaseCloneFromDatabase#compute_model}.

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#database_version OracleAutonomousDatabaseCloneFromDatabase#database_version}.

---

##### `databaseWorkload`<sup>Required</sup> <a name="databaseWorkload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseWorkload"></a>

```java
public java.lang.String getDatabaseWorkload();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#database_workload OracleAutonomousDatabaseCloneFromDatabase#database_workload}.

---

##### `dataStorageSizeInTb`<sup>Required</sup> <a name="dataStorageSizeInTb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dataStorageSizeInTb"></a>

```java
public java.lang.Number getDataStorageSizeInTb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromDatabase#data_storage_size_in_tb}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#display_name OracleAutonomousDatabaseCloneFromDatabase#display_name}.

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#license_model OracleAutonomousDatabaseCloneFromDatabase#license_model}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#location OracleAutonomousDatabaseCloneFromDatabase#location}.

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.mtlsConnectionRequired"></a>

```java
public java.lang.Boolean|IResolvable getMtlsConnectionRequired();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#mtls_connection_required OracleAutonomousDatabaseCloneFromDatabase#mtls_connection_required}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#name OracleAutonomousDatabaseCloneFromDatabase#name}.

---

##### `nationalCharacterSet`<sup>Required</sup> <a name="nationalCharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.nationalCharacterSet"></a>

```java
public java.lang.String getNationalCharacterSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#national_character_set OracleAutonomousDatabaseCloneFromDatabase#national_character_set}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#resource_group_name OracleAutonomousDatabaseCloneFromDatabase#resource_group_name}.

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.sourceAutonomousDatabaseId"></a>

```java
public java.lang.String getSourceAutonomousDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#source_autonomous_database_id OracleAutonomousDatabaseCloneFromDatabase#source_autonomous_database_id}.

---

##### `allowedIpAddresses`<sup>Optional</sup> <a name="allowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.allowedIpAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#allowed_ip_addresses OracleAutonomousDatabaseCloneFromDatabase#allowed_ip_addresses}.

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.customerContacts"></a>

```java
public java.util.List<java.lang.String> getCustomerContacts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#customer_contacts OracleAutonomousDatabaseCloneFromDatabase#customer_contacts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#id OracleAutonomousDatabaseCloneFromDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshableModel`<sup>Optional</sup> <a name="refreshableModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.refreshableModel"></a>

```java
public java.lang.String getRefreshableModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#refreshable_model OracleAutonomousDatabaseCloneFromDatabase#refreshable_model}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#subnet_id OracleAutonomousDatabaseCloneFromDatabase#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#tags OracleAutonomousDatabaseCloneFromDatabase#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.timeouts"></a>

```java
public OracleAutonomousDatabaseCloneFromDatabaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#timeouts OracleAutonomousDatabaseCloneFromDatabase#timeouts}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#virtual_network_id OracleAutonomousDatabaseCloneFromDatabase#virtual_network_id}.

---

### OracleAutonomousDatabaseCloneFromDatabaseTimeouts <a name="OracleAutonomousDatabaseCloneFromDatabaseTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_database.OracleAutonomousDatabaseCloneFromDatabaseTimeouts;

OracleAutonomousDatabaseCloneFromDatabaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#create OracleAutonomousDatabaseCloneFromDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#delete OracleAutonomousDatabaseCloneFromDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#read OracleAutonomousDatabaseCloneFromDatabase#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#create OracleAutonomousDatabaseCloneFromDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#delete OracleAutonomousDatabaseCloneFromDatabase#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#read OracleAutonomousDatabaseCloneFromDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference <a name="OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_autonomous_database_clone_from_database.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference;

new OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OracleAutonomousDatabaseCloneFromDatabaseTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---



