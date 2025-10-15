# `oracleAutonomousDatabaseCloneFromDatabase` Submodule <a name="`oracleAutonomousDatabaseCloneFromDatabase` Submodule" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleAutonomousDatabaseCloneFromDatabase <a name="OracleAutonomousDatabaseCloneFromDatabase" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database azurerm_oracle_autonomous_database_clone_from_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_clone_from_database

oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  admin_password: str,
  auto_scaling_enabled: bool | IResolvable,
  auto_scaling_for_storage_enabled: bool | IResolvable,
  backup_retention_period_in_days: typing.Union[int, float],
  character_set: str,
  clone_type: str,
  compute_count: typing.Union[int, float],
  compute_model: str,
  database_version: str,
  database_workload: str,
  data_storage_size_in_tb: typing.Union[int, float],
  display_name: str,
  license_model: str,
  location: str,
  mtls_connection_required: bool | IResolvable,
  name: str,
  national_character_set: str,
  resource_group_name: str,
  source_autonomous_database_id: str,
  allowed_ip_addresses: typing.List[str] = None,
  customer_contacts: typing.List[str] = None,
  id: str = None,
  refreshable_model: str = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: OracleAutonomousDatabaseCloneFromDatabaseTimeouts = None,
  virtual_network_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#admin_password OracleAutonomousDatabaseCloneFromDatabase#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.autoScalingEnabled">auto_scaling_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.autoScalingForStorageEnabled">auto_scaling_for_storage_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_for_storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromDatabase#backup_retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.characterSet">character_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#character_set OracleAutonomousDatabaseCloneFromDatabase#character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.cloneType">clone_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#clone_type OracleAutonomousDatabaseCloneFromDatabase#clone_type}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_count OracleAutonomousDatabaseCloneFromDatabase#compute_count}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.computeModel">compute_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_model OracleAutonomousDatabaseCloneFromDatabase#compute_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.databaseVersion">database_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_version OracleAutonomousDatabaseCloneFromDatabase#database_version}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.databaseWorkload">database_workload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_workload OracleAutonomousDatabaseCloneFromDatabase#database_workload}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.dataStorageSizeInTb">data_storage_size_in_tb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromDatabase#data_storage_size_in_tb}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#display_name OracleAutonomousDatabaseCloneFromDatabase#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#license_model OracleAutonomousDatabaseCloneFromDatabase#license_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#location OracleAutonomousDatabaseCloneFromDatabase#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.mtlsConnectionRequired">mtls_connection_required</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#mtls_connection_required OracleAutonomousDatabaseCloneFromDatabase#mtls_connection_required}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#name OracleAutonomousDatabaseCloneFromDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.nationalCharacterSet">national_character_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#national_character_set OracleAutonomousDatabaseCloneFromDatabase#national_character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#resource_group_name OracleAutonomousDatabaseCloneFromDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.sourceAutonomousDatabaseId">source_autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#source_autonomous_database_id OracleAutonomousDatabaseCloneFromDatabase#source_autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.allowedIpAddresses">allowed_ip_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#allowed_ip_addresses OracleAutonomousDatabaseCloneFromDatabase#allowed_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.customerContacts">customer_contacts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#customer_contacts OracleAutonomousDatabaseCloneFromDatabase#customer_contacts}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#id OracleAutonomousDatabaseCloneFromDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.refreshableModel">refreshable_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#refreshable_model OracleAutonomousDatabaseCloneFromDatabase#refreshable_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#subnet_id OracleAutonomousDatabaseCloneFromDatabase#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#tags OracleAutonomousDatabaseCloneFromDatabase#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#virtual_network_id OracleAutonomousDatabaseCloneFromDatabase#virtual_network_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.adminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#admin_password OracleAutonomousDatabaseCloneFromDatabase#admin_password}.

---

##### `auto_scaling_enabled`<sup>Required</sup> <a name="auto_scaling_enabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.autoScalingEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_enabled}.

---

##### `auto_scaling_for_storage_enabled`<sup>Required</sup> <a name="auto_scaling_for_storage_enabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.autoScalingForStorageEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_for_storage_enabled}.

---

##### `backup_retention_period_in_days`<sup>Required</sup> <a name="backup_retention_period_in_days" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.backupRetentionPeriodInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromDatabase#backup_retention_period_in_days}.

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.characterSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#character_set OracleAutonomousDatabaseCloneFromDatabase#character_set}.

