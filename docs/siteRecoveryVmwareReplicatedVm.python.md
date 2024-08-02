# `siteRecoveryVmwareReplicatedVm` Submodule <a name="`siteRecoveryVmwareReplicatedVm` Submodule" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryVmwareReplicatedVm <a name="SiteRecoveryVmwareReplicatedVm" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm azurerm_site_recovery_vmware_replicated_vm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_vmware_replicated_vm

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  appliance_name: str,
  name: str,
  physical_server_credential_name: str,
  recovery_replication_policy_id: str,
  recovery_vault_id: str,
  source_vm_name: str,
  target_resource_group_id: str,
  target_vm_name: str,
  default_log_storage_account_id: str = None,
  default_recovery_disk_type: str = None,
  default_target_disk_encryption_set_id: str = None,
  id: str = None,
  license_type: str = None,
  managed_disk: typing.Union[IResolvable, typing.List[SiteRecoveryVmwareReplicatedVmManagedDisk]] = None,
  multi_vm_group_name: str = None,
  network_interface: typing.Union[IResolvable, typing.List[SiteRecoveryVmwareReplicatedVmNetworkInterface]] = None,
  target_availability_set_id: str = None,
  target_boot_diagnostics_storage_account_id: str = None,
  target_network_id: str = None,
  target_proximity_placement_group_id: str = None,
  target_vm_size: str = None,
  target_zone: str = None,
  test_network_id: str = None,
  timeouts: SiteRecoveryVmwareReplicatedVmTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.applianceName">appliance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#appliance_name SiteRecoveryVmwareReplicatedVm#appliance_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#name SiteRecoveryVmwareReplicatedVm#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.physicalServerCredentialName">physical_server_credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#physical_server_credential_name SiteRecoveryVmwareReplicatedVm#physical_server_credential_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.recoveryReplicationPolicyId">recovery_replication_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_replication_policy_id SiteRecoveryVmwareReplicatedVm#recovery_replication_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.recoveryVaultId">recovery_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_vault_id SiteRecoveryVmwareReplicatedVm#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.sourceVmName">source_vm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#source_vm_name SiteRecoveryVmwareReplicatedVm#source_vm_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetResourceGroupId">target_resource_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_resource_group_id SiteRecoveryVmwareReplicatedVm#target_resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetVmName">target_vm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_name SiteRecoveryVmwareReplicatedVm#target_vm_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.defaultLogStorageAccountId">default_log_storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#default_log_storage_account_id SiteRecoveryVmwareReplicatedVm#default_log_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.defaultRecoveryDiskType">default_recovery_disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#default_recovery_disk_type SiteRecoveryVmwareReplicatedVm#default_recovery_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.defaultTargetDiskEncryptionSetId">default_target_disk_encryption_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#default_target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#default_target_disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#id SiteRecoveryVmwareReplicatedVm#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#license_type SiteRecoveryVmwareReplicatedVm#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.managedDisk">managed_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>]]</code> | managed_disk block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.multiVmGroupName">multi_vm_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#multi_vm_group_name SiteRecoveryVmwareReplicatedVm#multi_vm_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetAvailabilitySetId">target_availability_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_availability_set_id SiteRecoveryVmwareReplicatedVm#target_availability_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetBootDiagnosticsStorageAccountId">target_boot_diagnostics_storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_boot_diagnostics_storage_account_id SiteRecoveryVmwareReplicatedVm#target_boot_diagnostics_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetNetworkId">target_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_network_id SiteRecoveryVmwareReplicatedVm#target_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetProximityPlacementGroupId">target_proximity_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_proximity_placement_group_id SiteRecoveryVmwareReplicatedVm#target_proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetVmSize">target_vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_size SiteRecoveryVmwareReplicatedVm#target_vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetZone">target_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_zone SiteRecoveryVmwareReplicatedVm#target_zone}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.testNetworkId">test_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#test_network_id SiteRecoveryVmwareReplicatedVm#test_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `appliance_name`<sup>Required</sup> <a name="appliance_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.applianceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#appliance_name SiteRecoveryVmwareReplicatedVm#appliance_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#name SiteRecoveryVmwareReplicatedVm#name}.

---

##### `physical_server_credential_name`<sup>Required</sup> <a name="physical_server_credential_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.physicalServerCredentialName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#physical_server_credential_name SiteRecoveryVmwareReplicatedVm#physical_server_credential_name}.

---

##### `recovery_replication_policy_id`<sup>Required</sup> <a name="recovery_replication_policy_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.recoveryReplicationPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_replication_policy_id SiteRecoveryVmwareReplicatedVm#recovery_replication_policy_id}.

---

##### `recovery_vault_id`<sup>Required</sup> <a name="recovery_vault_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.recoveryVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_vault_id SiteRecoveryVmwareReplicatedVm#recovery_vault_id}.

---

##### `source_vm_name`<sup>Required</sup> <a name="source_vm_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.sourceVmName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#source_vm_name SiteRecoveryVmwareReplicatedVm#source_vm_name}.

---

##### `target_resource_group_id`<sup>Required</sup> <a name="target_resource_group_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetResourceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_resource_group_id SiteRecoveryVmwareReplicatedVm#target_resource_group_id}.

---