---

##### `clone_type`<sup>Required</sup> <a name="clone_type" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.cloneType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#clone_type OracleAutonomousDatabaseCloneFromDatabase#clone_type}.

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.computeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_count OracleAutonomousDatabaseCloneFromDatabase#compute_count}.

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.computeModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_model OracleAutonomousDatabaseCloneFromDatabase#compute_model}.

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.databaseVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_version OracleAutonomousDatabaseCloneFromDatabase#database_version}.

---

##### `database_workload`<sup>Required</sup> <a name="database_workload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.databaseWorkload"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_workload OracleAutonomousDatabaseCloneFromDatabase#database_workload}.

---

##### `data_storage_size_in_tb`<sup>Required</sup> <a name="data_storage_size_in_tb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.dataStorageSizeInTb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromDatabase#data_storage_size_in_tb}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#display_name OracleAutonomousDatabaseCloneFromDatabase#display_name}.

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.licenseModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#license_model OracleAutonomousDatabaseCloneFromDatabase#license_model}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#location OracleAutonomousDatabaseCloneFromDatabase#location}.

---

##### `mtls_connection_required`<sup>Required</sup> <a name="mtls_connection_required" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.mtlsConnectionRequired"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#mtls_connection_required OracleAutonomousDatabaseCloneFromDatabase#mtls_connection_required}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#name OracleAutonomousDatabaseCloneFromDatabase#name}.

---

##### `national_character_set`<sup>Required</sup> <a name="national_character_set" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.nationalCharacterSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#national_character_set OracleAutonomousDatabaseCloneFromDatabase#national_character_set}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#resource_group_name OracleAutonomousDatabaseCloneFromDatabase#resource_group_name}.

---

##### `source_autonomous_database_id`<sup>Required</sup> <a name="source_autonomous_database_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.sourceAutonomousDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#source_autonomous_database_id OracleAutonomousDatabaseCloneFromDatabase#source_autonomous_database_id}.

---

##### `allowed_ip_addresses`<sup>Optional</sup> <a name="allowed_ip_addresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.allowedIpAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#allowed_ip_addresses OracleAutonomousDatabaseCloneFromDatabase#allowed_ip_addresses}.

---

##### `customer_contacts`<sup>Optional</sup> <a name="customer_contacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.customerContacts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#customer_contacts OracleAutonomousDatabaseCloneFromDatabase#customer_contacts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#id OracleAutonomousDatabaseCloneFromDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshable_model`<sup>Optional</sup> <a name="refreshable_model" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.refreshableModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#refreshable_model OracleAutonomousDatabaseCloneFromDatabase#refreshable_model}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#subnet_id OracleAutonomousDatabaseCloneFromDatabase#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#tags OracleAutonomousDatabaseCloneFromDatabase#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#timeouts OracleAutonomousDatabaseCloneFromDatabase#timeouts}

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#virtual_network_id OracleAutonomousDatabaseCloneFromDatabase#virtual_network_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetAllowedIpAddresses">reset_allowed_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetCustomerContacts">reset_customer_contacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetRefreshableModel">reset_refreshable_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#create OracleAutonomousDatabaseCloneFromDatabase#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#delete OracleAutonomousDatabaseCloneFromDatabase#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#read OracleAutonomousDatabaseCloneFromDatabase#read}.

---

##### `reset_allowed_ip_addresses` <a name="reset_allowed_ip_addresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetAllowedIpAddresses"></a>

```python
def reset_allowed_ip_addresses() -> None
```

##### `reset_customer_contacts` <a name="reset_customer_contacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetCustomerContacts"></a>

```python
def reset_customer_contacts() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_refreshable_model` <a name="reset_refreshable_model" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetRefreshableModel"></a>