##### `target_vm_name`<sup>Required</sup> <a name="target_vm_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetVmName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_name SiteRecoveryVmwareReplicatedVm#target_vm_name}.

---

##### `default_log_storage_account_id`<sup>Optional</sup> <a name="default_log_storage_account_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.defaultLogStorageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#default_log_storage_account_id SiteRecoveryVmwareReplicatedVm#default_log_storage_account_id}.

---

##### `default_recovery_disk_type`<sup>Optional</sup> <a name="default_recovery_disk_type" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.defaultRecoveryDiskType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#default_recovery_disk_type SiteRecoveryVmwareReplicatedVm#default_recovery_disk_type}.

---

##### `default_target_disk_encryption_set_id`<sup>Optional</sup> <a name="default_target_disk_encryption_set_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.defaultTargetDiskEncryptionSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#default_target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#default_target_disk_encryption_set_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#id SiteRecoveryVmwareReplicatedVm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.licenseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#license_type SiteRecoveryVmwareReplicatedVm#license_type}.

---

##### `managed_disk`<sup>Optional</sup> <a name="managed_disk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.managedDisk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>]]

managed_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#managed_disk SiteRecoveryVmwareReplicatedVm#managed_disk}

---

##### `multi_vm_group_name`<sup>Optional</sup> <a name="multi_vm_group_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.multiVmGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#multi_vm_group_name SiteRecoveryVmwareReplicatedVm#multi_vm_group_name}.

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.networkInterface"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#network_interface SiteRecoveryVmwareReplicatedVm#network_interface}

---

##### `target_availability_set_id`<sup>Optional</sup> <a name="target_availability_set_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetAvailabilitySetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_availability_set_id SiteRecoveryVmwareReplicatedVm#target_availability_set_id}.

---

##### `target_boot_diagnostics_storage_account_id`<sup>Optional</sup> <a name="target_boot_diagnostics_storage_account_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetBootDiagnosticsStorageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_boot_diagnostics_storage_account_id SiteRecoveryVmwareReplicatedVm#target_boot_diagnostics_storage_account_id}.

---

##### `target_network_id`<sup>Optional</sup> <a name="target_network_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_network_id SiteRecoveryVmwareReplicatedVm#target_network_id}.

---

##### `target_proximity_placement_group_id`<sup>Optional</sup> <a name="target_proximity_placement_group_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetProximityPlacementGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_proximity_placement_group_id SiteRecoveryVmwareReplicatedVm#target_proximity_placement_group_id}.

---

##### `target_vm_size`<sup>Optional</sup> <a name="target_vm_size" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetVmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_size SiteRecoveryVmwareReplicatedVm#target_vm_size}.

---

##### `target_zone`<sup>Optional</sup> <a name="target_zone" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.targetZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_zone SiteRecoveryVmwareReplicatedVm#target_zone}.

---

##### `test_network_id`<sup>Optional</sup> <a name="test_network_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.testNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#test_network_id SiteRecoveryVmwareReplicatedVm#test_network_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#timeouts SiteRecoveryVmwareReplicatedVm#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putManagedDisk">put_managed_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putNetworkInterface">put_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultLogStorageAccountId">reset_default_log_storage_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultRecoveryDiskType">reset_default_recovery_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultTargetDiskEncryptionSetId">reset_default_target_disk_encryption_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetLicenseType">reset_license_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetManagedDisk">reset_managed_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetMultiVmGroupName">reset_multi_vm_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetNetworkInterface">reset_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetAvailabilitySetId">reset_target_availability_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetBootDiagnosticsStorageAccountId">reset_target_boot_diagnostics_storage_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetNetworkId">reset_target_network_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetProximityPlacementGroupId">reset_target_proximity_placement_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetVmSize">reset_target_vm_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetZone">reset_target_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTestNetworkId">reset_test_network_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_managed_disk` <a name="put_managed_disk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putManagedDisk"></a>