```python
def reset_refreshable_model() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_clone_from_database

oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_clone_from_database

oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_clone_from_database

oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_clone_from_database

oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OracleAutonomousDatabaseCloneFromDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OracleAutonomousDatabaseCloneFromDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OracleAutonomousDatabaseCloneFromDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference">OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddressesInput">allowed_ip_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabledInput">auto_scaling_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabledInput">auto_scaling_for_storage_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDaysInput">backup_retention_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSetInput">character_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneTypeInput">clone_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCountInput">compute_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModelInput">compute_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContactsInput">customer_contacts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersionInput">database_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkloadInput">database_workload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTbInput">data_storage_size_in_tb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequiredInput">mtls_connection_required_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSetInput">national_character_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModelInput">refreshable_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseIdInput">source_autonomous_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddresses">allowed_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabled">auto_scaling_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabled">auto_scaling_for_storage_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneType">clone_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContacts">customer_contacts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkload">database_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTb">data_storage_size_in_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequired">mtls_connection_required</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSet">national_character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModel">refreshable_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseId">source_autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeouts"></a>

```python
timeouts: OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference">OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference</a>

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `allowed_ip_addresses_input`<sup>Optional</sup> <a name="allowed_ip_addresses_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddressesInput"></a>

```python
allowed_ip_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_scaling_enabled_input`<sup>Optional</sup> <a name="auto_scaling_enabled_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabledInput"></a>

```python
auto_scaling_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `auto_scaling_for_storage_enabled_input`<sup>Optional</sup> <a name="auto_scaling_for_storage_enabled_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabledInput"></a>

```python
auto_scaling_for_storage_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `backup_retention_period_in_days_input`<sup>Optional</sup> <a name="backup_retention_period_in_days_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDaysInput"></a>

```python
backup_retention_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set_input`<sup>Optional</sup> <a name="character_set_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSetInput"></a>

```python
character_set_input: str
```

- *Type:* str

---

##### `clone_type_input`<sup>Optional</sup> <a name="clone_type_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneTypeInput"></a>

```python
clone_type_input: str
```

- *Type:* str

---

##### `compute_count_input`<sup>Optional</sup> <a name="compute_count_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCountInput"></a>

```python
compute_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_model_input`<sup>Optional</sup> <a name="compute_model_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModelInput"></a>

```python
compute_model_input: str
```

- *Type:* str

---

##### `customer_contacts_input`<sup>Optional</sup> <a name="customer_contacts_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContactsInput"></a>

```python
customer_contacts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_version_input`<sup>Optional</sup> <a name="database_version_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersionInput"></a>

```python
database_version_input: str
```

- *Type:* str

---

##### `database_workload_input`<sup>Optional</sup> <a name="database_workload_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkloadInput"></a>

```python
database_workload_input: str
```

- *Type:* str

---

##### `data_storage_size_in_tb_input`<sup>Optional</sup> <a name="data_storage_size_in_tb_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTbInput"></a>

```python
data_storage_size_in_tb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mtls_connection_required_input`<sup>Optional</sup> <a name="mtls_connection_required_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequiredInput"></a>

```python
mtls_connection_required_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `national_character_set_input`<sup>Optional</sup> <a name="national_character_set_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSetInput"></a>

```python
national_character_set_input: str
```

- *Type:* str

---

##### `refreshable_model_input`<sup>Optional</sup> <a name="refreshable_model_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModelInput"></a>

```python
refreshable_model_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `source_autonomous_database_id_input`<sup>Optional</sup> <a name="source_autonomous_database_id_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseIdInput"></a>

```python
source_autonomous_database_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | OracleAutonomousDatabaseCloneFromDatabaseTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `allowed_ip_addresses`<sup>Required</sup> <a name="allowed_ip_addresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddresses"></a>

```python
allowed_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_scaling_enabled`<sup>Required</sup> <a name="auto_scaling_enabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabled"></a>

```python
auto_scaling_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `auto_scaling_for_storage_enabled`<sup>Required</sup> <a name="auto_scaling_for_storage_enabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabled"></a>

```python
auto_scaling_for_storage_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `backup_retention_period_in_days`<sup>Required</sup> <a name="backup_retention_period_in_days" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDays"></a>

```python
backup_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `clone_type`<sup>Required</sup> <a name="clone_type" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `customer_contacts`<sup>Required</sup> <a name="customer_contacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContacts"></a>

```python
customer_contacts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `database_workload`<sup>Required</sup> <a name="database_workload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkload"></a>

```python
database_workload: str
```

- *Type:* str

---

##### `data_storage_size_in_tb`<sup>Required</sup> <a name="data_storage_size_in_tb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTb"></a>

```python
data_storage_size_in_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mtls_connection_required`<sup>Required</sup> <a name="mtls_connection_required" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequired"></a>

```python
mtls_connection_required: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `national_character_set`<sup>Required</sup> <a name="national_character_set" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSet"></a>

```python
national_character_set: str
```

- *Type:* str

---

##### `refreshable_model`<sup>Required</sup> <a name="refreshable_model" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModel"></a>

```python
refreshable_model: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `source_autonomous_database_id`<sup>Required</sup> <a name="source_autonomous_database_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseId"></a>

```python
source_autonomous_database_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OracleAutonomousDatabaseCloneFromDatabaseConfig <a name="OracleAutonomousDatabaseCloneFromDatabaseConfig" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_clone_from_database

oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  admin_password: str,
  auto_scaling_enabled: bool | IResolvable,
  auto_scaling_for_storage_enabled: bool | IResolvable,
  backup_retention_period_in_days: typing.Union[int, float],
  character_set: str,
  clone_type: str,
  compute_count: typing.Union[int, float],
  compute_model: str,
  database_version: str,
  database_workload: str,
  data_storage_size_in_tb: typing.Union[int, float],
  display_name: str,
  license_model: str,
  location: str,
  mtls_connection_required: bool | IResolvable,
  name: str,
  national_character_set: str,
  resource_group_name: str,
  source_autonomous_database_id: str,
  allowed_ip_addresses: typing.List[str] = None,
  customer_contacts: typing.List[str] = None,
  id: str = None,
  refreshable_model: str = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: OracleAutonomousDatabaseCloneFromDatabaseTimeouts = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#admin_password OracleAutonomousDatabaseCloneFromDatabase#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingEnabled">auto_scaling_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingForStorageEnabled">auto_scaling_for_storage_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_for_storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromDatabase#backup_retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.characterSet">character_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#character_set OracleAutonomousDatabaseCloneFromDatabase#character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.cloneType">clone_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#clone_type OracleAutonomousDatabaseCloneFromDatabase#clone_type}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_count OracleAutonomousDatabaseCloneFromDatabase#compute_count}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeModel">compute_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_model OracleAutonomousDatabaseCloneFromDatabase#compute_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseVersion">database_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_version OracleAutonomousDatabaseCloneFromDatabase#database_version}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseWorkload">database_workload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_workload OracleAutonomousDatabaseCloneFromDatabase#database_workload}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dataStorageSizeInTb">data_storage_size_in_tb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromDatabase#data_storage_size_in_tb}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#display_name OracleAutonomousDatabaseCloneFromDatabase#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#license_model OracleAutonomousDatabaseCloneFromDatabase#license_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#location OracleAutonomousDatabaseCloneFromDatabase#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.mtlsConnectionRequired">mtls_connection_required</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#mtls_connection_required OracleAutonomousDatabaseCloneFromDatabase#mtls_connection_required}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#name OracleAutonomousDatabaseCloneFromDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.nationalCharacterSet">national_character_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#national_character_set OracleAutonomousDatabaseCloneFromDatabase#national_character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#resource_group_name OracleAutonomousDatabaseCloneFromDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.sourceAutonomousDatabaseId">source_autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#source_autonomous_database_id OracleAutonomousDatabaseCloneFromDatabase#source_autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.allowedIpAddresses">allowed_ip_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#allowed_ip_addresses OracleAutonomousDatabaseCloneFromDatabase#allowed_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.customerContacts">customer_contacts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#customer_contacts OracleAutonomousDatabaseCloneFromDatabase#customer_contacts}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#id OracleAutonomousDatabaseCloneFromDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.refreshableModel">refreshable_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#refreshable_model OracleAutonomousDatabaseCloneFromDatabase#refreshable_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#subnet_id OracleAutonomousDatabaseCloneFromDatabase#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#tags OracleAutonomousDatabaseCloneFromDatabase#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#virtual_network_id OracleAutonomousDatabaseCloneFromDatabase#virtual_network_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#admin_password OracleAutonomousDatabaseCloneFromDatabase#admin_password}.

---

##### `auto_scaling_enabled`<sup>Required</sup> <a name="auto_scaling_enabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingEnabled"></a>

```python
auto_scaling_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_enabled}.

---

##### `auto_scaling_for_storage_enabled`<sup>Required</sup> <a name="auto_scaling_for_storage_enabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingForStorageEnabled"></a>

```python
auto_scaling_for_storage_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_for_storage_enabled}.