```python
def put_managed_disk(
  value: typing.Union[IResolvable, typing.List[SiteRecoveryVmwareReplicatedVmManagedDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putManagedDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>]]

---

##### `put_network_interface` <a name="put_network_interface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putNetworkInterface"></a>

```python
def put_network_interface(
  value: typing.Union[IResolvable, typing.List[SiteRecoveryVmwareReplicatedVmNetworkInterface]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putNetworkInterface.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#create SiteRecoveryVmwareReplicatedVm#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#delete SiteRecoveryVmwareReplicatedVm#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#read SiteRecoveryVmwareReplicatedVm#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#update SiteRecoveryVmwareReplicatedVm#update}.

---

##### `reset_default_log_storage_account_id` <a name="reset_default_log_storage_account_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultLogStorageAccountId"></a>

```python
def reset_default_log_storage_account_id() -> None
```

##### `reset_default_recovery_disk_type` <a name="reset_default_recovery_disk_type" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultRecoveryDiskType"></a>

```python
def reset_default_recovery_disk_type() -> None
```

##### `reset_default_target_disk_encryption_set_id` <a name="reset_default_target_disk_encryption_set_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetDefaultTargetDiskEncryptionSetId"></a>

```python
def reset_default_target_disk_encryption_set_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_license_type` <a name="reset_license_type" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetLicenseType"></a>

```python
def reset_license_type() -> None
```

##### `reset_managed_disk` <a name="reset_managed_disk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetManagedDisk"></a>

```python
def reset_managed_disk() -> None
```

##### `reset_multi_vm_group_name` <a name="reset_multi_vm_group_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetMultiVmGroupName"></a>

```python
def reset_multi_vm_group_name() -> None
```

##### `reset_network_interface` <a name="reset_network_interface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetNetworkInterface"></a>

```python
def reset_network_interface() -> None
```

##### `reset_target_availability_set_id` <a name="reset_target_availability_set_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetAvailabilitySetId"></a>

```python
def reset_target_availability_set_id() -> None
```

##### `reset_target_boot_diagnostics_storage_account_id` <a name="reset_target_boot_diagnostics_storage_account_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetBootDiagnosticsStorageAccountId"></a>

```python
def reset_target_boot_diagnostics_storage_account_id() -> None
```

##### `reset_target_network_id` <a name="reset_target_network_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetNetworkId"></a>

```python
def reset_target_network_id() -> None
```

##### `reset_target_proximity_placement_group_id` <a name="reset_target_proximity_placement_group_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetProximityPlacementGroupId"></a>

```python
def reset_target_proximity_placement_group_id() -> None
```

##### `reset_target_vm_size` <a name="reset_target_vm_size" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetVmSize"></a>

```python
def reset_target_vm_size() -> None
```

##### `reset_target_zone` <a name="reset_target_zone" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTargetZone"></a>

```python
def reset_target_zone() -> None
```

##### `reset_test_network_id` <a name="reset_test_network_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTestNetworkId"></a>

```python
def reset_test_network_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SiteRecoveryVmwareReplicatedVm resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_vmware_replicated_vm

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_vmware_replicated_vm

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_vmware_replicated_vm

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_vmware_replicated_vm

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SiteRecoveryVmwareReplicatedVm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SiteRecoveryVmwareReplicatedVm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SiteRecoveryVmwareReplicatedVm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SiteRecoveryVmwareReplicatedVm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.managedDisk">managed_disk</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList">SiteRecoveryVmwareReplicatedVmManagedDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList">SiteRecoveryVmwareReplicatedVmNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference">SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.applianceNameInput">appliance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultLogStorageAccountIdInput">default_log_storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultRecoveryDiskTypeInput">default_recovery_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultTargetDiskEncryptionSetIdInput">default_target_disk_encryption_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.licenseTypeInput">license_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.managedDiskInput">managed_disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.multiVmGroupNameInput">multi_vm_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.networkInterfaceInput">network_interface_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.physicalServerCredentialNameInput">physical_server_credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryReplicationPolicyIdInput">recovery_replication_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryVaultIdInput">recovery_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.sourceVmNameInput">source_vm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetAvailabilitySetIdInput">target_availability_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetBootDiagnosticsStorageAccountIdInput">target_boot_diagnostics_storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetNetworkIdInput">target_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetProximityPlacementGroupIdInput">target_proximity_placement_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetResourceGroupIdInput">target_resource_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmNameInput">target_vm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmSizeInput">target_vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetZoneInput">target_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.testNetworkIdInput">test_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.applianceName">appliance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultLogStorageAccountId">default_log_storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultRecoveryDiskType">default_recovery_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultTargetDiskEncryptionSetId">default_target_disk_encryption_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.multiVmGroupName">multi_vm_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.physicalServerCredentialName">physical_server_credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryReplicationPolicyId">recovery_replication_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryVaultId">recovery_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.sourceVmName">source_vm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetAvailabilitySetId">target_availability_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetBootDiagnosticsStorageAccountId">target_boot_diagnostics_storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetNetworkId">target_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetProximityPlacementGroupId">target_proximity_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetResourceGroupId">target_resource_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmName">target_vm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmSize">target_vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetZone">target_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.testNetworkId">test_network_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_disk`<sup>Required</sup> <a name="managed_disk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.managedDisk"></a>

```python
managed_disk: SiteRecoveryVmwareReplicatedVmManagedDiskList
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList">SiteRecoveryVmwareReplicatedVmManagedDiskList</a>

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.networkInterface"></a>

```python
network_interface: SiteRecoveryVmwareReplicatedVmNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList">SiteRecoveryVmwareReplicatedVmNetworkInterfaceList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.timeouts"></a>

```python
timeouts: SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference">SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference</a>

---

##### `appliance_name_input`<sup>Optional</sup> <a name="appliance_name_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.applianceNameInput"></a>

```python
appliance_name_input: str
```

- *Type:* str

---

##### `default_log_storage_account_id_input`<sup>Optional</sup> <a name="default_log_storage_account_id_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultLogStorageAccountIdInput"></a>

```python
default_log_storage_account_id_input: str
```

- *Type:* str

---

##### `default_recovery_disk_type_input`<sup>Optional</sup> <a name="default_recovery_disk_type_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultRecoveryDiskTypeInput"></a>

```python
default_recovery_disk_type_input: str
```

- *Type:* str

---

##### `default_target_disk_encryption_set_id_input`<sup>Optional</sup> <a name="default_target_disk_encryption_set_id_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultTargetDiskEncryptionSetIdInput"></a>

```python
default_target_disk_encryption_set_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_type_input`<sup>Optional</sup> <a name="license_type_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.licenseTypeInput"></a>

```python
license_type_input: str
```

- *Type:* str

---

##### `managed_disk_input`<sup>Optional</sup> <a name="managed_disk_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.managedDiskInput"></a>

```python
managed_disk_input: typing.Union[IResolvable, typing.List[SiteRecoveryVmwareReplicatedVmManagedDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>]]

---

##### `multi_vm_group_name_input`<sup>Optional</sup> <a name="multi_vm_group_name_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.multiVmGroupNameInput"></a>

```python
multi_vm_group_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_interface_input`<sup>Optional</sup> <a name="network_interface_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.networkInterfaceInput"></a>

```python
network_interface_input: typing.Union[IResolvable, typing.List[SiteRecoveryVmwareReplicatedVmNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>]]

---

##### `physical_server_credential_name_input`<sup>Optional</sup> <a name="physical_server_credential_name_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.physicalServerCredentialNameInput"></a>

```python
physical_server_credential_name_input: str
```

- *Type:* str

---

##### `recovery_replication_policy_id_input`<sup>Optional</sup> <a name="recovery_replication_policy_id_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryReplicationPolicyIdInput"></a>

```python
recovery_replication_policy_id_input: str
```

- *Type:* str

---

##### `recovery_vault_id_input`<sup>Optional</sup> <a name="recovery_vault_id_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryVaultIdInput"></a>

```python
recovery_vault_id_input: str
```

- *Type:* str

---

##### `source_vm_name_input`<sup>Optional</sup> <a name="source_vm_name_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.sourceVmNameInput"></a>

```python
source_vm_name_input: str
```

- *Type:* str

---

##### `target_availability_set_id_input`<sup>Optional</sup> <a name="target_availability_set_id_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetAvailabilitySetIdInput"></a>

```python
target_availability_set_id_input: str
```

- *Type:* str

---

##### `target_boot_diagnostics_storage_account_id_input`<sup>Optional</sup> <a name="target_boot_diagnostics_storage_account_id_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetBootDiagnosticsStorageAccountIdInput"></a>

```python
target_boot_diagnostics_storage_account_id_input: str
```

- *Type:* str

---

##### `target_network_id_input`<sup>Optional</sup> <a name="target_network_id_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetNetworkIdInput"></a>

```python
target_network_id_input: str
```

- *Type:* str

---

##### `target_proximity_placement_group_id_input`<sup>Optional</sup> <a name="target_proximity_placement_group_id_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetProximityPlacementGroupIdInput"></a>

```python
target_proximity_placement_group_id_input: str
```

- *Type:* str

---

##### `target_resource_group_id_input`<sup>Optional</sup> <a name="target_resource_group_id_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetResourceGroupIdInput"></a>

```python
target_resource_group_id_input: str
```

- *Type:* str

---

##### `target_vm_name_input`<sup>Optional</sup> <a name="target_vm_name_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmNameInput"></a>

```python
target_vm_name_input: str
```

- *Type:* str

---

##### `target_vm_size_input`<sup>Optional</sup> <a name="target_vm_size_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmSizeInput"></a>

```python
target_vm_size_input: str
```

- *Type:* str

---

##### `target_zone_input`<sup>Optional</sup> <a name="target_zone_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetZoneInput"></a>

```python
target_zone_input: str
```

- *Type:* str

---

##### `test_network_id_input`<sup>Optional</sup> <a name="test_network_id_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.testNetworkIdInput"></a>

```python
test_network_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SiteRecoveryVmwareReplicatedVmTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a>]

---

##### `appliance_name`<sup>Required</sup> <a name="appliance_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.applianceName"></a>

```python
appliance_name: str
```

- *Type:* str

---

##### `default_log_storage_account_id`<sup>Required</sup> <a name="default_log_storage_account_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultLogStorageAccountId"></a>

```python
default_log_storage_account_id: str
```

- *Type:* str

---

##### `default_recovery_disk_type`<sup>Required</sup> <a name="default_recovery_disk_type" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultRecoveryDiskType"></a>

```python
default_recovery_disk_type: str
```

- *Type:* str

---

##### `default_target_disk_encryption_set_id`<sup>Required</sup> <a name="default_target_disk_encryption_set_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.defaultTargetDiskEncryptionSetId"></a>

```python
default_target_disk_encryption_set_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `multi_vm_group_name`<sup>Required</sup> <a name="multi_vm_group_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.multiVmGroupName"></a>

```python
multi_vm_group_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `physical_server_credential_name`<sup>Required</sup> <a name="physical_server_credential_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.physicalServerCredentialName"></a>

```python
physical_server_credential_name: str
```

- *Type:* str

---

##### `recovery_replication_policy_id`<sup>Required</sup> <a name="recovery_replication_policy_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryReplicationPolicyId"></a>

```python
recovery_replication_policy_id: str
```

- *Type:* str

---

##### `recovery_vault_id`<sup>Required</sup> <a name="recovery_vault_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.recoveryVaultId"></a>

```python
recovery_vault_id: str
```

- *Type:* str

---

##### `source_vm_name`<sup>Required</sup> <a name="source_vm_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.sourceVmName"></a>

```python
source_vm_name: str
```

- *Type:* str

---

##### `target_availability_set_id`<sup>Required</sup> <a name="target_availability_set_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetAvailabilitySetId"></a>

```python
target_availability_set_id: str
```

- *Type:* str

---

##### `target_boot_diagnostics_storage_account_id`<sup>Required</sup> <a name="target_boot_diagnostics_storage_account_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetBootDiagnosticsStorageAccountId"></a>

```python
target_boot_diagnostics_storage_account_id: str
```

- *Type:* str

---

##### `target_network_id`<sup>Required</sup> <a name="target_network_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetNetworkId"></a>

```python
target_network_id: str
```

- *Type:* str

---

##### `target_proximity_placement_group_id`<sup>Required</sup> <a name="target_proximity_placement_group_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetProximityPlacementGroupId"></a>

```python
target_proximity_placement_group_id: str
```

- *Type:* str

---

##### `target_resource_group_id`<sup>Required</sup> <a name="target_resource_group_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetResourceGroupId"></a>

```python
target_resource_group_id: str
```

- *Type:* str

---

##### `target_vm_name`<sup>Required</sup> <a name="target_vm_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmName"></a>

```python
target_vm_name: str
```

- *Type:* str

---

##### `target_vm_size`<sup>Required</sup> <a name="target_vm_size" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetVmSize"></a>

```python
target_vm_size: str
```

- *Type:* str

---

##### `target_zone`<sup>Required</sup> <a name="target_zone" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.targetZone"></a>

```python
target_zone: str
```

- *Type:* str

---

##### `test_network_id`<sup>Required</sup> <a name="test_network_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.testNetworkId"></a>

```python
test_network_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryVmwareReplicatedVmConfig <a name="SiteRecoveryVmwareReplicatedVmConfig" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_vmware_replicated_vm

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  appliance_name: str,
  name: str,
  physical_server_credential_name: str,
  recovery_replication_policy_id: str,
  recovery_vault_id: str,
  source_vm_name: str,
  target_resource_group_id: str,
  target_vm_name: str,
  default_log_storage_account_id: str = None,
  default_recovery_disk_type: str = None,
  default_target_disk_encryption_set_id: str = None,
  id: str = None,
  license_type: str = None,
  managed_disk: typing.Union[IResolvable, typing.List[SiteRecoveryVmwareReplicatedVmManagedDisk]] = None,
  multi_vm_group_name: str = None,
  network_interface: typing.Union[IResolvable, typing.List[SiteRecoveryVmwareReplicatedVmNetworkInterface]] = None,
  target_availability_set_id: str = None,
  target_boot_diagnostics_storage_account_id: str = None,
  target_network_id: str = None,
  target_proximity_placement_group_id: str = None,
  target_vm_size: str = None,
  target_zone: str = None,
  test_network_id: str = None,
  timeouts: SiteRecoveryVmwareReplicatedVmTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.applianceName">appliance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#appliance_name SiteRecoveryVmwareReplicatedVm#appliance_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#name SiteRecoveryVmwareReplicatedVm#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.physicalServerCredentialName">physical_server_credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#physical_server_credential_name SiteRecoveryVmwareReplicatedVm#physical_server_credential_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.recoveryReplicationPolicyId">recovery_replication_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_replication_policy_id SiteRecoveryVmwareReplicatedVm#recovery_replication_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.recoveryVaultId">recovery_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_vault_id SiteRecoveryVmwareReplicatedVm#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.sourceVmName">source_vm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#source_vm_name SiteRecoveryVmwareReplicatedVm#source_vm_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetResourceGroupId">target_resource_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_resource_group_id SiteRecoveryVmwareReplicatedVm#target_resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetVmName">target_vm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_name SiteRecoveryVmwareReplicatedVm#target_vm_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultLogStorageAccountId">default_log_storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#default_log_storage_account_id SiteRecoveryVmwareReplicatedVm#default_log_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultRecoveryDiskType">default_recovery_disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#default_recovery_disk_type SiteRecoveryVmwareReplicatedVm#default_recovery_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultTargetDiskEncryptionSetId">default_target_disk_encryption_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#default_target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#default_target_disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#id SiteRecoveryVmwareReplicatedVm#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#license_type SiteRecoveryVmwareReplicatedVm#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.managedDisk">managed_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>]]</code> | managed_disk block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.multiVmGroupName">multi_vm_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#multi_vm_group_name SiteRecoveryVmwareReplicatedVm#multi_vm_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetAvailabilitySetId">target_availability_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_availability_set_id SiteRecoveryVmwareReplicatedVm#target_availability_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetBootDiagnosticsStorageAccountId">target_boot_diagnostics_storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_boot_diagnostics_storage_account_id SiteRecoveryVmwareReplicatedVm#target_boot_diagnostics_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetNetworkId">target_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_network_id SiteRecoveryVmwareReplicatedVm#target_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetProximityPlacementGroupId">target_proximity_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_proximity_placement_group_id SiteRecoveryVmwareReplicatedVm#target_proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetVmSize">target_vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_size SiteRecoveryVmwareReplicatedVm#target_vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetZone">target_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_zone SiteRecoveryVmwareReplicatedVm#target_zone}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.testNetworkId">test_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#test_network_id SiteRecoveryVmwareReplicatedVm#test_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `appliance_name`<sup>Required</sup> <a name="appliance_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.applianceName"></a>

```python
appliance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#appliance_name SiteRecoveryVmwareReplicatedVm#appliance_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#name SiteRecoveryVmwareReplicatedVm#name}.

---

##### `physical_server_credential_name`<sup>Required</sup> <a name="physical_server_credential_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.physicalServerCredentialName"></a>

```python
physical_server_credential_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#physical_server_credential_name SiteRecoveryVmwareReplicatedVm#physical_server_credential_name}.

---

##### `recovery_replication_policy_id`<sup>Required</sup> <a name="recovery_replication_policy_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.recoveryReplicationPolicyId"></a>

```python
recovery_replication_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_replication_policy_id SiteRecoveryVmwareReplicatedVm#recovery_replication_policy_id}.

---

##### `recovery_vault_id`<sup>Required</sup> <a name="recovery_vault_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.recoveryVaultId"></a>

```python
recovery_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#recovery_vault_id SiteRecoveryVmwareReplicatedVm#recovery_vault_id}.

---

##### `source_vm_name`<sup>Required</sup> <a name="source_vm_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.sourceVmName"></a>

```python
source_vm_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#source_vm_name SiteRecoveryVmwareReplicatedVm#source_vm_name}.

---

##### `target_resource_group_id`<sup>Required</sup> <a name="target_resource_group_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetResourceGroupId"></a>

```python
target_resource_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_resource_group_id SiteRecoveryVmwareReplicatedVm#target_resource_group_id}.

---

##### `target_vm_name`<sup>Required</sup> <a name="target_vm_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetVmName"></a>

```python
target_vm_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_name SiteRecoveryVmwareReplicatedVm#target_vm_name}.

---

##### `default_log_storage_account_id`<sup>Optional</sup> <a name="default_log_storage_account_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultLogStorageAccountId"></a>

```python
default_log_storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#default_log_storage_account_id SiteRecoveryVmwareReplicatedVm#default_log_storage_account_id}.

---

##### `default_recovery_disk_type`<sup>Optional</sup> <a name="default_recovery_disk_type" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultRecoveryDiskType"></a>

```python
default_recovery_disk_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#default_recovery_disk_type SiteRecoveryVmwareReplicatedVm#default_recovery_disk_type}.

---

##### `default_target_disk_encryption_set_id`<sup>Optional</sup> <a name="default_target_disk_encryption_set_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.defaultTargetDiskEncryptionSetId"></a>

```python
default_target_disk_encryption_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#default_target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#default_target_disk_encryption_set_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#id SiteRecoveryVmwareReplicatedVm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#license_type SiteRecoveryVmwareReplicatedVm#license_type}.

---

##### `managed_disk`<sup>Optional</sup> <a name="managed_disk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.managedDisk"></a>

```python
managed_disk: typing.Union[IResolvable, typing.List[SiteRecoveryVmwareReplicatedVmManagedDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>]]

managed_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#managed_disk SiteRecoveryVmwareReplicatedVm#managed_disk}

---

##### `multi_vm_group_name`<sup>Optional</sup> <a name="multi_vm_group_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.multiVmGroupName"></a>

```python
multi_vm_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#multi_vm_group_name SiteRecoveryVmwareReplicatedVm#multi_vm_group_name}.

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.networkInterface"></a>

```python
network_interface: typing.Union[IResolvable, typing.List[SiteRecoveryVmwareReplicatedVmNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#network_interface SiteRecoveryVmwareReplicatedVm#network_interface}

---

##### `target_availability_set_id`<sup>Optional</sup> <a name="target_availability_set_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetAvailabilitySetId"></a>

```python
target_availability_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_availability_set_id SiteRecoveryVmwareReplicatedVm#target_availability_set_id}.

---

##### `target_boot_diagnostics_storage_account_id`<sup>Optional</sup> <a name="target_boot_diagnostics_storage_account_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetBootDiagnosticsStorageAccountId"></a>

```python
target_boot_diagnostics_storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_boot_diagnostics_storage_account_id SiteRecoveryVmwareReplicatedVm#target_boot_diagnostics_storage_account_id}.

---

##### `target_network_id`<sup>Optional</sup> <a name="target_network_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetNetworkId"></a>

```python
target_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_network_id SiteRecoveryVmwareReplicatedVm#target_network_id}.

---

##### `target_proximity_placement_group_id`<sup>Optional</sup> <a name="target_proximity_placement_group_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetProximityPlacementGroupId"></a>

```python
target_proximity_placement_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_proximity_placement_group_id SiteRecoveryVmwareReplicatedVm#target_proximity_placement_group_id}.

---

##### `target_vm_size`<sup>Optional</sup> <a name="target_vm_size" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetVmSize"></a>

```python
target_vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_vm_size SiteRecoveryVmwareReplicatedVm#target_vm_size}.

---

##### `target_zone`<sup>Optional</sup> <a name="target_zone" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.targetZone"></a>

```python
target_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_zone SiteRecoveryVmwareReplicatedVm#target_zone}.

---

##### `test_network_id`<sup>Optional</sup> <a name="test_network_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.testNetworkId"></a>

```python
test_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#test_network_id SiteRecoveryVmwareReplicatedVm#test_network_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmConfig.property.timeouts"></a>

```python
timeouts: SiteRecoveryVmwareReplicatedVmTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#timeouts SiteRecoveryVmwareReplicatedVm#timeouts}

---

### SiteRecoveryVmwareReplicatedVmManagedDisk <a name="SiteRecoveryVmwareReplicatedVmManagedDisk" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_vmware_replicated_vm

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk(
  disk_id: str,
  target_disk_type: str,
  log_storage_account_id: str = None,
  target_disk_encryption_set_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.diskId">disk_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#disk_id SiteRecoveryVmwareReplicatedVm#disk_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.targetDiskType">target_disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_disk_type SiteRecoveryVmwareReplicatedVm#target_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.logStorageAccountId">log_storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#log_storage_account_id SiteRecoveryVmwareReplicatedVm#log_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.targetDiskEncryptionSetId">target_disk_encryption_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#target_disk_encryption_set_id}. |

---

##### `disk_id`<sup>Required</sup> <a name="disk_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.diskId"></a>

```python
disk_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#disk_id SiteRecoveryVmwareReplicatedVm#disk_id}.

---

##### `target_disk_type`<sup>Required</sup> <a name="target_disk_type" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.targetDiskType"></a>

```python
target_disk_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_disk_type SiteRecoveryVmwareReplicatedVm#target_disk_type}.

---

##### `log_storage_account_id`<sup>Optional</sup> <a name="log_storage_account_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.logStorageAccountId"></a>

```python
log_storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#log_storage_account_id SiteRecoveryVmwareReplicatedVm#log_storage_account_id}.

---

##### `target_disk_encryption_set_id`<sup>Optional</sup> <a name="target_disk_encryption_set_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk.property.targetDiskEncryptionSetId"></a>

```python
target_disk_encryption_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_disk_encryption_set_id SiteRecoveryVmwareReplicatedVm#target_disk_encryption_set_id}.

---

### SiteRecoveryVmwareReplicatedVmNetworkInterface <a name="SiteRecoveryVmwareReplicatedVmNetworkInterface" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_vmware_replicated_vm

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface(
  is_primary: typing.Union[bool, IResolvable],
  source_mac_address: str,
  target_static_ip: str = None,
  target_subnet_name: str = None,
  test_subnet_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.isPrimary">is_primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#is_primary SiteRecoveryVmwareReplicatedVm#is_primary}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.sourceMacAddress">source_mac_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#source_mac_address SiteRecoveryVmwareReplicatedVm#source_mac_address}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.targetStaticIp">target_static_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_static_ip SiteRecoveryVmwareReplicatedVm#target_static_ip}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.targetSubnetName">target_subnet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_subnet_name SiteRecoveryVmwareReplicatedVm#target_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.testSubnetName">test_subnet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#test_subnet_name SiteRecoveryVmwareReplicatedVm#test_subnet_name}. |

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.isPrimary"></a>

```python
is_primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#is_primary SiteRecoveryVmwareReplicatedVm#is_primary}.

---

##### `source_mac_address`<sup>Required</sup> <a name="source_mac_address" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.sourceMacAddress"></a>

```python
source_mac_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#source_mac_address SiteRecoveryVmwareReplicatedVm#source_mac_address}.

---

##### `target_static_ip`<sup>Optional</sup> <a name="target_static_ip" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.targetStaticIp"></a>

```python
target_static_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_static_ip SiteRecoveryVmwareReplicatedVm#target_static_ip}.

---

##### `target_subnet_name`<sup>Optional</sup> <a name="target_subnet_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.targetSubnetName"></a>

```python
target_subnet_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#target_subnet_name SiteRecoveryVmwareReplicatedVm#target_subnet_name}.

---

##### `test_subnet_name`<sup>Optional</sup> <a name="test_subnet_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface.property.testSubnetName"></a>

```python
test_subnet_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#test_subnet_name SiteRecoveryVmwareReplicatedVm#test_subnet_name}.

---

### SiteRecoveryVmwareReplicatedVmTimeouts <a name="SiteRecoveryVmwareReplicatedVmTimeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_vmware_replicated_vm

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#create SiteRecoveryVmwareReplicatedVm#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#delete SiteRecoveryVmwareReplicatedVm#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#read SiteRecoveryVmwareReplicatedVm#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#update SiteRecoveryVmwareReplicatedVm#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#create SiteRecoveryVmwareReplicatedVm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#delete SiteRecoveryVmwareReplicatedVm#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#read SiteRecoveryVmwareReplicatedVm#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/site_recovery_vmware_replicated_vm#update SiteRecoveryVmwareReplicatedVm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryVmwareReplicatedVmManagedDiskList <a name="SiteRecoveryVmwareReplicatedVmManagedDiskList" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_vmware_replicated_vm

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SiteRecoveryVmwareReplicatedVmManagedDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>]]

---


### SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference <a name="SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_vmware_replicated_vm

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resetLogStorageAccountId">reset_log_storage_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resetTargetDiskEncryptionSetId">reset_target_disk_encryption_set_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_storage_account_id` <a name="reset_log_storage_account_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resetLogStorageAccountId"></a>

```python
def reset_log_storage_account_id() -> None
```

##### `reset_target_disk_encryption_set_id` <a name="reset_target_disk_encryption_set_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.resetTargetDiskEncryptionSetId"></a>

```python
def reset_target_disk_encryption_set_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.diskIdInput">disk_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.logStorageAccountIdInput">log_storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetIdInput">target_disk_encryption_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskTypeInput">target_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.diskId">disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.logStorageAccountId">log_storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetId">target_disk_encryption_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskType">target_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_id_input`<sup>Optional</sup> <a name="disk_id_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.diskIdInput"></a>

```python
disk_id_input: str
```

- *Type:* str

---

##### `log_storage_account_id_input`<sup>Optional</sup> <a name="log_storage_account_id_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.logStorageAccountIdInput"></a>

```python
log_storage_account_id_input: str
```

- *Type:* str

---

##### `target_disk_encryption_set_id_input`<sup>Optional</sup> <a name="target_disk_encryption_set_id_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetIdInput"></a>

```python
target_disk_encryption_set_id_input: str
```

- *Type:* str

---

##### `target_disk_type_input`<sup>Optional</sup> <a name="target_disk_type_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskTypeInput"></a>

```python
target_disk_type_input: str
```

- *Type:* str

---

##### `disk_id`<sup>Required</sup> <a name="disk_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.diskId"></a>

```python
disk_id: str
```

- *Type:* str

---

##### `log_storage_account_id`<sup>Required</sup> <a name="log_storage_account_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.logStorageAccountId"></a>

```python
log_storage_account_id: str
```

- *Type:* str

---

##### `target_disk_encryption_set_id`<sup>Required</sup> <a name="target_disk_encryption_set_id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskEncryptionSetId"></a>

```python
target_disk_encryption_set_id: str
```

- *Type:* str

---

##### `target_disk_type`<sup>Required</sup> <a name="target_disk_type" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.targetDiskType"></a>

```python
target_disk_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SiteRecoveryVmwareReplicatedVmManagedDisk]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmManagedDisk">SiteRecoveryVmwareReplicatedVmManagedDisk</a>]

---


### SiteRecoveryVmwareReplicatedVmNetworkInterfaceList <a name="SiteRecoveryVmwareReplicatedVmNetworkInterfaceList" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_vmware_replicated_vm

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SiteRecoveryVmwareReplicatedVmNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>]]

---


### SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference <a name="SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_vmware_replicated_vm

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTargetStaticIp">reset_target_static_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTargetSubnetName">reset_target_subnet_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTestSubnetName">reset_test_subnet_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_static_ip` <a name="reset_target_static_ip" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTargetStaticIp"></a>

```python
def reset_target_static_ip() -> None
```

##### `reset_target_subnet_name` <a name="reset_target_subnet_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTargetSubnetName"></a>

```python
def reset_target_subnet_name() -> None
```

##### `reset_test_subnet_name` <a name="reset_test_subnet_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.resetTestSubnetName"></a>

```python
def reset_test_subnet_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.isPrimaryInput">is_primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.sourceMacAddressInput">source_mac_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIpInput">target_static_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetNameInput">target_subnet_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.testSubnetNameInput">test_subnet_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.isPrimary">is_primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.sourceMacAddress">source_mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIp">target_static_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetName">target_subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.testSubnetName">test_subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_primary_input`<sup>Optional</sup> <a name="is_primary_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.isPrimaryInput"></a>

```python
is_primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_mac_address_input`<sup>Optional</sup> <a name="source_mac_address_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.sourceMacAddressInput"></a>

```python
source_mac_address_input: str
```

- *Type:* str

---

##### `target_static_ip_input`<sup>Optional</sup> <a name="target_static_ip_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIpInput"></a>

```python
target_static_ip_input: str
```

- *Type:* str

---

##### `target_subnet_name_input`<sup>Optional</sup> <a name="target_subnet_name_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetNameInput"></a>

```python
target_subnet_name_input: str
```

- *Type:* str

---

##### `test_subnet_name_input`<sup>Optional</sup> <a name="test_subnet_name_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.testSubnetNameInput"></a>

```python
test_subnet_name_input: str
```

- *Type:* str

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.isPrimary"></a>

```python
is_primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_mac_address`<sup>Required</sup> <a name="source_mac_address" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.sourceMacAddress"></a>

```python
source_mac_address: str
```

- *Type:* str

---

##### `target_static_ip`<sup>Required</sup> <a name="target_static_ip" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetStaticIp"></a>

```python
target_static_ip: str
```

- *Type:* str

---

##### `target_subnet_name`<sup>Required</sup> <a name="target_subnet_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.targetSubnetName"></a>

```python
target_subnet_name: str
```

- *Type:* str

---

##### `test_subnet_name`<sup>Required</sup> <a name="test_subnet_name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.testSubnetName"></a>

```python
test_subnet_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SiteRecoveryVmwareReplicatedVmNetworkInterface]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmNetworkInterface">SiteRecoveryVmwareReplicatedVmNetworkInterface</a>]

---


### SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference <a name="SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_vmware_replicated_vm

siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SiteRecoveryVmwareReplicatedVmTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicatedVm.SiteRecoveryVmwareReplicatedVmTimeouts">SiteRecoveryVmwareReplicatedVmTimeouts</a>]

---