---

##### `backup_retention_period_in_days`<sup>Required</sup> <a name="backup_retention_period_in_days" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.backupRetentionPeriodInDays"></a>

```python
backup_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromDatabase#backup_retention_period_in_days}.

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#character_set OracleAutonomousDatabaseCloneFromDatabase#character_set}.

---

##### `clone_type`<sup>Required</sup> <a name="clone_type" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#clone_type OracleAutonomousDatabaseCloneFromDatabase#clone_type}.

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_count OracleAutonomousDatabaseCloneFromDatabase#compute_count}.

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_model OracleAutonomousDatabaseCloneFromDatabase#compute_model}.

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_version OracleAutonomousDatabaseCloneFromDatabase#database_version}.

---

##### `database_workload`<sup>Required</sup> <a name="database_workload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseWorkload"></a>

```python
database_workload: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_workload OracleAutonomousDatabaseCloneFromDatabase#database_workload}.

---

##### `data_storage_size_in_tb`<sup>Required</sup> <a name="data_storage_size_in_tb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dataStorageSizeInTb"></a>

```python
data_storage_size_in_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromDatabase#data_storage_size_in_tb}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#display_name OracleAutonomousDatabaseCloneFromDatabase#display_name}.

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#license_model OracleAutonomousDatabaseCloneFromDatabase#license_model}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#location OracleAutonomousDatabaseCloneFromDatabase#location}.

---

##### `mtls_connection_required`<sup>Required</sup> <a name="mtls_connection_required" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.mtlsConnectionRequired"></a>

```python
mtls_connection_required: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#mtls_connection_required OracleAutonomousDatabaseCloneFromDatabase#mtls_connection_required}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#name OracleAutonomousDatabaseCloneFromDatabase#name}.

---

##### `national_character_set`<sup>Required</sup> <a name="national_character_set" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.nationalCharacterSet"></a>

```python
national_character_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#national_character_set OracleAutonomousDatabaseCloneFromDatabase#national_character_set}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#resource_group_name OracleAutonomousDatabaseCloneFromDatabase#resource_group_name}.

---

##### `source_autonomous_database_id`<sup>Required</sup> <a name="source_autonomous_database_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.sourceAutonomousDatabaseId"></a>

```python
source_autonomous_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#source_autonomous_database_id OracleAutonomousDatabaseCloneFromDatabase#source_autonomous_database_id}.

---

##### `allowed_ip_addresses`<sup>Optional</sup> <a name="allowed_ip_addresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.allowedIpAddresses"></a>

```python
allowed_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#allowed_ip_addresses OracleAutonomousDatabaseCloneFromDatabase#allowed_ip_addresses}.

---

##### `customer_contacts`<sup>Optional</sup> <a name="customer_contacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.customerContacts"></a>

```python
customer_contacts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#customer_contacts OracleAutonomousDatabaseCloneFromDatabase#customer_contacts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#id OracleAutonomousDatabaseCloneFromDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshable_model`<sup>Optional</sup> <a name="refreshable_model" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.refreshableModel"></a>

```python
refreshable_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#refreshable_model OracleAutonomousDatabaseCloneFromDatabase#refreshable_model}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#subnet_id OracleAutonomousDatabaseCloneFromDatabase#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#tags OracleAutonomousDatabaseCloneFromDatabase#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.timeouts"></a>

```python
timeouts: OracleAutonomousDatabaseCloneFromDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#timeouts OracleAutonomousDatabaseCloneFromDatabase#timeouts}

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#virtual_network_id OracleAutonomousDatabaseCloneFromDatabase#virtual_network_id}.

---

### OracleAutonomousDatabaseCloneFromDatabaseTimeouts <a name="OracleAutonomousDatabaseCloneFromDatabaseTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_clone_from_database

oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#create OracleAutonomousDatabaseCloneFromDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#delete OracleAutonomousDatabaseCloneFromDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#read OracleAutonomousDatabaseCloneFromDatabase#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#create OracleAutonomousDatabaseCloneFromDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#delete OracleAutonomousDatabaseCloneFromDatabase#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#read OracleAutonomousDatabaseCloneFromDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference <a name="OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import oracle_autonomous_database_clone_from_database

oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OracleAutonomousDatabaseCloneFromDatabaseTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---



